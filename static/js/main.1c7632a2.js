/*! For license information please see main.1c7632a2.js.LICENSE.txt */
(()=>{"use strict";var e={730(e,t,n){var r=n(43),i=n(67);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},f={};function m(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new m(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new m(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new m(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new m(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new m(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function x(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(f,e)||!d.call(h,e)&&(p.test(e)?f[e]=!0:(h[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)});var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),T=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),N=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var R=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var D=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=D&&e[D]||e["@@iterator"])?e:null}var A,I=Object.assign;function O(e){if(void 0===A)try{throw Error()}catch(Ne){var t=Ne.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return"\n"+A+e}var _=!1;function B(e,t){if(!e||_)return"";_=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(Re){var r=Re}Reflect.construct(e,[],t)}else{try{t.call()}catch(Re){r=Re}e.call(t.prototype)}else{try{throw Error()}catch(Re){r=Re}e()}}catch(Re){if(Re&&r&&"string"===typeof Re.stack){for(var i=Re.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do{if(a--,0>--s||i[a]!==o[s]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{_=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?O(e):""}function F(e){switch(e.tag){case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1);case 11:return e=B(e.type.render,!1);case 1:return e=B(e.type,!0);default:return""}}function V(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case E:return"Profiler";case C:return"StrictMode";case $:return"Suspense";case M:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case T:return(e.displayName||"Context")+".Consumer";case j:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case z:return null!==(t=e.displayName||null)?t:V(e.type)||"Memo";case N:t=e._payload,e=e._init;try{return V(e(t))}catch(Ne){}}return null}function U(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V(t);case 8:return t===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function W(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=W(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function X(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=W(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function K(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(Ue){return e.body}}function G(e,t){var n=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function J(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function Z(e,t){J(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?te(e,t.type,n):t.hasOwnProperty("defaultValue")&&te(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ee(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function te(e,t,n){"number"===t&&K(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ne=Array.isArray;function re(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ie(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(ne(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function ae(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function se(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ce(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,de=function(e){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n)})}:e}(function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fe=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(he).forEach(function(e){fe.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]})});var ve=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,Ce=null;function Ee(e){if(e=$i(e)){if("function"!==typeof Se)throw Error(o(280));var t=e.stateNode;t&&(t=zi(t),Se(e.stateNode,e.type,t))}}function je(e){ke?Ce?Ce.push(e):Ce=[e]:ke=e}function Te(){if(ke){var e=ke,t=Ce;if(Ce=ke=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Pe(e,t){return e(t)}function $e(){}var Me=!1;function De(e,t,n){if(Me)return e(t,n);Me=!0;try{return Pe(e,t,n)}finally{Me=!1,(null!==ke||null!==Ce)&&($e(),Te())}}function Ie(e,t){var n=e.stateNode;if(null===n)return null;var r=zi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Be=!1;if(u)try{var Fe={};Object.defineProperty(Fe,"passive",{get:function(){Be=!0}}),window.addEventListener("test",Fe,Fe),window.removeEventListener("test",Fe,Fe)}catch(ze){Be=!1}function Ve(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(_e){this.onError(_e)}}var He=!1,We=null,Ye=!1,Xe=null,Ke={onError:function(e){He=!0,We=e}};function Ge(e,t,n,r,i,o,a,s,l){He=!1,We=null,Ve.apply(Ke,arguments)}function Qe(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function qe(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Je(e){if(Qe(e)!==e)throw Error(o(188))}function et(e){return e=function(e){var t=e.alternate;if(!t){if(null===(t=Qe(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Je(i),e;if(a===r)return Je(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=a;break}if(l===r){s=!0,r=i,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=i;break}if(l===r){s=!0,r=a,n=i;break}l=l.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e),null!==e?tt(e):null}function tt(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=tt(e);if(null!==t)return t;e=e.sibling}return null}var nt=i.unstable_scheduleCallback,rt=i.unstable_cancelCallback,it=i.unstable_shouldYield,at=i.unstable_requestPaint,st=i.unstable_now,lt=i.unstable_getCurrentPriorityLevel,ct=i.unstable_ImmediatePriority,ut=i.unstable_UserBlockingPriority,dt=i.unstable_NormalPriority,pt=i.unstable_LowPriority,ht=i.unstable_IdlePriority,ft=null,mt=null;var gt=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(vt(e)/yt|0)|0},vt=Math.log,yt=Math.LN2;var xt=64,bt=4194304;function wt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function St(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~i;0!==s?r=wt(s):0!==(o&=a)&&(r=wt(o))}else 0!==(a=n&~i)?r=wt(a):0!==o&&(r=wt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-gt(t)),r|=e[n],t&=~i;return r}function kt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Ct(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function Et(){var e=xt;return 0===(4194240&(xt<<=1))&&(xt=64),e}function jt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-gt(t)]=n}function Pt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var $t=0;function Mt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var zt,Nt,Rt,Dt,Lt,At=!1,It=[],Ot=null,_t=null,Bt=null,Ft=new Map,Vt=new Map,Ut=[],Ht="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wt(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Ft.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vt.delete(t.pointerId)}}function Yt(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=$i(t))&&Nt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Xt(e){var t=Pi(e.target);if(null!==t){var n=Qe(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=qe(n)))return e.blockedOn=t,void Lt(e.priority,function(){Rt(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Kt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=an(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=$i(n))&&Nt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Gt(e,t,n){Kt(e)&&n.delete(t)}function Qt(){At=!1,null!==Ot&&Kt(Ot)&&(Ot=null),null!==_t&&Kt(_t)&&(_t=null),null!==Bt&&Kt(Bt)&&(Bt=null),Ft.forEach(Gt),Vt.forEach(Gt)}function qt(e,t){e.blockedOn===t&&(e.blockedOn=null,At||(At=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Qt)))}function Jt(e){function t(t){return qt(t,e)}if(0<It.length){qt(It[0],e);for(var n=1;n<It.length;n++){var r=It[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Ot&&qt(Ot,e),null!==_t&&qt(_t,e),null!==Bt&&qt(Bt,e),Ft.forEach(t),Vt.forEach(t),n=0;n<Ut.length;n++)(r=Ut[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&null===(n=Ut[0]).blockedOn;)Xt(n),null===n.blockedOn&&Ut.shift()}var Zt=b.ReactCurrentBatchConfig,en=!0;function tn(e,t,n,r){var i=$t,o=Zt.transition;Zt.transition=null;try{$t=1,rn(e,t,n,r)}finally{$t=i,Zt.transition=o}}function nn(e,t,n,r){var i=$t,o=Zt.transition;Zt.transition=null;try{$t=4,rn(e,t,n,r)}finally{$t=i,Zt.transition=o}}function rn(e,t,n,r){if(en){var i=an(e,t,n,r);if(null===i)ei(e,t,r,on,n),Wt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Ot=Yt(Ot,e,t,n,r,i),!0;case"dragenter":return _t=Yt(_t,e,t,n,r,i),!0;case"mouseover":return Bt=Yt(Bt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ft.set(o,Yt(Ft.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Vt.set(o,Yt(Vt.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Wt(e,r),4&t&&-1<Ht.indexOf(e)){for(;null!==i;){var o=$i(i);if(null!==o&&zt(o),null===(o=an(e,t,n,r))&&ei(e,t,r,on,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else ei(e,t,r,null,n)}}var on=null;function an(e,t,n,r){if(on=null,null!==(e=Pi(e=we(r))))if(null===(t=Qe(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=qe(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return on=e,null}function sn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lt()){case ct:return 1;case ut:return 4;case dt:case pt:return 16;case ht:return 536870912;default:return 16}default:return 16}}var ln=null,cn=null,un=null;function dn(){if(un)return un;var e,t,n=cn,r=n.length,i="value"in ln?ln.value:ln.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return un=i.slice(e,1<t?1-t:void 0)}function pn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function hn(){return!0}function fn(){return!1}function mn(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?hn:fn,this.isPropagationStopped=fn,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=hn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=hn)},persist:function(){},isPersistent:hn}),t}var gn,vn,yn,xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bn=mn(xn),wn=I({},xn,{view:0,detail:0}),Sn=mn(wn),kn=I({},wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ln,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yn&&(yn&&"mousemove"===e.type?(gn=e.screenX-yn.screenX,vn=e.screenY-yn.screenY):vn=gn=0,yn=e),gn)},movementY:function(e){return"movementY"in e?e.movementY:vn}}),Cn=mn(kn),En=mn(I({},kn,{dataTransfer:0})),jn=mn(I({},wn,{relatedTarget:0})),Tn=mn(I({},xn,{animationName:0,elapsedTime:0,pseudoElement:0})),Pn=I({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$n=mn(Pn),Mn=mn(I({},xn,{data:0})),zn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Rn[e])&&!!t[e]}function Ln(){return Dn}var An=I({},wn,{key:function(e){if(e.key){var t=zn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=pn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Nn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ln,charCode:function(e){return"keypress"===e.type?pn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?pn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),In=mn(An),On=mn(I({},kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),_n=mn(I({},wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ln})),Bn=mn(I({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Fn=I({},kn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vn=mn(Fn),Un=[9,13,27,32],Hn=u&&"CompositionEvent"in window,Wn=null;u&&"documentMode"in document&&(Wn=document.documentMode);var Yn=u&&"TextEvent"in window&&!Wn,Xn=u&&(!Hn||Wn&&8<Wn&&11>=Wn),Kn=String.fromCharCode(32),Gn=!1;function Qn(e,t){switch(e){case"keyup":return-1!==Un.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Jn=!1;var Zn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Zn[e.type]:"textarea"===t}function tr(e,t,n,r){je(r),0<(t=ni(t,"onChange")).length&&(n=new bn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nr=null,rr=null;function ir(e){Kr(e,0)}function or(e){if(X(Mi(e)))return e}function ar(e,t){if("change"===e)return t}var sr=!1;if(u){var lr;if(u){var cr="oninput"in document;if(!cr){var ur=document.createElement("div");ur.setAttribute("oninput","return;"),cr="function"===typeof ur.oninput}lr=cr}else lr=!1;sr=lr&&(!document.documentMode||9<document.documentMode)}function dr(){nr&&(nr.detachEvent("onpropertychange",pr),rr=nr=null)}function pr(e){if("value"===e.propertyName&&or(rr)){var t=[];tr(t,rr,e,we(e)),De(ir,t)}}function hr(e,t,n){"focusin"===e?(dr(),rr=n,(nr=t).attachEvent("onpropertychange",pr)):"focusout"===e&&dr()}function fr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return or(rr)}function mr(e,t){if("click"===e)return or(t)}function gr(e,t){if("input"===e||"change"===e)return or(t)}var vr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function yr(e,t){if(vr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!vr(e[i],t[i]))return!1}return!0}function xr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function br(e,t){var n,r=xr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=xr(r)}}function wr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?wr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Sr(){for(var e=window,t=K();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(Le){n=!1}if(!n)break;t=K((e=t.contentWindow).document)}return t}function kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Cr(e){var t=Sr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wr(n.ownerDocument.documentElement,n)){if(null!==r&&kr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=br(n,o);var a=br(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Er=u&&"documentMode"in document&&11>=document.documentMode,jr=null,Tr=null,Pr=null,$r=!1;function Mr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;$r||null==jr||jr!==K(r)||("selectionStart"in(r=jr)&&kr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Pr&&yr(Pr,r)||(Pr=r,0<(r=ni(Tr,"onSelect")).length&&(t=new bn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jr)))}function zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nr={animationend:zr("Animation","AnimationEnd"),animationiteration:zr("Animation","AnimationIteration"),animationstart:zr("Animation","AnimationStart"),transitionend:zr("Transition","TransitionEnd")},Rr={},Dr={};function Lr(e){if(Rr[e])return Rr[e];if(!Nr[e])return e;var t,n=Nr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Dr)return Rr[e]=n[t];return e}u&&(Dr=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);var Ar=Lr("animationend"),Ir=Lr("animationiteration"),Or=Lr("animationstart"),_r=Lr("transitionend"),Br=new Map,Fr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(e,t){Br.set(e,t),l(t,[e])}for(var Ur=0;Ur<Fr.length;Ur++){var Hr=Fr[Ur];Vr(Hr.toLowerCase(),"on"+(Hr[0].toUpperCase()+Hr.slice(1)))}Vr(Ar,"onAnimationEnd"),Vr(Ir,"onAnimationIteration"),Vr(Or,"onAnimationStart"),Vr("dblclick","onDoubleClick"),Vr("focusin","onFocus"),Vr("focusout","onBlur"),Vr(_r,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function Xr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,s,l,c){if(Ge.apply(this,arguments),He){if(!He)throw Error(o(198));var u=We;He=!1,We=null,Ye||(Ye=!0,Xe=u)}}(r,t,void 0,e),e.currentTarget=null}function Kr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Xr(i,s,c),o=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Xr(i,s,c),o=l}}}if(Ye)throw e=Xe,Ye=!1,Xe=null,e}function Gr(e,t){var n=t[Ei];void 0===n&&(n=t[Ei]=new Set);var r=e+"__bubble";n.has(r)||(Zr(t,e,2,!1),n.add(r))}function Qr(e,t,n){var r=0;t&&(r|=4),Zr(n,e,r,t)}var qr="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[qr]){e[qr]=!0,a.forEach(function(t){"selectionchange"!==t&&(Yr.has(t)||Qr(t,!1,e),Qr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[qr]||(t[qr]=!0,Qr("selectionchange",!1,t))}}function Zr(e,t,n,r){switch(sn(t)){case 1:var i=tn;break;case 4:i=nn;break;default:i=rn}n=i.bind(null,t,n,e),i=void 0,!Be||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ei(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=Pi(s)))return;if(5===(l=a.tag)||6===l){r=o=a;continue e}s=s.parentNode}}r=r.return}De(function(){var r=o,i=we(n),a=[];e:{var s=Br.get(e);if(void 0!==s){var l=bn,c=e;switch(e){case"keypress":if(0===pn(n))break e;case"keydown":case"keyup":l=In;break;case"focusin":c="focus",l=jn;break;case"focusout":c="blur",l=jn;break;case"beforeblur":case"afterblur":l=jn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=Cn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=En;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=_n;break;case Ar:case Ir:case Or:l=Tn;break;case _r:l=Bn;break;case"scroll":l=Sn;break;case"wheel":l=Vn;break;case"copy":case"cut":case"paste":l=$n;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=On}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==s?s+"Capture":null:s;u=[];for(var h,f=r;null!==f;){var m=(h=f).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==p&&(null!=(m=Ie(f,p))&&u.push(ti(f,m,h)))),d)break;f=f.return}0<u.length&&(s=new l(s,c,null,n,i),a.push({event:s,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===be||!(c=n.relatedTarget||n.fromElement)||!Pi(c)&&!c[Ci])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?Pi(c):null)&&(c!==(d=Qe(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=Cn,m="onMouseLeave",p="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(u=On,m="onPointerLeave",p="onPointerEnter",f="pointer"),d=null==l?s:Mi(l),h=null==c?s:Mi(c),(s=new u(m,f+"leave",l,n,i)).target=d,s.relatedTarget=h,m=null,Pi(i)===r&&((u=new u(p,f+"enter",c,n,i)).target=h,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(p=c,f=0,h=u=l;h;h=ri(h))f++;for(h=0,m=p;m;m=ri(m))h++;for(;0<f-h;)u=ri(u),f--;for(;0<h-f;)p=ri(p),h--;for(;f--;){if(u===p||null!==p&&u===p.alternate)break e;u=ri(u),p=ri(p)}u=null}else u=null;null!==l&&ii(a,s,l,u,!1),null!==c&&null!==d&&ii(a,d,c,u,!0)}if("select"===(l=(s=r?Mi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=ar;else if(er(s))if(sr)g=gr;else{g=fr;var v=hr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=mr);switch(g&&(g=g(e,r))?tr(a,g,n,i):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&te(s,"number",s.value)),v=r?Mi(r):window,e){case"focusin":(er(v)||"true"===v.contentEditable)&&(jr=v,Tr=r,Pr=null);break;case"focusout":Pr=Tr=jr=null;break;case"mousedown":$r=!0;break;case"contextmenu":case"mouseup":case"dragend":$r=!1,Mr(a,n,i);break;case"selectionchange":if(Er)break;case"keydown":case"keyup":Mr(a,n,i)}var y;if(Hn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Jn?Qn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Xn&&"ko"!==n.locale&&(Jn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Jn&&(y=dn()):(cn="value"in(ln=i)?ln.value:ln.textContent,Jn=!0)),0<(v=ni(r,x)).length&&(x=new Mn(x,e,null,n,i),a.push({event:x,listeners:v}),y?x.data=y:null!==(y=qn(n))&&(x.data=y))),(y=Yn?function(e,t){switch(e){case"compositionend":return qn(t);case"keypress":return 32!==t.which?null:(Gn=!0,Kn);case"textInput":return(e=t.data)===Kn&&Gn?null:e;default:return null}}(e,n):function(e,t){if(Jn)return"compositionend"===e||!Hn&&Qn(e,t)?(e=dn(),un=cn=ln=null,Jn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=ni(r,"onBeforeInput")).length&&(i=new Mn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=y))}Kr(a,t)})}function ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ni(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Ie(e,n))&&r.unshift(ti(e,o,i)),null!=(o=Ie(e,t))&&r.push(ti(e,o,i))),e=e.return}return r}function ri(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function ii(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=Ie(n,o))&&a.unshift(ti(n,l,s)):i||null!=(l=Ie(n,o))&&a.push(ti(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var oi=/\r\n?/g,ai=/\u0000|\uFFFD/g;function si(e){return("string"===typeof e?e:""+e).replace(oi,"\n").replace(ai,"")}function li(e,t,n){if(t=si(t),si(e)!==t&&n)throw Error(o(425))}function ci(){}var ui=null,di=null;function pi(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var hi="function"===typeof setTimeout?setTimeout:void 0,fi="function"===typeof clearTimeout?clearTimeout:void 0,mi="function"===typeof Promise?Promise:void 0,gi="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof mi?function(e){return mi.resolve(null).then(e).catch(vi)}:hi;function vi(e){setTimeout(function(){throw e})}function yi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Jt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Jt(t)}function xi(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function bi(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var wi=Math.random().toString(36).slice(2),Si="__reactFiber$"+wi,ki="__reactProps$"+wi,Ci="__reactContainer$"+wi,Ei="__reactEvents$"+wi,ji="__reactListeners$"+wi,Ti="__reactHandles$"+wi;function Pi(e){var t=e[Si];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ci]||n[Si]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=bi(e);null!==e;){if(n=e[Si])return n;e=bi(e)}return t}n=(e=n).parentNode}return null}function $i(e){return!(e=e[Si]||e[Ci])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Mi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function zi(e){return e[ki]||null}var Ni=[],Ri=-1;function Di(e){return{current:e}}function Li(e){0>Ri||(e.current=Ni[Ri],Ni[Ri]=null,Ri--)}function Ai(e,t){Ri++,Ni[Ri]=e.current,e.current=t}var Ii={},Oi=Di(Ii),_i=Di(!1),Bi=Ii;function Fi(e,t){var n=e.type.contextTypes;if(!n)return Ii;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Vi(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ui(){Li(_i),Li(Oi)}function Hi(e,t,n){if(Oi.current!==Ii)throw Error(o(168));Ai(Oi,t),Ai(_i,n)}function Wi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(o(108,U(e)||"Unknown",i));return I({},n,r)}function Yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ii,Bi=Oi.current,Ai(Oi,e),Ai(_i,_i.current),!0}function Xi(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Wi(e,t,Bi),r.__reactInternalMemoizedMergedChildContext=e,Li(_i),Li(Oi),Ai(Oi,e)):Li(_i),Ai(_i,n)}var Ki=null,Gi=!1,Qi=!1;function qi(e){null===Ki?Ki=[e]:Ki.push(e)}function Ji(){if(!Qi&&null!==Ki){Qi=!0;var e=0,t=$t;try{var n=Ki;for($t=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ki=null,Gi=!1}catch(i){throw null!==Ki&&(Ki=Ki.slice(e+1)),nt(ct,Ji),i}finally{$t=t,Qi=!1}}return null}var Zi=[],eo=0,to=null,no=0,ro=[],io=0,oo=null,ao=1,so="";function lo(e,t){Zi[eo++]=no,Zi[eo++]=to,to=e,no=t}function co(e,t,n){ro[io++]=ao,ro[io++]=so,ro[io++]=oo,oo=e;var r=ao;e=so;var i=32-gt(r)-1;r&=~(1<<i),n+=1;var o=32-gt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,ao=1<<32-gt(t)+i|n<<i|r,so=o+e}else ao=1<<o|n<<i|r,so=e}function uo(e){null!==e.return&&(lo(e,1),co(e,1,0))}function po(e){for(;e===to;)to=Zi[--eo],Zi[eo]=null,no=Zi[--eo],Zi[eo]=null;for(;e===oo;)oo=ro[--io],ro[io]=null,so=ro[--io],ro[io]=null,ao=ro[--io],ro[io]=null}var ho=null,fo=null,mo=!1,go=null;function vo(e,t){var n=Bc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function yo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ho=e,fo=xi(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ho=e,fo=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==oo?{id:ao,overflow:so}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Bc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ho=e,fo=null,!0);default:return!1}}function xo(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function bo(e){if(mo){var t=fo;if(t){var n=t;if(!yo(e,t)){if(xo(e))throw Error(o(418));t=xi(n.nextSibling);var r=ho;t&&yo(e,t)?vo(r,n):(e.flags=-4097&e.flags|2,mo=!1,ho=e)}}else{if(xo(e))throw Error(o(418));e.flags=-4097&e.flags|2,mo=!1,ho=e}}}function wo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ho=e}function So(e){if(e!==ho)return!1;if(!mo)return wo(e),mo=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!pi(e.type,e.memoizedProps)),t&&(t=fo)){if(xo(e))throw ko(),Error(o(418));for(;t;)vo(e,t),t=xi(t.nextSibling)}if(wo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){fo=xi(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}fo=null}}else fo=ho?xi(e.stateNode.nextSibling):null;return!0}function ko(){for(var e=fo;e;)e=xi(e.nextSibling)}function Co(){fo=ho=null,mo=!1}function Eo(e){null===go?go=[e]:go.push(e)}var jo=b.ReactCurrentBatchConfig;function To(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function Po(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $o(e){return(0,e._init)(e._payload)}function Mo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Vc(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Yc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===N&&$o(o)===t.type)?((r=i(t,n.props)).ref=To(e,t,n),r.return=e,r):((r=Uc(n.type,n.key,n.props,null,e.mode,r)).ref=To(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Xc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Hc(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Yc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Uc(t.type,t.key,t.props,null,e.mode,n)).ref=To(e,null,t),n.return=e,n;case S:return(t=Xc(t,e.mode,n)).return=e,t;case N:return p(e,(0,t._init)(t._payload),n)}if(ne(t)||L(t))return(t=Hc(t,e.mode,n,null)).return=e,t;Po(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?c(e,t,n,r):null;case S:return n.key===i?u(e,t,n,r):null;case N:return h(e,t,(i=n._init)(n._payload),r)}if(ne(n)||L(n))return null!==i?null:d(e,t,n,r,null);Po(e,n)}return null}function f(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case S:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case N:return f(e,t,n,(0,r._init)(r._payload),i)}if(ne(r)||L(r))return d(t,e=e.get(n)||null,r,i,null);Po(t,r)}return null}function m(i,o,s,l){for(var c=null,u=null,d=o,m=o=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=h(i,d,s[m],l);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(i,d),o=a(v,o,m),null===u?c=v:u.sibling=v,u=v,d=g}if(m===s.length)return n(i,d),mo&&lo(i,m),c;if(null===d){for(;m<s.length;m++)null!==(d=p(i,s[m],l))&&(o=a(d,o,m),null===u?c=d:u.sibling=d,u=d);return mo&&lo(i,m),c}for(d=r(i,d);m<s.length;m++)null!==(g=f(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=a(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),mo&&lo(i,m),c}function g(i,s,l,c){var u=L(l);if("function"!==typeof u)throw Error(o(150));if(null==(l=u.call(l)))throw Error(o(151));for(var d=u=null,m=s,g=s=0,v=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var x=h(i,m,y.value,c);if(null===x){null===m&&(m=v);break}e&&m&&null===x.alternate&&t(i,m),s=a(x,s,g),null===d?u=x:d.sibling=x,d=x,m=v}if(y.done)return n(i,m),mo&&lo(i,g),u;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=p(i,y.value,c))&&(s=a(y,s,g),null===d?u=y:d.sibling=y,d=y);return mo&&lo(i,g),u}for(m=r(i,m);!y.done;g++,y=l.next())null!==(y=f(m,i,g,y.value,c))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=a(y,s,g),null===d?u=y:d.sibling=y,d=y);return e&&m.forEach(function(e){return t(i,e)}),mo&&lo(i,g),u}return function e(r,o,a,l){if("object"===typeof a&&null!==a&&a.type===k&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var c=a.key,u=o;null!==u;){if(u.key===c){if((c=a.type)===k){if(7===u.tag){n(r,u.sibling),(o=i(u,a.props.children)).return=r,r=o;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===N&&$o(c)===u.type){n(r,u.sibling),(o=i(u,a.props)).ref=To(r,u,a),o.return=r,r=o;break e}n(r,u);break}t(r,u),u=u.sibling}a.type===k?((o=Hc(a.props.children,r.mode,l,a.key)).return=r,r=o):((l=Uc(a.type,a.key,a.props,null,r.mode,l)).ref=To(r,o,a),l.return=r,r=l)}return s(r);case S:e:{for(u=a.key;null!==o;){if(o.key===u){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(r,o.sibling),(o=i(o,a.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Xc(a,r.mode,l)).return=r,r=o}return s(r);case N:return e(r,o,(u=a._init)(a._payload),l)}if(ne(a))return m(r,o,a,l);if(L(a))return g(r,o,a,l);Po(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,a)).return=r,r=o):(n(r,o),(o=Yc(a,r.mode,l)).return=r,r=o),s(r)):n(r,o)}}var zo=Mo(!0),No=Mo(!1),Ro=Di(null),Do=null,Lo=null,Ao=null;function Io(){Ao=Lo=Do=null}function Oo(e){var t=Ro.current;Li(Ro),e._currentValue=t}function _o(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bo(e,t){Do=e,Ao=Lo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&($s=!0),e.firstContext=null)}function Fo(e){var t=e._currentValue;if(Ao!==e)if(e={context:e,memoizedValue:t,next:null},null===Lo){if(null===Do)throw Error(o(308));Lo=e,Do.dependencies={lanes:0,firstContext:e}}else Lo=Lo.next=e;return t}var Vo=null;function Uo(e){null===Vo?Vo=[e]:Vo.push(e)}function Ho(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Uo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Wo(e,r)}function Wo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Yo=!1;function Xo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ko(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Go(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Il)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Wo(e,n)}return null===(i=r.interleaved)?(t.next=t,Uo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Wo(e,n)}function qo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pt(e,n)}}function Jo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zo(e,t,n,r){var i=e.updateQueue;Yo=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?o=c:a.next=c,a=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==o){var d=i.baseState;for(a=0,u=c=l=null,s=o;;){var p=s.lane,h=s.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var f=e,m=s;switch(p=t,h=n,m.tag){case 1:if("function"===typeof(f=m.payload)){d=f.call(h,d,p);break e}d=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(p="function"===typeof(f=m.payload)?f.call(h,d,p):f)||void 0===p)break e;d=I({},d,p);break e;case 2:Yo=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=i.effects)?i.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=h,l=d):u=u.next=h,a|=p;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}if(null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);Wl|=a,e.lanes=a,e.memoizedState=d}}function ea(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(o(191,i));i.call(r)}}}var ta={},na=Di(ta),ra=Di(ta),ia=Di(ta);function oa(e){if(e===ta)throw Error(o(174));return e}function aa(e,t){switch(Ai(ia,t),Ai(ra,e),Ai(na,ta),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ce(null,"");break;default:t=ce(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Li(na),Ai(na,t)}function sa(){Li(na),Li(ra),Li(ia)}function la(e){oa(ia.current);var t=oa(na.current),n=ce(t,e.type);t!==n&&(Ai(ra,e),Ai(na,n))}function ca(e){ra.current===e&&(Li(na),Li(ra))}var ua=Di(0);function da(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pa=[];function ha(){for(var e=0;e<pa.length;e++)pa[e]._workInProgressVersionPrimary=null;pa.length=0}var fa=b.ReactCurrentDispatcher,ma=b.ReactCurrentBatchConfig,ga=0,va=null,ya=null,xa=null,ba=!1,wa=!1,Sa=0,ka=0;function Ca(){throw Error(o(321))}function Ea(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vr(e[n],t[n]))return!1;return!0}function ja(e,t,n,r,i,a){if(ga=a,va=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fa.current=null===e||null===e.memoizedState?cs:us,e=n(r,i),wa){a=0;do{if(wa=!1,Sa=0,25<=a)throw Error(o(301));a+=1,xa=ya=null,t.updateQueue=null,fa.current=ds,e=n(r,i)}while(wa)}if(fa.current=ls,t=null!==ya&&null!==ya.next,ga=0,xa=ya=va=null,ba=!1,t)throw Error(o(300));return e}function Ta(){var e=0!==Sa;return Sa=0,e}function Pa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===xa?va.memoizedState=xa=e:xa=xa.next=e,xa}function $a(){if(null===ya){var e=va.alternate;e=null!==e?e.memoizedState:null}else e=ya.next;var t=null===xa?va.memoizedState:xa.next;if(null!==t)xa=t,ya=e;else{if(null===e)throw Error(o(310));e={memoizedState:(ya=e).memoizedState,baseState:ya.baseState,baseQueue:ya.baseQueue,queue:ya.queue,next:null},null===xa?va.memoizedState=xa=e:xa=xa.next=e}return xa}function Ma(e,t){return"function"===typeof t?t(e):t}function za(e){var t=$a(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=ya,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var l=s=null,c=null,u=a;do{var d=u.lane;if((ga&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(l=c=p,s=r):c=c.next=p,va.lanes|=d,Wl|=d}u=u.next}while(null!==u&&u!==a);null===c?s=r:c.next=l,vr(r,t.memoizedState)||($s=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,va.lanes|=a,Wl|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Na(e){var t=$a(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);vr(a,t.memoizedState)||($s=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ra(){}function Da(e,t){var n=va,r=$a(),i=t(),a=!vr(r.memoizedState,i);if(a&&(r.memoizedState=i,$s=!0),r=r.queue,Ya(Ia.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==xa&&1&xa.memoizedState.tag){if(n.flags|=2048,Fa(9,Aa.bind(null,n,r,i,t),void 0,null),null===Ol)throw Error(o(349));0!==(30&ga)||La(n,t,i)}return i}function La(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=va.updateQueue)?(t={lastEffect:null,stores:null},va.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Aa(e,t,n,r){t.value=n,t.getSnapshot=r,Oa(t)&&_a(e)}function Ia(e,t,n){return n(function(){Oa(t)&&_a(e)})}function Oa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vr(e,n)}catch(Le){return!0}}function _a(e){var t=Wo(e,1);null!==t&&dc(t,e,1,-1)}function Ba(e){var t=Pa();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:e},t.queue=e,e=e.dispatch=is.bind(null,va,e),[t.memoizedState,e]}function Fa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=va.updateQueue)?(t={lastEffect:null,stores:null},va.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Va(){return $a().memoizedState}function Ua(e,t,n,r){var i=Pa();va.flags|=e,i.memoizedState=Fa(1|t,n,void 0,void 0===r?null:r)}function Ha(e,t,n,r){var i=$a();r=void 0===r?null:r;var o=void 0;if(null!==ya){var a=ya.memoizedState;if(o=a.destroy,null!==r&&Ea(r,a.deps))return void(i.memoizedState=Fa(t,n,o,r))}va.flags|=e,i.memoizedState=Fa(1|t,n,o,r)}function Wa(e,t){return Ua(8390656,8,e,t)}function Ya(e,t){return Ha(2048,8,e,t)}function Xa(e,t){return Ha(4,2,e,t)}function Ka(e,t){return Ha(4,4,e,t)}function Ga(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Qa(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ha(4,4,Ga.bind(null,t,e),n)}function qa(){}function Ja(e,t){var n=$a();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ea(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Za(e,t){var n=$a();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ea(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function es(e,t,n){return 0===(21&ga)?(e.baseState&&(e.baseState=!1,$s=!0),e.memoizedState=n):(vr(n,t)||(n=Et(),va.lanes|=n,Wl|=n,e.baseState=!0),t)}function ts(e,t){var n=$t;$t=0!==n&&4>n?n:4,e(!0);var r=ma.transition;ma.transition={};try{e(!1),t()}finally{$t=n,ma.transition=r}}function ns(){return $a().memoizedState}function rs(e,t,n){var r=uc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},os(e))as(t,n);else if(null!==(n=Ho(e,t,n,r))){dc(n,e,r,cc()),ss(n,t,r)}}function is(e,t,n){var r=uc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(os(e))as(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,vr(s,a)){var l=t.interleaved;return null===l?(i.next=i,Uo(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(Re){}null!==(n=Ho(e,t,i,r))&&(dc(n,e,r,i=cc()),ss(n,t,r))}}function os(e){var t=e.alternate;return e===va||null!==t&&t===va}function as(e,t){wa=ba=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ss(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pt(e,n)}}var ls={readContext:Fo,useCallback:Ca,useContext:Ca,useEffect:Ca,useImperativeHandle:Ca,useInsertionEffect:Ca,useLayoutEffect:Ca,useMemo:Ca,useReducer:Ca,useRef:Ca,useState:Ca,useDebugValue:Ca,useDeferredValue:Ca,useTransition:Ca,useMutableSource:Ca,useSyncExternalStore:Ca,useId:Ca,unstable_isNewReconciler:!1},cs={readContext:Fo,useCallback:function(e,t){return Pa().memoizedState=[e,void 0===t?null:t],e},useContext:Fo,useEffect:Wa,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ua(4194308,4,Ga.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ua(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ua(4,2,e,t)},useMemo:function(e,t){var n=Pa();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pa();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rs.bind(null,va,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Pa().memoizedState=e},useState:Ba,useDebugValue:qa,useDeferredValue:function(e){return Pa().memoizedState=e},useTransition:function(){var e=Ba(!1),t=e[0];return e=ts.bind(null,e[1]),Pa().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=va,i=Pa();if(mo){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Ol)throw Error(o(349));0!==(30&ga)||La(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Wa(Ia.bind(null,r,a,e),[e]),r.flags|=2048,Fa(9,Aa.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Pa(),t=Ol.identifierPrefix;if(mo){var n=so;t=":"+t+"R"+(n=(ao&~(1<<32-gt(ao)-1)).toString(32)+n),0<(n=Sa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ka++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},us={readContext:Fo,useCallback:Ja,useContext:Fo,useEffect:Ya,useImperativeHandle:Qa,useInsertionEffect:Xa,useLayoutEffect:Ka,useMemo:Za,useReducer:za,useRef:Va,useState:function(){return za(Ma)},useDebugValue:qa,useDeferredValue:function(e){return es($a(),ya.memoizedState,e)},useTransition:function(){return[za(Ma)[0],$a().memoizedState]},useMutableSource:Ra,useSyncExternalStore:Da,useId:ns,unstable_isNewReconciler:!1},ds={readContext:Fo,useCallback:Ja,useContext:Fo,useEffect:Ya,useImperativeHandle:Qa,useInsertionEffect:Xa,useLayoutEffect:Ka,useMemo:Za,useReducer:Na,useRef:Va,useState:function(){return Na(Ma)},useDebugValue:qa,useDeferredValue:function(e){var t=$a();return null===ya?t.memoizedState=e:es(t,ya.memoizedState,e)},useTransition:function(){return[Na(Ma)[0],$a().memoizedState]},useMutableSource:Ra,useSyncExternalStore:Da,useId:ns,unstable_isNewReconciler:!1};function ps(e,t){if(e&&e.defaultProps){for(var n in t=I({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function hs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:I({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var fs={isMounted:function(e){return!!(e=e._reactInternals)&&Qe(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=cc(),i=uc(e),o=Go(r,i);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Qo(e,o,i))&&(dc(t,e,i,r),qo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=cc(),i=uc(e),o=Go(r,i);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Qo(e,o,i))&&(dc(t,e,i,r),qo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=cc(),r=uc(e),i=Go(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Qo(e,i,r))&&(dc(t,e,r,n),qo(t,e,r))}};function ms(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!yr(n,r)||!yr(i,o))}function gs(e,t,n){var r=!1,i=Ii,o=t.contextType;return"object"===typeof o&&null!==o?o=Fo(o):(i=Vi(t)?Bi:Oi.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Fi(e,i):Ii),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=fs,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function vs(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fs.enqueueReplaceState(t,t.state,null)}function ys(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Xo(e);var o=t.contextType;"object"===typeof o&&null!==o?i.context=Fo(o):(o=Vi(t)?Bi:Oi.current,i.context=Fi(e,o)),i.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(hs(e,t,o,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&fs.enqueueReplaceState(i,i.state,null),Zo(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function xs(e,t){try{var n="",r=t;do{n+=F(r),r=r.return}while(r);var i=n}catch(Oe){i="\nError generating stack: "+Oe.message+"\n"+Oe.stack}return{value:e,source:t,stack:i,digest:null}}function bs(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ws(e,t){try{console.error(t.value)}catch(Ne){setTimeout(function(){throw Ne})}}var Ss="function"===typeof WeakMap?WeakMap:Map;function ks(e,t,n){(n=Go(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zl||(Zl=!0,ec=r),ws(0,t)},n}function Cs(e,t,n){(n=Go(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ws(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){ws(0,t),"function"!==typeof r&&(null===tc?tc=new Set([this]):tc.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function Es(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Ss;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Dc.bind(null,e,t,n),t.then(e,e))}function js(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function Ts(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Go(-1,1)).tag=2,Qo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Ps=b.ReactCurrentOwner,$s=!1;function Ms(e,t,n,r){t.child=null===e?No(t,null,n,r):zo(t,e.child,n,r)}function zs(e,t,n,r,i){n=n.render;var o=t.ref;return Bo(t,i),r=ja(e,t,n,r,o,i),n=Ta(),null===e||$s?(mo&&n&&uo(t),t.flags|=1,Ms(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zs(e,t,i))}function Ns(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||Fc(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Uc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Rs(e,t,o,r,i))}if(o=e.child,0===(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:yr)(a,r)&&e.ref===t.ref)return Zs(e,t,i)}return t.flags|=1,(e=Vc(o,r)).ref=t.ref,e.return=t,t.child=e}function Rs(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(yr(o,r)&&e.ref===t.ref){if($s=!1,t.pendingProps=r=o,0===(e.lanes&i))return t.lanes=e.lanes,Zs(e,t,i);0!==(131072&e.flags)&&($s=!0)}}return As(e,t,n,r,i)}function Ds(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ai(Vl,Fl),Fl|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ai(Vl,Fl),Fl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ai(Vl,Fl),Fl|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ai(Vl,Fl),Fl|=r;return Ms(e,t,i,n),t.child}function Ls(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function As(e,t,n,r,i){var o=Vi(n)?Bi:Oi.current;return o=Fi(t,o),Bo(t,i),n=ja(e,t,n,r,o,i),r=Ta(),null===e||$s?(mo&&r&&uo(t),t.flags|=1,Ms(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zs(e,t,i))}function Is(e,t,n,r,i){if(Vi(n)){var o=!0;Yi(t)}else o=!1;if(Bo(t,i),null===t.stateNode)Js(e,t),gs(t,n,r),ys(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;"object"===typeof c&&null!==c?c=Fo(c):c=Fi(t,c=Vi(n)?Bi:Oi.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==r||l!==c)&&vs(t,a,r,c),Yo=!1;var p=t.memoizedState;a.state=p,Zo(t,r,a,i),l=t.memoizedState,s!==r||p!==l||_i.current||Yo?("function"===typeof u&&(hs(t,n,u,r),l=t.memoizedState),(s=Yo||ms(t,n,s,r,p,l,c))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ko(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ps(t.type,s),a.props=c,d=t.pendingProps,p=a.context,"object"===typeof(l=n.contextType)&&null!==l?l=Fo(l):l=Fi(t,l=Vi(n)?Bi:Oi.current);var h=n.getDerivedStateFromProps;(u="function"===typeof h||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==d||p!==l)&&vs(t,a,r,l),Yo=!1,p=t.memoizedState,a.state=p,Zo(t,r,a,i);var f=t.memoizedState;s!==d||p!==f||_i.current||Yo?("function"===typeof h&&(hs(t,n,h,r),f=t.memoizedState),(c=Yo||ms(t,n,c,r,p,f,l)||!1)?(u||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,f,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,f,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=l,r=c):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Os(e,t,n,r,o,i)}function Os(e,t,n,r,i,o){Ls(e,t);var a=0!==(128&t.flags);if(!r&&!a)return i&&Xi(t,n,!1),Zs(e,t,o);r=t.stateNode,Ps.current=t;var s=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=zo(t,e.child,null,o),t.child=zo(t,null,s,o)):Ms(e,t,s,o),t.memoizedState=r.state,i&&Xi(t,n,!0),t.child}function _s(e){var t=e.stateNode;t.pendingContext?Hi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Hi(0,t.context,!1),aa(e,t.containerInfo)}function Bs(e,t,n,r,i){return Co(),Eo(i),t.flags|=256,Ms(e,t,n,r),t.child}var Fs,Vs,Us,Hs={dehydrated:null,treeContext:null,retryLane:0};function Ws(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ys(e,t,n){var r,i=t.pendingProps,a=ua.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Ai(ua,1&a),null===e)return bo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Wc(l,i,0,null),e=Hc(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ws(n),t.memoizedState=Hs,e):Xs(t,l));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,s){if(n)return 256&t.flags?(t.flags&=-257,Ks(e,t,s,r=bs(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Wc({mode:"visible",children:r.children},i,0,null),(a=Hc(a,i,s,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&zo(t,e.child,null,s),t.child.memoizedState=Ws(s),t.memoizedState=Hs,a);if(0===(1&t.mode))return Ks(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,Ks(e,t,s,r=bs(a=Error(o(419)),r,void 0))}if(l=0!==(s&e.childLanes),$s||l){if(null!==(r=Ol)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==a.retryLane&&(a.retryLane=i,Wo(e,i),dc(r,e,i,-1))}return Cc(),Ks(e,t,s,r=bs(Error(o(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Ac.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,fo=xi(i.nextSibling),ho=t,mo=!0,go=null,null!==e&&(ro[io++]=ao,ro[io++]=so,ro[io++]=oo,ao=e.id,so=e.overflow,oo=t),t=Xs(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,a,n);if(s){s=i.fallback,l=t.mode,r=(a=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=Vc(a,c)).subtreeFlags=14680064&a.subtreeFlags,null!==r?s=Vc(r,s):(s=Hc(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?Ws(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Hs,i}return e=(s=e.child).sibling,i=Vc(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Xs(e,t){return(t=Wc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ks(e,t,n,r){return null!==r&&Eo(r),zo(t,e.child,null,n),(e=Xs(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Gs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),_o(e.return,t,n)}function Qs(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function qs(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ms(e,t,r.children,n),0!==(2&(r=ua.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Gs(e,n,t);else if(19===e.tag)Gs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ai(ua,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===da(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Qs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===da(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Qs(t,!0,n,null,o);break;case"together":Qs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Js(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Wl|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Vc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Vc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function el(e,t){if(!mo)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function tl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function nl(e,t,n){var r=t.pendingProps;switch(po(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tl(t),null;case 1:case 17:return Vi(t.type)&&Ui(),tl(t),null;case 3:return r=t.stateNode,sa(),Li(_i),Li(Oi),ha(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(So(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==go&&(mc(go),go=null))),tl(t),null;case 5:ca(t);var i=oa(ia.current);if(n=t.type,null!==e&&null!=t.stateNode)Vs(e,t,n,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return tl(t),null}if(e=oa(na.current),So(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Si]=t,r[ki]=a,e=0!==(1&t.mode),n){case"dialog":Gr("cancel",r),Gr("close",r);break;case"iframe":case"object":case"embed":Gr("load",r);break;case"video":case"audio":for(i=0;i<Wr.length;i++)Gr(Wr[i],r);break;case"source":Gr("error",r);break;case"img":case"image":case"link":Gr("error",r),Gr("load",r);break;case"details":Gr("toggle",r);break;case"input":Q(r,a),Gr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Gr("invalid",r);break;case"textarea":oe(r,a),Gr("invalid",r)}for(var l in ye(n,a),i=null,a)if(a.hasOwnProperty(l)){var c=a[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==a.suppressHydrationWarning&&li(r.textContent,c,e),i=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==a.suppressHydrationWarning&&li(r.textContent,c,e),i=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Gr("scroll",r)}switch(n){case"input":Y(r),ee(r,a,!0);break;case"textarea":Y(r),se(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=ci)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Si]=t,e[ki]=r,Fs(e,t),t.stateNode=e;e:{switch(l=xe(n,r),n){case"dialog":Gr("cancel",e),Gr("close",e),i=r;break;case"iframe":case"object":case"embed":Gr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Wr.length;i++)Gr(Wr[i],e);i=r;break;case"source":Gr("error",e),i=r;break;case"img":case"image":case"link":Gr("error",e),Gr("load",e),i=r;break;case"details":Gr("toggle",e),i=r;break;case"input":Q(e,r),i=G(e,r),Gr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=I({},r,{value:void 0}),Gr("invalid",e);break;case"textarea":oe(e,r),i=ie(e,r),Gr("invalid",e)}for(a in ye(n,i),c=i)if(c.hasOwnProperty(a)){var u=c[a];"style"===a?ge(e,u):"dangerouslySetInnerHTML"===a?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===a?"string"===typeof u?("textarea"!==n||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=u&&"onScroll"===a&&Gr("scroll",e):null!=u&&x(e,a,u,l))}switch(n){case"input":Y(e),ee(e,r,!1);break;case"textarea":Y(e),se(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?re(e,!!r.multiple,a,!1):null!=r.defaultValue&&re(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=ci)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return tl(t),null;case 6:if(e&&null!=t.stateNode)Us(0,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=oa(ia.current),oa(na.current),So(t)){if(r=t.stateNode,n=t.memoizedProps,r[Si]=t,(a=r.nodeValue!==n)&&null!==(e=ho))switch(e.tag){case 3:li(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&li(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Si]=t,t.stateNode=r}return tl(t),null;case 13:if(Li(ua),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(mo&&null!==fo&&0!==(1&t.mode)&&0===(128&t.flags))ko(),Co(),t.flags|=98560,a=!1;else if(a=So(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[Si]=t}else Co(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;tl(t),a=!1}else null!==go&&(mc(go),go=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ua.current)?0===Ul&&(Ul=3):Cc())),null!==t.updateQueue&&(t.flags|=4),tl(t),null);case 4:return sa(),null===e&&Jr(t.stateNode.containerInfo),tl(t),null;case 10:return Oo(t.type._context),tl(t),null;case 19:if(Li(ua),null===(a=t.memoizedState))return tl(t),null;if(r=0!==(128&t.flags),null===(l=a.rendering))if(r)el(a,!1);else{if(0!==Ul||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=da(e))){for(t.flags|=128,el(a,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ai(ua,1&ua.current|2),t.child}e=e.sibling}null!==a.tail&&st()>ql&&(t.flags|=128,r=!0,el(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=da(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),el(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!mo)return tl(t),null}else 2*st()-a.renderingStartTime>ql&&1073741824!==n&&(t.flags|=128,r=!0,el(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=a.last)?n.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=st(),t.sibling=null,n=ua.current,Ai(ua,r?1&n|2:1&n),t):(tl(t),null);case 22:case 23:return bc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Fl)&&(tl(t),6&t.subtreeFlags&&(t.flags|=8192)):tl(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function rl(e,t){switch(po(t),t.tag){case 1:return Vi(t.type)&&Ui(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return sa(),Li(_i),Li(Oi),ha(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return ca(t),null;case 13:if(Li(ua),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));Co()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Li(ua),null;case 4:return sa(),null;case 10:return Oo(t.type._context),null;case 22:case 23:return bc(),null;default:return null}}Fs=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Vs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,oa(na.current);var o,a=null;switch(n){case"input":i=G(e,i),r=G(e,r),a=[];break;case"select":i=I({},i,{value:void 0}),r=I({},r,{value:void 0}),a=[];break;case"textarea":i=ie(e,i),r=ie(e,r),a=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=ci)}for(u in ye(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(s.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(l=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(a=a||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(a=a||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(s.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Gr("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Us=function(e,t,n,r){n!==r&&(t.flags|=4)};var il=!1,ol=!1,al="function"===typeof WeakSet?WeakSet:Set,sl=null;function ll(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(Le){Rc(e,t,Le)}else n.current=null}function cl(e,t,n){try{n()}catch(Le){Rc(e,t,Le)}}var ul=!1;function dl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&cl(t,n,o)}i=i.next}while(i!==r)}}function pl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hl(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function fl(e){var t=e.alternate;null!==t&&(e.alternate=null,fl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[Si],delete t[ki],delete t[Ei],delete t[ji],delete t[Ti])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ml(e){return 5===e.tag||3===e.tag||4===e.tag}function gl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ml(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function vl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=ci));else if(4!==r&&null!==(e=e.child))for(vl(e,t,n),e=e.sibling;null!==e;)vl(e,t,n),e=e.sibling}function yl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(yl(e,t,n),e=e.sibling;null!==e;)yl(e,t,n),e=e.sibling}var xl=null,bl=!1;function wl(e,t,n){for(n=n.child;null!==n;)Sl(e,t,n),n=n.sibling}function Sl(e,t,n){if(mt&&"function"===typeof mt.onCommitFiberUnmount)try{mt.onCommitFiberUnmount(ft,n)}catch(Ae){}switch(n.tag){case 5:ol||ll(n,t);case 6:var r=xl,i=bl;xl=null,wl(e,t,n),bl=i,null!==(xl=r)&&(bl?(e=xl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):xl.removeChild(n.stateNode));break;case 18:null!==xl&&(bl?(e=xl,n=n.stateNode,8===e.nodeType?yi(e.parentNode,n):1===e.nodeType&&yi(e,n),Jt(e)):yi(xl,n.stateNode));break;case 4:r=xl,i=bl,xl=n.stateNode.containerInfo,bl=!0,wl(e,t,n),xl=r,bl=i;break;case 0:case 11:case 14:case 15:if(!ol&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!==(2&o)||0!==(4&o))&&cl(n,t,a),i=i.next}while(i!==r)}wl(e,t,n);break;case 1:if(!ol&&(ll(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(Ae){Rc(n,t,Ae)}wl(e,t,n);break;case 21:wl(e,t,n);break;case 22:1&n.mode?(ol=(r=ol)||null!==n.memoizedState,wl(e,t,n),ol=r):wl(e,t,n);break;default:wl(e,t,n)}}function kl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new al),t.forEach(function(t){var r=Ic.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Cl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:xl=l.stateNode,bl=!1;break e;case 3:case 4:xl=l.stateNode.containerInfo,bl=!0;break e}l=l.return}if(null===xl)throw Error(o(160));Sl(a,s,i),xl=null,bl=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(Re){Rc(i,t,Re)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)El(t,e),t=t.sibling}function El(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Cl(t,e),jl(e),4&r){try{dl(3,e,e.return),pl(3,e)}catch(g){Rc(e,e.return,g)}try{dl(5,e,e.return)}catch(g){Rc(e,e.return,g)}}break;case 1:Cl(t,e),jl(e),512&r&&null!==n&&ll(n,n.return);break;case 5:if(Cl(t,e),jl(e),512&r&&null!==n&&ll(n,n.return),32&e.flags){var i=e.stateNode;try{pe(i,"")}catch(g){Rc(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,s=null!==n?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===a.type&&null!=a.name&&J(i,a),xe(l,s);var u=xe(l,a);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];"style"===d?ge(i,p):"dangerouslySetInnerHTML"===d?de(i,p):"children"===d?pe(i,p):x(i,d,p,u)}switch(l){case"input":Z(i,a);break;case"textarea":ae(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var f=a.value;null!=f?re(i,!!a.multiple,f,!1):h!==!!a.multiple&&(null!=a.defaultValue?re(i,!!a.multiple,a.defaultValue,!0):re(i,!!a.multiple,a.multiple?[]:"",!1))}i[ki]=a}catch(g){Rc(e,e.return,g)}}break;case 6:if(Cl(t,e),jl(e),4&r){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){Rc(e,e.return,g)}}break;case 3:if(Cl(t,e),jl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Jt(t.containerInfo)}catch(g){Rc(e,e.return,g)}break;case 4:default:Cl(t,e),jl(e);break;case 13:Cl(t,e),jl(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(Ql=st())),4&r&&kl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(ol=(u=ol)||d,Cl(t,e),ol=u):Cl(t,e),jl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(sl=e,d=e.child;null!==d;){for(p=sl=d;null!==sl;){switch(f=(h=sl).child,h.tag){case 0:case 11:case 14:case 15:dl(4,h,h.return);break;case 1:ll(h,h.return);var m=h.stateNode;if("function"===typeof m.componentWillUnmount){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Rc(r,n,g)}}break;case 5:ll(h,h.return);break;case 22:if(null!==h.memoizedState){Ml(p);continue}}null!==f?(f.return=h,sl=f):Ml(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{i=p.stateNode,u?"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=me("display",s))}catch(g){Rc(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){Rc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Cl(t,e),jl(e),4&r&&kl(e);case 21:}}function jl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ml(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(pe(i,""),r.flags&=-33),yl(e,gl(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;vl(e,gl(e),a);break;default:throw Error(o(161))}}catch(Ze){Rc(e,e.return,Ze)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Tl(e,t,n){sl=e,Pl(e,t,n)}function Pl(e,t,n){for(var r=0!==(1&e.mode);null!==sl;){var i=sl,o=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||il;if(!a){var s=i.alternate,l=null!==s&&null!==s.memoizedState||ol;s=il;var c=ol;if(il=a,(ol=l)&&!c)for(sl=i;null!==sl;)l=(a=sl).child,22===a.tag&&null!==a.memoizedState?zl(i):null!==l?(l.return=a,sl=l):zl(i);for(;null!==o;)sl=o,Pl(o,t,n),o=o.sibling;sl=i,il=s,ol=c}$l(e)}else 0!==(8772&i.subtreeFlags)&&null!==o?(o.return=i,sl=o):$l(e)}}function $l(e){for(;null!==sl;){var t=sl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:ol||pl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!ol)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ps(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&ea(t,a,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}ea(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Jt(p)}}}break;default:throw Error(o(163))}ol||512&t.flags&&hl(t)}catch(q){Rc(t,t.return,q)}}if(t===e){sl=null;break}if(null!==(n=t.sibling)){n.return=t.return,sl=n;break}sl=t.return}}function Ml(e){for(;null!==sl;){var t=sl;if(t===e){sl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,sl=n;break}sl=t.return}}function zl(e){for(;null!==sl;){var t=sl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pl(4,t)}catch(Ze){Rc(t,n,Ze)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(Ze){Rc(t,i,Ze)}}var o=t.return;try{hl(t)}catch(Ze){Rc(t,o,Ze)}break;case 5:var a=t.return;try{hl(t)}catch(Ze){Rc(t,a,Ze)}}}catch(Ze){Rc(t,t.return,Ze)}if(t===e){sl=null;break}var s=t.sibling;if(null!==s){s.return=t.return,sl=s;break}sl=t.return}}var Nl,Rl=Math.ceil,Dl=b.ReactCurrentDispatcher,Ll=b.ReactCurrentOwner,Al=b.ReactCurrentBatchConfig,Il=0,Ol=null,_l=null,Bl=0,Fl=0,Vl=Di(0),Ul=0,Hl=null,Wl=0,Yl=0,Xl=0,Kl=null,Gl=null,Ql=0,ql=1/0,Jl=null,Zl=!1,ec=null,tc=null,nc=!1,rc=null,ic=0,oc=0,ac=null,sc=-1,lc=0;function cc(){return 0!==(6&Il)?st():-1!==sc?sc:sc=st()}function uc(e){return 0===(1&e.mode)?1:0!==(2&Il)&&0!==Bl?Bl&-Bl:null!==jo.transition?(0===lc&&(lc=Et()),lc):0!==(e=$t)?e:e=void 0===(e=window.event)?16:sn(e.type)}function dc(e,t,n,r){if(50<oc)throw oc=0,ac=null,Error(o(185));Tt(e,n,r),0!==(2&Il)&&e===Ol||(e===Ol&&(0===(2&Il)&&(Yl|=n),4===Ul&&gc(e,Bl)),pc(e,r),1===n&&0===Il&&0===(1&t.mode)&&(ql=st()+500,Gi&&Ji()))}function pc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-gt(o),s=1<<a,l=i[a];-1===l?0!==(s&n)&&0===(s&r)||(i[a]=kt(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}(e,t);var r=St(e,e===Ol?Bl:0);if(0===r)null!==n&&rt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&rt(n),1===t)0===e.tag?function(e){Gi=!0,qi(e)}(vc.bind(null,e)):qi(vc.bind(null,e)),gi(function(){0===(6&Il)&&Ji()}),n=null;else{switch(Mt(r)){case 1:n=ct;break;case 4:n=ut;break;case 16:default:n=dt;break;case 536870912:n=ht}n=Oc(n,hc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hc(e,t){if(sc=-1,lc=0,0!==(6&Il))throw Error(o(327));var n=e.callbackNode;if(zc()&&e.callbackNode!==n)return null;var r=St(e,e===Ol?Bl:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=Ec(e,r);else{t=r;var i=Il;Il|=2;var a=kc();for(Ol===e&&Bl===t||(Jl=null,ql=st()+500,wc(e,t));;)try{Tc();break}catch(Ae){Sc(e,Ae)}Io(),Dl.current=a,Il=i,null!==_l?t=0:(Ol=null,Bl=0,t=Ul)}if(0!==t){if(2===t&&(0!==(i=Ct(e))&&(r=i,t=fc(e,i))),1===t)throw n=Hl,wc(e,0),gc(e,r),pc(e,st()),n;if(6===t)gc(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!vr(o(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=Ec(e,r))&&(0!==(a=Ct(e))&&(r=a,t=fc(e,a))),1===t))throw n=Hl,wc(e,0),gc(e,r),pc(e,st()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:Mc(e,Gl,Jl);break;case 3:if(gc(e,r),(130023424&r)===r&&10<(t=Ql+500-st())){if(0!==St(e,0))break;if(((i=e.suspendedLanes)&r)!==r){cc(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=hi(Mc.bind(null,e,Gl,Jl),t);break}Mc(e,Gl,Jl);break;case 4:if(gc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-gt(r);a=1<<s,(s=t[s])>i&&(i=s),r&=~a}if(r=i,10<(r=(120>(r=st()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rl(r/1960))-r)){e.timeoutHandle=hi(Mc.bind(null,e,Gl,Jl),r);break}Mc(e,Gl,Jl);break;default:throw Error(o(329))}}}return pc(e,st()),e.callbackNode===n?hc.bind(null,e):null}function fc(e,t){var n=Kl;return e.current.memoizedState.isDehydrated&&(wc(e,t).flags|=256),2!==(e=Ec(e,t))&&(t=Gl,Gl=n,null!==t&&mc(t)),e}function mc(e){null===Gl?Gl=e:Gl.push.apply(Gl,e)}function gc(e,t){for(t&=~Xl,t&=~Yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function vc(e){if(0!==(6&Il))throw Error(o(327));zc();var t=St(e,0);if(0===(1&t))return pc(e,st()),null;var n=Ec(e,t);if(0!==e.tag&&2===n){var r=Ct(e);0!==r&&(t=r,n=fc(e,r))}if(1===n)throw n=Hl,wc(e,0),gc(e,t),pc(e,st()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mc(e,Gl,Jl),pc(e,st()),null}function yc(e,t){var n=Il;Il|=1;try{return e(t)}finally{0===(Il=n)&&(ql=st()+500,Gi&&Ji())}}function xc(e){null!==rc&&0===rc.tag&&0===(6&Il)&&zc();var t=Il;Il|=1;var n=Al.transition,r=$t;try{if(Al.transition=null,$t=1,e)return e()}finally{$t=r,Al.transition=n,0===(6&(Il=t))&&Ji()}}function bc(){Fl=Vl.current,Li(Vl)}function wc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,fi(n)),null!==_l)for(n=_l.return;null!==n;){var r=n;switch(po(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ui();break;case 3:sa(),Li(_i),Li(Oi),ha();break;case 5:ca(r);break;case 4:sa();break;case 13:case 19:Li(ua);break;case 10:Oo(r.type._context);break;case 22:case 23:bc()}n=n.return}if(Ol=e,_l=e=Vc(e.current,null),Bl=Fl=t,Ul=0,Hl=null,Xl=Yl=Wl=0,Gl=Kl=null,null!==Vo){for(t=0;t<Vo.length;t++)if(null!==(r=(n=Vo[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}Vo=null}return e}function Sc(e,t){for(;;){var n=_l;try{if(Io(),fa.current=ls,ba){for(var r=va.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ba=!1}if(ga=0,xa=ya=va=null,wa=!1,Sa=0,Ll.current=null,null===n||null===n.return){Ul=1,Hl=t,_l=null;break}e:{var a=e,s=n.return,l=n,c=t;if(t=Bl,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=l,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=js(s);if(null!==f){f.flags&=-257,Ts(f,s,l,0,t),1&f.mode&&Es(a,u,t),c=u;var m=(t=f).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){Es(a,u,t),Cc();break e}c=Error(o(426))}else if(mo&&1&l.mode){var v=js(s);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),Ts(v,s,l,0,t),Eo(xs(c,l));break e}}a=c=xs(c,l),4!==Ul&&(Ul=2),null===Kl?Kl=[a]:Kl.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Jo(a,ks(0,c,t));break e;case 1:l=c;var y=a.type,x=a.stateNode;if(0===(128&a.flags)&&("function"===typeof y.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===tc||!tc.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t,Jo(a,Cs(a,l,t));break e}}a=a.return}while(null!==a)}$c(n)}catch(b){t=b,_l===n&&null!==n&&(_l=n=n.return);continue}break}}function kc(){var e=Dl.current;return Dl.current=ls,null===e?ls:e}function Cc(){0!==Ul&&3!==Ul&&2!==Ul||(Ul=4),null===Ol||0===(268435455&Wl)&&0===(268435455&Yl)||gc(Ol,Bl)}function Ec(e,t){var n=Il;Il|=2;var r=kc();for(Ol===e&&Bl===t||(Jl=null,wc(e,t));;)try{jc();break}catch(i){Sc(e,i)}if(Io(),Il=n,Dl.current=r,null!==_l)throw Error(o(261));return Ol=null,Bl=0,Ul}function jc(){for(;null!==_l;)Pc(_l)}function Tc(){for(;null!==_l&&!it();)Pc(_l)}function Pc(e){var t=Nl(e.alternate,e,Fl);e.memoizedProps=e.pendingProps,null===t?$c(e):_l=t,Ll.current=null}function $c(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=nl(n,t,Fl)))return void(_l=n)}else{if(null!==(n=rl(n,t)))return n.flags&=32767,void(_l=n);if(null===e)return Ul=6,void(_l=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(_l=t);_l=t=e}while(null!==t);0===Ul&&(Ul=5)}function Mc(e,t,n){var r=$t,i=Al.transition;try{Al.transition=null,$t=1,function(e,t,n,r){do{zc()}while(null!==rc);if(0!==(6&Il))throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-gt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,a),e===Ol&&(_l=Ol=null,Bl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||nc||(nc=!0,Oc(dt,function(){return zc(),null})),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=Al.transition,Al.transition=null;var s=$t;$t=1;var l=Il;Il|=4,Ll.current=null,function(e,t){if(ui=en,kr(e=Sr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(ot){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var f;p!==n||0!==i&&3!==p.nodeType||(l=s+i),p!==a||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(f=p.firstChild);)h=p,p=f;for(;;){if(p===e)break t;if(h===n&&++u===i&&(l=s),h===a&&++d===r&&(c=s),null!==(f=p.nextSibling))break;h=(p=h).parentNode}p=f}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(di={focusedElem:e,selectionRange:n},en=!1,sl=t;null!==sl;)if(e=(t=sl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,sl=e;else for(;null!==sl;){t=sl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:ps(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(o(163))}}catch(ot){Rc(t,t.return,ot)}if(null!==(e=t.sibling)){e.return=t.return,sl=e;break}sl=t.return}m=ul,ul=!1}(e,n),El(n,e),Cr(di),en=!!ui,di=ui=null,e.current=n,Tl(n,e,i),at(),Il=l,$t=s,Al.transition=a}else e.current=n;if(nc&&(nc=!1,rc=e,ic=i),a=e.pendingLanes,0===a&&(tc=null),function(e){if(mt&&"function"===typeof mt.onCommitFiberRoot)try{mt.onCommitFiberRoot(ft,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),pc(e,st()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zl)throw Zl=!1,e=ec,ec=null,e;0!==(1&ic)&&0!==e.tag&&zc(),a=e.pendingLanes,0!==(1&a)?e===ac?oc++:(oc=0,ac=e):oc=0,Ji()}(e,t,n,r)}finally{Al.transition=i,$t=r}return null}function zc(){if(null!==rc){var e=Mt(ic),t=Al.transition,n=$t;try{if(Al.transition=null,$t=16>e?16:e,null===rc)var r=!1;else{if(e=rc,rc=null,ic=0,0!==(6&Il))throw Error(o(331));var i=Il;for(Il|=4,sl=e.current;null!==sl;){var a=sl,s=a.child;if(0!==(16&sl.flags)){var l=a.deletions;if(null!==l){for(var c=0;c<l.length;c++){var u=l[c];for(sl=u;null!==sl;){var d=sl;switch(d.tag){case 0:case 11:case 15:dl(8,d,a)}var p=d.child;if(null!==p)p.return=d,sl=p;else for(;null!==sl;){var h=(d=sl).sibling,f=d.return;if(fl(d),d===u){sl=null;break}if(null!==h){h.return=f,sl=h;break}sl=f}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}sl=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,sl=s;else e:for(;null!==sl;){if(0!==(2048&(a=sl).flags))switch(a.tag){case 0:case 11:case 15:dl(9,a,a.return)}var y=a.sibling;if(null!==y){y.return=a.return,sl=y;break e}sl=a.return}}var x=e.current;for(sl=x;null!==sl;){var b=(s=sl).child;if(0!==(2064&s.subtreeFlags)&&null!==b)b.return=s,sl=b;else e:for(s=x;null!==sl;){if(0!==(2048&(l=sl).flags))try{switch(l.tag){case 0:case 11:case 15:pl(9,l)}}catch(S){Rc(l,l.return,S)}if(l===s){sl=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,sl=w;break e}sl=l.return}}if(Il=i,Ji(),mt&&"function"===typeof mt.onPostCommitFiberRoot)try{mt.onPostCommitFiberRoot(ft,e)}catch(S){}r=!0}return r}finally{$t=n,Al.transition=t}}return!1}function Nc(e,t,n){e=Qo(e,t=ks(0,t=xs(n,t),1),1),t=cc(),null!==e&&(Tt(e,1,t),pc(e,t))}function Rc(e,t,n){if(3===e.tag)Nc(e,e,n);else for(;null!==t;){if(3===t.tag){Nc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===tc||!tc.has(r))){t=Qo(t,e=Cs(t,e=xs(n,e),1),1),e=cc(),null!==t&&(Tt(t,1,e),pc(t,e));break}}t=t.return}}function Dc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=cc(),e.pingedLanes|=e.suspendedLanes&n,Ol===e&&(Bl&n)===n&&(4===Ul||3===Ul&&(130023424&Bl)===Bl&&500>st()-Ql?wc(e,0):Xl|=n),pc(e,t)}function Lc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=bt,0===(130023424&(bt<<=1))&&(bt=4194304)));var n=cc();null!==(e=Wo(e,t))&&(Tt(e,t,n),pc(e,n))}function Ac(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Lc(e,n)}function Ic(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Lc(e,n)}function Oc(e,t){return nt(e,t)}function _c(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bc(e,t,n,r){return new _c(e,t,n,r)}function Fc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Vc(e,t){var n=e.alternate;return null===n?((n=Bc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Uc(e,t,n,r,i,a){var s=2;if(r=e,"function"===typeof e)Fc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case k:return Hc(n.children,i,a,t);case C:s=8,i|=8;break;case E:return(e=Bc(12,n,t,2|i)).elementType=E,e.lanes=a,e;case $:return(e=Bc(13,n,t,i)).elementType=$,e.lanes=a,e;case M:return(e=Bc(19,n,t,i)).elementType=M,e.lanes=a,e;case R:return Wc(n,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case j:s=10;break e;case T:s=9;break e;case P:s=11;break e;case z:s=14;break e;case N:s=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Bc(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Hc(e,t,n,r){return(e=Bc(7,e,r,t)).lanes=n,e}function Wc(e,t,n,r){return(e=Bc(22,e,r,t)).elementType=R,e.lanes=n,e.stateNode={isHidden:!1},e}function Yc(e,t,n){return(e=Bc(6,e,null,t)).lanes=n,e}function Xc(e,t,n){return(t=Bc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jt(0),this.expirationTimes=jt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gc(e,t,n,r,i,o,a,s,l){return e=new Kc(e,t,n,s,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Bc(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xo(o),e}function Qc(e){if(!e)return Ii;e:{if(Qe(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Vi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Vi(n))return Wi(e,n,t)}return t}function qc(e,t,n,r,i,o,a,s,l){return(e=Gc(n,r,!0,e,0,o,0,s,l)).context=Qc(null),n=e.current,(o=Go(r=cc(),i=uc(n))).callback=void 0!==t&&null!==t?t:null,Qo(n,o,i),e.current.lanes=i,Tt(e,i,r),pc(e,r),e}function Jc(e,t,n,r){var i=t.current,o=cc(),a=uc(i);return n=Qc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Go(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Qo(i,t,a))&&(dc(e,i,a,o),qo(e,i,a)),a}function Zc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function eu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function tu(e,t){eu(e,t),(e=e.alternate)&&eu(e,t)}Nl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||_i.current)$s=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return $s=!1,function(e,t,n){switch(t.tag){case 3:_s(t),Co();break;case 5:la(t);break;case 1:Vi(t.type)&&Yi(t);break;case 4:aa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ai(Ro,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ai(ua,1&ua.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ys(e,t,n):(Ai(ua,1&ua.current),null!==(e=Zs(e,t,n))?e.sibling:null);Ai(ua,1&ua.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return qs(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ai(ua,ua.current),r)break;return null;case 22:case 23:return t.lanes=0,Ds(e,t,n)}return Zs(e,t,n)}(e,t,n);$s=0!==(131072&e.flags)}else $s=!1,mo&&0!==(1048576&t.flags)&&co(t,no,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Js(e,t),e=t.pendingProps;var i=Fi(t,Oi.current);Bo(t,n),i=ja(null,t,r,e,i,n);var a=Ta();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Vi(r)?(a=!0,Yi(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Xo(t),i.updater=fs,t.stateNode=i,i._reactInternals=t,ys(t,r,e,n),t=Os(null,t,r,!0,a,n)):(t.tag=0,mo&&a&&uo(t),Ms(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Js(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Fc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===z)return 14}return 2}(r),e=ps(r,e),i){case 0:t=As(null,t,r,e,n);break e;case 1:t=Is(null,t,r,e,n);break e;case 11:t=zs(null,t,r,e,n);break e;case 14:t=Ns(null,t,r,ps(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,As(e,t,r,i=t.elementType===r?i:ps(r,i),n);case 1:return r=t.type,i=t.pendingProps,Is(e,t,r,i=t.elementType===r?i:ps(r,i),n);case 3:e:{if(_s(t),null===e)throw Error(o(387));r=t.pendingProps,i=(a=t.memoizedState).element,Ko(e,t),Zo(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Bs(e,t,r,n,i=xs(Error(o(423)),t));break e}if(r!==i){t=Bs(e,t,r,n,i=xs(Error(o(424)),t));break e}for(fo=xi(t.stateNode.containerInfo.firstChild),ho=t,mo=!0,go=null,n=No(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(Co(),r===i){t=Zs(e,t,n);break e}Ms(e,t,r,n)}t=t.child}return t;case 5:return la(t),null===e&&bo(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,s=i.children,pi(r,i)?s=null:null!==a&&pi(r,a)&&(t.flags|=32),Ls(e,t),Ms(e,t,s,n),t.child;case 6:return null===e&&bo(t),null;case 13:return Ys(e,t,n);case 4:return aa(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=zo(t,null,r,n):Ms(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,zs(e,t,r,i=t.elementType===r?i:ps(r,i),n);case 7:return Ms(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ms(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,Ai(Ro,r._currentValue),r._currentValue=s,null!==a)if(vr(a.value,s)){if(a.children===i.children&&!_i.current){t=Zs(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===a.tag){(c=Go(-1,n&-n)).tag=2;var u=a.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,null!==(c=a.alternate)&&(c.lanes|=n),_o(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(o(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),_o(s,n,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}Ms(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Bo(t,n),r=r(i=Fo(i)),t.flags|=1,Ms(e,t,r,n),t.child;case 14:return i=ps(r=t.type,t.pendingProps),Ns(e,t,r,i=ps(r.type,i),n);case 15:return Rs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ps(r,i),Js(e,t),t.tag=1,Vi(r)?(e=!0,Yi(t)):e=!1,Bo(t,n),gs(t,r,i),ys(t,r,i,n),Os(null,t,r,!0,e,n);case 19:return qs(e,t,n);case 22:return Ds(e,t,n)}throw Error(o(156,t.tag))};var nu="function"===typeof reportError?reportError:function(e){console.error(e)};function ru(e){this._internalRoot=e}function iu(e){this._internalRoot=e}function ou(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function au(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function su(){}function lu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"===typeof i){var s=i;i=function(){var e=Zc(a);s.call(e)}}Jc(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"===typeof r){var o=r;r=function(){var e=Zc(a);o.call(e)}}var a=qc(t,r,e,0,null,!1,0,"",su);return e._reactRootContainer=a,e[Ci]=a.current,Jr(8===e.nodeType?e.parentNode:e),xc(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=Zc(l);s.call(e)}}var l=Gc(e,0,!1,null,0,!1,0,"",su);return e._reactRootContainer=l,e[Ci]=l.current,Jr(8===e.nodeType?e.parentNode:e),xc(function(){Jc(t,l,n,r)}),l}(n,t,e,i,r);return Zc(a)}iu.prototype.render=ru.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Jc(e,t,null,null)},iu.prototype.unmount=ru.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;xc(function(){Jc(null,e,null,null)}),t[Ci]=null}},iu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&0!==t&&t<Ut[n].priority;n++);Ut.splice(n,0,e),0===n&&Xt(e)}},zt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wt(t.pendingLanes);0!==n&&(Pt(t,1|n),pc(t,st()),0===(6&Il)&&(ql=st()+500,Ji()))}break;case 13:xc(function(){var t=Wo(e,1);if(null!==t){var n=cc();dc(t,e,1,n)}}),tu(e,1)}},Nt=function(e){if(13===e.tag){var t=Wo(e,134217728);if(null!==t)dc(t,e,134217728,cc());tu(e,134217728)}},Rt=function(e){if(13===e.tag){var t=uc(e),n=Wo(e,t);if(null!==n)dc(n,e,t,cc());tu(e,t)}},Dt=function(){return $t},Lt=function(e,t){var n=$t;try{return $t=e,t()}finally{$t=n}},Se=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=zi(r);if(!i)throw Error(o(90));X(r),Z(r,i)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&re(e,!!n.multiple,t,!1)}},Pe=yc,$e=xc;var cu={usingClientEntryPoint:!1,Events:[$i,Mi,zi,je,Te,yc]},uu={findFiberByHostInstance:Pi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},du={bundleType:uu.bundleType,version:uu.version,rendererPackageName:uu.rendererPackageName,rendererConfig:uu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=et(e))?null:e.stateNode},findFiberByHostInstance:uu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{ft=pu.inject(du),mt=pu}catch(ze){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ou(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!ou(e))throw Error(o(299));var n=!1,r="",i=nu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Gc(e,1,!1,null,0,n,0,r,i),e[Ci]=t.current,Jr(8===e.nodeType?e.parentNode:e),new ru(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=et(t))?null:e.stateNode},t.flushSync=function(e){return xc(e)},t.hydrate=function(e,t,n){if(!au(t))throw Error(o(200));return lu(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!ou(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",s=nu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=qc(t,null,e,1,null!=n?n:null,i,0,a,s),e[Ci]=t.current,Jr(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new iu(t)},t.render=function(e,t,n){if(!au(t))throw Error(o(200));return lu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!au(e))throw Error(o(40));return!!e._reactRootContainer&&(xc(function(){lu(null,null,e,!1,function(){e._reactRootContainer=null,e[Ci]=null})}),!0)},t.unstable_batchedUpdates=yc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!au(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return lu(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391(e,t,n){var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},950(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},612(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>o(l,n))c<i&&0>o(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,h=3,f=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,b(e),!m)if(null!==r(c))m=!0,R(S);else{var t=r(u);null!==t&&D(w,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,y(j),j=-1),f=!0;var o=h;try{for(b(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!$());){var a=p.callback;if("function"===typeof a){p.callback=null,h=p.priorityLevel;var s=a(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?p.callback=s:p===r(c)&&i(c),b(n)}else i(c);p=r(c)}if(null!==p)var l=!0;else{var d=r(u);null!==d&&D(w,d.startTime-n),l=!1}return l}finally{p=null,h=o,f=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,C=!1,E=null,j=-1,T=5,P=-1;function $(){return!(t.unstable_now()-P<T)}function M(){if(null!==E){var e=t.unstable_now();P=e;var n=!0;try{n=E(!0,e)}finally{n?k():(C=!1,E=null)}}else C=!1}if("function"===typeof x)k=function(){x(M)};else if("undefined"!==typeof MessageChannel){var z=new MessageChannel,N=z.port2;z.port1.onmessage=M,k=function(){N.postMessage(null)}}else k=function(){v(M,0)};function R(e){E=e,C||(C=!0,k())}function D(e,n){j=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,R(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:s=o+s,sortIndex:-1},o>a?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(g?(y(j),j=-1):g=!0,D(w,o-a))):(e.sortIndex=s,n(c,e),m||f||(m=!0,R(S))),e},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},67(e,t,n){e.exports=n(612)},153(e,t,n){var r=n(43),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},202(e,t){var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var b=x.prototype=new y;b.constructor=x,m(b,v.prototype),b.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,i)&&!C.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===o[i]&&(o[i]=l[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:k.current}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function $(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===o?"."+P(l,0):o,w(a)?(i="",null!=e&&(i=e.replace(T,"$&/")+"/"),$(a,t,i,"",function(e){return e})):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(T,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var u=o+P(s=e[c],c);l+=$(s,t,i,u,a)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=$(s=s.value,t,i,u=o+P(s,c++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function M(e,t,n){if(null==e)return e;var r=[],i=0;return $(e,r,"","",function(e){return t.call(n,e,i++)}),r}function z(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},R={transition:null},D={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:R,ReactCurrentOwner:k};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=a,t.PureComponent=x,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)S.call(t,c)&&!C.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:z}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},43(e,t,n){e.exports=n(202)},579(e,t,n){e.exports=n(153)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;("object"==typeof s||"function"==typeof s)&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(e=>a[e]=()=>r[e]);return a.default=()=>r,n.d(o,a),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var r,i=n(43),o=n.t(i,2),a=n(391),s=n(950),l=n.t(s,2);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(r||(r={}));const u="popstate";function d(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function p(e,t){return{usr:e.state,key:e.key,idx:t}}function h(e,t,n,r){return void 0===n&&(n=null),c({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?m(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function f(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function m(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function g(e,t,n,i){void 0===i&&(i={});let{window:o=document.defaultView,v5Compat:a=!1}=i,s=o.history,l=r.Pop,m=null,g=v();function v(){return(s.state||{idx:null}).idx}function y(){l=r.Pop;let e=v(),t=null==e?null:e-g;g=e,m&&m({action:l,location:b.location,delta:t})}function x(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:f(e);return n=n.replace(/ $/,"%20"),d(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,s.replaceState(c({},s.state,{idx:g}),""));let b={get action(){return l},get location(){return e(o,s)},listen(e){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(u,y),m=e,()=>{o.removeEventListener(u,y),m=null}},createHref:e=>t(o,e),createURL:x,encodeLocation(e){let t=x(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){l=r.Push;let i=h(b.location,e,t);n&&n(i,e),g=v()+1;let c=p(i,g),u=b.createHref(i);try{s.pushState(c,"",u)}catch(d){if(d instanceof DOMException&&"DataCloneError"===d.name)throw d;o.location.assign(u)}a&&m&&m({action:l,location:b.location,delta:1})},replace:function(e,t){l=r.Replace;let i=h(b.location,e,t);n&&n(i,e),g=v();let o=p(i,g),c=b.createHref(i);s.replaceState(o,"",c),a&&m&&m({action:l,location:b.location,delta:0})},go:e=>s.go(e)};return b}var v;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(v||(v={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function y(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}Error;const x=["post","put","patch","delete"],b=(new Set(x),["get",...x]);new Set(b),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}const S=i.createContext(null);const k=i.createContext(null);function C(){return null!=i.useContext(k)}i.Component;function E(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}o.startTransition;function j(e){let{basename:t="/",children:n=null,location:o,navigationType:a=r.Pop,navigator:s,static:l=!1,future:c}=e;C()&&d(!1);let u=t.replace(/^\/*/,"/"),p=i.useMemo(()=>({basename:u,navigator:s,static:l,future:w({v7_relativeSplatPath:!1},c)}),[u,c,s,l]);"string"===typeof o&&(o=m(o));let{pathname:h="/",search:f="",hash:g="",state:v=null,key:x="default"}=o,b=i.useMemo(()=>{let e=y(h,u);return null==e?null:{location:{pathname:e,search:f,hash:g,state:v,key:x},navigationType:a}},[u,h,f,g,v,x,a]);return null==b?null:i.createElement(S.Provider,{value:p},i.createElement(k.Provider,{children:n,value:b}))}new Promise(()=>{});i.Component;new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(by){}new Map;const T=o.startTransition;l.flushSync,o.useId;function P(e){let{basename:t,children:n,future:r,window:o}=e,a=i.useRef();var s;null==a.current&&(a.current=(void 0===(s={window:o,v5Compat:!0})&&(s={}),g(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return h("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:f(t)},null,s)));let l=a.current,[c,u]=i.useState({action:l.action,location:l.location}),{v7_startTransition:d}=r||{},p=i.useCallback(e=>{d&&T?T(()=>u(e)):u(e)},[u,d]);return i.useLayoutEffect(()=>l.listen(p),[l,p]),i.useEffect(()=>E(r),[r]),i.createElement(j,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:r})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var $,M;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})($||($={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(M||(M={}));var z="-ms-",N="-moz-",R="-webkit-",D="comm",L="rule",A="decl",I="@keyframes",O=Math.abs,_=String.fromCharCode,B=Object.assign;function F(e){return e.trim()}function V(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function H(e,t,n){return e.indexOf(t,n)}function W(e,t){return 0|e.charCodeAt(t)}function Y(e,t,n){return e.slice(t,n)}function X(e){return e.length}function K(e){return e.length}function G(e,t){return t.push(e),e}function Q(e,t){return e.filter(function(e){return!V(e,t)})}var q,J,Z=1,ee=1,te=0,ne=0,re=0,ie="";function oe(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Z,column:ee,length:a,return:"",siblings:s}}function ae(e,t){return B(oe("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function se(e){for(;e.root;)e=ae(e.root,{children:[e]});G(e,e.siblings)}function le(){return re=ne>0?W(ie,--ne):0,ee--,10===re&&(ee=1,Z--),re}function ce(){return re=ne<te?W(ie,ne++):0,ee++,10===re&&(ee=1,Z++),re}function ue(){return W(ie,ne)}function de(){return ne}function pe(e,t){return Y(ie,e,t)}function he(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fe(e){return Z=ee=1,te=X(ie=e),ne=0,[]}function me(e){return ie="",e}function ge(e){return F(pe(ne-1,xe(91===e?e+2:40===e?e+1:e)))}function ve(e){for(;(re=ue())&&re<33;)ce();return he(e)>2||he(re)>3?"":" "}function ye(e,t){for(;--t&&ce()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return pe(e,de()+(t<6&&32==ue()&&32==ce()))}function xe(e){for(;ce();)switch(re){case e:return ne;case 34:case 39:34!==e&&39!==e&&xe(re);break;case 40:41===e&&xe(e);break;case 92:ce()}return ne}function be(e,t){for(;ce()&&e+re!==57&&(e+re!==84||47!==ue()););return"/*"+pe(t,ne-1)+"*"+_(47===e?e:ce())}function we(e){for(;!he(ue());)ce();return pe(e,ne)}function Se(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ke(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case A:return e.return=e.return||e.value;case D:return"";case I:return e.return=e.value+"{"+Se(e.children,r)+"}";case L:if(!X(e.value=e.props.join(",")))return""}return X(n=Se(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ce(e,t,n){switch(function(e,t){return 45^W(e,0)?(((t<<2^W(e,0))<<2^W(e,1))<<2^W(e,2))<<2^W(e,3):0}(e,t)){case 5103:return R+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return R+e+e;case 4855:return R+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return N+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return R+e+N+e+z+e+e;case 5936:switch(W(e,t+11)){case 114:return R+e+z+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return R+e+z+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return R+e+z+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return R+e+z+e+e;case 6165:return R+e+z+"flex-"+e+e;case 5187:return R+e+U(e,/(\w+).+(:[^]+)/,R+"box-$1$2"+z+"flex-$1$2")+e;case 5443:return R+e+z+"flex-item-"+U(e,/flex-|-self/g,"")+(V(e,/flex-|baseline/)?"":z+"grid-row-"+U(e,/flex-|-self/g,""))+e;case 4675:return R+e+z+"flex-line-pack"+U(e,/align-content|flex-|-self/g,"")+e;case 5548:return R+e+z+U(e,"shrink","negative")+e;case 5292:return R+e+z+U(e,"basis","preferred-size")+e;case 6060:return R+"box-"+U(e,"-grow","")+R+e+z+U(e,"grow","positive")+e;case 4554:return R+U(e,/([^-])(transform)/g,"$1"+R+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,R+"$1"),/(image-set)/,R+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,R+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,R+"box-pack:$3"+z+"flex-pack:$3"),/space-between/,"justify")+R+e+e;case 4200:if(!V(e,/flex-|baseline/))return z+"grid-column-align"+Y(e,t)+e;break;case 2592:case 3360:return z+U(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,V(e.props,/grid-\w+-end/)})?~H(e+(n=n[t].value),"span",0)?e:z+U(e,"-start","")+e+z+"grid-row-span:"+(~H(n,"span",0)?V(n,/\d+/):+V(n,/\d+/)-+V(e,/\d+/))+";":z+U(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return V(e.props,/grid-\w+-start/)})?e:z+U(U(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,R+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(X(e)-1-t>6)switch(W(e,t+1)){case 109:if(45!==W(e,t+4))break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+R+"$2-$3$1"+N+(108==W(e,t+3)?"$3":"$2-$3"))+e;case 115:return~H(e,"stretch",0)?Ce(U(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,o,a,s){return z+n+":"+r+s+(i?z+n+"-span:"+(o?a:+a-+r)+s:"")+e});case 4949:if(121===W(e,t+6))return U(e,":",":"+R)+e;break;case 6444:switch(W(e,45===W(e,14)?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+R+(45===W(e,14)?"inline-":"")+"box$3$1"+R+"$2$3$1"+z+"$2box$3")+e;case 100:return U(e,":",":"+z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,"scroll-","scroll-snap-")+e}return e}function Ee(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case A:return void(e.return=Ce(e.value,e.length,n));case I:return Se([ae(e,{value:U(e.value,"@","@"+R)})],r);case L:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(V(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":se(ae(e,{props:[U(t,/:(read-\w+)/,":-moz-$1")]})),se(ae(e,{props:[t]})),B(e,{props:Q(n,r)});break;case"::placeholder":se(ae(e,{props:[U(t,/:(plac\w+)/,":"+R+"input-$1")]})),se(ae(e,{props:[U(t,/:(plac\w+)/,":-moz-$1")]})),se(ae(e,{props:[U(t,/:(plac\w+)/,z+"input-$1")]})),se(ae(e,{props:[t]})),B(e,{props:Q(n,r)})}return""})}}function je(e){return me(Te("",null,null,null,[""],e=fe(e),0,[0],e))}function Te(e,t,n,r,i,o,a,s,l){for(var c=0,u=0,d=a,p=0,h=0,f=0,m=1,g=1,v=1,y=0,x="",b=i,w=o,S=r,k=x;g;)switch(f=y,y=ce()){case 40:if(108!=f&&58==W(k,d-1)){-1!=H(k+=U(ge(y),"&","&\f"),"&\f",O(c?s[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=ge(y);break;case 9:case 10:case 13:case 32:k+=ve(f);break;case 92:k+=ye(de()-1,7);continue;case 47:switch(ue()){case 42:case 47:G($e(be(ce(),de()),t,n,l),l),5!=he(f||1)&&5!=he(ue()||1)||!X(k)||" "===Y(k,-1,void 0)||(k+=" ");break;default:k+="/"}break;case 123*m:s[c++]=X(k)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==v&&(k=U(k,/\f/g,"")),h>0&&(X(k)-d||0===m&&47===f)&&G(h>32?Me(k+";",r,n,d-1,l):Me(U(k," ","")+";",r,n,d-2,l),l);break;case 59:k+=";";default:if(G(S=Pe(k,t,n,c,u,i,s,x,b=[],w=[],d,o),o),123===y)if(0===u)Te(k,t,S,S,b,o,d,s,w);else{switch(p){case 99:if(110===W(k,3))break;case 108:if(97===W(k,2))break;default:u=0;case 100:case 109:case 115:}u?Te(e,S,S,r&&G(Pe(e,S,S,0,0,i,s,x,i,b=[],d,w),w),i,w,d,s,r?b:w):Te(k,S,S,S,[""],w,0,s,w)}}c=u=h=0,m=v=1,x=k="",d=a;break;case 58:d=1+X(k),h=f;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==le())continue;switch(k+=_(y),y*m){case 38:v=u>0?1:(k+="\f",-1);break;case 44:s[c++]=(X(k)-1)*v,v=1;break;case 64:45===ue()&&(k+=ge(ce())),p=ue(),u=d=X(x=k+=we(de())),y++;break;case 45:45===f&&2==X(k)&&(m=0)}}return o}function Pe(e,t,n,r,i,o,a,s,l,c,u,d){for(var p=i-1,h=0===i?o:[""],f=K(h),m=0,g=0,v=0;m<r;++m)for(var y=0,x=Y(e,p+1,p=O(g=a[m])),b=e;y<f;++y)(b=F(g>0?h[y]+" "+x:U(x,/&\f/g,h[y])))&&(l[v++]=b);return oe(e,t,n,0===i?L:s,l,c,u,d)}function $e(e,t,n,r){return oe(e,t,n,D,_(re),Y(e,2,-2),0,r)}function Me(e,t,n,r,i){return oe(e,t,n,A,Y(e,0,r),Y(e,r+1,-1),r,i)}const ze="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Ne="active",Re="data-styled-version",De="6.4.0",Le="/*!sc*/\n",Ae="undefined"!=typeof window&&"undefined"!=typeof document;function Ie(e){if("undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}){const t={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}[e];if(void 0!==t&&""!==t)return"false"!==t}}const Oe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:null!==(J=null!==(q=Ie("REACT_APP_SC_DISABLE_SPEEDY"))&&void 0!==q?q:Ie("SC_DISABLE_SPEEDY"))&&void 0!==J?J:"undefined"==typeof process||void 0==={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}||!1),_e="sc-keyframes-",Be={};function Fe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${n.length>0?` Args: ${n.join(", ")}`:""}`)}let Ve=new Map,Ue=new Map,He=1;const We=e=>{if(Ve.has(e))return Ve.get(e);for(;Ue.has(He);)He++;const t=He++;return Ve.set(e,t),Ue.set(t,e),t},Ye=e=>Ue.get(e),Xe=(e,t)=>{He=t+1,Ve.set(e,t),Ue.set(t,e)},Ke=(new Set,Object.freeze([])),Ge=Object.freeze({});function Qe(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ge;return e.theme!==n.theme&&e.theme||t||n.theme}const qe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Je=/(^-|-$)/g;function Ze(e){return e.replace(qe,"-").replace(Je,"")}const et=/(a)(d)/gi,tt=e=>String.fromCharCode(e+(e>25?39:97));function nt(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=tt(t%52)+n;return(tt(t%52)+n).replace(et,"$1-$2")}const rt=5381,it=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},ot=e=>it(rt,e);function at(e){return nt(ot(e)>>>0)}function st(e){return e.displayName||e.name||"Component"}function lt(e){return"string"==typeof e&&!0}function ct(e){return lt(e)?`styled.${e}`:`Styled(${st(e)})`}const ut=Symbol.for("react.memo"),dt=Symbol.for("react.forward_ref"),pt={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},ht={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ft={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mt={[dt]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[ut]:ft};function gt(e){return("type"in(t=e)&&t.type.$$typeof)===ut?ft:"$$typeof"in e?mt[e.$$typeof]:pt;var t}const vt=Object.defineProperty,yt=Object.getOwnPropertyNames,xt=Object.getOwnPropertySymbols,bt=Object.getOwnPropertyDescriptor,wt=Object.getPrototypeOf,St=Object.prototype;function kt(e,t,n){if("string"!=typeof t){const r=wt(t);r&&r!==St&&kt(e,r,n);const i=yt(t).concat(xt(t)),o=gt(e),a=gt(t);for(let s=0;s<i.length;++s){const r=i[s];if(!(r in ht||n&&n[r]||a&&r in a||o&&r in o)){const n=bt(t,r);try{vt(e,r,n)}catch(e){}}}}return e}function Ct(e){return"function"==typeof e}function Et(e){return"object"==typeof e&&"styledComponentId"in e}function jt(e,t){return e&&t?e+" "+t:e||t||""}function Tt(e,t){return e.join(t||"")}function Pt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function $t(e,t){if(!(arguments.length>2&&void 0!==arguments[2]&&arguments[2])&&!Pt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=$t(e[n],t[n]);else if(Pt(t))for(const n in t)e[n]=$t(e[n],t[n]);return e}function Mt(e,t){Object.defineProperty(e,"toString",{value:t})}const zt=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const t=this.groupSizes,n=t.length;let r=n;for(;e>=r;)if(r<<=1,r<0)throw Fe(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,o=t.length;i<o;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||0===this.groupSizes[e])return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let o=r;o<i;o++)t+=this.tag.getRule(o)+Le;return t}},Nt=`style[${ze}][${Re}="${De}"]`,Rt=new RegExp(`^${ze}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Dt=e=>"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType,Lt=e=>{if(!e)return document;if(Dt(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(Dt(t))return t}return document},At=(e,t,n)=>{const r=n.split(",");let i;for(let o=0,a=r.length;o<a;o++)(i=r[o])&&e.registerName(t,i)},It=(e,t)=>{var n;const r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Le),i=[];for(let o=0,a=r.length;o<a;o++){const t=r[o].trim();if(!t)continue;const n=t.match(Rt);if(n){const t=0|parseInt(n[1],10),r=n[2];0!==t&&(Xe(r,t),At(e,r,n[3]),e.getTag().insertRules(t,i)),i.length=0}else i.push(t)}},Ot=e=>{const t=Lt(e.options.target).querySelectorAll(Nt);for(let n=0,r=t.length;n<r;n++){const r=t[n];r&&r.getAttribute(ze)!==Ne&&(It(e,r),r.parentNode&&r.parentNode.removeChild(r))}};let _t=!1;function Bt(){if(!1!==_t)return _t;if("undefined"!=typeof document){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return _t=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return _t=t.getAttribute("content")||void 0}return _t=n.nc}const Ft=(e,t)=>{const n=document.head,r=e||n,i=document.createElement("style"),o=(e=>{const t=Array.from(e.querySelectorAll(`style[${ze}]`));return t[t.length-1]})(r),a=void 0!==o?o.nextSibling:null;i.setAttribute(ze,Ne),i.setAttribute(Re,De);const s=t||Bt();return s&&i.setAttribute("nonce",s),r.insertBefore(i,a),i},Vt=class{constructor(e,t){this.element=Ft(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(e=>{var t;if(e.sheet)return e.sheet;const n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets;for(let r=0,i=n.length;r<i;r++){const t=n[r];if(t.ownerNode===e)return t}throw Fe(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Ut=class{constructor(e,t){this.element=Ft(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Ht=Ae;const Wt={isServer:!Ae,useCSSOMInjection:!Oe};class Yt{static registerId(e){return We(e)}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.options=Object.assign(Object.assign({},Wt),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ae&&Ht&&(Ht=!1,Ot(this)),Mt(this,()=>(e=>{const t=e.getTag(),{length:n}=t;let r="";for(let i=0;i<n;i++){const n=Ye(i);if(void 0===n)continue;const o=e.names.get(n);if(void 0===o||!o.size)continue;const a=t.getGroup(i);if(0===a.length)continue;const s=ze+".g"+i+'[id="'+n+'"]';let l="";for(const e of o)e.length>0&&(l+=e+",");r+=a+s+'{content:"'+l+'"}'+Le}return r})(this))}rehydrate(){!this.server&&Ae&&Ot(this)}reconstructWithOptions(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=new Yt(Object.assign(Object.assign({},this.options),e),this.gs,t&&this.names||void 0);return n.keyframeIds=new Set(this.keyframeIds),!this.server&&Ae&&e.target!==this.options.target&&Lt(this.options.target)!==Lt(e.target)&&Ot(n),n}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=(e=(e=>{let{useCSSOMInjection:t,target:n,nonce:r}=e;return t?new Vt(n,r):new Ut(n,r)})(this.options),new zt(e)));var e}hasNameForId(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r}registerName(e,t){We(e),e.startsWith(_e)&&this.keyframeIds.add(e);const n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(We(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(We(e)),this.clearNames(e)}clearTag(){this.tag=void 0}}const Xt=new WeakSet,Kt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Gt(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in Kt||e.startsWith("--")?String(t).trim():t+"px"}const Qt=e=>e>="A"&&e<="Z";function qt(e){let t="";for(let n=0;n<e.length;n++){const r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Qt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}const Jt=Symbol.for("sc-keyframes");function Zt(e){return Ct(e)&&!(e.prototype&&e.prototype.isReactComponent)}const en=e=>null==e||!1===e||""===e,tn=Symbol.for("react.client.reference");function nn(e){return e.$$typeof===tn}const rn=e=>{const t=[];for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!en(r)&&(Array.isArray(r)&&Xt.has(r)||Ct(r)?t.push(qt(n)+":",r,";"):Pt(r)?t.push(n+" {",...rn(r),"}"):t.push(qt(n)+": "+Gt(n,r)+";"))}return t};function on(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];if(en(e))return i;const o=typeof e;if("string"===o)return i.push(e),i;if("function"===o){if(nn(e))return i;if(Zt(e)&&t){return on(e(t),t,n,r,i)}return i.push(e),i}if(Array.isArray(e)){for(let o=0;o<e.length;o++)on(e[o],t,n,r,i);return i}if(Et(e))return i.push(`.${e.styledComponentId}`),i;if(function(e){return"object"==typeof e&&null!==e&&Jt in e}(e))return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(nn(e))return i;if(Pt(e)){const t=rn(e);for(let e=0;e<t.length;e++)i.push(t[e]);return i}return i.push(e.toString()),i}const an=ot(De);class sn{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=it(an,t),this.baseStyle=n,Yt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";{let i="";for(let r=0;r<this.rules.length;r++){const o=this.rules[r];if("string"==typeof o)i+=o;else if(o)if(Zt(o)){const r=o(e);"string"==typeof r?i+=r:null!=r&&!1!==r&&(i+=Tt(on(r,e,t,n)))}else i+=Tt(on(o,e,t,n))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);const e=n.hash?n.hash+i:i;let o=this.dynamicNameCache.get(e);if(!o){if(o=nt(it(it(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){const e=this.dynamicNameCache.keys().next().value;void 0!==e&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,o)}if(!t.hasNameForId(this.componentId,o)){const e=n(i,"."+o,void 0,this.componentId);t.insertRules(this.componentId,o,e)}r=jt(r,o)}}return r}}const ln=/&/g,cn=47;function un(e,t){let n=0;for(;--t>=0&&92===e.charCodeAt(t);)n++;return!(1&~n)}function dn(e){const t=e.length;let n="",r=0,i=0,o=0,a=!1,s=!1;for(let l=0;l<t;l++){const c=e.charCodeAt(l);if(0!==o||a||c!==cn||42!==e.charCodeAt(l+1))if(a)42===c&&e.charCodeAt(l+1)===cn&&(a=!1,l++);else if(34!==c&&39!==c||un(e,l)){if(0===o)if(123===c)i++;else if(125===c){if(i--,i<0){s=!0;let n=l+1;for(;n<t;){const t=e.charCodeAt(n);if(59===t||10===t)break;n++}n<t&&59===e.charCodeAt(n)&&n++,i=0,l=n-1,r=n;continue}0===i&&(n+=e.substring(r,l+1),r=l+1)}else 59===c&&0===i&&(n+=e.substring(r,l+1),r=l+1)}else 0===o?o=c:o===c&&(o=0);else a=!0,l++}return s||0!==i||0!==o?(r<t&&0===i&&0===o&&(n+=e.substring(r)),n):e}function pn(e,t){for(let n=0;n<e.length;n++){const r=e[n];if("rule"===r.type){r.value=t+" "+r.value,r.value=r.value.replaceAll(",",","+t+" ");const e=r.props,n=[];for(let r=0;r<e.length;r++)n[r]=t+" "+e[r];r.props=n}Array.isArray(r.children)&&"@keyframes"!==r.type&&(r.children=pn(r.children,t))}return e}function hn(){let e,t,n,{options:r=Ge,plugins:i=Ke}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge;const o=(n,r,i)=>i.startsWith(t)&&i.endsWith(t)&&i.replaceAll(t,"").length>0?`.${e}`:n,a=i.slice();a.push(e=>{e.type===L&&e.value.includes("&")&&(n||(n=new RegExp(`\\${t}\\b`,"g")),e.props[0]=e.props[0].replace(ln,t).replace(n,o))}),r.prefix&&a.push(Ee),a.push(ke);let s=[];const l=function(e){var t=K(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}(a.concat((d=e=>s.push(e),function(e){e.root||(e=e.return)&&d(e)}))),c=function(i){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&",t=o,n=void 0;const c=function(e){const t=-1!==e.indexOf("//"),n=-1!==e.indexOf("}");if(!t&&!n)return e;if(!t)return dn(e);const r=e.length;let i="",o=0,a=0,s=0,l=0,c=0,u=!1;for(;a<r;){const t=e.charCodeAt(a);if(34!==t&&39!==t||un(e,a))if(0===s)if(t===cn&&a+1<r&&42===e.charCodeAt(a+1)){for(a+=2;a+1<r&&(42!==e.charCodeAt(a)||e.charCodeAt(a+1)!==cn);)a++;a+=2}else if(40!==t)if(41!==t)if(l>0)a++;else if(42===t&&a+1<r&&e.charCodeAt(a+1)===cn)i+=e.substring(o,a),a+=2,o=a,u=!0;else if(t===cn&&a+1<r&&e.charCodeAt(a+1)===cn){for(i+=e.substring(o,a);a<r&&10!==e.charCodeAt(a);)a++;o=a,u=!0}else 123===t?c++:125===t&&c--,a++;else l>0&&l--,a++;else l++,a++;else a++;else 0===s?s=t:s===t&&(s=0),a++}return u?(o<r&&(i+=e.substring(o)),0===c?i:dn(i)):0===c?e:dn(e)}(i);let u=je(a||o?a+" "+o+" { "+c+" }":c);return r.namespace&&(u=pn(u,r.namespace)),s=[],Se(u,l),s},u=r;var d;let p=rt;for(let h=0;h<i.length;h++)i[h].name||Fe(15),p=it(p,i[h].name);return(null==u?void 0:u.namespace)&&(p=it(p,u.namespace)),(null==u?void 0:u.prefix)&&(p=it(p,"p")),c.hash=p!==rt?p.toString():"",c}const fn=new Yt,mn=hn(),gn=i.createContext({shouldForwardProp:void 0,styleSheet:fn,stylis:mn,stylisPlugins:void 0});gn.Consumer;function vn(){return i.useContext(gn)}const yn=i.createContext(void 0);yn.Consumer;function xn(e){const t=i.useContext(yn),n=i.useMemo(()=>function(e,t){if(!e)throw Fe(14);if(Ct(e)){return e(t)}if(Array.isArray(e)||"object"!=typeof e)throw Fe(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?i.createElement(yn.Provider,{value:n},e.children):null}const bn=Object.prototype.hasOwnProperty,wn={};function Sn(e,t){const n="string"!=typeof e?"sc":Ze(e);wn[n]=(wn[n]||0)+1;const r=n+"-"+at(De+n+wn[n]);return t?t+"-"+r:r}function kn(e,t,n){const r=Et(e),o=e,a=!lt(e),{attrs:s=Ke,componentId:l=Sn(t.displayName,t.parentComponentId),displayName:c=ct(e)}=t,u=t.displayName&&t.componentId?Ze(t.displayName)+"-"+t.componentId:t.componentId||l,d=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s;let{shouldForwardProp:p}=t;if(r&&o.shouldForwardProp){const e=o.shouldForwardProp;if(t.shouldForwardProp){const n=t.shouldForwardProp;p=(t,r)=>e(t,r)&&n(t,r)}else p=e}const h=new sn(n,u,r?o.componentStyle:void 0);function f(e,t){return function(e,t,n){const{attrs:r,componentStyle:o,defaultProps:a,foldedComponentIds:s,styledComponentId:l,target:c}=e,u=i.useContext(yn),d=vn(),p=e.shouldForwardProp||d.shouldForwardProp,h=Qe(t,u,a)||Ge;let f,m;{const e=i.useRef(null),n=e.current;if(null!==n&&n[1]===h&&n[2]===d.styleSheet&&n[3]===d.stylis&&n[7]===o&&function(e,t,n){const r=e,i=t;let o=0;for(const a in i)if(bn.call(i,a)&&(o++,r[a]!==i[a]))return!1;return o===n}(n[0],t,n[4]))f=n[5],m=n[6];else{f=function(e,t,n){const r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let o=0;o<e.length;o++){const n=e[o],a=Ct(n)?n(i?Object.assign({},r):r):n;for(const e in a)"className"===e?r.className=jt(r.className,a[e]):"style"===e?r.style=Object.assign(Object.assign({},r.style),a[e]):e in t&&void 0===t[e]||(r[e]=a[e])}return"className"in t&&"string"==typeof t.className&&(r.className=jt(r.className,t.className)),r}(r,t,h),m=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(o,f,d.styleSheet,d.stylis);let n=0;for(const e in t)bn.call(t,e)&&n++;e.current=[t,h,d.styleSheet,d.stylis,n,f,m,o]}}const g=f.as||c,v=function(e,t,n,r){const i={};for(const o in e)void 0===e[o]||"$"===o[0]||"as"===o||"theme"===o&&e.theme===n||("forwardedAs"===o?i.as=e.forwardedAs:r&&!r(o,t)||(i[o]=e[o]));return i}(f,g,h,p);let y=jt(s,l);return m&&(y+=" "+m),f.className&&(y+=" "+f.className),v[lt(g)&&g.includes("-")?"class":"className"]=y,n&&(v.ref=n),(0,i.createElement)(g,v)}(m,e,t)}f.displayName=c;let m=i.forwardRef(f);return m.attrs=d,m.componentStyle=h,m.displayName=c,m.shouldForwardProp=p,m.foldedComponentIds=r?jt(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=u,m.target=r?o.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(const i of n)$t(e,i,!0);return e}({},o.defaultProps,e):e}}),Mt(m,()=>`.${m.styledComponentId}`),a&&kt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Cn=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function En(e,t){const n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}const jn=e=>(Xt.add(e),e);function Tn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(Ct(e)||Pt(e))return jn(on(En(Ke,[e,...n])));const i=e;return 0===n.length&&1===i.length&&"string"==typeof i[0]?on(i):jn(on(En(i,n)))}function Pn(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ge;if(!t)throw Fe(1,t);const r=function(r){for(var i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];return e(t,n,Tn(r,...o))};return r.attrs=r=>Pn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Pn(e,t,Object.assign(Object.assign({},n),r)),r}const $n=e=>Pn(kn,e),Mn=$n;Cn.forEach(e=>{Mn[e]=$n(e)});class zn{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){const n=e[t];if(Ct(n)&&!Et(n))return!1}return!0}(e),Yt.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){const i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{const o=this.computeRules(e,t,n,r);n.insertRules(i,o.name,o.rules)}return}const o=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&o){const t=o.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){const i=Tt(on(this.rules,t,n,r)),o={name:this.componentId+e,rules:r(i,"")};return this.instanceRules.set(e,o),o}rebuildGroup(e){const t=this.componentId;e.clearRules(t);for(const n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}}function Nn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const o=Tn(e,...n),a=`sc-global-${at(JSON.stringify(o))}`,s=new zn(o,a),l=e=>{const t=vn(),n=i.useContext(yn);let r;{const e=i.useRef(null);null===e.current&&(e.current=t.styleSheet.allocateGSInstance(a)),r=e.current}t.styleSheet.server&&c(r,e,t.styleSheet,n,t.stylis);{const o=s.isStatic?[r,t.styleSheet,s]:[r,e,t.styleSheet,n,t.stylis,s],l=i.useRef(s);i.useLayoutEffect(()=>(t.styleSheet.server||(l.current!==s&&(t.styleSheet.clearRules(a),l.current=s),c(r,e,t.styleSheet,n,t.stylis)),()=>{s.removeStyles(r,t.styleSheet)}),o)}return t.styleSheet.server&&s.instanceRules.delete(r),null};function c(e,t,n,r,i){if(s.isStatic)s.renderStyles(e,Be,n,i);else{const o=Object.assign(Object.assign({},t),{theme:Qe(t,r,l.defaultProps)});s.renderStyles(e,o,n,i)}}return i.memo(l)}var Rn;class Dn{constructor(e,t){var n=this;this[Rn]=!0,this.inject=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:mn;const r=n.getName(t);if(!e.hasNameForId(n.id,r)){const i=t(n.rules,r,"@keyframes");e.insertRules(n.id,r,i)}},this.name=e,this.id=_e+e,this.rules=t,We(this.id),Mt(this,()=>{throw Fe(12,String(this.name))})}getName(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mn;return e.hash?this.name+nt(+e.hash>>>0):this.name}}function Ln(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=Tt(Tn(e,...n)),o=at(i);return new Dn(o,i)}Rn=Jt;const An=Nn`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "ss01" 1;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100vh;
    background: ${e=>{let{theme:t}=e;return t.colors.background}};
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    font-family: ${e=>{let{theme:t}=e;return t.fonts.main}};
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.base}};
    font-weight: 400;
    line-height: 1.65;
    letter-spacing: -0.012em;
    overflow-x: hidden;
    font-variant-numeric: tabular-nums;
  }

  h1 {
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.hero}};
    font-weight: 900;
    letter-spacing: -0.05em;
    line-height: 0.96;
    margin: 0;

    @media (max-width: 768px) {
      font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxl}};
    }
  }

  h2 {
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxxl}};
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1.05;
    margin: 0;

    @media (max-width: 768px) {
      font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxl}};
    }
  }

  h3 {
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xl}};
    font-weight: 700;
    letter-spacing: -0.022em;
    line-height: 1.2;
    margin: 0;
  }

  h4, h5, h6 {
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.3;
    margin: 0;
  }

  p {
    margin: 0;
    line-height: 1.72;
    font-weight: 400;
    letter-spacing: -0.008em;
  }

  a {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
    text-decoration: none;
    transition: ${e=>{let{theme:t}=e;return t.transitionFast}};
    cursor: pointer;

    &:hover {
      color: ${e=>{let{theme:t}=e;return t.colors.primaryHover}};
    }
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    font-family: ${e=>{let{theme:t}=e;return t.fonts.main}};
    cursor: pointer;
    border: none;
    background: none;
    font-size: inherit;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: 2px solid ${e=>{let{theme:t}=e;return t.colors.primary}}60;
      outline-offset: 3px;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>{let{theme:t}=e;return t.colors.textTertiary}}55;
    border-radius: 2px;

    &:hover {
      background: ${e=>{let{theme:t}=e;return t.colors.textTertiary}}80;
    }
  }

  ::selection {
    background: ${e=>{let{theme:t}=e;return t.colors.primary}}22;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`,In=[{id:1,name:"About",url:"#about"},{id:2,name:"Experience",url:"#experience"},{id:3,name:"Projects",url:"#projects"},{id:4,name:"Skills",url:"#skills"},{id:5,name:"Achievements",url:"#achievements"},{id:6,name:"Certifications",url:"#certifications"},{id:7,name:"Education",url:"#education"},{id:8,name:"Contact",url:"#contact"}],On=[{id:1,name:"GitHub",url:"https://github.com/Dibyajyoti-Pradhan"},{id:2,name:"LinkedIn",url:"https://www.linkedin.com/in/dibyajyoti-pradhan-83a649146/"},{id:3,name:"Instagram",url:"https://www.instagram.com/shaky_coder/"},{id:4,name:"LeetCode",url:"https://leetcode.com/u/dibyojyotipradhan/"}],_n={name:"Dibyajyoti Pradhan",shortName:"Dibyajyoti",description:"Senior Software Engineer",about:['Senior Software Engineer based in London. Over the past 6 years I\u2019ve shipped products at <a href="https://en.wikipedia.org/wiki/Amazon_(company)" target="_blank" rel="noopener noreferrer">Amazon</a>, <a href="https://en.wikipedia.org/wiki/Meta_Platforms" target="_blank" rel="noopener noreferrer">Meta</a>, and <a href="https://en.wikipedia.org/wiki/HubSpot" target="_blank" rel="noopener noreferrer">HubSpot</a> \u2014 across payments, advertising infrastructure, and AI-powered CRM. At Meta I worked on the Ads Manager, shipping features that moved top-line revenue. At HubSpot I\u2019ve worked on Account Insights \u2014 a real-time recommendation engine that improved user retention by 10% and drove 40% platform adoption across the CRM.',"Currently completing a Professional Certificate in ML and AI at Imperial College London \u2014 and applying it directly to the AI-powered systems I'm building at HubSpot.","Outside of work, I love to travel, play chess, run marathons, and work out to stay fit and active."],currentCompany:{name:"HubSpot",url:"https://en.wikipedia.org/wiki/HubSpot"},contact:{heading:"Get In Touch",message:"I'm open to new roles, collaborations, and interesting problems. My inbox is always open.",email:"dibyojyotipradhan@gmail.com"}},Bn=[{category:"Languages",items:["C++","Python","Java","JavaScript","TypeScript","Hack","SQL"]},{category:"Frameworks",items:["React","React Native","Spring MVC","Google Guice","Dagger 2.0"]},{category:"AI",items:["GPT-4o","Claude AI","LLM Integration","Prompt Engineering","GenAI"]},{category:"Web Technologies",items:["HTML","CSS","GraphQL"]},{category:"Tools",items:["Git","Docker","Kubernetes","Kafka","AWS","CI/CD"]},{category:"Databases",items:["MySQL","PostgreSQL","MongoDB","DynamoDB","Vitess DB"]},{category:"Other",items:["System Design","Scalable Architecture","RESTful APIs","Microservices","Backend Development","Data Structures","Algorithms","OOP","Design Patterns"]}],Fn=[{id:1,position:"Senior Software Engineer",company:"HubSpot",location:"London",url:"https://en.wikipedia.org/wiki/HubSpot",date:"07/2024 - Present",responsibilities:["Designed and built Account Insights, a real-time recommendation engine \u2014 10% user retention increase and 40% platform adoption (highest across the platform).","Architected GPT-4 powered audit log summarization \u2014 RPC infrastructure with JinJava templating and memcached caching, processing 100k+ audit events with sub-second response. Reduced enterprise security analysis from hours to minutes.","Built AI-powered admin agents using GPT-4o to automate cleanup of stale CRM assets, reducing 70% of recurring customer costs.","Currently contributing to the Product Approvals platform \u2014 building high-throughput, low-latency services for gated access, approval workflows, and audit trail integration across HubSpot products.","Mentored junior developers and collaborated across engineering, product, and design."],techStack:["Java","JavaScript","TypeScript","SQL","React","Google Guice","HTML","CSS","GraphQL","Kafka","AWS","Kubernetes","Vitess DB","MySQL","HBase","Backend","Frontend"]},{id:2,position:"Software Engineer II",company:"Meta",location:"London",url:"https://en.wikipedia.org/wiki/Meta_Platforms",date:"04/2022 - 05/2024",responsibilities:["Built mid-flight recommendation flows (Placements, Campaign Budget) in Ads Manager \u2014 drove a 0.04% lift in Meta\u2019s top-line revenue weighted adoptions and 12,000+ weekly resolutions.","Cut screen load times by 20% across 8 high-traffic interfaces via Relay query pre-fetching.","Revamped the ad duplication flow for ODAX objectives \u2014 14% revenue increase and 18% growth in ad duplications."],techStack:["JavaScript","TypeScript","Hack","SQL","React Native","GraphQL (Relay)","A/B Testing (Experimentation)","TAO","Scuba","Presto","Frontend"]},{id:3,position:"Software Development Engineer II",company:"Amazon",location:"Hyderabad",url:"https://en.wikipedia.org/wiki/Amazon_(company)",date:"10/2021 - 02/2022",responsibilities:["Scaled Amazon Pay for Business to 5M downloads at a 4.3-star rating from launch.","Built an offline-first architecture that eliminated perceived latency \u2014 the app felt instant even on degraded connections.","Reduced MIS Settlement Report crawler time from 3 hours to 10 minutes, unblocking 70+ merchants daily."],techStack:["Java","JavaScript","Python","MySQL","AWS","React Native","Spring MVC","DynamoDB","Frontend","Backend"]},{id:4,position:"Software Development Engineer I",company:"Amazon",location:"Hyderabad",url:"https://en.wikipedia.org/wiki/Amazon_(company)",date:"07/2019 - 09/2021",responsibilities:["Built 18 product pages for the Amazon Pay for Business app, shipping with a team of 3 to 5M merchant engagements at launch.","Mentored an SDE (promoted) and an intern (pre-placement offer). Promoted to SDE II within 2 years."],techStack:["Java","JavaScript","AWS","React Native","Spring MVC","DynamoDB","React","Full Stack","RESTful APIs"]},{id:5,position:"Software Development Engineer Intern",company:"Amazon",location:"Hyderabad",url:"https://en.wikipedia.org/wiki/Amazon_(company)",date:"05/2018 - 07/2018",responsibilities:["Built automation for sequence generation in a tier-1 service \u2014 used by 100+ developer teams across Amazon.","Delivered a full-stack admin tool to monitor and manage sequence configurations in real-time."],techStack:["Java","AWS","Spring MVC","DynamoDB","Backend","RESTful APIs","Micro-service Architecture"]}],Vn=[{id:7,title:"Hull Tactical \u2013 S&P 500 Market Prediction",description:"Predicting S&P 500 market trends using supervised classification models. Applied feature engineering, cross-validation, and ensemble methods on historical financial data to forecast directional movement.",techStack:["Python","Pandas","Scikit-learn","Matplotlib","Jupyter"],url:"https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London/tree/main/Hull%20Tactical%20%E2%80%93%20Market%20Prediction",external:"https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London/tree/main/Hull%20Tactical%20%E2%80%93%20Market%20Prediction",stars:0,badge:"Imperial College London"},{id:8,title:"Black-Box Optimisation Challenge",description:"Solved a black-box optimisation problem using Bayesian optimisation with Gaussian Process surrogates. Minimised expensive objective function evaluations while converging to the global optimum.",techStack:["Python","NumPy","Scikit-learn","GPy","Jupyter"],url:"https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London/tree/main/Black-Box-Optimisation-Challenge",external:"https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London/tree/main/Black-Box-Optimisation-Challenge",stars:0,badge:"Imperial College London"},{id:1,title:"Cloud Storage System",description:"A Java-based cloud storage system that allows users to manage files and directories, perform file operations, and handle compression and decompression of files.",techStack:["Java","Maven","JUnit 5","File Management","Compression","Decompression"],url:"https://github.com/Dibyajyoti-Pradhan/cloud-storage-system",external:"https://github.com/Dibyajyoti-Pradhan/cloud-storage-system",stars:0},{id:2,title:"Concurrency In Java: Web Crawler",description:"Developed a concurrent web crawler in Java to explore and index pages within a specific domain. The crawler processes URLs from a given starting point, printing out each visited URL and its links while restricting itself to the specified domain.",techStack:["Java","Concurrency","Maven","JUnit","Lombok"],url:"https://github.com/Dibyajyoti-Pradhan/Crawler",external:"https://github.com/Dibyajyoti-Pradhan/Crawler",stars:0},{id:5,title:"Pokemon - Advanced HTML & CSS Project",description:"An advanced CSS project for Pokemon lovers, showcasing how far UI can be developed without JavaScript. Built using advanced HTML, CSS, SASS, BEM, and 7-1 Architecture.",techStack:["HTML","CSS","SASS","BEM","7-1 Architecture"],url:"https://github.com/Dibyajyoti-Pradhan/Iris",external:"https://github.com/Dibyajyoti-Pradhan/Iris",stars:0},{id:6,title:"Netflix: React",description:"A Netflix clone built from scratch using React, Firebase Authentication, and Styled Components. The project demonstrates advanced component usage and state management.",techStack:["React","Firebase","Styled Components"],url:"https://github.com/Dibyajyoti-Pradhan/Netflix",external:"https://github.com/Dibyajyoti-Pradhan/Netflix",stars:0},{id:3,title:"CLI Application: Cron Parser",description:"Implemented a cron expression parser in Java to expand cron strings into detailed schedules. Parses five fields (minute, hour, day of month, month, day of week) and outputs the schedule in a formatted table.",techStack:["Java","Maven","CLI Development","JUnit"],url:"https://github.com/Dibyajyoti-Pradhan/CronParser",external:"https://github.com/Dibyajyoti-Pradhan/CronParser",stars:0},{id:4,title:"CSV Parser: Cookie Log",description:"Developed a command-line application in Java to parse log files and determine the most active cookies for a given date. Processes CSV logs to provide insights into cookie activity.",techStack:["Java","Maven","JUnit","Lombok","Hashing"],url:"https://github.com/Dibyajyoti-Pradhan/Cookie",external:"https://github.com/Dibyajyoti-Pradhan/Cookie",stars:0}],Un=[{id:1,title:"GenAI for Ad Creative",description:"Introduced GenAI (Llama 2) for Ad Creatives in Meta Ads Manager App in Meta GenAI Hackathon, enhancing ad creative capabilities."},{id:2,title:"Innovation Award",description:'Received the "Most Innovative Award" at the Amazon Pay EDH Hackathon for pioneering a near-zero latency model for the Amazon Pay For Business App.'},{id:3,title:"Scholarship Recognition",description:"Recognized with the Jagadis Bose National Talent Search Scholarship, selected as one of 56 scholars from over 3000 applicants from top-tier colleges."}],Hn=[{id:1,school:"Jadavpur University",url:"https://en.wikipedia.org/wiki/Jadavpur_University",degree:"Bachelor Of Engineering",duration:"2015 - 2019",location:"Kolkata, India",major:"Electronics and Telecommunication Engineering",details:["CGPA: 8.05","Award Senior JBSNTS Scholarship"]},{id:2,school:"Krishnath College School",url:"https://en.wikipedia.org/wiki/Krishnath_College_School/",degree:"Higher Secondary (WBCHSE)",duration:"2013 - 2015",location:"West Bengal, India",major:"",details:["Percentage: 94.2%","Percentile: 99.63%","Physics 100 | Maths 95 | English 92","WBJEE: 335 (GEN | Engg.) | 3351 (GEN | Med)","Also cracked IISER Kolkata and IIEST (Mechanical)"]},{id:3,school:"Mary Immaculate School",url:"https://mismsd.in/",degree:"Secondary (ICSE)",duration:"2013",location:"West Bengal, India",major:"",details:["Percentage: 90%","Maths 97 | Computer Application 97 | Science 90"]}],Wn=[{id:1,title:"Professional Certificate in Machine Learning and Artificial Intelligence",institution:"Imperial College London",institutionUrl:"https://www.imperial.ac.uk/business-school/executive-education/technology-analytics-data-science/professional-certificate-machine-learning-and-artificial-intelligence-programme/online/",department:"",duration:"25 Weeks",date:"2025 - 2026",status:"Completed",issuedDate:"April 9, 2026",credentialUrl:"https://certificates.emeritus.org/cc32b358-67db-440e-8d7e-b34e017f1f29#acc.HJN0mXxZ",certificatePdf:"/ImperialAI.pdf",certificateThumb:"/ImperialAI_thumb.png",blockchainId:"0xd8c36175de634850a1b6fc7ae86da566385f7ebb6dfc5479efd9d18c83486853",curriculum:["Foundation: Intro to ML, Data Analysis with Pandas, Supervised Learning","Core ML: Classification, Regression, Clustering, Dimensionality Reduction","Advanced: Neural Networks, Deep Learning, CNNs, NLP","Applied: Recommender Systems, Reinforcement Learning, Deployment","Capstone: Industry Projects with Real-World Data"],capstoneProjects:[{title:"Hull Tactical \u2013 S&P 500 Market Prediction",description:"Predicting market trends using classification models",url:"https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London/tree/main/Hull%20Tactical%20%E2%80%93%20Market%20Prediction"},{title:"Black-Box Optimisation Challenge",description:"Bayesian optimization with Gaussian Process surrogates",url:"https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London/tree/main/Black-Box-Optimisation-Challenge"}],techStack:["Python","NumPy","Pandas","Scikit-learn","PyTorch","Matplotlib","Jupyter"],outcome:"",repositoryUrl:"https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London"}];var Yn={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xn=i.createContext&&i.createContext(Yn),Kn=["attr","size","title"];function Gn(){return Gn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gn.apply(null,arguments)}function Qn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function qn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Qn(Object(n),!0).forEach(function(t){Jn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Jn(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zn(e){return e&&e.map((e,t)=>i.createElement(e.tag,qn({key:t},e.attr),Zn(e.child)))}function er(e){return t=>i.createElement(tr,Gn({attr:qn({},e.attr)},t),Zn(e.child))}function tr(e){var t=t=>{var n,{attr:r,size:o,title:a}=e,s=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,Kn),l=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",Gn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:n,style:qn(qn({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&i.createElement("title",null,a),e.children)};return void 0!==Xn?i.createElement(Xn.Consumer,null,e=>t(e)):t(Yn)}function nr(e){return er({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function rr(e){return er({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function ir(e){return er({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function or(e){return er({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function ar(e){return er({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z"},child:[]}]})(e)}function sr(e){return er({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}function lr(e){return er({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(e)}function cr(e){return er({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(e)}function ur(e){return er({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(e)}function dr(e){return er({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function pr(e){return er({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function hr(e){return er({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}function fr(e){return er({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function mr(e){return er({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(e)}function gr(e){return er({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function vr(e){return er({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function yr(e){return er({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"},child:[]}]})(e)}function xr(e){return er({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(e)}function br(e){return er({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(e)}function wr(e){return er({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}const Sr={fonts:{main:"-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",mono:"'SF Mono', 'Fira Code', 'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace",display:"'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif"},fontSizes:{xs:"11px",sm:"13px",base:"15px",lg:"18px",xl:"24px",xxl:"36px",xxxl:"48px",hero:"72px",display:"96px",mega:"128px"},fontWeights:{light:300,regular:400,medium:500,semibold:600,bold:700,heavy:800,black:900},transition:"all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",transitionFast:"all 0.15s cubic-bezier(0.25, 0.1, 0.25, 1)",transitionSlow:"all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",transitionSpring:"all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",borderRadius:"12px",borderRadiusSmall:"6px",borderRadiusLarge:"18px",borderRadiusPill:"980px",spacing:{xs:"8px",sm:"16px",md:"24px",lg:"40px",xl:"72px",xxl:"120px"}},kr={...Sr,colors:{background:"#080809",backgroundSecondary:"#0e0e11",backgroundTertiary:"#141418",backgroundGradient:"linear-gradient(180deg, #080809 0%, #0e0e11 100%)",backgroundElevated:"#121216",text:"#f2f2f5",textSecondary:"#8e8e99",textTertiary:"#55555f",primary:"#f97316",primaryHover:"#fb923c",primarySubtle:"rgba(249, 115, 22, 0.08)",primaryBorder:"rgba(249, 115, 22, 0.2)",secondary:"#0e0e11",accent:"#141418",accentHover:"#1a1a1f",white:"#ffffff",darkNavy:"#080809",navy:"#0e0e11",lightNavy:"#141418",headerBackground:"rgba(8, 8, 9, 0.92)",linkHover:"#fb923c",cardGlow:"rgba(249, 115, 22, 0.15)",cardGlowGradient:"rgba(249, 115, 22, 0.06)",profileGlow:"rgba(249, 115, 22, 0.35)",cardHoverBackground:"rgba(18, 18, 22, 0.98)",cardBackground:"rgba(14, 14, 17, 0.7)",cardBorder:"rgba(255, 255, 255, 0.05)",cardBorderHover:"rgba(249, 115, 22, 0.3)",slate:"#8e8e99",lightSlate:"#b0b0be",lightestSlate:"#d0d0e0",green:"#4ade80",greenTint:"rgba(249, 115, 22, 0.08)",glass:"rgba(12, 12, 15, 0.8)",glassBorder:"rgba(255, 255, 255, 0.05)",divider:"rgba(255, 255, 255, 0.05)",timelineLine:"linear-gradient(180deg, rgba(249,115,22,0.7) 0%, rgba(249,115,22,0.1) 100%)",timelineDot:"#f97316",hubspot:"#ff7a59",meta:"#1877f2",amazon:"#ff9900"},shadows:{small:"0 1px 6px rgba(0, 0, 0, 0.5)",medium:"0 4px 20px rgba(0, 0, 0, 0.6)",large:"0 12px 48px rgba(0, 0, 0, 0.7)",glow:"0 0 40px rgba(249, 115, 22, 0.18)",card:"0 1px 0 rgba(255,255,255,0.04), 0 2px 16px rgba(0, 0, 0, 0.4)",cardHover:"0 0 0 1px rgba(249, 115, 22, 0.25), 0 8px 40px rgba(0, 0, 0, 0.55), 0 0 24px rgba(249,115,22,0.08)",inner:"inset 0 1px 0 rgba(255,255,255,0.06)"}},Cr={...Sr,colors:{background:"#f5f5f7",backgroundSecondary:"#eaeaef",backgroundTertiary:"#dededf",backgroundGradient:"linear-gradient(180deg, #f5f5f7 0%, #eaeaef 100%)",backgroundElevated:"#ffffff",text:"#1d1d1f",textSecondary:"#424245",textTertiary:"#86868b",primary:"#e8650a",primaryHover:"#c9540a",primarySubtle:"rgba(232, 101, 10, 0.08)",primaryBorder:"rgba(232, 101, 10, 0.2)",secondary:"#eaeaef",accent:"#f0f0f5",accentHover:"#e5e5ea",white:"#ffffff",darkNavy:"#eaeaef",navy:"#f5f5f7",lightNavy:"#ffffff",headerBackground:"rgba(245, 245, 247, 0.92)",linkHover:"#c9540a",cardGlow:"rgba(232, 101, 10, 0.08)",cardGlowGradient:"rgba(232, 101, 10, 0.04)",profileGlow:"rgba(232, 101, 10, 0.2)",cardHoverBackground:"#ffffff",cardBackground:"rgba(255, 255, 255, 0.85)",cardBorder:"rgba(0, 0, 0, 0.08)",cardBorderHover:"rgba(232, 101, 10, 0.24)",slate:"#424245",lightSlate:"#636366",lightestSlate:"#8e8e93",green:"#34c759",greenTint:"rgba(232, 101, 10, 0.08)",glass:"rgba(255, 255, 255, 0.92)",glassBorder:"rgba(0, 0, 0, 0.08)",divider:"rgba(0, 0, 0, 0.08)",timelineLine:"linear-gradient(180deg, rgba(232,101,10,0.55) 0%, rgba(232,101,10,0.04) 100%)",timelineDot:"#e8650a",hubspot:"#e85d2e",meta:"#1877f2",amazon:"#e07b00"},shadows:{small:"0 1px 4px rgba(0, 0, 0, 0.08), 0 0 0 0.5px rgba(0,0,0,0.04)",medium:"0 4px 20px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.06)",large:"0 12px 48px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06)",glow:"0 0 32px rgba(232, 101, 10, 0.12)",card:"0 0 0 0.5px rgba(0,0,0,0.06), 0 2px 8px rgba(0, 0, 0, 0.06), 0 8px 24px rgba(0,0,0,0.04)",cardHover:"0 0 0 1px rgba(232, 101, 10, 0.2), 0 8px 36px rgba(0, 0, 0, 0.12)",inner:"inset 0 1px 0 rgba(255,255,255,1)"}};var Er=n(579);const jr=(0,i.createContext)(),Tr=e=>{let{children:t,gameMode:n}=e;const r=localStorage.getItem("theme"),[o,a]=(0,i.useState)(r||"dark");(0,i.useEffect)(()=>{localStorage.setItem("theme",o)},[o]);const s=o,l="dark"===s?kr:Cr,c=n?{...l}:l;return(0,Er.jsx)(jr.Provider,{value:{theme:s,toggleTheme:()=>{a(e=>"dark"===e?"light":"dark")},isDarkMode:"dark"===s,gameMode:n},children:t(c)})},Pr=Mn.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
  font-size: 13px;
  border-radius: 7px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;
  flex-shrink: 0;

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    background: ${e=>{let{theme:t}=e;return t.colors.accent}};
  }

  &:focus-visible {
    outline: 2px solid ${e=>{let{theme:t}=e;return t.colors.primary}}60;
    outline-offset: 2px;
  }
`,$r=Mn.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  border: 0;
`,Mr=()=>{const{theme:e,toggleTheme:t,gameMode:n}=(0,i.useContext)(jr),r="dark"===e;return n?null:(0,Er.jsxs)(Pr,{onClick:t,"aria-label":r?"Switch to light mode":"Switch to dark mode",title:r?"Light mode":"Dark mode",children:[r?(0,Er.jsx)(dr,{size:13}):(0,Er.jsx)(sr,{size:13}),(0,Er.jsx)($r,{children:r?"Dark mode":"Light mode"})]})},zr=Ln`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,Nr=Mn.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;

  .logo-block {
    margin-top: 48px;
    margin-bottom: 40px;
    padding-bottom: 28px;
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};

    .name {
      font-size: 18px;
      font-weight: 800;
      letter-spacing: -0.04em;
      color: ${e=>{let{theme:t}=e;return t.colors.text}};
      line-height: 1.2;
      margin-bottom: 6px;
      opacity: 0;
      animation: ${zr} 0.5s ease 0.05s forwards;

      a {
        color: inherit;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover { color: ${e=>{let{theme:t}=e;return t.colors.primary}}; }
      }
    }

    .title {
      font-size: 11px;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      letter-spacing: 0.05em;
      text-transform: uppercase;
      opacity: 0;
      animation: ${zr} 0.5s ease 0.12s forwards;
    }

    .status-row {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 14px;
      opacity: 0;
      animation: ${zr} 0.5s ease 0.2s forwards;

      .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${e=>{let{theme:t}=e;return t.colors.green}};
        flex-shrink: 0;
      }

      span {
        font-size: 10px;
        font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
        color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
    }
  }

  .nav-links {
    flex: 1;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        opacity: 0;
        animation: ${zr} 0.4s ease forwards;

        &:nth-child(1) { animation-delay: 0.16s; }
        &:nth-child(2) { animation-delay: 0.19s; }
        &:nth-child(3) { animation-delay: 0.22s; }
        &:nth-child(4) { animation-delay: 0.25s; }
        &:nth-child(5) { animation-delay: 0.28s; }
        &:nth-child(6) { animation-delay: 0.31s; }
        &:nth-child(7) { animation-delay: 0.34s; }
        &:nth-child(8) { animation-delay: 0.37s; }

        a {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 7px 10px;
          border-radius: 8px;
          color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
          font-size: 13.5px;
          font-weight: 500;
          letter-spacing: -0.01em;
          text-decoration: none;
          transition: all 0.15s ease;
          position: relative;
          cursor: pointer;
          border-left: 2px solid transparent;

          .nav-label {
            transition: transform 0.15s ease;
          }

          .nav-num {
            font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
            font-size: 9px;
            color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
            opacity: 0;
            margin-left: auto;
            letter-spacing: 0.04em;
            transition: opacity 0.15s ease;
          }

          &.active {
            color: ${e=>{let{theme:t}=e;return t.colors.text}};
            font-weight: 600;
            background: ${e=>{let{theme:t}=e;return t.colors.accent}};
            border-left-color: ${e=>{let{theme:t}=e;return t.colors.primary}};

            .nav-num {
              opacity: 0.5;
              color: ${e=>{let{theme:t}=e;return t.colors.primary}};
            }
          }

          &:hover {
            color: ${e=>{let{theme:t}=e;return t.colors.text}};
            background: ${e=>{let{theme:t}=e;return t.colors.accent}};
            text-decoration: none;

            .nav-label { transform: translateX(2px); }
            .nav-num { opacity: 0.4; }
          }
        }
      }
    }
  }

  .bottom-block {
    padding-bottom: 8px;
    padding-top: 20px;
    border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};

    .resume-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%;
      margin-bottom: 16px;
      color: ${e=>{let{theme:t}=e;return t.colors.text}};
      background: ${e=>{let{theme:t}=e;return t.colors.accent}};
      border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
      border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}};
      padding: 10px 14px;
      font-size: 12.5px;
      font-weight: 600;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.main}};
      letter-spacing: -0.01em;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.2s ease;
      box-sizing: border-box;
      opacity: 0;
      animation: ${zr} 0.5s ease 0.5s forwards;

      &:hover {
        background: ${e=>{let{theme:t}=e;return t.colors.primary}};
        border-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
        color: #fff;
        box-shadow: 0 2px 12px ${e=>{let{theme:t}=e;return t.colors.primary}}40;
        text-decoration: none;
      }
    }

    .social-icons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
      opacity: 0;
      animation: ${zr} 0.5s ease 0.58s forwards;

      a {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
        font-size: 14px;
        border-radius: 7px;
        transition: all 0.15s ease;
        text-decoration: none;

        &:hover {
          color: ${e=>{let{theme:t}=e;return t.colors.text}};
          background: ${e=>{let{theme:t}=e;return t.colors.accent}};
          text-decoration: none;
        }
      }
    }
  }
`,Rr=["01","02","03","04","05","06","07","08"],Dr={GitHub:ir,LinkedIn:nr,Instagram:rr,LeetCode:vr},Lr=()=>{const[e,t]=(0,i.useState)("");(0,i.useEffect)(()=>{const e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&t(e.target.id)})},{root:null,rootMargin:"-80px 0px -60% 0px",threshold:0}),n=document.querySelectorAll("section[id]");return n.forEach(t=>e.observe(t)),()=>n.forEach(t=>e.unobserve(t))},[]);return(0,Er.jsxs)(Nr,{children:[(0,Er.jsxs)("div",{className:"logo-block",children:[(0,Er.jsx)("div",{className:"name",children:(0,Er.jsx)("a",{href:"/",children:_n.name})}),(0,Er.jsx)("div",{className:"title",children:_n.description}),(0,Er.jsxs)("div",{className:"status-row",children:[(0,Er.jsx)("div",{className:"dot"}),(0,Er.jsx)("span",{children:"London, UK"})]})]}),(0,Er.jsx)("nav",{className:"nav-links",children:(0,Er.jsx)("ul",{children:In.map((t,n)=>{let{id:r,name:i,url:o}=t;return(0,Er.jsx)("li",{children:(0,Er.jsxs)("a",{href:o,className:e===o.replace("#","")?"active":"",onClick:e=>((e,t)=>{e.preventDefault();const n=document.getElementById(t.replace("#",""));n&&window.scrollTo({top:n.getBoundingClientRect().top+window.scrollY-60,behavior:"smooth"})})(e,o),children:[(0,Er.jsx)("span",{className:"nav-label",children:i}),(0,Er.jsx)("span",{className:"nav-num",children:Rr[n]})]})},r)})})}),(0,Er.jsxs)("div",{className:"bottom-block",children:[(0,Er.jsx)("a",{className:"resume-button",href:"/my-portfolio/resume.pdf",target:"_blank",rel:"noopener noreferrer",children:"Download R\xe9sum\xe9"}),(0,Er.jsxs)("div",{className:"social-icons",children:[On.map(e=>{let{id:t,name:n,url:r}=e;const i=Dr[n];return i?(0,Er.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer","aria-label":n,title:n,children:(0,Er.jsx)(i,{})},t):null}),(0,Er.jsx)(Mr,{})]})]})]})},Ar=Mn.footer`
  padding: 20px 12px 24px;
  text-align: center;

  .credits {
    font-size: 11px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    line-height: 1.6;
    letter-spacing: 0.02em;

    a {
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${e=>{let{theme:t}=e;return t.colors.primary}};
      }
    }
  }

  .year {
    font-size: 10px;
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}}80;
    margin-top: 4px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    letter-spacing: 0.04em;
  }
`,Ir=Mn.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 14px;
  font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
  font-size: 9px;
  color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;
  opacity: ${e=>{let{$active:t}=e;return t?.8:.3}};
  transition: opacity 0.2s ease, color 0.2s ease;
  padding: 4px 6px;
  border-radius: 4px;

  &:hover {
    opacity: 1;
    color: ${e=>{let{$active:t}=e;return"inherit"}};
  }

  .trigger-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${e=>{let{$active:t,theme:n}=e;return t?n.colors.primary:n.colors.textTertiary}};
    flex-shrink: 0;
    transition: background 0.2s ease;
    ${e=>{let{$active:t}=e;return t&&"animation: pulse 2s ease-in-out infinite;"}}
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
`,Or=()=>{const{gameMode:e}=(0,i.useContext)(jr);return(0,Er.jsxs)(Ar,{children:[(0,Er.jsxs)("div",{className:"credits",children:["Built by"," ",(0,Er.jsx)("a",{href:"https://www.linkedin.com/in/dibyajyoti-pradhan-83a649146/",target:"_blank",rel:"noopener noreferrer",children:_n.name})]}),(0,Er.jsxs)("div",{className:"year",children:["\xa9 ",(new Date).getFullYear()]}),(0,Er.jsxs)(Ir,{$active:e,onClick:()=>{document.dispatchEvent(new CustomEvent("toggleGameMode"))},title:e?"Exit dev mode":"Enter dev mode","aria-label":e?"Exit dev mode":"Enter dev mode",children:[(0,Er.jsx)("span",{className:"trigger-dot"}),">_"]})]})};const _r=Mn(function(e){return er({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"},child:[]}]})(e)})`
  font-size: 14px;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}} !important;
  flex-shrink: 0;
`,Br=Ln`
  from { opacity: 0; transform: translateY(36px); }
  to   { opacity: 1; transform: translateY(0); }
`,Fr=Ln`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Vr=Ln`
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
`,Ur=Ln`
  from { width: 0; }
  to   { width: 100%; }
`,Hr=Ln`
  0%, 100% { box-shadow: 0 0 0 0 currentColor; }
  50%       { box-shadow: 0 0 0 5px transparent; }
`,Wr=Mn.section`
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
`,Yr=Mn.div`
  padding: 100px 48px 108px;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 900px) {
    padding: 48px 24px 60px;
  }
`,Xr=Mn.div`
  display: flex;
  flex-direction: column;
`,Kr=Mn.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?Tn`${Vr} 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s forwards`:"none"}};

  .line {
    width: 24px;
    height: 1px;
    background: ${e=>{let{theme:t}=e;return t.colors.divider}};
    border-radius: 1px;
  }

  span {
    font-size: 11px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-weight: 500;
  }
`,Gr=Mn.div`
  line-height: 0.88;
  letter-spacing: -0.055em;
  font-weight: 900;
  font-size: clamp(60px, 9.5vw, 112px);
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-bottom: 28px;
  overflow: hidden;

  .line-1, .line-2 {
    display: block;
    overflow: hidden;
  }

  .line-2 {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }

  .char {
    display: inline-block;
    opacity: 0;
    will-change: transform, opacity;
  }

  ${e=>{let{$visible:t}=e;return t&&Tn`
      .char {
        animation: ${Br} 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
      }
    `}}
`,Qr=Mn.div`
  position: relative;
  height: 1px;
  background: ${e=>{let{theme:t}=e;return t.colors.divider}};
  margin-bottom: 24px;
  overflow: hidden;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?Tn`${Fr} 0.01s 0.68s forwards`:"none"}};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(90deg, ${e=>{let{theme:t}=e;return t.colors.primary}}, ${e=>{let{theme:t}=e;return t.colors.primaryHover}});
    width: 0;
    animation: ${e=>{let{$visible:t}=e;return t?Tn`${Ur} 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.70s forwards`:"none"}};
  }
`,qr=Mn.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?Tn`${Fr} 0.5s ease 0.88s forwards`:"none"}};

  .role-text {
    font-size: 15px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
    letter-spacing: 0.04em;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${e=>{let{theme:t}=e;return t.colors.green}};
    flex-shrink: 0;
    animation: ${Hr} 2.5s ease-in-out infinite;
    color: ${e=>{let{theme:t}=e;return t.colors.green}};
  }

.availability {
    font-size: 11px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    color: ${e=>{let{theme:t}=e;return t.colors.green}};
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media (max-width: 900px) {
    .hide-mobile { display: none; }
  }
`,Jr=Mn.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 36px;
  flex-wrap: wrap;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?Tn`${Fr} 0.5s ease 0.96s forwards`:"none"}};

  .label {
    font-size: 11px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: ${e=>{let{theme:t}=e;return t.borderRadiusSmall}};
    font-size: 12px;
    font-weight: 600;
    letter-spacing: -0.01em;
    background: ${e=>{let{theme:t}=e;return t.colors.accent}};
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
    color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
    transition: all 0.2s ease;

    &:hover {
      border-color: ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
      color: ${e=>{let{theme:t}=e;return t.colors.text}};
    }

    .company-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      flex-shrink: 0;
    }
  }

  .separator {
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    font-size: 11px;
  }

  @media (max-width: 900px) {
    .label { display: none; }
    .separator { display: none; }
  }
`,Zr=Mn.div`
  max-width: 560px;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?Tn`${Fr} 0.6s ease 1.06s forwards`:"none"}};

  p {
    font-size: 15.5px;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    line-height: 1.78;
    margin-bottom: 16px;
    letter-spacing: -0.008em;

    &:last-child { margin-bottom: 0; }

    a {
      color: ${e=>{let{theme:t}=e;return t.colors.text}};
      text-decoration: underline;
      text-underline-offset: 3px;
      text-decoration-thickness: 1px;
      text-decoration-color: ${e=>{let{theme:t}=e;return t.colors.divider}};
      transition: ${e=>{let{theme:t}=e;return t.transitionFast}};

      &:hover {
        color: ${e=>{let{theme:t}=e;return t.colors.primary}};
        text-decoration-color: ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
      }
    }

    strong {
      color: ${e=>{let{theme:t}=e;return t.colors.text}};
      font-weight: 600;
    }
  }
`,ei=()=>{const[e,t]=(0,i.useState)(!1),n=(0,i.useRef)(null);return(0,i.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[n]=e;n.isIntersecting&&t(!0)},{threshold:.1});return n.current&&e.observe(n.current),()=>e.disconnect()},[]),(0,Er.jsx)(Wr,{id:"about",ref:n,children:(0,Er.jsx)(Yr,{children:(0,Er.jsxs)(Xr,{children:[(0,Er.jsxs)(Kr,{$visible:e,theme:void 0,children:[(0,Er.jsx)("div",{className:"line"}),(0,Er.jsx)("span",{children:"Hello, I'm"})]}),(0,Er.jsxs)(Gr,{$visible:e,children:[(0,Er.jsx)("span",{className:"line-1",children:Array.from("DIBYAJYOTI").map((e,t)=>(0,Er.jsx)("span",{className:"char",style:{animationDelay:`${(.12+.022*t).toFixed(3)}s`},children:e},t))}),(0,Er.jsx)("span",{className:"line-2",children:Array.from("PRADHAN").map((e,t)=>(0,Er.jsx)("span",{className:"char",style:{animationDelay:`${(.38+.022*t).toFixed(3)}s`},children:e},t))})]}),(0,Er.jsx)(Qr,{$visible:e}),(0,Er.jsxs)(qr,{$visible:e,children:[(0,Er.jsx)("span",{className:"role-text",children:_n.description}),(0,Er.jsx)(_r,{className:"hide-mobile"}),(0,Er.jsx)("span",{className:"role-text hide-mobile",children:"London, UK"}),(0,Er.jsx)("span",{className:"dot"}),(0,Er.jsx)("span",{className:"availability",children:"Available"})]}),(0,Er.jsxs)(Jr,{$visible:e,children:[(0,Er.jsx)("span",{className:"label",children:"Currently"}),(0,Er.jsxs)("span",{className:"pill",children:[(0,Er.jsx)("span",{className:"company-dot",style:{background:"#ff7a59"}}),"HubSpot"]}),(0,Er.jsx)("span",{className:"separator",children:"\xb7"}),(0,Er.jsx)("span",{className:"label",children:"Previously"}),(0,Er.jsxs)("span",{className:"pill",children:[(0,Er.jsx)("span",{className:"company-dot",style:{background:"#1877f2"}}),"Meta"]}),(0,Er.jsxs)("span",{className:"pill",children:[(0,Er.jsx)("span",{className:"company-dot",style:{background:"#ff9900"}}),"Amazon"]})]}),(0,Er.jsx)(Zr,{$visible:e,children:_n.about.slice(0,2).map((e,t)=>(0,Er.jsx)("p",{dangerouslySetInnerHTML:{__html:e}},t))})]})})})};const ti="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;function ni(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function ri(e){return"nodeType"in e}function ii(e){var t,n;return e?ni(e)?e:ri(e)&&null!=(t=null==(n=e.ownerDocument)?void 0:n.defaultView)?t:window:window}function oi(e){const{Document:t}=ii(e);return e instanceof t}function ai(e){return!ni(e)&&e instanceof ii(e).HTMLElement}function si(e){return e instanceof ii(e).SVGElement}function li(e){return e?ni(e)?e.document:ri(e)?oi(e)?e:ai(e)||si(e)?e.ownerDocument:document:document:document}const ci=ti?i.useLayoutEffect:i.useEffect;function ui(e){const t=(0,i.useRef)(e);return ci(()=>{t.current=e}),(0,i.useCallback)(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)},[])}function di(e,t){void 0===t&&(t=[e]);const n=(0,i.useRef)(e);return ci(()=>{n.current!==e&&(n.current=e)},t),n}function pi(e,t){const n=(0,i.useRef)();return(0,i.useMemo)(()=>{const t=e(n.current);return n.current=t,t},[...t])}function hi(e){const t=ui(e),n=(0,i.useRef)(null),r=(0,i.useCallback)(e=>{e!==n.current&&(null==t||t(e,n.current)),n.current=e},[]);return[n,r]}function fi(e){const t=(0,i.useRef)();return(0,i.useEffect)(()=>{t.current=e},[e]),t.current}let mi={};function gi(e,t){return(0,i.useMemo)(()=>{if(t)return t;const n=null==mi[e]?0:mi[e]+1;return mi[e]=n,e+"-"+n},[e,t])}function vi(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce((t,n)=>{const r=Object.entries(n);for(const[i,o]of r){const n=t[i];null!=n&&(t[i]=n+e*o)}return t},{...t})}}const yi=vi(1),xi=vi(-1);function bi(e){if(!e)return!1;const{KeyboardEvent:t}=ii(e.target);return t&&e instanceof t}function wi(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=ii(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const Si=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[Si.Translate.toString(e),Si.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),ki="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Ci(e){return e.matches(ki)?e:e.querySelector(ki)}const Ei={display:"none"};function ji(e){let{id:t,value:n}=e;return i.createElement("div",{id:t,style:Ei},n)}function Ti(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;return i.createElement("div",{id:t,style:{position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":r,"aria-atomic":!0},n)}const Pi=(0,i.createContext)(null);const $i={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},Mi={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function zi(e){let{announcements:t=Mi,container:n,hiddenTextDescribedById:r,screenReaderInstructions:o=$i}=e;const{announce:a,announcement:l}=function(){const[e,t]=(0,i.useState)("");return{announce:(0,i.useCallback)(e=>{null!=e&&t(e)},[]),announcement:e}}(),c=gi("DndLiveRegion"),[u,d]=(0,i.useState)(!1);if((0,i.useEffect)(()=>{d(!0)},[]),function(e){const t=(0,i.useContext)(Pi);(0,i.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}((0,i.useMemo)(()=>({onDragStart(e){let{active:n}=e;a(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&a(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;a(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;a(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;a(t.onDragCancel({active:n,over:r}))}}),[a,t])),!u)return null;const p=i.createElement(i.Fragment,null,i.createElement(ji,{id:r,value:o.draggable}),i.createElement(Ti,{id:c,announcement:l}));return n?(0,s.createPortal)(p,n):p}var Ni;function Ri(){}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(Ni||(Ni={}));const Di=Object.freeze({x:0,y:0});function Li(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Ai(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Ii(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function Oi(e,t,n){return void 0===t&&(t=e.left),void 0===n&&(n=e.top),{x:t+.5*e.width,y:n+.5*e.height}}const _i=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=Oi(t,t.left,t.top),o=[];for(const a of r){const{id:e}=a,t=n.get(e);if(t){const n=Li(Oi(t),i);o.push({id:e,data:{droppableContainer:a,value:n}})}}return o.sort(Ai)};function Bi(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),o=Math.min(t.top+t.height,e.top+e.height),a=i-r,s=o-n;if(r<i&&n<o){const n=t.width*t.height,r=e.width*e.height,i=a*s;return Number((i/(n+r-i)).toFixed(4))}return 0}const Fi=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=[];for(const o of r){const{id:e}=o,r=n.get(e);if(r){const n=Bi(r,t);n>0&&i.push({id:e,data:{droppableContainer:o,value:n}})}}return i.sort(Ii)};function Vi(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Di}function Ui(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x}),{...t})}}const Hi=Ui(1);function Wi(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}const Yi={ignoreTransform:!1};function Xi(e,t){void 0===t&&(t=Yi);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:r}=ii(e).getComputedStyle(e);t&&(n=function(e,t,n){const r=Wi(t);if(!r)return e;const{scaleX:i,scaleY:o,x:a,y:s}=r,l=e.left-a-(1-i)*parseFloat(n),c=e.top-s-(1-o)*parseFloat(n.slice(n.indexOf(" ")+1)),u=i?e.width/i:e.width,d=o?e.height/o:e.height;return{width:u,height:d,top:c,right:l+u,bottom:c+d,left:l}}(n,t,r))}const{top:r,left:i,width:o,height:a,bottom:s,right:l}=n;return{top:r,left:i,width:o,height:a,bottom:s,right:l}}function Ki(e){return Xi(e,{ignoreTransform:!0})}function Gi(e,t){const n=[];return e?function r(i){if(null!=t&&n.length>=t)return n;if(!i)return n;if(oi(i)&&null!=i.scrollingElement&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!ai(i)||si(i))return n;if(n.includes(i))return n;const o=ii(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=ii(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(e=>{const r=t[e];return"string"===typeof r&&n.test(r)})}(i,o)&&n.push(i),function(e,t){return void 0===t&&(t=ii(e).getComputedStyle(e)),"fixed"===t.position}(i,o)?n:r(i.parentNode)}(e):n}function Qi(e){const[t]=Gi(e,1);return null!=t?t:null}function qi(e){return ti&&e?ni(e)?e:ri(e)?oi(e)||e===li(e).scrollingElement?window:ai(e)?e:null:null:null}function Ji(e){return ni(e)?e.scrollX:e.scrollLeft}function Zi(e){return ni(e)?e.scrollY:e.scrollTop}function eo(e){return{x:Ji(e),y:Zi(e)}}var to;function no(e){return!(!ti||!e)&&e===document.scrollingElement}function ro(e){const t={x:0,y:0},n=no(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(to||(to={}));const io={x:.2,y:.2};function oo(e,t,n,r,i){let{top:o,left:a,right:s,bottom:l}=n;void 0===r&&(r=10),void 0===i&&(i=io);const{isTop:c,isBottom:u,isLeft:d,isRight:p}=ro(e),h={x:0,y:0},f={x:0,y:0},m=t.height*i.y,g=t.width*i.x;return!c&&o<=t.top+m?(h.y=to.Backward,f.y=r*Math.abs((t.top+m-o)/m)):!u&&l>=t.bottom-m&&(h.y=to.Forward,f.y=r*Math.abs((t.bottom-m-l)/m)),!p&&s>=t.right-g?(h.x=to.Forward,f.x=r*Math.abs((t.right-g-s)/g)):!d&&a<=t.left+g&&(h.x=to.Backward,f.x=r*Math.abs((t.left+g-a)/g)),{direction:h,speed:f}}function ao(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function so(e){return e.reduce((e,t)=>yi(e,eo(t)),Di)}function lo(e,t){if(void 0===t&&(t=Xi),!e)return;const{top:n,left:r,bottom:i,right:o}=t(e);Qi(e)&&(i<=0||o<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const co=[["x",["left","right"],function(e){return e.reduce((e,t)=>e+Ji(t),0)}],["y",["top","bottom"],function(e){return e.reduce((e,t)=>e+Zi(t),0)}]];class uo{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const n=Gi(t),r=so(n);this.rect={...e},this.width=e.width,this.height=e.height;for(const[i,o,a]of co)for(const e of o)Object.defineProperty(this,e,{get:()=>{const t=a(n),o=r[i]-t;return this.rect[e]+o},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class po{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)})},this.target=e}add(e,t,n){var r;null==(r=this.target)||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}}function ho(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return"number"===typeof t?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t&&r>t.y}var fo,mo;function go(e){e.preventDefault()}function vo(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(fo||(fo={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"}(mo||(mo={}));const yo={start:[mo.Space,mo.Enter],cancel:[mo.Esc],end:[mo.Space,mo.Enter,mo.Tab]},xo=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case mo.Right:return{...n,x:n.x+25};case mo.Left:return{...n,x:n.x-25};case mo.Down:return{...n,y:n.y+25};case mo.Up:return{...n,y:n.y-25}}};class bo{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new po(li(t)),this.windowListeners=new po(ii(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(fo.Resize,this.handleCancel),this.windowListeners.add(fo.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(fo.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&lo(n),t(Di)}handleKeyDown(e){if(bi(e)){const{active:t,context:n,options:r}=this.props,{keyboardCodes:i=yo,coordinateGetter:o=xo,scrollBehavior:a="smooth"}=r,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=n.current,c=l?{x:l.left,y:l.top}:Di;this.referenceCoordinates||(this.referenceCoordinates=c);const u=o(e,{active:t,context:n.current,currentCoordinates:c});if(u){const t=xi(u,c),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(const n of i){const i=e.code,{isTop:o,isRight:s,isLeft:l,isBottom:c,maxScroll:d,minScroll:p}=ro(n),h=ao(n),f={x:Math.min(i===mo.Right?h.right-h.width/2:h.right,Math.max(i===mo.Right?h.left:h.left+h.width/2,u.x)),y:Math.min(i===mo.Down?h.bottom-h.height/2:h.bottom,Math.max(i===mo.Down?h.top:h.top+h.height/2,u.y))},m=i===mo.Right&&!s||i===mo.Left&&!l,g=i===mo.Down&&!c||i===mo.Up&&!o;if(m&&f.x!==u.x){const e=n.scrollLeft+t.x,o=i===mo.Right&&e<=d.x||i===mo.Left&&e>=p.x;if(o&&!t.y)return void n.scrollTo({left:e,behavior:a});r.x=o?n.scrollLeft-e:i===mo.Right?n.scrollLeft-d.x:n.scrollLeft-p.x,r.x&&n.scrollBy({left:-r.x,behavior:a});break}if(g&&f.y!==u.y){const e=n.scrollTop+t.y,o=i===mo.Down&&e<=d.y||i===mo.Up&&e>=p.y;if(o&&!t.x)return void n.scrollTo({top:e,behavior:a});r.y=o?n.scrollTop-e:i===mo.Down?n.scrollTop-d.y:n.scrollTop-p.y,r.y&&n.scrollBy({top:-r.y,behavior:a});break}}this.handleMove(e,yi(xi(u,this.referenceCoordinates),r))}}}handleMove(e,t){const{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}function wo(e){return Boolean(e&&"distance"in e)}function So(e){return Boolean(e&&"delay"in e)}bo.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=yo,onActivation:i}=t,{active:o}=n;const{code:a}=e.nativeEvent;if(r.start.includes(a)){const t=o.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class ko{constructor(e,t,n){var r;void 0===n&&(n=function(e){const{EventTarget:t}=ii(e);return e instanceof t?e:li(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:o}=i;this.props=e,this.events=t,this.document=li(o),this.documentListeners=new po(this.document),this.listeners=new po(n),this.windowListeners=new po(ii(o)),this.initialCoordinates=null!=(r=wi(i))?r:Di,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(fo.Resize,this.handleCancel),this.windowListeners.add(fo.DragStart,go),this.windowListeners.add(fo.VisibilityChange,this.handleCancel),this.windowListeners.add(fo.ContextMenu,go),this.documentListeners.add(fo.Keydown,this.handleKeydown),t){if(null!=n&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(So(t))return this.timeoutId=setTimeout(this.handleStart,t.delay),void this.handlePending(t);if(wo(t))return void this.handlePending(t)}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){const{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(fo.Click,vo,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(fo.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:n,initialCoordinates:r,props:i}=this,{onMove:o,options:{activationConstraint:a}}=i;if(!r)return;const s=null!=(t=wi(e))?t:Di,l=xi(r,s);if(!n&&a){if(wo(a)){if(null!=a.tolerance&&ho(l,a.tolerance))return this.handleCancel();if(ho(l,a.distance))return this.handleStart()}return So(a)&&ho(l,a.tolerance)?this.handleCancel():void this.handlePending(a,l)}e.cancelable&&e.preventDefault(),o(s)}handleEnd(){const{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){const{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===mo.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const Co={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Eo extends ko{constructor(e){const{event:t}=e,n=li(t.target);super(e,Co,n)}}Eo.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!(!n.isPrimary||0!==n.button)&&(null==r||r({event:n}),!0)}}];const jo={move:{name:"mousemove"},end:{name:"mouseup"}};var To;!function(e){e[e.RightClick=2]="RightClick"}(To||(To={}));(class extends ko{constructor(e){super(e,jo,li(e.event.target))}}).activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button!==To.RightClick&&(null==r||r({event:n}),!0)}}];const Po={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};var $o,Mo;function zo(e){let{acceleration:t,activator:n=$o.Pointer,canScroll:r,draggingRect:o,enabled:a,interval:s=5,order:l=Mo.TreeOrder,pointerCoordinates:c,scrollableAncestors:u,scrollableAncestorRects:d,delta:p,threshold:h}=e;const f=function(e){let{delta:t,disabled:n}=e;const r=fi(t);return pi(e=>{if(n||!r||!e)return No;const i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[to.Backward]:e.x[to.Backward]||-1===i.x,[to.Forward]:e.x[to.Forward]||1===i.x},y:{[to.Backward]:e.y[to.Backward]||-1===i.y,[to.Forward]:e.y[to.Forward]||1===i.y}}},[n,t,r])}({delta:p,disabled:!a}),[m,g]=function(){const e=(0,i.useRef)(null);return[(0,i.useCallback)((t,n)=>{e.current=setInterval(t,n)},[]),(0,i.useCallback)(()=>{null!==e.current&&(clearInterval(e.current),e.current=null)},[])]}(),v=(0,i.useRef)({x:0,y:0}),y=(0,i.useRef)({x:0,y:0}),x=(0,i.useMemo)(()=>{switch(n){case $o.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case $o.DraggableRect:return o}},[n,o,c]),b=(0,i.useRef)(null),w=(0,i.useCallback)(()=>{const e=b.current;if(!e)return;const t=v.current.x*y.current.x,n=v.current.y*y.current.y;e.scrollBy(t,n)},[]),S=(0,i.useMemo)(()=>l===Mo.TreeOrder?[...u].reverse():u,[l,u]);(0,i.useEffect)(()=>{if(a&&u.length&&x){for(const e of S){if(!1===(null==r?void 0:r(e)))continue;const n=u.indexOf(e),i=d[n];if(!i)continue;const{direction:o,speed:a}=oo(e,i,x,t,h);for(const e of["x","y"])f[e][o[e]]||(a[e]=0,o[e]=0);if(a.x>0||a.y>0)return g(),b.current=e,m(w,s),v.current=a,void(y.current=o)}v.current={x:0,y:0},y.current={x:0,y:0},g()}else g()},[t,w,r,g,a,s,JSON.stringify(x),JSON.stringify(f),m,u,S,d,JSON.stringify(h)])}(class extends ko{constructor(e){super(e,Po)}static setup(){return window.addEventListener(Po.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Po.move.name,e)};function e(){}}}).activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:i}=n;return!(i.length>1)&&(null==r||r({event:n}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}($o||($o={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(Mo||(Mo={}));const No={x:{[to.Backward]:!1,[to.Forward]:!1},y:{[to.Backward]:!1,[to.Forward]:!1}};var Ro,Do;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(Ro||(Ro={})),function(e){e.Optimized="optimized"}(Do||(Do={}));const Lo=new Map;function Ao(e,t){return pi(n=>e?n||("function"===typeof t?t(e):e):null,[t,e])}function Io(e){let{callback:t,disabled:n}=e;const r=ui(t),o=(0,i.useMemo)(()=>{if(n||"undefined"===typeof window||"undefined"===typeof window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(r)},[n]);return(0,i.useEffect)(()=>()=>null==o?void 0:o.disconnect(),[o]),o}function Oo(e){return new uo(Xi(e),e)}function _o(e,t,n){void 0===t&&(t=Oo);const[r,o]=(0,i.useState)(null);function a(){o(r=>{if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=r?r:n)?i:null;const o=t(e);return JSON.stringify(r)===JSON.stringify(o)?r:o})}const s=function(e){let{callback:t,disabled:n}=e;const r=ui(t),o=(0,i.useMemo)(()=>{if(n||"undefined"===typeof window||"undefined"===typeof window.MutationObserver)return;const{MutationObserver:e}=window;return new e(r)},[r,n]);return(0,i.useEffect)(()=>()=>null==o?void 0:o.disconnect(),[o]),o}({callback(t){if(e)for(const n of t){const{type:t,target:r}=n;if("childList"===t&&r instanceof HTMLElement&&r.contains(e)){a();break}}}}),l=Io({callback:a});return ci(()=>{a(),e?(null==l||l.observe(e),null==s||s.observe(document.body,{childList:!0,subtree:!0})):(null==l||l.disconnect(),null==s||s.disconnect())},[e]),r}const Bo=[];function Fo(e,t){void 0===t&&(t=[]);const n=(0,i.useRef)(null);return(0,i.useEffect)(()=>{n.current=null},t),(0,i.useEffect)(()=>{const t=e!==Di;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)},[e]),n.current?xi(e,n.current):Di}function Vo(e){return(0,i.useMemo)(()=>e?function(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}(e):null,[e])}const Uo=[];function Ho(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return ai(t)?t:e}const Wo=[{sensor:Eo,options:{}},{sensor:bo,options:{}}],Yo={current:{}},Xo={draggable:{measure:Ki},droppable:{measure:Ki,strategy:Ro.WhileDragging,frequency:Do.Optimized},dragOverlay:{measure:Xi}};class Ko extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){var t,n;return null!=(t=null==(n=this.get(e))?void 0:n.node.current)?t:void 0}}const Go={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Ko,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Ri},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Xo,measureDroppableContainers:Ri,windowRect:null,measuringScheduled:!1},Qo={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Ri,draggableNodes:new Map,over:null,measureDroppableContainers:Ri},qo=(0,i.createContext)(Qo),Jo=(0,i.createContext)(Go);function Zo(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Ko}}}function ea(e,t){switch(t.type){case Ni.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Ni.DragMove:return null==e.draggable.active?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Ni.DragEnd:case Ni.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Ni.RegisterDroppable:{const{element:n}=t,{id:r}=n,i=new Ko(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case Ni.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=t,o=e.droppable.containers.get(n);if(!o||r!==o.key)return e;const a=new Ko(e.droppable.containers);return a.set(n,{...o,disabled:i}),{...e,droppable:{...e.droppable,containers:a}}}case Ni.UnregisterDroppable:{const{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const o=new Ko(e.droppable.containers);return o.delete(n),{...e,droppable:{...e.droppable,containers:o}}}default:return e}}function ta(e){let{disabled:t}=e;const{active:n,activatorEvent:r,draggableNodes:o}=(0,i.useContext)(qo),a=fi(r),s=fi(null==n?void 0:n.id);return(0,i.useEffect)(()=>{if(!t&&!r&&a&&null!=s){if(!bi(a))return;if(document.activeElement===a.target)return;const e=o.get(s);if(!e)return;const{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame(()=>{for(const e of[t.current,n.current]){if(!e)continue;const t=Ci(e);if(t){t.focus();break}}})}},[r,t,o,s,a]),null}function na(e,t){let{transform:n,...r}=t;return null!=e&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}const ra=(0,i.createContext)({...Di,scaleX:1,scaleY:1});var ia;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(ia||(ia={}));const oa=(0,i.memo)(function(e){var t,n,r,o;let{id:a,accessibility:l,autoScroll:c=!0,children:u,sensors:d=Wo,collisionDetection:p=Fi,measuring:h,modifiers:f,...m}=e;const g=(0,i.useReducer)(ea,void 0,Zo),[v,y]=g,[x,b]=function(){const[e]=(0,i.useState)(()=>new Set),t=(0,i.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]);return[(0,i.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>{var t;return null==(t=e[n])?void 0:t.call(e,r)})},[e]),t]}(),[w,S]=(0,i.useState)(ia.Uninitialized),k=w===ia.Initialized,{draggable:{active:C,nodes:E,translate:j},droppable:{containers:T}}=v,P=null!=C?E.get(C):null,$=(0,i.useRef)({initial:null,translated:null}),M=(0,i.useMemo)(()=>{var e;return null!=C?{id:C,data:null!=(e=null==P?void 0:P.data)?e:Yo,rect:$}:null},[C,P]),z=(0,i.useRef)(null),[N,R]=(0,i.useState)(null),[D,L]=(0,i.useState)(null),A=di(m,Object.values(m)),I=gi("DndDescribedBy",a),O=(0,i.useMemo)(()=>T.getEnabled(),[T]),_=(B=h,(0,i.useMemo)(()=>({draggable:{...Xo.draggable,...null==B?void 0:B.draggable},droppable:{...Xo.droppable,...null==B?void 0:B.droppable},dragOverlay:{...Xo.dragOverlay,...null==B?void 0:B.dragOverlay}}),[null==B?void 0:B.draggable,null==B?void 0:B.droppable,null==B?void 0:B.dragOverlay]));var B;const{droppableRects:F,measureDroppableContainers:V,measuringScheduled:U}=function(e,t){let{dragging:n,dependencies:r,config:o}=t;const[a,s]=(0,i.useState)(null),{frequency:l,measure:c,strategy:u}=o,d=(0,i.useRef)(e),p=function(){switch(u){case Ro.Always:return!1;case Ro.BeforeDragging:return n;default:return!n}}(),h=di(p),f=(0,i.useCallback)(function(e){void 0===e&&(e=[]),h.current||s(t=>null===t?e:t.concat(e.filter(e=>!t.includes(e))))},[h]),m=(0,i.useRef)(null),g=pi(t=>{if(p&&!n)return Lo;if(!t||t===Lo||d.current!==e||null!=a){const t=new Map;for(let n of e){if(!n)continue;if(a&&a.length>0&&!a.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}const e=n.node.current,r=e?new uo(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,a,n,p,c]);return(0,i.useEffect)(()=>{d.current=e},[e]),(0,i.useEffect)(()=>{p||f()},[n,p]),(0,i.useEffect)(()=>{a&&a.length>0&&s(null)},[JSON.stringify(a)]),(0,i.useEffect)(()=>{p||"number"!==typeof l||null!==m.current||(m.current=setTimeout(()=>{f(),m.current=null},l))},[l,p,f,...r]),{droppableRects:g,measureDroppableContainers:f,measuringScheduled:null!=a}}(O,{dragging:k,dependencies:[j.x,j.y],config:_.droppable}),H=function(e,t){const n=null!=t?e.get(t):void 0,r=n?n.node.current:null;return pi(e=>{var n;return null==t?null:null!=(n=null!=r?r:e)?n:null},[r,t])}(E,C),W=(0,i.useMemo)(()=>D?wi(D):null,[D]),Y=function(){const e=!1===(null==N?void 0:N.autoScrollEnabled),t="object"===typeof c?!1===c.enabled:!1===c,n=k&&!e&&!t;if("object"===typeof c)return{...c,enabled:n};return{enabled:n}}(),X=function(e,t){return Ao(e,t)}(H,_.draggable.measure);!function(e){let{activeNode:t,measure:n,initialRect:r,config:o=!0}=e;const a=(0,i.useRef)(!1),{x:s,y:l}="boolean"===typeof o?{x:o,y:o}:o;ci(()=>{if(!s&&!l||!t)return void(a.current=!1);if(a.current||!r)return;const e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;const i=Vi(n(e),r);if(s||(i.x=0),l||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){const t=Qi(e);t&&t.scrollBy({top:i.y,left:i.x})}},[t,s,l,r,n])}({activeNode:null!=C?E.get(C):null,config:Y.layoutShiftCompensation,initialRect:X,measure:_.draggable.measure});const K=_o(H,_.draggable.measure,X),G=_o(H?H.parentElement:null),Q=(0,i.useRef)({activatorEvent:null,active:null,activeNode:H,collisionRect:null,collisions:null,droppableRects:F,draggableNodes:E,draggingNode:null,draggingNodeRect:null,droppableContainers:T,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),q=T.getNodeFor(null==(t=Q.current.over)?void 0:t.id),J=function(e){let{measure:t}=e;const[n,r]=(0,i.useState)(null),o=Io({callback:(0,i.useCallback)(e=>{for(const{target:n}of e)if(ai(n)){r(e=>{const r=t(n);return e?{...e,width:r.width,height:r.height}:r});break}},[t])}),a=(0,i.useCallback)(e=>{const n=Ho(e);null==o||o.disconnect(),n&&(null==o||o.observe(n)),r(n?t(n):null)},[t,o]),[s,l]=hi(a);return(0,i.useMemo)(()=>({nodeRef:s,rect:n,setRef:l}),[n,s,l])}({measure:_.dragOverlay.measure}),Z=null!=(n=J.nodeRef.current)?n:H,ee=k?null!=(r=J.rect)?r:K:null,te=Boolean(J.nodeRef.current&&J.rect),ne=Vi(re=te?null:K,Ao(re));var re;const ie=Vo(Z?ii(Z):null),oe=function(e){const t=(0,i.useRef)(e),n=pi(n=>e?n&&n!==Bo&&e&&t.current&&e.parentNode===t.current.parentNode?n:Gi(e):Bo,[e]);return(0,i.useEffect)(()=>{t.current=e},[e]),n}(k?null!=q?q:H:null),ae=function(e,t){void 0===t&&(t=Xi);const[n]=e,r=Vo(n?ii(n):null),[o,a]=(0,i.useState)(Uo);function s(){a(()=>e.length?e.map(e=>no(e)?r:new uo(t(e),e)):Uo)}const l=Io({callback:s});return ci(()=>{null==l||l.disconnect(),s(),e.forEach(e=>null==l?void 0:l.observe(e))},[e]),o}(oe),se=na(f,{transform:{x:j.x-ne.x,y:j.y-ne.y,scaleX:1,scaleY:1},activatorEvent:D,active:M,activeNodeRect:K,containerNodeRect:G,draggingNodeRect:ee,over:Q.current.over,overlayNodeRect:J.rect,scrollableAncestors:oe,scrollableAncestorRects:ae,windowRect:ie}),le=W?yi(W,j):null,ce=function(e){const[t,n]=(0,i.useState)(null),r=(0,i.useRef)(e),o=(0,i.useCallback)(e=>{const t=qi(e.target);t&&n(e=>e?(e.set(t,eo(t)),new Map(e)):null)},[]);return(0,i.useEffect)(()=>{const t=r.current;if(e!==t){i(t);const a=e.map(e=>{const t=qi(e);return t?(t.addEventListener("scroll",o,{passive:!0}),[t,eo(t)]):null}).filter(e=>null!=e);n(a.length?new Map(a):null),r.current=e}return()=>{i(e),i(t)};function i(e){e.forEach(e=>{const t=qi(e);null==t||t.removeEventListener("scroll",o)})}},[o,e]),(0,i.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>yi(e,t),Di):so(e):Di,[e,t])}(oe),ue=Fo(ce),de=Fo(ce,[K]),pe=yi(se,ue),he=ee?Hi(ee,se):null,fe=M&&he?p({active:M,collisionRect:he,droppableRects:F,droppableContainers:O,pointerCoordinates:le}):null,me=function(e,t){if(!e||0===e.length)return null;const[n]=e;return t?n[t]:n}(fe,"id"),[ge,ve]=(0,i.useState)(null),ye=function(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}(te?se:yi(se,de),null!=(o=null==ge?void 0:ge.rect)?o:null,K),xe=(0,i.useRef)(null),be=(0,i.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(null==z.current)return;const i=E.get(z.current);if(!i)return;const o=e.nativeEvent,a=new n({active:z.current,activeNode:i,event:o,options:r,context:Q,onAbort(e){if(!E.get(e))return;const{onDragAbort:t}=A.current,n={id:e};null==t||t(n),x({type:"onDragAbort",event:n})},onPending(e,t,n,r){if(!E.get(e))return;const{onDragPending:i}=A.current,o={id:e,constraint:t,initialCoordinates:n,offset:r};null==i||i(o),x({type:"onDragPending",event:o})},onStart(e){const t=z.current;if(null==t)return;const n=E.get(t);if(!n)return;const{onDragStart:r}=A.current,i={activatorEvent:o,active:{id:t,data:n.data,rect:$}};(0,s.unstable_batchedUpdates)(()=>{null==r||r(i),S(ia.Initializing),y({type:Ni.DragStart,initialCoordinates:e,active:t}),x({type:"onDragStart",event:i}),R(xe.current),L(o)})},onMove(e){y({type:Ni.DragMove,coordinates:e})},onEnd:l(Ni.DragEnd),onCancel:l(Ni.DragCancel)});function l(e){return async function(){const{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=Q.current;let a=null;if(t&&i){const{cancelDrop:s}=A.current;if(a={activatorEvent:o,active:t,collisions:n,delta:i,over:r},e===Ni.DragEnd&&"function"===typeof s){await Promise.resolve(s(a))&&(e=Ni.DragCancel)}}z.current=null,(0,s.unstable_batchedUpdates)(()=>{y({type:e}),S(ia.Uninitialized),ve(null),R(null),L(null),xe.current=null;const t=e===Ni.DragEnd?"onDragEnd":"onDragCancel";if(a){const e=A.current[t];null==e||e(a),x({type:t,event:a})}})}}xe.current=a},[E]),we=(0,i.useCallback)((e,t)=>(n,r)=>{const i=n.nativeEvent,o=E.get(r);if(null!==z.current||!o||i.dndKit||i.defaultPrevented)return;const a={active:o};!0===e(n,t.options,a)&&(i.dndKit={capturedBy:t.sensor},z.current=r,be(n,t))},[E,be]),Se=function(e,t){return(0,i.useMemo)(()=>e.reduce((e,n)=>{const{sensor:r}=n;return[...e,...r.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,n)}))]},[]),[e,t])}(d,we);!function(e){(0,i.useEffect)(()=>{if(!ti)return;const t=e.map(e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()});return()=>{for(const e of t)null==e||e()}},e.map(e=>{let{sensor:t}=e;return t}))}(d),ci(()=>{K&&w===ia.Initializing&&S(ia.Initialized)},[K,w]),(0,i.useEffect)(()=>{const{onDragMove:e}=A.current,{active:t,activatorEvent:n,collisions:r,over:i}=Q.current;if(!t||!n)return;const o={active:t,activatorEvent:n,collisions:r,delta:{x:pe.x,y:pe.y},over:i};(0,s.unstable_batchedUpdates)(()=>{null==e||e(o),x({type:"onDragMove",event:o})})},[pe.x,pe.y]),(0,i.useEffect)(()=>{const{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=Q.current;if(!e||null==z.current||!t||!i)return;const{onDragOver:o}=A.current,a=r.get(me),l=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:l};(0,s.unstable_batchedUpdates)(()=>{ve(l),null==o||o(c),x({type:"onDragOver",event:c})})},[me]),ci(()=>{Q.current={activatorEvent:D,active:M,activeNode:H,collisionRect:he,collisions:fe,droppableRects:F,draggableNodes:E,draggingNode:Z,draggingNodeRect:ee,droppableContainers:T,over:ge,scrollableAncestors:oe,scrollAdjustedTranslate:pe},$.current={initial:ee,translated:he}},[M,H,fe,he,E,Z,ee,F,T,ge,oe,pe]),zo({...Y,delta:j,draggingRect:he,pointerCoordinates:le,scrollableAncestors:oe,scrollableAncestorRects:ae});const ke=(0,i.useMemo)(()=>({active:M,activeNode:H,activeNodeRect:K,activatorEvent:D,collisions:fe,containerNodeRect:G,dragOverlay:J,draggableNodes:E,droppableContainers:T,droppableRects:F,over:ge,measureDroppableContainers:V,scrollableAncestors:oe,scrollableAncestorRects:ae,measuringConfiguration:_,measuringScheduled:U,windowRect:ie}),[M,H,K,D,fe,G,J,E,T,F,ge,V,oe,ae,_,U,ie]),Ce=(0,i.useMemo)(()=>({activatorEvent:D,activators:Se,active:M,activeNodeRect:K,ariaDescribedById:{draggable:I},dispatch:y,draggableNodes:E,over:ge,measureDroppableContainers:V}),[D,Se,M,K,y,I,E,ge,V]);return i.createElement(Pi.Provider,{value:b},i.createElement(qo.Provider,{value:Ce},i.createElement(Jo.Provider,{value:ke},i.createElement(ra.Provider,{value:ye},u)),i.createElement(ta,{disabled:!1===(null==l?void 0:l.restoreFocus)})),i.createElement(zi,{...l,hiddenTextDescribedById:I}))}),aa=(0,i.createContext)(null),sa="button";function la(e){let{id:t,data:n,disabled:r=!1,attributes:o}=e;const a=gi("Draggable"),{activators:s,activatorEvent:l,active:c,activeNodeRect:u,ariaDescribedById:d,draggableNodes:p,over:h}=(0,i.useContext)(qo),{role:f=sa,roleDescription:m="draggable",tabIndex:g=0}=null!=o?o:{},v=(null==c?void 0:c.id)===t,y=(0,i.useContext)(v?ra:aa),[x,b]=hi(),[w,S]=hi(),k=function(e,t){return(0,i.useMemo)(()=>e.reduce((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e},{}),[e,t])}(s,t),C=di(n);ci(()=>(p.set(t,{id:t,key:a,node:x,activatorNode:w,data:C}),()=>{const e=p.get(t);e&&e.key===a&&p.delete(t)}),[p,t]);return{active:c,activatorEvent:l,activeNodeRect:u,attributes:(0,i.useMemo)(()=>({role:f,tabIndex:g,"aria-disabled":r,"aria-pressed":!(!v||f!==sa)||void 0,"aria-roledescription":m,"aria-describedby":d.draggable}),[r,f,g,v,m,d.draggable]),isDragging:v,listeners:r?void 0:k,node:x,over:h,setNodeRef:b,setActivatorNodeRef:S,transform:y}}function ca(){return(0,i.useContext)(Jo)}const ua={timeout:25};function da(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function pa(e,t){return e.reduce((e,n,r)=>{const i=t.get(n);return i&&(e[r]=i),e},Array(e.length))}function ha(e){return null!==e&&e>=0}const fa={scaleX:1,scaleY:1},ma=e=>{var t;let{rects:n,activeNodeRect:r,activeIndex:i,overIndex:o,index:a}=e;const s=null!=(t=n[i])?t:r;if(!s)return null;const l=function(e,t,n){const r=e[t],i=e[t-1],o=e[t+1];if(!r||!i&&!o)return 0;if(n<t)return i?r.left-(i.left+i.width):o.left-(r.left+r.width);return o?o.left-(r.left+r.width):r.left-(i.left+i.width)}(n,a,i);if(a===i){const e=n[o];return e?{x:i<o?e.left+e.width-(s.left+s.width):e.left-s.left,y:0,...fa}:null}return a>i&&a<=o?{x:-s.width-l,y:0,...fa}:a<i&&a>=o?{x:s.width+l,y:0,...fa}:{x:0,y:0,...fa}};const ga=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e;const o=da(t,r,n),a=t[i],s=o[i];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null};const va="Sortable",ya=i.createContext({activeIndex:-1,containerId:va,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:ga,disabled:{draggable:!1,droppable:!1}});function xa(e){let{children:t,id:n,items:r,strategy:o=ga,disabled:a=!1}=e;const{active:s,dragOverlay:l,droppableRects:c,over:u,measureDroppableContainers:d}=ca(),p=gi(va,n),h=Boolean(null!==l.rect),f=(0,i.useMemo)(()=>r.map(e=>"object"===typeof e&&"id"in e?e.id:e),[r]),m=null!=s,g=s?f.indexOf(s.id):-1,v=u?f.indexOf(u.id):-1,y=(0,i.useRef)(f),x=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(f,y.current),b=-1!==v&&-1===g||x,w=function(e){return"boolean"===typeof e?{draggable:e,droppable:e}:e}(a);ci(()=>{x&&m&&d(f)},[x,f,m,d]),(0,i.useEffect)(()=>{y.current=f},[f]);const S=(0,i.useMemo)(()=>({activeIndex:g,containerId:p,disabled:w,disableTransforms:b,items:f,overIndex:v,useDragOverlay:h,sortedRects:pa(f,c),strategy:o}),[g,p,w.draggable,w.droppable,b,f,v,c,h,o]);return i.createElement(ya.Provider,{value:S},t)}const ba=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return da(n,r,i).indexOf(t)},wa=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:o,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!r)&&((s===o||i!==a)&&(!!n||a!==i&&t===l))},Sa={duration:200,easing:"ease"},ka="transform",Ca=Si.Transition.toString({property:ka,duration:0,easing:"linear"}),Ea={roleDescription:"sortable"};function ja(e){let{animateLayoutChanges:t=wa,attributes:n,disabled:r,data:o,getNewIndex:a=ba,id:s,strategy:l,resizeObserverConfig:c,transition:u=Sa}=e;const{items:d,containerId:p,activeIndex:h,disabled:f,disableTransforms:m,sortedRects:g,overIndex:v,useDragOverlay:y,strategy:x}=(0,i.useContext)(ya),b=function(e,t){var n,r;if("boolean"===typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(n=null==e?void 0:e.draggable)?n:t.draggable,droppable:null!=(r=null==e?void 0:e.droppable)?r:t.droppable}}(r,f),w=d.indexOf(s),S=(0,i.useMemo)(()=>({sortable:{containerId:p,index:w,items:d},...o}),[p,o,w,d]),k=(0,i.useMemo)(()=>d.slice(d.indexOf(s)),[d,s]),{rect:C,node:E,isOver:j,setNodeRef:T}=function(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:o}=e;const a=gi("Droppable"),{active:s,dispatch:l,over:c,measureDroppableContainers:u}=(0,i.useContext)(qo),d=(0,i.useRef)({disabled:n}),p=(0,i.useRef)(!1),h=(0,i.useRef)(null),f=(0,i.useRef)(null),{disabled:m,updateMeasurementsFor:g,timeout:v}={...ua,...o},y=di(null!=g?g:r),x=Io({callback:(0,i.useCallback)(()=>{p.current?(null!=f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{u(Array.isArray(y.current)?y.current:[y.current]),f.current=null},v)):p.current=!0},[v]),disabled:m||!s}),b=(0,i.useCallback)((e,t)=>{x&&(t&&(x.unobserve(t),p.current=!1),e&&x.observe(e))},[x]),[w,S]=hi(b),k=di(t);return(0,i.useEffect)(()=>{x&&w.current&&(x.disconnect(),p.current=!1,x.observe(w.current))},[w,x]),(0,i.useEffect)(()=>(l({type:Ni.RegisterDroppable,element:{id:r,key:a,disabled:n,node:w,rect:h,data:k}}),()=>l({type:Ni.UnregisterDroppable,key:a,id:r})),[r]),(0,i.useEffect)(()=>{n!==d.current.disabled&&(l({type:Ni.SetDroppableDisabled,id:r,key:a,disabled:n}),d.current.disabled=n)},[r,a,n,l]),{active:s,rect:h,isOver:(null==c?void 0:c.id)===r,node:w,over:c,setNodeRef:S}}({id:s,data:S,disabled:b.droppable,resizeObserverConfig:{updateMeasurementsFor:k,...c}}),{active:P,activatorEvent:$,activeNodeRect:M,attributes:z,setNodeRef:N,listeners:R,isDragging:D,over:L,setActivatorNodeRef:A,transform:I}=la({id:s,data:S,attributes:{...Ea,...n},disabled:b.draggable}),O=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.useMemo)(()=>e=>{t.forEach(t=>t(e))},t)}(T,N),_=Boolean(P),B=_&&!m&&ha(h)&&ha(v),F=!y&&D,V=F&&B?I:null,U=B?null!=V?V:(null!=l?l:x)({rects:g,activeNodeRect:M,activeIndex:h,overIndex:v,index:w}):null,H=ha(h)&&ha(v)?a({id:s,items:d,activeIndex:h,overIndex:v}):w,W=null==P?void 0:P.id,Y=(0,i.useRef)({activeId:W,items:d,newIndex:H,containerId:p}),X=d!==Y.current.items,K=t({active:P,containerId:p,isDragging:D,isSorting:_,id:s,index:w,items:d,newIndex:Y.current.newIndex,previousItems:Y.current.items,previousContainerId:Y.current.containerId,transition:u,wasDragging:null!=Y.current.activeId}),G=function(e){let{disabled:t,index:n,node:r,rect:o}=e;const[a,s]=(0,i.useState)(null),l=(0,i.useRef)(n);return ci(()=>{if(!t&&n!==l.current&&r.current){const e=o.current;if(e){const t=Xi(r.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&s(n)}}n!==l.current&&(l.current=n)},[t,n,r,o]),(0,i.useEffect)(()=>{a&&s(null)},[a]),a}({disabled:!K,index:w,node:E,rect:C});return(0,i.useEffect)(()=>{_&&Y.current.newIndex!==H&&(Y.current.newIndex=H),p!==Y.current.containerId&&(Y.current.containerId=p),d!==Y.current.items&&(Y.current.items=d)},[_,H,p,d]),(0,i.useEffect)(()=>{if(W===Y.current.activeId)return;if(null!=W&&null==Y.current.activeId)return void(Y.current.activeId=W);const e=setTimeout(()=>{Y.current.activeId=W},50);return()=>clearTimeout(e)},[W]),{active:P,activeIndex:h,attributes:z,data:S,rect:C,index:w,newIndex:H,items:d,isOver:j,isSorting:_,isDragging:D,listeners:R,node:E,overIndex:v,over:L,setNodeRef:O,setActivatorNodeRef:A,setDroppableNodeRef:T,setDraggableNodeRef:N,transform:null!=G?G:U,transition:function(){if(G||X&&Y.current.newIndex===w)return Ca;if(F&&!bi($)||!u)return;if(_||K)return Si.Transition.toString({...u,property:ka});return}()}}mo.Down,mo.Right,mo.Up,mo.Left;Ln`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;const Ta=Ln`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,Pa=(Ln`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ln`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,Ln`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,Ln`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,Ln`
  from {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Ln`
  from {
    clip-path: inset(0 100% 0 0);
    opacity: 0;
  }
  to {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
`,Ln`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
`,Ln`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-3px) rotate(0.5deg);
  }
  50% {
    transform: translateY(-6px) rotate(0deg);
  }
  75% {
    transform: translateY(-3px) rotate(-0.5deg);
  }
`,Ln`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.02);
    opacity: 0.9;
  }
`,Ln`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
`,Ln`
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 140, 66, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(255, 140, 66, 0.5);
  }
`,Ln`
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.1);
  }
`,Ln`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Ln`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`,Ln`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`,Ln`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Ln`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(3deg);
  }
  75% {
    transform: rotate(-3deg);
  }
`,Ln`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,Ln`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  70% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`,Ln`
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
`,Ln`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ln`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`,Ln`
  from { opacity: 0; transform: translateX(-14px); }
  to   { opacity: 1; transform: translateX(0);   }
`),$a=Mn.section`
  max-width: 900px;
  margin: 128px auto 0;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto 0;
  }
`,Ma=Mn.div`
  margin-bottom: 56px;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?Tn`${Ta} 0.5s ease forwards`:"none"}};

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;

    .num {
      font-size: 11px;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      font-weight: 600;
      letter-spacing: 0.1em;
    }

    .line {
      width: 32px;
      height: 1px;
      background: ${e=>{let{theme:t}=e;return t.colors.divider}};
      border-radius: 1px;
    }
  }

  h2 {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 900;
    letter-spacing: -0.045em;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    line-height: 1;
    margin-bottom: 12px;
  }

  .subtitle {
    font-size: 13px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    letter-spacing: 0.02em;
  }
`,za=Mn.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,Na=Mn.div`
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 20px;
  align-items: start;
  padding: 18px 0;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?Tn`${Pa} 0.45s cubic-bezier(0.4, 0, 0.2, 1) forwards`:"none"}};

  &:first-child {
    border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .category-label {
    font-size: 10px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    padding-top: 6px;
    line-height: 1.4;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
`,Ra=e=>{let{skill:t,listeners:n,attributes:r,isDragging:i,style:o,refCallback:a,selected:s,onClick:l,hovered:c,onMouseEnter:u,onMouseLeave:d,primaryColor:p,accentBg:h,textColor:f,dividerColor:m}=e;return(0,Er.jsx)("span",{ref:a,...n,...r,style:{display:"inline-flex",alignItems:"center",padding:"5px 12px",borderRadius:"6px",fontSize:"12.5px",fontFamily:"var(--font-mono, monospace)",fontWeight:500,letterSpacing:"-0.005em",position:"relative",cursor:"grab",userSelect:"none",transition:"all 0.15s cubic-bezier(0.25, 0.1, 0.25, 1)",background:s||c?`${p}10`:h,color:s||c?p:f,border:`1px solid ${s||c?`${p}35`:m}`,boxShadow:s||c?`0 2px 12px ${p}18`:"none",opacity:i?.4:1,transform:i?"scale(1.06) rotate(1.5deg)":c?"translateY(-1px)":"none",zIndex:i?10:"auto",...o},tabIndex:0,onClick:l,onMouseEnter:u,onMouseLeave:d,children:t})};function Da(e){let{id:t,skill:n,selected:r,onClick:i,hovered:o,onMouseEnter:a,onMouseLeave:s,primaryColor:l,accentBg:c,textColor:u,dividerColor:d}=e;const{attributes:p,listeners:h,setNodeRef:f,transform:m,transition:g,isDragging:v}=ja({id:t}),y={transform:Si.Transform.toString(m),transition:g};return(0,Er.jsx)(Ra,{id:t,skill:n,listeners:h,attributes:p,isDragging:v,style:y,refCallback:f,selected:r,onClick:i,hovered:o,onMouseEnter:a,onMouseLeave:s,primaryColor:l,accentBg:c,textColor:u,dividerColor:d})}const La="skills-order-v1",Aa=()=>{const[e,t]=(0,i.useState)(()=>{const e=localStorage.getItem(La);if(e)try{return JSON.parse(e)}catch{return Bn}return Bn}),[n,r]=(0,i.useState)(null),[o,a]=(0,i.useState)(null),[s,l]=(0,i.useState)(!1),c=function(){const e=i.useContext(yn);if(!e)throw Fe(18);return e}(),u=(0,i.useRef)(),d=c.colors.primary,p=c.colors.accent,h=c.colors.textSecondary,f=c.colors.cardBorder;(0,i.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&l(!0)},{threshold:.08});return u.current&&e.observe(u.current),()=>e.disconnect()},[]),(0,i.useEffect)(()=>{localStorage.setItem(La,JSON.stringify(e))},[e]),(0,i.useEffect)(()=>{const e=e=>{(u.current&&!u.current.contains(e.target)||u.current&&"SPAN"!==e.target.tagName)&&r(null)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const m=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.useMemo)(()=>[...t].filter(e=>null!=e),[...t])}((g=Eo,v={activationConstraint:{distance:6}},(0,i.useMemo)(()=>({sensor:g,options:null!=v?v:{}}),[g,v])));var g,v;return(0,Er.jsxs)($a,{id:"skills",ref:u,children:[(0,Er.jsxs)(Ma,{$visible:s,children:[(0,Er.jsxs)("div",{className:"eyebrow",children:[(0,Er.jsx)("span",{className:"num",children:"04"}),(0,Er.jsx)("div",{className:"line"})]}),(0,Er.jsx)("h2",{children:"Skills"}),(0,Er.jsx)("p",{className:"subtitle",children:"drag to reorder \xb7 click to highlight"})]}),(0,Er.jsx)(za,{children:e.map((e,i)=>(0,Er.jsxs)(Na,{$visible:s,style:{animationDelay:.12+.06*i+"s"},children:[(0,Er.jsx)("div",{className:"category-label",children:e.category}),(0,Er.jsx)(oa,{sensors:m,collisionDetection:_i,onDragEnd:e=>((e,n)=>{const{active:r,over:i}=e;i&&r.id!==i.id&&t(e=>{const t=[...e],o=[...t[n].items],a=o.findIndex(e=>e===r.id),s=o.findIndex(e=>e===i.id);return-1===a||-1===s?e:(t[n].items=da(o,a,s),t)})})(e,i),children:(0,Er.jsx)(xa,{items:e.items,strategy:ma,children:(0,Er.jsx)("div",{className:"items",children:e.items.map(e=>(0,Er.jsx)(Da,{id:e,skill:e,selected:n===e,onClick:()=>r(n===e?null:e),hovered:o===e,onMouseEnter:()=>a(e),onMouseLeave:()=>a(null),primaryColor:d,accentBg:p,textColor:h,dividerColor:f},e))})})})]},e.category))})]})},Ia=Mn.button`
  display: block;
  margin: 48px auto 0;
  padding: 12px 32px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  background: transparent;
  border: 1.5px solid ${e=>{let{theme:t}=e;return t.colors.primary}}70;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadiusPill}};
  cursor: pointer;
  transition: all 0.22s cubic-bezier(0.25, 0.1, 0.25, 1);
  text-align: center;
  min-width: 160px;
  font-family: ${e=>{let{theme:t}=e;return t.fonts.main}};

  &:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.primary}};
    border-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
    color: #fff;
    transform: translateY(-1px);
    box-shadow: 0 4px 16px ${e=>{let{theme:t}=e;return t.colors.primary}}40;
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }
`,Oa=Ln`
  from { opacity: 0; transform: translateX(-16px); }
  to   { opacity: 1; transform: translateX(0); }
`,_a=Ln`
  from { height: 0; }
  to   { height: 100%; }
`,Ba=Mn.section`
  max-width: 900px;
  margin: 128px auto;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto;
  }
`,Fa=Mn.div`
  margin-bottom: 64px;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?Tn`${Ta} 0.5s ease forwards`:"none"}};

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;

    .num {
      font-size: 11px;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      font-weight: 600;
      letter-spacing: 0.1em;
    }

    .line {
      width: 32px;
      height: 1px;
      background: ${e=>{let{theme:t}=e;return t.colors.divider}};
      border-radius: 1px;
    }
  }

  h2 {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 900;
    letter-spacing: -0.045em;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    line-height: 1;
    margin-bottom: 12px;
  }

  .subtitle {
    font-size: 13px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    letter-spacing: 0.02em;
  }
`,Va=Mn.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;

  &::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 12px;
    width: 1px;
    background: ${e=>{let{theme:t}=e;return t.colors.divider}};
    height: 0;
    animation: ${e=>{let{$visible:t}=e;return t?Tn`${_a} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards`:"none"}};
  }
`,Ua=Mn.div`
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 28px;
  padding-bottom: 52px;
  opacity: 0;
  will-change: transform, opacity;
  animation: ${e=>{let{$visible:t,$delay:n}=e;return t?Tn`${Oa} 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${n}s forwards`:"none"}};

  &:last-child {
    padding-bottom: 0;
  }
`,Ha=Mn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  .dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${e=>{let{$current:t,theme:n}=e;return t?n.colors.primary:n.colors.backgroundTertiary}};
    border: 2px solid ${e=>{let{$current:t,theme:n}=e;return t?n.colors.primary:n.colors.divider}};
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    transition: all 0.2s ease;

    ${e=>{let{$current:t,theme:n}=e;return t&&Tn`
      box-shadow: 0 0 0 3px ${n.colors.backgroundSecondary};
    `}}
  }
`,Wa=Mn.div`
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadiusLarge}};
  padding: 28px 32px;
  position: relative;
  transition: all 0.22s cubic-bezier(0.25, 0.1, 0.25, 1);
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.card}};

  &:hover {
    border-color: ${e=>{let{theme:t}=e;return t.colors.cardBorderHover}};
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.cardHover}};
  }

  .header-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 4px;
    flex-wrap: wrap;
  }

  .company-role {
    display: flex;
    align-items: baseline;
    gap: 10px;
    flex-wrap: wrap;

    .company {
      font-size: 18px;
      font-weight: 800;
      color: ${e=>{let{theme:t}=e;return t.colors.text}};
      letter-spacing: -0.03em;
    }

    .sep {
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      font-weight: 300;
      font-size: 14px;
    }

    .role {
      font-size: 14px;
      font-weight: 500;
      color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
      letter-spacing: -0.01em;
    }
  }

  .date-badge {
    font-size: 11px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    background: ${e=>{let{theme:t}=e;return t.colors.accent}};
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
    padding: 3px 10px;
    border-radius: ${e=>{let{theme:t}=e;return t.borderRadiusPill}};
    white-space: nowrap;
    letter-spacing: 0.04em;
    flex-shrink: 0;
  }

  .meta-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    flex-wrap: wrap;

    .location {
      font-size: 11px;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .current-badge {
      font-size: 10px;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: ${e=>{let{theme:t}=e;return t.colors.green}};
      background: rgba(74, 222, 128, 0.08);
      border: 1px solid rgba(74, 222, 128, 0.25);
      padding: 2px 8px;
      border-radius: ${e=>{let{theme:t}=e;return t.borderRadiusPill}};
    }
  }

  .responsibilities {
    margin-bottom: 20px;
    list-style: none;

    li {
      position: relative;
      padding-left: 16px;
      color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
      font-size: 14px;
      line-height: 1.75;
      margin-bottom: 8px;
      letter-spacing: -0.006em;

      &:last-child { margin-bottom: 0; }

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 5px;
        height: 1px;
        background: ${e=>{let{theme:t}=e;return t.colors.primary}};
        border-radius: 1px;
      }
    }
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    span {
      background: ${e=>{let{theme:t}=e;return t.colors.accent}};
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      padding: 3px 10px;
      border-radius: 5px;
      font-size: 11px;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
      font-weight: 500;
      border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
      transition: all 0.15s ease;
      letter-spacing: 0.01em;
      cursor: default;

      &:hover {
        color: ${e=>{let{theme:t}=e;return t.colors.text}};
        border-color: ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
        background: ${e=>{let{theme:t}=e;return t.colors.primarySubtle}};
      }
    }

    .more-tag {
      background: transparent;
      color: ${e=>{let{theme:t}=e;return t.colors.primary}};
      border-color: ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
      cursor: pointer;

      &:hover {
        background: ${e=>{let{theme:t}=e;return t.colors.primarySubtle}};
        border-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
        color: ${e=>{let{theme:t}=e;return t.colors.primary}};
      }
    }
  }

  @media (max-width: 900px) {
    padding: 20px 20px;
  }
`,Ya={HubSpot:!0},Xa=()=>{const[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)({}),[o,a]=(0,i.useState)(!1),s=(0,i.useRef)(null);(0,i.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&a(!0)},{threshold:.06});return s.current&&e.observe(s.current),()=>e.disconnect()},[]);const l=e?Fn:Fn.slice(0,3);return(0,Er.jsxs)(Ba,{id:"experience",ref:s,children:[(0,Er.jsxs)(Fa,{$visible:o,children:[(0,Er.jsxs)("div",{className:"eyebrow",children:[(0,Er.jsx)("span",{className:"num",children:"02"}),(0,Er.jsx)("div",{className:"line"})]}),(0,Er.jsx)("h2",{children:"Experience"}),(0,Er.jsx)("p",{className:"subtitle",children:"Where I've worked and what I've shipped"})]}),(0,Er.jsx)(Va,{$visible:o,children:l.map((e,t)=>{let{id:i,position:a,company:s,url:l,date:c,location:u,responsibilities:d,techStack:p}=e;const h=!!Ya[s]&&0===t;return(0,Er.jsxs)(Ua,{$visible:o,$delay:.3+.12*t,children:[(0,Er.jsx)(Ha,{$current:h,children:(0,Er.jsx)("div",{className:"dot"})}),(0,Er.jsxs)(Wa,{children:[(0,Er.jsxs)("div",{className:"header-row",children:[(0,Er.jsxs)("div",{className:"company-role",children:[(0,Er.jsx)("a",{className:"company",href:l,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit"},onMouseEnter:e=>e.currentTarget.style.opacity="0.75",onMouseLeave:e=>e.currentTarget.style.opacity="1",children:s}),(0,Er.jsx)("span",{className:"sep",children:"/"}),(0,Er.jsx)("span",{className:"role",children:a})]}),(0,Er.jsx)("span",{className:"date-badge",children:c})]}),(0,Er.jsxs)("div",{className:"meta-row",children:[(0,Er.jsx)("span",{className:"location",children:u}),h&&(0,Er.jsx)("span",{className:"current-badge",children:"Current"})]}),(0,Er.jsx)("ul",{className:"responsibilities",children:d.map((e,t)=>(0,Er.jsx)("li",{children:e},t))}),(0,Er.jsxs)("div",{className:"tech-stack",children:[(n[i]?p:p.slice(0,6)).map((e,t)=>(0,Er.jsx)("span",{children:e},t)),p.length>6&&!n[i]&&(0,Er.jsxs)("span",{className:"more-tag",style:{cursor:"pointer"},onClick:()=>r(e=>({...e,[i]:!0})),children:["+",p.length-6," more"]})]})]})]},i)})}),Fn.length>3&&(0,Er.jsx)(Ia,{onClick:()=>t(!e),children:e?"Show Less":`Show ${Fn.length-3} More`})]})},Ka=Ln`
  from { opacity: 0; transform: scale(0.96); }
  to   { opacity: 1; transform: scale(1); }
`,Ga=Mn.section`
  max-width: 900px;
  margin: 128px auto;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto;
  }
`,Qa=Mn.div`
  margin-bottom: 64px;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?Tn`${Ta} 0.5s ease forwards`:"none"}};

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;

    .num {
      font-size: 11px;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      font-weight: 600;
      letter-spacing: 0.1em;
    }

    .line {
      width: 32px;
      height: 1px;
      background: ${e=>{let{theme:t}=e;return t.colors.divider}};
      border-radius: 1px;
    }
  }

  h2 {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 900;
    letter-spacing: -0.045em;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    line-height: 1;
    margin-bottom: 12px;
  }

  .subtitle {
    font-size: 13px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    letter-spacing: 0.02em;
  }
`,qa=Mn.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`,Ja=Mn.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 40px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`,Za=Mn.div`
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadiusLarge}};
  padding: 32px 28px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.card}};
  display: flex;
  flex-direction: column;
  opacity: 0;
  will-change: transform, opacity;
  animation: ${e=>{let{$visible:t,$delay:n}=e;return t?Tn`${Ka} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${n}s forwards`:"none"}};

  &:hover {
    border-color: ${e=>{let{theme:t}=e;return t.colors.cardBorderHover}};
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.cardHover}};

    .title { color: ${e=>{let{theme:t}=e;return t.colors.primary}}; }
    .arrow { transform: translate(2px, -2px); }
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 9px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
    background: ${e=>{let{theme:t}=e;return t.colors.primarySubtle}};
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
    padding: 3px 8px;
    border-radius: ${e=>{let{theme:t}=e;return t.borderRadiusPill}};
    margin-bottom: 20px;
    align-self: flex-start;
  }

  .icon-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    .folder {
      width: 36px;
      height: 36px;
      background: ${e=>{let{theme:t}=e;return t.colors.primarySubtle}};
      border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
      border-radius: 9px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: ${e=>{let{theme:t}=e;return t.colors.primary}};
        font-size: 16px;
      }
    }

    .arrow {
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      font-size: 13px;
      transition: transform 0.2s ease;
    }
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    letter-spacing: -0.02em;
    margin-bottom: 10px;
    line-height: 1.35;
    transition: color 0.2s ease;
  }

  .description {
    color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
    font-size: 13.5px;
    line-height: 1.72;
    flex: 1;
    margin-bottom: 20px;
    letter-spacing: -0.004em;
  }

  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: auto;

    span {
      background: ${e=>{let{theme:t}=e;return t.colors.accent}};
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 10.5px;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
      font-weight: 500;
      border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
      letter-spacing: 0.01em;
    }
  }
`,es=Mn.div`
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}};
  padding: 20px 22px;
  position: relative;
  cursor: pointer;
  transition: all 0.22s cubic-bezier(0.25, 0.1, 0.25, 1);
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.card}};
  display: flex;
  flex-direction: column;
  opacity: 0;
  will-change: transform, opacity;
  animation: ${e=>{let{$visible:t,$delay:n}=e;return t?Tn`${Ka} 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${n}s forwards`:"none"}};

  &:hover {
    border-color: ${e=>{let{theme:t}=e;return t.colors.cardBorderHover}};
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.cardHover}};

    .title { color: ${e=>{let{theme:t}=e;return t.colors.primary}}; }
    .github-icon { opacity: 1; color: ${e=>{let{theme:t}=e;return t.colors.primary}}; }
  }

  .top-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 16px;

    .folder-sm {
      width: 36px;
      height: 36px;
      background: ${e=>{let{theme:t}=e;return t.colors.primarySubtle}};
      border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
      border-radius: 9px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: ${e=>{let{theme:t}=e;return t.colors.primary}};
        font-size: 16px;
      }
    }

    .github-icon {
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      font-size: 16px;
      opacity: 0.5;
      transition: all 0.15s ease;
    }
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    letter-spacing: -0.02em;
    margin-bottom: 10px;
    line-height: 1.35;
    transition: color 0.2s ease;
  }

  .description {
    color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
    font-size: 13.5px;
    line-height: 1.72;
    flex: 1;
    margin-bottom: 20px;
    letter-spacing: -0.004em;
  }

  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: auto;

    span {
      background: ${e=>{let{theme:t}=e;return t.colors.accent}};
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 10.5px;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
      font-weight: 500;
      border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
      letter-spacing: 0.01em;
    }
  }
`,ts=()=>(0,Er.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:(0,Er.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",strokeLinecap:"round",strokeLinejoin:"round"})}),ns=()=>{const[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(4),[o,a]=(0,i.useState)(!1),s=(0,i.useRef)(null);(0,i.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&a(!0)},{threshold:.06});return s.current&&e.observe(s.current),()=>e.disconnect()},[]),(0,i.useEffect)(()=>{const e=()=>{r(window.innerWidth<680?2:4)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const l=Vn.filter(e=>!!e.badge),c=Vn.filter(e=>!e.badge),u=e?c:c.slice(0,n-l.length);return(0,Er.jsxs)(Ga,{id:"projects",ref:s,children:[(0,Er.jsxs)(Qa,{$visible:o,children:[(0,Er.jsxs)("div",{className:"eyebrow",children:[(0,Er.jsx)("span",{className:"num",children:"03"}),(0,Er.jsx)("div",{className:"line"})]}),(0,Er.jsx)("h2",{children:"Projects"}),(0,Er.jsx)("p",{className:"subtitle",children:"Things I've built and explored"})]}),l.length>0&&(0,Er.jsx)(qa,{children:l.map((e,t)=>{let{id:n,title:r,description:i,techStack:a,url:s,external:l,badge:c}=e;return(0,Er.jsxs)(Za,{tabIndex:"0",$visible:o,$delay:.15+.1*t,onClick:()=>window.open(l||s,"_blank","noopener,noreferrer"),onKeyPress:e=>{"Enter"===e.key&&window.open(l||s,"_blank","noopener,noreferrer")},children:[(0,Er.jsxs)("div",{className:"icon-row",children:[(0,Er.jsx)("div",{className:"folder",children:(0,Er.jsx)(ts,{})}),(0,Er.jsx)(wr,{className:"arrow"})]}),(0,Er.jsx)("div",{className:"badge",children:c}),(0,Er.jsx)("div",{className:"title",children:r}),(0,Er.jsx)("div",{className:"description",children:i}),(0,Er.jsx)("div",{className:"tech",children:a.map((e,t)=>(0,Er.jsx)("span",{children:e},t))})]},n)})}),(0,Er.jsx)(Ja,{children:u.map((e,t)=>{let{id:n,title:r,description:i,techStack:a,url:s,external:l}=e;return(0,Er.jsxs)(es,{tabIndex:"0",$visible:o,$delay:.25+.08*t,onClick:()=>window.open(l||s,"_blank","noopener,noreferrer"),onKeyPress:e=>{"Enter"===e.key&&window.open(l||s,"_blank","noopener,noreferrer")},children:[(0,Er.jsxs)("div",{className:"top-row",children:[(0,Er.jsx)("div",{className:"folder-sm",children:(0,Er.jsx)(ts,{})}),s&&(0,Er.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",onClick:e=>e.stopPropagation(),children:(0,Er.jsx)(ir,{className:"github-icon"})})]}),(0,Er.jsx)("div",{className:"title",children:r}),(0,Er.jsx)("div",{className:"description",children:i}),(0,Er.jsx)("div",{className:"tech",children:a.slice(0,4).map((e,t)=>(0,Er.jsx)("span",{children:e},t))})]},n)})}),c.length>n-l.length&&(0,Er.jsx)(Ia,{onClick:()=>t(!e),children:e?"Show Less":`Show ${c.length-(n-l.length)} More`})]})},rs=Ln`
  from { opacity: 0; transform: translateX(16px); }
  to   { opacity: 1; transform: translateX(0); }
`,is=Mn.section`
  max-width: 900px;
  margin: 128px auto;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto;
  }
`,os=Mn.div`
  margin-bottom: 56px;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?Tn`${Ta} 0.5s ease forwards`:"none"}};

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;

    .num {
      font-size: 11px;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      font-weight: 600;
      letter-spacing: 0.1em;
    }

    .line {
      width: 32px;
      height: 1px;
      background: ${e=>{let{theme:t}=e;return t.colors.divider}};
      border-radius: 1px;
    }
  }

  h2 {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 900;
    letter-spacing: -0.045em;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    line-height: 1;
    margin-bottom: 12px;
  }

  .subtitle {
    font-size: 13px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    letter-spacing: 0.02em;
  }
`,as=Mn.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,ss=Mn.div`
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  padding: 24px 28px;
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 20px;
  align-items: flex-start;
  transition: all 0.22s cubic-bezier(0.25, 0.1, 0.25, 1);
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.card}};
  opacity: 0;
  will-change: transform, opacity;
  animation: ${e=>{let{$visible:t,$delay:n}=e;return t?Tn`${rs} 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${n}s forwards`:"none"}};

  &:hover {
    border-color: ${e=>{let{theme:t}=e;return t.colors.cardBorderHover}};
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.cardHover}};
    transform: translateY(-2px);

    .num-badge {
      background: ${e=>{let{theme:t}=e;return t.colors.primary}};
      color: #fff;
      border-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
    }
  }

  .num-badge {
    width: 36px;
    height: 36px;
    border-radius: 9px;
    background: ${e=>{let{theme:t}=e;return t.colors.primarySubtle}};
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
    font-size: 13px;
    font-weight: 700;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.22s ease;
    letter-spacing: -0.02em;
    margin-top: 2px;
  }

  .content {
    .title {
      font-size: 16px;
      font-weight: 700;
      color: ${e=>{let{theme:t}=e;return t.colors.text}};
      letter-spacing: -0.02em;
      margin-bottom: 6px;
      line-height: 1.3;
    }

    .description {
      color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
      font-size: 13.5px;
      line-height: 1.72;
      letter-spacing: -0.005em;
    }
  }

  @media (max-width: 600px) {
    padding: 18px 20px;
    gap: 14px;
  }
`,ls=()=>{const[e,t]=(0,i.useState)(!1),n=(0,i.useRef)(null);return(0,i.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[n]=e;n.isIntersecting&&t(!0)},{threshold:.08});return n.current&&e.observe(n.current),()=>e.disconnect()},[]),(0,Er.jsxs)(is,{id:"achievements",ref:n,children:[(0,Er.jsxs)(os,{$visible:e,children:[(0,Er.jsxs)("div",{className:"eyebrow",children:[(0,Er.jsx)("span",{className:"num",children:"05"}),(0,Er.jsx)("div",{className:"line"})]}),(0,Er.jsx)("h2",{children:"Achievements"}),(0,Er.jsx)("p",{className:"subtitle",children:"Moments I'm proud of"})]}),(0,Er.jsx)(as,{children:Un.map((t,n)=>{let{id:r,title:i,description:o}=t;return(0,Er.jsxs)(ss,{tabIndex:"0",$visible:e,$delay:.15+.1*n,children:[(0,Er.jsx)("div",{className:"num-badge",children:String(n+1).padStart(2,"0")}),(0,Er.jsxs)("div",{className:"content",children:[(0,Er.jsx)("div",{className:"title",children:i}),(0,Er.jsx)("div",{className:"description",children:o})]})]},r)})})]})},cs=Ln`
  from { opacity: 0; transform: scale(0.97); }
  to   { opacity: 1; transform: scale(1); }
`,us=Mn.section`
  max-width: 900px;
  margin: 128px auto;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto;
  }
`,ds=Mn.div`
  margin-bottom: 56px;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?Tn`${Ta} 0.5s ease forwards`:"none"}};

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;

    .num {
      font-size: 11px;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      font-weight: 600;
      letter-spacing: 0.1em;
    }

    .line {
      width: 32px;
      height: 1px;
      background: ${e=>{let{theme:t}=e;return t.colors.divider}};
      border-radius: 1px;
    }
  }

  h2 {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 900;
    letter-spacing: -0.045em;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    line-height: 1;
    margin-bottom: 12px;
  }

  .subtitle {
    font-size: 13px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    letter-spacing: 0.02em;
  }
`,ps=Mn.div`
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadiusLarge}};
  overflow: hidden;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.card}};
  opacity: 0;
  will-change: transform, opacity;
  animation: ${e=>{let{$visible:t,$delay:n}=e;return t?Tn`${cs} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${n}s forwards`:"none"}};
  transition: border-color 0.22s ease, box-shadow 0.22s ease;

  &:hover {
    border-color: ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.cardHover}};
  }
`,hs=Mn.div`
  display: flex;
  gap: 36px;
  padding: 36px 40px 32px;
  align-items: flex-start;

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 28px 24px 24px;
    gap: 24px;
  }
`,fs=Mn.a`
  display: block;
  position: relative;
  width: 180px;
  flex-shrink: 0;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.08),
    0 8px 24px rgba(0, 0, 0, 0.12);
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};

  img {
    width: 100%;
    display: block;
  }

  .hover-label {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(4px);
    opacity: 0;
    transition: opacity 0.3s ease;
    color: #fff;
    font-size: 12px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    font-weight: 600;
    letter-spacing: 0.04em;

    svg { font-size: 11px; }
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.1),
      0 20px 48px rgba(0, 0, 0, 0.18);
    border-color: ${e=>{let{theme:t}=e;return t.colors.primary}};

    .hover-label { opacity: 1; }
  }

  @media (max-width: 680px) {
    width: 200px;
  }
`,ms=Mn.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
`,gs=Mn.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 8px;
  flex-wrap: wrap;

  @media (max-width: 680px) {
    justify-content: center;
  }
`,vs=Mn.h3`
  font-size: 20px;
  font-weight: 800;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  letter-spacing: -0.03em;
  line-height: 1.25;
  flex: 1;
`,ys=(Mn.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  background: ${e=>{let{$completed:t}=e;return t?"rgba(34, 197, 94, 0.1)":"rgba(99, 102, 241, 0.1)"}};
  border: 1px solid ${e=>{let{$completed:t}=e;return t?"rgba(34, 197, 94, 0.3)":"rgba(99, 102, 241, 0.3)"}};
  color: ${e=>{let{$completed:t}=e;return t?"#22c55e":"#6366f1"}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadiusPill}};
  font-size: 10px;
  font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
  flex-shrink: 0;
  margin-top: 3px;
`,Mn.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: all 0.15s ease;
  margin-bottom: 16px;

  svg { font-size: 10px; opacity: 0.5; }

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primaryHover}};
    svg { opacity: 1; }
  }

  @media (max-width: 680px) {
    justify-content: center;
  }
`),xs=Mn.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0;
  margin-bottom: 20px;
  font-size: 12.5px;
  font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
  color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
  letter-spacing: 0.01em;

  span {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }

  .dot {
    margin: 0 10px;
    opacity: 0.3;
    font-size: 6px;
  }

  @media (max-width: 680px) {
    justify-content: center;
  }
`,bs=Mn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;

  @media (max-width: 680px) {
    justify-content: center;
  }
`,ws=Mn.span`
  background: ${e=>{let{theme:t}=e;return t.colors.accent}};
  color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 11px;
  font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
  font-weight: 500;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  transition: all 0.15s ease;
  cursor: default;

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    border-color: ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
    background: ${e=>{let{theme:t}=e;return t.colors.primarySubtle}};
  }
`,Ss=Mn.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 680px) {
    justify-content: center;
  }
`,ks=Mn.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.25);
  color: #22c55e;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}};
  font-size: 12px;
  font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  letter-spacing: 0.01em;

  svg { font-size: 10px; }

  &:hover {
    background: rgba(34, 197, 94, 0.15);
    border-color: rgba(34, 197, 94, 0.45);
    transform: translateY(-1px);
  }
`,Cs=Mn.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  background: transparent;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}};
  padding: 7px 14px;
  cursor: pointer;
  font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
  transition: all 0.18s ease;
  letter-spacing: 0.01em;

  svg {
    font-size: 10px;
    transition: transform 0.2s ease;
  }

  &:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.primarySubtle}};
    border-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,Es=Mn.div`
  display: grid;
  grid-template-rows: ${e=>{let{$open:t}=e;return t?"1fr":"0fr"}};
  transition: grid-template-rows 0.38s cubic-bezier(0.4, 0, 0.2, 1);

  > .inner { overflow: hidden; }
`,js=Mn.div`
  padding: 0 40px 28px;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};

  @media (max-width: 600px) {
    padding: 0 24px 20px;
  }
`,Ts=Mn.div`
  padding-top: 24px;
  margin-bottom: 24px;

  &:last-child { margin-bottom: 0; }

  .panel-heading {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;

    svg {
      color: ${e=>{let{theme:t}=e;return t.colors.primary}};
      font-size: 13px;
    }

    span {
      font-size: 13px;
      font-weight: 700;
      color: ${e=>{let{theme:t}=e;return t.colors.text}};
      letter-spacing: -0.01em;
    }

    .rule {
      flex: 1;
      height: 1px;
      background: ${e=>{let{theme:t}=e;return t.colors.divider}};
    }
  }
`,Ps=Mn.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 8px;
`,$s=Mn.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 14px;
  background: ${e=>{let{theme:t}=e;return t.colors.accent}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}};
  transition: all 0.18s ease;

  &:hover {
    border-color: ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
    background: ${e=>{let{theme:t}=e;return t.colors.primarySubtle}};
  }

  .step-num {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${e=>{let{theme:t}=e;return t.colors.primary}};
    color: #fff;
    font-size: 10px;
    font-weight: 800;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .step-text {
    font-size: 12.5px;
    color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
    line-height: 1.5;
    letter-spacing: -0.004em;
  }
`,Ms=Mn.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 10px;
`,zs=Mn.a`
  display: block;
  padding: 18px 20px;
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}};
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.cardHover}};
    text-decoration: none;

    .proj-title { color: ${e=>{let{theme:t}=e;return t.colors.primary}}; }
  }

  .proj-icon {
    width: 32px;
    height: 32px;
    background: ${e=>{let{theme:t}=e;return t.colors.primarySubtle}};
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;

    svg {
      color: ${e=>{let{theme:t}=e;return t.colors.primary}};
      font-size: 14px;
    }
  }

  .proj-title {
    font-size: 14px;
    font-weight: 700;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    letter-spacing: -0.018em;
    line-height: 1.3;
    margin-bottom: 6px;
    transition: color 0.15s ease;
    display: flex;
    align-items: center;
    gap: 6px;

    svg {
      font-size: 10px;
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      flex-shrink: 0;
    }
  }

  .proj-desc {
    font-size: 12.5px;
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    line-height: 1.6;
    letter-spacing: -0.004em;
  }
`,Ns=()=>{const[e,t]=(0,i.useState)(null),[n,r]=(0,i.useState)(!1),o=(0,i.useRef)(null);return(0,i.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&r(!0)},{threshold:.08});return o.current&&e.observe(o.current),()=>e.disconnect()},[]),(0,Er.jsxs)(us,{id:"certifications",ref:o,children:[(0,Er.jsxs)(ds,{$visible:n,children:[(0,Er.jsxs)("div",{className:"eyebrow",children:[(0,Er.jsx)("span",{className:"num",children:"06"}),(0,Er.jsx)("div",{className:"line"})]}),(0,Er.jsx)("h2",{children:"Certifications"}),(0,Er.jsx)("p",{className:"subtitle",children:"Continuous learning & growth"})]}),Wn.map((r,i)=>(0,Er.jsxs)(ps,{$visible:n,$delay:.15+.12*i,children:[(0,Er.jsxs)(hs,{children:[r.certificatePdf&&(0,Er.jsxs)(fs,{href:`/my-portfolio${r.certificatePdf}`,target:"_blank",rel:"noopener noreferrer",children:[(0,Er.jsx)("img",{src:`/my-portfolio${r.certificateThumb||r.certificatePdf}`,alt:`${r.title} certificate`}),(0,Er.jsxs)("div",{className:"hover-label",children:[(0,Er.jsx)(mr,{}),"View Certificate"]})]}),(0,Er.jsxs)(ms,{children:[(0,Er.jsx)(gs,{children:(0,Er.jsx)(vs,{children:r.title})}),(0,Er.jsxs)(ys,{href:r.institutionUrl,target:"_blank",rel:"noopener noreferrer",children:[(0,Er.jsx)(fr,{}),r.institution,(0,Er.jsx)(mr,{})]}),(0,Er.jsxs)(xs,{children:[(0,Er.jsx)("span",{children:r.duration}),(0,Er.jsx)("span",{className:"dot",children:"\u25cf"}),(0,Er.jsx)("span",{children:r.date}),(0,Er.jsx)("span",{className:"dot",children:"\u25cf"}),(0,Er.jsx)("span",{children:"London"}),r.issuedDate&&(0,Er.jsxs)(Er.Fragment,{children:[(0,Er.jsx)("span",{className:"dot",children:"\u25cf"}),(0,Er.jsxs)("span",{children:["Issued ",r.issuedDate]})]})]}),(0,Er.jsx)(bs,{children:r.techStack.map((e,t)=>(0,Er.jsx)(ws,{children:e},t))}),(0,Er.jsxs)(Ss,{children:[r.credentialUrl&&(0,Er.jsxs)(ks,{href:r.credentialUrl,target:"_blank",rel:"noopener noreferrer",children:[(0,Er.jsx)(lr,{}),"Verify Credential"]}),(0,Er.jsx)(Cs,{onClick:()=>t(e===r.id?null:r.id),children:e===r.id?(0,Er.jsxs)(Er.Fragment,{children:[(0,Er.jsx)(yr,{})," Hide Details"]}):(0,Er.jsxs)(Er.Fragment,{children:[(0,Er.jsx)(xr,{})," Curriculum & Projects"]})})]})]})]}),(0,Er.jsx)(Es,{$open:e===r.id,children:(0,Er.jsx)("div",{className:"inner",children:(0,Er.jsxs)(js,{children:[(0,Er.jsxs)(Ts,{children:[(0,Er.jsxs)("div",{className:"panel-heading",children:[(0,Er.jsx)(br,{}),(0,Er.jsx)("span",{children:"Curriculum Overview"}),(0,Er.jsx)("div",{className:"rule"})]}),(0,Er.jsx)(Ps,{children:r.curriculum.map((e,t)=>(0,Er.jsxs)($s,{children:[(0,Er.jsx)("span",{className:"step-num",children:t+1}),(0,Er.jsx)("span",{className:"step-text",children:e})]},t))})]}),(0,Er.jsxs)(Ts,{children:[(0,Er.jsxs)("div",{className:"panel-heading",children:[(0,Er.jsx)(ur,{}),(0,Er.jsx)("span",{children:"Capstone Projects"}),(0,Er.jsx)("div",{className:"rule"})]}),(0,Er.jsx)(Ms,{children:r.capstoneProjects.map((e,t)=>(0,Er.jsxs)(zs,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,Er.jsx)("div",{className:"proj-icon",children:(0,Er.jsx)(ur,{})}),(0,Er.jsxs)("div",{className:"proj-title",children:[e.title,(0,Er.jsx)(mr,{})]}),(0,Er.jsx)("div",{className:"proj-desc",children:e.description})]},t))})]})]})})})]},r.id))]})},Rs=Ln`
  from { opacity: 0; transform: translateX(-16px); }
  to   { opacity: 1; transform: translateX(0); }
`,Ds=Mn.section`
  max-width: 900px;
  margin: 128px auto;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto;
  }
`,Ls=Mn.div`
  margin-bottom: 56px;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?Tn`${Ta} 0.5s ease forwards`:"none"}};

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;

    .num {
      font-size: 11px;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      font-weight: 600;
      letter-spacing: 0.1em;
    }

    .line {
      width: 32px;
      height: 1px;
      background: ${e=>{let{theme:t}=e;return t.colors.divider}};
      border-radius: 1px;
    }
  }

  h2 {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 900;
    letter-spacing: -0.045em;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    line-height: 1;
    margin-bottom: 12px;
  }

  .subtitle {
    font-size: 13px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    letter-spacing: 0.02em;
  }
`,As=Mn.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Is=Mn.div`
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadiusLarge}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  padding: 28px 32px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.22s cubic-bezier(0.25, 0.1, 0.25, 1);
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.card}};
  opacity: 0;
  will-change: transform, opacity;
  animation: ${e=>{let{$visible:t,$delay:n}=e;return t?Tn`${Rs} 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${n}s forwards`:"none"}};

  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 28px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 20px 20px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${e=>{let{theme:t}=e;return t.colors.primary}},
      ${e=>{let{theme:t}=e;return t.colors.primaryHover}}
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    border-color: ${e=>{let{theme:t}=e;return t.colors.cardBorderHover}};
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.cardHover}};
    transform: translateY(-2px);

    &::before {
      transform: scaleX(1);
    }
  }

  .duration-col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
    padding-top: 3px;

    .year {
      font-size: 13px;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
      color: ${e=>{let{theme:t}=e;return t.colors.primary}};
      font-weight: 700;
      letter-spacing: -0.01em;
    }

    .duration-label {
      font-size: 10px;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      letter-spacing: 0.04em;
    }

    @media (max-width: 680px) {
      flex-direction: row;
      align-items: center;
      gap: 8px;
    }
  }

  .content-col {
    .school-row {
      display: flex;
      align-items: baseline;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 5px;

      .school-name {
        font-size: 17px;
        font-weight: 800;
        color: ${e=>{let{theme:t}=e;return t.colors.text}};
        letter-spacing: -0.025em;
        display: inline-flex;
        align-items: center;
        gap: 5px;

        svg {
          font-size: 10px;
          opacity: 0.4;
          color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
        }
      }

      .sep {
        color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
        font-weight: 300;
        font-size: 15px;
      }

      .degree {
        font-size: 14px;
        font-weight: 500;
        color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
        letter-spacing: -0.012em;
      }
    }

    .meta {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 14px;
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      font-size: 11px;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
      letter-spacing: 0.04em;
      text-transform: uppercase;

      svg {
        font-size: 9px;
        color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      }
    }

    .major {
      font-size: 13px;
      color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
      font-weight: 500;
      margin-bottom: 12px;
      letter-spacing: -0.008em;
    }

    .details {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;

      .detail-pill {
        font-size: 11px;
        font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
        color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
        background: ${e=>{let{theme:t}=e;return t.colors.accent}};
        border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
        padding: 2px 9px;
        border-radius: 5px;
        letter-spacing: 0.01em;
      }
    }
  }
`,Os=()=>{const[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(!1),o=(0,i.useRef)(null);(0,i.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&r(!0)},{threshold:.08});return o.current&&e.observe(o.current),()=>e.disconnect()},[]);const a=e?Hn:Hn.slice(0,1);return(0,Er.jsxs)(Ds,{id:"education",ref:o,children:[(0,Er.jsxs)(Ls,{$visible:n,children:[(0,Er.jsxs)("div",{className:"eyebrow",children:[(0,Er.jsx)("span",{className:"num",children:"07"}),(0,Er.jsx)("div",{className:"line"})]}),(0,Er.jsx)("h2",{children:"Education"}),(0,Er.jsx)("p",{className:"subtitle",children:"Where it all began"})]}),(0,Er.jsx)(As,{children:a.map((e,t)=>{let{id:r,school:i,url:o,degree:a,duration:s,location:l,major:c,details:u}=e;return(0,Er.jsxs)(Is,{tabIndex:"0",$visible:n,$delay:.15+.1*t,onClick:()=>window.open(o,"_blank","noopener,noreferrer"),onKeyPress:e=>{"Enter"===e.key&&window.open(o,"_blank","noopener,noreferrer")},children:[(0,Er.jsxs)("div",{className:"duration-col",children:[(0,Er.jsx)("span",{className:"year",children:s.split(" - ")[0]}),(0,Er.jsx)("span",{className:"duration-label",children:s})]}),(0,Er.jsxs)("div",{className:"content-col",children:[(0,Er.jsxs)("div",{className:"school-row",children:[(0,Er.jsxs)("span",{className:"school-name",children:[i,(0,Er.jsx)(mr,{})]}),(0,Er.jsx)("span",{className:"sep",children:"\xb7"}),(0,Er.jsx)("span",{className:"degree",children:a})]}),(0,Er.jsxs)("div",{className:"meta",children:[(0,Er.jsx)(hr,{}),l]}),c&&(0,Er.jsx)("div",{className:"major",children:c}),(0,Er.jsx)("div",{className:"details",children:u.map((e,t)=>(0,Er.jsx)("span",{className:"detail-pill",children:e},t))})]})]},r)})}),Hn.length>1&&(0,Er.jsx)(Ia,{onClick:()=>t(!e),children:e?"Show Less":`Show ${Hn.length-1} More`})]})},_s=Ln`
  from { opacity: 0; transform: scale(0.9); }
  to   { opacity: 1; transform: scale(1); }
`,Bs=Mn.section`
  max-width: 900px;
  margin: 128px auto 100px;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto 80px;
  }
`,Fs=Mn.div`
  margin-bottom: 64px;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?Tn`${Ta} 0.5s ease forwards`:"none"}};

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;

    .num {
      font-size: 11px;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      font-weight: 600;
      letter-spacing: 0.1em;
    }

    .line {
      width: 32px;
      height: 1px;
      background: ${e=>{let{theme:t}=e;return t.colors.divider}};
      border-radius: 1px;
    }
  }

  h2 {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 900;
    letter-spacing: -0.045em;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    line-height: 1;
    margin-bottom: 12px;
  }

  .subtitle {
    font-size: 13px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    letter-spacing: 0.02em;
  }
`,Vs=Mn.div`
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadiusLarge}};
  padding: 52px 48px;
  text-align: center;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.card}};
  position: relative;
  overflow: hidden;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?Tn`${_s} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s forwards`:"none"}};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${e=>{let{theme:t}=e;return t.colors.divider}};
  }

  @media (max-width: 600px) {
    padding: 36px 24px;
  }
`,Us=Mn.h2`
  font-size: clamp(40px, 6vw, 64px);
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 0.95;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-bottom: 20px;

  span {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,Hs=Mn.p`
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  margin-bottom: 44px;
  max-width: 400px;
  line-height: 1.72;
  font-size: 15px;
  letter-spacing: -0.008em;
  margin-left: auto;
  margin-right: auto;
`,Ws=Mn.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 36px;
  background: ${e=>{let{theme:t}=e;return t.colors.primary}};
  color: #fff;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadiusPill}};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.01em;
  text-decoration: none;
  transition: all 0.22s cubic-bezier(0.25, 0.1, 0.25, 1);
  margin-bottom: 40px;
  box-shadow: 0 4px 20px ${e=>{let{theme:t}=e;return t.colors.primary}}35;

  svg {
    font-size: 16px;
  }

  &:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.primaryHover}};
    box-shadow: 0 8px 32px ${e=>{let{theme:t}=e;return t.colors.primary}}50;
    text-decoration: none;
    color: #fff;
  }
`,Ys=Mn.p`
  font-size: 11px;
  font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
  color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
  margin-bottom: 20px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`,Xs=Mn.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`,Ks=Mn.a`
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>{let{theme:t}=e;return t.colors.accent}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  font-size: 17px;
  text-decoration: none;
  transition: all 0.18s cubic-bezier(0.25, 0.1, 0.25, 1);

  &:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.accentHover}};
    border-color: ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    text-decoration: none;
  }
`,Gs=()=>{var e,t,n,r;const[o,a]=(0,i.useState)(!1),s=(0,i.useRef)(null);(0,i.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&a(!0)},{threshold:.1});return s.current&&e.observe(s.current),()=>e.disconnect()},[]);const l=null===(e=On.find(e=>"LinkedIn"===e.name))||void 0===e?void 0:e.url,c=null===(t=On.find(e=>"GitHub"===e.name))||void 0===t?void 0:t.url,u=null===(n=On.find(e=>"Instagram"===e.name))||void 0===n?void 0:n.url,d=null===(r=On.find(e=>"LeetCode"===e.name))||void 0===r?void 0:r.url;return(0,Er.jsxs)(Bs,{id:"contact",ref:s,children:[(0,Er.jsxs)(Fs,{$visible:o,children:[(0,Er.jsxs)("div",{className:"eyebrow",children:[(0,Er.jsx)("span",{className:"num",children:"08"}),(0,Er.jsx)("div",{className:"line"})]}),(0,Er.jsx)("h2",{children:"Get In Touch"}),(0,Er.jsx)("p",{className:"subtitle",children:"Let's make something great together"})]}),(0,Er.jsxs)(Vs,{$visible:o,children:[(0,Er.jsxs)(Us,{children:["Let's ",(0,Er.jsx)("span",{children:"Talk."})]}),(0,Er.jsx)(Hs,{children:_n.contact.message}),(0,Er.jsxs)(Ws,{href:`mailto:${_n.contact.email}`,children:[(0,Er.jsx)(gr,{}),"Say Hello"]}),(0,Er.jsx)(Ys,{children:"\u2014 or find me on \u2014"}),(0,Er.jsxs)(Xs,{children:[c&&(0,Er.jsx)(Ks,{href:c,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:(0,Er.jsx)(ir,{})}),l&&(0,Er.jsx)(Ks,{href:l,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:(0,Er.jsx)(nr,{})}),u&&(0,Er.jsx)(Ks,{href:u,target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:(0,Er.jsx)(rr,{})}),d&&(0,Er.jsx)(Ks,{href:d,target:"_blank",rel:"noopener noreferrer","aria-label":"LeetCode",children:(0,Er.jsx)(vr,{})})]})]})]})},Qs=Mn.main`
  padding: 0;

  @media (max-width: 900px) {
    padding-top: 60px;
  }
`,qs=()=>(0,Er.jsxs)(Qs,{children:[(0,Er.jsx)(ei,{}),(0,Er.jsx)(Xa,{}),(0,Er.jsx)(ns,{}),(0,Er.jsx)(Aa,{}),(0,Er.jsx)(ls,{}),(0,Er.jsx)(Ns,{}),(0,Er.jsx)(Os,{}),(0,Er.jsx)(Gs,{})]}),Js=Ln`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Zs=Ln`
  from { transform: translateX(100%); }
  to   { transform: translateX(0); }
`,el=Ln`
  from { opacity: 0; transform: translateX(16px); }
  to   { opacity: 1; transform: translateX(0); }
`,tl=Mn.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: ${e=>{let{theme:t}=e;return t.colors.headerBackground}};
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
`,nl=Mn.a`
  font-size: 15px;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  text-decoration: none;

  span {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,rl=Mn.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,il=Mn.button`
  width: 36px;
  height: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.15s ease;
  padding: 0;

  &:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.accent}};
  }

  .bar {
    width: 18px;
    height: 1.5px;
    background: ${e=>{let{theme:t}=e;return t.colors.text}};
    border-radius: 1px;
    transform-origin: center;
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
                opacity 0.3s ease,
                width 0.3s ease;
  }

  ${e=>{let{$open:t}=e;return t&&Tn`
      .bar:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
      .bar:nth-child(2) { opacity: 0; width: 0; }
      .bar:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
    `}}
`,ol=Mn.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 998;
  animation: ${Js} 0.25s ease forwards;
`,al=Mn.nav`
  position: fixed;
  top: 60px;
  right: 0;
  bottom: 0;
  width: min(320px, 88vw);
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-left: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 40px 32px 48px;
  font-family: ${e=>{let{theme:t}=e;return t.fonts.main}};
  animation: ${Zs} 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  overflow-y: auto;
`,sl=Mn.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0;
`,ll=Mn.li`
  opacity: 0;
  animation: ${el} 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: ${e=>{let{$i:t}=e;return.06+.045*t}}s;
`,cl=Mn.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px;
  border-radius: 8px;
  color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
  font-size: 13.5px;
  font-weight: 500;
  font-family: ${e=>{let{theme:t}=e;return t.fonts.main}};
  letter-spacing: -0.01em;
  text-decoration: none;
  border-left: 2px solid transparent;
  transition: all 0.15s ease;

  .nav-label {
    flex: 1;
    transition: transform 0.15s ease;
  }

  .nav-num {
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    font-size: 9px;
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    opacity: 0.5;
    letter-spacing: 0.04em;
    transition: opacity 0.15s ease;
  }

  &.active {
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    font-weight: 600;
    background: ${e=>{let{theme:t}=e;return t.colors.accent}};
    border-left-color: ${e=>{let{theme:t}=e;return t.colors.primary}};

    .nav-num {
      opacity: 0.5;
      color: ${e=>{let{theme:t}=e;return t.colors.primary}};
    }
  }

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    background: ${e=>{let{theme:t}=e;return t.colors.accent}};
    text-decoration: none;

    .nav-label { transform: translateX(2px); }
    .nav-num { opacity: 0.4; }
  }
`,ul=Mn.div`
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
  animation: ${Js} 0.4s ease 0.45s forwards;
`,dl=Mn.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 0;
  background: ${e=>{let{theme:t}=e;return t.colors.primary}};
  color: #fff;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadiusPill}};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.01em;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.primaryHover}};
    transform: translateY(-1px);
    color: #fff;
    text-decoration: none;
  }
`,pl=Mn.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,hl=Mn.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  background: ${e=>{let{theme:t}=e;return t.colors.accent}};
  text-decoration: none;
  transition: all 0.15s ease;

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    border-color: ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
  }
`,fl=Mn.div`
  padding-bottom: 24px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};

  .id-name {
    font-size: 17px;
    font-weight: 800;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.main}};
    letter-spacing: -0.04em;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    margin-bottom: 5px;
    line-height: 1.2;
  }

  .id-title {
    font-size: 11px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .id-location {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${e=>{let{theme:t}=e;return t.colors.green}};
      flex-shrink: 0;
    }

    span {
      font-size: 10px;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
  }
`,ml=["01","02","03","04","05","06","07","08"],gl={GitHub:ir,LinkedIn:nr,Instagram:rr,LeetCode:vr},vl=()=>{const[e,t]=(0,i.useState)(!1);(0,i.useEffect)(()=>(document.body.style.overflow=e?"hidden":"",()=>{document.body.style.overflow=""}),[e]);return(0,Er.jsxs)(Er.Fragment,{children:[(0,Er.jsxs)(tl,{children:[(0,Er.jsxs)(nl,{href:"/",children:[_n.name.split(" ")[0],(0,Er.jsx)("span",{children:"."})]}),(0,Er.jsxs)(rl,{children:[(0,Er.jsx)(Mr,{}),(0,Er.jsxs)(il,{$open:e,onClick:()=>t(e=>!e),"aria-label":e?"Close menu":"Open menu",children:[(0,Er.jsx)("span",{className:"bar"}),(0,Er.jsx)("span",{className:"bar"}),(0,Er.jsx)("span",{className:"bar"})]})]})]}),e&&(0,Er.jsxs)(Er.Fragment,{children:[(0,Er.jsx)(ol,{onClick:()=>t(!1)}),(0,Er.jsxs)(al,{children:[(0,Er.jsxs)(fl,{children:[(0,Er.jsx)("div",{className:"id-name",children:_n.name}),(0,Er.jsx)("div",{className:"id-title",children:_n.description}),(0,Er.jsxs)("div",{className:"id-location",children:[(0,Er.jsx)("span",{className:"dot"}),(0,Er.jsx)("span",{children:"London, UK"})]})]}),(0,Er.jsx)(sl,{children:In.map((e,n)=>{let{id:r,name:i,url:o}=e;return(0,Er.jsx)(ll,{$i:n,children:(0,Er.jsxs)(cl,{href:o,onClick:e=>((e,n)=>{e.preventDefault(),t(!1),setTimeout(()=>{const e=document.getElementById(n.replace("#",""));e&&window.scrollTo({top:e.getBoundingClientRect().top+window.scrollY-72,behavior:"smooth"})},280)})(e,o),children:[(0,Er.jsx)("span",{className:"nav-label",children:i}),(0,Er.jsx)("span",{className:"nav-num",children:ml[n]})]})},r)})}),(0,Er.jsxs)(ul,{children:[(0,Er.jsx)(dl,{href:"/my-portfolio/resume.pdf",target:"_blank",rel:"noopener noreferrer",onClick:()=>t(!1),children:"Download R\xe9sum\xe9"}),(0,Er.jsx)(pl,{children:On.map(e=>{let{id:t,name:n,url:r}=e;const i=gl[n];return i?(0,Er.jsx)(hl,{href:r,target:"_blank",rel:"noopener noreferrer","aria-label":n,children:(0,Er.jsx)(i,{})},t):null})})]})]})]})]})},yl=Ln`
  0% {
    clip-path: inset(0 100% 0 0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    clip-path: inset(0 0% 0 0);
    opacity: 1;
  }
`,xl=Ln`
  0%   { transform: translateY(0); border-bottom-left-radius: 0; border-bottom-right-radius: 0; }
  15%  { border-bottom-left-radius: 48px; border-bottom-right-radius: 48px; }
  100% { transform: translateY(-102%); border-bottom-left-radius: 48px; border-bottom-right-radius: 48px; }
`,bl=Ln`
  0%   { transform: translateY(0); border-top-left-radius: 0; border-top-right-radius: 0; }
  15%  { border-top-left-radius: 48px; border-top-right-radius: 48px; }
  100% { transform: translateY(102%); border-top-left-radius: 48px; border-top-right-radius: 48px; }
`,wl=Mn.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  backdrop-filter: blur(3px);
  transition: opacity 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  opacity: ${e=>{let{$unblur:t}=e;return t?0:1}};
  pointer-events: none;
`,Sl=Mn.div`
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  height: 50%;
  z-index: 9999;
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-left: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};
  border-right: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  overflow: hidden;
`,kl=Mn(Sl)`
  top: 0;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};
  align-items: flex-end;
  padding-bottom: 4px;
  animation: ${xl} 1.6s cubic-bezier(0.76, 0, 0.24, 1) 1s forwards;
`,Cl=Mn(Sl)`
  bottom: 0;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};
  align-items: flex-start;
  padding-top: 4px;
  animation: ${bl} 1.6s cubic-bezier(0.76, 0, 0.24, 1) 1s forwards;
`,El=Mn.div`
  text-align: center;
  padding-bottom: 20px;

  .monogram {
    font-size: clamp(28px, 5vw, 44px);
    font-weight: 900;
    letter-spacing: -0.06em;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    line-height: 1;
    animation: ${yl} 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;

    span {
      color: ${e=>{let{theme:t}=e;return t.colors.primary}};
    }
  }
`,jl=Mn.div`
  text-align: center;
  padding-top: 20px;

  .tagline {
    font-size: 11px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    letter-spacing: 0.2em;
    text-transform: uppercase;
    animation: ${yl} 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
  }
`,Tl=e=>{let{onFinish:t}=e;const[n,r]=(0,i.useState)(!0),[o,a]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{const e=t,n=setTimeout(()=>{a(!0),setTimeout(()=>{r(!1),e&&e()},700)},2400);return()=>clearTimeout(n)},[]),n?(0,Er.jsxs)(Er.Fragment,{children:[(0,Er.jsx)(wl,{$unblur:o}),(0,Er.jsx)(kl,{children:(0,Er.jsx)(El,{children:(0,Er.jsxs)("div",{className:"monogram",children:["DIBYAJYOTI",(0,Er.jsx)("span",{children:"."})]})})}),(0,Er.jsx)(Cl,{children:(0,Er.jsx)(jl,{children:(0,Er.jsx)("div",{className:"tagline",children:"Senior Software Engineer \xb7 London"})})})]}):null},Pl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],$l=(()=>new Set(Pl))(),Ml=(e,t,n)=>n>t?t:n<e?e:n,zl={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},Nl={...zl,transform:e=>Ml(0,1,e)},Rl={...zl,default:1},Dl=e=>Math.round(1e5*e)/1e5,Ll=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const Al=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Il=(e,t)=>n=>Boolean("string"===typeof n&&Al.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),Ol=(e,t,n)=>r=>{if("string"!==typeof r)return r;const[i,o,a,s]=r.match(Ll);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},_l={...zl,transform:e=>Math.round((e=>Ml(0,255,e))(e))},Bl={test:Il("rgb","red"),parse:Ol("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+_l.transform(t)+", "+_l.transform(n)+", "+_l.transform(r)+", "+Dl(Nl.transform(i))+")"}};const Fl={test:Il("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:Bl.transform},Vl=e=>({test:t=>"string"===typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Ul=Vl("deg"),Hl=Vl("%"),Wl=Vl("px"),Yl=Vl("vh"),Xl=Vl("vw"),Kl=(()=>({...Hl,parse:e=>Hl.parse(e)/100,transform:e=>Hl.transform(100*e)}))(),Gl={test:Il("hsl","hue"),parse:Ol("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+Hl.transform(Dl(n))+", "+Hl.transform(Dl(r))+", "+Dl(Nl.transform(i))+")"}},Ql={test:e=>Bl.test(e)||Fl.test(e)||Gl.test(e),parse:e=>Bl.test(e)?Bl.parse(e):Gl.test(e)?Gl.parse(e):Fl.parse(e),transform:e=>"string"===typeof e?e:e.hasOwnProperty("red")?Bl.transform(e):Gl.transform(e),getAnimatableNone:e=>{const t=Ql.parse(e);return t.alpha=0,Ql.transform(t)}},ql=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const Jl="number",Zl="color",ec=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function tc(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(ec,e=>(Ql.test(e)?(r.color.push(o),i.push(Zl),n.push(Ql.parse(e))):e.startsWith("var(")?(r.var.push(o),i.push("var"),n.push(e)):(r.number.push(o),i.push(Jl),n.push(parseFloat(e))),++o,"${}")).split("${}");return{values:n,split:a,indexes:r,types:i}}function nc(e){let{split:t,types:n}=e;const r=t.length;return e=>{let i="";for(let o=0;o<r;o++)if(i+=t[o],void 0!==e[o]){const t=n[o];i+=t===Jl?Dl(e[o]):t===Zl?Ql.transform(e[o]):e[o]}return i}}const rc=(e,t)=>"number"===typeof e?t?.trim().endsWith("/")?e:0:(e=>"number"===typeof e?0:Ql.test(e)?Ql.getAnimatableNone(e):e)(e);const ic={test:function(e){return isNaN(e)&&"string"===typeof e&&(e.match(Ll)?.length||0)+(e.match(ql)?.length||0)>0},parse:function(e){return tc(e).values},createTransformer:function(e){return nc(tc(e))},getAnimatableNone:function(e){const t=tc(e);return nc(t)(t.values.map((e,n)=>rc(e,t.split[n])))}},oc=new Set(["brightness","contrast","saturate","opacity"]);function ac(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(Ll)||[];if(!r)return e;const i=n.replace(r,"");let o=oc.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const sc=/\b([a-z-]*)\(.*?\)/gu,lc={...ic,getAnimatableNone:e=>{const t=e.match(sc);return t?t.map(ac).join(" "):e}},cc={...ic,getAnimatableNone:e=>{const t=ic.parse(e);return ic.createTransformer(e)(t.map(e=>"number"===typeof e?0:"object"===typeof e?{...e,alpha:1}:e))}},uc={...zl,transform:Math.round},dc={borderWidth:Wl,borderTopWidth:Wl,borderRightWidth:Wl,borderBottomWidth:Wl,borderLeftWidth:Wl,borderRadius:Wl,borderTopLeftRadius:Wl,borderTopRightRadius:Wl,borderBottomRightRadius:Wl,borderBottomLeftRadius:Wl,width:Wl,maxWidth:Wl,height:Wl,maxHeight:Wl,top:Wl,right:Wl,bottom:Wl,left:Wl,inset:Wl,insetBlock:Wl,insetBlockStart:Wl,insetBlockEnd:Wl,insetInline:Wl,insetInlineStart:Wl,insetInlineEnd:Wl,padding:Wl,paddingTop:Wl,paddingRight:Wl,paddingBottom:Wl,paddingLeft:Wl,paddingBlock:Wl,paddingBlockStart:Wl,paddingBlockEnd:Wl,paddingInline:Wl,paddingInlineStart:Wl,paddingInlineEnd:Wl,margin:Wl,marginTop:Wl,marginRight:Wl,marginBottom:Wl,marginLeft:Wl,marginBlock:Wl,marginBlockStart:Wl,marginBlockEnd:Wl,marginInline:Wl,marginInlineStart:Wl,marginInlineEnd:Wl,fontSize:Wl,backgroundPositionX:Wl,backgroundPositionY:Wl,...{rotate:Ul,rotateX:Ul,rotateY:Ul,rotateZ:Ul,scale:Rl,scaleX:Rl,scaleY:Rl,scaleZ:Rl,skew:Ul,skewX:Ul,skewY:Ul,distance:Wl,translateX:Wl,translateY:Wl,translateZ:Wl,x:Wl,y:Wl,z:Wl,perspective:Wl,transformPerspective:Wl,opacity:Nl,originX:Kl,originY:Kl,originZ:Wl},zIndex:uc,fillOpacity:Nl,strokeOpacity:Nl,numOctaves:uc},pc={...dc,color:Ql,backgroundColor:Ql,outlineColor:Ql,fill:Ql,stroke:Ql,borderColor:Ql,borderTopColor:Ql,borderRightColor:Ql,borderBottomColor:Ql,borderLeftColor:Ql,filter:lc,WebkitFilter:lc,mask:cc,WebkitMask:cc},hc=e=>pc[e],fc=()=>({x:{min:0,max:0},y:{min:0,max:0}}),mc=e=>Boolean(e&&e.getVelocity),gc=new Set(["width","height","top","left","right","bottom",...Pl]),vc=e=>t=>t.test(e),yc=[zl,Wl,Hl,Ul,Xl,Yl,{test:e=>"auto"===e,parse:e=>e}],xc=e=>yc.find(vc(e));const bc=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),wc=e=>t=>"string"===typeof t&&t.startsWith(e),Sc=wc("--"),kc=wc("var(--"),Cc=e=>!!kc(e)&&Ec.test(e.split("/*")[0].trim()),Ec=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function jc(e){return"string"===typeof e&&e.split("/*")[0].includes("var(--")}const Tc=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Pc(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const[r,i]=function(e){const t=Tc.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const e=o.trim();return bc(e)?parseFloat(e):e}return Cc(i)?Pc(i,t,n+1):i}const $c=e=>180*e/Math.PI,Mc=e=>{const t=$c(Math.atan2(e[1],e[0]));return Nc(t)},zc={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Mc,rotateZ:Mc,skewX:e=>$c(Math.atan(e[1])),skewY:e=>$c(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Nc=e=>((e%=360)<0&&(e+=360),e),Rc=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Dc=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Lc={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Rc,scaleY:Dc,scale:e=>(Rc(e)+Dc(e))/2,rotateX:e=>Nc($c(Math.atan2(e[6],e[5]))),rotateY:e=>Nc($c(Math.atan2(-e[2],e[0]))),rotateZ:Mc,rotate:Mc,skewX:e=>$c(Math.atan(e[4])),skewY:e=>$c(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Ac(e){return e.includes("scale")?1:0}function Ic(e,t){if(!e||"none"===e)return Ac(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=Lc,i=n;else{const t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=zc,i=t}if(!i)return Ac(t);const o=r[t],a=i[1].split(",").map(Oc);return"function"===typeof o?o(a):a[o]}function Oc(e){return parseFloat(e.trim())}const _c=e=>e===zl||e===Wl,Bc=new Set(["x","y","z"]),Fc=Pl.filter(e=>!Bc.has(e));const Vc={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0",boxSizing:o}=t;const a=n.max-n.min;return"border-box"===o?a:a-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0",boxSizing:o}=t;const a=n.max-n.min;return"border-box"===o?a:a-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:(e,t)=>{let{transform:n}=t;return Ic(n,"x")},y:(e,t)=>{let{transform:n}=t;return Ic(n,"y")}};Vc.translateX=Vc.x,Vc.translateY=Vc.y;const Uc=e=>e,Hc={},Wc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],Yc={value:null,addProjectionMetrics:null};function Xc(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,a=Wc.reduce((e,n)=>(e[n]=function(e,t){let n=new Set,r=new Set,i=!1,o=!1;const a=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1},l=0;function c(t){a.has(t)&&(u.schedule(t),e()),l++,t(s)}const u={schedule:function(e){const t=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i?n:r;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&a.add(e),t.add(e),e},cancel:e=>{r.delete(e),a.delete(e)},process:e=>{if(s=e,i)return void(o=!0);i=!0;const a=n;n=r,r=a,n.forEach(c),t&&Yc.value&&Yc.value.frameloop[t].push(l),l=0,n.clear(),i=!1,o&&(o=!1,u.process(e))}};return u}(o,t?n:void 0),e),{}),{setup:s,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:p,render:h,postRender:f}=a,m=()=>{const o=Hc.useManualTiming,a=o?i.timestamp:performance.now();n=!1,o||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,40),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),l.process(i),c.process(i),u.process(i),d.process(i),p.process(i),h.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(m))},g=Wc.reduce((t,o)=>{const s=a[o];return t[o]=function(t){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(m)),s.schedule(t,o,a)},t},{});return{schedule:g,cancel:e=>{for(let t=0;t<Wc.length;t++)a[Wc[t]].cancel(e)},state:i,steps:a}}const{schedule:Kc,cancel:Gc,state:Qc,steps:qc}=Xc("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:Uc,!0),Jc=new Set;let Zc=!1,eu=!1,tu=!1;function nu(){if(eu){const e=Array.from(Jc).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{const t=function(e){const t=[];return Fc.forEach(n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();const t=n.get(e);t&&t.forEach(t=>{let[n,r]=t;e.getValue(n)?.set(r)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)})}eu=!1,Zc=!1,Jc.forEach(e=>e.complete(tu)),Jc.clear()}function ru(){Jc.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(eu=!0)})}class iu{constructor(e,t,n,r,i){let o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Jc.add(this),Zc||(Zc=!0,Kc.read(ru),Kc.resolveKeyframes(nu))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(null===e[0]){const i=r?.get(),o=e[e.length-1];if(void 0!==i)e[0]=i;else if(n&&t){const r=n.readValue(t,o);void 0!==r&&null!==r&&(e[0]=r)}void 0===e[0]&&(e[0]=o),r&&void 0===i&&r.set(e[0])}!function(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Jc.delete(this)}cancel(){"scheduled"===this.state&&(Jc.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}const ou=e=>/^0[^.\s]+$/u.test(e);function au(e){return"number"===typeof e?0===e:null===e||("none"===e||"0"===e||ou(e))}const su=new Set([lc,cc]);function lu(e,t){let n=hc(e);return su.has(n)||(n=ic),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const cu=new Set(["auto","none","0"]);class uu extends iu{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let s=0;s<e.length;s++){let n=e[s];if("string"===typeof n&&(n=n.trim(),Cc(n))){const r=Pc(n,t.current);void 0!==r&&(e[s]=r),s===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!gc.has(n)||2!==e.length)return;const[r,i]=e,o=xc(r),a=xc(i);if(jc(r)!==jc(i)&&Vc[n])this.needsMeasurement=!0;else if(o!==a)if(_c(o)&&_c(a))for(let s=0;s<e.length;s++){const t=e[s];"string"===typeof t&&(e[s]=parseFloat(t))}else Vc[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let r=0;r<e.length;r++)(null===e[r]||au(e[r]))&&n.push(r);n.length&&function(e,t,n){let r,i=0;for(;i<e.length&&!r;){const t=e[i];"string"===typeof t&&!cu.has(t)&&tc(t).values.length&&(r=e[i]),i++}if(r&&n)for(const o of t)e[o]=lu(n,r)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Vc[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];void 0!==r&&e.getValue(n,r).jump(r,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);const i=n.length-1,o=n[i];n[i]=Vc[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==o&&void 0===this.finalKeyframe&&(this.finalKeyframe=o),this.removedTransforms?.length&&this.removedTransforms.forEach(t=>{let[n,r]=t;e.getValue(n).set(r)}),this.resolveNoneKeyframes()}}const du=e=>1e3*e,pu=e=>e/1e3;function hu(e,t){-1===e.indexOf(t)&&e.push(t)}function fu(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class mu{constructor(){this.subscriptions=[]}add(e){return hu(this.subscriptions,e),()=>fu(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function gu(e,t,n){(e=>e.startsWith("--"))(t)?e.style.setProperty(t,n):e.style[t]=n}function vu(e){let t;return()=>(void 0===t&&(t=e()),t)}const yu={};function xu(e,t){const n=vu(e);return()=>yu[t]??n()}const bu=xu(()=>void 0!==window.ScrollTimeline,"scrollTimeline"),wu=e=>null!==e;function Su(e,t,n){let{repeat:r,repeatType:i="loop"}=t,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;const a=e.filter(wu),s=o<0||r&&"loop"!==i&&r%2===1?0:a.length-1;return s&&void 0!==n?n:a[s]}class ku{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const Cu={layout:0,mainThread:0,waapi:0},Eu=e=>Array.isArray(e)&&"number"===typeof e[0],ju=xu(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(by){return!1}return!0},"linearEasing"),Tu=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=Math.round(1e4*e(o/(i-1)))/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Pu=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},$u={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Pu([0,.65,.55,1]),circOut:Pu([.55,0,1,.45]),backIn:Pu([.31,.01,.66,-.59]),backOut:Pu([.33,1.53,.69,.99])};function Mu(e,t){return e?"function"===typeof e?ju()?Tu(e,t):"ease-out":Eu(e)?Pu(e):Array.isArray(e)?e.map(e=>Mu(e,t)||$u.easeOut):$u[e]:void 0}function zu(e,t,n){let{delay:r=0,duration:i=300,repeat:o=0,repeatType:a="loop",ease:s="easeOut",times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;const u={[t]:n};l&&(u.offset=l);const d=Mu(s,i);Array.isArray(d)&&(u.easing=d),Yc.value&&Cu.waapi++;const p={delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:"reverse"===a?"alternate":"normal"};c&&(p.pseudoElement=c);const h=e.animate(u,p);return Yc.value&&h.finished.finally(()=>{Cu.waapi--}),h}function Nu(e){return"function"===typeof e&&"applyToOptions"in e}class Ru extends ku{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:o=!1,finalKeyframe:a,onComplete:s}=e;this.isPseudoElement=Boolean(i),this.allowFlatten=o,this.options=e,e.type;const l=function(e){let{type:t,...n}=e;return Nu(t)&&ju()?t.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}(e);this.animation=zu(t,n,r,l,i),!1===l.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){const e=Su(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(e),gu(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch(by){}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;"idle"!==e&&"finished"!==e&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return pu(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+pu(e)}get time(){return pu(Number(this.animation.currentTime)||0)}set time(e){const t=null!==this.finishedTime;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=du(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline(e){let{timeline:t,rangeStart:n,rangeEnd:r,observe:i}=e;return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&bu()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),Uc):i(this)}}const Du=new Set(["opacity","clipPath","filter","transform"]),{schedule:Lu,cancel:Au}=Xc(queueMicrotask,!1);let Iu;function Ou(){Iu=void 0}const _u={now:()=>(void 0===Iu&&_u.set(Qc.isProcessing||Hc.useManualTiming?Qc.timestamp:performance.now()),Iu),set:e=>{Iu=e,queueMicrotask(Ou)}};function Bu(e,t){return t?e*(1e3/t):0}const Fu={current:void 0};class Vu{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{const t=_u.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const n of this.dependents)n.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){var t;this.current=e,this.updatedAt=_u.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new mu);const n=this.events[e].add(t);return"change"===e?()=>{n(),Kc.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Fu.current&&Fu.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=_u.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return Bu(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Uu(e,t){return new Vu(e,t)}const Hu=[...yc,Ql,ic],Wu=new WeakMap;function Yu(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}function Xu(e){return"string"===typeof e||Array.isArray(e)}const Ku=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Gu=["initial",...Ku];function Qu(e){return Yu(e.animate)||Gu.some(t=>Xu(e[t]))}function qu(e){return Boolean(Qu(e)||e.variants)}const Ju={current:null},Zu={current:!1},ed="undefined"!==typeof window;function td(e){const t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function nd(e,t,n,r){if("function"===typeof t){const[i,o]=td(r);t=t(void 0!==n?n:e.custom,i,o)}if("string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t){const[i,o]=td(r);t=t(void 0!==n?n:e.custom,i,o)}return t}const rd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let id={};function od(e){id=e}class ad{scrapeMotionValuesFromProps(e,t,n){return{}}constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,skipAnimations:o,blockInitialAnimation:a,visualState:s}=e,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=iu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=_u.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,Kc.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=s;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=o,this.options=l,this.blockInitialAnimation=Boolean(a),this.isControllingVariants=Qu(n),this.isVariantNode=qu(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in p){const e=p[h];void 0!==c[h]&&mc(e)&&e.set(c[h])}}mount(e){if(this.hasBeenMounted)for(const t in this.initialValues)this.values.get(t)?.jump(this.initialValues[t]),this.latestValues[t]=this.initialValues[t];this.current=e,Wu.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),"never"===this.reducedMotionConfig?this.shouldReduceMotion=!1:"always"===this.reducedMotionConfig?this.shouldReduceMotion=!0:(Zu.current||function(){if(Zu.current=!0,ed)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Ju.current=e.matches;e.addEventListener("change",t),t()}else Ju.current=!1}(),this.shouldReduceMotion=Ju.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Gc(this.notifyUpdate),Gc(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Du.has(e)&&this.current instanceof HTMLElement){const{factory:n,keyframes:r,times:i,ease:o,duration:a}=t.accelerate,s=new Ru({element:this.current,name:e,keyframes:r,times:i,ease:o,duration:du(a)}),l=n(s);return void this.valueSubscriptions.set(e,()=>{l(),s.cancel()})}const n=$l.has(e);n&&this.onBindTransform&&this.onBindTransform();const r=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&Kc.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let i;"undefined"!==typeof window&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in id){const t=id[e];if(!t)continue;const{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<rd.length;n++){const t=rd[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){for(const r in t){const i=t[r],o=n[r];if(mc(i))e.addValue(r,i);else if(mc(o))e.addValue(r,Uu(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const t=e.getValue(r);!0===t.liveStyle?t.jump(i):t.hasAnimated||t.set(i)}else{const t=e.getStaticValue(r);e.addValue(r,Uu(void 0!==t?t:i,{owner:e}))}}for(const r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=Uu(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return void 0!==n&&null!==n&&("string"===typeof n&&(bc(n)||ou(n))?n=parseFloat(n):!(e=>Hu.find(vc(e)))(n)&&ic.test(t)&&(n=lu(e,t)),this.setBaseTarget(e,mc(n)?n.get():n)),mc(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let n;if("string"===typeof t||"object"===typeof t){const r=nd(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&void 0!==n)return n;const r=this.getBaseTargetFromProps(this.props,e);return void 0===r||mc(r)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:r}on(e,t){return this.events[e]||(this.events[e]=new mu),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}scheduleRenderMicrotask(){Lu.render(this.render)}}class sd extends ad{constructor(){super(...arguments),this.KeyframeResolver=uu}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){const n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;mc(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}function ld(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const cd=(e,t)=>t&&"number"===typeof e?t.transform(e):e,ud={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},dd=Pl.length;function pd(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let a=!1,s=!1;for(const l in t){const e=t[l];if($l.has(l))a=!0;else if(Sc(l))i[l]=e;else{const t=cd(e,dc[l]);l.startsWith("origin")?(s=!0,o[l]=t):r[l]=t}}if(t.transform||(a||n?r.transform=function(e,t,n){let r="",i=!0;for(let o=0;o<dd;o++){const a=Pl[o],s=e[a];if(void 0===s)continue;let l=!0;if("number"===typeof s)l=s===(a.startsWith("scale")?1:0);else{const e=parseFloat(s);l=a.startsWith("scale")?1===e:0===e}if(!l||n){const e=cd(s,dc[a]);l||(i=!1,r+=`${ud[a]||a}(${e}) `),n&&(t[a]=e)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:e="50%",originY:t="50%",originZ:n=0}=o;r.transformOrigin=`${e} ${t} ${n}`}}const hd={offset:"stroke-dashoffset",array:"stroke-dasharray"},fd={offset:"strokeDashoffset",array:"strokeDasharray"};const md=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function gd(e,t,n,r,i){let{attrX:o,attrY:a,attrScale:s,pathLength:l,pathSpacing:c=1,pathOffset:u=0,...d}=t;if(pd(e,d,r),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:p,style:h}=e;p.transform&&(h.transform=p.transform,delete p.transform),(h.transform||p.transformOrigin)&&(h.transformOrigin=p.transformOrigin??"50% 50%",delete p.transformOrigin),h.transform&&(h.transformBox=i?.transformBox??"fill-box",delete p.transformBox);for(const f of md)void 0!==p[f]&&(h[f]=p[f],delete p[f]);void 0!==o&&(p.x=o),void 0!==a&&(p.y=a),void 0!==s&&(p.scale=s),void 0!==l&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const o=i?hd:fd;e[o.offset]=""+-r,e[o.array]=`${t} ${n}`}(p,l,c,u,!1)}const vd=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),yd=e=>"string"===typeof e&&"svg"===e.toLowerCase();function xd(e,t,n,r){let{style:i,vars:o}=t;const a=e.style;let s;for(s in i)a[s]=i[s];for(s in r?.applyProjectionStyles(a,n),o)a.setProperty(s,o[s])}function bd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const wd={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!Wl.test(e))return e;e=parseFloat(e)}return`${bd(e,t.target.x)}% ${bd(e,t.target.y)}%`}},Sd=(e,t,n)=>e+(t-e)*n,kd={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,o=ic.parse(e);if(o.length>5)return i;const a=ic.createTransformer(e),s="number"!==typeof o[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;o[0+s]/=l,o[1+s]/=c;const u=Sd(l,c,.5);return"number"===typeof o[2+s]&&(o[2+s]/=u),"number"===typeof o[3+s]&&(o[3+s]/=u),a(o)}};const Cd={borderRadius:{...wd,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:wd,borderTopRightRadius:wd,borderBottomLeftRadius:wd,borderBottomRightRadius:wd,boxShadow:kd};function Ed(e,t){let{layout:n,layoutId:r}=t;return $l.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!Cd[e]||"opacity"===e)}function jd(e,t,n){const r=e.style,i=t?.style,o={};if(!r)return o;for(const a in r)(mc(r[a])||i&&mc(i[a])||Ed(a,e)||void 0!==n?.getValue(a)?.liveStyle)&&(o[a]=r[a]);return o}function Td(e,t,n){const r=jd(e,t,n);for(const i in e)if(mc(e[i])||mc(t[i])){r[-1!==Pl.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]}return r}class Pd extends sd{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=fc}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if($l.has(t)){const e=hc(t);return e&&e.default||0}return t=vd.has(t)?t:ld(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Td(e,t,n)}build(e,t,n){gd(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){!function(e,t,n,r){xd(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(vd.has(i)?i:ld(i),t.attrs[i])}(e,t,0,r)}mount(e){this.isSVGTag=yd(e.tagName),super.mount(e)}}function $d(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}function Md(e){return void 0===e||1===e}function zd(e){let{scale:t,scaleX:n,scaleY:r}=e;return!Md(t)||!Md(n)||!Md(r)}function Nd(e){return zd(e)||Rd(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Rd(e){return Dd(e.x)||Dd(e.y)}function Dd(e){return e&&"0%"!==e}function Ld(e,t,n){return n+t*(e-n)}function Ad(e,t,n,r,i){return void 0!==i&&(e=Ld(e,i,r)),Ld(e,n,r)+t}function Id(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=Ad(e.min,t,n,r,i),e.max=Ad(e.max,t,n,r,i)}function Od(e,t){let{x:n,y:r}=t;Id(e.x,n.translate,n.scale,n.originPoint),Id(e.y,r.translate,r.scale,r.originPoint)}const _d=.999999999999,Bd=1.0000000000001;function Fd(e,t){e.min+=t,e.max+=t}function Vd(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;Id(e,t,n,Sd(e.min,e.max,i),r)}function Ud(e,t){return"string"===typeof e?parseFloat(e)/100*(t.max-t.min):e}function Hd(e,t,n){const r=n??e;Vd(e.x,Ud(t.x,r.x),t.scaleX,t.scale,t.originX),Vd(e.y,Ud(t.y,r.y),t.scaleY,t.scale,t.originY)}function Wd(e,t){return $d(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}class Yd extends sd{constructor(){super(...arguments),this.type="html",this.renderInstance=xd}readValueFromInstance(e,t){if($l.has(t))return this.projection?.isProjecting?Ac(t):((e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Ic(n,t)})(e,t);{const r=(n=e,window.getComputedStyle(n)),i=(Sc(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return Wd(e,n)}build(e,t,n){pd(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return jd(e,t,n)}}const Xd=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Kd(e){return"string"===typeof e&&!e.includes("-")&&!!(Xd.indexOf(e)>-1||/[A-Z]/u.test(e))}const Gd=(e,t)=>t.isSVG??Kd(e)?new Pd(t):new Yd(t,{allowProjection:e!==i.Fragment}),Qd=(0,i.createContext)({}),qd=(0,i.createContext)({strict:!1}),Jd=(0,i.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Zd=(0,i.createContext)({});function ep(e){const{initial:t,animate:n}=function(e,t){if(Qu(e)){const{initial:t,animate:n}=e;return{initial:!1===t||Xu(t)?t:void 0,animate:Xu(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,i.useContext)(Zd));return(0,i.useMemo)(()=>({initial:t,animate:n}),[tp(t),tp(n)])}function tp(e){return Array.isArray(e)?e.join(" "):e}const np=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function rp(e,t,n){for(const r in t)mc(t[r])||Ed(r,n)||(e[r]=t[r])}function ip(e,t){const n={};return rp(n,e.style||{},e),Object.assign(n,function(e,t){let{transformTemplate:n}=e;return(0,i.useMemo)(()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return pd(e,t,n),Object.assign({},e.vars,e.style)},[t])}(e,t)),n}function op(e,t){const n={},r=ip(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const ap=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}});function sp(e,t,n,r){const o=(0,i.useMemo)(()=>{const n={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return gd(n,t,yd(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){const t={};rp(t,e.style,e),o.style={...t,...o.style}}return o}const lp=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function cp(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||lp.has(e)}let up=e=>!cp(e);try{"function"===typeof(dp=require("@emotion/is-prop-valid").default)&&(up=e=>e.startsWith("on")?!cp(e):dp(e))}catch{}var dp;function pp(e,t,n,r,o){let{latestValues:a}=r,s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const l=((arguments.length>6?arguments[6]:void 0)??Kd(e)?sp:op)(t,a,o,e),c=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||mc(e[i])||(up(i)||!0===n&&cp(i)||!t&&!cp(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(t,"string"===typeof e,s),u=e!==i.Fragment?{...c,...l,ref:n}:{},{children:d}=t,p=(0,i.useMemo)(()=>mc(d)?d.get():d,[d]);return(0,i.createElement)(e,{...u,children:p})}function hp(e){return mc(e)?e.get():e}const fp=(0,i.createContext)(null);function mp(e){const t=(0,i.useRef)(null);return null===t.current&&(t.current=e()),t.current}function gp(e,t,n,r){const i={},o=r(e,{});for(const p in o)i[p]=hp(o[p]);let{initial:a,animate:s}=e;const l=Qu(e),c=qu(e);t&&c&&!l&&!1!==e.inherit&&(void 0===a&&(a=t.initial),void 0===s&&(s=t.animate));let u=!!n&&!1===n.initial;u=u||!1===a;const d=u?s:a;if(d&&"boolean"!==typeof d&&!Yu(d)){const t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){const r=nd(e,t[n]);if(r){const{transitionEnd:e,transition:t,...n}=r;for(const r in n){let e=n[r];if(Array.isArray(e)){e=e[u?e.length-1:0]}null!==e&&(i[r]=e)}for(const r in e)i[r]=e[r]}}}return i}const vp=e=>(t,n)=>{const r=(0,i.useContext)(Zd),o=(0,i.useContext)(fp),a=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:i,createRenderState:o}=e;return{latestValues:gp(t,n,r,i),renderState:o()}}(e,t,r,o);return n?a():mp(a)},yp=vp({scrapeMotionValuesFromProps:jd,createRenderState:np}),xp=vp({scrapeMotionValuesFromProps:Td,createRenderState:ap}),bp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let wp=!1;function Sp(){return function(){if(wp)return;const e={};for(const t in bp)e[t]={isEnabled:e=>bp[t].some(t=>!!e[t])};od(e),wp=!0}(),id}const kp=Symbol.for("motionComponentSymbol");function Cp(e,t,n){const r=(0,i.useRef)(n);(0,i.useInsertionEffect)(()=>{r.current=n});const o=(0,i.useRef)(null);return(0,i.useCallback)(n=>{n&&e.onMount?.(n);const i=r.current;if("function"===typeof i)if(n){const e=i(n);"function"===typeof e&&(o.current=e)}else o.current?(o.current(),o.current=null):i(n);else i&&(i.current=n);t&&(n?t.mount(n):t.unmount())},[t])}const Ep="data-"+ld("framerAppearId"),jp=(0,i.createContext)({});function Tp(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}const Pp="undefined"!==typeof window?i.useLayoutEffect:i.useEffect;function $p(e,t,n,r,o,a){const{visualElement:s}=(0,i.useContext)(Zd),l=(0,i.useContext)(qd),c=(0,i.useContext)(fp),u=(0,i.useContext)(Jd),d=u.reducedMotion,p=u.skipAnimations,h=(0,i.useRef)(null),f=(0,i.useRef)(!1);r=r||l.renderer,!h.current&&r&&(h.current=r(e,{visualState:t,parent:s,props:n,presenceContext:c,blockInitialAnimation:!!c&&!1===c.initial,reducedMotionConfig:d,skipAnimations:p,isSVG:a}),f.current&&h.current&&(h.current.manuallyAnimateOnMount=!0));const m=h.current,g=(0,i.useContext)(jp);!m||m.projection||!o||"html"!==m.type&&"svg"!==m.type||function(e,t,n,r){const{layoutId:i,layout:o,drag:a,dragConstraints:s,layoutScroll:l,layoutRoot:c,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Mp(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:Boolean(a)||s&&Tp(s),visualElement:e,animationType:"string"===typeof o?o:"both",initialPromotionConfig:r,crossfade:d,layoutScroll:l,layoutRoot:c,layoutAnchor:u})}(h.current,n,o,g);const v=(0,i.useRef)(!1);(0,i.useInsertionEffect)(()=>{m&&v.current&&m.update(n,c)});const y=n[Ep],x=(0,i.useRef)(Boolean(y)&&"undefined"!==typeof window&&!window.MotionHandoffIsComplete?.(y)&&window.MotionHasOptimisedAnimation?.(y));return Pp(()=>{f.current=!0,m&&(v.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),x.current&&m.animationState&&m.animationState.animateChanges())}),(0,i.useEffect)(()=>{m&&(!x.current&&m.animationState&&m.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(y)}),x.current=!1),m.enteringChildren=void 0)}),m}function Mp(e){if(e)return!1!==e.options.allowProjection?e.projection:Mp(e.parent)}function zp(e){let{forwardMotionProps:t=!1,type:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;r&&function(e){const t=Sp();for(const n in e)t[n]={...t[n],...e[n]};od(t)}(r);const a=n?"svg"===n:Kd(e),s=a?xp:yp;function l(n,r){let l;const c={...(0,i.useContext)(Jd),...n,layoutId:Np(n)},{isStatic:u}=c,d=ep(n),p=s(n,u);if(!u&&"undefined"!==typeof window){!function(){(0,i.useContext)(qd).strict;0}();const t=function(e){const t=Sp(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n?.isEnabled(e)||r?.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}(c);l=t.MeasureLayout,d.visualElement=$p(e,p,c,o,t.ProjectionNode,a)}return(0,Er.jsxs)(Zd.Provider,{value:d,children:[l&&d.visualElement?(0,Er.jsx)(l,{visualElement:d.visualElement,...c}):null,pp(e,n,Cp(p,d.visualElement,r),p,u,t,a)]})}l.displayName=`motion.${"string"===typeof e?e:`create(${e.displayName??e.name??""})`}`;const c=(0,i.forwardRef)(l);return c[kp]=e,c}function Np(e){let{layoutId:t}=e;const n=(0,i.useContext)(Qd).id;return n&&void 0!==t?n+"-"+t:t}function Rp(e,t){if("undefined"===typeof Proxy)return zp;const n=new Map,r=(n,r)=>zp(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,o)=>"create"===o?r:(n.has(o)||n.set(o,zp(o,void 0,e,t)),n.get(o))})}class Dp{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Lp(e,t,n){const r=e.getProps();return nd(r,t,void 0!==n?n:r.custom,e)}function Ap(e,t){if(e?.inherit&&t){const{inherit:n,...r}=e;return{...t,...r}}return e}function Ip(e,t){const n=e?.[t]??e?.default??e;return n!==e?Ap(n,e):n}const Op=e=>Array.isArray(e);function _p(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Uu(n))}function Bp(e){return Op(e)?e[e.length-1]||0:e}function Fp(e,t){const n=e.getValue("willChange");if(r=n,Boolean(mc(r)&&r.add))return n.add(t);if(!n&&Hc.WillChange){const n=new Hc.WillChange("auto");e.addValue("willChange",n),n.add(t)}var r}function Vp(e){return e.props[Ep]}const Up=(e,t)=>n=>t(e(n)),Hp=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(Up)};function Wp(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Yp(e,t){return n=>n>0?t:e}const Xp=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Kp=[Fl,Bl,Gl];function Gp(e){const t=(e=>Kp.find(t=>t.test(e)))(e);if(Boolean(t),!Boolean(t))return!1;let n=t.parse(e);return t===Gl&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let o=0,a=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;o=Wp(i,e,t+1/3),a=Wp(i,e,t),s=Wp(i,e,t-1/3)}else o=a=s=r;return{red:Math.round(255*o),green:Math.round(255*a),blue:Math.round(255*s),alpha:i}}(n)),n}const Qp=(e,t)=>{const n=Gp(e),r=Gp(t);if(!n||!r)return Yp(e,t);const i={...n};return e=>(i.red=Xp(n.red,r.red,e),i.green=Xp(n.green,r.green,e),i.blue=Xp(n.blue,r.blue,e),i.alpha=Sd(n.alpha,r.alpha,e),Bl.transform(i))},qp=new Set(["none","hidden"]);function Jp(e,t){return n=>Sd(e,t,n)}function Zp(e){return"number"===typeof e?Jp:"string"===typeof e?Cc(e)?Yp:Ql.test(e)?Qp:nh:Array.isArray(e)?eh:"object"===typeof e?Ql.test(e)?Qp:th:Yp}function eh(e,t){const n=[...e],r=n.length,i=e.map((e,n)=>Zp(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function th(e,t){const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=Zp(e[i])(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}}const nh=(e,t)=>{const n=ic.createTransformer(t),r=tc(e),i=tc(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?qp.has(e)&&!i.values.length||qp.has(t)&&!r.values.length?function(e,t){return qp.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):Hp(eh(function(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],a=e.indexes[o][r[o]],s=e.values[a]??0;n[i]=s,r[o]++}return n}(r,i),i.values),n):Yp(e,t)};function rh(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return Sd(e,t,n);return Zp(e)(e,t)}const ih=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return Kc.update(t,e)},stop:()=>Gc(t),now:()=>Qc.isProcessing?Qc.timestamp:_u.now()}},oh=2e4;function ah(e){let t=0;let n=e.next(t);for(;!n.done&&t<oh;)t+=50,n=e.next(t);return t>=oh?1/0:t}const sh={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function lh(e,t){return e*Math.sqrt(1-t*t)}const ch=.001;const uh=["duration","bounce"],dh=["stiffness","damping","mass"];function ph(e,t){return t.some(t=>void 0!==e[t])}function hh(e){let t={velocity:sh.velocity,stiffness:sh.stiffness,damping:sh.damping,mass:sh.mass,isResolvedFromDuration:!1,...e};if(!ph(e,dh)&&ph(e,uh))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(1.2*n),i=r*r,o=2*Ml(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:sh.mass,stiffness:i,damping:o}}else{const n=function(e){let t,n,{duration:r=sh.duration,bounce:i=sh.bounce,velocity:o=sh.velocity,mass:a=sh.mass}=e;du(sh.maxDuration);let s=1-i;s=Ml(sh.minDamping,sh.maxDamping,s),r=Ml(sh.minDuration,sh.maxDuration,pu(r)),s<1?(t=e=>{const t=e*s,n=t*r,i=t-o,a=lh(e,s),l=Math.exp(-n);return ch-i/a*l},n=e=>{const n=e*s*r,i=n*o+o,a=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=lh(Math.pow(e,2),s);return(-t(e)+ch>0?-1:1)*((i-a)*l)/c}):(t=e=>Math.exp(-e*r)*((e-o)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(o-e)));const l=function(e,t,n){let r=n;for(let i=1;i<12;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=du(r),isNaN(l))return{stiffness:sh.stiffness,damping:sh.damping,duration:r};{const e=Math.pow(l,2)*a;return{stiffness:e,damping:2*s*Math.sqrt(a*e),duration:r}}}({...e,velocity:0});t={...t,...n,mass:sh.mass},t.isResolvedFromDuration=!0}return t}function fh(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sh.visualDuration,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:sh.bounce;const n="object"!==typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],s={done:!1,value:o},{stiffness:l,damping:c,mass:u,duration:d,velocity:p,isResolvedFromDuration:h}=hh({...n,velocity:-pu(n.velocity||0)}),f=p||0,m=c/(2*Math.sqrt(l*u)),g=a-o,v=pu(Math.sqrt(l/u)),y=Math.abs(g)<5;let x,b,w,S,k,C;if(r||(r=y?sh.restSpeed.granular:sh.restSpeed.default),i||(i=y?sh.restDelta.granular:sh.restDelta.default),m<1)w=lh(v,m),S=(f+m*v*g)/w,x=e=>{const t=Math.exp(-m*v*e);return a-t*(S*Math.sin(w*e)+g*Math.cos(w*e))},k=m*v*S+g*w,C=m*v*g-S*w,b=e=>Math.exp(-m*v*e)*(k*Math.sin(w*e)+C*Math.cos(w*e));else if(1===m){x=e=>a-Math.exp(-v*e)*(g+(f+v*g)*e);const e=f+v*g;b=t=>Math.exp(-v*t)*(v*e*t-f)}else{const e=v*Math.sqrt(m*m-1);x=t=>{const n=Math.exp(-m*v*t),r=Math.min(e*t,300);return a-n*((f+m*v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};const t=(f+m*v*g)/e,n=m*v*t-g*e,r=m*v*g-t*e;b=t=>{const i=Math.exp(-m*v*t),o=Math.min(e*t,300);return i*(n*Math.sinh(o)+r*Math.cosh(o))}}const E={calculatedDuration:h&&d||null,velocity:e=>du(b(e)),next:e=>{if(!h&&m<1){const t=Math.exp(-m*v*e),n=Math.sin(w*e),o=Math.cos(w*e),l=a-t*(S*n+g*o),c=du(t*(k*n+C*o));return s.done=Math.abs(c)<=r&&Math.abs(a-l)<=i,s.value=s.done?a:l,s}const t=x(e);if(h)s.done=e>=d;else{const n=du(b(e));s.done=Math.abs(n)<=r&&Math.abs(a-t)<=i}return s.value=s.done?a:t,s},toString:()=>{const e=Math.min(ah(E),oh),t=Tu(t=>E.next(e*t).value,e,30);return e+"ms "+t},toTransition:()=>{}};return E}fh.applyToOptions=e=>{const t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=(arguments.length>2?arguments[2]:void 0)({...e,keyframes:[0,t]}),r=Math.min(ah(n),oh);return{type:"keyframes",ease:e=>n.next(r*e).value/t,duration:pu(r)}}(e,100,fh);return e.ease=t.ease,e.duration=du(t.duration),e.type="keyframes",e};function mh(e,t,n){const r=Math.max(t-5,0);return Bu(n-e(r),t-r)}function gh(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const p=t[0],h={done:!1,value:p},f=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let m=r*n;const g=p+m,v=void 0===s?g:s(g);v!==g&&(m=v-p);const y=e=>-m*Math.exp(-e/i),x=e=>v+y(e),b=e=>{const t=y(e),n=x(e);h.done=Math.abs(t)<=u,h.value=h.done?v:n};let w,S;const k=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(h.value)&&(w=e,S=fh({keyframes:[h.value,f(h.value)],velocity:mh(x,e,h.value),damping:o,stiffness:a,restDelta:u,restSpeed:d}))};return k(0),{calculatedDuration:null,next:e=>{let t=!1;return S||void 0!==w||(t=!0,b(e),k(e)),void 0!==w&&e>=w?S.next(e-w):(!t&&b(e),h)}}}const vh=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function yh(e,t,n,r){if(e===t&&n===r)return Uc;const i=t=>function(e,t,n,r,i){let o,a,s=0;do{a=t+(n-t)/2,o=vh(a,r,i)-e,o>0?n=a:t=a}while(Math.abs(o)>1e-7&&++s<12);return a}(t,0,1,e,n);return e=>0===e||1===e?e:vh(i(e),t,r)}const xh=yh(.42,0,1,1),bh=yh(0,0,.58,1),wh=yh(.42,0,.58,1),Sh=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,kh=e=>t=>1-e(1-t),Ch=yh(.33,1.53,.69,.99),Eh=kh(Ch),jh=Sh(Eh),Th=e=>e>=1?1:(e*=2)<1?.5*Eh(e):.5*(2-Math.pow(2,-10*(e-1))),Ph=e=>1-Math.sin(Math.acos(e)),$h=kh(Ph),Mh=Sh(Ph),zh={linear:Uc,easeIn:xh,easeInOut:wh,easeOut:bh,circIn:Ph,circInOut:Mh,circOut:$h,backIn:Eh,backInOut:jh,backOut:Ch,anticipate:Th},Nh=e=>{if(Eu(e)){e.length;const[t,n,r,i]=e;return yh(t,n,r,i)}return(e=>"string"===typeof e)(e)?zh[e]:e},Rh=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r};function Dh(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=e.length;if(t.length,1===o)return()=>t[0];if(2===o&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,n){const r=[],i=n||Hc.mix||rh,o=e.length-1;for(let a=0;a<o;a++){let n=i(e[a],e[a+1]);if(t){const e=Array.isArray(t)?t[a]||Uc:t;n=Hp(e,n)}r.push(n)}return r}(t,r,i),l=s.length,c=n=>{if(a&&n<e[0])return t[0];let r=0;if(l>1)for(;r<e.length-2&&!(n<e[r+1]);r++);const i=Rh(e[r],e[r+1],n);return s[r](i)};return n?t=>c(Ml(e[0],e[o-1],t)):c}function Lh(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Rh(0,t,r);e.push(Sd(n,1,i))}}(t,e.length-1),t}function Ah(e,t){return e.map(()=>t||wh).splice(0,e.length-1)}function Ih(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const o=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(Nh):Nh(i),a={done:!1,value:n[0]},s=function(e,t){return e.map(e=>e*t)}(r&&r.length===n.length?r:Lh(n),t),l=Dh(s,n,{ease:Array.isArray(o)?o:Ah(n,o)});return{calculatedDuration:t,next:e=>(a.value=l(e),a.done=e>=t,a)}}const Oh={decay:gh,inertia:gh,tween:Ih,keyframes:Ih,spring:fh};function _h(e){"string"===typeof e.type&&(e.type=Oh[e.type])}const Bh=e=>e/100;class Fh extends ku{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:e}=this.options;e&&e.updatedAt!==_u.now()&&this.tick(_u.now()),this.isStopped=!0,"idle"!==this.state&&(this.teardown(),this.options.onStop?.())},Cu.mainThread++,this.options=e,this.initAnimation(),this.play(),!1===e.autoplay&&this.pause()}initAnimation(){const{options:e}=this;_h(e);const{type:t=Ih,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:o=0}=e;let{keyframes:a}=e;const s=t||Ih;s!==Ih&&"number"!==typeof a[0]&&(this.mixKeyframes=Hp(Bh,rh(a[0],a[1])),a=[0,100]);const l=s({...e,keyframes:a});"mirror"===i&&(this.mirroredGenerator=s({...e,keyframes:[...a].reverse(),velocity:-o})),null===l.calculatedDuration&&(l.calculatedDuration=ah(l));const{calculatedDuration:c}=l;this.calculatedDuration=c,this.resolvedDuration=c+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=l}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=t}tick(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:s}=this;if(null===this.startTime)return n.next(0);const{delay:l=0,keyframes:c,repeat:u,repeatType:d,repeatDelay:p,type:h,onUpdate:f,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const g=this.currentTime-l*(this.playbackSpeed>=0?1:-1),v=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=r);let y,x=this.currentTime,b=n;if(u){const e=Math.min(this.currentTime,r)/a;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,u+1);Boolean(t%2)&&("reverse"===d?(n=1-n,p&&(n-=p/a)):"mirror"===d&&(b=o)),x=Ml(0,1,n)*a}v?(this.delayState.value=c[0],y=this.delayState):y=b.next(x),i&&!v&&(y.value=i(y.value));let{done:w}=y;v||null===s||(w=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const S=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return S&&h!==gh&&(y.value=Su(c,this.options,m,this.speed)),f&&f(y.value),S&&this.finish(),y}then(e,t){return this.finished.then(e,t)}get duration(){return pu(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+pu(e)}get time(){return pu(this.currentTime)}set time(e){e=du(e),this.currentTime=e,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);return mh(e=>this.generator.next(e).value,e,this.generator.next(e).value)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(_u.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=pu(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=ih,startTime:t}=this.options;this.driver||(this.driver=e(e=>this.tick(e))),this.options.onPlay?.();const n=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=n):null!==this.holdTime?this.startTime=n-this.holdTime:this.startTime||(this.startTime=t??n),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(_u.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null,Cu.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}const Vh={anticipate:Th,backInOut:jh,circInOut:Mh};function Uh(e){"string"===typeof e.ease&&function(e){return e in Vh}(e.ease)&&(e.ease=Vh[e.ease])}class Hh extends Ru{constructor(e){Uh(e),_h(e),super(e),void 0!==e.startTime&&!1!==e.autoplay&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:n,onComplete:r,element:i,...o}=this.options;if(!t)return;if(void 0!==e)return void t.set(e);const a=new Fh({...o,autoplay:!1}),s=Math.max(10,_u.now()-this.startTime),l=Ml(0,10,s-10),c=a.sample(s).value,{name:u}=this.options;i&&u&&gu(i,u,c),t.setWithVelocity(a.sample(Math.max(0,s-l)).value,c,l),a.stop()}}const Wh=(e,t)=>"zIndex"!==t&&(!("number"!==typeof e&&!Array.isArray(e))||!("string"!==typeof e||!ic.test(e)&&"0"!==e||e.startsWith("url(")));function Yh(e){e.duration=0,e.type="keyframes"}const Xh=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;const Kh=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),Gh=vu(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Qh(e){const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:a,keyframes:s}=e,l=t?.owner?.current;if(!(l instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=t.owner.getProps();return Gh()&&n&&(Du.has(n)||Kh.has(n)&&function(e){for(let t=0;t<e.length;t++)if("string"===typeof e[t]&&Xh.test(e[t]))return!0;return!1}(s))&&("transform"!==n||!u)&&!c&&!r&&"mirror"!==i&&0!==o&&"inertia"!==a}class qh extends ku{constructor(e){let{autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a="loop",keyframes:s,name:l,motionValue:c,element:u,...d}=e;super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=_u.now();const p={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:a,name:l,motionValue:c,element:u,...d},h=u?.KeyframeResolver||iu;this.keyframeResolver=new h(s,(e,t,n)=>this.onKeyframesResolved(e,t,p,!n),l,c,u),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;const{name:i,type:o,velocity:a,delay:s,isHandoff:l,onUpdate:c}=n;this.resolvedAt=_u.now();let u=!0;(function(e,t,n,r){const i=e[0];if(null===i)return!1;if("display"===t||"visibility"===t)return!0;const o=e[e.length-1],a=Wh(i,t),s=Wh(o,t);return!(!a||!s)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||Nu(n))&&r)})(e,i,o,a)||(u=!1,!Hc.instantAnimations&&s||c?.(Su(e,n,t)),e[0]=e[e.length-1],Yh(n),n.repeat=0);const d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},p=u&&!l&&Qh(d),h=d.motionValue?.owner?.current;let f;if(p)try{f=new Hh({...d,element:h})}catch{f=new Fh(d)}else f=new Fh(d);f.finished.then(()=>{this.notifyFinished()}).catch(Uc),this.pendingTimeline&&(this.stopTimeline=f.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=f}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),tu=!0,ru(),nu(),tu=!1),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const Jh={type:"spring",stiffness:500,damping:25,restSpeed:10},Zh={type:"keyframes",duration:.8},ef={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},tf=(e,t)=>{let{keyframes:n}=t;return n.length>2?Zh:$l.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:Jh:ef},nf=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);const rf=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;return a=>{const s=Ip(r,e)||{},l=s.delay||r.delay||0;let{elapsed:c=0}=r;c-=du(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-c,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{a(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:o?void 0:i};(function(e){for(const t in e)if(!nf.has(t))return!0;return!1})(s)||Object.assign(u,tf(e,u)),u.duration&&(u.duration=du(u.duration)),u.repeatDelay&&(u.repeatDelay=du(u.repeatDelay)),void 0!==u.from&&(u.keyframes[0]=u.from);let d=!1;if((!1===u.type||0===u.duration&&!u.repeatDelay)&&(Yh(u),0===u.delay&&(d=!0)),(Hc.instantAnimations||Hc.skipAnimations||i?.shouldSkipAnimations)&&(d=!0,Yh(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!o&&void 0!==t.get()){const e=Su(u.keyframes,s);if(void 0!==e)return void Kc.update(()=>{u.onUpdate(e),u.onComplete()})}return s.isSync?new Fh(u):new qh(u)}};function of(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function af(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:o,transitionEnd:a,...s}=t;const l=e.getDefaultTransition();o=o?Ap(o,l):l;const c=o?.reduceMotion;r&&(o=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const p in s){const t=e.getValue(p,e.latestValues[p]??null),r=s[p];if(void 0===r||d&&of(d,p))continue;const i={delay:n,...Ip(o||{},p)},a=t.get();if(void 0!==a&&!t.isAnimating()&&!Array.isArray(r)&&r===a&&!i.velocity){Kc.update(()=>t.set(r));continue}let l=!1;if(window.MotionHandoffAnimation){const t=Vp(e);if(t){const e=window.MotionHandoffAnimation(t,p,Kc);null!==e&&(i.startTime=e,l=!0)}}Fp(e,p);const h=c??e.shouldReduceMotion;t.start(rf(p,t,r,h&&gc.has(p)?{type:!1}:i,e,l));const f=t.animation;f&&u.push(f)}if(a){const t=()=>Kc.update(()=>{a&&function(e,t){const n=Lp(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const a in o)_p(e,a,Bp(o[a]))}(e,a)});u.length?Promise.all(u).then(t):t()}return u}function sf(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;const o=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),a=e.size,s=(a-1)*r;return"function"===typeof n?n(o,a):1===i?o*r:s-o*r}function lf(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=Lp(e,t,"exit"===n.type?e.presenceContext?.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(af(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:o=0,staggerChildren:a,staggerDirection:s}=i;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,a=arguments.length>6?arguments[6]:void 0;const s=[];for(const l of e.variantChildren)l.notify("AnimationStart",t),s.push(lf(l,t,{...a,delay:n+("function"===typeof r?0:r)+sf(e.variantChildren,l,r,i,o)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(s)}(e,t,r,o,a,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[o,a]:[a,o];return e().then(()=>t())}return Promise.all([o(),a(n.delay)])}const cf=Gu.length;function uf(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&uf(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let n=0;n<cf;n++){const r=Gu[n],i=e.props[r];(Xu(i)||!1===i)&&(t[r]=i)}return t}function df(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const pf=[...Ku].reverse(),hf=Ku.length;function ff(e){return t=>Promise.all(t.map(t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map(t=>lf(e,t,r));n=Promise.all(i)}else if("string"===typeof t)n=lf(e,t,r);else{const i="function"===typeof t?Lp(e,t,r.custom):t;n=Promise.all(af(e,i,r))}return n.then(()=>{e.notify("AnimationComplete",t)})}(e,n,r)}))}function mf(e){let t=ff(e),n=yf(),r=!0,i=!1;const o=t=>(n,r)=>{const i=Lp(e,r,"exit"===t?e.presenceContext?.custom:void 0);if(i){const{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(a){const{props:s}=e,l=uf(e.parent)||{},c=[],u=new Set;let d={},p=1/0;for(let t=0;t<hf;t++){const h=pf[t],f=n[h],m=void 0!==s[h]?s[h]:l[h],g=Xu(m),v=h===a?f.isActive:null;!1===v&&(p=t);let y=m===l[h]&&m!==s[h]&&g;if(y&&(r||i)&&e.manuallyAnimateOnMount&&(y=!1),f.protectedKeys={...d},!f.isActive&&null===v||!m&&!f.prevProp||Yu(m)||"boolean"===typeof m)continue;if("exit"===h&&f.isActive&&!0!==v){f.prevResolvedValues&&(d={...d,...f.prevResolvedValues});continue}const x=gf(f.prevProp,m);let b=x||h===a&&f.isActive&&!y&&g||t>p&&g,w=!1;const S=Array.isArray(m)?m:[m];let k=S.reduce(o(h),{});!1===v&&(k={});const{prevResolvedValues:C={}}=f,E={...C,...k},j=t=>{b=!0,u.has(t)&&(w=!0,u.delete(t)),f.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in E){const t=k[e],n=C[e];if(d.hasOwnProperty(e))continue;let r=!1;r=Op(t)&&Op(n)?!df(t,n):t!==n,r?void 0!==t&&null!==t?j(e):u.add(e):void 0!==t&&u.has(e)?j(e):f.protectedKeys[e]=!0}f.prevProp=m,f.prevResolvedValues=k,f.isActive&&(d={...d,...k}),(r||i)&&e.blockInitialAnimation&&(b=!1);const T=y&&x;b&&(!T||w)&&c.push(...S.map(t=>{const n={type:h};if("string"===typeof t&&(r||i)&&!T&&e.manuallyAnimateOnMount&&e.parent){const{parent:r}=e,i=Lp(r,t);if(r.enteringChildren&&i){const{delayChildren:t}=i.transition||{};n.delay=sf(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){const t={};if("boolean"!==typeof s.initial){const n=Lp(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{const r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),c.push({animation:t})}let h=Boolean(c.length);return!r||!1!==s.initial&&s.initial!==s.animate||e.manuallyAnimateOnMount||(h=!1),r=!1,i=!1,h?t(c):Promise.resolve()}return{animateChanges:a,setActive:function(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;const i=a(t);for(const e in n)n[e].protectedKeys={};return i},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=yf(),i=!0}}}function gf(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!df(t,e)}function vf(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function yf(){return{animate:vf(!0),whileInView:vf(),whileHover:vf(),whileTap:vf(),whileDrag:vf(),whileFocus:vf(),exit:vf()}}let xf=0;const bf={animation:{Feature:class extends Dp{constructor(e){super(e),e.animationState||(e.animationState=mf(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Yu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends Dp{constructor(){super(...arguments),this.id=xf++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&!1===n){if(this.isExitComplete){const{initial:e,custom:t}=this.node.getProps();if("string"===typeof e){const n=Lp(this.node,e,t);if(n){const{transition:e,transitionEnd:t,...r}=n;for(const n in r)this.node.getValue(n)?.jump(r[n])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);return void(this.isExitComplete=!1)}const r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}},wf={x:!1,y:!1};function Sf(){return wf.x||wf.y}function kf(e){return[e("x"),e("y")]}function Cf(e){return e.max-e.min}function Ef(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=Sd(t.min,t.max,e.origin),e.scale=Cf(n)/Cf(t),e.translate=Sd(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function jf(e,t,n,r){Ef(e.x,t.x,n.x,r?r.originX:void 0),Ef(e.y,t.y,n.y,r?r.originY:void 0)}function Tf(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const i=r?Sd(n.min,n.max,r):n.min;e.min=i+t.min,e.max=e.min+Cf(t)}function Pf(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const i=r?Sd(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+Cf(t)}function $f(e,t,n,r){Pf(e.x,t.x,n.x,r?.x),Pf(e.y,t.y,n.y,r?.y)}const Mf=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const zf=new Set(["INPUT","SELECT","TEXTAREA"]);function Nf(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Rf(e){return"object"===typeof e&&null!==e}function Df(e){return Rf(e)&&"ownerSVGElement"in e}function Lf(e,t,n){if(null==e)return[];if(e instanceof EventTarget)return[e];if("string"===typeof e){let r=document;t&&(r=t.current);const i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>null!=e)}const Af=new WeakMap;let If;const Of=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+"Size"]:Df(r)&&"getBBox"in r?r.getBBox()[t]:r[n],_f=Of("inline","width","offsetWidth"),Bf=Of("block","height","offsetHeight");function Ff(e){let{target:t,borderBoxSize:n}=e;Af.get(t)?.forEach(e=>{e(t,{get width(){return _f(t,n)},get height(){return Bf(t,n)}})})}function Vf(e){e.forEach(Ff)}function Uf(e,t){If||"undefined"!==typeof ResizeObserver&&(If=new ResizeObserver(Vf));const n=Lf(e);return n.forEach(e=>{let n=Af.get(e);n||(n=new Set,Af.set(e,n)),n.add(t),If?.observe(e)}),()=>{n.forEach(e=>{const n=Af.get(e);n?.delete(t),n?.size||If?.unobserve(e)})}}const Hf=new Set;let Wf;function Yf(e){return Hf.add(e),Wf||(Wf=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Hf.forEach(t=>t(e))},window.addEventListener("resize",Wf)),()=>{Hf.delete(e),Hf.size||"function"!==typeof Wf||(window.removeEventListener("resize",Wf),Wf=void 0)}}function Xf(e,t){return"function"===typeof e?Yf(e):Uf(e,t)}const Kf=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function Gf(e){return{point:{x:e.pageX,y:e.pageY}}}function Qf(e,t,n,r){return Nf(e,t,(e=>t=>Kf(t)&&e(t,Gf(t)))(n),r)}const qf=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},Jf=(e,t)=>Math.abs(e-t);const Zf=new Set(["auto","scroll"]);class em{constructor(e,t){let{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:o=3,element:a}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=tm(this.lastRawMoveEventInfo,this.transformPagePoint));const e=rm(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Jf(e.x,t.x),r=Jf(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=Qc;this.history.push({...r,timestamp:i});const{onStart:o,onMove:a}=this.handlers;t||(o&&o(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=tm(t,this.transformPagePoint),Kc.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(!this.dragSnapToOrigin&&this.startEvent||i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const o=rm("pointercancel"===e.type?this.lastMoveEventInfo:tm(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,o),r&&r(e,o)},!Kf(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=o,this.contextWindow=r||window;const s=tm(Gf(e),this.transformPagePoint),{point:l}=s,{timestamp:c}=Qc;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=t;u&&u(e,rm(s,this.history)),this.removeListeners=Hp(Qf(this.contextWindow,"pointermove",this.handlePointerMove),Qf(this.contextWindow,"pointerup",this.handlePointerUp),Qf(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(e){let t=e.parentElement;for(;t;){const e=getComputedStyle(t);(Zf.has(e.overflowX)||Zf.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i=r.x-t.x,o=r.y-t.y;0===i&&0===o||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i,this.lastMoveEventInfo.point.y+=o):this.history.length>0&&(this.history[0].x-=i,this.history[0].y-=o),this.scrollPositions.set(e,r),Kc.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Gc(this.updatePoint)}}function tm(e,t){return t?{point:t(e.point)}:e}function nm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function rm(e,t){let{point:n}=e;return{point:n,delta:nm(n,om(t)),offset:nm(n,im(t)),velocity:am(t,.1)}}function im(e){return e[0]}function om(e){return e[e.length-1]}function am(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=om(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>du(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>2*du(t)&&(r=e[1]);const o=pu(i.timestamp-r.timestamp);if(0===o)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function sm(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function lm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const cm=.35;function um(e,t,n){return{min:dm(e,t),max:dm(e,n)}}function dm(e,t){return"number"===typeof e?e:e[t]||0}const pm=new WeakMap;class hm{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e){let{snapToCursor:t=!1,distanceThreshold:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:r}=this.visualElement;if(r&&!1===r.isPresent)return;const{dragSnapToOrigin:i}=this.getProps();this.panSession=new em(e,{onSessionStart:e=>{t&&this.snapToCursor(Gf(e).point),this.stopAnimation()},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(o=n)||"y"===o?wf[o]?null:(wf[o]=!0,()=>{wf[o]=!1}):wf.x||wf.y?null:(wf.x=wf.y=!0,()=>{wf.x=wf.y=!1}),!this.openDragLock))return;var o;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),kf(e=>{let t=this.getAxisMotionValue(e).get()||0;if(Hl.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=Cf(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t}),i&&Kc.update(()=>i(e,t),!1,!0),Fp(this.visualElement,"transform");const{animationState:a}=this.visualElement;a&&a.setActive("whileDrag",!0)},onMove:(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:o}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:a}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(a),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,a),this.updateAxis("y",t.point,a),this.visualElement.render(),o&&Kc.update(()=>o(e,t),!1,!0)},onSessionEnd:(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},resumeAnimation:()=>{const{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})}},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:i,distanceThreshold:n,contextWindow:qf(this.visualElement),element:this.visualElement.current})}stop(e,t){const n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&Kc.postRender(()=>a(n,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!mm(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let o=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(o=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?Sd(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?Sd(i,e,n.max):Math.min(e,i)),e}(o,this.constraints[e],this.elastic[e])),i.set(o)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Tp(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!e||!n)&&function(e,t){let{top:n,left:r,bottom:i,right:o}=t;return{x:sm(e.x,r,o),y:sm(e.y,n,i)}}(n.layoutBox,e),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:cm;return!1===e?e=0:!0===e&&(e=cm),{x:um(e,"left","right"),y:um(e,"top","bottom")}}(t),r!==this.constraints&&!Tp(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&kf(e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Tp(e))return!1;const n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=Wd(e,n),{scroll:i}=t;return i&&(Fd(r.x,i.offset.x),Fd(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let o=function(e,t){return{x:lm(e.x,t.x),y:lm(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(o));this.hasMutatedConstraints=!!e,e&&(o=$d(e))}return o}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),s=this.constraints||{},l=kf(a=>{if(!mm(a,t,this.currentDirection))return;let l=s&&s[a]||{};!0!==o&&o!==a||(l={min:0,max:0});const c=r?200:1e6,u=r?40:1e7,d={type:"inertia",velocity:n?e[a]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(a,d)});return Promise.all(l).then(a)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return Fp(this.visualElement,e),n.start(rf(e,n,0,t,this.visualElement,!1))}stopAnimation(){kf(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){kf(t=>{const{drag:n}=this.getProps();if(!mm(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:o}=r.layout.layoutBox[t],a=i.get()||0;i.set(e[t]-Sd(n,o,.5)+a)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Tp(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};kf(e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();r[e]=function(e,t){let n=.5;const r=Cf(e),i=Cf(t);return i>r?n=Rh(t.min,t.max-r,e.min):r>i&&(n=Rh(e.min,e.max-i,t.min)),Ml(0,1,n)}({min:n,max:n},this.constraints[e])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),kf(t=>{if(!mm(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:o}=this.constraints[t];n.set(Sd(i,o,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;pm.set(this.visualElement,this);const e=this.visualElement.current,t=Qf(e,"pointerdown",t=>{const{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,o=i!==e&&function(e){return zf.has(e.tagName)||!0===e.isContentEditable}(i);n&&r&&!o&&this.start(t)});let n;const r=()=>{const{dragConstraints:t}=this.getProps();Tp(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||(n=function(e,t,n){const r=Xf(e,fm(n)),i=Xf(t,fm(n));return()=>{r(),i()}}(e,t.current,()=>this.scalePositionWithinConstraints())))},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Kc.read(r);const a=Nf(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(kf(e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))}),this.visualElement.render())});return()=>{a(),t(),o(),s&&s(),n&&n()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:o=cm,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:o,dragMomentum:a}}}function fm(e){let t=!0;return()=>{t?t=!1:e()}}function mm(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const gm=e=>(t,n)=>{e&&Kc.update(()=>e(t,n),!1,!0)};const vm={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ym(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=(0,i.useContext)(fp);if(null===t)return[!0,null];const{isPresent:n,onExitComplete:r,register:o}=t,a=(0,i.useId)();(0,i.useEffect)(()=>{if(e)return o(a)},[e]);const s=(0,i.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,s]:[!0]}let xm=!1;class bm extends i.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),xm&&i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),vm.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:o}=n;return o?(o.isPresent=i,e.layoutDependency!==t&&o.setOptions({...o.options,layoutDependency:t}),xm=!0,r||e.layoutDependency!==t||void 0===t||e.isPresent!==i?o.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?o.promote():o.relegate()||Kc.postRender(()=>{const e=o.getStack();e&&e.members.length||this.safeToRemove()})),null):null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),Lu.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;xm=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function wm(e){const[t,n]=ym(),r=(0,i.useContext)(Qd);return(0,Er.jsx)(bm,{...e,layoutGroup:r,switchLayoutGroup:(0,i.useContext)(jp),isPresent:t,safeToRemove:n})}function Sm(e,t){const n=_u.now(),r=i=>{let{timestamp:o}=i;const a=o-n;a>=t&&(Gc(r),e(a-t))};return Kc.setup(r,!0),()=>Gc(r)}const km=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Cm=km.length,Em=e=>"string"===typeof e?parseFloat(e):e,jm=e=>"number"===typeof e||Wl.test(e);function Tm(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const Pm=Mm(0,.5,$h),$m=Mm(.5,.95,Uc);function Mm(e,t,n){return r=>r<e?0:r>t?1:n(Rh(e,t,r))}function zm(e,t){e.min=t.min,e.max=t.max}function Nm(e,t){zm(e.x,t.x),zm(e.y,t.y)}function Rm(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Dm(e,t,n,r,i){return e=Ld(e-=t,1/n,r),void 0!==i&&(e=Ld(e,1/i,r)),e}function Lm(e,t,n,r,i){let[o,a,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;Hl.test(t)&&(t=parseFloat(t),t=Sd(a.min,a.max,t/100)-a.min);if("number"!==typeof t)return;let s=Sd(o.min,o.max,r);e===o&&(s-=t),e.min=Dm(e.min,t,n,s,i),e.max=Dm(e.max,t,n,s,i)}(e,t[o],t[a],t[s],t.scale,r,i)}const Am=["x","scaleX","originX"],Im=["y","scaleY","originY"];function Om(e,t,n,r){Lm(e.x,t,Am,n?n.x:void 0,r?r.x:void 0),Lm(e.y,t,Im,n?n.y:void 0,r?r.y:void 0)}function _m(e){return 0===e.translate&&1===e.scale}function Bm(e){return _m(e.x)&&_m(e.y)}function Fm(e,t){return e.min===t.min&&e.max===t.max}function Vm(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Um(e,t){return Vm(e.x,t.x)&&Vm(e.y,t.y)}function Hm(e){return Cf(e.x)/Cf(e.y)}function Wm(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Ym{constructor(){this.members=[]}add(e){hu(this.members,e);for(let t=this.members.length-1;t>=0;t--){const n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;const r=n.instance;r&&!1!==r.isConnected||n.snapshot||(fu(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(fu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){const e=this.members[t];if(!1!==e.isPresent&&!1!==e.instance?.isConnected)return this.promote(e),!0}return!1}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();const{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;void 0!==r&&r===i||(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),!1===e.options.crossfade&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const Xm=(e,t)=>e.depth-t.depth;class Km{constructor(){this.children=[],this.isDirty=!1}add(e){hu(this.children,e),this.isDirty=!0}remove(e){fu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Xm),this.isDirty=!1,this.children.forEach(e)}}const Gm={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Qm=["","X","Y","Z"];let qm=0;function Jm(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Zm(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Vp(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Kc,!(t||r))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Zm(r)}function eg(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:o}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n?.();this.id=qm++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Yc.value&&(Gm.nodes=Gm.calculatedTargetDeltas=Gm.calculatedProjections=0),this.nodes.forEach(rg),this.nodes.forEach(pg),this.nodes.forEach(hg),this.nodes.forEach(ig),Yc.addProjectionMetrics&&Yc.addProjectionMetrics(Gm)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new Km)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new mu),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){if(this.instance)return;var n;this.isSVG=Df(e)&&!(Df(n=e)&&"svg"===n.tagName),this.instance=e;const{layoutId:r,layout:i,visualElement:o}=this.options;if(o&&!o.current&&o.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(i||r)&&(this.isLayoutDirty=!0),t){let n,r=0;const i=()=>this.root.updateBlockedByResize=!1;Kc.read(()=>{r=window.innerWidth}),t(e,()=>{const e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Sm(i,250),vm.hasAnimatedSinceResize&&(vm.hasAnimatedSinceResize=!1,this.nodes.forEach(dg)))})}r&&this.root.registerSharedNode(r,this),!1!==this.options.animate&&o&&(r||i)&&this.addEventListener("didUpdate",e=>{let{delta:t,hasLayoutChanged:n,hasRelativeLayoutChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const a=this.options.transition||o.getDefaultTransition()||xg,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=o.getProps(),c=!this.targetLayout||!Um(this.targetLayout,i),u=!n&&r;if(this.options.layoutRoot||this.resumeFrom||u||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const e={...Ip(a,"layout"),onPlay:s,onComplete:l};(o.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e),this.setAnimationOrigin(t,u)}else n||dg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Gc(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(fg),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Zm(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,"string"!==typeof e.latestValues.x&&"string"!==typeof e.latestValues.y||(e.isLayoutDirty=!0),e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked()){const e=this.updateBlockedByResize;return this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(sg),void this.nodes.forEach(ag)}if(this.animationId<=this.animationCommitId)return void this.nodes.forEach(lg);this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(cg),this.nodes.forEach(ug),this.nodes.forEach(tg),this.nodes.forEach(ng)):this.nodes.forEach(lg),this.clearAllSnapshots();const e=_u.now();Qc.delta=Ml(0,1e3/60,e-Qc.timestamp),Qc.timestamp=e,Qc.isProcessing=!0,qc.update.process(Qc),qc.preRender.process(Qc),qc.render.process(Qc),Qc.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Lu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(og),this.sharedNodes.forEach(mg)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Kc.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Kc.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||Cf(this.snapshot.measuredBox.x)||Cf(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}}),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){const t=i(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!o)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Bm(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Nd(this.latestValues)||i)&&(o(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),Sg((r=n).x),Sg(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Cg))){const{scroll:e}=this.root;e&&(Fd(t.x,e.offset.x),Fd(t.y,e.offset.y))}return t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};if(Nm(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:i,options:o}=r;r!==this.root&&i&&o.layoutScroll&&(i.wasRoot&&Nm(t,e),Fd(t.x,i.offset.x),Fd(t.y,i.offset.y))}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=(arguments.length>2?arguments[2]:void 0)||{x:{min:0,max:0},y:{min:0,max:0}};Nm(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&(Fd(n.x,-e.scroll.offset.x),Fd(n.y,-e.scroll.offset.y)),Nd(e.latestValues)&&Hd(n,e.latestValues,e.layout?.layoutBox)}return Nd(this.latestValues)&&Hd(n,this.latestValues,this.layout?.layoutBox),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Nm(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!Nd(e.latestValues))continue;let r;e.instance&&(zd(e.latestValues)&&e.updateSnapshot(),r=fc(),Nm(r,e.measurePageBox())),Om(t,e.latestValues,e.snapshot?.layoutBox,r)}return Nd(this.latestValues)&&Om(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Qc.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:r,layoutId:i}=this.options;if(!this.layout||!r&&!i)return;this.resolvedRelativeTargetAt=Qc.timestamp;const o=this.getClosestProjectingParent();var a,s,l,c;(o&&this.linkedParentVersion!==o.layoutVersion&&!o.options.layoutRoot&&this.removeRelativeTarget(),this.targetDelta||this.relativeTarget||(!1!==this.options.layoutAnchor&&o&&o.layout?this.createRelativeTarget(o,this.layout.layoutBox,o.layout.layoutBox):this.removeRelativeTarget()),this.relativeTarget||this.targetDelta)&&(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),a=this.target,s=this.relativeTarget,l=this.relativeParent.target,c=this.options.layoutAnchor||void 0,Tf(a.x,s.x,l.x,c?.x),Tf(a.y,s.y,l.y,c?.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.applyTransform(this.layout.layoutBox,!1,this.target):Nm(this.target,this.layout.layoutBox),Od(this.target,this.targetDelta)):Nm(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,!1!==this.options.layoutAnchor&&o&&Boolean(o.resumingFrom)===Boolean(this.resumingFrom)&&!o.options.layoutScroll&&o.target&&1!==this.animationProgress?this.createRelativeTarget(o,this.target,o.target):this.relativeParent=this.relativeTarget=void 0),Yc.value&&Gm.calculatedTargetDeltas++)}getClosestProjectingParent(){if(this.parent&&!zd(this.parent.latestValues)&&!Rd(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},$f(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),Nm(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const e=this.getLead(),t=Boolean(this.resumingFrom)||this!==e;let n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Qc.timestamp&&(n=!1),n)return;const{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!r&&!i)return;Nm(this.layoutCorrected,this.layout.layoutBox);const o=this.treeScale.x,a=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let o,a;t.x=t.y=1;for(let s=0;s<i;s++){o=n[s],a=o.projectionDelta;const{visualElement:i}=o.options;i&&i.props.style&&"contents"===i.props.style.display||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&(Fd(e.x,-o.scroll.offset.x),Fd(e.y,-o.scroll.offset.y)),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Od(e,a)),r&&Nd(o.latestValues)&&Hd(e,o.latestValues,o.layout?.layoutBox))}t.x<Bd&&t.x>_d&&(t.x=1),t.y<Bd&&t.y>_d&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,t),!e.layout||e.target||1===this.treeScale.x&&1===this.treeScale.y||(e.target=e.layout.layoutBox,e.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:s}=e;s?(this.projectionDelta&&this.prevProjectionDelta?(Rm(this.prevProjectionDelta.x,this.projectionDelta.x),Rm(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),jf(this.projectionDelta,this.layoutCorrected,s,this.latestValues),this.treeScale.x===o&&this.treeScale.y===a&&Wm(this.projectionDelta.x,this.prevProjectionDelta.x)&&Wm(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",s)),Yc.value&&Gm.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.visualElement?.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const a={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(yg));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;gg(o.x,e.x,n),gg(o.y,e.y,n),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&($f(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),function(e,t,n,r){vg(e.x,t.x,n.x,r),vg(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,a,n),d&&function(e,t){return Fm(e.x,t.x)&&Fm(e.y,t.y)}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),Nm(d,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,o){i?(e.opacity=Sd(0,n.opacity??1,Pm(r)),e.opacityExit=Sd(t.opacity??1,0,$m(r))):o&&(e.opacity=Sd(t.opacity??1,n.opacity??1,r));for(let a=0;a<Cm;a++){const i=km[a];let o=Tm(t,i),s=Tm(n,i);void 0===o&&void 0===s||(o||(o=0),s||(s=0),0===o||0===s||jm(o)===jm(s)?(e[i]=Math.max(Sd(Em(o),Em(s),r),0),(Hl.test(s)||Hl.test(o))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=Sd(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Gc(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Kc.update(()=>{vm.hasAnimatedSinceResize=!0,Cu.layout++,this.motionValue||(this.motionValue=Uu(0)),this.motionValue.jump(0,!1),this.currentAnimation=function(e,t,n){const r=mc(e)?e:Uu(e);return r.start(rf("",r,t,n)),r.animation}(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{Cu.layout--},onComplete:()=>{Cu.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&kg(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=Cf(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=Cf(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Nm(t,n),Hd(t,i),jf(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Ym);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){const{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const r={};n.z&&Jm("z",e,r,this.animationValues);for(let i=0;i<Qm.length;i++)Jm(`rotate${Qm[i]}`,e,r,this.animationValues),Jm(`skew${Qm[i]}`,e,r,this.animationValues);e.render();for(const i in r)e.setStaticValue(i,r[i]),this.animationValues&&(this.animationValues[i]=r[i]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible)return void(e.visibility="hidden");const n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,e.visibility="",e.opacity="",e.pointerEvents=hp(t?.pointerEvents)||"",void(e.transform=n?n(this.latestValues,""):"none");const r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target)return this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=hp(t?.pointerEvents)||""),void(this.hasProjected&&!Nd(this.latestValues)&&(e.transform=n?n({},""):"none",this.hasProjected=!1));e.visibility="";const i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let o=function(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,a=n?.z||0;if((i||o||a)&&(r=`translate3d(${i}px, ${o}px, ${a}px) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:i,rotateY:o,skewX:a,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),o&&(r+=`rotateY(${o}deg) `),a&&(r+=`skewX(${a}deg) `),s&&(r+=`skewY(${s}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return 1===s&&1===l||(r+=`scale(${s}, ${l})`),r||"none"}(this.projectionDeltaWithTransform,this.treeScale,i);n&&(o=n(i,o)),e.transform=o;const{x:a,y:s}=this.projectionDelta;e.transformOrigin=`${100*a.origin}% ${100*s.origin}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?void 0!==i.opacity?i.opacity:"":void 0!==i.opacityExit?i.opacityExit:0;for(const l in Cd){if(void 0===i[l])continue;const{correct:t,applyTo:n,isCSSVariable:a}=Cd[l],s="none"===o?i[l]:t(i[l],r);if(n){const t=n.length;for(let r=0;r<t;r++)e[n[r]]=s}else a?this.options.visualElement.renderState.vars[l]=s:e[l]=s}this.options.layoutId&&(e.pointerEvents=r===this?hp(t?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(ag),this.root.sharedNodes.clear()}}}function tg(e){e.updateLayout()}function ng(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,o=t.source!==e.layout.source;if("size"===i)kf(e=>{const r=o?t.measuredBox[e]:t.layoutBox[e],i=Cf(r);r.min=n[e].min,r.max=r.min+i});else if("x"===i||"y"===i){const e="x"===i?"y":"x";zm(o?t.measuredBox[e]:t.layoutBox[e],n[e])}else kg(i,t.layoutBox,n)&&kf(r=>{const i=o?t.measuredBox[r]:t.layoutBox[r],a=Cf(n[r]);i.max=i.min+a,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+a)});const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};jf(a,n,t.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};o?jf(s,e.applyTransform(r,!0),t.measuredBox):jf(s,n,t.layoutBox);const l=!Bm(a);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:o}=r;if(i&&o){const a=e.options.layoutAnchor||void 0,s={x:{min:0,max:0},y:{min:0,max:0}};$f(s,t.layoutBox,i.layoutBox,a);const l={x:{min:0,max:0},y:{min:0,max:0}};$f(l,n,o.layoutBox,a),Um(s,l)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=l,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function rg(e){Yc.value&&Gm.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function ig(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function og(e){e.clearSnapshot()}function ag(e){e.clearMeasurements()}function sg(e){e.isLayoutDirty=!0,e.updateLayout()}function lg(e){e.isLayoutDirty=!1}function cg(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function ug(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function dg(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function pg(e){e.resolveTargetDelta()}function hg(e){e.calcProjection()}function fg(e){e.resetSkewAndRotation()}function mg(e){e.removeLeadSnapshot()}function gg(e,t,n){e.translate=Sd(t.translate,0,n),e.scale=Sd(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function vg(e,t,n,r){e.min=Sd(t.min,n.min,r),e.max=Sd(t.max,n.max,r)}function yg(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const xg={duration:.45,ease:[.4,0,.1,1]},bg=e=>"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),wg=bg("applewebkit/")&&!bg("chrome/")?Math.round:Uc;function Sg(e){e.min=wg(e.min),e.max=wg(e.max)}function kg(e,t,n){return"position"===e||"preserve-aspect"===e&&(r=Hm(t),i=Hm(n),o=.2,!(Math.abs(r-i)<=o));var r,i,o}function Cg(e){return e!==e.root&&e.scroll?.wasRoot}const Eg=eg({attachResizeListener:(e,t)=>Nf(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),jg={current:void 0},Tg=eg({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!jg.current){const e=new Eg({});e.mount(window),e.setOptions({layoutScroll:!0}),jg.current=e}return jg.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Pg={pan:{Feature:class extends Dp{constructor(){super(...arguments),this.removePointerDownListener=Uc}onPointerDown(e){this.session=new em(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:qf(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:gm(e),onStart:gm(t),onMove:gm(n),onEnd:(e,t)=>{delete this.session,r&&Kc.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Qf(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Dp{constructor(e){super(e),this.removeGroupControls=Uc,this.removeListeners=Uc,this.controls=new hm(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Uc}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},ProjectionNode:Tg,MeasureLayout:wm}};function $g(e,t){const n=Lf(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Mg(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,o]=$g(e,n);return r.forEach(e=>{let n,r=!1,o=!1;const a=t=>{n&&(n(t),n=void 0),e.removeEventListener("pointerleave",l)},s=e=>{r=!1,window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",s),o&&(o=!1,a(e))},l=e=>{"touch"!==e.pointerType&&(r?o=!0:a(e))};e.addEventListener("pointerenter",r=>{if("touch"===r.pointerType||Sf())return;o=!1;const a=t(e,r);"function"===typeof a&&(n=a,e.addEventListener("pointerleave",l,i))},i),e.addEventListener("pointerdown",()=>{r=!0,window.addEventListener("pointerup",s,i),window.addEventListener("pointercancel",s,i)},i)}),o}function zg(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover","Start"===n);const i=r["onHover"+n];i&&Kc.postRender(()=>i(t,Gf(t)))}function Ng(e){return Rf(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const Rg=(e,t)=>!!t&&(e===t||Rg(e,t.parentElement)),Dg=new WeakSet;function Lg(e){return t=>{"Enter"===t.key&&e(t)}}function Ag(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function Ig(e){return Kf(e)&&!Sf()}const Og=new WeakSet;function _g(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,o]=$g(e,n),a=e=>{const r=e.currentTarget;if(!Ig(e))return;if(Og.has(e))return;Dg.add(r),n.stopPropagation&&Og.add(e);const o=t(r,e),a=(e,t)=>{window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",l),Dg.has(r)&&Dg.delete(r),Ig(e)&&"function"===typeof o&&o(e,{success:t})},s=e=>{a(e,r===window||r===document||n.useGlobalTarget||Rg(r,e.target))},l=e=>{a(e,!1)};window.addEventListener("pointerup",s,i),window.addEventListener("pointercancel",l,i)};return r.forEach(e=>{var t;(n.useGlobalTarget?window:e).addEventListener("pointerdown",a,i),Ng(e)&&(e.addEventListener("focus",e=>((e,t)=>{const n=e.currentTarget;if(!n)return;const r=Lg(()=>{if(Dg.has(n))return;Ag(n,"down");const e=Lg(()=>{Ag(n,"up")});n.addEventListener("keyup",e,t),n.addEventListener("blur",()=>Ag(n,"cancel"),t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)})(e,i)),t=e,Mf.has(t.tagName)||!0===t.isContentEditable||e.hasAttribute("tabindex")||(e.tabIndex=0))}),o}function Bg(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap","Start"===n);const i=r["onTap"+("End"===n?"":n)];i&&Kc.postRender(()=>i(t,Gf(t)))}const Fg=new WeakMap,Vg=new WeakMap,Ug=e=>{const t=Fg.get(e.target);t&&t(e)},Hg=e=>{e.forEach(Ug)};function Wg(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;Vg.has(r)||Vg.set(r,{});const i=Vg.get(r),o=JSON.stringify(n);return i[o]||(i[o]=new IntersectionObserver(Hg,{root:t,...n})),i[o]}(t);return Fg.set(e,n),r.observe(e),()=>{Fg.delete(e),r.unobserve(e)}}const Yg={some:0,all:1};const Xg={inView:{Feature:class extends Dp{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,o={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:Yg[r]};this.stopObserver=Wg(this.node.current,o,e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),o=t?n:r;o&&o(e)})}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}},tap:{Feature:class extends Dp{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=_g(e,(e,t)=>(Bg(this.node,t,"Start"),(e,t)=>{let{success:n}=t;return Bg(this.node,e,n?"End":"Cancel")}),{useGlobalTarget:t,stopPropagation:!1===n?.tap})}unmount(){}}},focus:{Feature:class extends Dp{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(by){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Hp(Nf(this.node.current,"focus",()=>this.onFocus()),Nf(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends Dp{mount(){const{current:e}=this.node;e&&(this.unmount=Mg(e,(e,t)=>(zg(this.node,t,"Start"),e=>zg(this.node,e,"End"))))}unmount(){}}}},Kg=Rp({...bf,...Xg,...Pg,...{layout:{ProjectionNode:Tg,MeasureLayout:wm}}},Gd),Gg=Mn.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;function Qg(e){let{gameMode:t}=e;const n=(0,i.useRef)(null),r=(0,i.useRef)(),o=(0,i.useRef)([]),a=(0,i.useRef)({x:0,y:0});return(0,i.useEffect)(()=>{if(!t)return;const e=n.current,i=e.getContext("2d"),s=()=>{e.width=window.innerWidth,e.height=window.innerHeight};s(),window.addEventListener("resize",s);class l{constructor(){this.x=Math.random()*e.width,this.y=Math.random()*e.height,this.vx=1*(Math.random()-.5),this.vy=1*(Math.random()-.5),this.radius=3*Math.random()+1,this.color=`hsl(${200+60*Math.random()}, 70%, 60%)`,this.opacity=.5*Math.random()+.2,this.pulseSpeed=.02*Math.random()+.01,this.pulsePhase=Math.random()*Math.PI*2}update(){this.x+=this.vx,this.y+=this.vy,this.x<=this.radius&&(this.x=this.radius,this.vx=.85*-this.vx),this.x>=e.width-this.radius&&(this.x=e.width-this.radius,this.vx=.85*-this.vx),this.y<=this.radius&&(this.y=this.radius,this.vy=.85*-this.vy),this.y>=e.height-this.radius&&(this.y=e.height-this.radius,this.vy=.85*-this.vy);const t=a.current.x-this.x,n=a.current.y-this.y,r=Math.sqrt(t*t+n*n);if(r<100){const e=(100-r)/100,i=.15;this.vx+=t/r*e*i,this.vy+=n/r*e*i}this.vx*=.99,this.vy*=.99,this.pulsePhase+=this.pulseSpeed,this.radius=1*Math.sin(this.pulsePhase)+2.5}draw(e){e.save(),e.globalAlpha=this.opacity,e.beginPath(),e.arc(this.x,this.y,this.radius,0,2*Math.PI),e.fillStyle=this.color,e.fill(),e.globalAlpha=.3*this.opacity,e.beginPath(),e.arc(this.x,this.y,2*this.radius,0,2*Math.PI),e.fill(),e.restore()}}o.current=Array.from({length:50},()=>new l);const c=e=>{a.current.x=e.clientX,a.current.y=e.clientY};window.addEventListener("mousemove",c);const u=()=>{i.clearRect(0,0,e.width,e.height),o.current.forEach(e=>{e.update(),e.draw(i)}),o.current.forEach((e,t)=>{o.current.slice(t+1).forEach(t=>{const n=e.x-t.x,r=e.y-t.y,o=Math.sqrt(n*n+r*r);o<120&&(i.save(),i.globalAlpha=(120-o)/120*.3,i.strokeStyle="#4facfe",i.lineWidth=1,i.beginPath(),i.moveTo(e.x,e.y),i.lineTo(t.x,t.y),i.stroke(),i.restore())})}),r.current=requestAnimationFrame(u)};return u(),()=>{window.removeEventListener("resize",s),window.removeEventListener("mousemove",c),r.current&&cancelAnimationFrame(r.current)}},[t]),t?(0,Er.jsx)(Gg,{ref:n}):null}function qg(e,t){if("function"===typeof e)return e(t);null!==e&&void 0!==e&&(e.current=t)}function Jg(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.useCallback(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{let n=!1;const r=t.map(t=>{const r=qg(t,e);return n||"function"!==typeof r||(n=!0),r});if(n)return()=>{for(let e=0;e<r.length;e++){const n=r[e];"function"===typeof n?n():qg(t[e],null)}}}}(...t),t)}class Zg extends i.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(Ng(t)&&e.isPresent&&!this.props.isPresent&&!1!==this.props.pop){const e=t.offsetParent,n=Ng(e)&&e.offsetWidth||0,r=Ng(e)&&e.offsetHeight||0,i=getComputedStyle(t),o=this.props.sizeRef.current;o.height=parseFloat(i.height),o.width=parseFloat(i.width),o.top=t.offsetTop,o.left=t.offsetLeft,o.right=n-o.width-o.left,o.bottom=r-o.height-o.top}return null}componentDidUpdate(){}render(){return this.props.children}}function ev(e){let{children:t,isPresent:n,anchorX:r,anchorY:o,root:a,pop:s}=e;const l=(0,i.useId)(),c=(0,i.useRef)(null),u=(0,i.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:d}=(0,i.useContext)(Jd),p=t.props?.ref??t?.ref,h=Jg(c,p);return(0,i.useInsertionEffect)(()=>{const{width:e,height:t,top:i,left:p,right:h,bottom:f}=u.current;if(n||!1===s||!c.current||!e||!t)return;const m="left"===r?`left: ${p}`:`right: ${h}`,g="bottom"===o?`bottom: ${f}`:`top: ${i}`;c.current.dataset.motionPopId=l;const v=document.createElement("style");d&&(v.nonce=d);const y=a??document.head;return y.appendChild(v),v.sheet&&v.sheet.insertRule(`\n          [data-motion-pop-id="${l}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            ${m}px !important;\n            ${g}px !important;\n          }\n        `),()=>{c.current?.removeAttribute("data-motion-pop-id"),y.contains(v)&&y.removeChild(v)}},[n]),(0,Er.jsx)(Zg,{isPresent:n,childRef:c,sizeRef:u,pop:s,children:!1===s?t:i.cloneElement(t,{ref:h})})}const tv=e=>{let{children:t,initial:n,isPresent:r,onExitComplete:o,custom:a,presenceAffectsLayout:s,mode:l,anchorX:c,anchorY:u,root:d}=e;const p=mp(nv),h=(0,i.useId)();let f=!0,m=(0,i.useMemo)(()=>(f=!1,{id:h,initial:n,isPresent:r,custom:a,onExitComplete:e=>{p.set(e,!0);for(const t of p.values())if(!t)return;o&&o()},register:e=>(p.set(e,!1),()=>p.delete(e))}),[r,p,o]);return s&&f&&(m={...m}),(0,i.useMemo)(()=>{p.forEach((e,t)=>p.set(t,!1))},[r]),i.useEffect(()=>{!r&&!p.size&&o&&o()},[r]),t=(0,Er.jsx)(ev,{pop:"popLayout"===l,isPresent:r,anchorX:c,anchorY:u,root:d,children:t}),(0,Er.jsx)(fp.Provider,{value:m,children:t})};function nv(){return new Map}const rv=e=>e.key||"";function iv(e){const t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}const ov=e=>{let{children:t,custom:n,initial:r=!0,onExitComplete:o,presenceAffectsLayout:a=!0,mode:s="sync",propagate:l=!1,anchorX:c="left",anchorY:u="top",root:d}=e;const[p,h]=ym(l),f=(0,i.useMemo)(()=>iv(t),[t]),m=l&&!p?[]:f.map(rv),g=(0,i.useRef)(!0),v=(0,i.useRef)(f),y=mp(()=>new Map),x=(0,i.useRef)(new Set),[b,w]=(0,i.useState)(f),[S,k]=(0,i.useState)(f);Pp(()=>{g.current=!1,v.current=f;for(let e=0;e<S.length;e++){const t=rv(S[e]);m.includes(t)?(y.delete(t),x.current.delete(t)):!0!==y.get(t)&&y.set(t,!1)}},[S,m.length,m.join("-")]);const C=[];if(f!==b){let e=[...f];for(let t=0;t<S.length;t++){const n=S[t],r=rv(n);m.includes(r)||(e.splice(t,0,n),C.push(n))}return"wait"===s&&C.length&&(e=C),k(iv(e)),w(f),null}const{forceRender:E}=(0,i.useContext)(Qd);return(0,Er.jsx)(Er.Fragment,{children:S.map(e=>{const t=rv(e),i=!(l&&!p)&&(f===S||m.includes(t));return(0,Er.jsx)(tv,{isPresent:i,initial:!(g.current&&!r)&&void 0,custom:n,presenceAffectsLayout:a,mode:s,root:d,onExitComplete:i?void 0:()=>{if(x.current.has(t))return;if(!y.has(t))return;x.current.add(t),y.set(t,!0);let e=!0;y.forEach(t=>{t||(e=!1)}),e&&(E?.(),k(v.current),l&&h?.(),o&&o())},anchorX:c,anchorY:u,children:e},t)})})},av=Ln`
  0% { transform: scale(1) rotate(0deg); opacity: 1; }
  100% { transform: scale(0) rotate(180deg); opacity: 0; }
`,sv=Mn(Kg.div)`
  position: fixed;
  width: 8px;
  height: 8px;
  background: ${e=>e.color||"#4facfe"};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  animation: ${av} 0.6s ease-out forwards;
  box-shadow: 0 0 10px ${e=>e.color||"#4facfe"};
`,lv=Mn(Kg.div)`
  position: fixed;
  width: 20px;
  height: 20px;
  border: 2px solid #4facfe;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  mix-blend-mode: difference;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    background: #4facfe;
    border-radius: 50%;
  }
`,cv=Mn(Kg.div)`
  position: fixed;
  width: 20px;
  height: 20px;
  border: 2px solid #4facfe;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9997;
`;function uv(e){let{gameMode:t}=e;const[n,r]=(0,i.useState)({x:0,y:0}),[o,a]=(0,i.useState)([]),[s,l]=(0,i.useState)([]),[c,u]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{if(!t)return;const e=e=>{r({x:e.clientX,y:e.clientY});const t={id:Date.now()+Math.random(),x:e.clientX,y:e.clientY,color:`hsl(${200+60*Math.random()}, 70%, 60%)`};a(e=>[...e.slice(-10),t]),setTimeout(()=>{a(e=>e.filter(e=>e.id!==t.id))},600)},n=e=>{window.playSoundEffect&&window.playSoundEffect.click();const t={id:Date.now(),x:e.clientX,y:e.clientY};l(e=>[...e,t]),setTimeout(()=>{l(e=>e.filter(e=>e.id!==t.id))},1e3)},i=e=>{("BUTTON"===e.target.tagName||"A"===e.target.tagName||e.target.onclick)&&(u(!0),window.playSoundEffect&&window.playSoundEffect.hover())},o=()=>{u(!1)};return document.addEventListener("mousemove",e),document.addEventListener("click",n),document.addEventListener("mouseover",i),document.addEventListener("mouseout",o),document.body.style.cursor="none",()=>{document.removeEventListener("mousemove",e),document.removeEventListener("click",n),document.removeEventListener("mouseover",i),document.removeEventListener("mouseout",o),document.body.style.cursor="auto"}},[t]),t?(0,Er.jsxs)(Er.Fragment,{children:[(0,Er.jsx)(lv,{animate:{x:n.x-10,y:n.y-10,scale:c?1.5:1},transition:{type:"spring",stiffness:500,damping:28}}),(0,Er.jsx)(ov,{children:o.map(e=>(0,Er.jsx)(sv,{style:{left:e.x-4,top:e.y-4},color:e.color,initial:{opacity:1,scale:1},exit:{opacity:0,scale:0}},e.id))}),(0,Er.jsx)(ov,{children:s.map(e=>(0,Er.jsx)(cv,{style:{left:e.x-10,top:e.y-10},initial:{scale:0,opacity:1},animate:{scale:3,opacity:0},exit:{opacity:0},transition:{duration:1,ease:"easeOut"}},e.id))})]}):null}const dv=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:150,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.8*window.innerWidth,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.8*window.innerHeight;const[s,l]=(0,i.useState)({width:e,height:t}),[c,u]=(0,i.useState)(!1),d=(0,i.useRef)(null),p=(0,i.useCallback)((e,t)=>{e.preventDefault(),e.stopPropagation(),u(!0);const i=e.clientX,c=e.clientY,d=s.width,p=s.height,f=e=>{let s=d,u=p;switch(t){case"se":s=d+(e.clientX-i),u=p+(e.clientY-c);break;case"sw":s=d-(e.clientX-i),u=p+(e.clientY-c);break;case"ne":s=d+(e.clientX-i),u=p-(e.clientY-c);break;case"nw":s=d-(e.clientX-i),u=p-(e.clientY-c);break;case"e":s=d+(e.clientX-i);break;case"w":s=d-(e.clientX-i);break;case"s":u=p+(e.clientY-c);break;case"n":u=p-(e.clientY-c)}s=Math.max(n,Math.min(o,s)),u=Math.max(r,Math.min(a,u)),l({width:s,height:u})},m=()=>{u(!1),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",m),document.body.style.cursor="",document.body.style.userSelect=""};document.addEventListener("mousemove",f),document.addEventListener("mouseup",m),document.body.style.cursor=h(t),document.body.style.userSelect="none"},[s,n,r,o,a]),h=e=>{switch(e){case"se":return"se-resize";case"sw":return"sw-resize";case"ne":return"ne-resize";case"nw":return"nw-resize";case"e":return"e-resize";case"w":return"w-resize";case"s":return"s-resize";case"n":return"n-resize";default:return"default"}};return{size:s,isResizing:c,startResize:p,resizeRef:d}},pv=Mn.div`
  position: absolute;
  background: rgba(0, 255, 0, 0.3);
  opacity: 0;
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    opacity: 1;
    background: rgba(0, 255, 0, 0.6);
    box-shadow: 0 0 8px rgba(0, 255, 0, 0.8);
  }

  ${e=>"se"===e.direction&&"\n    bottom: -2px;\n    right: -2px;\n    width: 16px;\n    height: 16px;\n    cursor: se-resize;\n    border-top: 3px solid #00ff00;\n    border-left: 3px solid #00ff00;\n    border-radius: 0 0 4px 0;\n  "}

  ${e=>"sw"===e.direction&&"\n    bottom: -2px;\n    left: -2px;\n    width: 16px;\n    height: 16px;\n    cursor: sw-resize;\n    border-top: 3px solid #00ff00;\n    border-right: 3px solid #00ff00;\n    border-radius: 0 0 0 4px;\n  "}

  ${e=>"ne"===e.direction&&"\n    top: -2px;\n    right: -2px;\n    width: 16px;\n    height: 16px;\n    cursor: ne-resize;\n    border-bottom: 3px solid #00ff00;\n    border-left: 3px solid #00ff00;\n    border-radius: 0 4px 0 0;\n  "}

  ${e=>"nw"===e.direction&&"\n    top: -2px;\n    left: -2px;\n    width: 16px;\n    height: 16px;\n    cursor: nw-resize;\n    border-bottom: 3px solid #00ff00;\n    border-right: 3px solid #00ff00;\n    border-radius: 4px 0 0 0;\n  "}

  ${e=>"e"===e.direction&&"\n    top: 16px;\n    right: -2px;\n    width: 8px;\n    height: calc(100% - 32px);\n    cursor: e-resize;\n    border-left: 3px solid #00ff00;\n  "}

  ${e=>"w"===e.direction&&"\n    top: 16px;\n    left: -2px;\n    width: 8px;\n    height: calc(100% - 32px);\n    cursor: w-resize;\n    border-right: 3px solid #00ff00;\n  "}

  ${e=>"s"===e.direction&&"\n    bottom: -2px;\n    left: 16px;\n    width: calc(100% - 32px);\n    height: 8px;\n    cursor: s-resize;\n    border-top: 3px solid #00ff00;\n  "}

  ${e=>"n"===e.direction&&"\n    top: -2px;\n    left: 16px;\n    width: calc(100% - 32px);\n    height: 8px;\n    cursor: n-resize;\n    border-bottom: 3px solid #00ff00;\n  "}
`,hv=Mn.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 10;

  ${pv} {
    pointer-events: auto;
  }

  &:hover ${pv} {
    opacity: 0.8;
  }
`,fv=e=>{let{direction:t,onMouseDown:n}=e;return(0,Er.jsx)(pv,{direction:t,onMouseDown:n})},mv=e=>{let{handles:t=["se"],onResize:n}=e;return(0,Er.jsx)(hv,{children:t.map(e=>(0,Er.jsx)(fv,{direction:e,onMouseDown:t=>n(t,e)},e))})},gv=Ln`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`,vv=Mn(Kg.div)`
  position: fixed;
  ${e=>e.isMaximized?"\n    top: 0 !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    transform: none !important;\n  ":`\n    top: ${e.top||window.innerHeight-320}px;\n    left: ${e.left||window.innerWidth-920}px;\n    width: ${e.width||500}px;\n    height: ${e.height||300}px;\n    min-height: 200px;\n  `}
  background: #000;
  border: 2px solid #00ff00;
  border-radius: ${e=>e.isMaximized?"0":"5px"};
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
  font-family: 'Courier New', monospace;
  font-size: 12px;
  color: #00ff00;
  overflow: hidden;
  z-index: 1000;
  cursor: ${e=>e.isMaximized?"default":"move"};

  @media (max-width: 768px) {
    ${e=>!e.isMaximized&&"\n      width: 300px;\n      height: 200px;\n      right: 10px;\n    "}
    font-size: 10px;
  }
`,yv=Mn.div`
  background: #333;
  padding: 5px 10px;
  border-bottom: 1px solid #00ff00;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    color: #00ff00;
    font-weight: bold;
  }

  .controls {
    display: flex;
    gap: 5px;
  }

  .control {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;

    &.close { background: #ff5f57; }
    &.minimize { background: #ffbd2e; }
    &.maximize { background: #28ca42; }
  }
`,xv=Mn.div`
  padding: 10px;
  height: calc(100% - 40px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #111;
  }

  &::-webkit-scrollbar-thumb {
    background: #00ff00;
    border-radius: 4px;
  }
`,bv=Mn(Kg.div)`
  margin-bottom: 5px;
  display: flex;

  .prompt {
    color: #0ff;
    margin-right: 5px;
  }

  .command {
    color: #fff;
  }

  .output {
    color: #0f0;
    margin-left: 20px;
  }

  .error {
    color: #f55;
    margin-left: 20px;
  }
`,wv=Mn.div`
  display: flex;

  input {
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-family: inherit;
    font-size: inherit;
    flex: 1;
  }

  .cursor {
    width: 8px;
    height: 14px;
    background: #00ff00;
    animation: ${gv} 1s infinite;
  }
`,Sv=(0,i.forwardRef)((e,t)=>{let{gameMode:n,onActivityClick:r,onCpuClick:o,onNotepadClick:a}=e;const[s,l]=(0,i.useState)(!1),[c,u]=(0,i.useState)([]),[d,p]=(0,i.useState)(""),[h,f]=(0,i.useState)(!1),[m,g]=(0,i.useState)(!1),[v,y]=(0,i.useState)({top:window.innerHeight-320,left:window.innerWidth-920}),x=(0,i.useRef)(null),b=(0,i.useRef)(null),{size:w,isResizing:S,startResize:k}=dv(500,300,300,200,.9*window.innerWidth,.9*window.innerHeight),C={help:()=>["Available commands:","  help - Show this help","  about - About this portfolio","  skills - List technical skills","  projects - Show projects","  experience - Work experience","  contact - Contact information","  resume - Download resume PDF","  matrix - Toggle Matrix mode","  easter-egg - Find hidden features","  hack - Try to hack the system","  whoami - Identity information","  pwd - Current directory","  ls - List contents","  cat - Display file contents","  clear - Clear terminal","","Dock Applications:","  activity - Open activity monitor","  cpu - Open CPU stats monitor","  notepad - Open hacker notepad"],about:()=>["Dibyajyoti Pradhan - Senior Software Engineer","Location: London, UK","Current: HubSpot","Experience: 5+ years in tech","Specialization: Full-stack development, System architecture"],skills:()=>["Programming Languages: C++, Python, Java, JavaScript, TypeScript","Frameworks: React, React Native, Spring MVC, Google Guice","Web Technologies: HTML, CSS, GraphQL","Tools: Git, Docker, Kubernetes, Kafka, AWS","Databases: MySQL, MongoDB, DynamoDB, Vitess DB"],projects:()=>["Cloud Storage System - Java-based file management","Concurrent Web Crawler - Multi-threaded crawler in Java","Cron Parser - CLI application for cron expressions","Cookie Log Parser - CSV log analysis tool","Pokemon CSS Project - Advanced CSS showcase","Netflix Clone - React & Firebase app"],experience:()=>["Senior Software Engineer @ HubSpot (07/2024 - Present)","Software Engineer II @ Meta (04/2022 - 05/2024)","Software Development Engineer II @ Amazon (10/2021 - 02/2022)","Software Development Engineer I @ Amazon (07/2019 - 09/2021)","SDE Intern @ Amazon (05/2018 - 07/2018)"],contact:()=>["Email: dibyojyotipradhan@gmail.com","LinkedIn: dibyajyoti-pradhan-83a649146","GitHub: Dibyajyoti-Pradhan","Location: London, UK"],resume:()=>{const e=document.createElement("a");return e.href="/my-portfolio/resume.pdf",e.download="Dibyajyoti_Pradhan_Resume.pdf",e.target="_blank",document.body.appendChild(e),e.click(),document.body.removeChild(e),["Downloading resume...","[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 100%","\u2705 Resume downloaded successfully!","\ud83d\udcc4 File: Dibyajyoti_Pradhan_Resume.pdf"]},matrix:()=>(document.body.style.filter=document.body.style.filter?"":"hue-rotate(120deg) contrast(1.2)",["Matrix mode toggled! The world looks different now..."]),"easter-egg":()=>["\ud83e\udd5a You found an easter egg!","Fun fact: This portfolio has over 50 interactive elements!",'Try typing "konami" for a special surprise...'],konami:()=>(document.body.style.animation="spin 2s ease-in-out",setTimeout(()=>{document.body.style.animation=""},2e3),["\ud83c\udfae KONAMI CODE ACTIVATED! \ud83c\udfae","You are now a certified geek!"]),hack:()=>["Attempting to hack the system...","[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 100%","ERROR: Nice try! This portfolio is hack-proof \ud83d\ude0e","But you get points for trying!"],whoami:()=>["portfolio-visitor"],pwd:()=>["/Users/visitor/portfolio-quest"],ls:()=>["about.txt","skills.md","projects/","experience.log","contact.vcf","resume.pdf","achievements.json"],cat:e=>{const t=e[0];return"about.txt"===t?["This is an interactive portfolio by Dibyajyoti Pradhan"]:"skills.md"===t?["# Skills","JavaScript, React, Python, Java..."]:"resume.pdf"===t?["\ud83d\udcc4 PDF file detected!",'Use "resume" command to download the file instead.']:[`cat: ${t||"filename"}: No such file or directory`]},clear:()=>(u([]),[]),activity:()=>r?(r(),["Opening Activity Monitor...","[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 100%","\u2705 Activity Monitor launched successfully!","\ud83d\udcca Monitoring system performance..."]):["\u274c Activity Monitor not available"],cpu:()=>o?(o(),["Launching CPU Stats Monitor...","[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 100%","\u2705 CPU Monitor activated!","\ud83d\udc80 Displaying system vitals..."]):["\u274c CPU Monitor not available"],notepad:()=>a?(a(),["Initializing Hacker Notepad...","Loading encryption protocols...","[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 100%","\u2705 notepad.exe launched!","\ud83d\udcdd Secure text editor ready for use"]):["\u274c Notepad not available"]};(0,i.useImperativeHandle)(t,()=>({maximize:()=>g(!0),minimize:()=>f(!0),close:()=>l(!1)})),(0,i.useEffect)(()=>{if(n){l(!0);const e=[{type:"output",content:"Welcome to Portfolio Terminal v2.0"},{type:"output",content:'Type "help" for available commands'},{type:"output",content:"\u2501".repeat(50)}];u(e)}else l(!1)},[n]),(0,i.useEffect)(()=>{b.current&&(b.current.scrollTop=b.current.scrollHeight)},[c]);return n&&s?(0,Er.jsx)(ov,{children:(0,Er.jsxs)(vv,{isMaximized:m,width:w.width,height:h?40:w.height,top:v.top,left:v.left,initial:{opacity:0,y:100,scale:.8},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:100,scale:.8},transition:{duration:.5},drag:!m&&!S,dragMomentum:!1,dragElastic:.1,whileDrag:{scale:1.05,zIndex:1100},onClick:()=>{x.current&&x.current.focus()},onDrag:(e,t)=>{m||S||y(e=>({top:e.top+t.delta.y,left:e.left+t.delta.x}))},children:[!m&&(0,Er.jsx)(mv,{handles:["se","sw","ne","nw","e","w","s","n"],onResize:(e,t)=>{const n={...v},r={...w};if(k(e,t),"n"===t||"ne"===t||"nw"===t){const t=e.clientY,i=e=>{const i=e.clientY-t,o=Math.max(200,r.height-i),a=r.height-o;y(e=>({...e,top:n.top+a}))},o=()=>{document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",i),document.addEventListener("mouseup",o)}}}),(0,Er.jsxs)(yv,{children:[(0,Er.jsx)("div",{className:"title",children:"\ud83d\udcbb Terminal"}),(0,Er.jsxs)("div",{className:"controls",children:[(0,Er.jsx)("div",{className:"control minimize",onClick:()=>{f(!h),h||g(!1)}}),(0,Er.jsx)("div",{className:"control maximize",onClick:()=>{h||g(!m)}}),(0,Er.jsx)("div",{className:"control close",onClick:()=>l(!1)})]})]}),!h&&(0,Er.jsxs)(xv,{ref:b,children:[c.map((e,t)=>(0,Er.jsxs)(bv,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.05*t},children:["input"===e.type&&(0,Er.jsx)("div",{className:"command",children:e.content}),"output"===e.type&&(0,Er.jsx)("div",{className:"output",children:e.content}),"error"===e.type&&(0,Er.jsx)("div",{className:"error",children:e.content})]},t)),(0,Er.jsxs)(wv,{onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:[(0,Er.jsx)("span",{className:"prompt",children:"$"}),(0,Er.jsx)("input",{ref:x,value:d,onChange:e=>p(e.target.value),onKeyPress:e=>{"Enter"===e.key&&(e=>{const[t,...n]=e.trim().toLowerCase().split(" "),r={type:"input",content:`$ ${e}`};let i=[];if(C[t]){const e=C[t](n);i=e.map(e=>({type:"output",content:e}))}else e.trim()&&(i=[{type:"error",content:`Command not found: ${t}. Type "help" for available commands.`}]);u(e=>[...e,r,...i]),p(""),setTimeout(()=>{b.current&&(b.current.scrollTop=b.current.scrollHeight)},50),window.playSoundEffect&&window.playSoundEffect.click()})(d)},placeholder:"Type a command...",autoFocus:!0}),(0,Er.jsx)("div",{className:"cursor"})]})]})]})}):null}),kv=Sv,Cv=(0,i.forwardRef)((e,t)=>{let{gameMode:n,onActivityClick:r,onCpuClick:o,onNotepadClick:a}=e;const[s,l]=(0,i.useState)(!1);(0,i.useImperativeHandle)(t,()=>({show:()=>l(!0),hide:()=>l(!1),toggle:()=>l(e=>!e),isVisible:()=>s,maximize:()=>{l(!0),c.current&&c.current.maximize&&c.current.maximize()}}));const c=i.useRef();return(0,Er.jsx)(kv,{ref:c,gameMode:n&&s,onActivityClick:r,onCpuClick:o,onNotepadClick:a})}),Ev=Cv,jv=Ln`
  0%, 100% { box-shadow: 0 0 20px #00ff41; }
  50% { box-shadow: 0 0 40px #00ff41, 0 0 60px #00cc33; }
`,Tv=Mn(Kg.div)`
  position: fixed;
  ${e=>e.isMaximized?"\n    top: 0 !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    transform: none !important;\n  ":`\n    top: ${e.top||80}px;\n    left: ${e.left||Math.max(20,window.innerWidth-320)}px;\n    width: ${e.width||300}px;\n    height: ${e.height||350}px;\n    min-height: 250px;\n  `}
  background: linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%);
  border: 2px solid #00ff41;
  border-radius: ${e=>(e.isMaximized,"0")};
  padding: ${e=>e.isMinimized?"0":"20px"};
  padding-top: 0;
  z-index: 1000;
  animation: ${jv} 3s ease-in-out infinite;
  font-family: 'Courier New', monospace;
  overflow: hidden;
  cursor: ${e=>e.isMaximized?"default":"move"};

  @media (max-width: 768px) {
    width: ${e=>e.isMaximized?"100vw":e.width||250}px;
    height: ${e=>e.isMaximized?"100vh":e.height||300}px;
  }
`,Pv=Mn.div`
  background: #333;
  padding: 5px 10px;
  border-bottom: 1px solid #00ff41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 -20px 15px -20px;

  .title {
    color: #00ff41;
    font-weight: bold;
    font-size: 12px;
  }

  .controls {
    display: flex;
    gap: 5px;
  }

  .control {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;

    &.close { background: #ff5f57; }
    &.minimize { background: #ffbd2e; }
    &.maximize { background: #28ca42; }
  }
`,$v=Mn.div`
  padding: ${e=>e.isMinimized?"0":"20px"};
  height: ${e=>e.isMinimized?"0":"calc(100% - 40px)"};
  overflow-y: auto;
  overflow: ${e=>e.isMinimized?"hidden":"visible"};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #111;
  }

  &::-webkit-scrollbar-thumb {
    background: #00ff41;
    border-radius: 4px;
  }
`,Mv=Mn.div`
  width: 100%;
  height: 12px;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 0;
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;
`,zv=Mn(Kg.div)`
  height: 100%;
  background: linear-gradient(90deg, #003300, #00ff41, #00cc33);
  background-size: 200% 100%;
  animation: shimmer 2s ease-in-out infinite;
  border-radius: 0;
  position: relative;
  box-shadow: 0 0 10px #00ff41;

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(0,255,65,0.6), transparent);
    animation: slide 1.5s ease-in-out infinite;
  }

  @keyframes slide {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`,Nv=Mn.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  color: #00ff41;
  font-size: 0.9rem;
  font-family: 'Courier New', monospace;

  .label {
    opacity: 0.8;
    color: #888;
  }

  .value {
    color: #00ff41;
    font-weight: bold;
    text-shadow: 0 0 5px #00ff41;
  }
`,Rv=Mn(Kg.div)`
  display: inline-block;
  background: linear-gradient(45deg, #003300, #00ff41);
  color: #000;
  padding: 4px 8px;
  border: 1px solid #00ff41;
  border-radius: 0;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 2px;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
`;function Dv(e){let{gameMode:t}=e;const{size:n,isResizing:r,startResize:o}=dv(300,350,250,250,500,600),[a,s]=(0,i.useState)(!0),[l,c]=(0,i.useState)(!1),[u,d]=(0,i.useState)(!1),[p,h]=(0,i.useState)({top:80,left:Math.max(20,window.innerWidth-320)}),[f,m]=(0,i.useState)(0),[g,v]=(0,i.useState)({sectionsVisited:0,timeSpent:0,clickCount:0,scrollDistance:0}),[y,x]=(0,i.useState)([]);return(0,i.useEffect)(()=>{const e=()=>{h(e=>({...e,left:Math.max(20,window.innerWidth-320)}))};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,i.useEffect)(()=>{if(!t)return;let e=Date.now(),n=0,r=0,i=window.scrollY;const o=()=>{n++,window.playSoundEffect&&window.playSoundEffect.click()},a=()=>{const e=window.scrollY;r+=Math.abs(e-i),i=e};document.addEventListener("click",o),window.addEventListener("scroll",a);const s=setInterval(()=>{const t=Math.floor((Date.now()-e)/1e3),i=Math.min((t+2*n+r/100)/100*100,100);m(i),v(e=>({...e,timeSpent:t,clickCount:n,scrollDistance:Math.floor(r)}));const o=[];t>30&&!y.includes("Explorer")&&o.push("Explorer"),n>10&&!y.includes("Clicker")&&o.push("Clicker"),r>1e3&&!y.includes("Scroller")&&o.push("Scroller"),i>50&&!y.includes("Half Way")&&o.push("Half Way"),i>=100&&!y.includes("Completionist")&&o.push("Completionist"),o.length>0&&(x(e=>[...e,...o]),window.playSoundEffect&&window.playSoundEffect.success())},1e3);return()=>{document.removeEventListener("click",o),window.removeEventListener("scroll",a),clearInterval(s)}},[t,y]),t&&a?(0,Er.jsxs)(Tv,{isMaximized:u,width:n.width,height:l?40:n.height,top:p.top,left:p.left,initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:.5},drag:!u&&!r,dragMomentum:!1,dragElastic:.1,onDrag:(e,t)=>{u||r||h(e=>({top:e.top+t.delta.y,left:e.left+t.delta.x}))},children:[!u&&(0,Er.jsx)(mv,{handles:["se","sw","ne","nw","e","w","s","n"],onResize:(e,t)=>{const r={...p},i={...n};if(o(e,t),"n"===t||"ne"===t||"nw"===t){const t=e.clientY,n=e=>{const n=e.clientY-t,o=Math.max(250,i.height-n),a=i.height-o;h(e=>({...e,top:r.top+a}))},o=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",o)}}}),(0,Er.jsxs)(Pv,{children:[(0,Er.jsx)("div",{className:"title",children:"\u26a1 ACTIVITY"}),(0,Er.jsxs)("div",{className:"controls",children:[(0,Er.jsx)("div",{className:"control minimize",onClick:()=>{c(!l),l||d(!1)}}),(0,Er.jsx)("div",{className:"control maximize",onClick:()=>{l||d(!u)}}),(0,Er.jsx)("div",{className:"control close",onClick:()=>s(!1)})]})]}),!l&&(0,Er.jsxs)($v,{isMinimized:l,children:[(0,Er.jsx)(Mv,{children:(0,Er.jsx)(zv,{initial:{width:"0%"},animate:{width:`${f}%`},transition:{duration:.5,ease:"easeOut"}})}),(0,Er.jsxs)(Nv,{children:[(0,Er.jsx)("span",{className:"label",children:"Progress:"}),(0,Er.jsxs)("span",{className:"value",children:[Math.floor(f),"%"]})]}),(0,Er.jsxs)(Nv,{children:[(0,Er.jsx)("span",{className:"label",children:"Time Spent:"}),(0,Er.jsxs)("span",{className:"value",children:[g.timeSpent,"s"]})]}),(0,Er.jsxs)(Nv,{children:[(0,Er.jsx)("span",{className:"label",children:"Interactions:"}),(0,Er.jsx)("span",{className:"value",children:g.clickCount})]}),(0,Er.jsxs)(Nv,{children:[(0,Er.jsx)("span",{className:"label",children:"Scroll Distance:"}),(0,Er.jsxs)("span",{className:"value",children:[g.scrollDistance,"px"]})]}),y.length>0&&(0,Er.jsxs)("div",{style:{marginTop:"15px"},children:[(0,Er.jsx)("div",{style:{color:"#00ff41",fontSize:"0.9rem",marginBottom:"5px",fontFamily:"Courier New, monospace",textTransform:"uppercase",textShadow:"0 0 5px #00ff41"},children:"\ud83c\udfc6 ACHIEVEMENTS:"}),y.map((e,t)=>(0,Er.jsx)(Rv,{initial:{scale:0},animate:{scale:1},transition:{delay:.1*t},children:e},e))]})]})]}):null}const Lv=(0,i.forwardRef)((e,t)=>{let{gameMode:n}=e;const[r,o]=(0,i.useState)(!1);return(0,i.useImperativeHandle)(t,()=>({show:()=>o(!0),hide:()=>o(!1),toggle:()=>o(e=>!e),isVisible:()=>r})),(0,Er.jsx)(Dv,{gameMode:n&&r})}),Av=Lv,Iv=Ln`
  0%, 100% { text-shadow: 0 0 5px #00ff00; }
  50% { text-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00; }
`,Ov=Ln`
  0%, 100% { opacity: 1; }
  2% { opacity: 0.8; }
  4% { opacity: 1; }
  8% { opacity: 0.9; }
  10% { opacity: 1; }
`,_v=Ln`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`,Bv=Ln`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(400px); }
`,Fv=Mn(Kg.div)`
  position: fixed;
  ${e=>e.isMaximized?"\n    top: 0 !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    transform: none !important;\n  ":`\n    top: ${e.top||window.innerHeight-620}px;\n    left: ${e.left||20}px;\n    width: ${e.width||280}px;\n    height: ${e.height||600}px;\n    min-height: 400px;\n  `}
  background: linear-gradient(145deg, rgba(0, 0, 0, 0.95), rgba(0, 20, 0, 0.9));
  border: 1px solid #00ff00;
  border-radius: ${e=>(e.isMaximized,"0")};
  padding: ${e=>e.isMinimized?"0":"20px 15px"};
  padding-top: 0;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 11px;
  color: #00ff00;
  z-index: 1000;
  box-shadow:
    0 0 30px rgba(0, 255, 0, 0.3),
    inset 0 0 20px rgba(0, 255, 0, 0.05);
  overflow: hidden;
  animation: ${Ov} 3s infinite;
  cursor: ${e=>e.isMaximized?"default":"move"};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00ff00, transparent);
    animation: ${Bv} 2s linear infinite;
    opacity: 0.6;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 0, 0.03) 2px,
      rgba(0, 255, 0, 0.03) 4px
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    width: ${e=>e.isMaximized?"100vw":e.width||220}px;
    height: ${e=>e.isMaximized?"100vh":e.height||500}px;
    font-size: 10px;
  }
`,Vv=Mn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  padding: 2px 0;
  position: relative;
  z-index: 2;

  .label {
    color: #ffffff;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;

    &::before {
      content: '▶ ';
      color: #ff4444;
      font-size: 8px;
    }
  }

  .value {
    color: #00ff00;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
    animation: ${Iv} 3s ease-in-out infinite;
  }

  .unit {
    color: #888888;
    font-size: 9px;
    margin-left: 2px;
  }

  .critical {
    color: #ff4444 !important;
    animation: ${_v} 0.3s infinite;
  }

  .warning {
    color: #ffaa00 !important;
  }
`,Uv=Mn.div`
  width: 100%;
  height: 6px;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00ff00;
  margin: 3px 0 8px 0;
  overflow: hidden;
  position: relative;
  z-index: 2;

  .fill {
    height: 100%;
    background: linear-gradient(90deg,
      #ff0000 0%,
      #ffaa00 25%,
      #00ff00 50%,
      #00aaff 75%,
      #aa00ff 100%
    );
    transition: width 0.5s ease;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.3) 50%,
        transparent 100%
      );
      animation: ${Bv} 1s linear infinite;
    }
  }
`,Hv=Mn.div`
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px solid #00ff00;
  font-size: 9px;
  position: relative;
  z-index: 2;

  .info-line {
    margin: 3px 0;
    color: #aaaaaa;
    display: flex;
    justify-content: space-between;

    &::before {
      content: '$ ';
      color: #00ff00;
    }
  }

  .status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #00ff00;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
    animation: ${Iv} 1s ease-in-out infinite;
  }
`,Wv=Mn.div`
  background: #333;
  padding: 5px 10px;
  border-bottom: 1px solid #00ff00;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 -15px 15px -15px;

  .title {
    color: #00ff00;
    font-weight: bold;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .controls {
    display: flex;
    gap: 5px;
  }

  .control {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;

    &.close { background: #ff5f57; }
    &.minimize { background: #ffbd2e; }
    &.maximize { background: #28ca42; }
  }

  .skull {
    animation: ${_v} 2s infinite;
  }

  .status-led {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00ff00;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
    animation: ${Iv} 0.8s ease-in-out infinite;
  }
`,Yv=Mn.div`
  padding: ${e=>e.isMinimized?"0":"20px 15px"};
  height: ${e=>e.isMinimized?"0":"calc(100% - 40px)"};
  overflow-y: auto;
  overflow: ${e=>e.isMinimized?"hidden":"visible"};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #111;
  }

  &::-webkit-scrollbar-thumb {
    background: #00ff00;
    border-radius: 4px;
  }
`;function Xv(e){let{gameMode:t}=e;const{size:n,isResizing:r,startResize:o}=dv(280,600,250,400,600,800),[a,s]=(0,i.useState)(!0),[l,c]=(0,i.useState)(!1),[u,d]=(0,i.useState)(!1),[p,h]=(0,i.useState)({top:window.innerHeight-620,left:20}),[f,m]=(0,i.useState)({fps:60,memory:0,uptime:0,interactions:0,hackLevel:0,cpuUsage:0,networkLatency:0,linesOfCode:0,exploitsFound:0,systemBreaches:0,dataPackets:0}),[g,v]=(0,i.useState)({browser:"",os:"",screen:"",connection:"",kernel:"",shell:""}),[y,x]=(0,i.useState)("LOW");if((0,i.useEffect)(()=>{if(!t)return;v({browser:(()=>{const e=navigator.userAgent;return e.includes("Chrome")?"Chrome":e.includes("Firefox")?"Firefox":e.includes("Safari")?"Safari":e.includes("Edge")?"Edge":"Unknown"})(),os:(()=>{const e=navigator.userAgent;return e.includes("Mac")?"macOS":e.includes("Win")?"Windows":e.includes("Linux")?"Linux":e.includes("Android")?"Android":e.includes("iOS")?"iOS":"Unknown"})(),screen:`${window.screen.width}x${window.screen.height}`,connection:navigator.connection?`${navigator.connection.effectiveType}`:"4g",kernel:"v5.4.0-hacker",shell:"/bin/zsh"});let e=Date.now(),n=0,r=performance.now();const i=()=>{const t=performance.now();if(n++,t-r>=1e3){const i=Math.round(1e3*n/(t-r));n=0,r=t;const o=Math.floor((Date.now()-e)/1e3),a=(performance.memory?performance.memory.usedJSHeapSize/1048576:50*Math.random()).toFixed(1),s=Math.floor(30*Math.random())+10,l=Math.floor(50*Math.random())+20,c=Math.floor(2.3*o)+1337,u=Math.min(100,Math.floor(o/8)+Math.floor(f.interactions/3)),d=Math.floor(o/15)+Math.floor(f.interactions/10),p=Math.floor(o/30),h=Math.floor(1.7*o)+3*f.interactions;let g="LOW";u>70||d>10?g="HIGH":(u>40||d>5)&&(g="MED"),x(g),m(e=>({fps:i,memory:parseFloat(a),uptime:o,interactions:e.interactions,hackLevel:u,cpuUsage:s,networkLatency:l,linesOfCode:c,exploitsFound:d,systemBreaches:p,dataPackets:h}))}requestAnimationFrame(i)};i();const o=()=>{m(e=>({...e,interactions:e.interactions+1}))};return document.addEventListener("click",o),document.addEventListener("keydown",o),()=>{document.removeEventListener("click",o),document.removeEventListener("keydown",o)}},[t,f.interactions]),!t||!a)return null;const b=(e,t)=>"cpu"===t&&e>80?"critical":"cpu"===t&&e>60?"warning":"hackLevel"===t&&e>80?"critical":"hackLevel"===t&&e>50?"warning":"";return(0,Er.jsxs)(Fv,{isMaximized:u,width:n.width,height:l?40:n.height,top:p.top,left:p.left,drag:!u&&!r,dragMomentum:!1,dragElastic:.1,onDrag:(e,t)=>{u||r||h(e=>({top:e.top+t.delta.y,left:e.left+t.delta.x}))},children:[!u&&(0,Er.jsx)(mv,{handles:["se","sw","ne","nw","e","w","s","n"],onResize:(e,t)=>{const r={...p},i={...n};if(o(e,t),"n"===t||"ne"===t||"nw"===t){const t=e.clientY,n=e=>{const n=e.clientY-t,o=Math.max(400,i.height-n),a=i.height-o;h(e=>({...e,top:r.top+a}))},o=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",o)}}}),(0,Er.jsxs)(Wv,{children:[(0,Er.jsxs)("div",{className:"title",children:[(0,Er.jsx)("span",{className:"skull",children:"\ud83d\udc80"}),"CPU",(0,Er.jsx)("div",{className:"status-led"})]}),(0,Er.jsxs)("div",{className:"controls",children:[(0,Er.jsx)("div",{className:"control minimize",onClick:()=>{c(!l),l||d(!1)}}),(0,Er.jsx)("div",{className:"control maximize",onClick:()=>{l||d(!u)}}),(0,Er.jsx)("div",{className:"control close",onClick:()=>s(!1)})]})]}),!l&&(0,Er.jsxs)(Yv,{isMinimized:l,children:[(0,Er.jsxs)(Vv,{children:[(0,Er.jsx)("span",{className:"label",children:"Render FPS:"}),(0,Er.jsx)("span",{className:"value "+(f.fps<30?"critical":""),children:f.fps})]}),(0,Er.jsxs)(Vv,{children:[(0,Er.jsx)("span",{className:"label",children:"Memory Use:"}),(0,Er.jsxs)("span",{className:"value",children:[f.memory,(0,Er.jsx)("span",{className:"unit",children:"MB"})]})]}),(0,Er.jsxs)(Vv,{children:[(0,Er.jsx)("span",{className:"label",children:"Session Time:"}),(0,Er.jsx)("span",{className:"value",children:(w=f.uptime,`${Math.floor(w/60)}:${(w%60).toString().padStart(2,"0")}`)})]}),(0,Er.jsxs)(Vv,{children:[(0,Er.jsx)("span",{className:"label",children:"Commands:"}),(0,Er.jsx)("span",{className:"value",children:f.interactions})]}),(0,Er.jsxs)(Vv,{children:[(0,Er.jsx)("span",{className:"label",children:"CPU Load:"}),(0,Er.jsxs)("span",{className:`value ${b(f.cpuUsage,"cpu")}`,children:[f.cpuUsage,(0,Er.jsx)("span",{className:"unit",children:"%"})]})]}),(0,Er.jsx)(Uv,{children:(0,Er.jsx)("div",{className:"fill",style:{width:`${f.cpuUsage}%`}})}),(0,Er.jsxs)(Vv,{children:[(0,Er.jsx)("span",{className:"label",children:"Hack Level:"}),(0,Er.jsxs)("span",{className:`value ${b(f.hackLevel,"hackLevel")}`,children:[f.hackLevel,(0,Er.jsx)("span",{className:"unit",children:"%"})]})]}),(0,Er.jsx)(Uv,{children:(0,Er.jsx)("div",{className:"fill",style:{width:`${f.hackLevel}%`}})}),(0,Er.jsxs)(Vv,{children:[(0,Er.jsx)("span",{className:"label",children:"Ping:"}),(0,Er.jsxs)("span",{className:"value",children:[f.networkLatency,(0,Er.jsx)("span",{className:"unit",children:"ms"})]})]}),(0,Er.jsxs)(Vv,{children:[(0,Er.jsx)("span",{className:"label",children:"Code Read:"}),(0,Er.jsx)("span",{className:"value",children:f.linesOfCode.toLocaleString()})]}),(0,Er.jsxs)(Vv,{children:[(0,Er.jsx)("span",{className:"label",children:"Exploits:"}),(0,Er.jsx)("span",{className:"value",children:f.exploitsFound})]}),(0,Er.jsxs)(Vv,{children:[(0,Er.jsx)("span",{className:"label",children:"Breaches:"}),(0,Er.jsx)("span",{className:"value",children:f.systemBreaches})]}),(0,Er.jsxs)(Vv,{children:[(0,Er.jsx)("span",{className:"label",children:"Data Packets:"}),(0,Er.jsx)("span",{className:"value",children:f.dataPackets.toLocaleString()})]}),(0,Er.jsxs)(Hv,{children:[(0,Er.jsxs)("div",{className:"info-line",children:["os: ",g.os,(0,Er.jsx)("div",{className:"status-indicator"})]}),(0,Er.jsxs)("div",{className:"info-line",children:["browser: ",g.browser]}),(0,Er.jsxs)("div",{className:"info-line",children:["resolution: ",g.screen]}),(0,Er.jsxs)("div",{className:"info-line",children:["network: ",g.connection]}),(0,Er.jsxs)("div",{className:"info-line",children:["kernel: ",g.kernel]}),(0,Er.jsxs)("div",{className:"info-line",children:["shell: ",g.shell]}),(0,Er.jsxs)("div",{className:"info-line",style:{color:(()=>{switch(y){case"HIGH":return"#ff4444";case"MED":return"#ffaa00";default:return"#00ff00"}})(),fontWeight:"bold"},children:["threat_level: ",y]})]})]})]});var w}const Kv=(0,i.forwardRef)((e,t)=>{let{gameMode:n}=e;const[r,o]=(0,i.useState)(!1);return(0,i.useImperativeHandle)(t,()=>({show:()=>o(!0),hide:()=>o(!1),toggle:()=>o(e=>!e),isVisible:()=>r})),(0,Er.jsx)(Xv,{gameMode:n&&r})}),Gv=Kv,Qv=Ln`
  0%, 100% { box-shadow: 0 0 10px rgba(0, 255, 0, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 0, 0.8); }
`,qv=Mn(Kg.div)`
  position: fixed;
  right: 20px;
  top: 50vh;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid #00ff00;
  border-radius: 15px;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 100;
  height: auto;
  max-height: 90vh;
  box-shadow:
    0 0 30px rgba(0, 255, 0, 0.3),
    inset 0 0 20px rgba(0, 255, 0, 0.1);

  @media (max-width: 768px) {
    right: 10px;
    top: 50vh;
    padding: 12px 8px;
    gap: 8px;
    max-height: 95vh;
  }
`,Jv=Mn(Kg.div)`
  width: 60px;
  height: 60px;
  background: linear-gradient(145deg, rgba(0, 255, 0, 0.1), rgba(0, 255, 0, 0.2));
  border: 2px solid #00ff00;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-family: 'Courier New', monospace;

  &:hover {
    transform: scale(1.2) translateX(-10px);
    animation: ${Qv} 1s infinite;
    background: linear-gradient(145deg, rgba(0, 255, 0, 0.2), rgba(0, 255, 0, 0.3));
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  .icon {
    font-size: 24px;
    margin-bottom: 2px;
  }

  .label {
    font-size: 8px;
    color: #00ff00;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-shadow: 0 0 5px rgba(0, 255, 0, 0.8);
  }

  ${e=>e.isActive&&"\n    background: linear-gradient(145deg, rgba(0, 255, 0, 0.3), rgba(0, 255, 0, 0.4));\n    box-shadow: 0 0 15px rgba(0, 255, 0, 0.6);\n\n    &::after {\n      content: '';\n      position: absolute;\n      left: -5px;\n      top: 50%;\n      transform: translateY(-50%);\n      width: 4px;\n      height: 4px;\n      background: #00ff00;\n      border-radius: 50%;\n      box-shadow: 0 0 8px rgba(0, 255, 0, 0.8);\n    }\n  "}

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;

    .icon {
      font-size: 20px;
    }

    .label {
      font-size: 7px;
    }
  }
`;function Zv(e){let{onTerminalClick:t,onActivityClick:n,onCpuClick:r,onNotepadClick:i,terminalVisible:o,activityVisible:a,cpuVisible:s,notepadVisible:l}=e;return(0,Er.jsxs)(qv,{initial:{x:100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.5,delay:1},children:[(0,Er.jsxs)(Jv,{isActive:o,onClick:t,whileHover:{scale:1.2,x:-10},whileTap:{scale:.9},children:[(0,Er.jsx)("div",{className:"icon",children:"\ud83d\udcbb"}),(0,Er.jsx)("div",{className:"label",children:"Terminal"})]}),(0,Er.jsxs)(Jv,{isActive:a,onClick:n,whileHover:{scale:1.2,x:-10},whileTap:{scale:.9},children:[(0,Er.jsx)("div",{className:"icon",children:"\u26a1"}),(0,Er.jsx)("div",{className:"label",children:"Activity"})]}),(0,Er.jsxs)(Jv,{isActive:s,onClick:r,whileHover:{scale:1.2,x:-10},whileTap:{scale:.9},children:[(0,Er.jsx)("div",{className:"icon",children:"\ud83d\udc80"}),(0,Er.jsx)("div",{className:"label",children:"CPU"})]}),(0,Er.jsxs)(Jv,{isActive:l,onClick:i,whileHover:{scale:1.2,x:-10},whileTap:{scale:.9},children:[(0,Er.jsx)("div",{className:"icon",children:"\ud83d\udcdd"}),(0,Er.jsx)("div",{className:"label",children:"Notepad"})]})]})}const ey=Ln`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`,ty=Ln`
  0% { background-position: 0 0; }
  100% { background-position: 0 20px; }
`,ny=Ln`
  0%, 100% { text-shadow: 0 0 5px #00ff41, 0 0 10px #00ff41; }
  50% { text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41; }
`,ry=Ln`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`,iy=Mn(Kg.div)`
  position: fixed;
  top: ${e=>e.top||100}px;
  left: ${e=>e.left||100}px;
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
  background: linear-gradient(145deg, #000000 0%, #0a0a0a 50%, #000000 100%);
  border: 2px solid #00ff41;
  border-radius: 8px;
  box-shadow:
    0 0 30px rgba(0, 255, 65, 0.4),
    inset 0 0 50px rgba(0, 255, 65, 0.05);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  font-family: 'Courier New', 'Monaco', 'Menlo', monospace;
  overflow: hidden;

  /* Scanlines effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 65, 0.03) 2px,
      rgba(0, 255, 65, 0.03) 4px
    );
    pointer-events: none;
    z-index: 1;
    animation: ${ty} 0.1s linear infinite;
  }
`,oy=Mn.div`
  background: linear-gradient(90deg, #001100, #002200, #001100);
  border-bottom: 1px solid #00ff41;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #00ff41;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: move;
  position: relative;
  z-index: 2;

  .title-left {
    display: flex;
    align-items: center;
    gap: 8px;

    .terminal-icon {
      animation: ${ny} 2s ease-in-out infinite;
    }

    .title-text {
      animation: ${ey} 3s ease-in-out infinite;
    }
  }

  .title-right {
    display: flex;
    gap: 4px;
  }
`,ay=Mn.button`
  background: transparent;
  border: 1px solid #00ff41;
  color: #00ff41;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #00ff41;
    color: #000;
    box-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
  }

  &.close:hover {
    background: #ff4444;
    border-color: #ff4444;
    color: #000;
  }

  &.minimize:hover {
    background: #ffaa00;
    border-color: #ffaa00;
    color: #000;
  }
`,sy=Mn.div`
  background: #000;
  border-top: 1px solid #00ff41;
  padding: 4px 12px;
  color: #00ff41;
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;

  .status-left {
    display: flex;
    gap: 15px;
  }

  .cursor-blink {
    animation: ${ry} 1s infinite;
  }
`,ly=Mn.textarea`
  flex: 1;
  background: transparent;
  border: none;
  color: #00ff41;
  font-family: 'Courier New', 'Monaco', 'Menlo', monospace;
  font-size: 14px;
  padding: 15px;
  resize: none;
  outline: none;
  position: relative;
  z-index: 2;
  line-height: 1.4;

  &::placeholder {
    color: #004d1a;
    font-style: italic;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #000;
    border-left: 1px solid #333;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #00ff41, #00cc33);
    border-radius: 0;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #00cc33, #009900);
  }
`,cy=e=>{let{isVisible:t,onClose:n,onMinimize:r,isMinimized:o}=e;const{size:a,isResizing:s,startResize:l}=dv(400,300,300,200,800,600),[c,u]=(0,i.useState)(""),[d,p]=(0,i.useState)({x:150,y:150}),[h,f]=(0,i.useState)(!1),[m,g]=(0,i.useState)({x:0,y:0}),[v,y]=(0,i.useState)(new Date),x=(0,i.useRef)(null),b=(0,i.useRef)(null);(0,i.useEffect)(()=>{const e=localStorage.getItem("hacker-notepad-content"),t=localStorage.getItem("hacker-notepad-position");e&&u(e),t&&p(JSON.parse(t))},[]),(0,i.useEffect)(()=>{const e=setTimeout(()=>{localStorage.setItem("hacker-notepad-content",c),y(new Date)},1e3);return()=>clearTimeout(e)},[c]),(0,i.useEffect)(()=>{localStorage.setItem("hacker-notepad-position",JSON.stringify(d))},[d]);const w=e=>{h&&p({x:e.clientX-m.x,y:e.clientY-m.y})},S=()=>{f(!1)};(0,i.useEffect)(()=>(h&&(document.addEventListener("mousemove",w),document.addEventListener("mouseup",S)),()=>{document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",S)}),[h,m]);const k=()=>{if(!x.current)return{line:1,col:1};const e=x.current,t=c.substring(0,e.selectionStart).split("\n");return{line:t.length,col:t[t.length-1].length+1}};return t?(0,Er.jsxs)(iy,{ref:b,width:a.width,height:a.height,top:d.y,left:d.x,initial:{opacity:0,scale:.8},animate:{opacity:o?.3:1,scale:o?.8:1,height:o?40:a.height},transition:{duration:.3,ease:"easeInOut"},drag:!1,children:[(0,Er.jsxs)(oy,{onMouseDown:e=>{if(e.target.closest(".title-right")||s)return;f(!0);const t=b.current.getBoundingClientRect();g({x:e.clientX-t.left,y:e.clientY-t.top})},children:[(0,Er.jsxs)("div",{className:"title-left",children:[(0,Er.jsx)(ar,{className:"terminal-icon"}),(0,Er.jsx)("span",{className:"title-text",children:"notepad.exe"})]}),(0,Er.jsxs)("div",{className:"title-right",children:[(0,Er.jsx)(ay,{onClick:()=>{localStorage.setItem("hacker-notepad-content",c),y(new Date);const e=new Blob([c],{type:"text/plain"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=`hacker-notes-${(new Date).toISOString().split("T")[0]}.txt`,n.click(),URL.revokeObjectURL(t)},title:"Save & Download",children:(0,Er.jsx)(cr,{})}),(0,Er.jsx)(ay,{className:"minimize",onClick:r,title:"Minimize",children:(0,Er.jsx)(pr,{})}),(0,Er.jsx)(ay,{className:"close",onClick:n,title:"Close",children:(0,Er.jsx)(or,{})})]})]}),!o&&(0,Er.jsxs)(Er.Fragment,{children:[(0,Er.jsx)(ly,{ref:x,value:c,onChange:e=>u(e.target.value),placeholder:"// Enter your hacker notes here...\n// System access logs, exploit findings, network mappings...\n// All data is encrypted and stored locally. > initialize_session()\n> accessing_mainframe...\n> connection_established \u2713",spellCheck:!1}),(0,Er.jsxs)(sy,{children:[(0,Er.jsxs)("div",{className:"status-left",children:[(0,Er.jsxs)("span",{children:["LN ",k().line,", COL ",k().col]}),(0,Er.jsxs)("span",{children:["LINES: ",c.split("\n").length]}),(0,Er.jsxs)("span",{children:["CHARS: ",c.length]})]}),(0,Er.jsxs)("div",{children:[(0,Er.jsxs)("span",{children:["LAST_SAVED: ",v.toLocaleTimeString()]}),(0,Er.jsx)("span",{className:"cursor-blink",children:" \u2588"})]})]}),(0,Er.jsx)(fv,{onMouseDown:l})]})]}):null},uy=Mn.div`
  display: flex;
  position: relative;
  min-height: 100vh;
`,dy=Mn.div`
  width: ${e=>e.width}%;
  padding: 0 20px 0 24px;
  position: fixed;
  height: 100vh;
  left: 0;
  background: ${e=>{let{theme:t}=e;return t.colors.headerBackground}};
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  border-right: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  z-index: 10;
  transition: background 0.4s ease;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: 900px) {
    display: none;
  }
`,py=Mn.div`
  position: fixed;
  top: 0;
  left: ${e=>e.width}%;
  width: 12px;
  height: 100vh;
  cursor: ew-resize;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  .handle-bar {
    width: 2px;
    height: 36px;
    background: ${e=>{let{theme:t}=e;return t.colors.primary}}70;
    border-radius: 1px;
    transition: all 0.2s;
  }

  &:hover .handle-bar {
    background: ${e=>{let{theme:t}=e;return t.colors.primary}};
    height: 52px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`,hy=Mn.div`
  margin-left: ${e=>e.width}%;
  flex: 1;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  max-width: ${e=>100-e.width}vw;

  @media (max-width: 900px) {
    margin-left: 0;
    max-width: 100vw;
  }
`,fy=Mn.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${e=>e.progress}%;
  height: 1.5px;
  background: linear-gradient(90deg, ${e=>{let{theme:t}=e;return t.colors.primary}}, ${e=>{let{theme:t}=e;return t.colors.primaryHover}});
  z-index: 2000;
  transition: width 0.08s linear;
  border-radius: 0 1px 1px 0;
`,my=Mn(Kg.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent; /* Remove the color overlay to preserve original colors */
  pointer-events: none;
  z-index: 1;


`,gy=Mn(Kg.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 450px;
  height: 60vh;
  background: linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%);
  border: 3px solid #00ff41;
  border-radius: 8px;
  box-shadow:
    0 0 40px rgba(0, 255, 65, 0.3),
    inset 0 0 100px rgba(0, 255, 65, 0.05);
  z-index: 9999;
  padding: 0;
  overflow-y: auto;
  font-family: 'Courier New', 'Monaco', 'Menlo', monospace;
  color: #00ff41;

  /* Scanlines effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 65, 0.03) 2px,
      rgba(0, 255, 65, 0.03) 4px
    );
    pointer-events: none;
    z-index: 1;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #000;
    border-left: 1px solid #333;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #00ff41, #00cc33);
    border-radius: 0;
    border: 1px solid #00ff41;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #00cc33, #009900);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`,vy=Mn(Kg.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9998;
`,yy=Mn.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #000;
  border: 1px solid #ff4444;
  color: #ff4444;
  width: 35px;
  height: 25px;
  border-radius: 0;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  text-shadow: 0 0 5px #ff4444;
  box-shadow:
    0 0 10px rgba(255, 68, 68, 0.3),
    inset 0 0 10px rgba(255, 68, 68, 0.1);

  &:hover {
    background: #ff4444;
    color: #000;
    box-shadow:
      0 0 20px #ff4444,
      inset 0 0 20px rgba(0, 0, 0, 0.3);
    text-shadow: none;
  }

  &:active {
    transform: scale(0.95);
  }
`;const xy=function(){const[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(22),[o,a]=(0,i.useState)(!1),[s,l]=(0,i.useState)(!1),[c,u]=(0,i.useState)(!1),[d,p]=(0,i.useState)(!0),[h,f]=(0,i.useState)(0),[m,g]=(0,i.useState)(""),[v,y]=(0,i.useState)(!1),[x,b]=(0,i.useState)(!0),w=i.useRef(),S=i.useRef(),k=i.useRef(),[C,E]=(0,i.useState)({terminal:!1,activity:!1,cpu:!1,notepad:!1}),[j,T]=(0,i.useState)(!1),[$,M]=(0,i.useState)(!1),z=()=>{w.current&&(w.current.toggle(),E(e=>({...e,terminal:!e.terminal})))},N=()=>{S.current&&(S.current.toggle(),E(e=>({...e,activity:!e.activity})))},R=()=>{k.current&&(k.current.toggle(),E(e=>({...e,cpu:!e.cpu})))},D=()=>{T(!0),M(!1),E(e=>({...e,notepad:!0}))},L=()=>{T(!1),E(e=>({...e,notepad:!1}))},A=()=>{M(!$)};(0,i.useEffect)(()=>{const e=()=>{t(window.innerWidth<=900)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,i.useEffect)(()=>{const e=()=>{const e=window.scrollY,t=document.documentElement.scrollHeight-window.innerHeight,n=t>0?e/t*100:0;f(Math.min(n,100))};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,i.useEffect)(()=>{const e=()=>V();return document.addEventListener("toggleGameMode",e),()=>document.removeEventListener("toggleGameMode",e)},[o]),(0,i.useEffect)(()=>{const e=setInterval(()=>{b(e=>!e)},500);return()=>clearInterval(e)},[]),(0,i.useEffect)(()=>{o&&setTimeout(()=>{z(),setTimeout(()=>{w.current&&w.current.maximize&&w.current.maximize()},100)},2e3)},[o]);const I=(e,t)=>{y(!0),g("");let n=0;const r=setInterval(()=>{n<e.length?(g(e.slice(0,n+1)),n++):(clearInterval(r),setTimeout(()=>{y(!1),t&&t()},500))},50)},O=i.useRef(!1),_=(0,i.useCallback)(e=>{if(!O.current)return;const t=e.clientX/window.innerWidth*100,n=Math.max(18,Math.min(28,t));r(Math.round(10*n)/10)},[]),B=(0,i.useCallback)(()=>{O.current=!1,window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",B),document.body.style.cursor="",document.body.style.userSelect=""},[_]),F=()=>{O.current=!0,document.body.style.cursor="ew-resize",document.body.style.userSelect="none",window.addEventListener("mousemove",_),window.addEventListener("mouseup",B)},V=()=>{window.playSoundEffect&&window.playSoundEffect.click(),o?u(!0):l(!0)},U=()=>{window.playSoundEffect&&window.playSoundEffect.success(),I("sudo activate --force",()=>{a(!0),l(!1),g("")})},H=()=>{I("sudo abort",()=>{l(!1),g("")})},W=()=>{I("sudo shutdown --dev-mode",()=>{a(!1),u(!1),g("")})},Y=()=>{I("sudo cancel --stay-active",()=>{u(!1),g("")})};return(0,Er.jsx)(Tr,{gameMode:o,children:t=>(0,Er.jsx)(xn,{theme:t,children:(0,Er.jsxs)(P,{children:[(0,Er.jsx)(An,{}),(0,Er.jsx)(fy,{progress:h}),o&&(0,Er.jsx)(my,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1}}),o&&(0,Er.jsxs)(Er.Fragment,{children:[(0,Er.jsx)(Qg,{gameMode:o}),(0,Er.jsx)(uv,{gameMode:o}),(0,Er.jsx)(Av,{ref:S,gameMode:o}),(0,Er.jsx)(Gv,{ref:k,gameMode:o}),(0,Er.jsx)(Ev,{ref:w,gameMode:o,onActivityClick:N,onCpuClick:R,onNotepadClick:D}),(0,Er.jsx)(cy,{isVisible:j,onClose:L,onMinimize:A,isMinimized:$}),(0,Er.jsx)(Zv,{onTerminalClick:z,onActivityClick:N,onCpuClick:R,onNotepadClick:D,terminalVisible:C.terminal,activityVisible:C.activity,cpuVisible:C.cpu,notepadVisible:C.notepad})]}),d&&(0,Er.jsx)(Tl,{onFinish:()=>p(!1)}),e&&(0,Er.jsx)(vl,{}),s&&(0,Er.jsxs)(Er.Fragment,{children:[(0,Er.jsx)(vy,{initial:{opacity:0},animate:{opacity:1},onClick:()=>l(!1)}),(0,Er.jsxs)(gy,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{duration:.4,ease:"easeInOut"},children:[(0,Er.jsx)(yy,{onClick:()=>l(!1),children:"\xd7"}),(0,Er.jsxs)("div",{style:{background:"#111",padding:"15px 20px",borderBottom:"2px solid #00ff41",marginBottom:"20px",position:"relative",zIndex:2},children:[(0,Er.jsx)("div",{style:{color:"#00ff41",fontSize:"14px",fontFamily:"Courier New, monospace",marginBottom:"8px",textShadow:"0 0 10px #00ff41"},children:"root@hackermachine:~$"}),(0,Er.jsx)("div",{style:{color:"#ff4444",fontSize:"12px",fontFamily:"Courier New, monospace",textTransform:"uppercase",letterSpacing:"1px",textShadow:"0 0 8px #ff4444",marginBottom:"5px"},children:"[!] SECURITY BREACH DETECTED"}),(0,Er.jsx)("div",{style:{color:"#ffaa00",fontSize:"14px",fontFamily:"Courier New, monospace",fontWeight:"bold",textShadow:"0 0 8px #ffaa00"},children:"ENABLING DEV_MODE..."})]}),(0,Er.jsx)("div",{style:{background:"#000",border:"1px solid #333",margin:"0 20px 20px 20px",padding:"10px 15px",fontFamily:"Courier New, monospace",fontSize:"14px",minHeight:"40px",position:"relative",zIndex:2},children:(0,Er.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,Er.jsx)("span",{style:{color:"#00ff41",marginRight:"8px"},children:"root@hackermachine:~$"}),(0,Er.jsx)("span",{style:{color:"#ffaa00"},children:m}),(0,Er.jsx)("span",{style:{color:"#00ff41",opacity:x&&!v?1:0,marginLeft:"2px",animation:v?"none":"blink 1s infinite"},children:"\u2588"})]})}),(0,Er.jsxs)("div",{style:{padding:"0 20px",position:"relative",zIndex:2},children:[(0,Er.jsx)("div",{style:{color:"#00ff41",fontSize:"16px",fontFamily:"Courier New, monospace",marginBottom:"15px",textShadow:"0 0 10px #00ff41",borderLeft:"3px solid #00ff41",paddingLeft:"15px",textTransform:"uppercase",letterSpacing:"1px"},children:"> SYSTEM_UPDATES_v2.1.0"}),(0,Er.jsxs)("div",{style:{background:"#0a0a0a",border:"1px solid #333",padding:"15px",marginBottom:"20px",fontFamily:"Courier New, monospace",fontSize:"13px",lineHeight:"1.8"},children:[(0,Er.jsx)("div",{style:{color:"#666",marginBottom:"10px"},children:"\u250c\u2500 EXECUTION LOG \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510"}),(0,Er.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,Er.jsx)("span",{style:{color:"#ffaa00"},children:"\u2588"}),(0,Er.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[INIT]"}),(0,Er.jsx)("span",{style:{color:"#00ff41"},children:"Draggable terminal + real-time stats"})]}),(0,Er.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,Er.jsx)("span",{style:{color:"#ffaa00"},children:"\u2588"}),(0,Er.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[LOAD]"}),(0,Er.jsx)("span",{style:{color:"#00ff41"},children:"Interactive molecular particle network"})]}),(0,Er.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,Er.jsx)("span",{style:{color:"#ffaa00"},children:"\u2588"}),(0,Er.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[EXEC]"}),(0,Er.jsx)("span",{style:{color:"#00ff41"},children:"Side panel animation system"})]}),(0,Er.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,Er.jsx)("span",{style:{color:"#ffaa00"},children:"\u2588"}),(0,Er.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[RUN]"}),(0,Er.jsx)("span",{style:{color:"#00ff41"},children:"Functional terminal with custom commands"})]}),(0,Er.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,Er.jsx)("span",{style:{color:"#ffaa00"},children:"\u2588"}),(0,Er.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[FX]"}),(0,Er.jsx)("span",{style:{color:"#00ff41"},children:"Enhanced sparkle effects + cursor trails"})]}),(0,Er.jsxs)("div",{style:{marginBottom:"10px"},children:[(0,Er.jsx)("span",{style:{color:"#ffaa00"},children:"\u2588"}),(0,Er.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[EASTEREGG]"}),(0,Er.jsx)("span",{style:{color:"#00ff41"},children:"Konami code easter egg support"})]}),(0,Er.jsx)("div",{style:{color:"#666"},children:"\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518"})]})]}),(0,Er.jsxs)("div",{style:{position:"absolute",bottom:"20px",left:"20px",right:"20px",background:"#111",border:"1px solid #333",padding:"15px",zIndex:2},children:[(0,Er.jsx)("div",{style:{color:"#666",fontSize:"11px",fontFamily:"Courier New, monospace",marginBottom:"10px",textAlign:"center"},children:"\u250c\u2500 AUTHORIZATION REQUIRED \u2500\u2510"}),(0,Er.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,Er.jsx)("button",{onClick:U,style:{background:"linear-gradient(180deg, #003300, #001a00)",border:"1px solid #00ff41",color:"#00ff41",padding:"10px 20px",fontFamily:"Courier New, monospace",fontSize:"12px",fontWeight:"bold",cursor:"pointer",borderRadius:"0",textTransform:"uppercase",boxShadow:"inset 0 1px 0 rgba(0, 255, 65, 0.2), 0 0 10px rgba(0, 255, 65, 0.3)",transition:"all 0.2s ease",flex:"1",textShadow:"0 0 5px #00ff41"},onMouseEnter:e=>{e.target.style.background="linear-gradient(180deg, #00ff41, #00cc33)",e.target.style.color="#000",e.target.style.boxShadow="0 0 20px #00ff41",e.target.style.textShadow="none"},onMouseLeave:e=>{e.target.style.background="linear-gradient(180deg, #003300, #001a00)",e.target.style.color="#00ff41",e.target.style.boxShadow="inset 0 1px 0 rgba(0, 255, 65, 0.2), 0 0 10px rgba(0, 255, 65, 0.3)",e.target.style.textShadow="0 0 5px #00ff41"},children:"> EXECUTE"}),(0,Er.jsx)("button",{onClick:H,style:{background:"linear-gradient(180deg, #330000, #1a0000)",border:"1px solid #ff4444",color:"#ff4444",padding:"10px 20px",fontFamily:"Courier New, monospace",fontSize:"12px",fontWeight:"bold",cursor:"pointer",borderRadius:"0",textTransform:"uppercase",boxShadow:"inset 0 1px 0 rgba(255, 68, 68, 0.2), 0 0 10px rgba(255, 68, 68, 0.3)",transition:"all 0.2s ease",flex:"1",textShadow:"0 0 5px #ff4444"},onMouseEnter:e=>{e.target.style.background="linear-gradient(180deg, #ff4444, #cc3333)",e.target.style.color="#000",e.target.style.boxShadow="0 0 20px #ff4444",e.target.style.textShadow="none"},onMouseLeave:e=>{e.target.style.background="linear-gradient(180deg, #330000, #1a0000)",e.target.style.color="#ff4444",e.target.style.boxShadow="inset 0 1px 0 rgba(255, 68, 68, 0.2), 0 0 10px rgba(255, 68, 68, 0.3)",e.target.style.textShadow="0 0 5px #ff4444"},children:"> ABORT"})]})]})]})]}),c&&(0,Er.jsxs)(Er.Fragment,{children:[(0,Er.jsx)(vy,{initial:{opacity:0},animate:{opacity:1},onClick:()=>u(!1)}),(0,Er.jsxs)(gy,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{duration:.4,ease:"easeInOut"},children:[(0,Er.jsx)(yy,{onClick:()=>u(!1),children:"\xd7"}),(0,Er.jsxs)("div",{style:{background:"#111",padding:"15px 20px",borderBottom:"2px solid #ff4444",marginBottom:"20px",position:"relative",zIndex:2},children:[(0,Er.jsx)("div",{style:{color:"#00ff41",fontSize:"14px",fontFamily:"Courier New, monospace",marginBottom:"8px",textShadow:"0 0 10px #00ff41"},children:"root@hackermachine:~$"}),(0,Er.jsx)("div",{style:{color:"#ff4444",fontSize:"12px",fontFamily:"Courier New, monospace",textTransform:"uppercase",letterSpacing:"1px",textShadow:"0 0 8px #ff4444",marginBottom:"5px"},children:"[!] DEV MODE SHUTDOWN REQUEST"}),(0,Er.jsx)("div",{style:{color:"#ffaa00",fontSize:"14px",fontFamily:"Courier New, monospace",fontWeight:"bold",textShadow:"0 0 8px #ffaa00"},children:"CONFIRMING EXIT..."})]}),(0,Er.jsx)("div",{style:{background:"#000",border:"1px solid #333",margin:"0 20px 20px 20px",padding:"10px 15px",fontFamily:"Courier New, monospace",fontSize:"14px",minHeight:"40px",position:"relative",zIndex:2},children:(0,Er.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,Er.jsx)("span",{style:{color:"#00ff41",marginRight:"8px"},children:"root@hackermachine:~$"}),(0,Er.jsx)("span",{style:{color:"#ffaa00"},children:m}),(0,Er.jsx)("span",{style:{color:"#00ff41",opacity:x&&!v?1:0,marginLeft:"2px",animation:v?"none":"blink 1s infinite"},children:"\u2588"})]})}),(0,Er.jsxs)("div",{style:{padding:"0 20px",position:"relative",zIndex:2},children:[(0,Er.jsx)("div",{style:{color:"#ff4444",fontSize:"16px",fontFamily:"Courier New, monospace",marginBottom:"15px",textShadow:"0 0 10px #ff4444",borderLeft:"3px solid #ff4444",paddingLeft:"15px",textTransform:"uppercase",letterSpacing:"1px"},children:"> SHUTDOWN_CONFIRMATION"}),(0,Er.jsxs)("div",{style:{background:"#0a0a0a",border:"1px solid #333",padding:"15px",marginBottom:"20px",fontFamily:"Courier New, monospace",fontSize:"13px",lineHeight:"1.8"},children:[(0,Er.jsx)("div",{style:{color:"#666",marginBottom:"10px"},children:"\u250c\u2500 ACTIVE PROCESSES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510"}),(0,Er.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,Er.jsx)("span",{style:{color:"#ff4444"},children:"\u25cf"}),(0,Er.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[TERM]"}),(0,Er.jsx)("span",{style:{color:"#00ff41"},children:"Draggable terminal interface"})]}),(0,Er.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,Er.jsx)("span",{style:{color:"#ff4444"},children:"\u25cf"}),(0,Er.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[MOLC]"}),(0,Er.jsx)("span",{style:{color:"#00ff41"},children:"Molecular particle network"})]}),(0,Er.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,Er.jsx)("span",{style:{color:"#ff4444"},children:"\u25cf"}),(0,Er.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[EFCT]"}),(0,Er.jsx)("span",{style:{color:"#00ff41"},children:"Enhanced visual effects"})]}),(0,Er.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,Er.jsx)("span",{style:{color:"#ff4444"},children:"\u25cf"}),(0,Er.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[STATS]"}),(0,Er.jsx)("span",{style:{color:"#00ff41"},children:"Real-time system monitoring"})]}),(0,Er.jsxs)("div",{style:{marginBottom:"10px"},children:[(0,Er.jsx)("span",{style:{color:"#ff4444"},children:"\u25cf"}),(0,Er.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[KCODE]"}),(0,Er.jsx)("span",{style:{color:"#00ff41"},children:"Konami code listener"})]}),(0,Er.jsx)("div",{style:{color:"#666"},children:"\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518"})]})]}),(0,Er.jsxs)("div",{style:{position:"absolute",bottom:"20px",left:"20px",right:"20px",background:"#111",border:"1px solid #333",padding:"15px",zIndex:2},children:[(0,Er.jsx)("div",{style:{color:"#666",fontSize:"11px",fontFamily:"Courier New, monospace",marginBottom:"10px",textAlign:"center"},children:"\u250c\u2500 SHUTDOWN CONFIRMATION \u2500\u2510"}),(0,Er.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,Er.jsx)("button",{onClick:W,style:{background:"linear-gradient(180deg, #330000, #1a0000)",border:"1px solid #ff4444",color:"#ff4444",padding:"10px 20px",fontFamily:"Courier New, monospace",fontSize:"12px",fontWeight:"bold",cursor:"pointer",borderRadius:"0",textTransform:"uppercase",boxShadow:"inset 0 1px 0 rgba(255, 68, 68, 0.2), 0 0 10px rgba(255, 68, 68, 0.3)",transition:"all 0.2s ease",flex:"1",textShadow:"0 0 5px #ff4444"},onMouseEnter:e=>{e.target.style.background="linear-gradient(180deg, #ff4444, #cc3333)",e.target.style.color="#000",e.target.style.boxShadow="0 0 20px #ff4444",e.target.style.textShadow="none"},onMouseLeave:e=>{e.target.style.background="linear-gradient(180deg, #330000, #1a0000)",e.target.style.color="#ff4444",e.target.style.boxShadow="inset 0 1px 0 rgba(255, 68, 68, 0.2), 0 0 10px rgba(255, 68, 68, 0.3)",e.target.style.textShadow="0 0 5px #ff4444"},children:"> SHUTDOWN"}),(0,Er.jsx)("button",{onClick:Y,style:{background:"linear-gradient(180deg, #003300, #001a00)",border:"1px solid #00ff41",color:"#00ff41",padding:"10px 20px",fontFamily:"Courier New, monospace",fontSize:"12px",fontWeight:"bold",cursor:"pointer",borderRadius:"0",textTransform:"uppercase",boxShadow:"inset 0 1px 0 rgba(0, 255, 65, 0.2), 0 0 10px rgba(0, 255, 65, 0.3)",transition:"all 0.2s ease",flex:"1",textShadow:"0 0 5px #00ff41"},onMouseEnter:e=>{e.target.style.background="linear-gradient(180deg, #00ff41, #00cc33)",e.target.style.color="#000",e.target.style.boxShadow="0 0 20px #00ff41",e.target.style.textShadow="none"},onMouseLeave:e=>{e.target.style.background="linear-gradient(180deg, #003300, #001a00)",e.target.style.color="#00ff41",e.target.style.boxShadow="inset 0 1px 0 rgba(0, 255, 65, 0.2), 0 0 10px rgba(0, 255, 65, 0.3)",e.target.style.textShadow="0 0 5px #00ff41"},children:"> CANCEL"})]})]})]})]}),(0,Er.jsxs)(uy,{children:[!e&&(0,Er.jsxs)(dy,{width:n,"data-panel":"left",as:Kg.div,initial:{x:0},animate:{x:o?`-${n+5}%`:0,opacity:o?0:1},transition:{duration:.6,ease:"easeInOut"},children:[(0,Er.jsx)(Lr,{}),(0,Er.jsx)(Or,{})]}),!e&&(0,Er.jsx)(py,{width:n,onMouseDown:F,as:Kg.div,initial:{opacity:0},animate:{x:o?`-${n+5}%`:0,opacity:o?0:1},transition:{duration:.6,ease:"easeInOut"},children:(0,Er.jsx)("div",{className:"handle-bar"})}),(0,Er.jsx)(hy,{width:e||o?0:n,style:{marginLeft:o?0:`${e?0:n}%`},children:(0,Er.jsx)(qs,{})})]})]})})})};document.addEventListener("keydown",e=>{const t=[...document.querySelectorAll('a, button, [tabindex="0"]')],n=t.indexOf(document.activeElement);if("ArrowDown"===e.key||"ArrowRight"===e.key){t[(n+1)%t.length].focus()}if("ArrowUp"===e.key||"ArrowLeft"===e.key){t[(n-1+t.length)%t.length].focus()}});a.createRoot(document.getElementById("root")).render((0,Er.jsx)(i.StrictMode,{children:(0,Er.jsx)(xy,{})}))})();
//# sourceMappingURL=main.1c7632a2.js.map