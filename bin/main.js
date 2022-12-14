(()=>{var e={921:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ERROR_API_KEY_EXPIRED:()=>v,ERROR_API_KEY_INVALID:()=>N,ERROR_API_KEY_MISSING:()=>p,ERROR_BAD_REQUEST_FORMAT:()=>T,ERROR_BAD_RESPONSE_FORMAT:()=>c,ERROR_CLIENT_TIMEOUT:()=>a,ERROR_CSP_BLOCK:()=>O,ERROR_FORBIDDEN_ENDPOINT:()=>f,ERROR_FORBIDDEN_HEADER:()=>S,ERROR_FORBIDDEN_ORIGIN:()=>h,ERROR_GENERAL_SERVER_FAILURE:()=>P,ERROR_INSTALLATION_METHOD_RESTRICTED:()=>s,ERROR_INTEGRATION_FAILURE:()=>I,ERROR_NETWORK_ABORT:()=>E,ERROR_NETWORK_CONNECTION:()=>u,ERROR_RATE_LIMIT:()=>A,ERROR_SCRIPT_LOAD_FAIL:()=>C,ERROR_SERVER_TIMEOUT:()=>y,ERROR_SUBSCRIPTION_NOT_ACTIVE:()=>_,ERROR_TOKEN_EXPIRED:()=>D,ERROR_TOKEN_INVALID:()=>m,ERROR_TOKEN_MISSING:()=>b,ERROR_UNSUPPORTED_VERSION:()=>d,ERROR_WRONG_REGION:()=>l,default:()=>B,defaultEndpoint:()=>R,defaultScriptUrlPattern:()=>g,defaultTlsEndpoint:()=>i,load:()=>L});var n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};function o(e){for(var t="",r=0;r<e.length;++r)if(r>0){var n=e[r].toLowerCase();n!==e[r]?t+=" "+n:t+=e[r]}else t+=e[r].toUpperCase();return t}Object.create,Object.create;var R={default:"endpoint"},i={default:"tlsEndpoint"},a="Client timeout",u="Network connection error",E="Network request aborted",c="Response cannot be parsed",O="Blocked by CSP",l=o("WrongRegion"),_=o("SubscriptionNotActive"),d=o("UnsupportedVersion"),s=o("InstallationMethodRestricted"),f=o("HostnameRestricted"),I=o("IntegrationFailed"),p="API key required",N="API key not found",v="API key expired",T="Request cannot be parsed",P="Request failed",y="Request failed to process",A="Too many requests, rate limit exceeded",h="Not available for this origin",S="Not available with restricted header",b="API key required",m="API key not found",D="API key expired";var w="https://fpnpmcdn.net/v<version>/<apiKey>/loader_v<loaderVersion>.js",g=w,C="Failed to load the JS script of the agent";function L(e){var t;e.scriptUrlPattern;var r=e.token,o=e.apiKey,R=void 0===o?r:o,i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["scriptUrlPattern","token","apiKey"]),a=null!==(t=function(e,t){return function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(e,t)?e[t]:void 0}(e,"scriptUrlPattern"))&&void 0!==t?t:w;return Promise.resolve().then((function(){if(!R||"string"!=typeof R)throw new Error("API key required");return(e=function(e,t){return(Array.isArray(e)?e:[e]).map((function(e){return function(e,t){var r=encodeURIComponent;return e.replace(/<[^<>]+>/g,(function(e){return"<version>"===e?"3":"<apiKey>"===e?r(t):"<loaderVersion>"===e?r("3.8.1"):e}))}(String(e),t)}))}(a,R),t=U,r=[],function(e,t){var r,n,o=(n=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var R=arguments[t],i=0,a=R.length;i<a;i++,o++)n[o]=R[i];return n}(e),{current:function(){return n[0]},postpone:function(){var e=n.shift();void 0!==e&&n.push(e)},exclude:function(){n.shift()}}),R=(r=0,function(){return Math.random()*Math.min(3e3,100*Math.pow(2,r++))}),i=o.current();if(void 0===i)return Promise.reject(new TypeError("The list of script URL patterns is empty"));var a=function(e,r){return t(e).catch((function(e){if(r+1>=5)throw e;!function(e){if(!(e instanceof Error))return!1;var t=e.message;return"Blocked by CSP"===t||"9319"===t}(e)?o.postpone():o.exclude();var t,n=o.current();if(void 0===n)throw e;return(t=R(),new Promise((function(e){return setTimeout(e,t)}))).then((function(){return a(n,r+1)}))}))};return a(i,0)}(e,(function(e){var n=new Date,o=function(){return r.push({url:e,startedAt:n,finishedAt:new Date})},R=t(e);return R.then(o,o),R})).then((function(e){return[e,{attempts:r}]}))).catch(K);var e,t,r})).then((function(e){var t=e[0],r=e[1];return t.load(n(n({},i),{ldi:r}))}))}function U(e){return function(e,t,r,n){var o,R=document,i="securitypolicyviolation",a=function(t){var r=new URL(e,location.href),n=t.blockedURI;n!==r.href&&n!==r.protocol.slice(0,-1)&&n!==r.origin||(o=t,u())};R.addEventListener(i,a);var u=function(){return R.removeEventListener(i,a)};return Promise.resolve().then(t).then((function(e){return u(),e}),(function(e){return new Promise((function(e){return setTimeout(e)})).then((function(){if(u(),o)return function(){throw new Error("Blocked by CSP")}();throw e}))}))}(e,(function(){return function(e){return new Promise((function(t,r){var n=document.createElement("script"),o=function(){var e;return null===(e=n.parentNode)||void 0===e?void 0:e.removeChild(n)},R=document.head||document.getElementsByTagName("head")[0];n.onload=function(){o(),t()},n.onerror=function(){o(),r(new Error(C))},n.async=!0,n.src=e,R.appendChild(n)}))}(e)})).then(k)}function k(){var e=window,t="__fpjs_p_l_b",r=e[t];if(function(e,t){var r,n=null===(r=Object.getOwnPropertyDescriptor)||void 0===r?void 0:r.call(Object,e,t);(null==n?void 0:n.configurable)?delete e[t]:n&&!n.writable||(e[t]=void 0)}(e,t),"function"!=typeof(null==r?void 0:r.load))throw new Error("9319");return r}function K(e){throw e instanceof Error&&"9319"===e.message?new Error(C):e}var B={load:L,defaultScriptUrlPattern:w,ERROR_SCRIPT_LOAD_FAIL:C,ERROR_API_KEY_EXPIRED:"API key expired",ERROR_API_KEY_INVALID:"API key not found",ERROR_API_KEY_MISSING:"API key required",ERROR_BAD_REQUEST_FORMAT:"Request cannot be parsed",ERROR_BAD_RESPONSE_FORMAT:"Response cannot be parsed",ERROR_CLIENT_TIMEOUT:"Client timeout",ERROR_CSP_BLOCK:"Blocked by CSP",ERROR_FORBIDDEN_ENDPOINT:f,ERROR_FORBIDDEN_HEADER:"Not available with restricted header",ERROR_FORBIDDEN_ORIGIN:"Not available for this origin",ERROR_GENERAL_SERVER_FAILURE:"Request failed",ERROR_INSTALLATION_METHOD_RESTRICTED:s,ERROR_INTEGRATION_FAILURE:I,ERROR_NETWORK_ABORT:"Network request aborted",ERROR_NETWORK_CONNECTION:"Network connection error",ERROR_RATE_LIMIT:"Too many requests, rate limit exceeded",ERROR_SERVER_TIMEOUT:"Request failed to process",ERROR_SUBSCRIPTION_NOT_ACTIVE:_,ERROR_TOKEN_EXPIRED:"API key expired",ERROR_TOKEN_INVALID:"API key not found",ERROR_TOKEN_MISSING:"API key required",ERROR_UNSUPPORTED_VERSION:d,ERROR_WRONG_REGION:l,defaultEndpoint:R,defaultTlsEndpoint:i}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var R=t[n]={exports:{}};return e[n](R,R.exports,r),R.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=r(921);e.load({apiKey:"9LPPFowgE7CqfuxXzBNq",scriptUrlPattern:["https://lbradley.net/v<version>/<apiKey>/loader_v<loaderVersion>.js",e.defaultScriptUrlPattern]}).then((e=>e.get())).then((e=>console.log(e.requestId,e.visitorId)))})()})();