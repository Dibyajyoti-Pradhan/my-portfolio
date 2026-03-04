/*! For license information please see main.86108006.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var b=x.prototype=new y;b.constructor=x,m(b,v.prototype),b.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,i)&&!C.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===o[i]&&(o[i]=l[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:k.current}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function $(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===o?"."+P(l,0):o,w(a)?(i="",null!=e&&(i=e.replace(T,"$&/")+"/"),$(a,t,i,"",function(e){return e})):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(T,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var u=o+P(s=e[c],c);l+=$(s,t,i,u,a)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=$(s=s.value,t,i,u=o+P(s,c++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function M(e,t,n){if(null==e)return e;var r=[],i=0;return $(e,r,"","",function(e){return t.call(n,e,i++)}),r}function z(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},R={transition:null},D={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:R,ReactCurrentOwner:k};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=a,t.PureComponent=x,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)S.call(t,c)&&!C.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:z}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>o(l,n))c<i&&0>o(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,h=3,f=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,b(e),!m)if(null!==r(c))m=!0,R(S);else{var t=r(u);null!==t&&D(w,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,y(j),j=-1),f=!0;var o=h;try{for(b(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!$());){var a=p.callback;if("function"===typeof a){p.callback=null,h=p.priorityLevel;var s=a(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?p.callback=s:p===r(c)&&i(c),b(n)}else i(c);p=r(c)}if(null!==p)var l=!0;else{var d=r(u);null!==d&&D(w,d.startTime-n),l=!1}return l}finally{p=null,h=o,f=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,C=!1,E=null,j=-1,T=5,P=-1;function $(){return!(t.unstable_now()-P<T)}function M(){if(null!==E){var e=t.unstable_now();P=e;var n=!0;try{n=E(!0,e)}finally{n?k():(C=!1,E=null)}}else C=!1}if("function"===typeof x)k=function(){x(M)};else if("undefined"!==typeof MessageChannel){var z=new MessageChannel,N=z.port2;z.port1.onmessage=M,k=function(){N.postMessage(null)}}else k=function(){v(M,0)};function R(e){E=e,C||(C=!0,k())}function D(e,n){j=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,R(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:s=o+s,sortIndex:-1},o>a?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(g?(y(j),j=-1):g=!0,D(w,o-a))):(e.sortIndex=s,n(c,e),m||f||(m=!0,R(S))),e},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var c=o[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),i=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},f={};function m(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new m(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new m(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new m(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new m(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new m(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function x(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(f,e)||!d.call(h,e)&&(p.test(e)?f[e]=!0:(h[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)});var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),T=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),N=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var R=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var D=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=D&&e[D]||e["@@iterator"])?e:null}var A,I=Object.assign;function O(e){if(void 0===A)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return"\n"+A+e}var _=!1;function B(e,t){if(!e||_)return"";_=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do{if(a--,0>--s||i[a]!==o[s]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{_=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?O(e):""}function F(e){switch(e.tag){case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1);case 11:return e=B(e.type.render,!1);case 1:return e=B(e.type,!0);default:return""}}function V(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case E:return"Profiler";case C:return"StrictMode";case $:return"Suspense";case M:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case T:return(e.displayName||"Context")+".Consumer";case j:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case z:return null!==(t=e.displayName||null)?t:V(e.type)||"Memo";case N:t=e._payload,e=e._init;try{return V(e(t))}catch(n){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V(t);case 8:return t===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function U(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function W(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=W(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=W(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function X(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=U(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function q(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function J(e,t){q(e,t);var n=U(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,U(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&X(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+U(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:U(n)}}function oe(e,t){var n=U(t.value),r=U(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return ue(e,t)})}:ue);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fe=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(he).forEach(function(e){fe.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]})});var ve=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,Ce=null;function Ee(e){if(e=xi(e)){if("function"!==typeof Se)throw Error(o(280));var t=e.stateNode;t&&(t=wi(t),Se(e.stateNode,e.type,t))}}function je(e){ke?Ce?Ce.push(e):Ce=[e]:ke=e}function Te(){if(ke){var e=ke,t=Ce;if(Ce=ke=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Pe(e,t){return e(t)}function $e(){}var Me=!1;function ze(e,t,n){if(Me)return e(t,n);Me=!0;try{return Pe(e,t,n)}finally{Me=!1,(null!==ke||null!==Ce)&&($e(),Te())}}function Ne(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Re=!1;if(u)try{var De={};Object.defineProperty(De,"passive",{get:function(){Re=!0}}),window.addEventListener("test",De,De),window.removeEventListener("test",De,De)}catch(ue){Re=!1}function Le(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Ae=!1,Ie=null,Oe=!1,_e=null,Be={onError:function(e){Ae=!0,Ie=e}};function Fe(e,t,n,r,i,o,a,s,l){Ae=!1,Ie=null,Le.apply(Be,arguments)}function Ve(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function He(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ue(e){if(Ve(e)!==e)throw Error(o(188))}function We(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ve(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Ue(i),e;if(a===r)return Ue(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=a;break}if(l===r){s=!0,r=i,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=i;break}if(l===r){s=!0,r=a,n=i;break}l=l.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ye(e):null}function Ye(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ye(e);if(null!==t)return t;e=e.sibling}return null}var Ke=i.unstable_scheduleCallback,Xe=i.unstable_cancelCallback,Ge=i.unstable_shouldYield,Qe=i.unstable_requestPaint,qe=i.unstable_now,Je=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,ot=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~i;0!==s?r=dt(s):0!==(o&=a)&&(r=dt(o))}else 0!==(a=n&~i)?r=dt(a):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-at(t)),r|=e[n],t&=~i;return r}function ht(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ft(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var xt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,Ct,Et,jt=!1,Tt=[],Pt=null,$t=null,Mt=null,zt=new Map,Nt=new Map,Rt=[],Dt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":zt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(t.pointerId)}}function At(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=xi(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function It(e){var t=yi(e.target);if(null!==t){var n=Ve(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=He(n)))return e.blockedOn=t,void Et(e.priority,function(){kt(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Ot(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xi(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function _t(e,t,n){Ot(e)&&n.delete(t)}function Bt(){jt=!1,null!==Pt&&Ot(Pt)&&(Pt=null),null!==$t&&Ot($t)&&($t=null),null!==Mt&&Ot(Mt)&&(Mt=null),zt.forEach(_t),Nt.forEach(_t)}function Ft(e,t){e.blockedOn===t&&(e.blockedOn=null,jt||(jt=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Bt)))}function Vt(e){function t(t){return Ft(t,e)}if(0<Tt.length){Ft(Tt[0],e);for(var n=1;n<Tt.length;n++){var r=Tt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pt&&Ft(Pt,e),null!==$t&&Ft($t,e),null!==Mt&&Ft(Mt,e),zt.forEach(t),Nt.forEach(t),n=0;n<Rt.length;n++)(r=Rt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&null===(n=Rt[0]).blockedOn;)It(n),null===n.blockedOn&&Rt.shift()}var Ht=b.ReactCurrentBatchConfig,Ut=!0;function Wt(e,t,n,r){var i=xt,o=Ht.transition;Ht.transition=null;try{xt=1,Kt(e,t,n,r)}finally{xt=i,Ht.transition=o}}function Yt(e,t,n,r){var i=xt,o=Ht.transition;Ht.transition=null;try{xt=4,Kt(e,t,n,r)}finally{xt=i,Ht.transition=o}}function Kt(e,t,n,r){if(Ut){var i=Gt(e,t,n,r);if(null===i)Ur(e,t,r,Xt,n),Lt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Pt=At(Pt,e,t,n,r,i),!0;case"dragenter":return $t=At($t,e,t,n,r,i),!0;case"mouseover":return Mt=At(Mt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return zt.set(o,At(zt.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Nt.set(o,At(Nt.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<Dt.indexOf(e)){for(;null!==i;){var o=xi(i);if(null!==o&&wt(o),null===(o=Gt(e,t,n,r))&&Ur(e,t,r,Xt,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else Ur(e,t,r,null,n)}}var Xt=null;function Gt(e,t,n,r){if(Xt=null,null!==(e=yi(e=we(r))))if(null===(t=Ve(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=He(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xt=e,null}function Qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var qt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,i="value"in qt?qt.value:qt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Zt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,sn,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(cn),dn=I({},cn,{view:0,detail:0}),pn=on(dn),hn=I({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(an=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=an=0,ln=e),an)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),fn=on(hn),mn=on(I({},hn,{dataTransfer:0})),gn=on(I({},dn,{relatedTarget:0})),vn=on(I({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=I({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xn=on(yn),bn=on(I({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function En(){return Cn}var jn=I({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Tn=on(jn),Pn=on(I({},hn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),$n=on(I({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),Mn=on(I({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),zn=I({},hn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nn=on(zn),Rn=[9,13,27,32],Dn=u&&"CompositionEvent"in window,Ln=null;u&&"documentMode"in document&&(Ln=document.documentMode);var An=u&&"TextEvent"in window&&!Ln,In=u&&(!Dn||Ln&&8<Ln&&11>=Ln),On=String.fromCharCode(32),_n=!1;function Bn(e,t){switch(e){case"keyup":return-1!==Rn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Vn=!1;var Hn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Un(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Hn[e.type]:"textarea"===t}function Wn(e,t,n,r){je(r),0<(t=Yr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,Kn=null;function Xn(e){Or(e,0)}function Gn(e){if(K(bi(e)))return e}function Qn(e,t){if("change"===e)return t}var qn=!1;if(u){var Jn;if(u){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;qn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Yn&&(Yn.detachEvent("onpropertychange",nr),Kn=Yn=null)}function nr(e){if("value"===e.propertyName&&Gn(Kn)){var t=[];Wn(t,Kn,e,we(e)),ze(Xn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Yn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Kn)}function or(e,t){if("click"===e)return Gn(t)}function ar(e,t){if("input"===e||"change"===e)return Gn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=X();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=X((e=t.contentWindow).document)}return t}function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function fr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&hr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ur(n,o);var a=ur(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,xr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;xr||null==gr||gr!==X(r)||("selectionStart"in(r=gr)&&hr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&lr(yr,r)||(yr=r,0<(r=Yr(vr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},Cr={};function Er(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Cr)return kr[e]=n[t];return e}u&&(Cr=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var jr=Er("animationend"),Tr=Er("animationiteration"),Pr=Er("animationstart"),$r=Er("transitionend"),Mr=new Map,zr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){Mr.set(e,t),l(t,[e])}for(var Rr=0;Rr<zr.length;Rr++){var Dr=zr[Rr];Nr(Dr.toLowerCase(),"on"+(Dr[0].toUpperCase()+Dr.slice(1)))}Nr(jr,"onAnimationEnd"),Nr(Tr,"onAnimationIteration"),Nr(Pr,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr($r,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ar=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Ir(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,s,l,c){if(Fe.apply(this,arguments),Ae){if(!Ae)throw Error(o(198));var u=Ie;Ae=!1,Ie=null,Oe||(Oe=!0,_e=u)}}(r,t,void 0,e),e.currentTarget=null}function Or(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Ir(i,s,c),o=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Ir(i,s,c),o=l}}}if(Oe)throw e=_e,Oe=!1,_e=null,e}function _r(e,t){var n=t[mi];void 0===n&&(n=t[mi]=new Set);var r=e+"__bubble";n.has(r)||(Hr(t,e,2,!1),n.add(r))}function Br(e,t,n){var r=0;t&&(r|=4),Hr(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[Fr]){e[Fr]=!0,a.forEach(function(t){"selectionchange"!==t&&(Ar.has(t)||Br(t,!1,e),Br(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Fr]||(t[Fr]=!0,Br("selectionchange",!1,t))}}function Hr(e,t,n,r){switch(Qt(t)){case 1:var i=Wt;break;case 4:i=Yt;break;default:i=Kt}n=i.bind(null,t,n,e),i=void 0,!Re||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ur(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=yi(s)))return;if(5===(l=a.tag)||6===l){r=o=a;continue e}s=s.parentNode}}r=r.return}ze(function(){var r=o,i=we(n),a=[];e:{var s=Mr.get(e);if(void 0!==s){var l=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=Tn;break;case"focusin":c="focus",l=gn;break;case"focusout":c="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=fn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=$n;break;case jr:case Tr:case Pr:l=vn;break;case $r:l=Mn;break;case"scroll":l=pn;break;case"wheel":l=Nn;break;case"copy":case"cut":case"paste":l=xn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Pn}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==s?s+"Capture":null:s;u=[];for(var h,f=r;null!==f;){var m=(h=f).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==p&&(null!=(m=Ne(f,p))&&u.push(Wr(f,m,h)))),d)break;f=f.return}0<u.length&&(s=new l(s,c,null,n,i),a.push({event:s,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===be||!(c=n.relatedTarget||n.fromElement)||!yi(c)&&!c[fi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?yi(c):null)&&(c!==(d=Ve(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=fn,m="onMouseLeave",p="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(u=Pn,m="onPointerLeave",p="onPointerEnter",f="pointer"),d=null==l?s:bi(l),h=null==c?s:bi(c),(s=new u(m,f+"leave",l,n,i)).target=d,s.relatedTarget=h,m=null,yi(i)===r&&((u=new u(p,f+"enter",c,n,i)).target=h,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(p=c,f=0,h=u=l;h;h=Kr(h))f++;for(h=0,m=p;m;m=Kr(m))h++;for(;0<f-h;)u=Kr(u),f--;for(;0<h-f;)p=Kr(p),h--;for(;f--;){if(u===p||null!==p&&u===p.alternate)break e;u=Kr(u),p=Kr(p)}u=null}else u=null;null!==l&&Xr(a,s,l,u,!1),null!==c&&null!==d&&Xr(a,d,c,u,!0)}if("select"===(l=(s=r?bi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Qn;else if(Un(s))if(qn)g=ar;else{g=ir;var v=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=or);switch(g&&(g=g(e,r))?Wn(a,g,n,i):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&ee(s,"number",s.value)),v=r?bi(r):window,e){case"focusin":(Un(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":xr=!0;break;case"contextmenu":case"mouseup":case"dragend":xr=!1,br(a,n,i);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(a,n,i)}var y;if(Dn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Vn?Bn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(In&&"ko"!==n.locale&&(Vn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Vn&&(y=en()):(Jt="value"in(qt=i)?qt.value:qt.textContent,Vn=!0)),0<(v=Yr(r,x)).length&&(x=new bn(x,e,null,n,i),a.push({event:x,listeners:v}),y?x.data=y:null!==(y=Fn(n))&&(x.data=y))),(y=An?function(e,t){switch(e){case"compositionend":return Fn(t);case"keypress":return 32!==t.which?null:(_n=!0,On);case"textInput":return(e=t.data)===On&&_n?null:e;default:return null}}(e,n):function(e,t){if(Vn)return"compositionend"===e||!Dn&&Bn(e,t)?(e=en(),Zt=Jt=qt=null,Vn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return In&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Yr(r,"onBeforeInput")).length&&(i=new bn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=y))}Or(a,t)})}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Ne(e,n))&&r.unshift(Wr(e,o,i)),null!=(o=Ne(e,t))&&r.push(Wr(e,o,i))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Xr(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=Ne(n,o))&&a.unshift(Wr(n,l,s)):i||null!=(l=Ne(n,o))&&a.push(Wr(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Gr=/\r\n?/g,Qr=/\u0000|\uFFFD/g;function qr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(Qr,"")}function Jr(e,t,n){if(t=qr(t),qr(e)!==t&&n)throw Error(o(425))}function Zr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,oi="function"===typeof Promise?Promise:void 0,ai="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oi?function(e){return oi.resolve(null).then(e).catch(si)}:ri;function si(e){setTimeout(function(){throw e})}function li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Vt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Vt(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ui(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),pi="__reactFiber$"+di,hi="__reactProps$"+di,fi="__reactContainer$"+di,mi="__reactEvents$"+di,gi="__reactListeners$"+di,vi="__reactHandles$"+di;function yi(e){var t=e[pi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fi]||n[pi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ui(e);null!==e;){if(n=e[pi])return n;e=ui(e)}return t}n=(e=n).parentNode}return null}function xi(e){return!(e=e[pi]||e[fi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wi(e){return e[hi]||null}var Si=[],ki=-1;function Ci(e){return{current:e}}function Ei(e){0>ki||(e.current=Si[ki],Si[ki]=null,ki--)}function ji(e,t){ki++,Si[ki]=e.current,e.current=t}var Ti={},Pi=Ci(Ti),$i=Ci(!1),Mi=Ti;function zi(e,t){var n=e.type.contextTypes;if(!n)return Ti;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ni(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ri(){Ei($i),Ei(Pi)}function Di(e,t,n){if(Pi.current!==Ti)throw Error(o(168));ji(Pi,t),ji($i,n)}function Li(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(o(108,H(e)||"Unknown",i));return I({},n,r)}function Ai(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ti,Mi=Pi.current,ji(Pi,e),ji($i,$i.current),!0}function Ii(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Li(e,t,Mi),r.__reactInternalMemoizedMergedChildContext=e,Ei($i),Ei(Pi),ji(Pi,e)):Ei($i),ji($i,n)}var Oi=null,_i=!1,Bi=!1;function Fi(e){null===Oi?Oi=[e]:Oi.push(e)}function Vi(){if(!Bi&&null!==Oi){Bi=!0;var e=0,t=xt;try{var n=Oi;for(xt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Oi=null,_i=!1}catch(i){throw null!==Oi&&(Oi=Oi.slice(e+1)),Ke(Ze,Vi),i}finally{xt=t,Bi=!1}}return null}var Hi=[],Ui=0,Wi=null,Yi=0,Ki=[],Xi=0,Gi=null,Qi=1,qi="";function Ji(e,t){Hi[Ui++]=Yi,Hi[Ui++]=Wi,Wi=e,Yi=t}function Zi(e,t,n){Ki[Xi++]=Qi,Ki[Xi++]=qi,Ki[Xi++]=Gi,Gi=e;var r=Qi;e=qi;var i=32-at(r)-1;r&=~(1<<i),n+=1;var o=32-at(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Qi=1<<32-at(t)+i|n<<i|r,qi=o+e}else Qi=1<<o|n<<i|r,qi=e}function eo(e){null!==e.return&&(Ji(e,1),Zi(e,1,0))}function to(e){for(;e===Wi;)Wi=Hi[--Ui],Hi[Ui]=null,Yi=Hi[--Ui],Hi[Ui]=null;for(;e===Gi;)Gi=Ki[--Xi],Ki[Xi]=null,qi=Ki[--Xi],Ki[Xi]=null,Qi=Ki[--Xi],Ki[Xi]=null}var no=null,ro=null,io=!1,oo=null;function ao(e,t){var n=zc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function so(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Gi?{id:Qi,overflow:qi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=zc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function lo(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function co(e){if(io){var t=ro;if(t){var n=t;if(!so(e,t)){if(lo(e))throw Error(o(418));t=ci(n.nextSibling);var r=no;t&&so(e,t)?ao(r,n):(e.flags=-4097&e.flags|2,io=!1,no=e)}}else{if(lo(e))throw Error(o(418));e.flags=-4097&e.flags|2,io=!1,no=e}}}function uo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function po(e){if(e!==no)return!1;if(!io)return uo(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ro)){if(lo(e))throw ho(),Error(o(418));for(;t;)ao(e,t),t=ci(t.nextSibling)}if(uo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ci(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ci(e.stateNode.nextSibling):null;return!0}function ho(){for(var e=ro;e;)e=ci(e.nextSibling)}function fo(){ro=no=null,io=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=b.ReactCurrentBatchConfig;function vo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xo(e){return(0,e._init)(e._payload)}function bo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Rc(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Ic(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===N&&xo(o)===t.type)?((r=i(t,n.props)).ref=vo(e,t,n),r.return=e,r):((r=Dc(n.type,n.key,n.props,null,e.mode,r)).ref=vo(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Oc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Lc(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Ic(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Dc(t.type,t.key,t.props,null,e.mode,n)).ref=vo(e,null,t),n.return=e,n;case S:return(t=Oc(t,e.mode,n)).return=e,t;case N:return p(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Lc(t,e.mode,n,null)).return=e,t;yo(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?c(e,t,n,r):null;case S:return n.key===i?u(e,t,n,r):null;case N:return h(e,t,(i=n._init)(n._payload),r)}if(te(n)||L(n))return null!==i?null:d(e,t,n,r,null);yo(e,n)}return null}function f(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case S:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case N:return f(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,i,null);yo(t,r)}return null}function m(i,o,s,l){for(var c=null,u=null,d=o,m=o=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=h(i,d,s[m],l);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(i,d),o=a(v,o,m),null===u?c=v:u.sibling=v,u=v,d=g}if(m===s.length)return n(i,d),io&&Ji(i,m),c;if(null===d){for(;m<s.length;m++)null!==(d=p(i,s[m],l))&&(o=a(d,o,m),null===u?c=d:u.sibling=d,u=d);return io&&Ji(i,m),c}for(d=r(i,d);m<s.length;m++)null!==(g=f(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=a(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),io&&Ji(i,m),c}function g(i,s,l,c){var u=L(l);if("function"!==typeof u)throw Error(o(150));if(null==(l=u.call(l)))throw Error(o(151));for(var d=u=null,m=s,g=s=0,v=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var x=h(i,m,y.value,c);if(null===x){null===m&&(m=v);break}e&&m&&null===x.alternate&&t(i,m),s=a(x,s,g),null===d?u=x:d.sibling=x,d=x,m=v}if(y.done)return n(i,m),io&&Ji(i,g),u;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=p(i,y.value,c))&&(s=a(y,s,g),null===d?u=y:d.sibling=y,d=y);return io&&Ji(i,g),u}for(m=r(i,m);!y.done;g++,y=l.next())null!==(y=f(m,i,g,y.value,c))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=a(y,s,g),null===d?u=y:d.sibling=y,d=y);return e&&m.forEach(function(e){return t(i,e)}),io&&Ji(i,g),u}return function e(r,o,a,l){if("object"===typeof a&&null!==a&&a.type===k&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var c=a.key,u=o;null!==u;){if(u.key===c){if((c=a.type)===k){if(7===u.tag){n(r,u.sibling),(o=i(u,a.props.children)).return=r,r=o;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===N&&xo(c)===u.type){n(r,u.sibling),(o=i(u,a.props)).ref=vo(r,u,a),o.return=r,r=o;break e}n(r,u);break}t(r,u),u=u.sibling}a.type===k?((o=Lc(a.props.children,r.mode,l,a.key)).return=r,r=o):((l=Dc(a.type,a.key,a.props,null,r.mode,l)).ref=vo(r,o,a),l.return=r,r=l)}return s(r);case S:e:{for(u=a.key;null!==o;){if(o.key===u){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(r,o.sibling),(o=i(o,a.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Oc(a,r.mode,l)).return=r,r=o}return s(r);case N:return e(r,o,(u=a._init)(a._payload),l)}if(te(a))return m(r,o,a,l);if(L(a))return g(r,o,a,l);yo(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,a)).return=r,r=o):(n(r,o),(o=Ic(a,r.mode,l)).return=r,r=o),s(r)):n(r,o)}}var wo=bo(!0),So=bo(!1),ko=Ci(null),Co=null,Eo=null,jo=null;function To(){jo=Eo=Co=null}function Po(e){var t=ko.current;Ei(ko),e._currentValue=t}function $o(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mo(e,t){Co=e,jo=Eo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(xs=!0),e.firstContext=null)}function zo(e){var t=e._currentValue;if(jo!==e)if(e={context:e,memoizedValue:t,next:null},null===Eo){if(null===Co)throw Error(o(308));Eo=e,Co.dependencies={lanes:0,firstContext:e}}else Eo=Eo.next=e;return t}var No=null;function Ro(e){null===No?No=[e]:No.push(e)}function Do(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Ro(t)):(n.next=i.next,i.next=n),t.interleaved=n,Lo(e,r)}function Lo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ao=!1;function Io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _o(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Pl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Lo(e,n)}return null===(i=r.interleaved)?(t.next=t,Ro(r)):(t.next=i.next,i.next=t),r.interleaved=t,Lo(e,n)}function Fo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Vo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ho(e,t,n,r){var i=e.updateQueue;Ao=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?o=c:a.next=c,a=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==o){var d=i.baseState;for(a=0,u=c=l=null,s=o;;){var p=s.lane,h=s.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var f=e,m=s;switch(p=t,h=n,m.tag){case 1:if("function"===typeof(f=m.payload)){d=f.call(h,d,p);break e}d=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(p="function"===typeof(f=m.payload)?f.call(h,d,p):f)||void 0===p)break e;d=I({},d,p);break e;case 2:Ao=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=i.effects)?i.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=h,l=d):u=u.next=h,a|=p;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}if(null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);Al|=a,e.lanes=a,e.memoizedState=d}}function Uo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(o(191,i));i.call(r)}}}var Wo={},Yo=Ci(Wo),Ko=Ci(Wo),Xo=Ci(Wo);function Go(e){if(e===Wo)throw Error(o(174));return e}function Qo(e,t){switch(ji(Xo,t),ji(Ko,e),ji(Yo,Wo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ei(Yo),ji(Yo,t)}function qo(){Ei(Yo),Ei(Ko),Ei(Xo)}function Jo(e){Go(Xo.current);var t=Go(Yo.current),n=le(t,e.type);t!==n&&(ji(Ko,e),ji(Yo,n))}function Zo(e){Ko.current===e&&(Ei(Yo),Ei(Ko))}var ea=Ci(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var ia=b.ReactCurrentDispatcher,oa=b.ReactCurrentBatchConfig,aa=0,sa=null,la=null,ca=null,ua=!1,da=!1,pa=0,ha=0;function fa(){throw Error(o(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,i,a){if(aa=a,sa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=null===e||null===e.memoizedState?Za:es,e=n(r,i),da){a=0;do{if(da=!1,pa=0,25<=a)throw Error(o(301));a+=1,ca=la=null,t.updateQueue=null,ia.current=ts,e=n(r,i)}while(da)}if(ia.current=Ja,t=null!==la&&null!==la.next,aa=0,ca=la=sa=null,ua=!1,t)throw Error(o(300));return e}function va(){var e=0!==pa;return pa=0,e}function ya(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ca?sa.memoizedState=ca=e:ca=ca.next=e,ca}function xa(){if(null===la){var e=sa.alternate;e=null!==e?e.memoizedState:null}else e=la.next;var t=null===ca?sa.memoizedState:ca.next;if(null!==t)ca=t,la=e;else{if(null===e)throw Error(o(310));e={memoizedState:(la=e).memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},null===ca?sa.memoizedState=ca=e:ca=ca.next=e}return ca}function ba(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=xa(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=la,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var l=s=null,c=null,u=a;do{var d=u.lane;if((aa&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(l=c=p,s=r):c=c.next=p,sa.lanes|=d,Al|=d}u=u.next}while(null!==u&&u!==a);null===c?s=r:c.next=l,sr(r,t.memoizedState)||(xs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,sa.lanes|=a,Al|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sa(e){var t=xa(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);sr(a,t.memoizedState)||(xs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ka(){}function Ca(e,t){var n=sa,r=xa(),i=t(),a=!sr(r.memoizedState,i);if(a&&(r.memoizedState=i,xs=!0),r=r.queue,Aa(Ta.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ca&&1&ca.memoizedState.tag){if(n.flags|=2048,za(9,ja.bind(null,n,r,i,t),void 0,null),null===$l)throw Error(o(349));0!==(30&aa)||Ea(n,t,i)}return i}function Ea(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function ja(e,t,n,r){t.value=n,t.getSnapshot=r,Pa(t)&&$a(e)}function Ta(e,t,n){return n(function(){Pa(t)&&$a(e)})}function Pa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function $a(e){var t=Lo(e,1);null!==t&&nc(t,e,1,-1)}function Ma(e){var t=ya();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=Xa.bind(null,sa,e),[t.memoizedState,e]}function za(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Na(){return xa().memoizedState}function Ra(e,t,n,r){var i=ya();sa.flags|=e,i.memoizedState=za(1|t,n,void 0,void 0===r?null:r)}function Da(e,t,n,r){var i=xa();r=void 0===r?null:r;var o=void 0;if(null!==la){var a=la.memoizedState;if(o=a.destroy,null!==r&&ma(r,a.deps))return void(i.memoizedState=za(t,n,o,r))}sa.flags|=e,i.memoizedState=za(1|t,n,o,r)}function La(e,t){return Ra(8390656,8,e,t)}function Aa(e,t){return Da(2048,8,e,t)}function Ia(e,t){return Da(4,2,e,t)}function Oa(e,t){return Da(4,4,e,t)}function _a(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ba(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Da(4,4,_a.bind(null,t,e),n)}function Fa(){}function Va(e,t){var n=xa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ha(e,t){var n=xa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ua(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,xs=!0),e.memoizedState=n):(sr(n,t)||(n=mt(),sa.lanes|=n,Al|=n,e.baseState=!0),t)}function Wa(e,t){var n=xt;xt=0!==n&&4>n?n:4,e(!0);var r=oa.transition;oa.transition={};try{e(!1),t()}finally{xt=n,oa.transition=r}}function Ya(){return xa().memoizedState}function Ka(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ga(e))Qa(t,n);else if(null!==(n=Do(e,t,n,r))){nc(n,e,r,ec()),qa(n,t,r)}}function Xa(e,t,n){var r=tc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ga(e))Qa(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,sr(s,a)){var l=t.interleaved;return null===l?(i.next=i,Ro(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(c){}null!==(n=Do(e,t,i,r))&&(nc(n,e,r,i=ec()),qa(n,t,r))}}function Ga(e){var t=e.alternate;return e===sa||null!==t&&t===sa}function Qa(e,t){da=ua=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qa(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Ja={readContext:zo,useCallback:fa,useContext:fa,useEffect:fa,useImperativeHandle:fa,useInsertionEffect:fa,useLayoutEffect:fa,useMemo:fa,useReducer:fa,useRef:fa,useState:fa,useDebugValue:fa,useDeferredValue:fa,useTransition:fa,useMutableSource:fa,useSyncExternalStore:fa,useId:fa,unstable_isNewReconciler:!1},Za={readContext:zo,useCallback:function(e,t){return ya().memoizedState=[e,void 0===t?null:t],e},useContext:zo,useEffect:La,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ra(4194308,4,_a.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ra(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ra(4,2,e,t)},useMemo:function(e,t){var n=ya();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ya();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ka.bind(null,sa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ya().memoizedState=e},useState:Ma,useDebugValue:Fa,useDeferredValue:function(e){return ya().memoizedState=e},useTransition:function(){var e=Ma(!1),t=e[0];return e=Wa.bind(null,e[1]),ya().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=sa,i=ya();if(io){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===$l)throw Error(o(349));0!==(30&aa)||Ea(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,La(Ta.bind(null,r,a,e),[e]),r.flags|=2048,za(9,ja.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ya(),t=$l.identifierPrefix;if(io){var n=qi;t=":"+t+"R"+(n=(Qi&~(1<<32-at(Qi)-1)).toString(32)+n),0<(n=pa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ha++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:zo,useCallback:Va,useContext:zo,useEffect:Aa,useImperativeHandle:Ba,useInsertionEffect:Ia,useLayoutEffect:Oa,useMemo:Ha,useReducer:wa,useRef:Na,useState:function(){return wa(ba)},useDebugValue:Fa,useDeferredValue:function(e){return Ua(xa(),la.memoizedState,e)},useTransition:function(){return[wa(ba)[0],xa().memoizedState]},useMutableSource:ka,useSyncExternalStore:Ca,useId:Ya,unstable_isNewReconciler:!1},ts={readContext:zo,useCallback:Va,useContext:zo,useEffect:Aa,useImperativeHandle:Ba,useInsertionEffect:Ia,useLayoutEffect:Oa,useMemo:Ha,useReducer:Sa,useRef:Na,useState:function(){return Sa(ba)},useDebugValue:Fa,useDeferredValue:function(e){var t=xa();return null===la?t.memoizedState=e:Ua(t,la.memoizedState,e)},useTransition:function(){return[Sa(ba)[0],xa().memoizedState]},useMutableSource:ka,useSyncExternalStore:Ca,useId:Ya,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=I({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:I({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&Ve(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),o=_o(r,i);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Bo(e,o,i))&&(nc(t,e,i,r),Fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),o=_o(r,i);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Bo(e,o,i))&&(nc(t,e,i,r),Fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),i=_o(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Bo(e,i,r))&&(nc(t,e,r,n),Fo(t,e,r))}};function os(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(i,o))}function as(e,t,n){var r=!1,i=Ti,o=t.contextType;return"object"===typeof o&&null!==o?o=zo(o):(i=Ni(t)?Mi:Pi.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?zi(e,i):Ti),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Io(e);var o=t.contextType;"object"===typeof o&&null!==o?i.context=zo(o):(o=Ni(t)?Mi:Pi.current,i.context=zi(e,o)),i.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rs(e,t,o,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),Ho(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=F(r),r=r.return}while(r);var i=n}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i,digest:null}}function us(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ps="function"===typeof WeakMap?WeakMap:Map;function hs(e,t,n){(n=_o(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ul||(Ul=!0,Wl=r),ds(0,t)},n}function fs(e,t,n){(n=_o(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ds(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===Yl?Yl=new Set([this]):Yl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ms(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ec.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vs(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=_o(-1,1)).tag=2,Bo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ys=b.ReactCurrentOwner,xs=!1;function bs(e,t,n,r){t.child=null===e?So(t,null,n,r):wo(t,e.child,n,r)}function ws(e,t,n,r,i){n=n.render;var o=t.ref;return Mo(t,i),r=ga(e,t,n,r,o,i),n=va(),null===e||xs?(io&&n&&eo(t),t.flags|=1,bs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Us(e,t,i))}function Ss(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||Nc(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Dc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,ks(e,t,o,r,i))}if(o=e.child,0===(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(a,r)&&e.ref===t.ref)return Us(e,t,i)}return t.flags|=1,(e=Rc(o,r)).ref=t.ref,e.return=t,t.child=e}function ks(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(lr(o,r)&&e.ref===t.ref){if(xs=!1,t.pendingProps=r=o,0===(e.lanes&i))return t.lanes=e.lanes,Us(e,t,i);0!==(131072&e.flags)&&(xs=!0)}}return js(e,t,n,r,i)}function Cs(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ji(Rl,Nl),Nl|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ji(Rl,Nl),Nl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,ji(Rl,Nl),Nl|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,ji(Rl,Nl),Nl|=r;return bs(e,t,i,n),t.child}function Es(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function js(e,t,n,r,i){var o=Ni(n)?Mi:Pi.current;return o=zi(t,o),Mo(t,i),n=ga(e,t,n,r,o,i),r=va(),null===e||xs?(io&&r&&eo(t),t.flags|=1,bs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Us(e,t,i))}function Ts(e,t,n,r,i){if(Ni(n)){var o=!0;Ai(t)}else o=!1;if(Mo(t,i),null===t.stateNode)Hs(e,t),as(t,n,r),ls(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;"object"===typeof c&&null!==c?c=zo(c):c=zi(t,c=Ni(n)?Mi:Pi.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==r||l!==c)&&ss(t,a,r,c),Ao=!1;var p=t.memoizedState;a.state=p,Ho(t,r,a,i),l=t.memoizedState,s!==r||p!==l||$i.current||Ao?("function"===typeof u&&(rs(t,n,u,r),l=t.memoizedState),(s=Ao||os(t,n,s,r,p,l,c))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Oo(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ns(t.type,s),a.props=c,d=t.pendingProps,p=a.context,"object"===typeof(l=n.contextType)&&null!==l?l=zo(l):l=zi(t,l=Ni(n)?Mi:Pi.current);var h=n.getDerivedStateFromProps;(u="function"===typeof h||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==d||p!==l)&&ss(t,a,r,l),Ao=!1,p=t.memoizedState,a.state=p,Ho(t,r,a,i);var f=t.memoizedState;s!==d||p!==f||$i.current||Ao?("function"===typeof h&&(rs(t,n,h,r),f=t.memoizedState),(c=Ao||os(t,n,c,r,p,f,l)||!1)?(u||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,f,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,f,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=l,r=c):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ps(e,t,n,r,o,i)}function Ps(e,t,n,r,i,o){Es(e,t);var a=0!==(128&t.flags);if(!r&&!a)return i&&Ii(t,n,!1),Us(e,t,o);r=t.stateNode,ys.current=t;var s=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,s,o)):bs(e,t,s,o),t.memoizedState=r.state,i&&Ii(t,n,!0),t.child}function $s(e){var t=e.stateNode;t.pendingContext?Di(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Di(0,t.context,!1),Qo(e,t.containerInfo)}function Ms(e,t,n,r,i){return fo(),mo(i),t.flags|=256,bs(e,t,n,r),t.child}var zs,Ns,Rs,Ds,Ls={dehydrated:null,treeContext:null,retryLane:0};function As(e){return{baseLanes:e,cachePool:null,transitions:null}}function Is(e,t,n){var r,i=t.pendingProps,a=ea.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),ji(ea,1&a),null===e)return co(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Ac(l,i,0,null),e=Lc(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=As(n),t.memoizedState=Ls,e):Os(t,l));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,s){if(n)return 256&t.flags?(t.flags&=-257,_s(e,t,s,r=us(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Ac({mode:"visible",children:r.children},i,0,null),(a=Lc(a,i,s,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,s),t.child.memoizedState=As(s),t.memoizedState=Ls,a);if(0===(1&t.mode))return _s(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,_s(e,t,s,r=us(a=Error(o(419)),r,void 0))}if(l=0!==(s&e.childLanes),xs||l){if(null!==(r=$l)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==a.retryLane&&(a.retryLane=i,Lo(e,i),nc(r,e,i,-1))}return mc(),_s(e,t,s,r=us(Error(o(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Tc.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ro=ci(i.nextSibling),no=t,io=!0,oo=null,null!==e&&(Ki[Xi++]=Qi,Ki[Xi++]=qi,Ki[Xi++]=Gi,Qi=e.id,qi=e.overflow,Gi=t),t=Os(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,a,n);if(s){s=i.fallback,l=t.mode,r=(a=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=Rc(a,c)).subtreeFlags=14680064&a.subtreeFlags,null!==r?s=Rc(r,s):(s=Lc(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?As(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Ls,i}return e=(s=e.child).sibling,i=Rc(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Os(e,t){return(t=Ac({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function _s(e,t,n,r){return null!==r&&mo(r),wo(t,e.child,null,n),(e=Os(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Bs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),$o(e.return,t,n)}function Fs(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Vs(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(bs(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Bs(e,n,t);else if(19===e.tag)Bs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ji(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Fs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ta(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Fs(t,!0,n,null,o);break;case"together":Fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hs(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Us(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Al|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Rc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Rc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Ws(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ys(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ks(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ys(t),null;case 1:case 17:return Ni(t.type)&&Ri(),Ys(t),null;case 3:return r=t.stateNode,qo(),Ei($i),Ei(Pi),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(po(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(ac(oo),oo=null))),Ns(e,t),Ys(t),null;case 5:Zo(t);var i=Go(Xo.current);if(n=t.type,null!==e&&null!=t.stateNode)Rs(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Ys(t),null}if(e=Go(Yo.current),po(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[pi]=t,r[hi]=a,e=0!==(1&t.mode),n){case"dialog":_r("cancel",r),_r("close",r);break;case"iframe":case"object":case"embed":_r("load",r);break;case"video":case"audio":for(i=0;i<Lr.length;i++)_r(Lr[i],r);break;case"source":_r("error",r);break;case"img":case"image":case"link":_r("error",r),_r("load",r);break;case"details":_r("toggle",r);break;case"input":Q(r,a),_r("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},_r("invalid",r);break;case"textarea":ie(r,a),_r("invalid",r)}for(var l in ye(n,a),i=null,a)if(a.hasOwnProperty(l)){var c=a[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,c,e),i=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,c,e),i=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&_r("scroll",r)}switch(n){case"input":Y(r),Z(r,a,!0);break;case"textarea":Y(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Zr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pi]=t,e[hi]=r,zs(e,t,!1,!1),t.stateNode=e;e:{switch(l=xe(n,r),n){case"dialog":_r("cancel",e),_r("close",e),i=r;break;case"iframe":case"object":case"embed":_r("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lr.length;i++)_r(Lr[i],e);i=r;break;case"source":_r("error",e),i=r;break;case"img":case"image":case"link":_r("error",e),_r("load",e),i=r;break;case"details":_r("toggle",e),i=r;break;case"input":Q(e,r),i=G(e,r),_r("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=I({},r,{value:void 0}),_r("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),_r("invalid",e)}for(a in ye(n,i),c=i)if(c.hasOwnProperty(a)){var u=c[a];"style"===a?ge(e,u):"dangerouslySetInnerHTML"===a?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===a?"string"===typeof u?("textarea"!==n||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=u&&"onScroll"===a&&_r("scroll",e):null!=u&&x(e,a,u,l))}switch(n){case"input":Y(e),Z(e,r,!1);break;case"textarea":Y(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+U(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ys(t),null;case 6:if(e&&null!=t.stateNode)Ds(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Go(Xo.current),Go(Yo.current),po(t)){if(r=t.stateNode,n=t.memoizedProps,r[pi]=t,(a=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pi]=t,t.stateNode=r}return Ys(t),null;case 13:if(Ei(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))ho(),fo(),t.flags|=98560,a=!1;else if(a=po(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[pi]=t}else fo(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ys(t),a=!1}else null!==oo&&(ac(oo),oo=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Dl&&(Dl=3):mc())),null!==t.updateQueue&&(t.flags|=4),Ys(t),null);case 4:return qo(),Ns(e,t),null===e&&Vr(t.stateNode.containerInfo),Ys(t),null;case 10:return Po(t.type._context),Ys(t),null;case 19:if(Ei(ea),null===(a=t.memoizedState))return Ys(t),null;if(r=0!==(128&t.flags),null===(l=a.rendering))if(r)Ws(a,!1);else{if(0!==Dl||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ta(e))){for(t.flags|=128,Ws(a,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ji(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&qe()>Vl&&(t.flags|=128,r=!0,Ws(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Ws(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!io)return Ys(t),null}else 2*qe()-a.renderingStartTime>Vl&&1073741824!==n&&(t.flags|=128,r=!0,Ws(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=a.last)?n.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=qe(),t.sibling=null,n=ea.current,ji(ea,r?1&n|2:1&n),t):(Ys(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Nl)&&(Ys(t),6&t.subtreeFlags&&(t.flags|=8192)):Ys(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Xs(e,t){switch(to(t),t.tag){case 1:return Ni(t.type)&&Ri(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return qo(),Ei($i),Ei(Pi),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zo(t),null;case 13:if(Ei(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));fo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ei(ea),null;case 4:return qo(),null;case 10:return Po(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}zs=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ns=function(){},Rs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Go(Yo.current);var o,a=null;switch(n){case"input":i=G(e,i),r=G(e,r),a=[];break;case"select":i=I({},i,{value:void 0}),r=I({},r,{value:void 0}),a=[];break;case"textarea":i=re(e,i),r=re(e,r),a=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(u in ye(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(s.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(l=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(a=a||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(a=a||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(s.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&_r("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Ds=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gs=!1,Qs=!1,qs="function"===typeof WeakSet?WeakSet:Set,Js=null;function Zs(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Cc(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){Cc(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&el(t,n,o)}i=i.next}while(i!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function ol(e){var t=e.alternate;null!==t&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pi],delete t[hi],delete t[mi],delete t[gi],delete t[vi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function al(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var ul=null,dl=!1;function pl(e,t,n){for(n=n.child;null!==n;)hl(e,t,n),n=n.sibling}function hl(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(it,n)}catch(s){}switch(n.tag){case 5:Qs||Zs(n,t);case 6:var r=ul,i=dl;ul=null,pl(e,t,n),dl=i,null!==(ul=r)&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ul.removeChild(n.stateNode));break;case 18:null!==ul&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),Vt(e)):li(ul,n.stateNode));break;case 4:r=ul,i=dl,ul=n.stateNode.containerInfo,dl=!0,pl(e,t,n),ul=r,dl=i;break;case 0:case 11:case 14:case 15:if(!Qs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!==(2&o)||0!==(4&o))&&el(n,t,a),i=i.next}while(i!==r)}pl(e,t,n);break;case 1:if(!Qs&&(Zs(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Cc(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(Qs=(r=Qs)||null!==n.memoizedState,pl(e,t,n),Qs=r):pl(e,t,n);break;default:pl(e,t,n)}}function fl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new qs),t.forEach(function(t){var r=Pc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:ul=l.stateNode,dl=!1;break e;case 3:case 4:ul=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===ul)throw Error(o(160));hl(a,s,i),ul=null,dl=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(u){Cc(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),vl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){Cc(e,e.return,g)}try{nl(5,e,e.return)}catch(g){Cc(e,e.return,g)}}break;case 1:ml(t,e),vl(e),512&r&&null!==n&&Zs(n,n.return);break;case 5:if(ml(t,e),vl(e),512&r&&null!==n&&Zs(n,n.return),32&e.flags){var i=e.stateNode;try{pe(i,"")}catch(g){Cc(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,s=null!==n?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===a.type&&null!=a.name&&q(i,a),xe(l,s);var u=xe(l,a);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];"style"===d?ge(i,p):"dangerouslySetInnerHTML"===d?de(i,p):"children"===d?pe(i,p):x(i,d,p,u)}switch(l){case"input":J(i,a);break;case"textarea":oe(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var f=a.value;null!=f?ne(i,!!a.multiple,f,!1):h!==!!a.multiple&&(null!=a.defaultValue?ne(i,!!a.multiple,a.defaultValue,!0):ne(i,!!a.multiple,a.multiple?[]:"",!1))}i[hi]=a}catch(g){Cc(e,e.return,g)}}break;case 6:if(ml(t,e),vl(e),4&r){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){Cc(e,e.return,g)}}break;case 3:if(ml(t,e),vl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Vt(t.containerInfo)}catch(g){Cc(e,e.return,g)}break;case 4:default:ml(t,e),vl(e);break;case 13:ml(t,e),vl(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(Fl=qe())),4&r&&fl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Qs=(u=Qs)||d,ml(t,e),Qs=u):ml(t,e),vl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Js=e,d=e.child;null!==d;){for(p=Js=d;null!==Js;){switch(f=(h=Js).child,h.tag){case 0:case 11:case 14:case 15:nl(4,h,h.return);break;case 1:Zs(h,h.return);var m=h.stateNode;if("function"===typeof m.componentWillUnmount){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Cc(r,n,g)}}break;case 5:Zs(h,h.return);break;case 22:if(null!==h.memoizedState){wl(p);continue}}null!==f?(f.return=h,Js=f):wl(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{i=p.stateNode,u?"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=me("display",s))}catch(g){Cc(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){Cc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ml(t,e),vl(e),4&r&&fl(e);case 21:}}function vl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(al(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(pe(i,""),r.flags&=-33),cl(e,sl(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;ll(e,sl(e),a);break;default:throw Error(o(161))}}catch(s){Cc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yl(e,t,n){Js=e,xl(e,t,n)}function xl(e,t,n){for(var r=0!==(1&e.mode);null!==Js;){var i=Js,o=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Gs;if(!a){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Qs;s=Gs;var c=Qs;if(Gs=a,(Qs=l)&&!c)for(Js=i;null!==Js;)l=(a=Js).child,22===a.tag&&null!==a.memoizedState?Sl(i):null!==l?(l.return=a,Js=l):Sl(i);for(;null!==o;)Js=o,xl(o,t,n),o=o.sibling;Js=i,Gs=s,Qs=c}bl(e)}else 0!==(8772&i.subtreeFlags)&&null!==o?(o.return=i,Js=o):bl(e)}}function bl(e){for(;null!==Js;){var t=Js;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Qs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Qs)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Uo(t,a,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Uo(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Vt(p)}}}break;default:throw Error(o(163))}Qs||512&t.flags&&il(t)}catch(h){Cc(t,t.return,h)}}if(t===e){Js=null;break}if(null!==(n=t.sibling)){n.return=t.return,Js=n;break}Js=t.return}}function wl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Js=n;break}Js=t.return}}function Sl(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){Cc(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){Cc(t,i,l)}}var o=t.return;try{il(t)}catch(l){Cc(t,o,l)}break;case 5:var a=t.return;try{il(t)}catch(l){Cc(t,a,l)}}}catch(l){Cc(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var kl,Cl=Math.ceil,El=b.ReactCurrentDispatcher,jl=b.ReactCurrentOwner,Tl=b.ReactCurrentBatchConfig,Pl=0,$l=null,Ml=null,zl=0,Nl=0,Rl=Ci(0),Dl=0,Ll=null,Al=0,Il=0,Ol=0,_l=null,Bl=null,Fl=0,Vl=1/0,Hl=null,Ul=!1,Wl=null,Yl=null,Kl=!1,Xl=null,Gl=0,Ql=0,ql=null,Jl=-1,Zl=0;function ec(){return 0!==(6&Pl)?qe():-1!==Jl?Jl:Jl=qe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Pl)&&0!==zl?zl&-zl:null!==go.transition?(0===Zl&&(Zl=mt()),Zl):0!==(e=xt)?e:e=void 0===(e=window.event)?16:Qt(e.type)}function nc(e,t,n,r){if(50<Ql)throw Ql=0,ql=null,Error(o(185));vt(e,n,r),0!==(2&Pl)&&e===$l||(e===$l&&(0===(2&Pl)&&(Il|=n),4===Dl&&sc(e,zl)),rc(e,r),1===n&&0===Pl&&0===(1&t.mode)&&(Vl=qe()+500,_i&&Vi()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-at(o),s=1<<a,l=i[a];-1===l?0!==(s&n)&&0===(s&r)||(i[a]=ht(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}(e,t);var r=pt(e,e===$l?zl:0);if(0===r)null!==n&&Xe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Xe(n),1===t)0===e.tag?function(e){_i=!0,Fi(e)}(lc.bind(null,e)):Fi(lc.bind(null,e)),ai(function(){0===(6&Pl)&&Vi()}),n=null;else{switch(bt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=$c(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(Jl=-1,Zl=0,0!==(6&Pl))throw Error(o(327));var n=e.callbackNode;if(Sc()&&e.callbackNode!==n)return null;var r=pt(e,e===$l?zl:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var i=Pl;Pl|=2;var a=fc();for($l===e&&zl===t||(Hl=null,Vl=qe()+500,pc(e,t));;)try{yc();break}catch(l){hc(e,l)}To(),El.current=a,Pl=i,null!==Ml?t=0:($l=null,zl=0,t=Dl)}if(0!==t){if(2===t&&(0!==(i=ft(e))&&(r=i,t=oc(e,i))),1===t)throw n=Ll,pc(e,0),sc(e,r),rc(e,qe()),n;if(6===t)sc(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!sr(o(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gc(e,r))&&(0!==(a=ft(e))&&(r=a,t=oc(e,a))),1===t))throw n=Ll,pc(e,0),sc(e,r),rc(e,qe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wc(e,Bl,Hl);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=Fl+500-qe())){if(0!==pt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wc.bind(null,e,Bl,Hl),t);break}wc(e,Bl,Hl);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-at(r);a=1<<s,(s=t[s])>i&&(i=s),r&=~a}if(r=i,10<(r=(120>(r=qe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cl(r/1960))-r)){e.timeoutHandle=ri(wc.bind(null,e,Bl,Hl),r);break}wc(e,Bl,Hl);break;default:throw Error(o(329))}}}return rc(e,qe()),e.callbackNode===n?ic.bind(null,e):null}function oc(e,t){var n=_l;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Bl,Bl=n,null!==t&&ac(t)),e}function ac(e){null===Bl?Bl=e:Bl.push.apply(Bl,e)}function sc(e,t){for(t&=~Ol,t&=~Il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(0!==(6&Pl))throw Error(o(327));Sc();var t=pt(e,0);if(0===(1&t))return rc(e,qe()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ft(e);0!==r&&(t=r,n=oc(e,r))}if(1===n)throw n=Ll,pc(e,0),sc(e,t),rc(e,qe()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Bl,Hl),rc(e,qe()),null}function cc(e,t){var n=Pl;Pl|=1;try{return e(t)}finally{0===(Pl=n)&&(Vl=qe()+500,_i&&Vi())}}function uc(e){null!==Xl&&0===Xl.tag&&0===(6&Pl)&&Sc();var t=Pl;Pl|=1;var n=Tl.transition,r=xt;try{if(Tl.transition=null,xt=1,e)return e()}finally{xt=r,Tl.transition=n,0===(6&(Pl=t))&&Vi()}}function dc(){Nl=Rl.current,Ei(Rl)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Ml)for(n=Ml.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ri();break;case 3:qo(),Ei($i),Ei(Pi),ra();break;case 5:Zo(r);break;case 4:qo();break;case 13:case 19:Ei(ea);break;case 10:Po(r.type._context);break;case 22:case 23:dc()}n=n.return}if($l=e,Ml=e=Rc(e.current,null),zl=Nl=t,Dl=0,Ll=null,Ol=Il=Al=0,Bl=_l=null,null!==No){for(t=0;t<No.length;t++)if(null!==(r=(n=No[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}No=null}return e}function hc(e,t){for(;;){var n=Ml;try{if(To(),ia.current=Ja,ua){for(var r=sa.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ua=!1}if(aa=0,ca=la=sa=null,da=!1,pa=0,jl.current=null,null===n||null===n.return){Dl=1,Ll=t,Ml=null;break}e:{var a=e,s=n.return,l=n,c=t;if(t=zl,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=l,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=gs(s);if(null!==f){f.flags&=-257,vs(f,s,l,0,t),1&f.mode&&ms(a,u,t),c=u;var m=(t=f).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ms(a,u,t),mc();break e}c=Error(o(426))}else if(io&&1&l.mode){var v=gs(s);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vs(v,s,l,0,t),mo(cs(c,l));break e}}a=c=cs(c,l),4!==Dl&&(Dl=2),null===_l?_l=[a]:_l.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Vo(a,hs(0,c,t));break e;case 1:l=c;var y=a.type,x=a.stateNode;if(0===(128&a.flags)&&("function"===typeof y.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===Yl||!Yl.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t,Vo(a,fs(a,l,t));break e}}a=a.return}while(null!==a)}bc(n)}catch(b){t=b,Ml===n&&null!==n&&(Ml=n=n.return);continue}break}}function fc(){var e=El.current;return El.current=Ja,null===e?Ja:e}function mc(){0!==Dl&&3!==Dl&&2!==Dl||(Dl=4),null===$l||0===(268435455&Al)&&0===(268435455&Il)||sc($l,zl)}function gc(e,t){var n=Pl;Pl|=2;var r=fc();for($l===e&&zl===t||(Hl=null,pc(e,t));;)try{vc();break}catch(i){hc(e,i)}if(To(),Pl=n,El.current=r,null!==Ml)throw Error(o(261));return $l=null,zl=0,Dl}function vc(){for(;null!==Ml;)xc(Ml)}function yc(){for(;null!==Ml&&!Ge();)xc(Ml)}function xc(e){var t=kl(e.alternate,e,Nl);e.memoizedProps=e.pendingProps,null===t?bc(e):Ml=t,jl.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ks(n,t,Nl)))return void(Ml=n)}else{if(null!==(n=Xs(n,t)))return n.flags&=32767,void(Ml=n);if(null===e)return Dl=6,void(Ml=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ml=t);Ml=t=e}while(null!==t);0===Dl&&(Dl=5)}function wc(e,t,n){var r=xt,i=Tl.transition;try{Tl.transition=null,xt=1,function(e,t,n,r){do{Sc()}while(null!==Xl);if(0!==(6&Pl))throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,a),e===$l&&(Ml=$l=null,zl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Kl||(Kl=!0,$c(tt,function(){return Sc(),null})),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=Tl.transition,Tl.transition=null;var s=xt;xt=1;var l=Pl;Pl|=4,jl.current=null,function(e,t){if(ei=Ut,hr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var f;p!==n||0!==i&&3!==p.nodeType||(l=s+i),p!==a||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(f=p.firstChild);)h=p,p=f;for(;;){if(p===e)break t;if(h===n&&++u===i&&(l=s),h===a&&++d===r&&(c=s),null!==(f=p.nextSibling))break;h=(p=h).parentNode}p=f}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Ut=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(o(163))}}catch(w){Cc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}m=tl,tl=!1}(e,n),gl(n,e),fr(ti),Ut=!!ei,ti=ei=null,e.current=n,yl(n,e,i),Qe(),Pl=l,xt=s,Tl.transition=a}else e.current=n;if(Kl&&(Kl=!1,Xl=e,Gl=i),a=e.pendingLanes,0===a&&(Yl=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,qe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ul)throw Ul=!1,e=Wl,Wl=null,e;0!==(1&Gl)&&0!==e.tag&&Sc(),a=e.pendingLanes,0!==(1&a)?e===ql?Ql++:(Ql=0,ql=e):Ql=0,Vi()}(e,t,n,r)}finally{Tl.transition=i,xt=r}return null}function Sc(){if(null!==Xl){var e=bt(Gl),t=Tl.transition,n=xt;try{if(Tl.transition=null,xt=16>e?16:e,null===Xl)var r=!1;else{if(e=Xl,Xl=null,Gl=0,0!==(6&Pl))throw Error(o(331));var i=Pl;for(Pl|=4,Js=e.current;null!==Js;){var a=Js,s=a.child;if(0!==(16&Js.flags)){var l=a.deletions;if(null!==l){for(var c=0;c<l.length;c++){var u=l[c];for(Js=u;null!==Js;){var d=Js;switch(d.tag){case 0:case 11:case 15:nl(8,d,a)}var p=d.child;if(null!==p)p.return=d,Js=p;else for(;null!==Js;){var h=(d=Js).sibling,f=d.return;if(ol(d),d===u){Js=null;break}if(null!==h){h.return=f,Js=h;break}Js=f}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Js=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,Js=s;else e:for(;null!==Js;){if(0!==(2048&(a=Js).flags))switch(a.tag){case 0:case 11:case 15:nl(9,a,a.return)}var y=a.sibling;if(null!==y){y.return=a.return,Js=y;break e}Js=a.return}}var x=e.current;for(Js=x;null!==Js;){var b=(s=Js).child;if(0!==(2064&s.subtreeFlags)&&null!==b)b.return=s,Js=b;else e:for(s=x;null!==Js;){if(0!==(2048&(l=Js).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(S){Cc(l,l.return,S)}if(l===s){Js=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Js=w;break e}Js=l.return}}if(Pl=i,Vi(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(it,e)}catch(S){}r=!0}return r}finally{xt=n,Tl.transition=t}}return!1}function kc(e,t,n){e=Bo(e,t=hs(0,t=cs(n,t),1),1),t=ec(),null!==e&&(vt(e,1,t),rc(e,t))}function Cc(e,t,n){if(3===e.tag)kc(e,e,n);else for(;null!==t;){if(3===t.tag){kc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Yl||!Yl.has(r))){t=Bo(t,e=fs(t,e=cs(n,e),1),1),e=ec(),null!==t&&(vt(t,1,e),rc(t,e));break}}t=t.return}}function Ec(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,$l===e&&(zl&n)===n&&(4===Dl||3===Dl&&(130023424&zl)===zl&&500>qe()-Fl?pc(e,0):Ol|=n),rc(e,t)}function jc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Lo(e,t))&&(vt(e,t,n),rc(e,n))}function Tc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),jc(e,n)}function Pc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),jc(e,n)}function $c(e,t){return Ke(e,t)}function Mc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zc(e,t,n,r){return new Mc(e,t,n,r)}function Nc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Rc(e,t){var n=e.alternate;return null===n?((n=zc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dc(e,t,n,r,i,a){var s=2;if(r=e,"function"===typeof e)Nc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case k:return Lc(n.children,i,a,t);case C:s=8,i|=8;break;case E:return(e=zc(12,n,t,2|i)).elementType=E,e.lanes=a,e;case $:return(e=zc(13,n,t,i)).elementType=$,e.lanes=a,e;case M:return(e=zc(19,n,t,i)).elementType=M,e.lanes=a,e;case R:return Ac(n,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case j:s=10;break e;case T:s=9;break e;case P:s=11;break e;case z:s=14;break e;case N:s=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=zc(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Lc(e,t,n,r){return(e=zc(7,e,r,t)).lanes=n,e}function Ac(e,t,n,r){return(e=zc(22,e,r,t)).elementType=R,e.lanes=n,e.stateNode={isHidden:!1},e}function Ic(e,t,n){return(e=zc(6,e,null,t)).lanes=n,e}function Oc(e,t,n){return(t=zc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _c(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bc(e,t,n,r,i,o,a,s,l){return e=new _c(e,t,n,s,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=zc(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Io(o),e}function Fc(e){if(!e)return Ti;e:{if(Ve(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ni(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Ni(n))return Li(e,n,t)}return t}function Vc(e,t,n,r,i,o,a,s,l){return(e=Bc(n,r,!0,e,0,o,0,s,l)).context=Fc(null),n=e.current,(o=_o(r=ec(),i=tc(n))).callback=void 0!==t&&null!==t?t:null,Bo(n,o,i),e.current.lanes=i,vt(e,i,r),rc(e,r),e}function Hc(e,t,n,r){var i=t.current,o=ec(),a=tc(i);return n=Fc(n),null===t.context?t.context=n:t.pendingContext=n,(t=_o(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Bo(i,t,a))&&(nc(e,i,a,o),Fo(e,i,a)),a}function Uc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Wc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Yc(e,t){Wc(e,t),(e=e.alternate)&&Wc(e,t)}kl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||$i.current)xs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return xs=!1,function(e,t,n){switch(t.tag){case 3:$s(t),fo();break;case 5:Jo(t);break;case 1:Ni(t.type)&&Ai(t);break;case 4:Qo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ji(ko,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(ji(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Is(e,t,n):(ji(ea,1&ea.current),null!==(e=Us(e,t,n))?e.sibling:null);ji(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Vs(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),ji(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,Cs(e,t,n)}return Us(e,t,n)}(e,t,n);xs=0!==(131072&e.flags)}else xs=!1,io&&0!==(1048576&t.flags)&&Zi(t,Yi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hs(e,t),e=t.pendingProps;var i=zi(t,Pi.current);Mo(t,n),i=ga(null,t,r,e,i,n);var a=va();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ni(r)?(a=!0,Ai(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Io(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=Ps(null,t,r,!0,a,n)):(t.tag=0,io&&a&&eo(t),bs(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hs(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Nc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===z)return 14}return 2}(r),e=ns(r,e),i){case 0:t=js(null,t,r,e,n);break e;case 1:t=Ts(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=Ss(null,t,r,ns(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,js(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,Ts(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 3:e:{if($s(t),null===e)throw Error(o(387));r=t.pendingProps,i=(a=t.memoizedState).element,Oo(e,t),Ho(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Ms(e,t,r,n,i=cs(Error(o(423)),t));break e}if(r!==i){t=Ms(e,t,r,n,i=cs(Error(o(424)),t));break e}for(ro=ci(t.stateNode.containerInfo.firstChild),no=t,io=!0,oo=null,n=So(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fo(),r===i){t=Us(e,t,n);break e}bs(e,t,r,n)}t=t.child}return t;case 5:return Jo(t),null===e&&co(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,s=i.children,ni(r,i)?s=null:null!==a&&ni(r,a)&&(t.flags|=32),Es(e,t),bs(e,t,s,n),t.child;case 6:return null===e&&co(t),null;case 13:return Is(e,t,n);case 4:return Qo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):bs(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,ws(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 7:return bs(e,t,t.pendingProps,n),t.child;case 8:case 12:return bs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,ji(ko,r._currentValue),r._currentValue=s,null!==a)if(sr(a.value,s)){if(a.children===i.children&&!$i.current){t=Us(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===a.tag){(c=_o(-1,n&-n)).tag=2;var u=a.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,null!==(c=a.alternate)&&(c.lanes|=n),$o(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(o(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),$o(s,n,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}bs(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Mo(t,n),r=r(i=zo(i)),t.flags|=1,bs(e,t,r,n),t.child;case 14:return i=ns(r=t.type,t.pendingProps),Ss(e,t,r,i=ns(r.type,i),n);case 15:return ks(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ns(r,i),Hs(e,t),t.tag=1,Ni(r)?(e=!0,Ai(t)):e=!1,Mo(t,n),as(t,r,i),ls(t,r,i,n),Ps(null,t,r,!0,e,n);case 19:return Vs(e,t,n);case 22:return Cs(e,t,n)}throw Error(o(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Xc(e){this._internalRoot=e}function Gc(e){this._internalRoot=e}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"===typeof i){var s=i;i=function(){var e=Uc(a);s.call(e)}}Hc(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"===typeof r){var o=r;r=function(){var e=Uc(a);o.call(e)}}var a=Vc(t,r,e,0,null,!1,0,"",Jc);return e._reactRootContainer=a,e[fi]=a.current,Vr(8===e.nodeType?e.parentNode:e),uc(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=Uc(l);s.call(e)}}var l=Bc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=l,e[fi]=l.current,Vr(8===e.nodeType?e.parentNode:e),uc(function(){Hc(t,l,n,r)}),l}(n,t,e,i,r);return Uc(a)}Gc.prototype.render=Xc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Hc(e,t,null,null)},Gc.prototype.unmount=Xc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc(function(){Hc(null,e,null,null)}),t[fi]=null}},Gc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&0!==t&&t<Rt[n].priority;n++);Rt.splice(n,0,e),0===n&&It(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),rc(t,qe()),0===(6&Pl)&&(Vl=qe()+500,Vi()))}break;case 13:uc(function(){var t=Lo(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}}),Yc(e,1)}},St=function(e){if(13===e.tag){var t=Lo(e,134217728);if(null!==t)nc(t,e,134217728,ec());Yc(e,134217728)}},kt=function(e){if(13===e.tag){var t=tc(e),n=Lo(e,t);if(null!==n)nc(n,e,t,ec());Yc(e,t)}},Ct=function(){return xt},Et=function(e,t){var n=xt;try{return xt=e,t()}finally{xt=n}},Se=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(o(90));K(r),J(r,i)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=cc,$e=uc;var eu={usingClientEntryPoint:!1,Events:[xi,bi,wi,je,Te,cc]},tu={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=We(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{it=ru.inject(nu),ot=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Qc(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Qc(e))throw Error(o(299));var n=!1,r="",i=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Bc(e,1,!1,null,0,n,0,r,i),e[fi]=t.current,Vr(8===e.nodeType?e.parentNode:e),new Xc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=We(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!qc(t))throw Error(o(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Qc(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",s=Kc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Vc(t,null,e,1,null!=n?n:null,i,0,a,s),e[fi]=t.current,Vr(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Gc(t)},t.render=function(e,t,n){if(!qc(t))throw Error(o(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!qc(e))throw Error(o(40));return!!e._reactRootContainer&&(uc(function(){Zc(null,null,e,!1,function(){e._reactRootContainer=null,e[fi]=null})}),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qc(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Zc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;("object"==typeof s||"function"==typeof s)&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(e=>a[e]=()=>r[e]);return a.default=()=>r,n.d(o,a),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e,t=n(43),r=n.t(t,2),i=n(391),o=n(950),a=n.t(o,2);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const l="popstate";function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){return{usr:e.state,key:e.key,idx:t}}function d(e,t,n,r){return void 0===n&&(n=null),s({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?h(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function p(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function h(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function f(t,n,r,i){void 0===i&&(i={});let{window:o=document.defaultView,v5Compat:a=!1}=i,h=o.history,f=e.Pop,m=null,g=v();function v(){return(h.state||{idx:null}).idx}function y(){f=e.Pop;let t=v(),n=null==t?null:t-g;g=t,m&&m({action:f,location:b.location,delta:n})}function x(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:p(e);return n=n.replace(/ $/,"%20"),c(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,h.replaceState(s({},h.state,{idx:g}),""));let b={get action(){return f},get location(){return t(o,h)},listen(e){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(l,y),m=e,()=>{o.removeEventListener(l,y),m=null}},createHref:e=>n(o,e),createURL:x,encodeLocation(e){let t=x(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){f=e.Push;let i=d(b.location,t,n);r&&r(i,t),g=v()+1;let s=u(i,g),l=b.createHref(i);try{h.pushState(s,"",l)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;o.location.assign(l)}a&&m&&m({action:f,location:b.location,delta:1})},replace:function(t,n){f=e.Replace;let i=d(b.location,t,n);r&&r(i,t),g=v();let o=u(i,g),s=b.createHref(i);h.replaceState(o,"",s),a&&m&&m({action:f,location:b.location,delta:0})},go:e=>h.go(e)};return b}var m;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(m||(m={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function g(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}Error;const v=["post","put","patch","delete"],y=(new Set(v),["get",...v]);new Set(y),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}const b=t.createContext(null);const w=t.createContext(null);function S(){return null!=t.useContext(w)}t.Component;function k(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function C(n){let{basename:r="/",children:i=null,location:o,navigationType:a=e.Pop,navigator:s,static:l=!1,future:u}=n;S()&&c(!1);let d=r.replace(/^\/*/,"/"),p=t.useMemo(()=>({basename:d,navigator:s,static:l,future:x({v7_relativeSplatPath:!1},u)}),[d,u,s,l]);"string"===typeof o&&(o=h(o));let{pathname:f="/",search:m="",hash:v="",state:y=null,key:k="default"}=o,C=t.useMemo(()=>{let e=g(f,d);return null==e?null:{location:{pathname:e,search:m,hash:v,state:y,key:k},navigationType:a}},[d,f,m,v,y,k,a]);return null==C?null:t.createElement(b.Provider,{value:p},t.createElement(w.Provider,{children:i,value:C}))}new Promise(()=>{});t.Component;new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(Ov){}new Map;const E=r.startTransition;a.flushSync,r.useId;function j(e){let{basename:n,children:r,future:i,window:o}=e,a=t.useRef();var s;null==a.current&&(a.current=(void 0===(s={window:o,v5Compat:!0})&&(s={}),f(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return d("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:p(t)},null,s)));let l=a.current,[c,u]=t.useState({action:l.action,location:l.location}),{v7_startTransition:h}=i||{},m=t.useCallback(e=>{h&&E?E(()=>u(e)):u(e)},[u,h]);return t.useLayoutEffect(()=>l.listen(m),[l,m]),t.useEffect(()=>k(i),[i]),t.createElement(C,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:l,future:i})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var T,P;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(T||(T={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(P||(P={}));var $=function(){return $=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},$.apply(this,arguments)};Object.create;function M(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var z=n(324),N=n.n(z),R="-ms-",D="-moz-",L="-webkit-",A="comm",I="rule",O="decl",_="@keyframes",B=Math.abs,F=String.fromCharCode,V=Object.assign;function H(e){return e.trim()}function U(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function Y(e,t,n){return e.indexOf(t,n)}function K(e,t){return 0|e.charCodeAt(t)}function X(e,t,n){return e.slice(t,n)}function G(e){return e.length}function Q(e){return e.length}function q(e,t){return t.push(e),e}function J(e,t){return e.filter(function(e){return!U(e,t)})}var Z=1,ee=1,te=0,ne=0,re=0,ie="";function oe(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Z,column:ee,length:a,return:"",siblings:s}}function ae(e,t){return V(oe("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function se(e){for(;e.root;)e=ae(e.root,{children:[e]});q(e,e.siblings)}function le(){return re=ne>0?K(ie,--ne):0,ee--,10===re&&(ee=1,Z--),re}function ce(){return re=ne<te?K(ie,ne++):0,ee++,10===re&&(ee=1,Z++),re}function ue(){return K(ie,ne)}function de(){return ne}function pe(e,t){return X(ie,e,t)}function he(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fe(e){return Z=ee=1,te=G(ie=e),ne=0,[]}function me(e){return ie="",e}function ge(e){return H(pe(ne-1,xe(91===e?e+2:40===e?e+1:e)))}function ve(e){for(;(re=ue())&&re<33;)ce();return he(e)>2||he(re)>3?"":" "}function ye(e,t){for(;--t&&ce()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return pe(e,de()+(t<6&&32==ue()&&32==ce()))}function xe(e){for(;ce();)switch(re){case e:return ne;case 34:case 39:34!==e&&39!==e&&xe(re);break;case 40:41===e&&xe(e);break;case 92:ce()}return ne}function be(e,t){for(;ce()&&e+re!==57&&(e+re!==84||47!==ue()););return"/*"+pe(t,ne-1)+"*"+F(47===e?e:ce())}function we(e){for(;!he(ue());)ce();return pe(e,ne)}function Se(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ke(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case O:return e.return=e.return||e.value;case A:return"";case _:return e.return=e.value+"{"+Se(e.children,r)+"}";case I:if(!G(e.value=e.props.join(",")))return""}return G(n=Se(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ce(e,t,n){switch(function(e,t){return 45^K(e,0)?(((t<<2^K(e,0))<<2^K(e,1))<<2^K(e,2))<<2^K(e,3):0}(e,t)){case 5103:return L+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return L+e+e;case 4789:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return L+e+D+e+R+e+e;case 5936:switch(K(e,t+11)){case 114:return L+e+R+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return L+e+R+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return L+e+R+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return L+e+R+e+e;case 6165:return L+e+R+"flex-"+e+e;case 5187:return L+e+W(e,/(\w+).+(:[^]+)/,L+"box-$1$2"+R+"flex-$1$2")+e;case 5443:return L+e+R+"flex-item-"+W(e,/flex-|-self/g,"")+(U(e,/flex-|baseline/)?"":R+"grid-row-"+W(e,/flex-|-self/g,""))+e;case 4675:return L+e+R+"flex-line-pack"+W(e,/align-content|flex-|-self/g,"")+e;case 5548:return L+e+R+W(e,"shrink","negative")+e;case 5292:return L+e+R+W(e,"basis","preferred-size")+e;case 6060:return L+"box-"+W(e,"-grow","")+L+e+R+W(e,"grow","positive")+e;case 4554:return L+W(e,/([^-])(transform)/g,"$1"+L+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,L+"$1"),/(image-set)/,L+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,L+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,L+"box-pack:$3"+R+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+L+e+e;case 4200:if(!U(e,/flex-|baseline/))return R+"grid-column-align"+X(e,t)+e;break;case 2592:case 3360:return R+W(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,U(e.props,/grid-\w+-end/)})?~Y(e+(n=n[t].value),"span",0)?e:R+W(e,"-start","")+e+R+"grid-row-span:"+(~Y(n,"span",0)?U(n,/\d+/):+U(n,/\d+/)-+U(e,/\d+/))+";":R+W(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return U(e.props,/grid-\w+-start/)})?e:R+W(W(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,L+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(G(e)-1-t>6)switch(K(e,t+1)){case 109:if(45!==K(e,t+4))break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+L+"$2-$3$1"+D+(108==K(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Y(e,"stretch",0)?Ce(W(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return W(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,o,a,s){return R+n+":"+r+s+(i?R+n+"-span:"+(o?a:+a-+r)+s:"")+e});case 4949:if(121===K(e,t+6))return W(e,":",":"+L)+e;break;case 6444:switch(K(e,45===K(e,14)?18:11)){case 120:return W(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+L+(45===K(e,14)?"inline-":"")+"box$3$1"+L+"$2$3$1"+R+"$2box$3")+e;case 100:return W(e,":",":"+R)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(e,"scroll-","scroll-snap-")+e}return e}function Ee(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case O:return void(e.return=Ce(e.value,e.length,n));case _:return Se([ae(e,{value:W(e.value,"@","@"+L)})],r);case I:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(U(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":se(ae(e,{props:[W(t,/:(read-\w+)/,":-moz-$1")]})),se(ae(e,{props:[t]})),V(e,{props:J(n,r)});break;case"::placeholder":se(ae(e,{props:[W(t,/:(plac\w+)/,":"+L+"input-$1")]})),se(ae(e,{props:[W(t,/:(plac\w+)/,":-moz-$1")]})),se(ae(e,{props:[W(t,/:(plac\w+)/,R+"input-$1")]})),se(ae(e,{props:[t]})),V(e,{props:J(n,r)})}return""})}}function je(e){return me(Te("",null,null,null,[""],e=fe(e),0,[0],e))}function Te(e,t,n,r,i,o,a,s,l){for(var c=0,u=0,d=a,p=0,h=0,f=0,m=1,g=1,v=1,y=0,x="",b=i,w=o,S=r,k=x;g;)switch(f=y,y=ce()){case 40:if(108!=f&&58==K(k,d-1)){-1!=Y(k+=W(ge(y),"&","&\f"),"&\f",B(c?s[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=ge(y);break;case 9:case 10:case 13:case 32:k+=ve(f);break;case 92:k+=ye(de()-1,7);continue;case 47:switch(ue()){case 42:case 47:q($e(be(ce(),de()),t,n,l),l);break;default:k+="/"}break;case 123*m:s[c++]=G(k)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==v&&(k=W(k,/\f/g,"")),h>0&&G(k)-d&&q(h>32?Me(k+";",r,n,d-1,l):Me(W(k," ","")+";",r,n,d-2,l),l);break;case 59:k+=";";default:if(q(S=Pe(k,t,n,c,u,i,s,x,b=[],w=[],d,o),o),123===y)if(0===u)Te(k,t,S,S,b,o,d,s,w);else switch(99===p&&110===K(k,3)?100:p){case 100:case 108:case 109:case 115:Te(e,S,S,r&&q(Pe(e,S,S,0,0,i,s,x,i,b=[],d,w),w),i,w,d,s,r?b:w);break;default:Te(k,S,S,S,[""],w,0,s,w)}}c=u=h=0,m=v=1,x=k="",d=a;break;case 58:d=1+G(k),h=f;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==le())continue;switch(k+=F(y),y*m){case 38:v=u>0?1:(k+="\f",-1);break;case 44:s[c++]=(G(k)-1)*v,v=1;break;case 64:45===ue()&&(k+=ge(ce())),p=ue(),u=d=G(x=k+=we(de())),y++;break;case 45:45===f&&2==G(k)&&(m=0)}}return o}function Pe(e,t,n,r,i,o,a,s,l,c,u,d){for(var p=i-1,h=0===i?o:[""],f=Q(h),m=0,g=0,v=0;m<r;++m)for(var y=0,x=X(e,p+1,p=B(g=a[m])),b=e;y<f;++y)(b=H(g>0?h[y]+" "+x:W(x,/&\f/g,h[y])))&&(l[v++]=b);return oe(e,t,n,0===i?I:s,l,c,u,d)}function $e(e,t,n,r){return oe(e,t,n,A,F(re),X(e,2,-2),0,r)}function Me(e,t,n,r,i){return oe(e,t,n,O,X(e,0,r),X(e,r+1,-1),r,i)}var ze={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ne="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Re="active",De="data-styled-version",Le="6.1.19",Ae="/*!sc*/\n",Ie="undefined"!=typeof window&&"undefined"!=typeof document,Oe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),_e={},Be=(new Set,Object.freeze([])),Fe=Object.freeze({});function Ve(e,t,n){return void 0===n&&(n=Fe),e.theme!==n.theme&&e.theme||t||n.theme}var He=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ue=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,We=/(^-|-$)/g;function Ye(e){return e.replace(Ue,"-").replace(We,"")}var Ke=/(a)(d)/gi,Xe=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ge(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Xe(t%52)+n;return(Xe(t%52)+n).replace(Ke,"$1-$2")}var Qe,qe=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Je=function(e){return qe(5381,e)};function Ze(e){return Ge(Je(e)>>>0)}function et(e){return e.displayName||e.name||"Component"}function tt(e){return"string"==typeof e&&!0}var nt="function"==typeof Symbol&&Symbol.for,rt=nt?Symbol.for("react.memo"):60115,it=nt?Symbol.for("react.forward_ref"):60112,ot={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},at={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},st={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lt=((Qe={})[it]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qe[rt]=st,Qe);function ct(e){return("type"in(t=e)&&t.type.$$typeof)===rt?st:"$$typeof"in e?lt[e.$$typeof]:ot;var t}var ut=Object.defineProperty,dt=Object.getOwnPropertyNames,pt=Object.getOwnPropertySymbols,ht=Object.getOwnPropertyDescriptor,ft=Object.getPrototypeOf,mt=Object.prototype;function gt(e,t,n){if("string"!=typeof t){if(mt){var r=ft(t);r&&r!==mt&&gt(e,r,n)}var i=dt(t);pt&&(i=i.concat(pt(t)));for(var o=ct(e),a=ct(t),s=0;s<i.length;++s){var l=i[s];if(!(l in at||n&&n[l]||a&&l in a||o&&l in o)){var c=ht(t,l);try{ut(e,l,c)}catch(e){}}}}return e}function vt(e){return"function"==typeof e}function yt(e){return"object"==typeof e&&"styledComponentId"in e}function xt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function bt(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function wt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function St(e,t,n){if(void 0===n&&(n=!1),!n&&!wt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=St(e[r],t[r]);else if(wt(t))for(var r in t)e[r]=St(e[r],t[r]);return e}function kt(e,t){Object.defineProperty(e,"toString",{value:t})}function Ct(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Et=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Ct(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(Ae);return t},e}(),jt=new Map,Tt=new Map,Pt=1,$t=function(e){if(jt.has(e))return jt.get(e);for(;Tt.has(Pt);)Pt++;var t=Pt++;return jt.set(e,t),Tt.set(t,e),t},Mt=function(e,t){Pt=t+1,jt.set(e,t),Tt.set(t,e)},zt="style[".concat(Ne,"][").concat(De,'="').concat(Le,'"]'),Nt=new RegExp("^".concat(Ne,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Rt=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},Dt=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Ae),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(Nt);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(Mt(u,c),Rt(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},Lt=function(e){for(var t=document.querySelectorAll(zt),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Ne)!==Re&&(Dt(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function At(){return n.nc}var It=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Ne,"]")));return t[t.length-1]}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(Ne,Re),r.setAttribute(De,Le);var a=At();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Ot=function(){function e(e){this.element=It(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Ct(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),_t=function(){function e(e){this.element=It(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Bt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Ft=Ie,Vt={isServer:!Ie,useCSSOMInjection:!Oe},Ht=function(){function e(e,t,n){void 0===e&&(e=Fe),void 0===t&&(t={});var r=this;this.options=$($({},Vt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ie&&Ft&&(Ft=!1,Lt(this)),kt(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return Tt.get(e)}(n);if(void 0===i)return"continue";var o=e.names.get(i),a=t.getGroup(n);if(void 0===o||!o.size||0===a.length)return"continue";var s="".concat(Ne,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==o&&o.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(Ae)},o=0;o<n;o++)i(o);return r}(r)})}return e.registerId=function(e){return $t(e)},e.prototype.rehydrate=function(){!this.server&&Ie&&Lt(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e($($({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Bt(n):t?new Ot(n):new _t(n)}(this.options),new Et(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if($t(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules($t(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup($t(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ut=/&/g,Wt=/^\s*\/\/.*$/gm;function Yt(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Yt(e.children,t)),e})}function Kt(e){var t,n,r,i=void 0===e?Fe:e,o=i.options,a=void 0===o?Fe:o,s=i.plugins,l=void 0===s?Be:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push(function(e){e.type===I&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Ut,n).replace(r,c))}),a.prefix&&u.push(Ee),u.push(ke);var d=function(e,i,o,s){void 0===i&&(i=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Wt,""),c=je(o||i?"".concat(o," ").concat(i," { ").concat(l," }"):l);a.namespace&&(c=Yt(c,a.namespace));var d,p=[];return Se(c,function(e){var t=Q(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=l.length?l.reduce(function(e,t){return t.name||Ct(15),qe(e,t.name)},5381).toString():"",d}var Xt=new Ht,Gt=Kt(),Qt=t.createContext({shouldForwardProp:void 0,styleSheet:Xt,stylis:Gt}),qt=(Qt.Consumer,t.createContext(void 0));function Jt(){return(0,t.useContext)(Qt)}function Zt(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],i=n[1],o=Jt().styleSheet,a=(0,t.useMemo)(function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,o]),s=(0,t.useMemo)(function(){return Kt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)(function(){N()(r,e.stylisPlugins)||i(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,t.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}},[e.shouldForwardProp,a,s]);return t.createElement(Qt.Provider,{value:l},t.createElement(qt.Provider,{value:s},e.children))}var en=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Gt);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,kt(this,function(){throw Ct(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Gt),this.name+e.hash},e}(),tn=function(e){return e>="A"&&e<="Z"};function nn(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;tn(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var rn=function(e){return null==e||!1===e||""===e},on=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!rn(o)&&(Array.isArray(o)&&o.isCss||vt(o)?r.push("".concat(nn(i),":"),o,";"):wt(o)?r.push.apply(r,M(M(["".concat(i," {")],on(o),!1),["}"],!1)):r.push("".concat(nn(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ze||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function an(e,t,n,r){return rn(e)?[]:yt(e)?[".".concat(e.styledComponentId)]:vt(e)?!vt(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:an(e(t),t,n,r):e instanceof en?n?(e.inject(n,r),[e.getName(r)]):[e]:wt(e)?on(e):Array.isArray(e)?Array.prototype.concat.apply(Be,e.map(function(e){return an(e,t,n,r)})):[e.toString()];var i}function sn(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(vt(n)&&!yt(n))return!1}return!0}var ln=Je(Le),cn=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&sn(e),this.componentId=t,this.baseHash=qe(ln,t),this.baseStyle=n,Ht.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=xt(r,this.staticRulesId);else{var i=bt(an(this.rules,e,t,n)),o=Ge(qe(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=n(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}r=xt(r,o),this.staticRulesId=o}else{for(var s=qe(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=bt(an(u,e,t,n));s=qe(s,d+c),l+=d}}if(l){var p=Ge(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=xt(r,p)}}return r},e}(),un=t.createContext(void 0);un.Consumer;function dn(e){var n=t.useContext(un),r=(0,t.useMemo)(function(){return function(e,t){if(!e)throw Ct(14);if(vt(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw Ct(8);return t?$($({},t),e):e}(e.theme,n)},[e.theme,n]);return e.children?t.createElement(un.Provider,{value:r},e.children):null}var pn={};new Set;function hn(e,n,r){var i=yt(e),o=e,a=!tt(e),s=n.attrs,l=void 0===s?Be:s,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Ye(e);pn[n]=(pn[n]||0)+1;var r="".concat(n,"-").concat(Ze(Le+n+pn[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,p=void 0===d?function(e){return tt(e)?"styled.".concat(e):"Styled(".concat(et(e),")")}(e):d,h=n.displayName&&n.componentId?"".concat(Ye(n.displayName),"-").concat(n.componentId):n.componentId||u,f=i&&o.attrs?o.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(i&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new cn(r,h,i?o.componentStyle:void 0);function x(e,n){return function(e,n,r){var i=e.attrs,o=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,c=e.target,u=t.useContext(un),d=Jt(),p=e.shouldForwardProp||d.shouldForwardProp,h=Ve(n,u,a)||Fe,f=function(e,t,n){for(var r,i=$($({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var a=vt(r=e[o])?r(i):r;for(var s in a)i[s]="className"===s?xt(i[s],a[s]):"style"===s?$($({},i[s]),a[s]):a[s]}return t.className&&(i.className=xt(i.className,t.className)),i}(i,n,h),m=f.as||c,g={};for(var v in f)void 0===f[v]||"$"===v[0]||"as"===v||"theme"===v&&f.theme===h||("forwardedAs"===v?g.as=f.forwardedAs:p&&!p(v,m)||(g[v]=f[v]));var y=function(e,t){var n=Jt();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,f),x=xt(s,l);return y&&(x+=" "+y),f.className&&(x+=" "+f.className),g[tt(m)&&!He.has(m)?"class":"className"]=x,r&&(g.ref=r),(0,t.createElement)(m,g)}(b,e,n)}x.displayName=p;var b=t.forwardRef(x);return b.attrs=f,b.componentStyle=y,b.displayName=p,b.shouldForwardProp=m,b.foldedComponentIds=i?xt(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=h,b.target=i?o.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)St(e,i[r],!0);return e}({},o.defaultProps,e):e}}),kt(b,function(){return".".concat(b.styledComponentId)}),a&&gt(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function fn(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var mn=function(e){return Object.assign(e,{isCss:!0})};function gn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(vt(e)||wt(e))return mn(an(fn(Be,M([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?an(r):mn(an(fn(r,t)))}function vn(e,t,n){if(void 0===n&&(n=Fe),!t)throw Ct(1,t);var r=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,gn.apply(void 0,M([r],i,!1)))};return r.attrs=function(r){return vn(e,t,$($({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return vn(e,t,$($({},n),r))},r}var yn=function(e){return vn(hn,e)},xn=yn;He.forEach(function(e){xn[e]=yn(e)});var bn=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=sn(e),Ht.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(bt(an(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Ht.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function wn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=bt(gn.apply(void 0,M([e],t,!1))),i=Ze(r);return new en(i,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=At(),r=bt([n&&'nonce="'.concat(n,'"'),"".concat(Ne,'="true"'),"".concat(De,'="').concat(Le,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Ct(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw Ct(2);var r=e.instance.toString();if(!r)return[];var i=((n={})[Ne]="",n[De]=Le,n.dangerouslySetInnerHTML={__html:r},n),o=At();return o&&(i.nonce=o),[t.createElement("style",$({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Ht({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Ct(2);return t.createElement(Zt,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Ct(3)}})(),"__sc-".concat(Ne,"__");const Sn=(function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=gn.apply(void 0,M([e],n,!1)),o="sc-global-".concat(Ze(JSON.stringify(i))),a=new bn(i,o),s=function(e){var n=Jt(),r=t.useContext(un),i=t.useRef(n.styleSheet.allocateGSInstance(o)).current;return n.styleSheet.server&&l(i,e,n.styleSheet,r,n.stylis),t.useLayoutEffect(function(){if(!n.styleSheet.server)return l(i,e,n.styleSheet,r,n.stylis),function(){return a.removeStyles(i,n.styleSheet)}},[i,e,n.styleSheet,r,n.stylis]),null};function l(e,t,n,r,i){if(a.isStatic)a.renderStyles(e,_e,n,i);else{var o=$($({},t),{theme:Ve(t,r,s.defaultProps)});a.renderStyles(e,o,n,i)}}return t.memo(s)})`
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
`,kn=[{id:1,name:"About",url:"#about"},{id:2,name:"Experience",url:"#experience"},{id:3,name:"Projects",url:"#projects"},{id:4,name:"Skills",url:"#skills"},{id:5,name:"Achievements",url:"#achievements"},{id:6,name:"Certifications",url:"#certifications"},{id:7,name:"Education",url:"#education"},{id:8,name:"Contact",url:"#contact"}],Cn=[{id:1,name:"GitHub",url:"https://github.com/Dibyajyoti-Pradhan"},{id:2,name:"LinkedIn",url:"https://www.linkedin.com/in/dibyajyoti-pradhan-83a649146/"},{id:3,name:"Instagram",url:"https://www.instagram.com/shaky_coder/"},{id:4,name:"LeetCode",url:"https://leetcode.com/u/dibyojyotipradhan/"}],En={name:"Dibyajyoti Pradhan",shortName:"Dibyajyoti",description:"Senior Software Engineer",about:['Senior Software Engineer based in London. Over the past 6 years I\u2019ve shipped products at <a href="https://en.wikipedia.org/wiki/Amazon_(company)" target="_blank" rel="noopener noreferrer">Amazon</a>, <a href="https://en.wikipedia.org/wiki/Meta_Platforms" target="_blank" rel="noopener noreferrer">Meta</a>, and <a href="https://en.wikipedia.org/wiki/HubSpot" target="_blank" rel="noopener noreferrer">HubSpot</a> \u2014 across payments, advertising infrastructure, and AI-powered CRM. At Meta I worked on the Ads Manager, shipping features that moved top-line revenue. At HubSpot I\u2019ve worked on Account Insights \u2014 a real-time recommendation engine that improved user retention by 10% and drove 40% platform adoption across the CRM.',"Currently completing a Professional Certificate in ML and AI at Imperial College London \u2014 and applying it directly to the AI-powered systems I'm building at HubSpot.","Outside of work, I love to travel, play chess, run marathons, and work out to stay fit and active."],currentCompany:{name:"HubSpot",url:"https://en.wikipedia.org/wiki/HubSpot"},contact:{heading:"Get In Touch",message:"I'm open to new roles, collaborations, and interesting problems. My inbox is always open.",email:"dibyojyotipradhan@gmail.com"}},jn=[{category:"Languages",items:["C++","Python","Java","JavaScript","TypeScript","Hack","SQL"]},{category:"Frameworks",items:["React","React Native","Spring MVC","Google Guice","Dagger 2.0"]},{category:"AI",items:["GPT-4o","Claude AI","LLM Integration","Prompt Engineering","GenAI"]},{category:"Web Technologies",items:["HTML","CSS","GraphQL"]},{category:"Tools",items:["Git","Docker","Kubernetes","Kafka","AWS","CI/CD"]},{category:"Databases",items:["MySQL","PostgreSQL","MongoDB","DynamoDB","Vitess DB"]},{category:"Other",items:["System Design","Scalable Architecture","RESTful APIs","Microservices","Backend Development","Data Structures","Algorithms","OOP","Design Patterns"]}],Tn=[{id:1,position:"Senior Software Engineer",company:"HubSpot",location:"London",url:"https://en.wikipedia.org/wiki/HubSpot",date:"07/2024 - Present",responsibilities:["Designed and built Account Insights, a real-time recommendation engine \u2014 10% user retention increase and 40% platform adoption (highest across the platform).","Architected GPT-4 powered audit log summarization \u2014 RPC infrastructure with JinJava templating and memcached caching, processing 100k+ audit events with sub-second response. Reduced enterprise security analysis from hours to minutes.","Built AI-powered admin agents using GPT-4o to automate cleanup of stale CRM assets, reducing 70% of recurring customer costs.","Currently contributing to the Product Approvals platform \u2014 building high-throughput, low-latency services for gated access, approval workflows, and audit trail integration across HubSpot products.","Mentored junior developers and collaborated across engineering, product, and design."],techStack:["Java","JavaScript","TypeScript","SQL","React","Google Guice","HTML","CSS","GraphQL","Kafka","AWS","Kubernetes","Vitess DB","MySQL","HBase","Backend","Frontend"]},{id:2,position:"Software Engineer II",company:"Meta",location:"London",url:"https://en.wikipedia.org/wiki/Meta_Platforms",date:"04/2022 - 05/2024",responsibilities:["Built mid-flight recommendation flows (Placements, Campaign Budget) in Ads Manager \u2014 drove a 0.04% lift in Meta\u2019s top-line revenue weighted adoptions and 12,000+ weekly resolutions.","Cut screen load times by 20% across 8 high-traffic interfaces via Relay query pre-fetching.","Revamped the ad duplication flow for ODAX objectives \u2014 14% revenue increase and 18% growth in ad duplications."],techStack:["JavaScript","TypeScript","Hack","SQL","React Native","GraphQL (Relay)","A/B Testing (Experimentation)","TAO","Scuba","Presto","Frontend"]},{id:3,position:"Software Development Engineer II",company:"Amazon",location:"Hyderabad",url:"https://en.wikipedia.org/wiki/Amazon_(company)",date:"10/2021 - 02/2022",responsibilities:["Scaled Amazon Pay for Business to 5M downloads at a 4.3-star rating from launch.","Built an offline-first architecture that eliminated perceived latency \u2014 the app felt instant even on degraded connections.","Reduced MIS Settlement Report crawler time from 3 hours to 10 minutes, unblocking 70+ merchants daily."],techStack:["Java","JavaScript","Python","MySQL","AWS","React Native","Spring MVC","DynamoDB","Frontend","Backend"]},{id:4,position:"Software Development Engineer I",company:"Amazon",location:"Hyderabad",url:"https://en.wikipedia.org/wiki/Amazon_(company)",date:"07/2019 - 09/2021",responsibilities:["Built 18 product pages for the Amazon Pay for Business app, shipping with a team of 3 to 5M merchant engagements at launch.","Mentored an SDE (promoted) and an intern (pre-placement offer). Promoted to SDE II within 2 years."],techStack:["Java","JavaScript","AWS","React Native","Spring MVC","DynamoDB","React","Full Stack","RESTful APIs"]},{id:5,position:"Software Development Engineer Intern",company:"Amazon",location:"Hyderabad",url:"https://en.wikipedia.org/wiki/Amazon_(company)",date:"05/2018 - 07/2018",responsibilities:["Built automation for sequence generation in a tier-1 service \u2014 used by 100+ developer teams across Amazon.","Delivered a full-stack admin tool to monitor and manage sequence configurations in real-time."],techStack:["Java","AWS","Spring MVC","DynamoDB","Backend","RESTful APIs","Micro-service Architecture"]}],Pn=[{id:7,title:"Hull Tactical \u2013 S&P 500 Market Prediction",description:"Predicting S&P 500 market trends using supervised classification models. Applied feature engineering, cross-validation, and ensemble methods on historical financial data to forecast directional movement.",techStack:["Python","Pandas","Scikit-learn","Matplotlib","Jupyter"],url:"https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London/tree/main/Hull%20Tactical%20%E2%80%93%20Market%20Prediction",external:"https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London/tree/main/Hull%20Tactical%20%E2%80%93%20Market%20Prediction",stars:0,badge:"Imperial College London"},{id:8,title:"Black-Box Optimisation Challenge",description:"Solved a black-box optimisation problem using Bayesian optimisation with Gaussian Process surrogates. Minimised expensive objective function evaluations while converging to the global optimum.",techStack:["Python","NumPy","Scikit-learn","GPy","Jupyter"],url:"https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London/tree/main/Black-Box-Optimisation-Challenge",external:"https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London/tree/main/Black-Box-Optimisation-Challenge",stars:0,badge:"Imperial College London"},{id:1,title:"Cloud Storage System",description:"A Java-based cloud storage system that allows users to manage files and directories, perform file operations, and handle compression and decompression of files.",techStack:["Java","Maven","JUnit 5","File Management","Compression","Decompression"],url:"https://github.com/Dibyajyoti-Pradhan/cloud-storage-system",external:"https://github.com/Dibyajyoti-Pradhan/cloud-storage-system",stars:0},{id:2,title:"Concurrency In Java: Web Crawler",description:"Developed a concurrent web crawler in Java to explore and index pages within a specific domain. The crawler processes URLs from a given starting point, printing out each visited URL and its links while restricting itself to the specified domain.",techStack:["Java","Concurrency","Maven","JUnit","Lombok"],url:"https://github.com/Dibyajyoti-Pradhan/Crawler",external:"https://github.com/Dibyajyoti-Pradhan/Crawler",stars:0},{id:5,title:"Pokemon - Advanced HTML & CSS Project",description:"An advanced CSS project for Pokemon lovers, showcasing how far UI can be developed without JavaScript. Built using advanced HTML, CSS, SASS, BEM, and 7-1 Architecture.",techStack:["HTML","CSS","SASS","BEM","7-1 Architecture"],url:"https://github.com/Dibyajyoti-Pradhan/Iris",external:"https://github.com/Dibyajyoti-Pradhan/Iris",stars:0},{id:6,title:"Netflix: React",description:"A Netflix clone built from scratch using React, Firebase Authentication, and Styled Components. The project demonstrates advanced component usage and state management.",techStack:["React","Firebase","Styled Components"],url:"https://github.com/Dibyajyoti-Pradhan/Netflix",external:"https://github.com/Dibyajyoti-Pradhan/Netflix",stars:0},{id:3,title:"CLI Application: Cron Parser",description:"Implemented a cron expression parser in Java to expand cron strings into detailed schedules. Parses five fields (minute, hour, day of month, month, day of week) and outputs the schedule in a formatted table.",techStack:["Java","Maven","CLI Development","JUnit"],url:"https://github.com/Dibyajyoti-Pradhan/CronParser",external:"https://github.com/Dibyajyoti-Pradhan/CronParser",stars:0},{id:4,title:"CSV Parser: Cookie Log",description:"Developed a command-line application in Java to parse log files and determine the most active cookies for a given date. Processes CSV logs to provide insights into cookie activity.",techStack:["Java","Maven","JUnit","Lombok","Hashing"],url:"https://github.com/Dibyajyoti-Pradhan/Cookie",external:"https://github.com/Dibyajyoti-Pradhan/Cookie",stars:0}],$n=[{id:1,title:"GenAI for Ad Creative",description:"Introduced GenAI (Llama 2) for Ad Creatives in Meta Ads Manager App in Meta GenAI Hackathon, enhancing ad creative capabilities."},{id:2,title:"Innovation Award",description:'Received the "Most Innovative Award" at the Amazon Pay EDH Hackathon for pioneering a near-zero latency model for the Amazon Pay For Business App.'},{id:3,title:"Scholarship Recognition",description:"Recognized with the Jagadis Bose National Talent Search Scholarship, selected as one of 56 scholars from over 3000 applicants from top-tier colleges."}],Mn=[{id:1,school:"Jadavpur University",url:"https://en.wikipedia.org/wiki/Jadavpur_University",degree:"Bachelor Of Engineering",duration:"2015 - 2019",location:"Kolkata, India",major:"Electronics and Telecommunication Engineering",details:["CGPA: 8.05","Award Senior JBSNTS Scholarship"]},{id:2,school:"Krishnath College School",url:"https://en.wikipedia.org/wiki/Krishnath_College_School/",degree:"Higher Secondary (WBCHSE)",duration:"2013 - 2015",location:"West Bengal, India",major:"",details:["Percentage: 94.2%","Percentile: 99.63%","Physics 100 | Maths 95 | English 92","WBJEE: 335 (GEN | Engg.) | 3351 (GEN | Med)","Also cracked IISER Kolkata and IIEST (Mechanical)"]},{id:3,school:"Mary Immaculate School",url:"https://mismsd.in/",degree:"Secondary (ICSE)",duration:"2013",location:"West Bengal, India",major:"",details:["Percentage: 90%","Maths 97 | Computer Application 97 | Science 90"]}],zn=[{id:1,title:"Professional Certificate in Machine Learning and Artificial Intelligence",institution:"Imperial College London",institutionUrl:"https://www.imperial.ac.uk/business-school/executive-education/technology-analytics-data-science/professional-certificate-machine-learning-and-artificial-intelligence-programme/online/",department:"",duration:"25 Weeks",date:"2025 - 2026",status:"In Progress",curriculum:["Foundation: Intro to ML, Data Analysis with Pandas, Supervised Learning","Core ML: Classification, Regression, Clustering, Dimensionality Reduction","Advanced: Neural Networks, Deep Learning, CNNs, NLP","Applied: Recommender Systems, Reinforcement Learning, Deployment","Capstone: Industry Projects with Real-World Data"],capstoneProjects:[{title:"Hull Tactical \u2013 S&P 500 Market Prediction",description:"Predicting market trends using classification models",url:"https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London/tree/main/Hull%20Tactical%20%E2%80%93%20Market%20Prediction"},{title:"Black-Box Optimisation Challenge",description:"Bayesian optimization with Gaussian Process surrogates",url:"https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London/tree/main/Black-Box-Optimisation-Challenge"}],techStack:["Python","NumPy","Pandas","Scikit-learn","PyTorch","Matplotlib","Jupyter"],outcome:"Verified Digital Certificate from Imperial Executive Education",repositoryUrl:"https://github.com/Dibyajyoti-Pradhan/Capstone-Project-Imperial-College-London"}];var Nn={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Rn=t.createContext&&t.createContext(Nn),Dn=["attr","size","title"];function Ln(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function An(){return An=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},An.apply(this,arguments)}function In(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function On(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?In(Object(n),!0).forEach(function(t){_n(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):In(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _n(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bn(e){return e&&e.map((e,n)=>t.createElement(e.tag,On({key:n},e.attr),Bn(e.child)))}function Fn(e){return n=>t.createElement(Vn,An({attr:On({},e.attr)},n),Bn(e.child))}function Vn(e){var n=n=>{var r,{attr:i,size:o,title:a}=e,s=Ln(e,Dn),l=o||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",An({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,s,{className:r,style:On(On({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&t.createElement("title",null,a),e.children)};return void 0!==Rn?t.createElement(Rn.Consumer,null,e=>n(e)):n(Nn)}function Hn(e){return Fn({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Un(e){return Fn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function Wn(e){return Fn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function Yn(e){return Fn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function Kn(e){return Fn({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(e)}function Xn(e){return Fn({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(e)}function Gn(e){return Fn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(e)}function Qn(e){return Fn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"},child:[]}]})(e)}function qn(e){return Fn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function Jn(e){return Fn({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function Zn(e){return Fn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function er(e){return Fn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(e)}function tr(e){return Fn({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function nr(e){return Fn({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}function rr(e){return Fn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function ir(e){return Fn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function or(e){return Fn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(e)}function ar(e){return Fn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(e)}function sr(e){return Fn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}function lr(e){return Fn({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z"},child:[]}]})(e)}function cr(e){return Fn({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}const ur={fonts:{main:"-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",mono:"'SF Mono', 'Fira Code', 'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace",display:"'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif"},fontSizes:{xs:"11px",sm:"13px",base:"15px",lg:"18px",xl:"24px",xxl:"36px",xxxl:"48px",hero:"72px",display:"96px",mega:"128px"},fontWeights:{light:300,regular:400,medium:500,semibold:600,bold:700,heavy:800,black:900},transition:"all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",transitionFast:"all 0.15s cubic-bezier(0.25, 0.1, 0.25, 1)",transitionSlow:"all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",transitionSpring:"all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",borderRadius:"12px",borderRadiusSmall:"6px",borderRadiusLarge:"18px",borderRadiusPill:"980px",spacing:{xs:"8px",sm:"16px",md:"24px",lg:"40px",xl:"72px",xxl:"120px"}},dr={...ur,colors:{background:"#080809",backgroundSecondary:"#0e0e11",backgroundTertiary:"#141418",backgroundGradient:"linear-gradient(180deg, #080809 0%, #0e0e11 100%)",backgroundElevated:"#121216",text:"#f2f2f5",textSecondary:"#8e8e99",textTertiary:"#55555f",primary:"#f97316",primaryHover:"#fb923c",primarySubtle:"rgba(249, 115, 22, 0.08)",primaryBorder:"rgba(249, 115, 22, 0.2)",secondary:"#0e0e11",accent:"#141418",accentHover:"#1a1a1f",white:"#ffffff",darkNavy:"#080809",navy:"#0e0e11",lightNavy:"#141418",headerBackground:"rgba(8, 8, 9, 0.92)",linkHover:"#fb923c",cardGlow:"rgba(249, 115, 22, 0.15)",cardGlowGradient:"rgba(249, 115, 22, 0.06)",profileGlow:"rgba(249, 115, 22, 0.35)",cardHoverBackground:"rgba(18, 18, 22, 0.98)",cardBackground:"rgba(14, 14, 17, 0.7)",cardBorder:"rgba(255, 255, 255, 0.05)",cardBorderHover:"rgba(249, 115, 22, 0.3)",slate:"#8e8e99",lightSlate:"#b0b0be",lightestSlate:"#d0d0e0",green:"#4ade80",greenTint:"rgba(249, 115, 22, 0.08)",glass:"rgba(12, 12, 15, 0.8)",glassBorder:"rgba(255, 255, 255, 0.05)",divider:"rgba(255, 255, 255, 0.05)",timelineLine:"linear-gradient(180deg, rgba(249,115,22,0.7) 0%, rgba(249,115,22,0.1) 100%)",timelineDot:"#f97316",hubspot:"#ff7a59",meta:"#1877f2",amazon:"#ff9900"},shadows:{small:"0 1px 6px rgba(0, 0, 0, 0.5)",medium:"0 4px 20px rgba(0, 0, 0, 0.6)",large:"0 12px 48px rgba(0, 0, 0, 0.7)",glow:"0 0 40px rgba(249, 115, 22, 0.18)",card:"0 1px 0 rgba(255,255,255,0.04), 0 2px 16px rgba(0, 0, 0, 0.4)",cardHover:"0 0 0 1px rgba(249, 115, 22, 0.25), 0 8px 40px rgba(0, 0, 0, 0.55), 0 0 24px rgba(249,115,22,0.08)",inner:"inset 0 1px 0 rgba(255,255,255,0.06)"}},pr={...ur,colors:{background:"#f5f5f7",backgroundSecondary:"#eaeaef",backgroundTertiary:"#dededf",backgroundGradient:"linear-gradient(180deg, #f5f5f7 0%, #eaeaef 100%)",backgroundElevated:"#ffffff",text:"#1d1d1f",textSecondary:"#424245",textTertiary:"#86868b",primary:"#e8650a",primaryHover:"#c9540a",primarySubtle:"rgba(232, 101, 10, 0.08)",primaryBorder:"rgba(232, 101, 10, 0.2)",secondary:"#eaeaef",accent:"#f0f0f5",accentHover:"#e5e5ea",white:"#ffffff",darkNavy:"#eaeaef",navy:"#f5f5f7",lightNavy:"#ffffff",headerBackground:"rgba(245, 245, 247, 0.92)",linkHover:"#c9540a",cardGlow:"rgba(232, 101, 10, 0.08)",cardGlowGradient:"rgba(232, 101, 10, 0.04)",profileGlow:"rgba(232, 101, 10, 0.2)",cardHoverBackground:"#ffffff",cardBackground:"rgba(255, 255, 255, 0.85)",cardBorder:"rgba(0, 0, 0, 0.08)",cardBorderHover:"rgba(232, 101, 10, 0.24)",slate:"#424245",lightSlate:"#636366",lightestSlate:"#8e8e93",green:"#34c759",greenTint:"rgba(232, 101, 10, 0.08)",glass:"rgba(255, 255, 255, 0.92)",glassBorder:"rgba(0, 0, 0, 0.08)",divider:"rgba(0, 0, 0, 0.08)",timelineLine:"linear-gradient(180deg, rgba(232,101,10,0.55) 0%, rgba(232,101,10,0.04) 100%)",timelineDot:"#e8650a",hubspot:"#e85d2e",meta:"#1877f2",amazon:"#e07b00"},shadows:{small:"0 1px 4px rgba(0, 0, 0, 0.08), 0 0 0 0.5px rgba(0,0,0,0.04)",medium:"0 4px 20px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.06)",large:"0 12px 48px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06)",glow:"0 0 32px rgba(232, 101, 10, 0.12)",card:"0 0 0 0.5px rgba(0,0,0,0.06), 0 2px 8px rgba(0, 0, 0, 0.06), 0 8px 24px rgba(0,0,0,0.04)",cardHover:"0 0 0 1px rgba(232, 101, 10, 0.2), 0 8px 36px rgba(0, 0, 0, 0.12)",inner:"inset 0 1px 0 rgba(255,255,255,1)"}};var hr=n(579);const fr=(0,t.createContext)(),mr=e=>{let{children:n,gameMode:r}=e;const i=localStorage.getItem("theme"),[o,a]=(0,t.useState)(i||"dark");(0,t.useEffect)(()=>{localStorage.setItem("theme",o)},[o]);const s=o,l="dark"===s?dr:pr,c=r?{...l}:l;return(0,hr.jsx)(fr.Provider,{value:{theme:s,toggleTheme:()=>{a(e=>"dark"===e?"light":"dark")},isDarkMode:"dark"===s,gameMode:r},children:n(c)})},gr=xn.button`
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
`,vr=xn.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  border: 0;
`,yr=()=>{const{theme:e,toggleTheme:n,gameMode:r}=(0,t.useContext)(fr),i="dark"===e;return r?null:(0,hr.jsxs)(gr,{onClick:n,"aria-label":i?"Switch to light mode":"Switch to dark mode",title:i?"Light mode":"Dark mode",children:[i?(0,hr.jsx)(ir,{size:13}):(0,hr.jsx)(sr,{size:13}),(0,hr.jsx)(vr,{children:i?"Dark mode":"Light mode"})]})},xr=wn`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,br=xn.header`
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
      animation: ${xr} 0.5s ease 0.05s forwards;

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
      animation: ${xr} 0.5s ease 0.12s forwards;
    }

    .status-row {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 14px;
      opacity: 0;
      animation: ${xr} 0.5s ease 0.2s forwards;

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
        animation: ${xr} 0.4s ease forwards;

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
      animation: ${xr} 0.5s ease 0.5s forwards;

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
      animation: ${xr} 0.5s ease 0.58s forwards;

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
`,wr=["01","02","03","04","05","06","07","08"],Sr={GitHub:Hn,LinkedIn:Wn,Instagram:Un,LeetCode:Jn},kr=()=>{const[e,n]=(0,t.useState)("");(0,t.useEffect)(()=>{const e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&n(e.target.id)})},{root:null,rootMargin:"-80px 0px -60% 0px",threshold:0}),t=document.querySelectorAll("section[id]");return t.forEach(t=>e.observe(t)),()=>t.forEach(t=>e.unobserve(t))},[]);return(0,hr.jsxs)(br,{children:[(0,hr.jsxs)("div",{className:"logo-block",children:[(0,hr.jsx)("div",{className:"name",children:(0,hr.jsx)("a",{href:"/",children:En.name})}),(0,hr.jsx)("div",{className:"title",children:En.description}),(0,hr.jsxs)("div",{className:"status-row",children:[(0,hr.jsx)("div",{className:"dot"}),(0,hr.jsx)("span",{children:"London, UK"})]})]}),(0,hr.jsx)("nav",{className:"nav-links",children:(0,hr.jsx)("ul",{children:kn.map((t,n)=>{let{id:r,name:i,url:o}=t;return(0,hr.jsx)("li",{children:(0,hr.jsxs)("a",{href:o,className:e===o.replace("#","")?"active":"",onClick:e=>((e,t)=>{e.preventDefault();const n=document.getElementById(t.replace("#",""));n&&window.scrollTo({top:n.getBoundingClientRect().top+window.scrollY-60,behavior:"smooth"})})(e,o),children:[(0,hr.jsx)("span",{className:"nav-label",children:i}),(0,hr.jsx)("span",{className:"nav-num",children:wr[n]})]})},r)})})}),(0,hr.jsxs)("div",{className:"bottom-block",children:[(0,hr.jsx)("a",{className:"resume-button",href:"/my-portfolio/resume.pdf",target:"_blank",rel:"noopener noreferrer",children:"Download R\xe9sum\xe9"}),(0,hr.jsxs)("div",{className:"social-icons",children:[Cn.map(e=>{let{id:t,name:n,url:r}=e;const i=Sr[n];return i?(0,hr.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer","aria-label":n,title:n,children:(0,hr.jsx)(i,{})},t):null}),(0,hr.jsx)(yr,{})]})]})]})},Cr=xn.footer`
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
`,Er=xn.button`
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
`,jr=()=>{const{gameMode:e}=(0,t.useContext)(fr);return(0,hr.jsxs)(Cr,{children:[(0,hr.jsxs)("div",{className:"credits",children:["Built by"," ",(0,hr.jsx)("a",{href:"https://www.linkedin.com/in/dibyajyoti-pradhan-83a649146/",target:"_blank",rel:"noopener noreferrer",children:En.name})]}),(0,hr.jsxs)("div",{className:"year",children:["\xa9 ",(new Date).getFullYear()]}),(0,hr.jsxs)(Er,{$active:e,onClick:()=>{document.dispatchEvent(new CustomEvent("toggleGameMode"))},title:e?"Exit dev mode":"Enter dev mode","aria-label":e?"Exit dev mode":"Enter dev mode",children:[(0,hr.jsx)("span",{className:"trigger-dot"}),">_"]})]})};const Tr=xn(function(e){return Fn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"},child:[]}]})(e)})`
  font-size: 14px;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}} !important;
  flex-shrink: 0;
`,Pr=wn`
  from { opacity: 0; transform: translateY(36px); }
  to   { opacity: 1; transform: translateY(0); }
`,$r=wn`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Mr=wn`
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
`,zr=wn`
  from { width: 0; }
  to   { width: 100%; }
`,Nr=wn`
  0%, 100% { box-shadow: 0 0 0 0 currentColor; }
  50%       { box-shadow: 0 0 0 5px transparent; }
`,Rr=xn.section`
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
`,Dr=xn.div`
  padding: 100px 48px 108px;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 900px) {
    padding: 48px 24px 60px;
  }
`,Lr=xn.div`
  display: flex;
  flex-direction: column;
`,Ar=xn.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?gn`${Mr} 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s forwards`:"none"}};

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
`,Ir=xn.div`
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

  ${e=>{let{$visible:t}=e;return t&&gn`
      .char {
        animation: ${Pr} 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
      }
    `}}
`,Or=xn.div`
  position: relative;
  height: 1px;
  background: ${e=>{let{theme:t}=e;return t.colors.divider}};
  margin-bottom: 24px;
  overflow: hidden;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?gn`${$r} 0.01s 0.68s forwards`:"none"}};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(90deg, ${e=>{let{theme:t}=e;return t.colors.primary}}, ${e=>{let{theme:t}=e;return t.colors.primaryHover}});
    width: 0;
    animation: ${e=>{let{$visible:t}=e;return t?gn`${zr} 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.70s forwards`:"none"}};
  }
`,_r=xn.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?gn`${$r} 0.5s ease 0.88s forwards`:"none"}};

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
    animation: ${Nr} 2.5s ease-in-out infinite;
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
`,Br=xn.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 36px;
  flex-wrap: wrap;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?gn`${$r} 0.5s ease 0.96s forwards`:"none"}};

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
`,Fr=xn.div`
  max-width: 560px;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?gn`${$r} 0.6s ease 1.06s forwards`:"none"}};

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
`,Vr=()=>{const[e,n]=(0,t.useState)(!1),r=(0,t.useRef)(null);return(0,t.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&n(!0)},{threshold:.1});return r.current&&e.observe(r.current),()=>e.disconnect()},[]),(0,hr.jsx)(Rr,{id:"about",ref:r,children:(0,hr.jsx)(Dr,{children:(0,hr.jsxs)(Lr,{children:[(0,hr.jsxs)(Ar,{$visible:e,theme:void 0,children:[(0,hr.jsx)("div",{className:"line"}),(0,hr.jsx)("span",{children:"Hello, I'm"})]}),(0,hr.jsxs)(Ir,{$visible:e,children:[(0,hr.jsx)("span",{className:"line-1",children:Array.from("DIBYAJYOTI").map((e,t)=>(0,hr.jsx)("span",{className:"char",style:{animationDelay:`${(.12+.022*t).toFixed(3)}s`},children:e},t))}),(0,hr.jsx)("span",{className:"line-2",children:Array.from("PRADHAN").map((e,t)=>(0,hr.jsx)("span",{className:"char",style:{animationDelay:`${(.38+.022*t).toFixed(3)}s`},children:e},t))})]}),(0,hr.jsx)(Or,{$visible:e}),(0,hr.jsxs)(_r,{$visible:e,children:[(0,hr.jsx)("span",{className:"role-text",children:En.description}),(0,hr.jsx)(Tr,{className:"hide-mobile"}),(0,hr.jsx)("span",{className:"role-text hide-mobile",children:"London, UK"}),(0,hr.jsx)("span",{className:"dot"}),(0,hr.jsx)("span",{className:"availability",children:"Available"})]}),(0,hr.jsxs)(Br,{$visible:e,children:[(0,hr.jsx)("span",{className:"label",children:"Currently"}),(0,hr.jsxs)("span",{className:"pill",children:[(0,hr.jsx)("span",{className:"company-dot",style:{background:"#ff7a59"}}),"HubSpot"]}),(0,hr.jsx)("span",{className:"separator",children:"\xb7"}),(0,hr.jsx)("span",{className:"label",children:"Previously"}),(0,hr.jsxs)("span",{className:"pill",children:[(0,hr.jsx)("span",{className:"company-dot",style:{background:"#1877f2"}}),"Meta"]}),(0,hr.jsxs)("span",{className:"pill",children:[(0,hr.jsx)("span",{className:"company-dot",style:{background:"#ff9900"}}),"Amazon"]})]}),(0,hr.jsx)(Fr,{$visible:e,children:En.about.slice(0,2).map((e,t)=>(0,hr.jsx)("p",{dangerouslySetInnerHTML:{__html:e}},t))})]})})})};const Hr="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;function Ur(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function Wr(e){return"nodeType"in e}function Yr(e){var t,n;return e?Ur(e)?e:Wr(e)&&null!=(t=null==(n=e.ownerDocument)?void 0:n.defaultView)?t:window:window}function Kr(e){const{Document:t}=Yr(e);return e instanceof t}function Xr(e){return!Ur(e)&&e instanceof Yr(e).HTMLElement}function Gr(e){return e instanceof Yr(e).SVGElement}function Qr(e){return e?Ur(e)?e.document:Wr(e)?Kr(e)?e:Xr(e)||Gr(e)?e.ownerDocument:document:document:document}const qr=Hr?t.useLayoutEffect:t.useEffect;function Jr(e){const n=(0,t.useRef)(e);return qr(()=>{n.current=e}),(0,t.useCallback)(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return null==n.current?void 0:n.current(...t)},[])}function Zr(e,n){void 0===n&&(n=[e]);const r=(0,t.useRef)(e);return qr(()=>{r.current!==e&&(r.current=e)},n),r}function ei(e,n){const r=(0,t.useRef)();return(0,t.useMemo)(()=>{const t=e(r.current);return r.current=t,t},[...n])}function ti(e){const n=Jr(e),r=(0,t.useRef)(null),i=(0,t.useCallback)(e=>{e!==r.current&&(null==n||n(e,r.current)),r.current=e},[]);return[r,i]}function ni(e){const n=(0,t.useRef)();return(0,t.useEffect)(()=>{n.current=e},[e]),n.current}let ri={};function ii(e,n){return(0,t.useMemo)(()=>{if(n)return n;const t=null==ri[e]?0:ri[e]+1;return ri[e]=t,e+"-"+t},[e,n])}function oi(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce((t,n)=>{const r=Object.entries(n);for(const[i,o]of r){const n=t[i];null!=n&&(t[i]=n+e*o)}return t},{...t})}}const ai=oi(1),si=oi(-1);function li(e){if(!e)return!1;const{KeyboardEvent:t}=Yr(e.target);return t&&e instanceof t}function ci(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=Yr(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const ui=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[ui.Translate.toString(e),ui.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),di="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function pi(e){return e.matches(di)?e:e.querySelector(di)}const hi={display:"none"};function fi(e){let{id:n,value:r}=e;return t.createElement("div",{id:n,style:hi},r)}function mi(e){let{id:n,announcement:r,ariaLiveType:i="assertive"}=e;return t.createElement("div",{id:n,style:{position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":i,"aria-atomic":!0},r)}const gi=(0,t.createContext)(null);const vi={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},yi={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function xi(e){let{announcements:n=yi,container:r,hiddenTextDescribedById:i,screenReaderInstructions:a=vi}=e;const{announce:s,announcement:l}=function(){const[e,n]=(0,t.useState)("");return{announce:(0,t.useCallback)(e=>{null!=e&&n(e)},[]),announcement:e}}(),c=ii("DndLiveRegion"),[u,d]=(0,t.useState)(!1);if((0,t.useEffect)(()=>{d(!0)},[]),function(e){const n=(0,t.useContext)(gi);(0,t.useEffect)(()=>{if(!n)throw new Error("useDndMonitor must be used within a children of <DndContext>");return n(e)},[e,n])}((0,t.useMemo)(()=>({onDragStart(e){let{active:t}=e;s(n.onDragStart({active:t}))},onDragMove(e){let{active:t,over:r}=e;n.onDragMove&&s(n.onDragMove({active:t,over:r}))},onDragOver(e){let{active:t,over:r}=e;s(n.onDragOver({active:t,over:r}))},onDragEnd(e){let{active:t,over:r}=e;s(n.onDragEnd({active:t,over:r}))},onDragCancel(e){let{active:t,over:r}=e;s(n.onDragCancel({active:t,over:r}))}}),[s,n])),!u)return null;const p=t.createElement(t.Fragment,null,t.createElement(fi,{id:i,value:a.draggable}),t.createElement(mi,{id:c,announcement:l}));return r?(0,o.createPortal)(p,r):p}var bi;function wi(){}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(bi||(bi={}));const Si=Object.freeze({x:0,y:0});function ki(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Ci(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Ei(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function ji(e,t,n){return void 0===t&&(t=e.left),void 0===n&&(n=e.top),{x:t+.5*e.width,y:n+.5*e.height}}const Ti=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=ji(t,t.left,t.top),o=[];for(const a of r){const{id:e}=a,t=n.get(e);if(t){const n=ki(ji(t),i);o.push({id:e,data:{droppableContainer:a,value:n}})}}return o.sort(Ci)};function Pi(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),o=Math.min(t.top+t.height,e.top+e.height),a=i-r,s=o-n;if(r<i&&n<o){const n=t.width*t.height,r=e.width*e.height,i=a*s;return Number((i/(n+r-i)).toFixed(4))}return 0}const $i=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=[];for(const o of r){const{id:e}=o,r=n.get(e);if(r){const n=Pi(r,t);n>0&&i.push({id:e,data:{droppableContainer:o,value:n}})}}return i.sort(Ei)};function Mi(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Si}function zi(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x}),{...t})}}const Ni=zi(1);function Ri(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}const Di={ignoreTransform:!1};function Li(e,t){void 0===t&&(t=Di);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:r}=Yr(e).getComputedStyle(e);t&&(n=function(e,t,n){const r=Ri(t);if(!r)return e;const{scaleX:i,scaleY:o,x:a,y:s}=r,l=e.left-a-(1-i)*parseFloat(n),c=e.top-s-(1-o)*parseFloat(n.slice(n.indexOf(" ")+1)),u=i?e.width/i:e.width,d=o?e.height/o:e.height;return{width:u,height:d,top:c,right:l+u,bottom:c+d,left:l}}(n,t,r))}const{top:r,left:i,width:o,height:a,bottom:s,right:l}=n;return{top:r,left:i,width:o,height:a,bottom:s,right:l}}function Ai(e){return Li(e,{ignoreTransform:!0})}function Ii(e,t){const n=[];return e?function r(i){if(null!=t&&n.length>=t)return n;if(!i)return n;if(Kr(i)&&null!=i.scrollingElement&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!Xr(i)||Gr(i))return n;if(n.includes(i))return n;const o=Yr(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=Yr(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(e=>{const r=t[e];return"string"===typeof r&&n.test(r)})}(i,o)&&n.push(i),function(e,t){return void 0===t&&(t=Yr(e).getComputedStyle(e)),"fixed"===t.position}(i,o)?n:r(i.parentNode)}(e):n}function Oi(e){const[t]=Ii(e,1);return null!=t?t:null}function _i(e){return Hr&&e?Ur(e)?e:Wr(e)?Kr(e)||e===Qr(e).scrollingElement?window:Xr(e)?e:null:null:null}function Bi(e){return Ur(e)?e.scrollX:e.scrollLeft}function Fi(e){return Ur(e)?e.scrollY:e.scrollTop}function Vi(e){return{x:Bi(e),y:Fi(e)}}var Hi;function Ui(e){return!(!Hr||!e)&&e===document.scrollingElement}function Wi(e){const t={x:0,y:0},n=Ui(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(Hi||(Hi={}));const Yi={x:.2,y:.2};function Ki(e,t,n,r,i){let{top:o,left:a,right:s,bottom:l}=n;void 0===r&&(r=10),void 0===i&&(i=Yi);const{isTop:c,isBottom:u,isLeft:d,isRight:p}=Wi(e),h={x:0,y:0},f={x:0,y:0},m=t.height*i.y,g=t.width*i.x;return!c&&o<=t.top+m?(h.y=Hi.Backward,f.y=r*Math.abs((t.top+m-o)/m)):!u&&l>=t.bottom-m&&(h.y=Hi.Forward,f.y=r*Math.abs((t.bottom-m-l)/m)),!p&&s>=t.right-g?(h.x=Hi.Forward,f.x=r*Math.abs((t.right-g-s)/g)):!d&&a<=t.left+g&&(h.x=Hi.Backward,f.x=r*Math.abs((t.left+g-a)/g)),{direction:h,speed:f}}function Xi(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function Gi(e){return e.reduce((e,t)=>ai(e,Vi(t)),Si)}function Qi(e,t){if(void 0===t&&(t=Li),!e)return;const{top:n,left:r,bottom:i,right:o}=t(e);Oi(e)&&(i<=0||o<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const qi=[["x",["left","right"],function(e){return e.reduce((e,t)=>e+Bi(t),0)}],["y",["top","bottom"],function(e){return e.reduce((e,t)=>e+Fi(t),0)}]];class Ji{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const n=Ii(t),r=Gi(n);this.rect={...e},this.width=e.width,this.height=e.height;for(const[i,o,a]of qi)for(const e of o)Object.defineProperty(this,e,{get:()=>{const t=a(n),o=r[i]-t;return this.rect[e]+o},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Zi{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)})},this.target=e}add(e,t,n){var r;null==(r=this.target)||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}}function eo(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return"number"===typeof t?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t&&r>t.y}var to,no;function ro(e){e.preventDefault()}function io(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(to||(to={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"}(no||(no={}));const oo={start:[no.Space,no.Enter],cancel:[no.Esc],end:[no.Space,no.Enter,no.Tab]},ao=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case no.Right:return{...n,x:n.x+25};case no.Left:return{...n,x:n.x-25};case no.Down:return{...n,y:n.y+25};case no.Up:return{...n,y:n.y-25}}};class so{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new Zi(Qr(t)),this.windowListeners=new Zi(Yr(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(to.Resize,this.handleCancel),this.windowListeners.add(to.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(to.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&Qi(n),t(Si)}handleKeyDown(e){if(li(e)){const{active:t,context:n,options:r}=this.props,{keyboardCodes:i=oo,coordinateGetter:o=ao,scrollBehavior:a="smooth"}=r,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=n.current,c=l?{x:l.left,y:l.top}:Si;this.referenceCoordinates||(this.referenceCoordinates=c);const u=o(e,{active:t,context:n.current,currentCoordinates:c});if(u){const t=si(u,c),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(const n of i){const i=e.code,{isTop:o,isRight:s,isLeft:l,isBottom:c,maxScroll:d,minScroll:p}=Wi(n),h=Xi(n),f={x:Math.min(i===no.Right?h.right-h.width/2:h.right,Math.max(i===no.Right?h.left:h.left+h.width/2,u.x)),y:Math.min(i===no.Down?h.bottom-h.height/2:h.bottom,Math.max(i===no.Down?h.top:h.top+h.height/2,u.y))},m=i===no.Right&&!s||i===no.Left&&!l,g=i===no.Down&&!c||i===no.Up&&!o;if(m&&f.x!==u.x){const e=n.scrollLeft+t.x,o=i===no.Right&&e<=d.x||i===no.Left&&e>=p.x;if(o&&!t.y)return void n.scrollTo({left:e,behavior:a});r.x=o?n.scrollLeft-e:i===no.Right?n.scrollLeft-d.x:n.scrollLeft-p.x,r.x&&n.scrollBy({left:-r.x,behavior:a});break}if(g&&f.y!==u.y){const e=n.scrollTop+t.y,o=i===no.Down&&e<=d.y||i===no.Up&&e>=p.y;if(o&&!t.x)return void n.scrollTo({top:e,behavior:a});r.y=o?n.scrollTop-e:i===no.Down?n.scrollTop-d.y:n.scrollTop-p.y,r.y&&n.scrollBy({top:-r.y,behavior:a});break}}this.handleMove(e,ai(si(u,this.referenceCoordinates),r))}}}handleMove(e,t){const{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}function lo(e){return Boolean(e&&"distance"in e)}function co(e){return Boolean(e&&"delay"in e)}so.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=oo,onActivation:i}=t,{active:o}=n;const{code:a}=e.nativeEvent;if(r.start.includes(a)){const t=o.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class uo{constructor(e,t,n){var r;void 0===n&&(n=function(e){const{EventTarget:t}=Yr(e);return e instanceof t?e:Qr(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:o}=i;this.props=e,this.events=t,this.document=Qr(o),this.documentListeners=new Zi(this.document),this.listeners=new Zi(n),this.windowListeners=new Zi(Yr(o)),this.initialCoordinates=null!=(r=ci(i))?r:Si,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(to.Resize,this.handleCancel),this.windowListeners.add(to.DragStart,ro),this.windowListeners.add(to.VisibilityChange,this.handleCancel),this.windowListeners.add(to.ContextMenu,ro),this.documentListeners.add(to.Keydown,this.handleKeydown),t){if(null!=n&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(co(t))return this.timeoutId=setTimeout(this.handleStart,t.delay),void this.handlePending(t);if(lo(t))return void this.handlePending(t)}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){const{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(to.Click,io,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(to.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:n,initialCoordinates:r,props:i}=this,{onMove:o,options:{activationConstraint:a}}=i;if(!r)return;const s=null!=(t=ci(e))?t:Si,l=si(r,s);if(!n&&a){if(lo(a)){if(null!=a.tolerance&&eo(l,a.tolerance))return this.handleCancel();if(eo(l,a.distance))return this.handleStart()}return co(a)&&eo(l,a.tolerance)?this.handleCancel():void this.handlePending(a,l)}e.cancelable&&e.preventDefault(),o(s)}handleEnd(){const{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){const{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===no.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const po={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class ho extends uo{constructor(e){const{event:t}=e,n=Qr(t.target);super(e,po,n)}}ho.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!(!n.isPrimary||0!==n.button)&&(null==r||r({event:n}),!0)}}];const fo={move:{name:"mousemove"},end:{name:"mouseup"}};var mo;!function(e){e[e.RightClick=2]="RightClick"}(mo||(mo={}));(class extends uo{constructor(e){super(e,fo,Qr(e.event.target))}}).activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button!==mo.RightClick&&(null==r||r({event:n}),!0)}}];const go={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};var vo,yo;function xo(e){let{acceleration:n,activator:r=vo.Pointer,canScroll:i,draggingRect:o,enabled:a,interval:s=5,order:l=yo.TreeOrder,pointerCoordinates:c,scrollableAncestors:u,scrollableAncestorRects:d,delta:p,threshold:h}=e;const f=function(e){let{delta:t,disabled:n}=e;const r=ni(t);return ei(e=>{if(n||!r||!e)return bo;const i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[Hi.Backward]:e.x[Hi.Backward]||-1===i.x,[Hi.Forward]:e.x[Hi.Forward]||1===i.x},y:{[Hi.Backward]:e.y[Hi.Backward]||-1===i.y,[Hi.Forward]:e.y[Hi.Forward]||1===i.y}}},[n,t,r])}({delta:p,disabled:!a}),[m,g]=function(){const e=(0,t.useRef)(null);return[(0,t.useCallback)((t,n)=>{e.current=setInterval(t,n)},[]),(0,t.useCallback)(()=>{null!==e.current&&(clearInterval(e.current),e.current=null)},[])]}(),v=(0,t.useRef)({x:0,y:0}),y=(0,t.useRef)({x:0,y:0}),x=(0,t.useMemo)(()=>{switch(r){case vo.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case vo.DraggableRect:return o}},[r,o,c]),b=(0,t.useRef)(null),w=(0,t.useCallback)(()=>{const e=b.current;if(!e)return;const t=v.current.x*y.current.x,n=v.current.y*y.current.y;e.scrollBy(t,n)},[]),S=(0,t.useMemo)(()=>l===yo.TreeOrder?[...u].reverse():u,[l,u]);(0,t.useEffect)(()=>{if(a&&u.length&&x){for(const e of S){if(!1===(null==i?void 0:i(e)))continue;const t=u.indexOf(e),r=d[t];if(!r)continue;const{direction:o,speed:a}=Ki(e,r,x,n,h);for(const e of["x","y"])f[e][o[e]]||(a[e]=0,o[e]=0);if(a.x>0||a.y>0)return g(),b.current=e,m(w,s),v.current=a,void(y.current=o)}v.current={x:0,y:0},y.current={x:0,y:0},g()}else g()},[n,w,i,g,a,s,JSON.stringify(x),JSON.stringify(f),m,u,S,d,JSON.stringify(h)])}(class extends uo{constructor(e){super(e,go)}static setup(){return window.addEventListener(go.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(go.move.name,e)};function e(){}}}).activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:i}=n;return!(i.length>1)&&(null==r||r({event:n}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(vo||(vo={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(yo||(yo={}));const bo={x:{[Hi.Backward]:!1,[Hi.Forward]:!1},y:{[Hi.Backward]:!1,[Hi.Forward]:!1}};var wo,So;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(wo||(wo={})),function(e){e.Optimized="optimized"}(So||(So={}));const ko=new Map;function Co(e,t){return ei(n=>e?n||("function"===typeof t?t(e):e):null,[t,e])}function Eo(e){let{callback:n,disabled:r}=e;const i=Jr(n),o=(0,t.useMemo)(()=>{if(r||"undefined"===typeof window||"undefined"===typeof window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(i)},[r]);return(0,t.useEffect)(()=>()=>null==o?void 0:o.disconnect(),[o]),o}function jo(e){return new Ji(Li(e),e)}function To(e,n,r){void 0===n&&(n=jo);const[i,o]=(0,t.useState)(null);function a(){o(t=>{if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=t?t:r)?i:null;const o=n(e);return JSON.stringify(t)===JSON.stringify(o)?t:o})}const s=function(e){let{callback:n,disabled:r}=e;const i=Jr(n),o=(0,t.useMemo)(()=>{if(r||"undefined"===typeof window||"undefined"===typeof window.MutationObserver)return;const{MutationObserver:e}=window;return new e(i)},[i,r]);return(0,t.useEffect)(()=>()=>null==o?void 0:o.disconnect(),[o]),o}({callback(t){if(e)for(const n of t){const{type:t,target:r}=n;if("childList"===t&&r instanceof HTMLElement&&r.contains(e)){a();break}}}}),l=Eo({callback:a});return qr(()=>{a(),e?(null==l||l.observe(e),null==s||s.observe(document.body,{childList:!0,subtree:!0})):(null==l||l.disconnect(),null==s||s.disconnect())},[e]),i}const Po=[];function $o(e,n){void 0===n&&(n=[]);const r=(0,t.useRef)(null);return(0,t.useEffect)(()=>{r.current=null},n),(0,t.useEffect)(()=>{const t=e!==Si;t&&!r.current&&(r.current=e),!t&&r.current&&(r.current=null)},[e]),r.current?si(e,r.current):Si}function Mo(e){return(0,t.useMemo)(()=>e?function(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}(e):null,[e])}const zo=[];function No(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return Xr(t)?t:e}const Ro=[{sensor:ho,options:{}},{sensor:so,options:{}}],Do={current:{}},Lo={draggable:{measure:Ai},droppable:{measure:Ai,strategy:wo.WhileDragging,frequency:So.Optimized},dragOverlay:{measure:Li}};class Ao extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){var t,n;return null!=(t=null==(n=this.get(e))?void 0:n.node.current)?t:void 0}}const Io={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Ao,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:wi},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Lo,measureDroppableContainers:wi,windowRect:null,measuringScheduled:!1},Oo={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:wi,draggableNodes:new Map,over:null,measureDroppableContainers:wi},_o=(0,t.createContext)(Oo),Bo=(0,t.createContext)(Io);function Fo(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Ao}}}function Vo(e,t){switch(t.type){case bi.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case bi.DragMove:return null==e.draggable.active?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case bi.DragEnd:case bi.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case bi.RegisterDroppable:{const{element:n}=t,{id:r}=n,i=new Ao(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case bi.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=t,o=e.droppable.containers.get(n);if(!o||r!==o.key)return e;const a=new Ao(e.droppable.containers);return a.set(n,{...o,disabled:i}),{...e,droppable:{...e.droppable,containers:a}}}case bi.UnregisterDroppable:{const{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const o=new Ao(e.droppable.containers);return o.delete(n),{...e,droppable:{...e.droppable,containers:o}}}default:return e}}function Ho(e){let{disabled:n}=e;const{active:r,activatorEvent:i,draggableNodes:o}=(0,t.useContext)(_o),a=ni(i),s=ni(null==r?void 0:r.id);return(0,t.useEffect)(()=>{if(!n&&!i&&a&&null!=s){if(!li(a))return;if(document.activeElement===a.target)return;const e=o.get(s);if(!e)return;const{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame(()=>{for(const e of[t.current,n.current]){if(!e)continue;const t=pi(e);if(t){t.focus();break}}})}},[i,n,o,s,a]),null}function Uo(e,t){let{transform:n,...r}=t;return null!=e&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}const Wo=(0,t.createContext)({...Si,scaleX:1,scaleY:1});var Yo;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(Yo||(Yo={}));const Ko=(0,t.memo)(function(e){var n,r,i,a;let{id:s,accessibility:l,autoScroll:c=!0,children:u,sensors:d=Ro,collisionDetection:p=$i,measuring:h,modifiers:f,...m}=e;const g=(0,t.useReducer)(Vo,void 0,Fo),[v,y]=g,[x,b]=function(){const[e]=(0,t.useState)(()=>new Set),n=(0,t.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]);return[(0,t.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>{var t;return null==(t=e[n])?void 0:t.call(e,r)})},[e]),n]}(),[w,S]=(0,t.useState)(Yo.Uninitialized),k=w===Yo.Initialized,{draggable:{active:C,nodes:E,translate:j},droppable:{containers:T}}=v,P=null!=C?E.get(C):null,$=(0,t.useRef)({initial:null,translated:null}),M=(0,t.useMemo)(()=>{var e;return null!=C?{id:C,data:null!=(e=null==P?void 0:P.data)?e:Do,rect:$}:null},[C,P]),z=(0,t.useRef)(null),[N,R]=(0,t.useState)(null),[D,L]=(0,t.useState)(null),A=Zr(m,Object.values(m)),I=ii("DndDescribedBy",s),O=(0,t.useMemo)(()=>T.getEnabled(),[T]),_=(B=h,(0,t.useMemo)(()=>({draggable:{...Lo.draggable,...null==B?void 0:B.draggable},droppable:{...Lo.droppable,...null==B?void 0:B.droppable},dragOverlay:{...Lo.dragOverlay,...null==B?void 0:B.dragOverlay}}),[null==B?void 0:B.draggable,null==B?void 0:B.droppable,null==B?void 0:B.dragOverlay]));var B;const{droppableRects:F,measureDroppableContainers:V,measuringScheduled:H}=function(e,n){let{dragging:r,dependencies:i,config:o}=n;const[a,s]=(0,t.useState)(null),{frequency:l,measure:c,strategy:u}=o,d=(0,t.useRef)(e),p=function(){switch(u){case wo.Always:return!1;case wo.BeforeDragging:return r;default:return!r}}(),h=Zr(p),f=(0,t.useCallback)(function(e){void 0===e&&(e=[]),h.current||s(t=>null===t?e:t.concat(e.filter(e=>!t.includes(e))))},[h]),m=(0,t.useRef)(null),g=ei(t=>{if(p&&!r)return ko;if(!t||t===ko||d.current!==e||null!=a){const t=new Map;for(let n of e){if(!n)continue;if(a&&a.length>0&&!a.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}const e=n.node.current,r=e?new Ji(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,a,r,p,c]);return(0,t.useEffect)(()=>{d.current=e},[e]),(0,t.useEffect)(()=>{p||f()},[r,p]),(0,t.useEffect)(()=>{a&&a.length>0&&s(null)},[JSON.stringify(a)]),(0,t.useEffect)(()=>{p||"number"!==typeof l||null!==m.current||(m.current=setTimeout(()=>{f(),m.current=null},l))},[l,p,f,...i]),{droppableRects:g,measureDroppableContainers:f,measuringScheduled:null!=a}}(O,{dragging:k,dependencies:[j.x,j.y],config:_.droppable}),U=function(e,t){const n=null!=t?e.get(t):void 0,r=n?n.node.current:null;return ei(e=>{var n;return null==t?null:null!=(n=null!=r?r:e)?n:null},[r,t])}(E,C),W=(0,t.useMemo)(()=>D?ci(D):null,[D]),Y=function(){const e=!1===(null==N?void 0:N.autoScrollEnabled),t="object"===typeof c?!1===c.enabled:!1===c,n=k&&!e&&!t;if("object"===typeof c)return{...c,enabled:n};return{enabled:n}}(),K=function(e,t){return Co(e,t)}(U,_.draggable.measure);!function(e){let{activeNode:n,measure:r,initialRect:i,config:o=!0}=e;const a=(0,t.useRef)(!1),{x:s,y:l}="boolean"===typeof o?{x:o,y:o}:o;qr(()=>{if(!s&&!l||!n)return void(a.current=!1);if(a.current||!i)return;const e=null==n?void 0:n.node.current;if(!e||!1===e.isConnected)return;const t=Mi(r(e),i);if(s||(t.x=0),l||(t.y=0),a.current=!0,Math.abs(t.x)>0||Math.abs(t.y)>0){const n=Oi(e);n&&n.scrollBy({top:t.y,left:t.x})}},[n,s,l,i,r])}({activeNode:null!=C?E.get(C):null,config:Y.layoutShiftCompensation,initialRect:K,measure:_.draggable.measure});const X=To(U,_.draggable.measure,K),G=To(U?U.parentElement:null),Q=(0,t.useRef)({activatorEvent:null,active:null,activeNode:U,collisionRect:null,collisions:null,droppableRects:F,draggableNodes:E,draggingNode:null,draggingNodeRect:null,droppableContainers:T,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),q=T.getNodeFor(null==(n=Q.current.over)?void 0:n.id),J=function(e){let{measure:n}=e;const[r,i]=(0,t.useState)(null),o=Eo({callback:(0,t.useCallback)(e=>{for(const{target:t}of e)if(Xr(t)){i(e=>{const r=n(t);return e?{...e,width:r.width,height:r.height}:r});break}},[n])}),a=(0,t.useCallback)(e=>{const t=No(e);null==o||o.disconnect(),t&&(null==o||o.observe(t)),i(t?n(t):null)},[n,o]),[s,l]=ti(a);return(0,t.useMemo)(()=>({nodeRef:s,rect:r,setRef:l}),[r,s,l])}({measure:_.dragOverlay.measure}),Z=null!=(r=J.nodeRef.current)?r:U,ee=k?null!=(i=J.rect)?i:X:null,te=Boolean(J.nodeRef.current&&J.rect),ne=Mi(re=te?null:X,Co(re));var re;const ie=Mo(Z?Yr(Z):null),oe=function(e){const n=(0,t.useRef)(e),r=ei(t=>e?t&&t!==Po&&e&&n.current&&e.parentNode===n.current.parentNode?t:Ii(e):Po,[e]);return(0,t.useEffect)(()=>{n.current=e},[e]),r}(k?null!=q?q:U:null),ae=function(e,n){void 0===n&&(n=Li);const[r]=e,i=Mo(r?Yr(r):null),[o,a]=(0,t.useState)(zo);function s(){a(()=>e.length?e.map(e=>Ui(e)?i:new Ji(n(e),e)):zo)}const l=Eo({callback:s});return qr(()=>{null==l||l.disconnect(),s(),e.forEach(e=>null==l?void 0:l.observe(e))},[e]),o}(oe),se=Uo(f,{transform:{x:j.x-ne.x,y:j.y-ne.y,scaleX:1,scaleY:1},activatorEvent:D,active:M,activeNodeRect:X,containerNodeRect:G,draggingNodeRect:ee,over:Q.current.over,overlayNodeRect:J.rect,scrollableAncestors:oe,scrollableAncestorRects:ae,windowRect:ie}),le=W?ai(W,j):null,ce=function(e){const[n,r]=(0,t.useState)(null),i=(0,t.useRef)(e),o=(0,t.useCallback)(e=>{const t=_i(e.target);t&&r(e=>e?(e.set(t,Vi(t)),new Map(e)):null)},[]);return(0,t.useEffect)(()=>{const t=i.current;if(e!==t){n(t);const a=e.map(e=>{const t=_i(e);return t?(t.addEventListener("scroll",o,{passive:!0}),[t,Vi(t)]):null}).filter(e=>null!=e);r(a.length?new Map(a):null),i.current=e}return()=>{n(e),n(t)};function n(e){e.forEach(e=>{const t=_i(e);null==t||t.removeEventListener("scroll",o)})}},[o,e]),(0,t.useMemo)(()=>e.length?n?Array.from(n.values()).reduce((e,t)=>ai(e,t),Si):Gi(e):Si,[e,n])}(oe),ue=$o(ce),de=$o(ce,[X]),pe=ai(se,ue),he=ee?Ni(ee,se):null,fe=M&&he?p({active:M,collisionRect:he,droppableRects:F,droppableContainers:O,pointerCoordinates:le}):null,me=function(e,t){if(!e||0===e.length)return null;const[n]=e;return t?n[t]:n}(fe,"id"),[ge,ve]=(0,t.useState)(null),ye=function(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}(te?se:ai(se,de),null!=(a=null==ge?void 0:ge.rect)?a:null,X),xe=(0,t.useRef)(null),be=(0,t.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(null==z.current)return;const i=E.get(z.current);if(!i)return;const a=e.nativeEvent,s=new n({active:z.current,activeNode:i,event:a,options:r,context:Q,onAbort(e){if(!E.get(e))return;const{onDragAbort:t}=A.current,n={id:e};null==t||t(n),x({type:"onDragAbort",event:n})},onPending(e,t,n,r){if(!E.get(e))return;const{onDragPending:i}=A.current,o={id:e,constraint:t,initialCoordinates:n,offset:r};null==i||i(o),x({type:"onDragPending",event:o})},onStart(e){const t=z.current;if(null==t)return;const n=E.get(t);if(!n)return;const{onDragStart:r}=A.current,i={activatorEvent:a,active:{id:t,data:n.data,rect:$}};(0,o.unstable_batchedUpdates)(()=>{null==r||r(i),S(Yo.Initializing),y({type:bi.DragStart,initialCoordinates:e,active:t}),x({type:"onDragStart",event:i}),R(xe.current),L(a)})},onMove(e){y({type:bi.DragMove,coordinates:e})},onEnd:l(bi.DragEnd),onCancel:l(bi.DragCancel)});function l(e){return async function(){const{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=Q.current;let s=null;if(t&&i){const{cancelDrop:o}=A.current;if(s={activatorEvent:a,active:t,collisions:n,delta:i,over:r},e===bi.DragEnd&&"function"===typeof o){await Promise.resolve(o(s))&&(e=bi.DragCancel)}}z.current=null,(0,o.unstable_batchedUpdates)(()=>{y({type:e}),S(Yo.Uninitialized),ve(null),R(null),L(null),xe.current=null;const t=e===bi.DragEnd?"onDragEnd":"onDragCancel";if(s){const e=A.current[t];null==e||e(s),x({type:t,event:s})}})}}xe.current=s},[E]),we=(0,t.useCallback)((e,t)=>(n,r)=>{const i=n.nativeEvent,o=E.get(r);if(null!==z.current||!o||i.dndKit||i.defaultPrevented)return;const a={active:o};!0===e(n,t.options,a)&&(i.dndKit={capturedBy:t.sensor},z.current=r,be(n,t))},[E,be]),Se=function(e,n){return(0,t.useMemo)(()=>e.reduce((e,t)=>{const{sensor:r}=t;return[...e,...r.activators.map(e=>({eventName:e.eventName,handler:n(e.handler,t)}))]},[]),[e,n])}(d,we);!function(e){(0,t.useEffect)(()=>{if(!Hr)return;const t=e.map(e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()});return()=>{for(const e of t)null==e||e()}},e.map(e=>{let{sensor:t}=e;return t}))}(d),qr(()=>{X&&w===Yo.Initializing&&S(Yo.Initialized)},[X,w]),(0,t.useEffect)(()=>{const{onDragMove:e}=A.current,{active:t,activatorEvent:n,collisions:r,over:i}=Q.current;if(!t||!n)return;const a={active:t,activatorEvent:n,collisions:r,delta:{x:pe.x,y:pe.y},over:i};(0,o.unstable_batchedUpdates)(()=>{null==e||e(a),x({type:"onDragMove",event:a})})},[pe.x,pe.y]),(0,t.useEffect)(()=>{const{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=Q.current;if(!e||null==z.current||!t||!i)return;const{onDragOver:a}=A.current,s=r.get(me),l=s&&s.rect.current?{id:s.id,rect:s.rect.current,data:s.data,disabled:s.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:l};(0,o.unstable_batchedUpdates)(()=>{ve(l),null==a||a(c),x({type:"onDragOver",event:c})})},[me]),qr(()=>{Q.current={activatorEvent:D,active:M,activeNode:U,collisionRect:he,collisions:fe,droppableRects:F,draggableNodes:E,draggingNode:Z,draggingNodeRect:ee,droppableContainers:T,over:ge,scrollableAncestors:oe,scrollAdjustedTranslate:pe},$.current={initial:ee,translated:he}},[M,U,fe,he,E,Z,ee,F,T,ge,oe,pe]),xo({...Y,delta:j,draggingRect:he,pointerCoordinates:le,scrollableAncestors:oe,scrollableAncestorRects:ae});const ke=(0,t.useMemo)(()=>({active:M,activeNode:U,activeNodeRect:X,activatorEvent:D,collisions:fe,containerNodeRect:G,dragOverlay:J,draggableNodes:E,droppableContainers:T,droppableRects:F,over:ge,measureDroppableContainers:V,scrollableAncestors:oe,scrollableAncestorRects:ae,measuringConfiguration:_,measuringScheduled:H,windowRect:ie}),[M,U,X,D,fe,G,J,E,T,F,ge,V,oe,ae,_,H,ie]),Ce=(0,t.useMemo)(()=>({activatorEvent:D,activators:Se,active:M,activeNodeRect:X,ariaDescribedById:{draggable:I},dispatch:y,draggableNodes:E,over:ge,measureDroppableContainers:V}),[D,Se,M,X,y,I,E,ge,V]);return t.createElement(gi.Provider,{value:b},t.createElement(_o.Provider,{value:Ce},t.createElement(Bo.Provider,{value:ke},t.createElement(Wo.Provider,{value:ye},u)),t.createElement(Ho,{disabled:!1===(null==l?void 0:l.restoreFocus)})),t.createElement(xi,{...l,hiddenTextDescribedById:I}))}),Xo=(0,t.createContext)(null),Go="button";function Qo(e){let{id:n,data:r,disabled:i=!1,attributes:o}=e;const a=ii("Draggable"),{activators:s,activatorEvent:l,active:c,activeNodeRect:u,ariaDescribedById:d,draggableNodes:p,over:h}=(0,t.useContext)(_o),{role:f=Go,roleDescription:m="draggable",tabIndex:g=0}=null!=o?o:{},v=(null==c?void 0:c.id)===n,y=(0,t.useContext)(v?Wo:Xo),[x,b]=ti(),[w,S]=ti(),k=function(e,n){return(0,t.useMemo)(()=>e.reduce((e,t)=>{let{eventName:r,handler:i}=t;return e[r]=e=>{i(e,n)},e},{}),[e,n])}(s,n),C=Zr(r);qr(()=>(p.set(n,{id:n,key:a,node:x,activatorNode:w,data:C}),()=>{const e=p.get(n);e&&e.key===a&&p.delete(n)}),[p,n]);return{active:c,activatorEvent:l,activeNodeRect:u,attributes:(0,t.useMemo)(()=>({role:f,tabIndex:g,"aria-disabled":i,"aria-pressed":!(!v||f!==Go)||void 0,"aria-roledescription":m,"aria-describedby":d.draggable}),[i,f,g,v,m,d.draggable]),isDragging:v,listeners:i?void 0:k,node:x,over:h,setNodeRef:b,setActivatorNodeRef:S,transform:y}}function qo(){return(0,t.useContext)(Bo)}const Jo={timeout:25};function Zo(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function ea(e,t){return e.reduce((e,n,r)=>{const i=t.get(n);return i&&(e[r]=i),e},Array(e.length))}function ta(e){return null!==e&&e>=0}const na={scaleX:1,scaleY:1},ra=e=>{var t;let{rects:n,activeNodeRect:r,activeIndex:i,overIndex:o,index:a}=e;const s=null!=(t=n[i])?t:r;if(!s)return null;const l=function(e,t,n){const r=e[t],i=e[t-1],o=e[t+1];if(!r||!i&&!o)return 0;if(n<t)return i?r.left-(i.left+i.width):o.left-(r.left+r.width);return o?o.left-(r.left+r.width):r.left-(i.left+i.width)}(n,a,i);if(a===i){const e=n[o];return e?{x:i<o?e.left+e.width-(s.left+s.width):e.left-s.left,y:0,...na}:null}return a>i&&a<=o?{x:-s.width-l,y:0,...na}:a<i&&a>=o?{x:s.width+l,y:0,...na}:{x:0,y:0,...na}};const ia=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e;const o=Zo(t,r,n),a=t[i],s=o[i];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null};const oa="Sortable",aa=t.createContext({activeIndex:-1,containerId:oa,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:ia,disabled:{draggable:!1,droppable:!1}});function sa(e){let{children:n,id:r,items:i,strategy:o=ia,disabled:a=!1}=e;const{active:s,dragOverlay:l,droppableRects:c,over:u,measureDroppableContainers:d}=qo(),p=ii(oa,r),h=Boolean(null!==l.rect),f=(0,t.useMemo)(()=>i.map(e=>"object"===typeof e&&"id"in e?e.id:e),[i]),m=null!=s,g=s?f.indexOf(s.id):-1,v=u?f.indexOf(u.id):-1,y=(0,t.useRef)(f),x=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(f,y.current),b=-1!==v&&-1===g||x,w=function(e){return"boolean"===typeof e?{draggable:e,droppable:e}:e}(a);qr(()=>{x&&m&&d(f)},[x,f,m,d]),(0,t.useEffect)(()=>{y.current=f},[f]);const S=(0,t.useMemo)(()=>({activeIndex:g,containerId:p,disabled:w,disableTransforms:b,items:f,overIndex:v,useDragOverlay:h,sortedRects:ea(f,c),strategy:o}),[g,p,w.draggable,w.droppable,b,f,v,c,h,o]);return t.createElement(aa.Provider,{value:S},n)}const la=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return Zo(n,r,i).indexOf(t)},ca=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:o,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!r)&&((s===o||i!==a)&&(!!n||a!==i&&t===l))},ua={duration:200,easing:"ease"},da="transform",pa=ui.Transition.toString({property:da,duration:0,easing:"linear"}),ha={roleDescription:"sortable"};function fa(e){let{animateLayoutChanges:n=ca,attributes:r,disabled:i,data:o,getNewIndex:a=la,id:s,strategy:l,resizeObserverConfig:c,transition:u=ua}=e;const{items:d,containerId:p,activeIndex:h,disabled:f,disableTransforms:m,sortedRects:g,overIndex:v,useDragOverlay:y,strategy:x}=(0,t.useContext)(aa),b=function(e,t){var n,r;if("boolean"===typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(n=null==e?void 0:e.draggable)?n:t.draggable,droppable:null!=(r=null==e?void 0:e.droppable)?r:t.droppable}}(i,f),w=d.indexOf(s),S=(0,t.useMemo)(()=>({sortable:{containerId:p,index:w,items:d},...o}),[p,o,w,d]),k=(0,t.useMemo)(()=>d.slice(d.indexOf(s)),[d,s]),{rect:C,node:E,isOver:j,setNodeRef:T}=function(e){let{data:n,disabled:r=!1,id:i,resizeObserverConfig:o}=e;const a=ii("Droppable"),{active:s,dispatch:l,over:c,measureDroppableContainers:u}=(0,t.useContext)(_o),d=(0,t.useRef)({disabled:r}),p=(0,t.useRef)(!1),h=(0,t.useRef)(null),f=(0,t.useRef)(null),{disabled:m,updateMeasurementsFor:g,timeout:v}={...Jo,...o},y=Zr(null!=g?g:i),x=Eo({callback:(0,t.useCallback)(()=>{p.current?(null!=f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{u(Array.isArray(y.current)?y.current:[y.current]),f.current=null},v)):p.current=!0},[v]),disabled:m||!s}),b=(0,t.useCallback)((e,t)=>{x&&(t&&(x.unobserve(t),p.current=!1),e&&x.observe(e))},[x]),[w,S]=ti(b),k=Zr(n);return(0,t.useEffect)(()=>{x&&w.current&&(x.disconnect(),p.current=!1,x.observe(w.current))},[w,x]),(0,t.useEffect)(()=>(l({type:bi.RegisterDroppable,element:{id:i,key:a,disabled:r,node:w,rect:h,data:k}}),()=>l({type:bi.UnregisterDroppable,key:a,id:i})),[i]),(0,t.useEffect)(()=>{r!==d.current.disabled&&(l({type:bi.SetDroppableDisabled,id:i,key:a,disabled:r}),d.current.disabled=r)},[i,a,r,l]),{active:s,rect:h,isOver:(null==c?void 0:c.id)===i,node:w,over:c,setNodeRef:S}}({id:s,data:S,disabled:b.droppable,resizeObserverConfig:{updateMeasurementsFor:k,...c}}),{active:P,activatorEvent:$,activeNodeRect:M,attributes:z,setNodeRef:N,listeners:R,isDragging:D,over:L,setActivatorNodeRef:A,transform:I}=Qo({id:s,data:S,attributes:{...ha,...r},disabled:b.draggable}),O=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0,t.useMemo)(()=>e=>{n.forEach(t=>t(e))},n)}(T,N),_=Boolean(P),B=_&&!m&&ta(h)&&ta(v),F=!y&&D,V=F&&B?I:null,H=B?null!=V?V:(null!=l?l:x)({rects:g,activeNodeRect:M,activeIndex:h,overIndex:v,index:w}):null,U=ta(h)&&ta(v)?a({id:s,items:d,activeIndex:h,overIndex:v}):w,W=null==P?void 0:P.id,Y=(0,t.useRef)({activeId:W,items:d,newIndex:U,containerId:p}),K=d!==Y.current.items,X=n({active:P,containerId:p,isDragging:D,isSorting:_,id:s,index:w,items:d,newIndex:Y.current.newIndex,previousItems:Y.current.items,previousContainerId:Y.current.containerId,transition:u,wasDragging:null!=Y.current.activeId}),G=function(e){let{disabled:n,index:r,node:i,rect:o}=e;const[a,s]=(0,t.useState)(null),l=(0,t.useRef)(r);return qr(()=>{if(!n&&r!==l.current&&i.current){const e=o.current;if(e){const t=Li(i.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&s(n)}}r!==l.current&&(l.current=r)},[n,r,i,o]),(0,t.useEffect)(()=>{a&&s(null)},[a]),a}({disabled:!X,index:w,node:E,rect:C});return(0,t.useEffect)(()=>{_&&Y.current.newIndex!==U&&(Y.current.newIndex=U),p!==Y.current.containerId&&(Y.current.containerId=p),d!==Y.current.items&&(Y.current.items=d)},[_,U,p,d]),(0,t.useEffect)(()=>{if(W===Y.current.activeId)return;if(null!=W&&null==Y.current.activeId)return void(Y.current.activeId=W);const e=setTimeout(()=>{Y.current.activeId=W},50);return()=>clearTimeout(e)},[W]),{active:P,activeIndex:h,attributes:z,data:S,rect:C,index:w,newIndex:U,items:d,isOver:j,isSorting:_,isDragging:D,listeners:R,node:E,overIndex:v,over:L,setNodeRef:O,setActivatorNodeRef:A,setDroppableNodeRef:T,setDraggableNodeRef:N,transform:null!=G?G:H,transition:function(){if(G||K&&Y.current.newIndex===w)return pa;if(F&&!li($)||!u)return;if(_||X)return ui.Transition.toString({...u,property:da});return}()}}no.Down,no.Right,no.Up,no.Left;const ma=wn`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0);  }
`,ga=wn`
  from { opacity: 0; transform: translateX(-14px); }
  to   { opacity: 1; transform: translateX(0);   }
`,va=xn.section`
  max-width: 900px;
  margin: 128px auto 0;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto 0;
  }
`,ya=xn.div`
  margin-bottom: 56px;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?gn`${ma} 0.5s ease forwards`:"none"}};

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
`,xa=xn.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,ba=xn.div`
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 20px;
  align-items: start;
  padding: 18px 0;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?gn`${ga} 0.45s cubic-bezier(0.4, 0, 0.2, 1) forwards`:"none"}};

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
`,wa=e=>{let{skill:t,listeners:n,attributes:r,isDragging:i,style:o,refCallback:a,selected:s,onClick:l,hovered:c,onMouseEnter:u,onMouseLeave:d,primaryColor:p,accentBg:h,textColor:f,dividerColor:m}=e;return(0,hr.jsx)("span",{ref:a,...n,...r,style:{display:"inline-flex",alignItems:"center",padding:"5px 12px",borderRadius:"6px",fontSize:"12.5px",fontFamily:"var(--font-mono, monospace)",fontWeight:500,letterSpacing:"-0.005em",position:"relative",cursor:"grab",userSelect:"none",transition:"all 0.15s cubic-bezier(0.25, 0.1, 0.25, 1)",background:s||c?`${p}10`:h,color:s||c?p:f,border:`1px solid ${s||c?`${p}35`:m}`,boxShadow:s||c?`0 2px 12px ${p}18`:"none",opacity:i?.4:1,transform:i?"scale(1.06) rotate(1.5deg)":c?"translateY(-1px)":"none",zIndex:i?10:"auto",...o},tabIndex:0,onClick:l,onMouseEnter:u,onMouseLeave:d,children:t})};function Sa(e){let{id:t,skill:n,selected:r,onClick:i,hovered:o,onMouseEnter:a,onMouseLeave:s,primaryColor:l,accentBg:c,textColor:u,dividerColor:d}=e;const{attributes:p,listeners:h,setNodeRef:f,transform:m,transition:g,isDragging:v}=fa({id:t}),y={transform:ui.Transform.toString(m),transition:g};return(0,hr.jsx)(wa,{id:t,skill:n,listeners:h,attributes:p,isDragging:v,style:y,refCallback:f,selected:r,onClick:i,hovered:o,onMouseEnter:a,onMouseLeave:s,primaryColor:l,accentBg:c,textColor:u,dividerColor:d})}const ka="skills-order-v1",Ca=()=>{const[e,n]=(0,t.useState)(()=>{const e=localStorage.getItem(ka);if(e)try{return JSON.parse(e)}catch{return jn}return jn}),[r,i]=(0,t.useState)(null),[o,a]=(0,t.useState)(null),[s,l]=(0,t.useState)(!1),c=function(){var e=(0,t.useContext)(un);if(!e)throw Ct(18);return e}(),u=(0,t.useRef)(),d=c.colors.primary,p=c.colors.accent,h=c.colors.textSecondary,f=c.colors.cardBorder;(0,t.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&l(!0)},{threshold:.08});return u.current&&e.observe(u.current),()=>e.disconnect()},[]),(0,t.useEffect)(()=>{localStorage.setItem(ka,JSON.stringify(e))},[e]),(0,t.useEffect)(()=>{const e=e=>{(u.current&&!u.current.contains(e.target)||u.current&&"SPAN"!==e.target.tagName)&&i(null)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const m=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0,t.useMemo)(()=>[...n].filter(e=>null!=e),[...n])}((g=ho,v={activationConstraint:{distance:6}},(0,t.useMemo)(()=>({sensor:g,options:null!=v?v:{}}),[g,v])));var g,v;return(0,hr.jsxs)(va,{id:"skills",ref:u,children:[(0,hr.jsxs)(ya,{$visible:s,children:[(0,hr.jsxs)("div",{className:"eyebrow",children:[(0,hr.jsx)("span",{className:"num",children:"04"}),(0,hr.jsx)("div",{className:"line"})]}),(0,hr.jsx)("h2",{children:"Skills"}),(0,hr.jsx)("p",{className:"subtitle",children:"drag to reorder \xb7 click to highlight"})]}),(0,hr.jsx)(xa,{children:e.map((e,t)=>(0,hr.jsxs)(ba,{$visible:s,style:{animationDelay:.12+.06*t+"s"},children:[(0,hr.jsx)("div",{className:"category-label",children:e.category}),(0,hr.jsx)(Ko,{sensors:m,collisionDetection:Ti,onDragEnd:e=>((e,t)=>{const{active:r,over:i}=e;i&&r.id!==i.id&&n(e=>{const n=[...e],o=[...n[t].items],a=o.findIndex(e=>e===r.id),s=o.findIndex(e=>e===i.id);return-1===a||-1===s?e:(n[t].items=Zo(o,a,s),n)})})(e,t),children:(0,hr.jsx)(sa,{items:e.items,strategy:ra,children:(0,hr.jsx)("div",{className:"items",children:e.items.map(e=>(0,hr.jsx)(Sa,{id:e,skill:e,selected:r===e,onClick:()=>i(r===e?null:e),hovered:o===e,onMouseEnter:()=>a(e),onMouseLeave:()=>a(null),primaryColor:d,accentBg:p,textColor:h,dividerColor:f},e))})})})]},e.category))})]})},Ea=xn.button`
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
`,ja=wn`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,Ta=wn`
  from { opacity: 0; transform: translateX(-16px); }
  to   { opacity: 1; transform: translateX(0); }
`,Pa=wn`
  from { height: 0; }
  to   { height: 100%; }
`,$a=xn.section`
  max-width: 900px;
  margin: 128px auto;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto;
  }
`,Ma=xn.div`
  margin-bottom: 64px;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?gn`${ja} 0.5s ease forwards`:"none"}};

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
`,za=xn.div`
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
    animation: ${e=>{let{$visible:t}=e;return t?gn`${Pa} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards`:"none"}};
  }
`,Na=xn.div`
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 28px;
  padding-bottom: 52px;
  opacity: 0;
  will-change: transform, opacity;
  animation: ${e=>{let{$visible:t,$delay:n}=e;return t?gn`${Ta} 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${n}s forwards`:"none"}};

  &:last-child {
    padding-bottom: 0;
  }
`,Ra=xn.div`
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

    ${e=>{let{$current:t,theme:n}=e;return t&&gn`
      box-shadow: 0 0 0 3px ${n.colors.backgroundSecondary};
    `}}
  }
`,Da=xn.div`
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
`,La={HubSpot:!0},Aa=()=>{const[e,n]=(0,t.useState)(!1),[r,i]=(0,t.useState)({}),[o,a]=(0,t.useState)(!1),s=(0,t.useRef)(null);(0,t.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&a(!0)},{threshold:.06});return s.current&&e.observe(s.current),()=>e.disconnect()},[]);const l=e?Tn:Tn.slice(0,3);return(0,hr.jsxs)($a,{id:"experience",ref:s,children:[(0,hr.jsxs)(Ma,{$visible:o,children:[(0,hr.jsxs)("div",{className:"eyebrow",children:[(0,hr.jsx)("span",{className:"num",children:"02"}),(0,hr.jsx)("div",{className:"line"})]}),(0,hr.jsx)("h2",{children:"Experience"}),(0,hr.jsx)("p",{className:"subtitle",children:"Where I've worked and what I've shipped"})]}),(0,hr.jsx)(za,{$visible:o,children:l.map((e,t)=>{let{id:n,position:a,company:s,url:l,date:c,location:u,responsibilities:d,techStack:p}=e;const h=!!La[s]&&0===t;return(0,hr.jsxs)(Na,{$visible:o,$delay:.3+.12*t,children:[(0,hr.jsx)(Ra,{$current:h,children:(0,hr.jsx)("div",{className:"dot"})}),(0,hr.jsxs)(Da,{children:[(0,hr.jsxs)("div",{className:"header-row",children:[(0,hr.jsxs)("div",{className:"company-role",children:[(0,hr.jsx)("a",{className:"company",href:l,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit"},onMouseEnter:e=>e.currentTarget.style.opacity="0.75",onMouseLeave:e=>e.currentTarget.style.opacity="1",children:s}),(0,hr.jsx)("span",{className:"sep",children:"/"}),(0,hr.jsx)("span",{className:"role",children:a})]}),(0,hr.jsx)("span",{className:"date-badge",children:c})]}),(0,hr.jsxs)("div",{className:"meta-row",children:[(0,hr.jsx)("span",{className:"location",children:u}),h&&(0,hr.jsx)("span",{className:"current-badge",children:"Current"})]}),(0,hr.jsx)("ul",{className:"responsibilities",children:d.map((e,t)=>(0,hr.jsx)("li",{children:e},t))}),(0,hr.jsxs)("div",{className:"tech-stack",children:[(r[n]?p:p.slice(0,6)).map((e,t)=>(0,hr.jsx)("span",{children:e},t)),p.length>6&&!r[n]&&(0,hr.jsxs)("span",{className:"more-tag",style:{cursor:"pointer"},onClick:()=>i(e=>({...e,[n]:!0})),children:["+",p.length-6," more"]})]})]})]},n)})}),Tn.length>3&&(0,hr.jsx)(Ea,{onClick:()=>n(!e),children:e?"Show Less":`Show ${Tn.length-3} More`})]})},Ia=wn`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,Oa=wn`
  from { opacity: 0; transform: scale(0.96); }
  to   { opacity: 1; transform: scale(1); }
`,_a=xn.section`
  max-width: 900px;
  margin: 128px auto;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto;
  }
`,Ba=xn.div`
  margin-bottom: 64px;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?gn`${Ia} 0.5s ease forwards`:"none"}};

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
`,Fa=xn.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`,Va=xn.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 40px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`,Ha=xn.div`
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
  animation: ${e=>{let{$visible:t,$delay:n}=e;return t?gn`${Oa} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${n}s forwards`:"none"}};

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
`,Ua=xn.div`
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
  animation: ${e=>{let{$visible:t,$delay:n}=e;return t?gn`${Oa} 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${n}s forwards`:"none"}};

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
    margin-bottom: 12px;

    .folder-sm {
      width: 28px;
      height: 28px;
      background: ${e=>{let{theme:t}=e;return t.colors.accent}};
      border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
        font-size: 13px;
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
    font-size: 14px;
    font-weight: 700;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    letter-spacing: -0.018em;
    margin-bottom: 8px;
    line-height: 1.35;
    transition: color 0.2s ease;
  }

  .description {
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    font-size: 12.5px;
    line-height: 1.68;
    flex: 1;
    margin-bottom: 14px;
    letter-spacing: -0.003em;
  }

  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: auto;

    span {
      background: transparent;
      color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
      font-size: 10px;
      font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
      border-right: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};
      padding-right: 6px;
      letter-spacing: 0.01em;

      &:last-child {
        border-right: none;
        padding-right: 0;
      }
    }
  }
`,Wa=()=>(0,hr.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:(0,hr.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",strokeLinecap:"round",strokeLinejoin:"round"})}),Ya=()=>{const[e,n]=(0,t.useState)(!1),[r,i]=(0,t.useState)(4),[o,a]=(0,t.useState)(!1),s=(0,t.useRef)(null);(0,t.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&a(!0)},{threshold:.06});return s.current&&e.observe(s.current),()=>e.disconnect()},[]),(0,t.useEffect)(()=>{const e=()=>{i(window.innerWidth<680?2:4)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const l=Pn.filter(e=>!!e.badge),c=Pn.filter(e=>!e.badge),u=e?c:c.slice(0,r-l.length);return(0,hr.jsxs)(_a,{id:"projects",ref:s,children:[(0,hr.jsxs)(Ba,{$visible:o,children:[(0,hr.jsxs)("div",{className:"eyebrow",children:[(0,hr.jsx)("span",{className:"num",children:"03"}),(0,hr.jsx)("div",{className:"line"})]}),(0,hr.jsx)("h2",{children:"Projects"}),(0,hr.jsx)("p",{className:"subtitle",children:"Things I've built and explored"})]}),l.length>0&&(0,hr.jsx)(Fa,{children:l.map((e,t)=>{let{id:n,title:r,description:i,techStack:a,url:s,external:l,badge:c}=e;return(0,hr.jsxs)(Ha,{tabIndex:"0",$visible:o,$delay:.15+.1*t,onClick:()=>window.open(l||s,"_blank","noopener,noreferrer"),onKeyPress:e=>{"Enter"===e.key&&window.open(l||s,"_blank","noopener,noreferrer")},children:[(0,hr.jsxs)("div",{className:"icon-row",children:[(0,hr.jsx)("div",{className:"folder",children:(0,hr.jsx)(Wa,{})}),(0,hr.jsx)(Yn,{className:"arrow"})]}),(0,hr.jsx)("div",{className:"badge",children:c}),(0,hr.jsx)("div",{className:"title",children:r}),(0,hr.jsx)("div",{className:"description",children:i}),(0,hr.jsx)("div",{className:"tech",children:a.map((e,t)=>(0,hr.jsx)("span",{children:e},t))})]},n)})}),(0,hr.jsx)(Va,{children:u.map((e,t)=>{let{id:n,title:r,description:i,techStack:a,url:s,external:l}=e;return(0,hr.jsxs)(Ua,{tabIndex:"0",$visible:o,$delay:.25+.08*t,onClick:()=>window.open(l||s,"_blank","noopener,noreferrer"),onKeyPress:e=>{"Enter"===e.key&&window.open(l||s,"_blank","noopener,noreferrer")},children:[(0,hr.jsxs)("div",{className:"top-row",children:[(0,hr.jsx)("div",{className:"folder-sm",children:(0,hr.jsx)(Wa,{})}),s&&(0,hr.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",onClick:e=>e.stopPropagation(),children:(0,hr.jsx)(Hn,{className:"github-icon"})})]}),(0,hr.jsx)("div",{className:"title",children:r}),(0,hr.jsx)("div",{className:"description",children:i}),(0,hr.jsx)("div",{className:"tech",children:a.slice(0,4).map((e,t)=>(0,hr.jsx)("span",{children:e},t))})]},n)})}),c.length>r-l.length&&(0,hr.jsx)(Ea,{onClick:()=>n(!e),children:e?"Show Less":`Show ${c.length-(r-l.length)} More`})]})},Ka=wn`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,Xa=wn`
  from { opacity: 0; transform: translateX(16px); }
  to   { opacity: 1; transform: translateX(0); }
`,Ga=xn.section`
  max-width: 900px;
  margin: 128px auto;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto;
  }
`,Qa=xn.div`
  margin-bottom: 56px;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?gn`${Ka} 0.5s ease forwards`:"none"}};

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
`,qa=xn.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ja=xn.div`
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
  animation: ${e=>{let{$visible:t,$delay:n}=e;return t?gn`${Xa} 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${n}s forwards`:"none"}};

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
`,Za=()=>{const[e,n]=(0,t.useState)(!1),r=(0,t.useRef)(null);return(0,t.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&n(!0)},{threshold:.08});return r.current&&e.observe(r.current),()=>e.disconnect()},[]),(0,hr.jsxs)(Ga,{id:"achievements",ref:r,children:[(0,hr.jsxs)(Qa,{$visible:e,children:[(0,hr.jsxs)("div",{className:"eyebrow",children:[(0,hr.jsx)("span",{className:"num",children:"05"}),(0,hr.jsx)("div",{className:"line"})]}),(0,hr.jsx)("h2",{children:"Achievements"}),(0,hr.jsx)("p",{className:"subtitle",children:"Moments I'm proud of"})]}),(0,hr.jsx)(qa,{children:$n.map((t,n)=>{let{id:r,title:i,description:o}=t;return(0,hr.jsxs)(Ja,{tabIndex:"0",$visible:e,$delay:.15+.1*n,children:[(0,hr.jsx)("div",{className:"num-badge",children:String(n+1).padStart(2,"0")}),(0,hr.jsxs)("div",{className:"content",children:[(0,hr.jsx)("div",{className:"title",children:i}),(0,hr.jsx)("div",{className:"description",children:o})]})]},r)})})]})},es=wn`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,ts=wn`
  from { opacity: 0; transform: scale(0.97); }
  to   { opacity: 1; transform: scale(1); }
`,ns=xn.section`
  max-width: 900px;
  margin: 128px auto;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto;
  }
`,rs=xn.div`
  margin-bottom: 56px;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?gn`${es} 0.5s ease forwards`:"none"}};

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
`,is=xn.div`
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadiusLarge}};
  overflow: hidden;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.card}};
  opacity: 0;
  will-change: transform, opacity;
  animation: ${e=>{let{$visible:t,$delay:n}=e;return t?gn`${ts} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${n}s forwards`:"none"}};
  transition: border-color 0.22s ease, box-shadow 0.22s ease;

  &:hover {
    border-color: ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.cardHover}};
  }
`,os=xn.div`
  padding: 32px 36px 28px;
  position: relative;

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
    padding: 24px 20px 20px;
  }
`,as=xn.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
  flex-wrap: wrap;
`,ss=xn.h3`
  font-size: 18px;
  font-weight: 800;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  letter-spacing: -0.025em;
  line-height: 1.3;
  flex: 1;
`,ls=xn.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  background: ${e=>{let{theme:t}=e;return t.colors.primarySubtle}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadiusPill}};
  font-size: 10px;
  font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
  flex-shrink: 0;

  .status-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${e=>{let{theme:t}=e;return t.colors.primary}};
    flex-shrink: 0;
  }
`,cs=xn.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  text-decoration: none;
  margin-bottom: 4px;
  letter-spacing: -0.01em;
  transition: all 0.15s ease;

  svg { font-size: 10px; opacity: 0.6; }

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primaryHover}};
    svg { opacity: 1; }
  }
`,us=xn.p`
  font-size: 12px;
  color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
  font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
  margin-bottom: 20px;
  letter-spacing: 0.02em;
`,ds=xn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 14px 0;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};
  margin-bottom: 20px;
`,ps=xn.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
  color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
  letter-spacing: 0.02em;

  svg {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
    font-size: 11px;
    opacity: 0.7;
  }
`,hs=xn.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: ${e=>{let{theme:t}=e;return t.colors.primarySubtle}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}};
  margin-bottom: 20px;

  svg {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
    font-size: 14px;
    flex-shrink: 0;
  }

  span {
    font-size: 13px;
    color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
    letter-spacing: -0.005em;
    line-height: 1.5;
  }
`,fs=xn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
`,ms=xn.span`
  background: ${e=>{let{theme:t}=e;return t.colors.accent}};
  color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 11.5px;
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
`,gs=xn.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,vs=xn.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  text-decoration: none;
  padding: 8px 14px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}};
  background: ${e=>{let{theme:t}=e;return t.colors.accent}};
  transition: all 0.18s ease;
  letter-spacing: -0.008em;

  svg { font-size: 10px; }

  &:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.primarySubtle}};
    border-color: ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
    text-decoration: none;
  }
`,ys=xn.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  background: transparent;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryBorder}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}};
  padding: 8px 14px;
  cursor: pointer;
  font-family: ${e=>{let{theme:t}=e;return t.fonts.main}};
  transition: all 0.18s ease;
  letter-spacing: -0.008em;

  svg {
    font-size: 11px;
    transition: transform 0.2s ease;
  }

  &:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.primarySubtle}};
    border-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,xs=xn.div`
  display: grid;
  grid-template-rows: ${e=>{let{$open:t}=e;return t?"1fr":"0fr"}};
  transition: grid-template-rows 0.38s cubic-bezier(0.4, 0, 0.2, 1);

  > .inner { overflow: hidden; }
`,bs=xn.div`
  padding: 0 36px 28px;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};

  @media (max-width: 600px) {
    padding: 0 20px 20px;
  }
`,ws=xn.div`
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
`,Ss=xn.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 8px;
`,ks=xn.div`
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
`,Cs=xn.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 10px;
`,Es=xn.a`
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
`,js=()=>{const[e,n]=(0,t.useState)(null),[r,i]=(0,t.useState)(!1),o=(0,t.useRef)(null);return(0,t.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&i(!0)},{threshold:.08});return o.current&&e.observe(o.current),()=>e.disconnect()},[]),(0,hr.jsxs)(ns,{id:"certifications",ref:o,children:[(0,hr.jsxs)(rs,{$visible:r,children:[(0,hr.jsxs)("div",{className:"eyebrow",children:[(0,hr.jsx)("span",{className:"num",children:"06"}),(0,hr.jsx)("div",{className:"line"})]}),(0,hr.jsx)("h2",{children:"Certifications"}),(0,hr.jsx)("p",{className:"subtitle",children:"Continuous learning & growth"})]}),zn.map((t,i)=>(0,hr.jsxs)(is,{$visible:r,$delay:.15+.12*i,children:[(0,hr.jsxs)(os,{children:[(0,hr.jsxs)(as,{children:[(0,hr.jsx)(ss,{children:t.title}),(0,hr.jsxs)(ls,{children:[(0,hr.jsx)("span",{className:"status-dot"}),t.status]})]}),(0,hr.jsxs)(ds,{children:[(0,hr.jsxs)(ps,{children:[(0,hr.jsx)(qn,{})," ",t.duration]}),(0,hr.jsxs)(ps,{children:[(0,hr.jsx)(Xn,{})," ",t.date]}),(0,hr.jsxs)(ps,{children:[(0,hr.jsx)(tr,{})," London"]})]}),(0,hr.jsxs)(cs,{href:t.institutionUrl,target:"_blank",rel:"noopener noreferrer",children:[(0,hr.jsx)(tr,{}),t.institution,(0,hr.jsx)(er,{})]}),t.department&&(0,hr.jsx)(us,{children:t.department}),(0,hr.jsxs)(hs,{children:[(0,hr.jsx)(Kn,{}),(0,hr.jsx)("span",{children:t.outcome})]}),(0,hr.jsx)(fs,{children:t.techStack.map((e,t)=>(0,hr.jsx)(ms,{children:e},t))}),(0,hr.jsxs)(gs,{children:[(0,hr.jsxs)(vs,{href:t.institutionUrl,target:"_blank",rel:"noopener noreferrer",children:[(0,hr.jsx)(er,{}),"Learn More"]}),(0,hr.jsx)(ys,{onClick:()=>n(e===t.id?null:t.id),children:e===t.id?(0,hr.jsxs)(hr.Fragment,{children:[(0,hr.jsx)(Qn,{})," Hide Details"]}):(0,hr.jsxs)(hr.Fragment,{children:[(0,hr.jsx)(Gn,{})," Curriculum & Projects"]})})]})]}),(0,hr.jsx)(xs,{$open:e===t.id,children:(0,hr.jsx)("div",{className:"inner",children:(0,hr.jsxs)(bs,{children:[(0,hr.jsxs)(ws,{children:[(0,hr.jsxs)("div",{className:"panel-heading",children:[(0,hr.jsx)(Xn,{}),(0,hr.jsx)("span",{children:"Curriculum Overview"}),(0,hr.jsx)("div",{className:"rule"})]}),(0,hr.jsx)(Ss,{children:t.curriculum.map((e,t)=>(0,hr.jsxs)(ks,{children:[(0,hr.jsx)("span",{className:"step-num",children:t+1}),(0,hr.jsx)("span",{className:"step-text",children:e})]},t))})]}),(0,hr.jsxs)(ws,{children:[(0,hr.jsxs)("div",{className:"panel-heading",children:[(0,hr.jsx)(or,{}),(0,hr.jsx)("span",{children:"Capstone Projects"}),(0,hr.jsx)("div",{className:"rule"})]}),(0,hr.jsx)(Cs,{children:t.capstoneProjects.map((e,t)=>(0,hr.jsxs)(Es,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,hr.jsx)("div",{className:"proj-icon",children:(0,hr.jsx)(or,{})}),(0,hr.jsxs)("div",{className:"proj-title",children:[e.title,(0,hr.jsx)(er,{})]}),(0,hr.jsx)("div",{className:"proj-desc",children:e.description})]},t))})]})]})})})]},t.id))]})},Ts=wn`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,Ps=wn`
  from { opacity: 0; transform: translateX(-16px); }
  to   { opacity: 1; transform: translateX(0); }
`,$s=xn.section`
  max-width: 900px;
  margin: 128px auto;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto;
  }
`,Ms=xn.div`
  margin-bottom: 56px;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?gn`${Ts} 0.5s ease forwards`:"none"}};

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
`,zs=xn.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Ns=xn.div`
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
  animation: ${e=>{let{$visible:t,$delay:n}=e;return t?gn`${Ps} 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${n}s forwards`:"none"}};

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
`,Rs=()=>{const[e,n]=(0,t.useState)(!1),[r,i]=(0,t.useState)(!1),o=(0,t.useRef)(null);(0,t.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&i(!0)},{threshold:.08});return o.current&&e.observe(o.current),()=>e.disconnect()},[]);const a=e?Mn:Mn.slice(0,1);return(0,hr.jsxs)($s,{id:"education",ref:o,children:[(0,hr.jsxs)(Ms,{$visible:r,children:[(0,hr.jsxs)("div",{className:"eyebrow",children:[(0,hr.jsx)("span",{className:"num",children:"07"}),(0,hr.jsx)("div",{className:"line"})]}),(0,hr.jsx)("h2",{children:"Education"}),(0,hr.jsx)("p",{className:"subtitle",children:"Where it all began"})]}),(0,hr.jsx)(zs,{children:a.map((e,t)=>{let{id:n,school:i,url:o,degree:a,duration:s,location:l,major:c,details:u}=e;return(0,hr.jsxs)(Ns,{tabIndex:"0",$visible:r,$delay:.15+.1*t,onClick:()=>window.open(o,"_blank","noopener,noreferrer"),onKeyPress:e=>{"Enter"===e.key&&window.open(o,"_blank","noopener,noreferrer")},children:[(0,hr.jsxs)("div",{className:"duration-col",children:[(0,hr.jsx)("span",{className:"year",children:s.split(" - ")[0]}),(0,hr.jsx)("span",{className:"duration-label",children:s})]}),(0,hr.jsxs)("div",{className:"content-col",children:[(0,hr.jsxs)("div",{className:"school-row",children:[(0,hr.jsxs)("span",{className:"school-name",children:[i,(0,hr.jsx)(er,{})]}),(0,hr.jsx)("span",{className:"sep",children:"\xb7"}),(0,hr.jsx)("span",{className:"degree",children:a})]}),(0,hr.jsxs)("div",{className:"meta",children:[(0,hr.jsx)(nr,{}),l]}),c&&(0,hr.jsx)("div",{className:"major",children:c}),(0,hr.jsx)("div",{className:"details",children:u.map((e,t)=>(0,hr.jsx)("span",{className:"detail-pill",children:e},t))})]})]},n)})}),Mn.length>1&&(0,hr.jsx)(Ea,{onClick:()=>n(!e),children:e?"Show Less":`Show ${Mn.length-1} More`})]})},Ds=wn`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,Ls=wn`
  from { opacity: 0; transform: scale(0.9); }
  to   { opacity: 1; transform: scale(1); }
`,As=xn.section`
  max-width: 900px;
  margin: 128px auto 100px;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto 80px;
  }
`,Is=xn.div`
  margin-bottom: 64px;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?gn`${Ds} 0.5s ease forwards`:"none"}};

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
`,Os=xn.div`
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadiusLarge}};
  padding: 52px 48px;
  text-align: center;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.card}};
  position: relative;
  overflow: hidden;
  opacity: 0;
  animation: ${e=>{let{$visible:t}=e;return t?gn`${Ls} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s forwards`:"none"}};

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
`,_s=xn.h2`
  font-size: clamp(40px, 6vw, 64px);
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 0.95;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-bottom: 20px;

  span {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,Bs=xn.p`
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  margin-bottom: 44px;
  max-width: 400px;
  line-height: 1.72;
  font-size: 15px;
  letter-spacing: -0.008em;
  margin-left: auto;
  margin-right: auto;
`,Fs=xn.a`
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
`,Vs=xn.p`
  font-size: 11px;
  font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
  color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
  margin-bottom: 20px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`,Hs=xn.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`,Us=xn.a`
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
`,Ws=()=>{var e,n,r,i;const[o,a]=(0,t.useState)(!1),s=(0,t.useRef)(null);(0,t.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&a(!0)},{threshold:.1});return s.current&&e.observe(s.current),()=>e.disconnect()},[]);const l=null===(e=Cn.find(e=>"LinkedIn"===e.name))||void 0===e?void 0:e.url,c=null===(n=Cn.find(e=>"GitHub"===e.name))||void 0===n?void 0:n.url,u=null===(r=Cn.find(e=>"Instagram"===e.name))||void 0===r?void 0:r.url,d=null===(i=Cn.find(e=>"LeetCode"===e.name))||void 0===i?void 0:i.url;return(0,hr.jsxs)(As,{id:"contact",ref:s,children:[(0,hr.jsxs)(Is,{$visible:o,children:[(0,hr.jsxs)("div",{className:"eyebrow",children:[(0,hr.jsx)("span",{className:"num",children:"08"}),(0,hr.jsx)("div",{className:"line"})]}),(0,hr.jsx)("h2",{children:"Get In Touch"}),(0,hr.jsx)("p",{className:"subtitle",children:"Let's make something great together"})]}),(0,hr.jsxs)(Os,{$visible:o,children:[(0,hr.jsxs)(_s,{children:["Let's ",(0,hr.jsx)("span",{children:"Talk."})]}),(0,hr.jsx)(Bs,{children:En.contact.message}),(0,hr.jsxs)(Fs,{href:`mailto:${En.contact.email}`,children:[(0,hr.jsx)(Zn,{}),"Say Hello"]}),(0,hr.jsx)(Vs,{children:"\u2014 or find me on \u2014"}),(0,hr.jsxs)(Hs,{children:[c&&(0,hr.jsx)(Us,{href:c,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:(0,hr.jsx)(Hn,{})}),l&&(0,hr.jsx)(Us,{href:l,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:(0,hr.jsx)(Wn,{})}),u&&(0,hr.jsx)(Us,{href:u,target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:(0,hr.jsx)(Un,{})}),d&&(0,hr.jsx)(Us,{href:d,target:"_blank",rel:"noopener noreferrer","aria-label":"LeetCode",children:(0,hr.jsx)(Jn,{})})]})]})]})},Ys=xn.main`
  padding: 0;

  @media (max-width: 900px) {
    padding-top: 60px;
  }
`,Ks=()=>(0,hr.jsxs)(Ys,{children:[(0,hr.jsx)(Vr,{}),(0,hr.jsx)(Aa,{}),(0,hr.jsx)(Ya,{}),(0,hr.jsx)(Ca,{}),(0,hr.jsx)(Za,{}),(0,hr.jsx)(js,{}),(0,hr.jsx)(Rs,{}),(0,hr.jsx)(Ws,{})]}),Xs=wn`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Gs=wn`
  from { transform: translateX(100%); }
  to   { transform: translateX(0); }
`,Qs=wn`
  from { opacity: 0; transform: translateX(16px); }
  to   { opacity: 1; transform: translateX(0); }
`,qs=xn.header`
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
`,Js=xn.a`
  font-size: 15px;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  text-decoration: none;

  span {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,Zs=xn.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,el=xn.button`
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

  ${e=>{let{$open:t}=e;return t&&gn`
      .bar:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
      .bar:nth-child(2) { opacity: 0; width: 0; }
      .bar:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
    `}}
`,tl=xn.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 998;
  animation: ${Xs} 0.25s ease forwards;
`,nl=xn.nav`
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
  animation: ${Gs} 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  overflow-y: auto;
`,rl=xn.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0;
`,il=xn.li`
  opacity: 0;
  animation: ${Qs} 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: ${e=>{let{$i:t}=e;return.06+.045*t}}s;
`,ol=xn.a`
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
`,al=xn.div`
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
  animation: ${Xs} 0.4s ease 0.45s forwards;
`,sl=xn.a`
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
`,ll=xn.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,cl=xn.a`
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
`,ul=xn.div`
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
`,dl=["01","02","03","04","05","06","07","08"],pl={GitHub:Hn,LinkedIn:Wn,Instagram:Un,LeetCode:Jn},hl=()=>{const[e,n]=(0,t.useState)(!1);(0,t.useEffect)(()=>(document.body.style.overflow=e?"hidden":"",()=>{document.body.style.overflow=""}),[e]);return(0,hr.jsxs)(hr.Fragment,{children:[(0,hr.jsxs)(qs,{children:[(0,hr.jsxs)(Js,{href:"/",children:[En.name.split(" ")[0],(0,hr.jsx)("span",{children:"."})]}),(0,hr.jsxs)(Zs,{children:[(0,hr.jsx)(yr,{}),(0,hr.jsxs)(el,{$open:e,onClick:()=>n(e=>!e),"aria-label":e?"Close menu":"Open menu",children:[(0,hr.jsx)("span",{className:"bar"}),(0,hr.jsx)("span",{className:"bar"}),(0,hr.jsx)("span",{className:"bar"})]})]})]}),e&&(0,hr.jsxs)(hr.Fragment,{children:[(0,hr.jsx)(tl,{onClick:()=>n(!1)}),(0,hr.jsxs)(nl,{children:[(0,hr.jsxs)(ul,{children:[(0,hr.jsx)("div",{className:"id-name",children:En.name}),(0,hr.jsx)("div",{className:"id-title",children:En.description}),(0,hr.jsxs)("div",{className:"id-location",children:[(0,hr.jsx)("span",{className:"dot"}),(0,hr.jsx)("span",{children:"London, UK"})]})]}),(0,hr.jsx)(rl,{children:kn.map((e,t)=>{let{id:r,name:i,url:o}=e;return(0,hr.jsx)(il,{$i:t,children:(0,hr.jsxs)(ol,{href:o,onClick:e=>((e,t)=>{e.preventDefault(),n(!1),setTimeout(()=>{const e=document.getElementById(t.replace("#",""));e&&window.scrollTo({top:e.getBoundingClientRect().top+window.scrollY-72,behavior:"smooth"})},280)})(e,o),children:[(0,hr.jsx)("span",{className:"nav-label",children:i}),(0,hr.jsx)("span",{className:"nav-num",children:dl[t]})]})},r)})}),(0,hr.jsxs)(al,{children:[(0,hr.jsx)(sl,{href:"/my-portfolio/resume.pdf",target:"_blank",rel:"noopener noreferrer",onClick:()=>n(!1),children:"Download R\xe9sum\xe9"}),(0,hr.jsx)(ll,{children:Cn.map(e=>{let{id:t,name:n,url:r}=e;const i=pl[n];return i?(0,hr.jsx)(cl,{href:r,target:"_blank",rel:"noopener noreferrer","aria-label":n,children:(0,hr.jsx)(i,{})},t):null})})]})]})]})]})},fl=wn`
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
`,ml=wn`
  0%   { transform: translateY(0); border-bottom-left-radius: 0; border-bottom-right-radius: 0; }
  15%  { border-bottom-left-radius: 48px; border-bottom-right-radius: 48px; }
  100% { transform: translateY(-102%); border-bottom-left-radius: 48px; border-bottom-right-radius: 48px; }
`,gl=wn`
  0%   { transform: translateY(0); border-top-left-radius: 0; border-top-right-radius: 0; }
  15%  { border-top-left-radius: 48px; border-top-right-radius: 48px; }
  100% { transform: translateY(102%); border-top-left-radius: 48px; border-top-right-radius: 48px; }
`,vl=xn.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  backdrop-filter: blur(3px);
  transition: opacity 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  opacity: ${e=>{let{$unblur:t}=e;return t?0:1}};
  pointer-events: none;
`,yl=xn.div`
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
`,xl=xn(yl)`
  top: 0;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};
  align-items: flex-end;
  padding-bottom: 4px;
  animation: ${ml} 1.6s cubic-bezier(0.76, 0, 0.24, 1) 1s forwards;
`,bl=xn(yl)`
  bottom: 0;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.divider}};
  align-items: flex-start;
  padding-top: 4px;
  animation: ${gl} 1.6s cubic-bezier(0.76, 0, 0.24, 1) 1s forwards;
`,wl=xn.div`
  text-align: center;
  padding-bottom: 20px;

  .monogram {
    font-size: clamp(28px, 5vw, 44px);
    font-weight: 900;
    letter-spacing: -0.06em;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    line-height: 1;
    animation: ${fl} 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;

    span {
      color: ${e=>{let{theme:t}=e;return t.colors.primary}};
    }
  }
`,Sl=xn.div`
  text-align: center;
  padding-top: 20px;

  .tagline {
    font-size: 11px;
    font-family: ${e=>{let{theme:t}=e;return t.fonts.mono}};
    color: ${e=>{let{theme:t}=e;return t.colors.textTertiary}};
    letter-spacing: 0.2em;
    text-transform: uppercase;
    animation: ${fl} 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
  }
`,kl=e=>{let{onFinish:n}=e;const[r,i]=(0,t.useState)(!0),[o,a]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{const e=n,t=setTimeout(()=>{a(!0),setTimeout(()=>{i(!1),e&&e()},700)},2400);return()=>clearTimeout(t)},[]),r?(0,hr.jsxs)(hr.Fragment,{children:[(0,hr.jsx)(vl,{$unblur:o}),(0,hr.jsx)(xl,{children:(0,hr.jsx)(wl,{children:(0,hr.jsxs)("div",{className:"monogram",children:["DIBYAJYOTI",(0,hr.jsx)("span",{children:"."})]})})}),(0,hr.jsx)(bl,{children:(0,hr.jsx)(Sl,{children:(0,hr.jsx)("div",{className:"tagline",children:"Senior Software Engineer \xb7 London"})})})]}):null},Cl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],El=(()=>new Set(Cl))(),jl=e=>180*e/Math.PI,Tl=e=>{const t=jl(Math.atan2(e[1],e[0]));return $l(t)},Pl={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Tl,rotateZ:Tl,skewX:e=>jl(Math.atan(e[1])),skewY:e=>jl(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},$l=e=>((e%=360)<0&&(e+=360),e),Ml=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),zl=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Nl={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ml,scaleY:zl,scale:e=>(Ml(e)+zl(e))/2,rotateX:e=>$l(jl(Math.atan2(e[6],e[5]))),rotateY:e=>$l(jl(Math.atan2(-e[2],e[0]))),rotateZ:Tl,rotate:Tl,skewX:e=>jl(Math.atan(e[4])),skewY:e=>jl(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Rl(e){return e.includes("scale")?1:0}function Dl(e,t){if(!e||"none"===e)return Rl(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=Nl,i=n;else{const t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Pl,i=t}if(!i)return Rl(t);const o=r[t],a=i[1].split(",").map(Ll);return"function"===typeof o?o(a):a[o]}function Ll(e){return parseFloat(e.trim())}const Al=e=>t=>"string"===typeof t&&t.startsWith(e),Il=Al("--"),Ol=Al("var(--"),_l=e=>!!Ol(e)&&Bl.test(e.split("/*")[0].trim()),Bl=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Fl(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}const Vl=(e,t,n)=>e+(t-e)*n;function Hl(e){return void 0===e||1===e}function Ul(e){let{scale:t,scaleX:n,scaleY:r}=e;return!Hl(t)||!Hl(n)||!Hl(r)}function Wl(e){return Ul(e)||Yl(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Yl(e){return Kl(e.x)||Kl(e.y)}function Kl(e){return e&&"0%"!==e}function Xl(e,t,n){return n+t*(e-n)}function Gl(e,t,n,r,i){return void 0!==i&&(e=Xl(e,i,r)),Xl(e,n,r)+t}function Ql(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=Gl(e.min,t,n,r,i),e.max=Gl(e.max,t,n,r,i)}function ql(e,t){let{x:n,y:r}=t;Ql(e.x,n.translate,n.scale,n.originPoint),Ql(e.y,r.translate,r.scale,r.originPoint)}const Jl=.999999999999,Zl=1.0000000000001;function ec(e,t){e.min=e.min+t,e.max=e.max+t}function tc(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;Ql(e,t,n,Vl(e.min,e.max,i),r)}function nc(e,t){tc(e.x,t.x,t.scaleX,t.scale,t.originX),tc(e.y,t.y,t.scaleY,t.scale,t.originY)}function rc(e,t){return Fl(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const ic=new Set(["width","height","top","left","right","bottom",...Cl]),oc=(e,t,n)=>n>t?t:n<e?e:n,ac={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},sc={...ac,transform:e=>oc(0,1,e)},lc={...ac,default:1},cc=e=>({test:t=>"string"===typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),uc=cc("deg"),dc=cc("%"),pc=cc("px"),hc=cc("vh"),fc=cc("vw"),mc=(()=>({...dc,parse:e=>dc.parse(e)/100,transform:e=>dc.transform(100*e)}))(),gc=e=>t=>t.test(e),vc=[ac,pc,dc,uc,fc,hc,{test:e=>"auto"===e,parse:e=>e}],yc=e=>vc.find(gc(e));const xc=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),bc=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function wc(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const[r,i]=function(e){const t=bc.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const e=o.trim();return xc(e)?parseFloat(e):e}return _l(i)?wc(i,t,n+1):i}const Sc=e=>e===ac||e===pc,kc=new Set(["x","y","z"]),Cc=Cl.filter(e=>!kc.has(e));const Ec={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:(e,t)=>{let{transform:n}=t;return Dl(n,"x")},y:(e,t)=>{let{transform:n}=t;return Dl(n,"y")}};Ec.translateX=Ec.x,Ec.translateY=Ec.y;const jc=e=>e,Tc={},Pc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],$c={value:null,addProjectionMetrics:null};function Mc(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,a=Pc.reduce((e,n)=>(e[n]=function(e,t){let n=new Set,r=new Set,i=!1,o=!1;const a=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1},l=0;function c(t){a.has(t)&&(u.schedule(t),e()),l++,t(s)}const u={schedule:function(e){const t=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i?n:r;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&a.add(e),t.has(e)||t.add(e),e},cancel:e=>{r.delete(e),a.delete(e)},process:e=>{s=e,i?o=!0:(i=!0,[n,r]=[r,n],n.forEach(c),t&&$c.value&&$c.value.frameloop[t].push(l),l=0,n.clear(),i=!1,o&&(o=!1,u.process(e)))}};return u}(o,t?n:void 0),e),{}),{setup:s,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:p,render:h,postRender:f}=a,m=()=>{const o=Tc.useManualTiming?i.timestamp:performance.now();n=!1,Tc.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,40),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),l.process(i),c.process(i),u.process(i),d.process(i),p.process(i),h.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(m))},g=Pc.reduce((t,o)=>{const s=a[o];return t[o]=function(t){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(m)),s.schedule(t,o,a)},t},{});return{schedule:g,cancel:e=>{for(let t=0;t<Pc.length;t++)a[Pc[t]].cancel(e)},state:i,steps:a}}const{schedule:zc,cancel:Nc,state:Rc,steps:Dc}=Mc("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:jc,!0),Lc=new Set;let Ac=!1,Ic=!1,Oc=!1;function _c(){if(Ic){const e=Array.from(Lc).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{const t=function(e){const t=[];return Cc.forEach(n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();const t=n.get(e);t&&t.forEach(t=>{let[n,r]=t;e.getValue(n)?.set(r)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)})}Ic=!1,Ac=!1,Lc.forEach(e=>e.complete(Oc)),Lc.clear()}function Bc(){Lc.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ic=!0)})}class Fc{constructor(e,t,n,r,i){let o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Lc.add(this),Ac||(Ac=!0,zc.read(Bc),zc.resolveKeyframes(_c))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(null===e[0]){const i=r?.get(),o=e[e.length-1];if(void 0!==i)e[0]=i;else if(n&&t){const r=n.readValue(t,o);void 0!==r&&null!==r&&(e[0]=r)}void 0===e[0]&&(e[0]=o),r&&void 0===i&&r.set(e[0])}!function(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Lc.delete(this)}cancel(){"scheduled"===this.state&&(Lc.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}const Vc=e=>/^0[^.\s]+$/u.test(e);function Hc(e){return"number"===typeof e?0===e:null===e||("none"===e||"0"===e||Vc(e))}const Uc=e=>Math.round(1e5*e)/1e5,Wc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const Yc=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Kc=(e,t)=>n=>Boolean("string"===typeof n&&Yc.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),Xc=(e,t,n)=>r=>{if("string"!==typeof r)return r;const[i,o,a,s]=r.match(Wc);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},Gc={...ac,transform:e=>Math.round((e=>oc(0,255,e))(e))},Qc={test:Kc("rgb","red"),parse:Xc("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+Gc.transform(t)+", "+Gc.transform(n)+", "+Gc.transform(r)+", "+Uc(sc.transform(i))+")"}};const qc={test:Kc("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:Qc.transform},Jc={test:Kc("hsl","hue"),parse:Xc("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+dc.transform(Uc(n))+", "+dc.transform(Uc(r))+", "+Uc(sc.transform(i))+")"}},Zc={test:e=>Qc.test(e)||qc.test(e)||Jc.test(e),parse:e=>Qc.test(e)?Qc.parse(e):Jc.test(e)?Jc.parse(e):qc.parse(e),transform:e=>"string"===typeof e?e:e.hasOwnProperty("red")?Qc.transform(e):Jc.transform(e),getAnimatableNone:e=>{const t=Zc.parse(e);return t.alpha=0,Zc.transform(t)}},eu=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const tu="number",nu="color",ru=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function iu(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(ru,e=>(Zc.test(e)?(r.color.push(o),i.push(nu),n.push(Zc.parse(e))):e.startsWith("var(")?(r.var.push(o),i.push("var"),n.push(e)):(r.number.push(o),i.push(tu),n.push(parseFloat(e))),++o,"${}")).split("${}");return{values:n,split:a,indexes:r,types:i}}function ou(e){return iu(e).values}function au(e){const{split:t,types:n}=iu(e),r=t.length;return e=>{let i="";for(let o=0;o<r;o++)if(i+=t[o],void 0!==e[o]){const t=n[o];i+=t===tu?Uc(e[o]):t===nu?Zc.transform(e[o]):e[o]}return i}}const su=e=>"number"===typeof e?0:Zc.test(e)?Zc.getAnimatableNone(e):e;const lu={test:function(e){return isNaN(e)&&"string"===typeof e&&(e.match(Wc)?.length||0)+(e.match(eu)?.length||0)>0},parse:ou,createTransformer:au,getAnimatableNone:function(e){const t=ou(e);return au(e)(t.map(su))}},cu=new Set(["brightness","contrast","saturate","opacity"]);function uu(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(Wc)||[];if(!r)return e;const i=n.replace(r,"");let o=cu.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const du=/\b([a-z-]*)\(.*?\)/gu,pu={...lu,getAnimatableNone:e=>{const t=e.match(du);return t?t.map(uu).join(" "):e}},hu={...ac,transform:Math.round},fu={borderWidth:pc,borderTopWidth:pc,borderRightWidth:pc,borderBottomWidth:pc,borderLeftWidth:pc,borderRadius:pc,radius:pc,borderTopLeftRadius:pc,borderTopRightRadius:pc,borderBottomRightRadius:pc,borderBottomLeftRadius:pc,width:pc,maxWidth:pc,height:pc,maxHeight:pc,top:pc,right:pc,bottom:pc,left:pc,padding:pc,paddingTop:pc,paddingRight:pc,paddingBottom:pc,paddingLeft:pc,margin:pc,marginTop:pc,marginRight:pc,marginBottom:pc,marginLeft:pc,backgroundPositionX:pc,backgroundPositionY:pc,...{rotate:uc,rotateX:uc,rotateY:uc,rotateZ:uc,scale:lc,scaleX:lc,scaleY:lc,scaleZ:lc,skew:uc,skewX:uc,skewY:uc,distance:pc,translateX:pc,translateY:pc,translateZ:pc,x:pc,y:pc,z:pc,perspective:pc,transformPerspective:pc,opacity:sc,originX:mc,originY:mc,originZ:pc},zIndex:hu,fillOpacity:sc,strokeOpacity:sc,numOctaves:hu},mu={...fu,color:Zc,backgroundColor:Zc,outlineColor:Zc,fill:Zc,stroke:Zc,borderColor:Zc,borderTopColor:Zc,borderRightColor:Zc,borderBottomColor:Zc,borderLeftColor:Zc,filter:pu,WebkitFilter:pu},gu=e=>mu[e];function vu(e,t){let n=gu(e);return n!==pu&&(n=lu),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const yu=new Set(["auto","none","0"]);class xu extends Fc{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let s=0;s<e.length;s++){let n=e[s];if("string"===typeof n&&(n=n.trim(),_l(n))){const r=wc(n,t.current);void 0!==r&&(e[s]=r),s===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!ic.has(n)||2!==e.length)return;const[r,i]=e,o=yc(r),a=yc(i);if(o!==a)if(Sc(o)&&Sc(a))for(let s=0;s<e.length;s++){const t=e[s];"string"===typeof t&&(e[s]=parseFloat(t))}else Ec[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let r=0;r<e.length;r++)(null===e[r]||Hc(e[r]))&&n.push(r);n.length&&function(e,t,n){let r,i=0;for(;i<e.length&&!r;){const t=e[i];"string"===typeof t&&!yu.has(t)&&iu(t).values.length&&(r=e[i]),i++}if(r&&n)for(const o of t)e[o]=vu(n,r)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ec[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];void 0!==r&&e.getValue(n,r).jump(r,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);const i=n.length-1,o=n[i];n[i]=Ec[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==o&&void 0===this.finalKeyframe&&(this.finalKeyframe=o),this.removedTransforms?.length&&this.removedTransforms.forEach(t=>{let[n,r]=t;e.getValue(n).set(r)}),this.resolveNoneKeyframes()}}const bu=e=>Boolean(e&&e.getVelocity);let wu;function Su(){wu=void 0}const ku={now:()=>(void 0===wu&&ku.set(Rc.isProcessing||Tc.useManualTiming?Rc.timestamp:performance.now()),wu),set:e=>{wu=e,queueMicrotask(Su)}};function Cu(e,t){-1===e.indexOf(t)&&e.push(t)}function Eu(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class ju{constructor(){this.subscriptions=[]}add(e){return Cu(this.subscriptions,e),()=>Eu(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Tu(e,t){return t?e*(1e3/t):0}const Pu={current:void 0};class $u{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{const t=ku.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const n of this.dependents)n.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){var t;this.current=e,this.updatedAt=ku.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new ju);const n=this.events[e].add(t);return"change"===e?()=>{n(),zc.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Pu.current&&Pu.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=ku.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return Tu(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Mu(e,t){return new $u(e,t)}const zu=[...vc,Zc,lu],{schedule:Nu,cancel:Ru}=Mc(queueMicrotask,!1),Du={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Lu={};for(const n in Du)Lu[n]={isEnabled:e=>Du[n].some(t=>!!e[t])};const Au=()=>({x:{min:0,max:0},y:{min:0,max:0}}),Iu="undefined"!==typeof window,Ou={current:null},_u={current:!1};const Bu=new WeakMap;function Fu(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}function Vu(e){return"string"===typeof e||Array.isArray(e)}const Hu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Uu=["initial",...Hu];function Wu(e){return Fu(e.animate)||Uu.some(t=>Vu(e[t]))}function Yu(e){return Boolean(Wu(e)||e.variants)}function Ku(e){const t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Xu(e,t,n,r){if("function"===typeof t){const[i,o]=Ku(r);t=t(void 0!==n?n:e.custom,i,o)}if("string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t){const[i,o]=Ku(r);t=t(void 0!==n?n:e.custom,i,o)}return t}const Gu=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Qu{scrapeMotionValuesFromProps(e,t,n){return{}}constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:a}=e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Fc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=ku.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,zc.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=a;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=Boolean(o),this.isControllingVariants=Wu(n),this.isVariantNode=Yu(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in d){const e=d[p];void 0!==l[p]&&bu(e)&&e.set(l[p])}}mount(e){this.current=e,Bu.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),_u.current||function(){if(_u.current=!0,Iu)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Ou.current=e.matches;e.addEventListener("change",t),t()}else Ou.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Ou.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Nc(this.notifyUpdate),Nc(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=El.has(e);n&&this.onBindTransform&&this.onBindTransform();const r=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&zc.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let i;window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in Lu){const t=Lu[e];if(!t)continue;const{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Gu.length;n++){const t=Gu[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){for(const r in t){const i=t[r],o=n[r];if(bu(i))e.addValue(r,i);else if(bu(o))e.addValue(r,Mu(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const t=e.getValue(r);!0===t.liveStyle?t.jump(i):t.hasAnimated||t.set(i)}else{const t=e.getStaticValue(r);e.addValue(r,Mu(void 0!==t?t:i,{owner:e}))}}for(const r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=Mu(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return void 0!==n&&null!==n&&("string"===typeof n&&(xc(n)||Vc(n))?n=parseFloat(n):!(e=>zu.find(gc(e)))(n)&&lu.test(t)&&(n=vu(e,t)),this.setBaseTarget(e,bu(n)?n.get():n)),bu(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let n;if("string"===typeof t||"object"===typeof t){const r=Xu(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&void 0!==n)return n;const r=this.getBaseTargetFromProps(this.props,e);return void 0===r||bu(r)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:r}on(e,t){return this.events[e]||(this.events[e]=new ju),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}scheduleRenderMicrotask(){Nu.render(this.render)}}class qu extends Qu{constructor(){super(...arguments),this.KeyframeResolver=xu}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;bu(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}const Ju=(e,t)=>t&&"number"===typeof e?t.transform(e):e,Zu={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ed=Cl.length;function td(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let a=!1,s=!1;for(const l in t){const e=t[l];if(El.has(l))a=!0;else if(Il(l))i[l]=e;else{const t=Ju(e,fu[l]);l.startsWith("origin")?(s=!0,o[l]=t):r[l]=t}}if(t.transform||(a||n?r.transform=function(e,t,n){let r="",i=!0;for(let o=0;o<ed;o++){const a=Cl[o],s=e[a];if(void 0===s)continue;let l=!0;if(l="number"===typeof s?s===(a.startsWith("scale")?1:0):0===parseFloat(s),!l||n){const e=Ju(s,fu[a]);l||(i=!1,r+=`${Zu[a]||a}(${e}) `),n&&(t[a]=e)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:e="50%",originY:t="50%",originZ:n=0}=o;r.transformOrigin=`${e} ${t} ${n}`}}function nd(e,t,n,r){let{style:i,vars:o}=t;const a=e.style;let s;for(s in i)a[s]=i[s];for(s in r?.applyProjectionStyles(a,n),o)a.setProperty(s,o[s])}const rd={};function id(e,t){let{layout:n,layoutId:r}=t;return El.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!rd[e]||"opacity"===e)}function od(e,t,n){const{style:r}=e,i={};for(const o in r)(bu(r[o])||t.style&&bu(t.style[o])||id(o,e)||void 0!==n?.getValue(o)?.liveStyle)&&(i[o]=r[o]);return i}class ad extends qu{constructor(){super(...arguments),this.type="html",this.renderInstance=nd}readValueFromInstance(e,t){if(El.has(t))return this.projection?.isProjecting?Rl(t):((e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Dl(n,t)})(e,t);{const r=(n=e,window.getComputedStyle(n)),i=(Il(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return rc(e,n)}build(e,t,n){td(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return od(e,t,n)}}const sd=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),ld={offset:"stroke-dashoffset",array:"stroke-dasharray"},cd={offset:"strokeDashoffset",array:"strokeDasharray"};function ud(e,t,n,r,i){let{attrX:o,attrY:a,attrScale:s,pathLength:l,pathSpacing:c=1,pathOffset:u=0,...d}=t;if(td(e,d,r),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:p,style:h}=e;p.transform&&(h.transform=p.transform,delete p.transform),(h.transform||p.transformOrigin)&&(h.transformOrigin=p.transformOrigin??"50% 50%",delete p.transformOrigin),h.transform&&(h.transformBox=i?.transformBox??"fill-box",delete p.transformBox),void 0!==o&&(p.x=o),void 0!==a&&(p.y=a),void 0!==s&&(p.scale=s),void 0!==l&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const o=i?ld:cd;e[o.offset]=pc.transform(-r);const a=pc.transform(t),s=pc.transform(n);e[o.array]=`${a} ${s}`}(p,l,c,u,!1)}const dd=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),pd=e=>"string"===typeof e&&"svg"===e.toLowerCase();function hd(e,t,n){const r=od(e,t,n);for(const i in e)if(bu(e[i])||bu(t[i])){r[-1!==Cl.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]}return r}class fd extends qu{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Au}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(El.has(t)){const e=gu(t);return e&&e.default||0}return t=dd.has(t)?t:sd(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return hd(e,t,n)}build(e,t,n){ud(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){!function(e,t,n,r){nd(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(dd.has(i)?i:sd(i),t.attrs[i])}(e,t,0,r)}mount(e){this.isSVGTag=pd(e.tagName),super.mount(e)}}const md=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function gd(e){return"string"===typeof e&&!e.includes("-")&&!!(md.indexOf(e)>-1||/[A-Z]/u.test(e))}const vd=(e,n)=>gd(e)?new fd(n):new ad(n,{allowProjection:e!==t.Fragment}),yd=(0,t.createContext)({}),xd=(0,t.createContext)({strict:!1}),bd=(0,t.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),wd=(0,t.createContext)({});function Sd(e){const{initial:n,animate:r}=function(e,t){if(Wu(e)){const{initial:t,animate:n}=e;return{initial:!1===t||Vu(t)?t:void 0,animate:Vu(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,t.useContext)(wd));return(0,t.useMemo)(()=>({initial:n,animate:r}),[kd(n),kd(r)])}function kd(e){return Array.isArray(e)?e.join(" "):e}const Cd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ed(e,t,n){for(const r in t)bu(t[r])||id(r,n)||(e[r]=t[r])}function jd(e,n){const r={};return Ed(r,e.style||{},e),Object.assign(r,function(e,n){let{transformTemplate:r}=e;return(0,t.useMemo)(()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return td(e,n,r),Object.assign({},e.vars,e.style)},[n])}(e,n)),r}function Td(e,t){const n={},r=jd(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const Pd=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}});function $d(e,n,r,i){const o=(0,t.useMemo)(()=>{const t={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return ud(t,n,pd(i),e.transformTemplate,e.style),{...t.attrs,style:{...t.style}}},[n]);if(e.style){const t={};Ed(t,e.style,e),o.style={...t,...o.style}}return o}const Md=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function zd(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Md.has(e)}let Nd=e=>!zd(e);try{"function"===typeof(Rd=require("@emotion/is-prop-valid").default)&&(Nd=e=>e.startsWith("on")?!zd(e):Rd(e))}catch{}var Rd;function Dd(e,n,r,i,o){let{latestValues:a}=i,s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const l=(gd(e)?$d:Td)(n,a,o,e),c=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||(Nd(i)||!0===n&&zd(i)||!t&&!zd(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(n,"string"===typeof e,s),u=e!==t.Fragment?{...c,...l,ref:r}:{},{children:d}=n,p=(0,t.useMemo)(()=>bu(d)?d.get():d,[d]);return(0,t.createElement)(e,{...u,children:p})}const Ld=(0,t.createContext)(null);function Ad(e){const n=(0,t.useRef)(null);return null===n.current&&(n.current=e()),n.current}function Id(e){return bu(e)?e.get():e}function Od(e,t,n,r){const i={},o=r(e,{});for(const p in o)i[p]=Id(o[p]);let{initial:a,animate:s}=e;const l=Wu(e),c=Yu(e);t&&c&&!l&&!1!==e.inherit&&(void 0===a&&(a=t.initial),void 0===s&&(s=t.animate));let u=!!n&&!1===n.initial;u=u||!1===a;const d=u?s:a;if(d&&"boolean"!==typeof d&&!Fu(d)){const t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){const r=Xu(e,t[n]);if(r){const{transitionEnd:e,transition:t,...n}=r;for(const r in n){let e=n[r];if(Array.isArray(e)){e=e[u?e.length-1:0]}null!==e&&(i[r]=e)}for(const r in e)i[r]=e[r]}}}return i}const _d=e=>(n,r)=>{const i=(0,t.useContext)(wd),o=(0,t.useContext)(Ld),a=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:i,createRenderState:o}=e;return{latestValues:Od(t,n,r,i),renderState:o()}}(e,n,i,o);return r?a():Ad(a)},Bd=_d({scrapeMotionValuesFromProps:od,createRenderState:Cd}),Fd=_d({scrapeMotionValuesFromProps:hd,createRenderState:Pd});const Vd=Symbol.for("motionComponentSymbol");function Hd(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function Ud(e,n,r){return(0,t.useCallback)(t=>{t&&e.onMount&&e.onMount(t),n&&(t?n.mount(t):n.unmount()),r&&("function"===typeof r?r(t):Hd(r)&&(r.current=t))},[n])}const Wd="data-"+sd("framerAppearId"),Yd=(0,t.createContext)({}),Kd=Iu?t.useLayoutEffect:t.useEffect;function Xd(e,n,r,i,o){const{visualElement:a}=(0,t.useContext)(wd),s=(0,t.useContext)(xd),l=(0,t.useContext)(Ld),c=(0,t.useContext)(bd).reducedMotion,u=(0,t.useRef)(null);i=i||s.renderer,!u.current&&i&&(u.current=i(e,{visualState:n,parent:a,props:r,presenceContext:l,blockInitialAnimation:!!l&&!1===l.initial,reducedMotionConfig:c}));const d=u.current,p=(0,t.useContext)(Yd);!d||d.projection||!o||"html"!==d.type&&"svg"!==d.type||function(e,t,n,r){const{layoutId:i,layout:o,drag:a,dragConstraints:s,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Gd(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:Boolean(a)||s&&Hd(s),visualElement:e,animationType:"string"===typeof o?o:"both",initialPromotionConfig:r,crossfade:u,layoutScroll:l,layoutRoot:c})}(u.current,r,o,p);const h=(0,t.useRef)(!1);(0,t.useInsertionEffect)(()=>{d&&h.current&&d.update(r,l)});const f=r[Wd],m=(0,t.useRef)(Boolean(f)&&!window.MotionHandoffIsComplete?.(f)&&window.MotionHasOptimisedAnimation?.(f));return Kd(()=>{d&&(h.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),d.scheduleRenderMicrotask(),m.current&&d.animationState&&d.animationState.animateChanges())}),(0,t.useEffect)(()=>{d&&(!m.current&&d.animationState&&d.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(f)}),m.current=!1),d.enteringChildren=void 0)}),d}function Gd(e){if(e)return!1!==e.options.allowProjection?e.projection:Gd(e.parent)}function Qd(e){let{forwardMotionProps:n=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;r&&function(e){for(const t in e)Lu[t]={...Lu[t],...e[t]}}(r);const o=gd(e)?Fd:Bd;function a(r,a){let s;const l={...(0,t.useContext)(bd),...r,layoutId:qd(r)},{isStatic:c}=l,u=Sd(r),d=o(r,c);if(!c&&Iu){!function(){(0,t.useContext)(xd).strict;0}();const n=function(e){const{drag:t,layout:n}=Lu;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}(l);s=n.MeasureLayout,u.visualElement=Xd(e,d,l,i,n.ProjectionNode)}return(0,hr.jsxs)(wd.Provider,{value:u,children:[s&&u.visualElement?(0,hr.jsx)(s,{visualElement:u.visualElement,...l}):null,Dd(e,r,Ud(d,u.visualElement,a),d,c,n)]})}a.displayName=`motion.${"string"===typeof e?e:`create(${e.displayName??e.name??""})`}`;const s=(0,t.forwardRef)(a);return s[Vd]=e,s}function qd(e){let{layoutId:n}=e;const r=(0,t.useContext)(yd).id;return r&&void 0!==n?r+"-"+n:n}function Jd(e,t){if("undefined"===typeof Proxy)return Qd;const n=new Map,r=(n,r)=>Qd(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,o)=>"create"===o?r:(n.has(o)||n.set(o,Qd(o,void 0,e,t)),n.get(o))})}function Zd(e,t,n){const r=e.getProps();return Xu(r,t,void 0!==n?n:r.custom,e)}function ep(e,t){return e?.[t]??e?.default??e}const tp=e=>Array.isArray(e);function np(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Mu(n))}function rp(e){return tp(e)?e[e.length-1]||0:e}function ip(e,t){const n=e.getValue("willChange");if(r=n,Boolean(bu(r)&&r.add))return n.add(t);if(!n&&Tc.WillChange){const n=new Tc.WillChange("auto");e.addValue("willChange",n),n.add(t)}var r}function op(e){return e.props[Wd]}function ap(e){e.duration=0,e.type}const sp=(e,t)=>n=>t(e(n)),lp=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(sp)},cp=e=>1e3*e,up=e=>e/1e3,dp={layout:0,mainThread:0,waapi:0};function pp(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function hp(e,t){return n=>n>0?t:e}const fp=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},mp=[qc,Qc,Jc];function gp(e){const t=(e=>mp.find(t=>t.test(e)))(e);if(Boolean(t),!Boolean(t))return!1;let n=t.parse(e);return t===Jc&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let o=0,a=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;o=pp(i,e,t+1/3),a=pp(i,e,t),s=pp(i,e,t-1/3)}else o=a=s=r;return{red:Math.round(255*o),green:Math.round(255*a),blue:Math.round(255*s),alpha:i}}(n)),n}const vp=(e,t)=>{const n=gp(e),r=gp(t);if(!n||!r)return hp(e,t);const i={...n};return e=>(i.red=fp(n.red,r.red,e),i.green=fp(n.green,r.green,e),i.blue=fp(n.blue,r.blue,e),i.alpha=Vl(n.alpha,r.alpha,e),Qc.transform(i))},yp=new Set(["none","hidden"]);function xp(e,t){return n=>Vl(e,t,n)}function bp(e){return"number"===typeof e?xp:"string"===typeof e?_l(e)?hp:Zc.test(e)?vp:kp:Array.isArray(e)?wp:"object"===typeof e?Zc.test(e)?vp:Sp:hp}function wp(e,t){const n=[...e],r=n.length,i=e.map((e,n)=>bp(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Sp(e,t){const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=bp(e[i])(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}}const kp=(e,t)=>{const n=lu.createTransformer(t),r=iu(e),i=iu(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?yp.has(e)&&!i.values.length||yp.has(t)&&!r.values.length?function(e,t){return yp.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):lp(wp(function(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],a=e.indexes[o][r[o]],s=e.values[a]??0;n[i]=s,r[o]++}return n}(r,i),i.values),n):hp(e,t)};function Cp(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return Vl(e,t,n);return bp(e)(e,t)}const Ep=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return zc.update(t,e)},stop:()=>Nc(t),now:()=>Rc.isProcessing?Rc.timestamp:ku.now()}},jp=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=Math.round(1e4*e(o/(i-1)))/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Tp=2e4;function Pp(e){let t=0;let n=e.next(t);for(;!n.done&&t<Tp;)t+=50,n=e.next(t);return t>=Tp?1/0:t}function $p(e,t,n){const r=Math.max(t-5,0);return Tu(n-e(r),t-r)}const Mp={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},zp=.001;function Np(e){let t,n,{duration:r=Mp.duration,bounce:i=Mp.bounce,velocity:o=Mp.velocity,mass:a=Mp.mass}=e;cp(Mp.maxDuration);let s=1-i;s=oc(Mp.minDamping,Mp.maxDamping,s),r=oc(Mp.minDuration,Mp.maxDuration,up(r)),s<1?(t=e=>{const t=e*s,n=t*r,i=t-o,a=Dp(e,s),l=Math.exp(-n);return zp-i/a*l},n=e=>{const n=e*s*r,i=n*o+o,a=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=Dp(Math.pow(e,2),s);return(-t(e)+zp>0?-1:1)*((i-a)*l)/c}):(t=e=>Math.exp(-e*r)*((e-o)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(o-e)));const l=function(e,t,n){let r=n;for(let i=1;i<Rp;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=cp(r),isNaN(l))return{stiffness:Mp.stiffness,damping:Mp.damping,duration:r};{const e=Math.pow(l,2)*a;return{stiffness:e,damping:2*s*Math.sqrt(a*e),duration:r}}}const Rp=12;function Dp(e,t){return e*Math.sqrt(1-t*t)}const Lp=["duration","bounce"],Ap=["stiffness","damping","mass"];function Ip(e,t){return t.some(t=>void 0!==e[t])}function Op(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mp.visualDuration,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Mp.bounce;const n="object"!==typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],s={done:!1,value:o},{stiffness:l,damping:c,mass:u,duration:d,velocity:p,isResolvedFromDuration:h}=function(e){let t={velocity:Mp.velocity,stiffness:Mp.stiffness,damping:Mp.damping,mass:Mp.mass,isResolvedFromDuration:!1,...e};if(!Ip(e,Ap)&&Ip(e,Lp))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(1.2*n),i=r*r,o=2*oc(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Mp.mass,stiffness:i,damping:o}}else{const n=Np(e);t={...t,...n,mass:Mp.mass},t.isResolvedFromDuration=!0}return t}({...n,velocity:-up(n.velocity||0)}),f=p||0,m=c/(2*Math.sqrt(l*u)),g=a-o,v=up(Math.sqrt(l/u)),y=Math.abs(g)<5;let x;if(r||(r=y?Mp.restSpeed.granular:Mp.restSpeed.default),i||(i=y?Mp.restDelta.granular:Mp.restDelta.default),m<1){const e=Dp(v,m);x=t=>{const n=Math.exp(-m*v*t);return a-n*((f+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)x=e=>a-Math.exp(-v*e)*(g+(f+v*g)*e);else{const e=v*Math.sqrt(m*m-1);x=t=>{const n=Math.exp(-m*v*t),r=Math.min(e*t,300);return a-n*((f+m*v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}const b={calculatedDuration:h&&d||null,next:e=>{const t=x(e);if(h)s.done=e>=d;else{let n=0===e?f:0;m<1&&(n=0===e?cp(f):$p(x,e,t));const o=Math.abs(n)<=r,l=Math.abs(a-t)<=i;s.done=o&&l}return s.value=s.done?a:t,s},toString:()=>{const e=Math.min(Pp(b),Tp),t=jp(t=>b.next(e*t).value,e,30);return e+"ms "+t},toTransition:()=>{}};return b}function _p(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const p=t[0],h={done:!1,value:p},f=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let m=r*n;const g=p+m,v=void 0===s?g:s(g);v!==g&&(m=v-p);const y=e=>-m*Math.exp(-e/i),x=e=>v+y(e),b=e=>{const t=y(e),n=x(e);h.done=Math.abs(t)<=u,h.value=h.done?v:n};let w,S;const k=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(h.value)&&(w=e,S=Op({keyframes:[h.value,f(h.value)],velocity:$p(x,e,h.value),damping:o,stiffness:a,restDelta:u,restSpeed:d}))};return k(0),{calculatedDuration:null,next:e=>{let t=!1;return S||void 0!==w||(t=!0,b(e),k(e)),void 0!==w&&e>=w?S.next(e-w):(!t&&b(e),h)}}}Op.applyToOptions=e=>{const t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=(arguments.length>2?arguments[2]:void 0)({...e,keyframes:[0,t]}),r=Math.min(Pp(n),Tp);return{type:"keyframes",ease:e=>n.next(r*e).value/t,duration:up(r)}}(e,100,Op);return e.ease=t.ease,e.duration=cp(t.duration),e.type="keyframes",e};const Bp=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function Fp(e,t,n,r){if(e===t&&n===r)return jc;const i=t=>function(e,t,n,r,i){let o,a,s=0;do{a=t+(n-t)/2,o=Bp(a,r,i)-e,o>0?n=a:t=a}while(Math.abs(o)>1e-7&&++s<12);return a}(t,0,1,e,n);return e=>0===e||1===e?e:Bp(i(e),t,r)}const Vp=Fp(.42,0,1,1),Hp=Fp(0,0,.58,1),Up=Fp(.42,0,.58,1),Wp=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Yp=e=>t=>1-e(1-t),Kp=Fp(.33,1.53,.69,.99),Xp=Yp(Kp),Gp=Wp(Xp),Qp=e=>(e*=2)<1?.5*Xp(e):.5*(2-Math.pow(2,-10*(e-1))),qp=e=>1-Math.sin(Math.acos(e)),Jp=Yp(qp),Zp=Wp(qp),eh=e=>Array.isArray(e)&&"number"===typeof e[0],th={linear:jc,easeIn:Vp,easeInOut:Up,easeOut:Hp,circIn:qp,circInOut:Zp,circOut:Jp,backIn:Xp,backInOut:Gp,backOut:Kp,anticipate:Qp},nh=e=>{if(eh(e)){e.length;const[t,n,r,i]=e;return Fp(t,n,r,i)}return"string"===typeof e?th[e]:e},rh=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r};function ih(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=e.length;if(t.length,1===o)return()=>t[0];if(2===o&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,n){const r=[],i=n||Tc.mix||Cp,o=e.length-1;for(let a=0;a<o;a++){let n=i(e[a],e[a+1]);if(t){const e=Array.isArray(t)?t[a]||jc:t;n=lp(e,n)}r.push(n)}return r}(t,r,i),l=s.length,c=n=>{if(a&&n<e[0])return t[0];let r=0;if(l>1)for(;r<e.length-2&&!(n<e[r+1]);r++);const i=rh(e[r],e[r+1],n);return s[r](i)};return n?t=>c(oc(e[0],e[o-1],t)):c}function oh(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=rh(0,t,r);e.push(Vl(n,1,i))}}(t,e.length-1),t}function ah(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const o=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(nh):nh(i),a={done:!1,value:n[0]},s=function(e,t){return e.map(e=>e*t)}(r&&r.length===n.length?r:oh(n),t),l=ih(s,n,{ease:Array.isArray(o)?o:(c=n,u=o,c.map(()=>u||Up).splice(0,c.length-1))});var c,u;return{calculatedDuration:t,next:e=>(a.value=l(e),a.done=e>=t,a)}}const sh=e=>null!==e;function lh(e,t,n){let{repeat:r,repeatType:i="loop"}=t,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;const a=e.filter(sh),s=o<0||r&&"loop"!==i&&r%2===1?0:a.length-1;return s&&void 0!==n?n:a[s]}const ch={decay:_p,inertia:_p,tween:ah,keyframes:ah,spring:Op};function uh(e){"string"===typeof e.type&&(e.type=ch[e.type])}class dh{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const ph=e=>e/100;class hh extends dh{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:e}=this.options;e&&e.updatedAt!==ku.now()&&this.tick(ku.now()),this.isStopped=!0,"idle"!==this.state&&(this.teardown(),this.options.onStop?.())},dp.mainThread++,this.options=e,this.initAnimation(),this.play(),!1===e.autoplay&&this.pause()}initAnimation(){const{options:e}=this;uh(e);const{type:t=ah,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:o=0}=e;let{keyframes:a}=e;const s=t||ah;s!==ah&&"number"!==typeof a[0]&&(this.mixKeyframes=lp(ph,Cp(a[0],a[1])),a=[0,100]);const l=s({...e,keyframes:a});"mirror"===i&&(this.mirroredGenerator=s({...e,keyframes:[...a].reverse(),velocity:-o})),null===l.calculatedDuration&&(l.calculatedDuration=Pp(l));const{calculatedDuration:c}=l;this.calculatedDuration=c,this.resolvedDuration=c+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=l}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=t}tick(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:s}=this;if(null===this.startTime)return n.next(0);const{delay:l=0,keyframes:c,repeat:u,repeatType:d,repeatDelay:p,type:h,onUpdate:f,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const g=this.currentTime-l*(this.playbackSpeed>=0?1:-1),v=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=r);let y=this.currentTime,x=n;if(u){const e=Math.min(this.currentTime,r)/a;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,u+1);Boolean(t%2)&&("reverse"===d?(n=1-n,p&&(n-=p/a)):"mirror"===d&&(x=o)),y=oc(0,1,n)*a}const b=v?{done:!1,value:c[0]}:x.next(y);i&&(b.value=i(b.value));let{done:w}=b;v||null===s||(w=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const S=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return S&&h!==_p&&(b.value=lh(c,this.options,m,this.speed)),f&&f(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return up(this.calculatedDuration)}get time(){return up(this.currentTime)}set time(e){e=cp(e),this.currentTime=e,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(ku.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=up(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=Ep,startTime:t}=this.options;this.driver||(this.driver=e(e=>this.tick(e))),this.options.onPlay?.();const n=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=n):null!==this.holdTime?this.startTime=n-this.holdTime:this.startTime||(this.startTime=t??n),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ku.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null,dp.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function fh(e){let t;return()=>(void 0===t&&(t=e()),t)}const mh=fh(()=>void 0!==window.ScrollTimeline),gh={};function vh(e,t){const n=fh(e);return()=>gh[t]??n()}const yh=vh(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(Ov){return!1}return!0},"linearEasing"),xh=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},bh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:xh([0,.65,.55,1]),circOut:xh([.55,0,1,.45]),backIn:xh([.31,.01,.66,-.59]),backOut:xh([.33,1.53,.69,.99])};function wh(e,t){return e?"function"===typeof e?yh()?jp(e,t):"ease-out":eh(e)?xh(e):Array.isArray(e)?e.map(e=>wh(e,t)||bh.easeOut):bh[e]:void 0}function Sh(e,t,n){let{delay:r=0,duration:i=300,repeat:o=0,repeatType:a="loop",ease:s="easeOut",times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;const u={[t]:n};l&&(u.offset=l);const d=wh(s,i);Array.isArray(d)&&(u.easing=d),$c.value&&dp.waapi++;const p={delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:"reverse"===a?"alternate":"normal"};c&&(p.pseudoElement=c);const h=e.animate(u,p);return $c.value&&h.finished.finally(()=>{dp.waapi--}),h}function kh(e){return"function"===typeof e&&"applyToOptions"in e}class Ch extends dh{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:o=!1,finalKeyframe:a,onComplete:s}=e;this.isPseudoElement=Boolean(i),this.allowFlatten=o,this.options=e,e.type;const l=function(e){let{type:t,...n}=e;return kh(t)&&yh()?t.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}(e);this.animation=Sh(t,n,r,l,i),!1===l.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){const e=lh(r,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(e):function(e,t,n){(e=>e.startsWith("--"))(t)?e.style.setProperty(t,n):e.style[t]=n}(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch(Ov){}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;"idle"!==e&&"finished"!==e&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return up(Number(e))}get time(){return up(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=cp(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline(e){let{timeline:t,observe:n}=e;return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&mh()?(this.animation.timeline=t,jc):n(this)}}const Eh={anticipate:Qp,backInOut:Gp,circInOut:Zp};function jh(e){"string"===typeof e.ease&&function(e){return e in Eh}(e.ease)&&(e.ease=Eh[e.ease])}class Th extends Ch{constructor(e){jh(e),uh(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:n,onComplete:r,element:i,...o}=this.options;if(!t)return;if(void 0!==e)return void t.set(e);const a=new hh({...o,autoplay:!1}),s=cp(this.finishedTime??this.time);t.setWithVelocity(a.sample(s-10).value,a.sample(s).value,10),a.stop()}}const Ph=(e,t)=>"zIndex"!==t&&(!("number"!==typeof e&&!Array.isArray(e))||!("string"!==typeof e||!lu.test(e)&&"0"!==e||e.startsWith("url(")));const $h=new Set(["opacity","clipPath","filter","transform"]),Mh=fh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));class zh extends dh{constructor(e){let{autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a="loop",keyframes:s,name:l,motionValue:c,element:u,...d}=e;super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ku.now();const p={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:a,name:l,motionValue:c,element:u,...d},h=u?.KeyframeResolver||Fc;this.keyframeResolver=new h(s,(e,t,n)=>this.onKeyframesResolved(e,t,p,!n),l,c,u),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;const{name:i,type:o,velocity:a,delay:s,isHandoff:l,onUpdate:c}=n;this.resolvedAt=ku.now(),function(e,t,n,r){const i=e[0];if(null===i)return!1;if("display"===t||"visibility"===t)return!0;const o=e[e.length-1],a=Ph(i,t),s=Ph(o,t);return!(!a||!s)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||kh(n))&&r)}(e,i,o,a)||(!Tc.instantAnimations&&s||c?.(lh(e,n,t)),e[0]=e[e.length-1],ap(n),n.repeat=0);const u={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!l&&function(e){const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:a}=e,s=t?.owner?.current;if(!(s instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=t.owner.getProps();return Mh()&&n&&$h.has(n)&&("transform"!==n||!c)&&!l&&!r&&"mirror"!==i&&0!==o&&"inertia"!==a}(u)?new Th({...u,element:u.motionValue.owner.current}):new hh(u);d.finished.then(()=>this.notifyFinished()).catch(jc),this.pendingTimeline&&(this.stopTimeline=d.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=d}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Oc=!0,Bc(),_c(),Oc=!1),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const Nh=e=>null!==e;const Rh={type:"spring",stiffness:500,damping:25,restSpeed:10},Dh={type:"keyframes",duration:.8},Lh={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ah=(e,t)=>{let{keyframes:n}=t;return n.length>2?Dh:El.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:Rh:Lh};const Ih=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;return a=>{const s=ep(r,e)||{},l=s.delay||r.delay||0;let{elapsed:c=0}=r;c-=cp(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-c,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{a(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:o?void 0:i};(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:i,staggerDirection:o,repeat:a,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}=e;return!!Object.keys(d).length})(s)||Object.assign(u,Ah(e,u)),u.duration&&(u.duration=cp(u.duration)),u.repeatDelay&&(u.repeatDelay=cp(u.repeatDelay)),void 0!==u.from&&(u.keyframes[0]=u.from);let d=!1;if((!1===u.type||0===u.duration&&!u.repeatDelay)&&(ap(u),0===u.delay&&(d=!0)),(Tc.instantAnimations||Tc.skipAnimations)&&(d=!0,ap(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!o&&void 0!==t.get()){const e=function(e,t,n){let{repeat:r,repeatType:i="loop"}=t;const o=e.filter(Nh),a=r&&"loop"!==i&&r%2===1?0:o.length-1;return a&&void 0!==n?n:o[a]}(u.keyframes,s);if(void 0!==e)return void zc.update(()=>{u.onUpdate(e),u.onComplete()})}return s.isSync?new hh(u):new zh(u)}};function Oh(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function _h(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:o=e.getDefaultTransition(),transitionEnd:a,...s}=t;r&&(o=r);const l=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const u in s){const t=e.getValue(u,e.latestValues[u]??null),r=s[u];if(void 0===r||c&&Oh(c,u))continue;const i={delay:n,...ep(o||{},u)},a=t.get();if(void 0!==a&&!t.isAnimating&&!Array.isArray(r)&&r===a&&!i.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){const t=op(e);if(t){const e=window.MotionHandoffAnimation(t,u,zc);null!==e&&(i.startTime=e,d=!0)}}ip(e,u),t.start(Ih(u,t,r,e.shouldReduceMotion&&ic.has(u)?{type:!1}:i,e,d));const p=t.animation;p&&l.push(p)}return a&&Promise.all(l).then(()=>{zc.update(()=>{a&&function(e,t){const n=Zd(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const a in o)np(e,a,rp(o[a]))}(e,a)})}),l}function Bh(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;const o=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),a=e.size,s=(a-1)*r;return"function"===typeof n?n(o,a):1===i?o*r:s-o*r}function Fh(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=Zd(e,t,"exit"===n.type?e.presenceContext?.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(_h(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:o=0,staggerChildren:a,staggerDirection:s}=i;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,a=arguments.length>6?arguments[6]:void 0;const s=[];for(const l of e.variantChildren)l.notify("AnimationStart",t),s.push(Fh(l,t,{...a,delay:n+("function"===typeof r?0:r)+Bh(e.variantChildren,l,r,i,o)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(s)}(e,t,r,o,a,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[o,a]:[a,o];return e().then(()=>t())}return Promise.all([o(),a(n.delay)])}function Vh(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const Hh=Uu.length;function Uh(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&Uh(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let n=0;n<Hh;n++){const r=Uu[n],i=e.props[r];(Vu(i)||!1===i)&&(t[r]=i)}return t}const Wh=[...Hu].reverse(),Yh=Hu.length;function Kh(e){return t=>Promise.all(t.map(t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map(t=>Fh(e,t,r));n=Promise.all(i)}else if("string"===typeof t)n=Fh(e,t,r);else{const i="function"===typeof t?Zd(e,t,r.custom):t;n=Promise.all(_h(e,i,r))}return n.then(()=>{e.notify("AnimationComplete",t)})}(e,n,r)}))}function Xh(e){let t=Kh(e),n=qh(),r=!0;const i=t=>(n,r)=>{const i=Zd(e,r,"exit"===t?e.presenceContext?.custom:void 0);if(i){const{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(o){const{props:a}=e,s=Uh(e.parent)||{},l=[],c=new Set;let u={},d=1/0;for(let t=0;t<Yh;t++){const p=Wh[t],h=n[p],f=void 0!==a[p]?a[p]:s[p],m=Vu(f),g=p===o?h.isActive:null;!1===g&&(d=t);let v=f===s[p]&&f!==a[p]&&m;if(v&&r&&e.manuallyAnimateOnMount&&(v=!1),h.protectedKeys={...u},!h.isActive&&null===g||!f&&!h.prevProp||Fu(f)||"boolean"===typeof f)continue;const y=Gh(h.prevProp,f);let x=y||p===o&&h.isActive&&!v&&m||t>d&&m,b=!1;const w=Array.isArray(f)?f:[f];let S=w.reduce(i(p),{});!1===g&&(S={});const{prevResolvedValues:k={}}=h,C={...k,...S},E=t=>{x=!0,c.has(t)&&(b=!0,c.delete(t)),h.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in C){const t=S[e],n=k[e];if(u.hasOwnProperty(e))continue;let r=!1;r=tp(t)&&tp(n)?!Vh(t,n):t!==n,r?void 0!==t&&null!==t?E(e):c.add(e):void 0!==t&&c.has(e)?E(e):h.protectedKeys[e]=!0}h.prevProp=f,h.prevResolvedValues=S,h.isActive&&(u={...u,...S}),r&&e.blockInitialAnimation&&(x=!1);const j=v&&y;x&&(!j||b)&&l.push(...w.map(t=>{const n={type:p};if("string"===typeof t&&r&&!j&&e.manuallyAnimateOnMount&&e.parent){const{parent:r}=e,i=Zd(r,t);if(r.enteringChildren&&i){const{delayChildren:t}=i.transition||{};n.delay=Bh(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(c.size){const t={};if("boolean"!==typeof a.initial){const n=Zd(e,Array.isArray(a.initial)?a.initial[0]:a.initial);n&&n.transition&&(t.transition=n.transition)}c.forEach(n=>{const r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=Boolean(l.length);return!r||!1!==a.initial&&a.initial!==a.animate||e.manuallyAnimateOnMount||(p=!1),r=!1,p?t(l):Promise.resolve()}return{animateChanges:o,setActive:function(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;const i=o(t);for(const e in n)n[e].protectedKeys={};return i},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=qh(),r=!0}}}function Gh(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!Vh(t,e)}function Qh(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function qh(){return{animate:Qh(!0),whileInView:Qh(),whileHover:Qh(),whileTap:Qh(),whileDrag:Qh(),whileFocus:Qh(),exit:Qh()}}class Jh{constructor(e){this.isMounted=!1,this.node=e}update(){}}let Zh=0;const ef={animation:{Feature:class extends Jh{constructor(e){super(e),e.animationState||(e.animationState=Xh(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Fu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends Jh{constructor(){super(...arguments),this.id=Zh++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then(()=>{t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}},tf={x:!1,y:!1};function nf(){return tf.x||tf.y}function rf(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const of=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function af(e){return{point:{x:e.pageX,y:e.pageY}}}function sf(e,t,n,r){return rf(e,t,(e=>t=>of(t)&&e(t,af(t)))(n),r)}function lf(e){return e.max-e.min}function cf(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=Vl(t.min,t.max,e.origin),e.scale=lf(n)/lf(t),e.translate=Vl(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function uf(e,t,n,r){cf(e.x,t.x,n.x,r?r.originX:void 0),cf(e.y,t.y,n.y,r?r.originY:void 0)}function df(e,t,n){e.min=n.min+t.min,e.max=e.min+lf(t)}function pf(e,t,n){e.min=t.min-n.min,e.max=e.min+lf(t)}function hf(e,t,n){pf(e.x,t.x,n.x),pf(e.y,t.y,n.y)}function ff(e){return[e("x"),e("y")]}const mf=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},gf=(e,t)=>Math.abs(e-t);class vf{constructor(e,t){let{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:o=3}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=bf(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=gf(e.x,t.x),r=gf(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=Rc;this.history.push({...r,timestamp:i});const{onStart:o,onMove:a}=this.handlers;t||(o&&o(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=yf(t,this.transformPagePoint),zc.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const o=bf("pointercancel"===e.type?this.lastMoveEventInfo:yf(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,o),r&&r(e,o)},!of(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=o,this.contextWindow=r||window;const a=yf(af(e),this.transformPagePoint),{point:s}=a,{timestamp:l}=Rc;this.history=[{...s,timestamp:l}];const{onSessionStart:c}=t;c&&c(e,bf(a,this.history)),this.removeListeners=lp(sf(this.contextWindow,"pointermove",this.handlePointerMove),sf(this.contextWindow,"pointerup",this.handlePointerUp),sf(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Nc(this.updatePoint)}}function yf(e,t){return t?{point:t(e.point)}:e}function xf(e,t){return{x:e.x-t.x,y:e.y-t.y}}function bf(e,t){let{point:n}=e;return{point:n,delta:xf(n,Sf(t)),offset:xf(n,wf(t)),velocity:kf(t,.1)}}function wf(e){return e[0]}function Sf(e){return e[e.length-1]}function kf(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Sf(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>cp(t)));)n--;if(!r)return{x:0,y:0};const o=up(i.timestamp-r.timestamp);if(0===o)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function Cf(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function Ef(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const jf=.35;function Tf(e,t,n){return{min:Pf(e,t),max:Pf(e,n)}}function Pf(e,t){return"number"===typeof e?e:e[t]||0}const $f=new WeakMap;class Mf{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e){let{snapToCursor:t=!1,distanceThreshold:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:r}=this.visualElement;if(r&&!1===r.isPresent)return;const{dragSnapToOrigin:i}=this.getProps();this.panSession=new vf(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(af(e).point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(o=n)||"y"===o?tf[o]?null:(tf[o]=!0,()=>{tf[o]=!1}):tf.x||tf.y?null:(tf.x=tf.y=!0,()=>{tf.x=tf.y=!1}),!this.openDragLock))return;var o;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ff(e=>{let t=this.getAxisMotionValue(e).get()||0;if(dc.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=lf(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t}),i&&zc.postRender(()=>i(e,t)),ip(this.visualElement,"transform");const{animationState:a}=this.visualElement;a&&a.setActive("whileDrag",!0)},onMove:(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:o}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:a}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(a),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,a),this.updateAxis("y",t.point,a),this.visualElement.render(),o&&o(e,t)},onSessionEnd:(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},resumeAnimation:()=>ff(e=>"paused"===this.getAnimationState(e)&&this.getAxisMotionValue(e).animation?.play())},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:i,distanceThreshold:n,contextWindow:mf(this.visualElement)})}stop(e,t){const n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&zc.postRender(()=>a(n,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!zf(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let o=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(o=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?Vl(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?Vl(i,e,n.max):Math.min(e,i)),e}(o,this.constraints[e],this.elastic[e])),i.set(o)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Hd(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!e||!n)&&function(e,t){let{top:n,left:r,bottom:i,right:o}=t;return{x:Cf(e.x,r,o),y:Cf(e.y,n,i)}}(n.layoutBox,e),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jf;return!1===e?e=0:!0===e&&(e=jf),{x:Tf(e,"left","right"),y:Tf(e,"top","bottom")}}(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&ff(e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Hd(e))return!1;const n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=rc(e,n),{scroll:i}=t;return i&&(ec(r.x,i.offset.x),ec(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let o=function(e,t){return{x:Ef(e.x,t.x),y:Ef(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(o));this.hasMutatedConstraints=!!e,e&&(o=Fl(e))}return o}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),s=this.constraints||{},l=ff(a=>{if(!zf(a,t,this.currentDirection))return;let l=s&&s[a]||{};o&&(l={min:0,max:0});const c=r?200:1e6,u=r?40:1e7,d={type:"inertia",velocity:n?e[a]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(a,d)});return Promise.all(l).then(a)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return ip(this.visualElement,e),n.start(Ih(e,n,0,t,this.visualElement,!1))}stopAnimation(){ff(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ff(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){ff(t=>{const{drag:n}=this.getProps();if(!zf(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:o}=r.layout.layoutBox[t];i.set(e[t]-Vl(n,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Hd(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};ff(e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();r[e]=function(e,t){let n=.5;const r=lf(e),i=lf(t);return i>r?n=rh(t.min,t.max-r,e.min):r>i&&(n=rh(e.min,e.max-i,t.min)),oc(0,1,n)}({min:n,max:n},this.constraints[e])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),ff(t=>{if(!zf(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:o}=this.constraints[t];n.set(Vl(i,o,r[t]))})}addListeners(){if(!this.visualElement.current)return;$f.set(this.visualElement,this);const e=sf(this.visualElement.current,"pointerdown",e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)}),t=()=>{const{dragConstraints:e}=this.getProps();Hd(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),zc.read(t);const i=rf(window,"resize",()=>this.scalePositionWithinConstraints()),o=n.addEventListener("didUpdate",e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(ff(e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))}),this.visualElement.render())});return()=>{i(),e(),r(),o&&o()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:o=jf,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:o,dragMomentum:a}}}function zf(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const Nf=e=>(t,n)=>{e&&zc.postRender(()=>e(t,n))};function Rf(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const n=(0,t.useContext)(Ld);if(null===n)return[!0,null];const{isPresent:r,onExitComplete:i,register:o}=n,a=(0,t.useId)();(0,t.useEffect)(()=>{if(e)return o(a)},[e]);const s=(0,t.useCallback)(()=>e&&i&&i(a),[a,i,e]);return!r&&i?[!1,s]:[!0]}const Df={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Lf(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Af={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!pc.test(e))return e;e=parseFloat(e)}return`${Lf(e,t.target.x)}% ${Lf(e,t.target.y)}%`}},If={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,o=lu.parse(e);if(o.length>5)return i;const a=lu.createTransformer(e),s="number"!==typeof o[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;o[0+s]/=l,o[1+s]/=c;const u=Vl(l,c,.5);return"number"===typeof o[2+s]&&(o[2+s]/=u),"number"===typeof o[3+s]&&(o[3+s]/=u),a(o)}};let Of=!1;class _f extends t.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;!function(e){for(const t in e)rd[t]=e[t],Il(t)&&(rd[t].isCSSVariable=!0)}(Ff),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Of&&i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),Df.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:o}=n;return o?(o.isPresent=i,Of=!0,r||e.layoutDependency!==t||void 0===t||e.isPresent!==i?o.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?o.promote():o.relegate()||zc.postRender(()=>{const e=o.getStack();e&&e.members.length||this.safeToRemove()})),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Nu.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Of=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Bf(e){const[n,r]=Rf(),i=(0,t.useContext)(yd);return(0,hr.jsx)(_f,{...e,layoutGroup:i,switchLayoutGroup:(0,t.useContext)(Yd),isPresent:n,safeToRemove:r})}const Ff={borderRadius:{...Af,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Af,borderTopRightRadius:Af,borderBottomLeftRadius:Af,borderBottomRightRadius:Af,boxShadow:If};function Vf(e){return"object"===typeof e&&null!==e}function Hf(e){return Vf(e)&&"ownerSVGElement"in e}const Uf=(e,t)=>e.depth-t.depth;class Wf{constructor(){this.children=[],this.isDirty=!1}add(e){Cu(this.children,e),this.isDirty=!0}remove(e){Eu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Uf),this.isDirty=!1,this.children.forEach(e)}}function Yf(e,t){const n=ku.now(),r=i=>{let{timestamp:o}=i;const a=o-n;a>=t&&(Nc(r),e(a-t))};return zc.setup(r,!0),()=>Nc(r)}const Kf=["TopLeft","TopRight","BottomLeft","BottomRight"],Xf=Kf.length,Gf=e=>"string"===typeof e?parseFloat(e):e,Qf=e=>"number"===typeof e||pc.test(e);function qf(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const Jf=em(0,.5,Jp),Zf=em(.5,.95,jc);function em(e,t,n){return r=>r<e?0:r>t?1:n(rh(e,t,r))}function tm(e,t){e.min=t.min,e.max=t.max}function nm(e,t){tm(e.x,t.x),tm(e.y,t.y)}function rm(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function im(e,t,n,r,i){return e=Xl(e-=t,1/n,r),void 0!==i&&(e=Xl(e,1/i,r)),e}function om(e,t,n,r,i){let[o,a,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;dc.test(t)&&(t=parseFloat(t),t=Vl(a.min,a.max,t/100)-a.min);if("number"!==typeof t)return;let s=Vl(o.min,o.max,r);e===o&&(s-=t),e.min=im(e.min,t,n,s,i),e.max=im(e.max,t,n,s,i)}(e,t[o],t[a],t[s],t.scale,r,i)}const am=["x","scaleX","originX"],sm=["y","scaleY","originY"];function lm(e,t,n,r){om(e.x,t,am,n?n.x:void 0,r?r.x:void 0),om(e.y,t,sm,n?n.y:void 0,r?r.y:void 0)}function cm(e){return 0===e.translate&&1===e.scale}function um(e){return cm(e.x)&&cm(e.y)}function dm(e,t){return e.min===t.min&&e.max===t.max}function pm(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function hm(e,t){return pm(e.x,t.x)&&pm(e.y,t.y)}function fm(e){return lf(e.x)/lf(e.y)}function mm(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class gm{constructor(){this.members=[]}add(e){Cu(this.members,e),e.scheduleRender()}remove(e){if(Eu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex(t=>e===t);if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const vm={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},ym=["","X","Y","Z"];let xm=0;function bm(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function wm(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=op(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",zc,!(t||r))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&wm(r)}function Sm(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:o}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n?.();this.id=xm++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,$c.value&&(vm.nodes=vm.calculatedTargetDeltas=vm.calculatedProjections=0),this.nodes.forEach(Em),this.nodes.forEach(Nm),this.nodes.forEach(Rm),this.nodes.forEach(jm),$c.addProjectionMetrics&&$c.addProjectionMetrics(vm)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new Wf)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new ju),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){if(this.instance)return;var n;this.isSVG=Hf(e)&&!(Hf(n=e)&&"svg"===n.tagName),this.instance=e;const{layoutId:r,layout:i,visualElement:o}=this.options;if(o&&!o.current&&o.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(i||r)&&(this.isLayoutDirty=!0),t){let n,r=0;const i=()=>this.root.updateBlockedByResize=!1;zc.read(()=>{r=window.innerWidth}),t(e,()=>{const e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Yf(i,250),Df.hasAnimatedSinceResize&&(Df.hasAnimatedSinceResize=!1,this.nodes.forEach(zm)))})}r&&this.root.registerSharedNode(r,this),!1!==this.options.animate&&o&&(r||i)&&this.addEventListener("didUpdate",e=>{let{delta:t,hasLayoutChanged:n,hasRelativeLayoutChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const a=this.options.transition||o.getDefaultTransition()||_m,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=o.getProps(),c=!this.targetLayout||!hm(this.targetLayout,i),u=!n&&r;if(this.options.layoutRoot||this.resumeFrom||u||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const e={...ep(a,"layout"),onPlay:s,onComplete:l};(o.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e),this.setAnimationOrigin(t,u)}else n||zm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Nc(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Dm),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&wm(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(Pm);if(this.animationId<=this.animationCommitId)return void this.nodes.forEach($m);this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Mm),this.nodes.forEach(km),this.nodes.forEach(Cm)):this.nodes.forEach($m),this.clearAllSnapshots();const e=ku.now();Rc.delta=oc(0,1e3/60,e-Rc.timestamp),Rc.timestamp=e,Rc.isProcessing=!0,Dc.update.process(Rc),Dc.preRender.process(Rc),Dc.render.process(Rc),Rc.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Nu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Tm),this.sharedNodes.forEach(Lm)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,zc.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){zc.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||lf(this.snapshot.measuredBox.x)||lf(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){const t=i(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!o)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!um(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Wl(this.latestValues)||i)&&(o(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),Vm((r=n).x),Vm(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Um))){const{scroll:e}=this.root;e&&(ec(t.x,e.offset.x),ec(t.y,e.offset.y))}return t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};if(nm(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:i,options:o}=r;r!==this.root&&i&&o.layoutScroll&&(i.wasRoot&&nm(t,e),ec(t.x,i.offset.x),ec(t.y,i.offset.y))}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};nm(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&nc(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),Wl(e.latestValues)&&nc(n,e.latestValues)}return Wl(this.latestValues)&&nc(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};nm(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!Wl(e.latestValues))continue;Ul(e.latestValues)&&e.updateSnapshot();const r=Au();nm(r,e.measurePageBox()),lm(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return Wl(this.latestValues)&&lm(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Rc.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:r,layoutId:i}=this.options;if(this.layout&&(r||i)){if(this.resolvedRelativeTargetAt=Rc.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},hf(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),nm(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var o,a,s;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),o=this.target,a=this.relativeTarget,s=this.relativeParent.target,df(o.x,a.x,s.x),df(o.y,a.y,s.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):nm(this.target,this.layout.layoutBox),ql(this.target,this.targetDelta)):nm(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},hf(this.relativeTargetOrigin,this.target,e.target),nm(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}$c.value&&vm.calculatedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Ul(this.parent.latestValues)&&!Yl(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const e=this.getLead(),t=Boolean(this.resumingFrom)||this!==e;let n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Rc.timestamp&&(n=!1),n)return;const{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!r&&!i)return;nm(this.layoutCorrected,this.layout.layoutBox);const o=this.treeScale.x,a=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let o,a;t.x=t.y=1;for(let s=0;s<i;s++){o=n[s],a=o.projectionDelta;const{visualElement:i}=o.options;i&&i.props.style&&"contents"===i.props.style.display||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&nc(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,ql(e,a)),r&&Wl(o.latestValues)&&nc(e,o.latestValues))}t.x<Zl&&t.x>Jl&&(t.x=1),t.y<Zl&&t.y>Jl&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,t),!e.layout||e.target||1===this.treeScale.x&&1===this.treeScale.y||(e.target=e.layout.layoutBox,e.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:s}=e;s?(this.projectionDelta&&this.prevProjectionDelta?(rm(this.prevProjectionDelta.x,this.projectionDelta.x),rm(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),uf(this.projectionDelta,this.layoutCorrected,s,this.latestValues),this.treeScale.x===o&&this.treeScale.y===a&&mm(this.projectionDelta.x,this.prevProjectionDelta.x)&&mm(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",s)),$c.value&&vm.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.visualElement?.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const a={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(Om));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;Am(o.x,e.x,n),Am(o.y,e.y,n),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(hf(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){Im(e.x,t.x,n.x,r),Im(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,a,n),d&&function(e,t){return dm(e.x,t.x)&&dm(e.y,t.y)}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),nm(d,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,o){i?(e.opacity=Vl(0,n.opacity??1,Jf(r)),e.opacityExit=Vl(t.opacity??1,0,Zf(r))):o&&(e.opacity=Vl(t.opacity??1,n.opacity??1,r));for(let a=0;a<Xf;a++){const i=`border${Kf[a]}Radius`;let o=qf(t,i),s=qf(n,i);void 0===o&&void 0===s||(o||(o=0),s||(s=0),0===o||0===s||Qf(o)===Qf(s)?(e[i]=Math.max(Vl(Gf(o),Gf(s),r),0),(dc.test(s)||dc.test(o))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=Vl(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Nc(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=zc.update(()=>{Df.hasAnimatedSinceResize=!0,dp.layout++,this.motionValue||(this.motionValue=Mu(0)),this.currentAnimation=function(e,t,n){const r=bu(e)?e:Mu(e);return r.start(Ih("",r,t,n)),r.animation}(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{dp.layout--},onComplete:()=>{dp.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&Hm(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=lf(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=lf(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}nm(t,n),nc(t,i),uf(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new gm);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){const{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const r={};n.z&&bm("z",e,r,this.animationValues);for(let i=0;i<ym.length;i++)bm(`rotate${ym[i]}`,e,r,this.animationValues),bm(`skew${ym[i]}`,e,r,this.animationValues);e.render();for(const i in r)e.setStaticValue(i,r[i]),this.animationValues&&(this.animationValues[i]=r[i]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible)return void(e.visibility="hidden");const n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,e.visibility="",e.opacity="",e.pointerEvents=Id(t?.pointerEvents)||"",void(e.transform=n?n(this.latestValues,""):"none");const r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target)return this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=Id(t?.pointerEvents)||""),void(this.hasProjected&&!Wl(this.latestValues)&&(e.transform=n?n({},""):"none",this.hasProjected=!1));e.visibility="";const i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let o=function(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,a=n?.z||0;if((i||o||a)&&(r=`translate3d(${i}px, ${o}px, ${a}px) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:i,rotateY:o,skewX:a,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),o&&(r+=`rotateY(${o}deg) `),a&&(r+=`skewX(${a}deg) `),s&&(r+=`skewY(${s}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return 1===s&&1===l||(r+=`scale(${s}, ${l})`),r||"none"}(this.projectionDeltaWithTransform,this.treeScale,i);n&&(o=n(i,o)),e.transform=o;const{x:a,y:s}=this.projectionDelta;e.transformOrigin=`${100*a.origin}% ${100*s.origin}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?void 0!==i.opacity?i.opacity:"":void 0!==i.opacityExit?i.opacityExit:0;for(const l in rd){if(void 0===i[l])continue;const{correct:t,applyTo:n,isCSSVariable:a}=rd[l],s="none"===o?i[l]:t(i[l],r);if(n){const t=n.length;for(let r=0;r<t;r++)e[n[r]]=s}else a?this.options.visualElement.renderState.vars[l]=s:e[l]=s}this.options.layoutId&&(e.pointerEvents=r===this?Id(t?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Pm),this.root.sharedNodes.clear()}}}function km(e){e.updateLayout()}function Cm(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,o=t.source!==e.layout.source;"size"===i?ff(e=>{const r=o?t.measuredBox[e]:t.layoutBox[e],i=lf(r);r.min=n[e].min,r.max=r.min+i}):Hm(i,t.layoutBox,n)&&ff(r=>{const i=o?t.measuredBox[r]:t.layoutBox[r],a=lf(n[r]);i.max=i.min+a,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+a)});const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};uf(a,n,t.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};o?uf(s,e.applyTransform(r,!0),t.measuredBox):uf(s,n,t.layoutBox);const l=!um(a);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:o}=r;if(i&&o){const a={x:{min:0,max:0},y:{min:0,max:0}};hf(a,t.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};hf(s,n,o.layoutBox),hm(a,s)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=a,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Em(e){$c.value&&vm.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function jm(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Tm(e){e.clearSnapshot()}function Pm(e){e.clearMeasurements()}function $m(e){e.isLayoutDirty=!1}function Mm(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function zm(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Nm(e){e.resolveTargetDelta()}function Rm(e){e.calcProjection()}function Dm(e){e.resetSkewAndRotation()}function Lm(e){e.removeLeadSnapshot()}function Am(e,t,n){e.translate=Vl(t.translate,0,n),e.scale=Vl(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Im(e,t,n,r){e.min=Vl(t.min,n.min,r),e.max=Vl(t.max,n.max,r)}function Om(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const _m={duration:.45,ease:[.4,0,.1,1]},Bm=e=>"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Fm=Bm("applewebkit/")&&!Bm("chrome/")?Math.round:jc;function Vm(e){e.min=Fm(e.min),e.max=Fm(e.max)}function Hm(e,t,n){return"position"===e||"preserve-aspect"===e&&(r=fm(t),i=fm(n),o=.2,!(Math.abs(r-i)<=o));var r,i,o}function Um(e){return e!==e.root&&e.scroll?.wasRoot}const Wm=Sm({attachResizeListener:(e,t)=>rf(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ym={current:void 0},Km=Sm({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ym.current){const e=new Wm({});e.mount(window),e.setOptions({layoutScroll:!0}),Ym.current=e}return Ym.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Xm={pan:{Feature:class extends Jh{constructor(){super(...arguments),this.removePointerDownListener=jc}onPointerDown(e){this.session=new vf(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:mf(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Nf(e),onStart:Nf(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&zc.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=sf(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Jh{constructor(e){super(e),this.removeGroupControls=jc,this.removeListeners=jc,this.controls=new Mf(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||jc}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Km,MeasureLayout:Bf}};function Gm(e,t){const n=function(e,t,n){if(e instanceof EventTarget)return[e];if("string"===typeof e){let r=document;t&&(r=t.current);const i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Qm(e){return!("touch"===e.pointerType||nf())}function qm(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover","Start"===n);const i=r["onHover"+n];i&&zc.postRender(()=>i(t,af(t)))}function Jm(e){return Vf(e)&&"offsetHeight"in e}const Zm=(e,t)=>!!t&&(e===t||Zm(e,t.parentElement)),eg=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const tg=new WeakSet;function ng(e){return t=>{"Enter"===t.key&&e(t)}}function rg(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function ig(e){return of(e)&&!nf()}function og(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,o]=Gm(e,n),a=e=>{const r=e.currentTarget;if(!ig(e))return;tg.add(r);const o=t(r,e),a=(e,t)=>{window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",l),tg.has(r)&&tg.delete(r),ig(e)&&"function"===typeof o&&o(e,{success:t})},s=e=>{a(e,r===window||r===document||n.useGlobalTarget||Zm(r,e.target))},l=e=>{a(e,!1)};window.addEventListener("pointerup",s,i),window.addEventListener("pointercancel",l,i)};return r.forEach(e=>{var t;(n.useGlobalTarget?window:e).addEventListener("pointerdown",a,i),Jm(e)&&(e.addEventListener("focus",e=>((e,t)=>{const n=e.currentTarget;if(!n)return;const r=ng(()=>{if(tg.has(n))return;rg(n,"down");const e=ng(()=>{rg(n,"up")});n.addEventListener("keyup",e,t),n.addEventListener("blur",()=>rg(n,"cancel"),t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)})(e,i)),t=e,eg.has(t.tagName)||-1!==t.tabIndex||e.hasAttribute("tabindex")||(e.tabIndex=0))}),o}function ag(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap","Start"===n);const i=r["onTap"+("End"===n?"":n)];i&&zc.postRender(()=>i(t,af(t)))}const sg=new WeakMap,lg=new WeakMap,cg=e=>{const t=sg.get(e.target);t&&t(e)},ug=e=>{e.forEach(cg)};function dg(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;lg.has(r)||lg.set(r,{});const i=lg.get(r),o=JSON.stringify(n);return i[o]||(i[o]=new IntersectionObserver(ug,{root:t,...n})),i[o]}(t);return sg.set(e,n),r.observe(e),()=>{sg.delete(e),r.unobserve(e)}}const pg={some:0,all:1};const hg={inView:{Feature:class extends Jh{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,o={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:pg[r]};return dg(this.node.current,o,e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),o=t?n:r;o&&o(e)})}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends Jh{mount(){const{current:e}=this.node;e&&(this.unmount=og(e,(e,t)=>(ag(this.node,t,"Start"),(e,t)=>{let{success:n}=t;return ag(this.node,e,n?"End":"Cancel")}),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends Jh{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(Ov){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=lp(rf(this.node.current,"focus",()=>this.onFocus()),rf(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends Jh{mount(){const{current:e}=this.node;e&&(this.unmount=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,o]=Gm(e,n),a=e=>{if(!Qm(e))return;const{target:n}=e,r=t(n,e);if("function"!==typeof r||!n)return;const o=e=>{Qm(e)&&(r(e),n.removeEventListener("pointerleave",o))};n.addEventListener("pointerleave",o,i)};return r.forEach(e=>{e.addEventListener("pointerenter",a,i)}),o}(e,(e,t)=>(qm(this.node,t,"Start"),e=>qm(this.node,e,"End"))))}unmount(){}}}},fg=Jd({...ef,...hg,...Xm,...{layout:{ProjectionNode:Km,MeasureLayout:Bf}}},vd),mg=xn.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;function gg(e){let{gameMode:n}=e;const r=(0,t.useRef)(null),i=(0,t.useRef)(),o=(0,t.useRef)([]),a=(0,t.useRef)({x:0,y:0});return(0,t.useEffect)(()=>{if(!n)return;const e=r.current,t=e.getContext("2d"),s=()=>{e.width=window.innerWidth,e.height=window.innerHeight};s(),window.addEventListener("resize",s);class l{constructor(){this.x=Math.random()*e.width,this.y=Math.random()*e.height,this.vx=1*(Math.random()-.5),this.vy=1*(Math.random()-.5),this.radius=3*Math.random()+1,this.color=`hsl(${200+60*Math.random()}, 70%, 60%)`,this.opacity=.5*Math.random()+.2,this.pulseSpeed=.02*Math.random()+.01,this.pulsePhase=Math.random()*Math.PI*2}update(){this.x+=this.vx,this.y+=this.vy,this.x<=this.radius&&(this.x=this.radius,this.vx=.85*-this.vx),this.x>=e.width-this.radius&&(this.x=e.width-this.radius,this.vx=.85*-this.vx),this.y<=this.radius&&(this.y=this.radius,this.vy=.85*-this.vy),this.y>=e.height-this.radius&&(this.y=e.height-this.radius,this.vy=.85*-this.vy);const t=a.current.x-this.x,n=a.current.y-this.y,r=Math.sqrt(t*t+n*n);if(r<100){const e=(100-r)/100,i=.15;this.vx+=t/r*e*i,this.vy+=n/r*e*i}this.vx*=.99,this.vy*=.99,this.pulsePhase+=this.pulseSpeed,this.radius=1*Math.sin(this.pulsePhase)+2.5}draw(e){e.save(),e.globalAlpha=this.opacity,e.beginPath(),e.arc(this.x,this.y,this.radius,0,2*Math.PI),e.fillStyle=this.color,e.fill(),e.globalAlpha=.3*this.opacity,e.beginPath(),e.arc(this.x,this.y,2*this.radius,0,2*Math.PI),e.fill(),e.restore()}}o.current=Array.from({length:50},()=>new l);const c=e=>{a.current.x=e.clientX,a.current.y=e.clientY};window.addEventListener("mousemove",c);const u=()=>{t.clearRect(0,0,e.width,e.height),o.current.forEach(e=>{e.update(),e.draw(t)}),o.current.forEach((e,n)=>{o.current.slice(n+1).forEach(n=>{const r=e.x-n.x,i=e.y-n.y,o=Math.sqrt(r*r+i*i);o<120&&(t.save(),t.globalAlpha=(120-o)/120*.3,t.strokeStyle="#4facfe",t.lineWidth=1,t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(n.x,n.y),t.stroke(),t.restore())})}),i.current=requestAnimationFrame(u)};return u(),()=>{window.removeEventListener("resize",s),window.removeEventListener("mousemove",c),i.current&&cancelAnimationFrame(i.current)}},[n]),n?(0,hr.jsx)(mg,{ref:r}):null}class vg extends t.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=t.offsetParent,n=Jm(e)&&e.offsetWidth||0,r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=n-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function yg(e){let{children:n,isPresent:r,anchorX:i,root:o}=e;const a=(0,t.useId)(),s=(0,t.useRef)(null),l=(0,t.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:c}=(0,t.useContext)(bd);return(0,t.useInsertionEffect)(()=>{const{width:e,height:t,top:n,left:u,right:d}=l.current;if(r||!s.current||!e||!t)return;const p="left"===i?`left: ${u}`:`right: ${d}`;s.current.dataset.motionPopId=a;const h=document.createElement("style");c&&(h.nonce=c);const f=o??document.head;return f.appendChild(h),h.sheet&&h.sheet.insertRule(`\n          [data-motion-pop-id="${a}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            ${p}px !important;\n            top: ${n}px !important;\n          }\n        `),()=>{f.contains(h)&&f.removeChild(h)}},[r]),(0,hr.jsx)(vg,{isPresent:r,childRef:s,sizeRef:l,children:t.cloneElement(n,{ref:s})})}const xg=e=>{let{children:n,initial:r,isPresent:i,onExitComplete:o,custom:a,presenceAffectsLayout:s,mode:l,anchorX:c,root:u}=e;const d=Ad(bg),p=(0,t.useId)();let h=!0,f=(0,t.useMemo)(()=>(h=!1,{id:p,initial:r,isPresent:i,custom:a,onExitComplete:e=>{d.set(e,!0);for(const t of d.values())if(!t)return;o&&o()},register:e=>(d.set(e,!1),()=>d.delete(e))}),[i,d,o]);return s&&h&&(f={...f}),(0,t.useMemo)(()=>{d.forEach((e,t)=>d.set(t,!1))},[i]),t.useEffect(()=>{!i&&!d.size&&o&&o()},[i]),"popLayout"===l&&(n=(0,hr.jsx)(yg,{isPresent:i,anchorX:c,root:u,children:n})),(0,hr.jsx)(Ld.Provider,{value:f,children:n})};function bg(){return new Map}const wg=e=>e.key||"";function Sg(e){const n=[];return t.Children.forEach(e,e=>{(0,t.isValidElement)(e)&&n.push(e)}),n}const kg=e=>{let{children:n,custom:r,initial:i=!0,onExitComplete:o,presenceAffectsLayout:a=!0,mode:s="sync",propagate:l=!1,anchorX:c="left",root:u}=e;const[d,p]=Rf(l),h=(0,t.useMemo)(()=>Sg(n),[n]),f=l&&!d?[]:h.map(wg),m=(0,t.useRef)(!0),g=(0,t.useRef)(h),v=Ad(()=>new Map),[y,x]=(0,t.useState)(h),[b,w]=(0,t.useState)(h);Kd(()=>{m.current=!1,g.current=h;for(let e=0;e<b.length;e++){const t=wg(b[e]);f.includes(t)?v.delete(t):!0!==v.get(t)&&v.set(t,!1)}},[b,f.length,f.join("-")]);const S=[];if(h!==y){let e=[...h];for(let t=0;t<b.length;t++){const n=b[t],r=wg(n);f.includes(r)||(e.splice(t,0,n),S.push(n))}return"wait"===s&&S.length&&(e=S),w(Sg(e)),x(h),null}const{forceRender:k}=(0,t.useContext)(yd);return(0,hr.jsx)(hr.Fragment,{children:b.map(e=>{const t=wg(e),n=!(l&&!d)&&(h===b||f.includes(t));return(0,hr.jsx)(xg,{isPresent:n,initial:!(m.current&&!i)&&void 0,custom:r,presenceAffectsLayout:a,mode:s,root:u,onExitComplete:n?void 0:()=>{if(!v.has(t))return;v.set(t,!0);let e=!0;v.forEach(t=>{t||(e=!1)}),e&&(k?.(),w(g.current),l&&p?.(),o&&o())},anchorX:c,children:e},t)})})},Cg=wn`
  0% { transform: scale(1) rotate(0deg); opacity: 1; }
  100% { transform: scale(0) rotate(180deg); opacity: 0; }
`,Eg=xn(fg.div)`
  position: fixed;
  width: 8px;
  height: 8px;
  background: ${e=>e.color||"#4facfe"};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  animation: ${Cg} 0.6s ease-out forwards;
  box-shadow: 0 0 10px ${e=>e.color||"#4facfe"};
`,jg=xn(fg.div)`
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
`,Tg=xn(fg.div)`
  position: fixed;
  width: 20px;
  height: 20px;
  border: 2px solid #4facfe;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9997;
`;function Pg(e){let{gameMode:n}=e;const[r,i]=(0,t.useState)({x:0,y:0}),[o,a]=(0,t.useState)([]),[s,l]=(0,t.useState)([]),[c,u]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{if(!n)return;const e=e=>{i({x:e.clientX,y:e.clientY});const t={id:Date.now()+Math.random(),x:e.clientX,y:e.clientY,color:`hsl(${200+60*Math.random()}, 70%, 60%)`};a(e=>[...e.slice(-10),t]),setTimeout(()=>{a(e=>e.filter(e=>e.id!==t.id))},600)},t=e=>{window.playSoundEffect&&window.playSoundEffect.click();const t={id:Date.now(),x:e.clientX,y:e.clientY};l(e=>[...e,t]),setTimeout(()=>{l(e=>e.filter(e=>e.id!==t.id))},1e3)},r=e=>{("BUTTON"===e.target.tagName||"A"===e.target.tagName||e.target.onclick)&&(u(!0),window.playSoundEffect&&window.playSoundEffect.hover())},o=()=>{u(!1)};return document.addEventListener("mousemove",e),document.addEventListener("click",t),document.addEventListener("mouseover",r),document.addEventListener("mouseout",o),document.body.style.cursor="none",()=>{document.removeEventListener("mousemove",e),document.removeEventListener("click",t),document.removeEventListener("mouseover",r),document.removeEventListener("mouseout",o),document.body.style.cursor="auto"}},[n]),n?(0,hr.jsxs)(hr.Fragment,{children:[(0,hr.jsx)(jg,{animate:{x:r.x-10,y:r.y-10,scale:c?1.5:1},transition:{type:"spring",stiffness:500,damping:28}}),(0,hr.jsx)(kg,{children:o.map(e=>(0,hr.jsx)(Eg,{style:{left:e.x-4,top:e.y-4},color:e.color,initial:{opacity:1,scale:1},exit:{opacity:0,scale:0}},e.id))}),(0,hr.jsx)(kg,{children:s.map(e=>(0,hr.jsx)(Tg,{style:{left:e.x-10,top:e.y-10},initial:{scale:0,opacity:1},animate:{scale:3,opacity:0},exit:{opacity:0},transition:{duration:1,ease:"easeOut"}},e.id))})]}):null}const $g=function(e,n){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:150,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.8*window.innerWidth,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.8*window.innerHeight;const[s,l]=(0,t.useState)({width:e,height:n}),[c,u]=(0,t.useState)(!1),d=(0,t.useRef)(null),p=(0,t.useCallback)((e,t)=>{e.preventDefault(),e.stopPropagation(),u(!0);const n=e.clientX,c=e.clientY,d=s.width,p=s.height,f=e=>{let s=d,u=p;switch(t){case"se":s=d+(e.clientX-n),u=p+(e.clientY-c);break;case"sw":s=d-(e.clientX-n),u=p+(e.clientY-c);break;case"ne":s=d+(e.clientX-n),u=p-(e.clientY-c);break;case"nw":s=d-(e.clientX-n),u=p-(e.clientY-c);break;case"e":s=d+(e.clientX-n);break;case"w":s=d-(e.clientX-n);break;case"s":u=p+(e.clientY-c);break;case"n":u=p-(e.clientY-c)}s=Math.max(r,Math.min(o,s)),u=Math.max(i,Math.min(a,u)),l({width:s,height:u})},m=()=>{u(!1),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",m),document.body.style.cursor="",document.body.style.userSelect=""};document.addEventListener("mousemove",f),document.addEventListener("mouseup",m),document.body.style.cursor=h(t),document.body.style.userSelect="none"},[s,r,i,o,a]),h=e=>{switch(e){case"se":return"se-resize";case"sw":return"sw-resize";case"ne":return"ne-resize";case"nw":return"nw-resize";case"e":return"e-resize";case"w":return"w-resize";case"s":return"s-resize";case"n":return"n-resize";default:return"default"}};return{size:s,isResizing:c,startResize:p,resizeRef:d}},Mg=xn.div`
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
`,zg=xn.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 10;

  ${Mg} {
    pointer-events: auto;
  }

  &:hover ${Mg} {
    opacity: 0.8;
  }
`,Ng=e=>{let{direction:t,onMouseDown:n}=e;return(0,hr.jsx)(Mg,{direction:t,onMouseDown:n})},Rg=e=>{let{handles:t=["se"],onResize:n}=e;return(0,hr.jsx)(zg,{children:t.map(e=>(0,hr.jsx)(Ng,{direction:e,onMouseDown:t=>n(t,e)},e))})},Dg=wn`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`,Lg=xn(fg.div)`
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
`,Ag=xn.div`
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
`,Ig=xn.div`
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
`,Og=xn(fg.div)`
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
`,_g=xn.div`
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
    animation: ${Dg} 1s infinite;
  }
`,Bg=(0,t.forwardRef)((e,n)=>{let{gameMode:r,onActivityClick:i,onCpuClick:o,onNotepadClick:a}=e;const[s,l]=(0,t.useState)(!1),[c,u]=(0,t.useState)([]),[d,p]=(0,t.useState)(""),[h,f]=(0,t.useState)(!1),[m,g]=(0,t.useState)(!1),[v,y]=(0,t.useState)({top:window.innerHeight-320,left:window.innerWidth-920}),x=(0,t.useRef)(null),b=(0,t.useRef)(null),{size:w,isResizing:S,startResize:k}=$g(500,300,300,200,.9*window.innerWidth,.9*window.innerHeight),C={help:()=>["Available commands:","  help - Show this help","  about - About this portfolio","  skills - List technical skills","  projects - Show projects","  experience - Work experience","  contact - Contact information","  resume - Download resume PDF","  matrix - Toggle Matrix mode","  easter-egg - Find hidden features","  hack - Try to hack the system","  whoami - Identity information","  pwd - Current directory","  ls - List contents","  cat - Display file contents","  clear - Clear terminal","","Dock Applications:","  activity - Open activity monitor","  cpu - Open CPU stats monitor","  notepad - Open hacker notepad"],about:()=>["Dibyajyoti Pradhan - Senior Software Engineer","Location: London, UK","Current: HubSpot","Experience: 5+ years in tech","Specialization: Full-stack development, System architecture"],skills:()=>["Programming Languages: C++, Python, Java, JavaScript, TypeScript","Frameworks: React, React Native, Spring MVC, Google Guice","Web Technologies: HTML, CSS, GraphQL","Tools: Git, Docker, Kubernetes, Kafka, AWS","Databases: MySQL, MongoDB, DynamoDB, Vitess DB"],projects:()=>["Cloud Storage System - Java-based file management","Concurrent Web Crawler - Multi-threaded crawler in Java","Cron Parser - CLI application for cron expressions","Cookie Log Parser - CSV log analysis tool","Pokemon CSS Project - Advanced CSS showcase","Netflix Clone - React & Firebase app"],experience:()=>["Senior Software Engineer @ HubSpot (07/2024 - Present)","Software Engineer II @ Meta (04/2022 - 05/2024)","Software Development Engineer II @ Amazon (10/2021 - 02/2022)","Software Development Engineer I @ Amazon (07/2019 - 09/2021)","SDE Intern @ Amazon (05/2018 - 07/2018)"],contact:()=>["Email: dibyojyotipradhan@gmail.com","LinkedIn: dibyajyoti-pradhan-83a649146","GitHub: Dibyajyoti-Pradhan","Location: London, UK"],resume:()=>{const e=document.createElement("a");return e.href="/my-portfolio/resume.pdf",e.download="Dibyajyoti_Pradhan_Resume.pdf",e.target="_blank",document.body.appendChild(e),e.click(),document.body.removeChild(e),["Downloading resume...","[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 100%","\u2705 Resume downloaded successfully!","\ud83d\udcc4 File: Dibyajyoti_Pradhan_Resume.pdf"]},matrix:()=>(document.body.style.filter=document.body.style.filter?"":"hue-rotate(120deg) contrast(1.2)",["Matrix mode toggled! The world looks different now..."]),"easter-egg":()=>["\ud83e\udd5a You found an easter egg!","Fun fact: This portfolio has over 50 interactive elements!",'Try typing "konami" for a special surprise...'],konami:()=>(document.body.style.animation="spin 2s ease-in-out",setTimeout(()=>{document.body.style.animation=""},2e3),["\ud83c\udfae KONAMI CODE ACTIVATED! \ud83c\udfae","You are now a certified geek!"]),hack:()=>["Attempting to hack the system...","[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 100%","ERROR: Nice try! This portfolio is hack-proof \ud83d\ude0e","But you get points for trying!"],whoami:()=>["portfolio-visitor"],pwd:()=>["/Users/visitor/portfolio-quest"],ls:()=>["about.txt","skills.md","projects/","experience.log","contact.vcf","resume.pdf","achievements.json"],cat:e=>{const t=e[0];return"about.txt"===t?["This is an interactive portfolio by Dibyajyoti Pradhan"]:"skills.md"===t?["# Skills","JavaScript, React, Python, Java..."]:"resume.pdf"===t?["\ud83d\udcc4 PDF file detected!",'Use "resume" command to download the file instead.']:[`cat: ${t||"filename"}: No such file or directory`]},clear:()=>(u([]),[]),activity:()=>i?(i(),["Opening Activity Monitor...","[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 100%","\u2705 Activity Monitor launched successfully!","\ud83d\udcca Monitoring system performance..."]):["\u274c Activity Monitor not available"],cpu:()=>o?(o(),["Launching CPU Stats Monitor...","[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 100%","\u2705 CPU Monitor activated!","\ud83d\udc80 Displaying system vitals..."]):["\u274c CPU Monitor not available"],notepad:()=>a?(a(),["Initializing Hacker Notepad...","Loading encryption protocols...","[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 100%","\u2705 notepad.exe launched!","\ud83d\udcdd Secure text editor ready for use"]):["\u274c Notepad not available"]};(0,t.useImperativeHandle)(n,()=>({maximize:()=>g(!0),minimize:()=>f(!0),close:()=>l(!1)})),(0,t.useEffect)(()=>{if(r){l(!0);const e=[{type:"output",content:"Welcome to Portfolio Terminal v2.0"},{type:"output",content:'Type "help" for available commands'},{type:"output",content:"\u2501".repeat(50)}];u(e)}else l(!1)},[r]),(0,t.useEffect)(()=>{b.current&&(b.current.scrollTop=b.current.scrollHeight)},[c]);return r&&s?(0,hr.jsx)(kg,{children:(0,hr.jsxs)(Lg,{isMaximized:m,width:w.width,height:h?40:w.height,top:v.top,left:v.left,initial:{opacity:0,y:100,scale:.8},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:100,scale:.8},transition:{duration:.5},drag:!m&&!S,dragMomentum:!1,dragElastic:.1,whileDrag:{scale:1.05,zIndex:1100},onClick:()=>{x.current&&x.current.focus()},onDrag:(e,t)=>{m||S||y(e=>({top:e.top+t.delta.y,left:e.left+t.delta.x}))},children:[!m&&(0,hr.jsx)(Rg,{handles:["se","sw","ne","nw","e","w","s","n"],onResize:(e,t)=>{const n={...v},r={...w};if(k(e,t),"n"===t||"ne"===t||"nw"===t){const t=e.clientY,i=e=>{const i=e.clientY-t,o=Math.max(200,r.height-i),a=r.height-o;y(e=>({...e,top:n.top+a}))},o=()=>{document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",i),document.addEventListener("mouseup",o)}}}),(0,hr.jsxs)(Ag,{children:[(0,hr.jsx)("div",{className:"title",children:"\ud83d\udcbb Terminal"}),(0,hr.jsxs)("div",{className:"controls",children:[(0,hr.jsx)("div",{className:"control minimize",onClick:()=>{f(!h),h||g(!1)}}),(0,hr.jsx)("div",{className:"control maximize",onClick:()=>{h||g(!m)}}),(0,hr.jsx)("div",{className:"control close",onClick:()=>l(!1)})]})]}),!h&&(0,hr.jsxs)(Ig,{ref:b,children:[c.map((e,t)=>(0,hr.jsxs)(Og,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.05*t},children:["input"===e.type&&(0,hr.jsx)("div",{className:"command",children:e.content}),"output"===e.type&&(0,hr.jsx)("div",{className:"output",children:e.content}),"error"===e.type&&(0,hr.jsx)("div",{className:"error",children:e.content})]},t)),(0,hr.jsxs)(_g,{onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:[(0,hr.jsx)("span",{className:"prompt",children:"$"}),(0,hr.jsx)("input",{ref:x,value:d,onChange:e=>p(e.target.value),onKeyPress:e=>{"Enter"===e.key&&(e=>{const[t,...n]=e.trim().toLowerCase().split(" "),r={type:"input",content:`$ ${e}`};let i=[];if(C[t]){const e=C[t](n);i=e.map(e=>({type:"output",content:e}))}else e.trim()&&(i=[{type:"error",content:`Command not found: ${t}. Type "help" for available commands.`}]);u(e=>[...e,r,...i]),p(""),setTimeout(()=>{b.current&&(b.current.scrollTop=b.current.scrollHeight)},50),window.playSoundEffect&&window.playSoundEffect.click()})(d)},placeholder:"Type a command...",autoFocus:!0}),(0,hr.jsx)("div",{className:"cursor"})]})]})]})}):null}),Fg=Bg,Vg=(0,t.forwardRef)((e,n)=>{let{gameMode:r,onActivityClick:i,onCpuClick:o,onNotepadClick:a}=e;const[s,l]=(0,t.useState)(!1);(0,t.useImperativeHandle)(n,()=>({show:()=>l(!0),hide:()=>l(!1),toggle:()=>l(e=>!e),isVisible:()=>s,maximize:()=>{l(!0),c.current&&c.current.maximize&&c.current.maximize()}}));const c=t.useRef();return(0,hr.jsx)(Fg,{ref:c,gameMode:r&&s,onActivityClick:i,onCpuClick:o,onNotepadClick:a})}),Hg=Vg,Ug=wn`
  0%, 100% { box-shadow: 0 0 20px #00ff41; }
  50% { box-shadow: 0 0 40px #00ff41, 0 0 60px #00cc33; }
`,Wg=xn(fg.div)`
  position: fixed;
  ${e=>e.isMaximized?"\n    top: 0 !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    transform: none !important;\n  ":`\n    top: ${e.top||80}px;\n    left: ${e.left||Math.max(20,window.innerWidth-320)}px;\n    width: ${e.width||300}px;\n    height: ${e.height||350}px;\n    min-height: 250px;\n  `}
  background: linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%);
  border: 2px solid #00ff41;
  border-radius: ${e=>(e.isMaximized,"0")};
  padding: ${e=>e.isMinimized?"0":"20px"};
  padding-top: 0;
  z-index: 1000;
  animation: ${Ug} 3s ease-in-out infinite;
  font-family: 'Courier New', monospace;
  overflow: hidden;
  cursor: ${e=>e.isMaximized?"default":"move"};

  @media (max-width: 768px) {
    width: ${e=>e.isMaximized?"100vw":e.width||250}px;
    height: ${e=>e.isMaximized?"100vh":e.height||300}px;
  }
`,Yg=xn.div`
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
`,Kg=xn.div`
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
`,Xg=xn.div`
  width: 100%;
  height: 12px;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 0;
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;
`,Gg=xn(fg.div)`
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
`,Qg=xn.div`
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
`,qg=xn(fg.div)`
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
`;function Jg(e){let{gameMode:n}=e;const{size:r,isResizing:i,startResize:o}=$g(300,350,250,250,500,600),[a,s]=(0,t.useState)(!0),[l,c]=(0,t.useState)(!1),[u,d]=(0,t.useState)(!1),[p,h]=(0,t.useState)({top:80,left:Math.max(20,window.innerWidth-320)}),[f,m]=(0,t.useState)(0),[g,v]=(0,t.useState)({sectionsVisited:0,timeSpent:0,clickCount:0,scrollDistance:0}),[y,x]=(0,t.useState)([]);return(0,t.useEffect)(()=>{const e=()=>{h(e=>({...e,left:Math.max(20,window.innerWidth-320)}))};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,t.useEffect)(()=>{if(!n)return;let e=Date.now(),t=0,r=0,i=window.scrollY;const o=()=>{t++,window.playSoundEffect&&window.playSoundEffect.click()},a=()=>{const e=window.scrollY;r+=Math.abs(e-i),i=e};document.addEventListener("click",o),window.addEventListener("scroll",a);const s=setInterval(()=>{const n=Math.floor((Date.now()-e)/1e3),i=Math.min((n+2*t+r/100)/100*100,100);m(i),v(e=>({...e,timeSpent:n,clickCount:t,scrollDistance:Math.floor(r)}));const o=[];n>30&&!y.includes("Explorer")&&o.push("Explorer"),t>10&&!y.includes("Clicker")&&o.push("Clicker"),r>1e3&&!y.includes("Scroller")&&o.push("Scroller"),i>50&&!y.includes("Half Way")&&o.push("Half Way"),i>=100&&!y.includes("Completionist")&&o.push("Completionist"),o.length>0&&(x(e=>[...e,...o]),window.playSoundEffect&&window.playSoundEffect.success())},1e3);return()=>{document.removeEventListener("click",o),window.removeEventListener("scroll",a),clearInterval(s)}},[n,y]),n&&a?(0,hr.jsxs)(Wg,{isMaximized:u,width:r.width,height:l?40:r.height,top:p.top,left:p.left,initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:.5},drag:!u&&!i,dragMomentum:!1,dragElastic:.1,onDrag:(e,t)=>{u||i||h(e=>({top:e.top+t.delta.y,left:e.left+t.delta.x}))},children:[!u&&(0,hr.jsx)(Rg,{handles:["se","sw","ne","nw","e","w","s","n"],onResize:(e,t)=>{const n={...p},i={...r};if(o(e,t),"n"===t||"ne"===t||"nw"===t){const t=e.clientY,r=e=>{const r=e.clientY-t,o=Math.max(250,i.height-r),a=i.height-o;h(e=>({...e,top:n.top+a}))},o=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",o)}}}),(0,hr.jsxs)(Yg,{children:[(0,hr.jsx)("div",{className:"title",children:"\u26a1 ACTIVITY"}),(0,hr.jsxs)("div",{className:"controls",children:[(0,hr.jsx)("div",{className:"control minimize",onClick:()=>{c(!l),l||d(!1)}}),(0,hr.jsx)("div",{className:"control maximize",onClick:()=>{l||d(!u)}}),(0,hr.jsx)("div",{className:"control close",onClick:()=>s(!1)})]})]}),!l&&(0,hr.jsxs)(Kg,{isMinimized:l,children:[(0,hr.jsx)(Xg,{children:(0,hr.jsx)(Gg,{initial:{width:"0%"},animate:{width:`${f}%`},transition:{duration:.5,ease:"easeOut"}})}),(0,hr.jsxs)(Qg,{children:[(0,hr.jsx)("span",{className:"label",children:"Progress:"}),(0,hr.jsxs)("span",{className:"value",children:[Math.floor(f),"%"]})]}),(0,hr.jsxs)(Qg,{children:[(0,hr.jsx)("span",{className:"label",children:"Time Spent:"}),(0,hr.jsxs)("span",{className:"value",children:[g.timeSpent,"s"]})]}),(0,hr.jsxs)(Qg,{children:[(0,hr.jsx)("span",{className:"label",children:"Interactions:"}),(0,hr.jsx)("span",{className:"value",children:g.clickCount})]}),(0,hr.jsxs)(Qg,{children:[(0,hr.jsx)("span",{className:"label",children:"Scroll Distance:"}),(0,hr.jsxs)("span",{className:"value",children:[g.scrollDistance,"px"]})]}),y.length>0&&(0,hr.jsxs)("div",{style:{marginTop:"15px"},children:[(0,hr.jsx)("div",{style:{color:"#00ff41",fontSize:"0.9rem",marginBottom:"5px",fontFamily:"Courier New, monospace",textTransform:"uppercase",textShadow:"0 0 5px #00ff41"},children:"\ud83c\udfc6 ACHIEVEMENTS:"}),y.map((e,t)=>(0,hr.jsx)(qg,{initial:{scale:0},animate:{scale:1},transition:{delay:.1*t},children:e},e))]})]})]}):null}const Zg=(0,t.forwardRef)((e,n)=>{let{gameMode:r}=e;const[i,o]=(0,t.useState)(!1);return(0,t.useImperativeHandle)(n,()=>({show:()=>o(!0),hide:()=>o(!1),toggle:()=>o(e=>!e),isVisible:()=>i})),(0,hr.jsx)(Jg,{gameMode:r&&i})}),ev=Zg,tv=wn`
  0%, 100% { text-shadow: 0 0 5px #00ff00; }
  50% { text-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00; }
`,nv=wn`
  0%, 100% { opacity: 1; }
  2% { opacity: 0.8; }
  4% { opacity: 1; }
  8% { opacity: 0.9; }
  10% { opacity: 1; }
`,rv=wn`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`,iv=wn`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(400px); }
`,ov=xn(fg.div)`
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
  animation: ${nv} 3s infinite;
  cursor: ${e=>e.isMaximized?"default":"move"};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00ff00, transparent);
    animation: ${iv} 2s linear infinite;
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
`,av=xn.div`
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
    animation: ${tv} 3s ease-in-out infinite;
  }

  .unit {
    color: #888888;
    font-size: 9px;
    margin-left: 2px;
  }

  .critical {
    color: #ff4444 !important;
    animation: ${rv} 0.3s infinite;
  }

  .warning {
    color: #ffaa00 !important;
  }
`,sv=xn.div`
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
      animation: ${iv} 1s linear infinite;
    }
  }
`,lv=xn.div`
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
    animation: ${tv} 1s ease-in-out infinite;
  }
`,cv=xn.div`
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
    animation: ${rv} 2s infinite;
  }

  .status-led {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00ff00;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
    animation: ${tv} 0.8s ease-in-out infinite;
  }
`,uv=xn.div`
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
`;function dv(e){let{gameMode:n}=e;const{size:r,isResizing:i,startResize:o}=$g(280,600,250,400,600,800),[a,s]=(0,t.useState)(!0),[l,c]=(0,t.useState)(!1),[u,d]=(0,t.useState)(!1),[p,h]=(0,t.useState)({top:window.innerHeight-620,left:20}),[f,m]=(0,t.useState)({fps:60,memory:0,uptime:0,interactions:0,hackLevel:0,cpuUsage:0,networkLatency:0,linesOfCode:0,exploitsFound:0,systemBreaches:0,dataPackets:0}),[g,v]=(0,t.useState)({browser:"",os:"",screen:"",connection:"",kernel:"",shell:""}),[y,x]=(0,t.useState)("LOW");if((0,t.useEffect)(()=>{if(!n)return;v({browser:(()=>{const e=navigator.userAgent;return e.includes("Chrome")?"Chrome":e.includes("Firefox")?"Firefox":e.includes("Safari")?"Safari":e.includes("Edge")?"Edge":"Unknown"})(),os:(()=>{const e=navigator.userAgent;return e.includes("Mac")?"macOS":e.includes("Win")?"Windows":e.includes("Linux")?"Linux":e.includes("Android")?"Android":e.includes("iOS")?"iOS":"Unknown"})(),screen:`${window.screen.width}x${window.screen.height}`,connection:navigator.connection?`${navigator.connection.effectiveType}`:"4g",kernel:"v5.4.0-hacker",shell:"/bin/zsh"});let e=Date.now(),t=0,r=performance.now();const i=()=>{const n=performance.now();if(t++,n-r>=1e3){const i=Math.round(1e3*t/(n-r));t=0,r=n;const o=Math.floor((Date.now()-e)/1e3),a=(performance.memory?performance.memory.usedJSHeapSize/1048576:50*Math.random()).toFixed(1),s=Math.floor(30*Math.random())+10,l=Math.floor(50*Math.random())+20,c=Math.floor(2.3*o)+1337,u=Math.min(100,Math.floor(o/8)+Math.floor(f.interactions/3)),d=Math.floor(o/15)+Math.floor(f.interactions/10),p=Math.floor(o/30),h=Math.floor(1.7*o)+3*f.interactions;let g="LOW";u>70||d>10?g="HIGH":(u>40||d>5)&&(g="MED"),x(g),m(e=>({fps:i,memory:parseFloat(a),uptime:o,interactions:e.interactions,hackLevel:u,cpuUsage:s,networkLatency:l,linesOfCode:c,exploitsFound:d,systemBreaches:p,dataPackets:h}))}requestAnimationFrame(i)};i();const o=()=>{m(e=>({...e,interactions:e.interactions+1}))};return document.addEventListener("click",o),document.addEventListener("keydown",o),()=>{document.removeEventListener("click",o),document.removeEventListener("keydown",o)}},[n,f.interactions]),!n||!a)return null;const b=(e,t)=>"cpu"===t&&e>80?"critical":"cpu"===t&&e>60?"warning":"hackLevel"===t&&e>80?"critical":"hackLevel"===t&&e>50?"warning":"";return(0,hr.jsxs)(ov,{isMaximized:u,width:r.width,height:l?40:r.height,top:p.top,left:p.left,drag:!u&&!i,dragMomentum:!1,dragElastic:.1,onDrag:(e,t)=>{u||i||h(e=>({top:e.top+t.delta.y,left:e.left+t.delta.x}))},children:[!u&&(0,hr.jsx)(Rg,{handles:["se","sw","ne","nw","e","w","s","n"],onResize:(e,t)=>{const n={...p},i={...r};if(o(e,t),"n"===t||"ne"===t||"nw"===t){const t=e.clientY,r=e=>{const r=e.clientY-t,o=Math.max(400,i.height-r),a=i.height-o;h(e=>({...e,top:n.top+a}))},o=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",o)}}}),(0,hr.jsxs)(cv,{children:[(0,hr.jsxs)("div",{className:"title",children:[(0,hr.jsx)("span",{className:"skull",children:"\ud83d\udc80"}),"CPU",(0,hr.jsx)("div",{className:"status-led"})]}),(0,hr.jsxs)("div",{className:"controls",children:[(0,hr.jsx)("div",{className:"control minimize",onClick:()=>{c(!l),l||d(!1)}}),(0,hr.jsx)("div",{className:"control maximize",onClick:()=>{l||d(!u)}}),(0,hr.jsx)("div",{className:"control close",onClick:()=>s(!1)})]})]}),!l&&(0,hr.jsxs)(uv,{isMinimized:l,children:[(0,hr.jsxs)(av,{children:[(0,hr.jsx)("span",{className:"label",children:"Render FPS:"}),(0,hr.jsx)("span",{className:"value "+(f.fps<30?"critical":""),children:f.fps})]}),(0,hr.jsxs)(av,{children:[(0,hr.jsx)("span",{className:"label",children:"Memory Use:"}),(0,hr.jsxs)("span",{className:"value",children:[f.memory,(0,hr.jsx)("span",{className:"unit",children:"MB"})]})]}),(0,hr.jsxs)(av,{children:[(0,hr.jsx)("span",{className:"label",children:"Session Time:"}),(0,hr.jsx)("span",{className:"value",children:(w=f.uptime,`${Math.floor(w/60)}:${(w%60).toString().padStart(2,"0")}`)})]}),(0,hr.jsxs)(av,{children:[(0,hr.jsx)("span",{className:"label",children:"Commands:"}),(0,hr.jsx)("span",{className:"value",children:f.interactions})]}),(0,hr.jsxs)(av,{children:[(0,hr.jsx)("span",{className:"label",children:"CPU Load:"}),(0,hr.jsxs)("span",{className:`value ${b(f.cpuUsage,"cpu")}`,children:[f.cpuUsage,(0,hr.jsx)("span",{className:"unit",children:"%"})]})]}),(0,hr.jsx)(sv,{children:(0,hr.jsx)("div",{className:"fill",style:{width:`${f.cpuUsage}%`}})}),(0,hr.jsxs)(av,{children:[(0,hr.jsx)("span",{className:"label",children:"Hack Level:"}),(0,hr.jsxs)("span",{className:`value ${b(f.hackLevel,"hackLevel")}`,children:[f.hackLevel,(0,hr.jsx)("span",{className:"unit",children:"%"})]})]}),(0,hr.jsx)(sv,{children:(0,hr.jsx)("div",{className:"fill",style:{width:`${f.hackLevel}%`}})}),(0,hr.jsxs)(av,{children:[(0,hr.jsx)("span",{className:"label",children:"Ping:"}),(0,hr.jsxs)("span",{className:"value",children:[f.networkLatency,(0,hr.jsx)("span",{className:"unit",children:"ms"})]})]}),(0,hr.jsxs)(av,{children:[(0,hr.jsx)("span",{className:"label",children:"Code Read:"}),(0,hr.jsx)("span",{className:"value",children:f.linesOfCode.toLocaleString()})]}),(0,hr.jsxs)(av,{children:[(0,hr.jsx)("span",{className:"label",children:"Exploits:"}),(0,hr.jsx)("span",{className:"value",children:f.exploitsFound})]}),(0,hr.jsxs)(av,{children:[(0,hr.jsx)("span",{className:"label",children:"Breaches:"}),(0,hr.jsx)("span",{className:"value",children:f.systemBreaches})]}),(0,hr.jsxs)(av,{children:[(0,hr.jsx)("span",{className:"label",children:"Data Packets:"}),(0,hr.jsx)("span",{className:"value",children:f.dataPackets.toLocaleString()})]}),(0,hr.jsxs)(lv,{children:[(0,hr.jsxs)("div",{className:"info-line",children:["os: ",g.os,(0,hr.jsx)("div",{className:"status-indicator"})]}),(0,hr.jsxs)("div",{className:"info-line",children:["browser: ",g.browser]}),(0,hr.jsxs)("div",{className:"info-line",children:["resolution: ",g.screen]}),(0,hr.jsxs)("div",{className:"info-line",children:["network: ",g.connection]}),(0,hr.jsxs)("div",{className:"info-line",children:["kernel: ",g.kernel]}),(0,hr.jsxs)("div",{className:"info-line",children:["shell: ",g.shell]}),(0,hr.jsxs)("div",{className:"info-line",style:{color:(()=>{switch(y){case"HIGH":return"#ff4444";case"MED":return"#ffaa00";default:return"#00ff00"}})(),fontWeight:"bold"},children:["threat_level: ",y]})]})]})]});var w}const pv=(0,t.forwardRef)((e,n)=>{let{gameMode:r}=e;const[i,o]=(0,t.useState)(!1);return(0,t.useImperativeHandle)(n,()=>({show:()=>o(!0),hide:()=>o(!1),toggle:()=>o(e=>!e),isVisible:()=>i})),(0,hr.jsx)(dv,{gameMode:r&&i})}),hv=pv,fv=wn`
  0%, 100% { box-shadow: 0 0 10px rgba(0, 255, 0, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 0, 0.8); }
`,mv=xn(fg.div)`
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
`,gv=xn(fg.div)`
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
    animation: ${fv} 1s infinite;
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
`;function vv(e){let{onTerminalClick:t,onActivityClick:n,onCpuClick:r,onNotepadClick:i,terminalVisible:o,activityVisible:a,cpuVisible:s,notepadVisible:l}=e;return(0,hr.jsxs)(mv,{initial:{x:100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.5,delay:1},children:[(0,hr.jsxs)(gv,{isActive:o,onClick:t,whileHover:{scale:1.2,x:-10},whileTap:{scale:.9},children:[(0,hr.jsx)("div",{className:"icon",children:"\ud83d\udcbb"}),(0,hr.jsx)("div",{className:"label",children:"Terminal"})]}),(0,hr.jsxs)(gv,{isActive:a,onClick:n,whileHover:{scale:1.2,x:-10},whileTap:{scale:.9},children:[(0,hr.jsx)("div",{className:"icon",children:"\u26a1"}),(0,hr.jsx)("div",{className:"label",children:"Activity"})]}),(0,hr.jsxs)(gv,{isActive:s,onClick:r,whileHover:{scale:1.2,x:-10},whileTap:{scale:.9},children:[(0,hr.jsx)("div",{className:"icon",children:"\ud83d\udc80"}),(0,hr.jsx)("div",{className:"label",children:"CPU"})]}),(0,hr.jsxs)(gv,{isActive:l,onClick:i,whileHover:{scale:1.2,x:-10},whileTap:{scale:.9},children:[(0,hr.jsx)("div",{className:"icon",children:"\ud83d\udcdd"}),(0,hr.jsx)("div",{className:"label",children:"Notepad"})]})]})}const yv=wn`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`,xv=wn`
  0% { background-position: 0 0; }
  100% { background-position: 0 20px; }
`,bv=wn`
  0%, 100% { text-shadow: 0 0 5px #00ff41, 0 0 10px #00ff41; }
  50% { text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41; }
`,wv=wn`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`,Sv=xn(fg.div)`
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
    animation: ${xv} 0.1s linear infinite;
  }
`,kv=xn.div`
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
      animation: ${bv} 2s ease-in-out infinite;
    }

    .title-text {
      animation: ${yv} 3s ease-in-out infinite;
    }
  }

  .title-right {
    display: flex;
    gap: 4px;
  }
`,Cv=xn.button`
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
`,Ev=xn.div`
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
    animation: ${wv} 1s infinite;
  }
`,jv=xn.textarea`
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
`,Tv=e=>{let{isVisible:n,onClose:r,onMinimize:i,isMinimized:o}=e;const{size:a,isResizing:s,startResize:l}=$g(400,300,300,200,800,600),[c,u]=(0,t.useState)(""),[d,p]=(0,t.useState)({x:150,y:150}),[h,f]=(0,t.useState)(!1),[m,g]=(0,t.useState)({x:0,y:0}),[v,y]=(0,t.useState)(new Date),x=(0,t.useRef)(null),b=(0,t.useRef)(null);(0,t.useEffect)(()=>{const e=localStorage.getItem("hacker-notepad-content"),t=localStorage.getItem("hacker-notepad-position");e&&u(e),t&&p(JSON.parse(t))},[]),(0,t.useEffect)(()=>{const e=setTimeout(()=>{localStorage.setItem("hacker-notepad-content",c),y(new Date)},1e3);return()=>clearTimeout(e)},[c]),(0,t.useEffect)(()=>{localStorage.setItem("hacker-notepad-position",JSON.stringify(d))},[d]);const w=e=>{h&&p({x:e.clientX-m.x,y:e.clientY-m.y})},S=()=>{f(!1)};(0,t.useEffect)(()=>(h&&(document.addEventListener("mousemove",w),document.addEventListener("mouseup",S)),()=>{document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",S)}),[h,m]);const k=()=>{if(!x.current)return{line:1,col:1};const e=x.current,t=c.substring(0,e.selectionStart).split("\n");return{line:t.length,col:t[t.length-1].length+1}};return n?(0,hr.jsxs)(Sv,{ref:b,width:a.width,height:a.height,top:d.y,left:d.x,initial:{opacity:0,scale:.8},animate:{opacity:o?.3:1,scale:o?.8:1,height:o?40:a.height},transition:{duration:.3,ease:"easeInOut"},drag:!1,children:[(0,hr.jsxs)(kv,{onMouseDown:e=>{if(e.target.closest(".title-right")||s)return;f(!0);const t=b.current.getBoundingClientRect();g({x:e.clientX-t.left,y:e.clientY-t.top})},children:[(0,hr.jsxs)("div",{className:"title-left",children:[(0,hr.jsx)(lr,{className:"terminal-icon"}),(0,hr.jsx)("span",{className:"title-text",children:"notepad.exe"})]}),(0,hr.jsxs)("div",{className:"title-right",children:[(0,hr.jsx)(Cv,{onClick:()=>{localStorage.setItem("hacker-notepad-content",c),y(new Date);const e=new Blob([c],{type:"text/plain"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=`hacker-notes-${(new Date).toISOString().split("T")[0]}.txt`,n.click(),URL.revokeObjectURL(t)},title:"Save & Download",children:(0,hr.jsx)(ar,{})}),(0,hr.jsx)(Cv,{className:"minimize",onClick:i,title:"Minimize",children:(0,hr.jsx)(rr,{})}),(0,hr.jsx)(Cv,{className:"close",onClick:r,title:"Close",children:(0,hr.jsx)(cr,{})})]})]}),!o&&(0,hr.jsxs)(hr.Fragment,{children:[(0,hr.jsx)(jv,{ref:x,value:c,onChange:e=>u(e.target.value),placeholder:"// Enter your hacker notes here...\n// System access logs, exploit findings, network mappings...\n// All data is encrypted and stored locally. > initialize_session()\n> accessing_mainframe...\n> connection_established \u2713",spellCheck:!1}),(0,hr.jsxs)(Ev,{children:[(0,hr.jsxs)("div",{className:"status-left",children:[(0,hr.jsxs)("span",{children:["LN ",k().line,", COL ",k().col]}),(0,hr.jsxs)("span",{children:["LINES: ",c.split("\n").length]}),(0,hr.jsxs)("span",{children:["CHARS: ",c.length]})]}),(0,hr.jsxs)("div",{children:[(0,hr.jsxs)("span",{children:["LAST_SAVED: ",v.toLocaleTimeString()]}),(0,hr.jsx)("span",{className:"cursor-blink",children:" \u2588"})]})]}),(0,hr.jsx)(Ng,{onMouseDown:l})]})]}):null},Pv=xn.div`
  display: flex;
  position: relative;
  min-height: 100vh;
`,$v=xn.div`
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
`,Mv=xn.div`
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
`,zv=xn.div`
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
`,Nv=xn.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${e=>e.progress}%;
  height: 1.5px;
  background: linear-gradient(90deg, ${e=>{let{theme:t}=e;return t.colors.primary}}, ${e=>{let{theme:t}=e;return t.colors.primaryHover}});
  z-index: 2000;
  transition: width 0.08s linear;
  border-radius: 0 1px 1px 0;
`,Rv=xn(fg.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent; /* Remove the color overlay to preserve original colors */
  pointer-events: none;
  z-index: 1;


`,Dv=xn(fg.div)`
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
`,Lv=xn(fg.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9998;
`,Av=xn.button`
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
`;const Iv=function(){const[e,n]=(0,t.useState)(!1),[r,i]=(0,t.useState)(22),[o,a]=(0,t.useState)(!1),[s,l]=(0,t.useState)(!1),[c,u]=(0,t.useState)(!1),[d,p]=(0,t.useState)(!0),[h,f]=(0,t.useState)(0),[m,g]=(0,t.useState)(""),[v,y]=(0,t.useState)(!1),[x,b]=(0,t.useState)(!0),w=t.useRef(),S=t.useRef(),k=t.useRef(),[C,E]=(0,t.useState)({terminal:!1,activity:!1,cpu:!1,notepad:!1}),[T,P]=(0,t.useState)(!1),[$,M]=(0,t.useState)(!1),z=()=>{w.current&&(w.current.toggle(),E(e=>({...e,terminal:!e.terminal})))},N=()=>{S.current&&(S.current.toggle(),E(e=>({...e,activity:!e.activity})))},R=()=>{k.current&&(k.current.toggle(),E(e=>({...e,cpu:!e.cpu})))},D=()=>{P(!0),M(!1),E(e=>({...e,notepad:!0}))},L=()=>{P(!1),E(e=>({...e,notepad:!1}))},A=()=>{M(!$)};(0,t.useEffect)(()=>{const e=()=>{n(window.innerWidth<=900)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,t.useEffect)(()=>{const e=()=>{const e=window.scrollY,t=document.documentElement.scrollHeight-window.innerHeight,n=t>0?e/t*100:0;f(Math.min(n,100))};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,t.useEffect)(()=>{const e=()=>V();return document.addEventListener("toggleGameMode",e),()=>document.removeEventListener("toggleGameMode",e)},[o]),(0,t.useEffect)(()=>{const e=setInterval(()=>{b(e=>!e)},500);return()=>clearInterval(e)},[]),(0,t.useEffect)(()=>{o&&setTimeout(()=>{z(),setTimeout(()=>{w.current&&w.current.maximize&&w.current.maximize()},100)},2e3)},[o]);const I=(e,t)=>{y(!0),g("");let n=0;const r=setInterval(()=>{n<e.length?(g(e.slice(0,n+1)),n++):(clearInterval(r),setTimeout(()=>{y(!1),t&&t()},500))},50)},O=t.useRef(!1),_=(0,t.useCallback)(e=>{if(!O.current)return;const t=e.clientX/window.innerWidth*100,n=Math.max(18,Math.min(28,t));i(Math.round(10*n)/10)},[]),B=(0,t.useCallback)(()=>{O.current=!1,window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",B),document.body.style.cursor="",document.body.style.userSelect=""},[_]),F=()=>{O.current=!0,document.body.style.cursor="ew-resize",document.body.style.userSelect="none",window.addEventListener("mousemove",_),window.addEventListener("mouseup",B)},V=()=>{window.playSoundEffect&&window.playSoundEffect.click(),o?u(!0):l(!0)},H=()=>{window.playSoundEffect&&window.playSoundEffect.success(),I("sudo activate --force",()=>{a(!0),l(!1),g("")})},U=()=>{I("sudo abort",()=>{l(!1),g("")})},W=()=>{I("sudo shutdown --dev-mode",()=>{a(!1),u(!1),g("")})},Y=()=>{I("sudo cancel --stay-active",()=>{u(!1),g("")})};return(0,hr.jsx)(mr,{gameMode:o,children:t=>(0,hr.jsx)(dn,{theme:t,children:(0,hr.jsxs)(j,{children:[(0,hr.jsx)(Sn,{}),(0,hr.jsx)(Nv,{progress:h}),o&&(0,hr.jsx)(Rv,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1}}),o&&(0,hr.jsxs)(hr.Fragment,{children:[(0,hr.jsx)(gg,{gameMode:o}),(0,hr.jsx)(Pg,{gameMode:o}),(0,hr.jsx)(ev,{ref:S,gameMode:o}),(0,hr.jsx)(hv,{ref:k,gameMode:o}),(0,hr.jsx)(Hg,{ref:w,gameMode:o,onActivityClick:N,onCpuClick:R,onNotepadClick:D}),(0,hr.jsx)(Tv,{isVisible:T,onClose:L,onMinimize:A,isMinimized:$}),(0,hr.jsx)(vv,{onTerminalClick:z,onActivityClick:N,onCpuClick:R,onNotepadClick:D,terminalVisible:C.terminal,activityVisible:C.activity,cpuVisible:C.cpu,notepadVisible:C.notepad})]}),d&&(0,hr.jsx)(kl,{onFinish:()=>p(!1)}),e&&(0,hr.jsx)(hl,{}),s&&(0,hr.jsxs)(hr.Fragment,{children:[(0,hr.jsx)(Lv,{initial:{opacity:0},animate:{opacity:1},onClick:()=>l(!1)}),(0,hr.jsxs)(Dv,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{duration:.4,ease:"easeInOut"},children:[(0,hr.jsx)(Av,{onClick:()=>l(!1),children:"\xd7"}),(0,hr.jsxs)("div",{style:{background:"#111",padding:"15px 20px",borderBottom:"2px solid #00ff41",marginBottom:"20px",position:"relative",zIndex:2},children:[(0,hr.jsx)("div",{style:{color:"#00ff41",fontSize:"14px",fontFamily:"Courier New, monospace",marginBottom:"8px",textShadow:"0 0 10px #00ff41"},children:"root@hackermachine:~$"}),(0,hr.jsx)("div",{style:{color:"#ff4444",fontSize:"12px",fontFamily:"Courier New, monospace",textTransform:"uppercase",letterSpacing:"1px",textShadow:"0 0 8px #ff4444",marginBottom:"5px"},children:"[!] SECURITY BREACH DETECTED"}),(0,hr.jsx)("div",{style:{color:"#ffaa00",fontSize:"14px",fontFamily:"Courier New, monospace",fontWeight:"bold",textShadow:"0 0 8px #ffaa00"},children:"ENABLING DEV_MODE..."})]}),(0,hr.jsx)("div",{style:{background:"#000",border:"1px solid #333",margin:"0 20px 20px 20px",padding:"10px 15px",fontFamily:"Courier New, monospace",fontSize:"14px",minHeight:"40px",position:"relative",zIndex:2},children:(0,hr.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,hr.jsx)("span",{style:{color:"#00ff41",marginRight:"8px"},children:"root@hackermachine:~$"}),(0,hr.jsx)("span",{style:{color:"#ffaa00"},children:m}),(0,hr.jsx)("span",{style:{color:"#00ff41",opacity:x&&!v?1:0,marginLeft:"2px",animation:v?"none":"blink 1s infinite"},children:"\u2588"})]})}),(0,hr.jsxs)("div",{style:{padding:"0 20px",position:"relative",zIndex:2},children:[(0,hr.jsx)("div",{style:{color:"#00ff41",fontSize:"16px",fontFamily:"Courier New, monospace",marginBottom:"15px",textShadow:"0 0 10px #00ff41",borderLeft:"3px solid #00ff41",paddingLeft:"15px",textTransform:"uppercase",letterSpacing:"1px"},children:"> SYSTEM_UPDATES_v2.1.0"}),(0,hr.jsxs)("div",{style:{background:"#0a0a0a",border:"1px solid #333",padding:"15px",marginBottom:"20px",fontFamily:"Courier New, monospace",fontSize:"13px",lineHeight:"1.8"},children:[(0,hr.jsx)("div",{style:{color:"#666",marginBottom:"10px"},children:"\u250c\u2500 EXECUTION LOG \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510"}),(0,hr.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,hr.jsx)("span",{style:{color:"#ffaa00"},children:"\u2588"}),(0,hr.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[INIT]"}),(0,hr.jsx)("span",{style:{color:"#00ff41"},children:"Draggable terminal + real-time stats"})]}),(0,hr.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,hr.jsx)("span",{style:{color:"#ffaa00"},children:"\u2588"}),(0,hr.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[LOAD]"}),(0,hr.jsx)("span",{style:{color:"#00ff41"},children:"Interactive molecular particle network"})]}),(0,hr.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,hr.jsx)("span",{style:{color:"#ffaa00"},children:"\u2588"}),(0,hr.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[EXEC]"}),(0,hr.jsx)("span",{style:{color:"#00ff41"},children:"Side panel animation system"})]}),(0,hr.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,hr.jsx)("span",{style:{color:"#ffaa00"},children:"\u2588"}),(0,hr.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[RUN]"}),(0,hr.jsx)("span",{style:{color:"#00ff41"},children:"Functional terminal with custom commands"})]}),(0,hr.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,hr.jsx)("span",{style:{color:"#ffaa00"},children:"\u2588"}),(0,hr.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[FX]"}),(0,hr.jsx)("span",{style:{color:"#00ff41"},children:"Enhanced sparkle effects + cursor trails"})]}),(0,hr.jsxs)("div",{style:{marginBottom:"10px"},children:[(0,hr.jsx)("span",{style:{color:"#ffaa00"},children:"\u2588"}),(0,hr.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[EASTEREGG]"}),(0,hr.jsx)("span",{style:{color:"#00ff41"},children:"Konami code easter egg support"})]}),(0,hr.jsx)("div",{style:{color:"#666"},children:"\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518"})]})]}),(0,hr.jsxs)("div",{style:{position:"absolute",bottom:"20px",left:"20px",right:"20px",background:"#111",border:"1px solid #333",padding:"15px",zIndex:2},children:[(0,hr.jsx)("div",{style:{color:"#666",fontSize:"11px",fontFamily:"Courier New, monospace",marginBottom:"10px",textAlign:"center"},children:"\u250c\u2500 AUTHORIZATION REQUIRED \u2500\u2510"}),(0,hr.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,hr.jsx)("button",{onClick:H,style:{background:"linear-gradient(180deg, #003300, #001a00)",border:"1px solid #00ff41",color:"#00ff41",padding:"10px 20px",fontFamily:"Courier New, monospace",fontSize:"12px",fontWeight:"bold",cursor:"pointer",borderRadius:"0",textTransform:"uppercase",boxShadow:"inset 0 1px 0 rgba(0, 255, 65, 0.2), 0 0 10px rgba(0, 255, 65, 0.3)",transition:"all 0.2s ease",flex:"1",textShadow:"0 0 5px #00ff41"},onMouseEnter:e=>{e.target.style.background="linear-gradient(180deg, #00ff41, #00cc33)",e.target.style.color="#000",e.target.style.boxShadow="0 0 20px #00ff41",e.target.style.textShadow="none"},onMouseLeave:e=>{e.target.style.background="linear-gradient(180deg, #003300, #001a00)",e.target.style.color="#00ff41",e.target.style.boxShadow="inset 0 1px 0 rgba(0, 255, 65, 0.2), 0 0 10px rgba(0, 255, 65, 0.3)",e.target.style.textShadow="0 0 5px #00ff41"},children:"> EXECUTE"}),(0,hr.jsx)("button",{onClick:U,style:{background:"linear-gradient(180deg, #330000, #1a0000)",border:"1px solid #ff4444",color:"#ff4444",padding:"10px 20px",fontFamily:"Courier New, monospace",fontSize:"12px",fontWeight:"bold",cursor:"pointer",borderRadius:"0",textTransform:"uppercase",boxShadow:"inset 0 1px 0 rgba(255, 68, 68, 0.2), 0 0 10px rgba(255, 68, 68, 0.3)",transition:"all 0.2s ease",flex:"1",textShadow:"0 0 5px #ff4444"},onMouseEnter:e=>{e.target.style.background="linear-gradient(180deg, #ff4444, #cc3333)",e.target.style.color="#000",e.target.style.boxShadow="0 0 20px #ff4444",e.target.style.textShadow="none"},onMouseLeave:e=>{e.target.style.background="linear-gradient(180deg, #330000, #1a0000)",e.target.style.color="#ff4444",e.target.style.boxShadow="inset 0 1px 0 rgba(255, 68, 68, 0.2), 0 0 10px rgba(255, 68, 68, 0.3)",e.target.style.textShadow="0 0 5px #ff4444"},children:"> ABORT"})]})]})]})]}),c&&(0,hr.jsxs)(hr.Fragment,{children:[(0,hr.jsx)(Lv,{initial:{opacity:0},animate:{opacity:1},onClick:()=>u(!1)}),(0,hr.jsxs)(Dv,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{duration:.4,ease:"easeInOut"},children:[(0,hr.jsx)(Av,{onClick:()=>u(!1),children:"\xd7"}),(0,hr.jsxs)("div",{style:{background:"#111",padding:"15px 20px",borderBottom:"2px solid #ff4444",marginBottom:"20px",position:"relative",zIndex:2},children:[(0,hr.jsx)("div",{style:{color:"#00ff41",fontSize:"14px",fontFamily:"Courier New, monospace",marginBottom:"8px",textShadow:"0 0 10px #00ff41"},children:"root@hackermachine:~$"}),(0,hr.jsx)("div",{style:{color:"#ff4444",fontSize:"12px",fontFamily:"Courier New, monospace",textTransform:"uppercase",letterSpacing:"1px",textShadow:"0 0 8px #ff4444",marginBottom:"5px"},children:"[!] DEV MODE SHUTDOWN REQUEST"}),(0,hr.jsx)("div",{style:{color:"#ffaa00",fontSize:"14px",fontFamily:"Courier New, monospace",fontWeight:"bold",textShadow:"0 0 8px #ffaa00"},children:"CONFIRMING EXIT..."})]}),(0,hr.jsx)("div",{style:{background:"#000",border:"1px solid #333",margin:"0 20px 20px 20px",padding:"10px 15px",fontFamily:"Courier New, monospace",fontSize:"14px",minHeight:"40px",position:"relative",zIndex:2},children:(0,hr.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,hr.jsx)("span",{style:{color:"#00ff41",marginRight:"8px"},children:"root@hackermachine:~$"}),(0,hr.jsx)("span",{style:{color:"#ffaa00"},children:m}),(0,hr.jsx)("span",{style:{color:"#00ff41",opacity:x&&!v?1:0,marginLeft:"2px",animation:v?"none":"blink 1s infinite"},children:"\u2588"})]})}),(0,hr.jsxs)("div",{style:{padding:"0 20px",position:"relative",zIndex:2},children:[(0,hr.jsx)("div",{style:{color:"#ff4444",fontSize:"16px",fontFamily:"Courier New, monospace",marginBottom:"15px",textShadow:"0 0 10px #ff4444",borderLeft:"3px solid #ff4444",paddingLeft:"15px",textTransform:"uppercase",letterSpacing:"1px"},children:"> SHUTDOWN_CONFIRMATION"}),(0,hr.jsxs)("div",{style:{background:"#0a0a0a",border:"1px solid #333",padding:"15px",marginBottom:"20px",fontFamily:"Courier New, monospace",fontSize:"13px",lineHeight:"1.8"},children:[(0,hr.jsx)("div",{style:{color:"#666",marginBottom:"10px"},children:"\u250c\u2500 ACTIVE PROCESSES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510"}),(0,hr.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,hr.jsx)("span",{style:{color:"#ff4444"},children:"\u25cf"}),(0,hr.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[TERM]"}),(0,hr.jsx)("span",{style:{color:"#00ff41"},children:"Draggable terminal interface"})]}),(0,hr.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,hr.jsx)("span",{style:{color:"#ff4444"},children:"\u25cf"}),(0,hr.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[MOLC]"}),(0,hr.jsx)("span",{style:{color:"#00ff41"},children:"Molecular particle network"})]}),(0,hr.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,hr.jsx)("span",{style:{color:"#ff4444"},children:"\u25cf"}),(0,hr.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[EFCT]"}),(0,hr.jsx)("span",{style:{color:"#00ff41"},children:"Enhanced visual effects"})]}),(0,hr.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,hr.jsx)("span",{style:{color:"#ff4444"},children:"\u25cf"}),(0,hr.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[STATS]"}),(0,hr.jsx)("span",{style:{color:"#00ff41"},children:"Real-time system monitoring"})]}),(0,hr.jsxs)("div",{style:{marginBottom:"10px"},children:[(0,hr.jsx)("span",{style:{color:"#ff4444"},children:"\u25cf"}),(0,hr.jsx)("span",{style:{color:"#888",marginRight:"8px"},children:"[KCODE]"}),(0,hr.jsx)("span",{style:{color:"#00ff41"},children:"Konami code listener"})]}),(0,hr.jsx)("div",{style:{color:"#666"},children:"\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518"})]})]}),(0,hr.jsxs)("div",{style:{position:"absolute",bottom:"20px",left:"20px",right:"20px",background:"#111",border:"1px solid #333",padding:"15px",zIndex:2},children:[(0,hr.jsx)("div",{style:{color:"#666",fontSize:"11px",fontFamily:"Courier New, monospace",marginBottom:"10px",textAlign:"center"},children:"\u250c\u2500 SHUTDOWN CONFIRMATION \u2500\u2510"}),(0,hr.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,hr.jsx)("button",{onClick:W,style:{background:"linear-gradient(180deg, #330000, #1a0000)",border:"1px solid #ff4444",color:"#ff4444",padding:"10px 20px",fontFamily:"Courier New, monospace",fontSize:"12px",fontWeight:"bold",cursor:"pointer",borderRadius:"0",textTransform:"uppercase",boxShadow:"inset 0 1px 0 rgba(255, 68, 68, 0.2), 0 0 10px rgba(255, 68, 68, 0.3)",transition:"all 0.2s ease",flex:"1",textShadow:"0 0 5px #ff4444"},onMouseEnter:e=>{e.target.style.background="linear-gradient(180deg, #ff4444, #cc3333)",e.target.style.color="#000",e.target.style.boxShadow="0 0 20px #ff4444",e.target.style.textShadow="none"},onMouseLeave:e=>{e.target.style.background="linear-gradient(180deg, #330000, #1a0000)",e.target.style.color="#ff4444",e.target.style.boxShadow="inset 0 1px 0 rgba(255, 68, 68, 0.2), 0 0 10px rgba(255, 68, 68, 0.3)",e.target.style.textShadow="0 0 5px #ff4444"},children:"> SHUTDOWN"}),(0,hr.jsx)("button",{onClick:Y,style:{background:"linear-gradient(180deg, #003300, #001a00)",border:"1px solid #00ff41",color:"#00ff41",padding:"10px 20px",fontFamily:"Courier New, monospace",fontSize:"12px",fontWeight:"bold",cursor:"pointer",borderRadius:"0",textTransform:"uppercase",boxShadow:"inset 0 1px 0 rgba(0, 255, 65, 0.2), 0 0 10px rgba(0, 255, 65, 0.3)",transition:"all 0.2s ease",flex:"1",textShadow:"0 0 5px #00ff41"},onMouseEnter:e=>{e.target.style.background="linear-gradient(180deg, #00ff41, #00cc33)",e.target.style.color="#000",e.target.style.boxShadow="0 0 20px #00ff41",e.target.style.textShadow="none"},onMouseLeave:e=>{e.target.style.background="linear-gradient(180deg, #003300, #001a00)",e.target.style.color="#00ff41",e.target.style.boxShadow="inset 0 1px 0 rgba(0, 255, 65, 0.2), 0 0 10px rgba(0, 255, 65, 0.3)",e.target.style.textShadow="0 0 5px #00ff41"},children:"> CANCEL"})]})]})]})]}),(0,hr.jsxs)(Pv,{children:[!e&&(0,hr.jsxs)($v,{width:r,"data-panel":"left",as:fg.div,initial:{x:0},animate:{x:o?`-${r+5}%`:0,opacity:o?0:1},transition:{duration:.6,ease:"easeInOut"},children:[(0,hr.jsx)(kr,{}),(0,hr.jsx)(jr,{})]}),!e&&(0,hr.jsx)(Mv,{width:r,onMouseDown:F,as:fg.div,initial:{opacity:0},animate:{x:o?`-${r+5}%`:0,opacity:o?0:1},transition:{duration:.6,ease:"easeInOut"},children:(0,hr.jsx)("div",{className:"handle-bar"})}),(0,hr.jsx)(zv,{width:e||o?0:r,style:{marginLeft:o?0:`${e?0:r}%`},children:(0,hr.jsx)(Ks,{})})]})]})})})};document.addEventListener("keydown",e=>{const t=[...document.querySelectorAll('a, button, [tabindex="0"]')],n=t.indexOf(document.activeElement);if("ArrowDown"===e.key||"ArrowRight"===e.key){t[(n+1)%t.length].focus()}if("ArrowUp"===e.key||"ArrowLeft"===e.key){t[(n-1+t.length)%t.length].focus()}});i.createRoot(document.getElementById("root")).render((0,hr.jsx)(t.StrictMode,{children:(0,hr.jsx)(Iv,{})}))})()})();
//# sourceMappingURL=main.86108006.js.map