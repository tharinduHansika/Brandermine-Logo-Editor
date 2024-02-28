(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9229],{4444:function(t,e,n){"use strict";n.d(e,{$s:function(){return J},BH:function(){return _},DV:function(){return F},GJ:function(){return U},L:function(){return c},LL:function(){return N},P0:function(){return v},Sg:function(){return E},UG:function(){return T},UI:function(){return H},US:function(){return h},Wl:function(){return x},Yr:function(){return A},ZR:function(){return k},aH:function(){return w},b$:function(){return C},cI:function(){return P},dS:function(){return K},eu:function(){return D},g5:function(){return a},gK:function(){return W},gQ:function(){return X},h$:function(){return u},hl:function(){return O},hu:function(){return s},m9:function(){return G},p$:function(){return p},r3:function(){return B},ru:function(){return S},uI:function(){return I},ug:function(){return q},vZ:function(){return function t(e,n){if(e===n)return!0;let i=Object.keys(e),r=Object.keys(n);for(let s of i){if(!r.includes(s))return!1;let i=e[s],a=n[s];if(V(i)&&V(a)){if(!t(i,a))return!1}else if(i!==a)return!1}for(let t of r)if(!i.includes(t))return!1;return!0}},w9:function(){return M},xO:function(){return z},xb:function(){return $},zI:function(){return R}});var i=n(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},s=function(t,e){if(!t)throw a(e)},a=function(t){return Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},o=function(t){let e=[],n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):(64512&r)==55296&&i+1<t.length&&(64512&t.charCodeAt(i+1))==56320?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},l=function(t){let e=[],n=0,i=0;for(;n<t.length;){let r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=t[n++],a=t[n++],o=t[n++],l=((7&r)<<18|(63&s)<<12|(63&a)<<6|63&o)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(1023&l))}else{let s=t[n++],a=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return e.join("")},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){let r=t[e],s=e+1<t.length,a=s?t[e+1]:0,o=e+2<t.length,l=o?t[e+2]:0,h=r>>2,u=(3&r)<<4|a>>4,c=(15&a)<<2|l>>6,f=63&l;o||(f=64,s||(c=64)),i.push(n[h],n[u],n[c],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):l(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();let n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){let r=n[t.charAt(e++)],s=e<t.length,a=s?n[t.charAt(e)]:0;++e;let o=e<t.length,l=o?n[t.charAt(e)]:64;++e;let h=e<t.length,u=h?n[t.charAt(e)]:64;if(++e,null==r||null==a||null==l||null==u)throw Error();let c=r<<2|a>>4;if(i.push(c),64!==l){let t=a<<4&240|l>>2;if(i.push(t),64!==u){let t=l<<6&192|u;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},u=function(t){let e=o(t);return h.encodeByteArray(e,!0)},c=function(t){return u(t).replace(/\./g,"")},f=function(t){try{return h.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t){return function t(e,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return n}for(let i in n)n.hasOwnProperty(i)&&"__proto__"!==i&&(e[i]=t(e[i],n[i]));return e}(void 0,t)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,g=()=>{if(void 0===i||void 0===i.env)return;let t=i.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},m=()=>{let t;if("undefined"==typeof document)return;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}let e=t&&f(t[1]);return e&&JSON.parse(e)},y=()=>{try{return d()||g()||m()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},b=t=>{var e,n;return null===(n=null===(e=y())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},v=t=>{let e=b(t);if(!e)return;let n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw Error(`Invalid host ${e} with no separate hostname and port!`);let i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},w=()=>{var t;return null===(t=y())||void 0===t?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){if(t.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[c(JSON.stringify({alg:"none",type:"JWT"})),c(JSON.stringify(s)),""].join(".")}function I(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}function T(){var t;let e=null===(t=y())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(t){return!1}}function S(){let t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function C(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function A(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function O(){try{return"object"==typeof indexedDB}catch(t){return!1}}function D(){return new Promise((t,e)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})}function R(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class k extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){let n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?r.replace(L,(t,e)=>{let i=n[e];return null!=i?String(i):`<${e}?>`}):"Error",a=`${this.serviceName}: ${s} (${i}).`,o=new k(i,a,n);return o}}let L=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){return JSON.parse(t)}function x(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let j=function(t){let e={},n={},i={},r="";try{let s=t.split(".");e=P(f(s[0])||""),n=P(f(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(t){}return{header:e,claims:n,data:i,signature:r}},M=function(t){let e=j(t),n=e.claims;return!!n&&"object"==typeof n&&n.hasOwnProperty("iat")},U=function(t){let e=j(t).claims;return"object"==typeof e&&!0===e.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function F(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function $(t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function H(t,e,n){let i={};for(let r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function V(t){return null!==t&&"object"==typeof t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){let e=[];for(let[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){let n,i;e||(e=0);let r=this.W_;if("string"==typeof t)for(let n=0;n<16;n++)r[n]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let n=0;n<16;n++)r[n]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let t=16;t<80;t++){let e=r[t-3]^r[t-8]^r[t-14]^r[t-16];r[t]=(e<<1|e>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],o=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(let t=0;t<80;t++){t<40?t<20?(n=l^a&(o^l),i=1518500249):(n=a^o^l,i=1859775393):t<60?(n=a&o|l&(a|o),i=2400959708):(n=a^o^l,i=3395469782);let e=(s<<5|s>>>27)+n+h+i+r[t]&4294967295;h=l,l=o,o=(a<<30|a>>>2)&4294967295,a=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);let n=e-this.blockSize,i=0,r=this.buf_,s=this.inbuf_;for(;i<e;){if(0===s)for(;i<=n;)this.compress_(t,i),i+=this.blockSize;if("string"==typeof t){for(;i<e;)if(r[s]=t.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<e;)if(r[s]=t[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=e}digest(){let t=[],e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let t=this.blockSize-1;t>=56;t--)this.buf_[t]=255&e,e/=256;this.compress_(this.buf_);let n=0;for(let e=0;e<5;e++)for(let i=24;i>=0;i-=8)t[n]=this.chain_[e]>>i&255,++n;return t}}function W(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let K=function(t){let e=[],n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){let e=r-55296;s(++i<t.length,"Surrogate pair missing trail surrogate.");let n=t.charCodeAt(i)-56320;r=65536+(e<<10)+n}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},q=function(t){let e=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};function J(t,e=1e3,n=2){let i=e*Math.pow(n,t);return Math.min(144e5,i+Math.round(.5*i*(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t){return t&&t._delegate?t._delegate:t}},3510:function(t,e,n){"use strict";n.d(e,{FJ:function(){return n_},JJ:function(){return nO},UE:function(){return nw},ii:function(){return nA},jK:function(){return nE},ju:function(){return nT},kN:function(){return nS},tw:function(){return nI},zI:function(){return nC}});var i,r,s,a,o,l,h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},u={},c=c||{},f=h||self;function p(){}function d(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function g(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function m(t,e,n){return t.call.apply(t.bind,arguments)}function y(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return(b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?m:y).apply(null,arguments)}function v(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function w(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function _(){this.s=this.s,this.o=this.o}_.prototype.s=!1,_.prototype.na=function(){this.s||(this.s=!0,this.M())},_.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return -1};function I(t){let e=t.length;if(0<e){let n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function T(t,e){for(let e=1;e<arguments.length;e++){let n=arguments[e];if(d(n)){let e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function S(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{f.addEventListener("test",p,e),f.removeEventListener("test",p,e)}catch(t){}return t}();function A(t){return/^[\s\xa0]*$/.test(t)}var O=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function D(t,e){return t<e?-1:t>e?1:0}function R(){var t=f.navigator;return t&&(t=t.userAgent)?t:""}function k(t){return -1!=R().indexOf(t)}function N(t){return N[" "](t),t}N[" "]=p;var L=k("Opera"),P=k("Trident")||k("MSIE"),x=k("Edge"),j=x||P,M=k("Gecko")&&!(-1!=R().toLowerCase().indexOf("webkit")&&!k("Edge"))&&!(k("Trident")||k("MSIE"))&&!k("Edge"),U=-1!=R().toLowerCase().indexOf("webkit")&&!k("Edge");function B(){var t=f.document;return t?t.documentMode:void 0}t:{var F,$="",H=(F=R(),M?/rv:([^\);]+)(\)|;)/.exec(F):x?/Edge\/([\d\.]+)/.exec(F):P?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(F):U?/WebKit\/(\S+)/.exec(F):L?/(?:Version)[ \/]?(\S+)/.exec(F):void 0);if(H&&($=H?H[1]:""),P){var V=B();if(null!=V&&V>parseFloat($)){r=String(V);break t}}r=$}var z={},X=f.document&&P&&(B()||parseInt(r,10))||void 0;function W(t,e){if(S.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(M){t:{try{N(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:K[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&W.X.h.call(this)}}w(W,S);var K={2:"touch",3:"pen",4:"mouse"};W.prototype.h=function(){W.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var q="closure_listenable_"+(1e6*Math.random()|0),J=0;function G(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++J,this.ba=this.ea=!1}function Y(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Z(t,e,n){for(let i in t)e.call(n,t[i],i,t)}function Q(t){let e={};for(let n in t)e[n]=t[n];return e}let tt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function te(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e])t[n]=i[n];for(let e=0;e<tt.length;e++)n=tt[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function tn(t){this.src=t,this.g={},this.h=0}function ti(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=E(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Y(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function tr(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&!!n==s.capture&&s.ha==i)return r}return -1}tn.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var a=tr(t,e,i,r);return -1<a?(e=t[a],n||(e.ea=!1)):((e=new G(e,this.src,s,!!i,r)).ea=n,t.push(e)),e};var ts="closure_lm_"+(1e6*Math.random()|0),ta={};function to(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var a=g(r)?!!r.capture:!!r,o=tc(t);if(o||(t[ts]=o=new tn(t)),(n=o.add(e,n,i,a,s)).proxy)return n;if(i=function t(e){return tu.call(t.src,t.listener,e)},n.proxy=i,i.src=t,i.listener=n,t.addEventListener)C||(r=a),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(th(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tl(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[q])ti(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(th(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=tc(e))?(ti(n,t),0==n.h&&(n.src=null,e[ts]=null)):Y(t)}}}function th(t){return t in ta?ta[t]:ta[t]="on"+t}function tu(t,e){if(t.ba)t=!0;else{e=new W(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&tl(t),t=n.call(i,e)}return t}function tc(t){return(t=t[ts])instanceof tn?t:null}var tf="__closure_events_fn_"+(1e9*Math.random()>>>0);function tp(t){return"function"==typeof t?t:(t[tf]||(t[tf]=function(e){return t.handleEvent(e)}),t[tf])}function td(){_.call(this),this.i=new tn(this),this.P=this,this.I=null}function tg(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new S(e,t);else if(e instanceof S)e.target=e.target||t;else{var r=e;te(e=new S(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var a=e.g=n[s];r=tm(a,i,!0,e)&&r}if(r=tm(a=e.g=t,i,!0,e)&&r,r=tm(a,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=tm(a=e.g=n[s],i,!1,e)&&r}function tm(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var a=e[s];if(a&&!a.ba&&a.capture==n){var o=a.listener,l=a.ha||a.src;a.ea&&ti(t.i,a),r=!1!==o.call(l,i)&&r}}return r&&!i.defaultPrevented}w(td,_),td.prototype[q]=!0,td.prototype.removeEventListener=function(t,e,n,i){!function t(e,n,i,r,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)t(e,n[a],i,r,s);else(r=g(r)?!!r.capture:!!r,i=tp(i),e&&e[q])?(e=e.i,(n=String(n).toString())in e.g&&-1<(i=tr(a=e.g[n],i,r,s))&&(Y(a[i]),Array.prototype.splice.call(a,i,1),0==a.length&&(delete e.g[n],e.h--))):e&&(e=tc(e))&&(n=e.g[n.toString()],e=-1,n&&(e=tr(n,i,r,s)),(i=-1<e?n[e]:null)&&tl(i))}(this,t,e,n,i)},td.prototype.M=function(){if(td.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Y(n[i]);delete e.g[t],e.h--}}this.I=null},td.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},td.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var ty=f.JSON.stringify,tb=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new tv,t=>t.reset());class tv{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function tw(t,e){var n;a||(n=f.Promise.resolve(void 0),a=function(){n.then(tI)}),t_||(a(),t_=!0),tE.add(t,e)}var t_=!1,tE=new class{constructor(){this.h=this.g=null}add(t,e){let n=tb.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function tI(){let t;for(;t=null,(e=tE).g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),n=t;){try{n.h.call(n.g)}catch(t){!function(t){f.setTimeout(()=>{throw t},0)}(t)}var e,n,i=tb;i.j(n),100>i.h&&(i.h++,n.next=i.g,i.g=n)}t_=!1}function tT(t,e){td.call(this),this.h=t||1,this.g=e||f,this.j=b(this.lb,this),this.l=Date.now()}function tS(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function tC(t,e,n){if("function"==typeof t)n&&(t=b(t,n));else if(t&&"function"==typeof t.handleEvent)t=b(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:f.setTimeout(t,e||0)}w(tT,td),(l=tT.prototype).ca=!1,l.R=null,l.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),tg(this,"tick"),this.ca&&(tS(this),this.start()))}},l.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},l.M=function(){tT.X.M.call(this),tS(this),delete this.g};class tA extends _{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:function t(e){e.g=tC(()=>{e.g=null,e.i&&(e.i=!1,t(e))},e.j);let n=e.h;e.h=null,e.m.apply(null,n)}(this)}M(){super.M(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tO(t){_.call(this),this.h=t,this.g={}}w(tO,_);var tD=[];function tR(t,e,n,i){Array.isArray(n)||(n&&(tD[0]=n.toString()),n=tD);for(var r=0;r<n.length;r++){var s=function t(e,n,i,r,s){if(r&&r.once)return function t(e,n,i,r,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)t(e,n[a],i,r,s);return null}return i=tp(i),e&&e[q]?e.O(n,i,g(r)?!!r.capture:!!r,s):to(e,n,i,!0,r,s)}(e,n,i,r,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)t(e,n[a],i,r,s);return null}return i=tp(i),e&&e[q]?e.N(n,i,g(r)?!!r.capture:!!r,s):to(e,n,i,!1,r,s)}(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function tk(t){Z(t.g,function(t,e){this.g.hasOwnProperty(e)&&tl(t)},t),t.g={}}function tN(){this.g=!0}function tL(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<r.length;a++)r[a]=""}}}}return ty(n)}catch(t){return e}}(t,n)+(i?" "+i:"")})}tO.prototype.M=function(){tO.X.M.call(this),tk(this)},tO.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},tN.prototype.Aa=function(){this.g=!1},tN.prototype.info=function(){};var tP={},tx=null;function tj(){return tx=tx||new td}function tM(t){S.call(this,tP.Pa,t)}function tU(t){let e=tj();tg(e,new tM(e))}function tB(t,e){S.call(this,tP.STAT_EVENT,t),this.stat=e}function tF(t){let e=tj();tg(e,new tB(e,t))}function t$(t,e){S.call(this,tP.Qa,t),this.size=e}function tH(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){t()},e)}tP.Pa="serverreachability",w(tM,S),tP.STAT_EVENT="statevent",w(tB,S),tP.Qa="timingevent",w(t$,S);var tV={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},tz={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function tX(){}function tW(t){return t.h||(t.h=t.i())}function tK(){}tX.prototype.h=null;var tq={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function tJ(){S.call(this,"d")}function tG(){S.call(this,"c")}function tY(){}function tZ(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new tO(this),this.O=t0,t=j?125:void 0,this.T=new tT(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new tQ}function tQ(){this.i=null,this.g="",this.h=!1}w(tJ,S),w(tG,S),w(tY,tX),tY.prototype.g=function(){return new XMLHttpRequest},tY.prototype.i=function(){return{}},o=new tY;var t0=45e3,t1={},t2={};function t4(t,e,n){t.K=1,t.v=ec(ea(e)),t.s=n,t.P=!0,t3(t,null)}function t3(t,e){t.F=Date.now(),t8(t),t.A=ea(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),eT(n.i,"t",i),t.C=0,n=t.l.H,t.h=new tQ,t.g=np(t.l,n?e:null,!t.s),0<t.N&&(t.L=new tA(b(t.La,t,t.g),t.N)),tR(t.S,t.g,"readystatechange",t.ib),e=t.H?Q(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),tU(),function(t,e,n,i,r,s){t.info(function(){if(t.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var h=o[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");a=2<=c.length&&"type"==c[1]?a+(u+"=")+h+"&":a+(u+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+a})}(t.j,t.u,t.A,t.m,t.U,t.s)}function t6(t){return!!t.g&&"GET"==t.u&&2!=t.K&&t.l.Da}function t5(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if((r=function(t,e){var n=t.C,i=e.indexOf("\n",n);return -1==i?t2:isNaN(n=Number(e.substring(n,i)))?t1:(i+=1)+n>e.length?t2:(e=e.substr(i,n),t.C=i+n,e)}(t,n))==t2){4==e&&(t.o=4,tF(14),i=!1),tL(t.j,t.m,null,"[Incomplete Response]");break}else if(r==t1){t.o=4,tF(15),tL(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else tL(t.j,t.m,r,null),en(t,r);t6(t)&&r!=t2&&r!=t1&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,tF(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ns(e),e.K=!0,tF(11))):(tL(t.j,t.m,n,"[Invalid Chunked Response]"),ee(t),et(t))}function t8(t){t.V=Date.now()+t.O,t9(t,t.O)}function t9(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=tH(b(t.gb,t),e)}function t7(t){t.B&&(f.clearTimeout(t.B),t.B=null)}function et(t){0==t.l.G||t.I||nl(t.l,t)}function ee(t){t7(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,tS(t.T),tk(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function en(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||ek(n.h,t))){if(!t.J&&ek(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(n.g.F+3e3<t.F)no(n),e8(n);else break t}nr(n),tF(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=tH(b(n.cb,n),6e3));if(1>=eR(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else nu(n,11)}else if((t.J||n.g==t)&&no(n),!A(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let o=r[e];if(n.T=o[0],o=o[1],2==n.G){if("c"==o[0]){n.I=o[1],n.ka=o[2];let e=o[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));let r=o[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;let h=t.g;if(h){let t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(eN(s,s.h),s.h=null))}if(i.D){let t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,eu(i.F,i.D,t))}}if(n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),(i=n).sa=nf(i,i.H?i.ka:null,i.V),t.J){eL(i.h,t);var a=i.J;a&&t.setTimeout(a),t.B&&(t7(t),t8(t)),i.g=t}else ni(i);0<n.i.length&&e7(n)}else"stop"!=o[0]&&"close"!=o[0]||nu(n,7)}else 3==n.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?nu(n,7):e5(n):"noop"!=o[0]&&n.l&&n.l.wa(o),n.A=0)}}tU(4)}catch(t){}}function ei(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(d(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}for(let i in e=[],n=0,t)e[n++]=i;return e}}}(t),i=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(l=tZ.prototype).setTimeout=function(t){this.O=t},l.ib=function(t){t=t.target;let e=this.L;e&&3==e0(t)?e.l():this.La(t)},l.La=function(t){try{if(t==this.g)t:{let u=e0(this.g);var e=this.g.Ea();let c=this.g.aa();if(!(3>u)&&(3!=u||j||this.g&&(this.h.h||this.g.fa()||e1(this.g)))){this.I||4!=u||7==e||(8==e||0>=c?tU(3):tU(2)),t7(this);var n=this.g.aa();this.Y=n;e:if(t6(this)){var i=e1(this.g);t="";var r=i.length,s=4==e0(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ee(this),et(this);var a="";break e}this.h.i=new f.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.fa();if(this.i=200==n,function(t,e,n,i,r,s,a){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+a})}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(o)){var h=o;break e}}h=null}if(n=h)tL(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,en(this,n);else{this.i=!1,this.o=3,tF(12),ee(this),et(this);break t}}this.P?(t5(this,u,a),j&&this.i&&3==u&&(tR(this.S,this.T,"tick",this.hb),this.T.start())):(tL(this.j,this.m,a,null),en(this,a)),4==u&&ee(this),this.i&&!this.I&&(4==u?nl(this.l,this):(this.i=!1,t8(this)))}else 400==n&&0<a.indexOf("Unknown SID")?(this.o=3,tF(12)):(this.o=0,tF(13)),ee(this),et(this)}}}catch(t){}finally{}},l.hb=function(){if(this.g){var t=e0(this.g),e=this.g.fa();this.C<e.length&&(t7(this),t5(this,t,e),this.i&&4!=t&&t8(this))}},l.cancel=function(){this.I=!0,ee(this)},l.gb=function(){this.B=null;let t=Date.now();0<=t-this.V?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.j,this.A),2!=this.K&&(tU(),tF(17)),ee(this),this.o=2,et(this)):t9(this,this.V-t)};var er=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function es(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof es){this.h=void 0!==e?e:t.h,eo(this,t.j),this.s=t.s,this.g=t.g,el(this,t.m),this.l=t.l,e=t.i;var n=new ew;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),eh(this,n),this.o=t.o}else t&&(n=String(t).match(er))?(this.h=!!e,eo(this,n[1]||"",!0),this.s=ef(n[2]||""),this.g=ef(n[3]||"",!0),el(this,n[4]),this.l=ef(n[5]||"",!0),eh(this,n[6]||"",!0),this.o=ef(n[7]||"")):(this.h=!!e,this.i=new ew(null,this.h))}function ea(t){return new es(t)}function eo(t,e,n){t.j=n?ef(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function el(t,e){if(e){if(isNaN(e=Number(e))||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function eh(t,e,n){var i,r;e instanceof ew?(t.i=e,i=t.i,(r=t.h)&&!i.j&&(e_(i),i.i=null,i.g.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(eE(this,e),eT(this,n,t))},i)),i.j=r):(n||(e=ep(e,eb)),t.i=new ew(e,t.h))}function eu(t,e,n){t.i.set(e,n)}function ec(t){return eu(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ef(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ep(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,ed),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ed(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}es.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ep(e,eg,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ep(e,eg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ep(n,"/"==n.charAt(0)?ey:em,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ep(n,ev)),t.join("")};var eg=/[#\/\?@]/g,em=/[#\?:]/g,ey=/[#\?]/g,eb=/[#\?@]/g,ev=/#/g;function ew(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function e_(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function eE(t,e){e_(t),e=eS(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function eI(t,e){return e_(t),e=eS(t,e),t.g.has(e)}function eT(t,e,n){eE(t,e),0<n.length&&(t.i=null,t.g.set(eS(t,e),I(n)),t.h+=n.length)}function eS(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(l=ew.prototype).add=function(t,e){e_(this),this.i=null,t=eS(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},l.forEach=function(t,e){e_(this),this.g.forEach(function(n,i){n.forEach(function(n){t.call(e,n,i,this)},this)},this)},l.oa=function(){e_(this);let t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){let r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},l.W=function(t){e_(this);let e=[];if("string"==typeof t)eI(this,t)&&(e=e.concat(this.g.get(eS(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},l.set=function(t,e){return e_(this),this.i=null,eI(this,t=eS(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},l.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},l.toString=function(){if(this.i)return this.i;if(!this.g)return"";let t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];let s=encodeURIComponent(String(i)),a=this.W(i);for(i=0;i<a.length;i++){var r=s;""!==a[i]&&(r+="="+encodeURIComponent(String(a[i]))),t.push(r)}}return this.i=t.join("&")};var eC=class{constructor(t,e){this.h=t,this.g=e}};function eA(t){this.l=t||eO,t=f.PerformanceNavigationTiming?0<(t=f.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(f.g&&f.g.Ga&&f.g.Ga()&&f.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eO=10;function eD(t){return!!t.h||!!t.g&&t.g.size>=t.j}function eR(t){return t.h?1:t.g?t.g.size:0}function ek(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function eN(t,e){t.g?t.g.add(e):t.h=e}function eL(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function eP(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(let n of t.g.values())e=e.concat(n.D);return e}return I(t.i)}function ex(){}function ej(){this.g=new ex}function eM(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function eU(t){this.l=t.ac||null,this.j=t.jb||!1}function eB(t,e){td.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=eF,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}eA.prototype.cancel=function(){if(this.i=eP(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let t of this.g.values())t.cancel();this.g.clear()}},ex.prototype.stringify=function(t){return f.JSON.stringify(t,void 0)},ex.prototype.parse=function(t){return f.JSON.parse(t,void 0)},w(eU,tX),eU.prototype.g=function(){return new eB(this.l,this.j)},eU.prototype.i=(i={},function(){return i}),w(eB,td);var eF=0;function e$(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function eH(t){t.readyState=4,t.l=null,t.j=null,t.A=null,eV(t)}function eV(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(l=eB.prototype).open=function(t,e){if(this.readyState!=eF)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,eV(this)},l.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||f).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},l.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,eH(this)),this.readyState=eF},l.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,eV(this)),this.g&&(this.readyState=3,eV(this),this.g))){if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==f.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;e$(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))}},l.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?eH(this):eV(this),3==this.readyState&&e$(this)}},l.Va=function(t){this.g&&(this.response=this.responseText=t,eH(this))},l.Ua=function(t){this.g&&(this.response=t,eH(this))},l.ga=function(){this.g&&eH(this)},l.setRequestHeader=function(t,e){this.v.append(t,e)},l.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},l.getAllResponseHeaders=function(){if(!this.h)return"";let t=[],e=this.h.entries();for(var n=e.next();!n.done;)t.push((n=n.value)[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(eB.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ez=f.JSON.parse;function eX(t){td.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=eW,this.K=this.L=!1}w(eX,td);var eW="",eK=/^https?$/i,eq=["POST","PUT"];function eJ(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,eG(t),eZ(t)}function eG(t){t.D||(t.D=!0,tg(t,"complete"),tg(t,"error"))}function eY(t){if(t.h&&void 0!==c&&(!t.C[1]||4!=e0(t)||2!=t.aa())){if(t.v&&4==e0(t))tC(t.Ha,0,t);else if(tg(t,"readystatechange"),4==e0(t)){t.h=!1;try{let o=t.aa();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e,n,i=!0;break t;default:i=!1}if(!(e=i)){if(n=0===o){var r=String(t.H).match(er)[1]||null;if(!r&&f.self&&f.self.location){var s=f.self.location.protocol;r=s.substr(0,s.length-1)}n=!eK.test(r?r.toLowerCase():"")}e=n}if(e)tg(t,"complete"),tg(t,"success");else{t.m=6;try{var a=2<e0(t)?t.g.statusText:""}catch(t){a=""}t.j=a+" ["+t.aa()+"]",eG(t)}}finally{eZ(t)}}}}function eZ(t,e){if(t.g){eQ(t);let n=t.g,i=t.C[0]?p:null;t.g=null,t.C=null,e||tg(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function eQ(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(f.clearTimeout(t.A),t.A=null)}function e0(t){return t.g?t.g.readyState:0}function e1(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case eW:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function e2(t){let e="";return Z(t,function(t,n){e+=n+":"+t+"\r\n"}),e}function e4(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=e2(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):eu(t,e,n))}function e3(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function e6(t){this.Ca=0,this.i=[],this.j=new tN,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=e3("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=e3("baseRetryDelayMs",5e3,t),this.bb=e3("retryDelaySeedMs",1e4,t),this.$a=e3("forwardChannelMaxRetries",2,t),this.ta=e3("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new eA(t&&t.concurrentRequestLimit),this.Fa=new ej,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function e5(t){if(e9(t),3==t.G){var e=t.U++,n=ea(t.F);eu(n,"SID",t.I),eu(n,"RID",e),eu(n,"TYPE","terminate"),ne(t,n),(e=new tZ(t,t.j,e,void 0)).K=2,e.v=ec(ea(n)),n=!1,f.navigator&&f.navigator.sendBeacon&&(n=f.navigator.sendBeacon(e.v.toString(),"")),!n&&f.Image&&((new Image).src=e.v,n=!0),n||(e.g=np(e.l,null),e.g.da(e.v)),e.F=Date.now(),t8(e)}nc(t)}function e8(t){t.g&&(ns(t),t.g.cancel(),t.g=null)}function e9(t){e8(t),t.u&&(f.clearTimeout(t.u),t.u=null),no(t),t.h.cancel(),t.m&&("number"==typeof t.m&&f.clearTimeout(t.m),t.m=null)}function e7(t){eD(t.h)||t.m||(t.m=!0,tw(t.Ja,t),t.C=0)}function nt(t,e){var n;n=e?e.m:t.U++;let i=ea(t.F);eu(i,"SID",t.I),eu(i,"RID",n),eu(i,"AID",t.T),ne(t,i),t.o&&t.s&&e4(i,t.o,t.s),n=new tZ(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=nn(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),eN(t.h,n),t4(n,i,e)}function ne(t,e){t.ia&&Z(t.ia,function(t,n){eu(e,n,t)}),t.l&&ei({},function(t,n){eu(e,n,t)})}function nn(t,e,n){n=Math.min(t.i.length,n);var i=t.l?b(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){let t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let a=0;a<n;a++){let n=r[a].h,o=r[a].g;if(0>(n-=e))e=Math.max(0,r[a].h-100),s=!1;else try{!function(t,e,n){let i=n||"";try{ei(t,function(t,n){let r=t;g(t)&&(r=ty(t)),e.push(i+n+"="+encodeURIComponent(r))})}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}(o,t,"req"+n+"_")}catch(t){i&&i(o)}}if(s){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function ni(t){t.g||t.u||(t.Z=1,tw(t.Ia,t),t.A=0)}function nr(t){return!t.g&&!t.u&&!(3<=t.A)&&(t.Z++,t.u=tH(b(t.Ia,t),nh(t,t.A)),t.A++,!0)}function ns(t){null!=t.B&&(f.clearTimeout(t.B),t.B=null)}function na(t){t.g=new tZ(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=ea(t.sa);eu(e,"RID","rpc"),eu(e,"SID",t.I),eu(e,"CI",t.L?"0":"1"),eu(e,"AID",t.T),eu(e,"TYPE","xmlhttp"),ne(t,e),t.o&&t.s&&e4(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ec(ea(e)),n.s=null,n.P=!0,t3(n,t)}function no(t){null!=t.v&&(f.clearTimeout(t.v),t.v=null)}function nl(t,e){var n=null;if(t.g==e){no(t),ns(t),t.g=null;var i=2}else{if(!ek(t.h,e))return;n=e.D,eL(t.h,e),i=1}if(0!=t.G){if(t.pa=e.Y,e.i){if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r,s,a=t.C;tg(i=tj(),new t$(i,n)),e7(t)}else ni(t)}else if(3==(a=e.o)||0==a&&0<t.pa||!(1==i&&(r=t,s=e,!(eR(r.h)>=r.h.j-(r.m?1:0))&&(r.m?(r.i=s.D.concat(r.i),!0):1!=r.G&&2!=r.G&&!(r.C>=(r.Za?0:r.$a))&&(r.m=tH(b(r.Ja,r,s),nh(r,r.C)),r.C++,!0)))||2==i&&nr(t)))switch(n&&0<n.length&&((e=t.h).i=e.i.concat(n)),a){case 1:nu(t,5);break;case 4:nu(t,10);break;case 3:nu(t,6);break;default:nu(t,2)}}}function nh(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function nu(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=b(t.kb,t);n||(n=new es("//www.google.com/images/cleardot.gif"),f.location&&"http"==f.location.protocol||eo(n,"https"),ec(n)),function(t,e){let n=new tN;if(f.Image){let i=new Image;i.onload=v(eM,n,i,"TestLoadImage: loaded",!0,e),i.onerror=v(eM,n,i,"TestLoadImage: error",!1,e),i.onabort=v(eM,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=v(eM,n,i,"TestLoadImage: timeout",!1,e),f.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}(n.toString(),i)}else tF(2);t.G=0,t.l&&t.l.va(e),nc(t),e9(t)}function nc(t){if(t.G=0,t.la=[],t.l){let e=eP(t.h);(0!=e.length||0!=t.i.length)&&(T(t.la,e),T(t.la,t.i),t.h.i.length=0,I(t.i),t.i.length=0),t.l.ua()}}function nf(t,e,n){var i=n instanceof es?ea(n):new es(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),el(i,i.m);else{var r=f.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new es(null,void 0);i&&eo(s,i),e&&(s.g=e),r&&el(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&eu(i,n,e),eu(i,"VER",t.ma),ne(t,i),i}function np(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=new eX(n&&t.Da&&!t.ra?new eU({jb:!0}):t.ra)).Ka(t.H),e}function nd(){}function ng(){if(P&&!(10<=Number(X)))throw Error("Environmental error: no available transport.")}function nm(t,e){td.call(this),this.g=new e6(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!A(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!A(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&e in(t=this.h)&&delete t[e]),this.j=new nv(this)}function ny(t){tJ.call(this);var e=t.__sm__;if(e){t:{for(let n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function nb(){tG.call(this),this.status=1}function nv(t){this.g=t}(l=eX.prototype).Ka=function(t){this.L=t},l.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():o.g(),this.C=this.u?tW(this.u):tW(o),this.g.onreadystatechange=b(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){eJ(this,t);return}if(t=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let t of i.keys())n.set(t,i.get(t));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[r,a]of(i=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),s=f.FormData&&t instanceof f.FormData,!(0<=E(eq,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(r,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var a,l;eQ(this),0<this.B&&((this.K=(a=this.g,P&&(l=z,Object.prototype.hasOwnProperty.call(l,9)?l[9]:l[9]=function(){let t=0,e=O(String(r)).split("."),n=O("9").split("."),i=Math.max(e.length,n.length);for(let r=0;0==t&&r<i;r++){var s=e[r]||"",a=n[r]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==s[0].length&&0==a[0].length)break;t=D(0==s[1].length?0:parseInt(s[1],10),0==a[1].length?0:parseInt(a[1],10))||D(0==s[2].length,0==a[2].length)||D(s[2],a[2]),s=s[3],a=a[3]}while(0==t)}return 0<=t}(9))&&"number"==typeof a.timeout&&void 0!==a.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=b(this.qa,this)):this.A=tC(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){eJ(this,t)}},l.qa=function(){void 0!==c&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tg(this,"timeout"),this.abort(8))},l.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,tg(this,"complete"),tg(this,"abort"),eZ(this))},l.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),eZ(this,!0)),eX.X.M.call(this)},l.Ha=function(){this.s||(this.F||this.v||this.l?eY(this):this.fb())},l.fb=function(){eY(this)},l.aa=function(){try{return 2<e0(this)?this.g.status:-1}catch(t){return -1}},l.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},l.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ez(e)}},l.Ea=function(){return this.m},l.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(l=e6.prototype).ma=8,l.G=1,l.Ja=function(t){if(this.m){if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;let r=new tZ(this,this.j,t,void 0),s=this.s;if(this.S&&(s?te(s=Q(s),this.S):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){e:{var i=this.i[n];if("__data__"in i.g&&"string"==typeof(i=i.g.__data__)){i=i.length;break e}i=void 0}if(void 0===i)break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=nn(this,r,e),eu(n=ea(this.F),"RID",t),eu(n,"CVER",22),this.D&&eu(n,"X-HTTP-Session-Id",this.D),ne(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(e2(s)))+"&"+e:this.o&&e4(n,this.o,s)),eN(this.h,r),this.Ya&&eu(n,"TYPE","init"),this.O?(eu(n,"$req",e),eu(n,"SID","null"),r.Z=!0,t4(r,n,null)):t4(r,n,e),this.G=2}}else 3==this.G&&(t?nt(this,t):0==this.i.length||eD(this.h)||nt(this))}},l.Ia=function(){if(this.u=null,na(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=tH(b(this.eb,this),t)}},l.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,tF(10),e8(this),na(this))},l.cb=function(){null!=this.v&&(this.v=null,e8(this),nr(this),tF(19))},l.kb=function(t){t?(this.j.info("Successfully pinged google.com"),tF(2)):(this.j.info("Failed to ping google.com"),tF(1))},(l=nd.prototype).xa=function(){},l.wa=function(){},l.va=function(){},l.ua=function(){},l.Ra=function(){},ng.prototype.g=function(t,e){return new nm(t,e)},w(nm,td),nm.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;tF(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=nf(t,null,t.V),e7(t)},nm.prototype.close=function(){e5(this.g)},nm.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=ty(t),t=n);e.i.push(new eC(e.ab++,t)),3==e.G&&e7(e)},nm.prototype.M=function(){this.g.l=null,delete this.j,e5(this.g),delete this.g,nm.X.M.call(this)},w(ny,tJ),w(nb,tG),w(nv,nd),nv.prototype.xa=function(){tg(this.g,"a")},nv.prototype.wa=function(t){tg(this.g,new ny(t))},nv.prototype.va=function(t){tg(this.g,new nb)},nv.prototype.ua=function(){tg(this.g,"b")},ng.prototype.createWebChannel=ng.prototype.g,nm.prototype.send=nm.prototype.u,nm.prototype.open=nm.prototype.m,nm.prototype.close=nm.prototype.close,tV.NO_ERROR=0,tV.TIMEOUT=8,tV.HTTP_ERROR=6,tz.COMPLETE="complete",tK.EventType=tq,tq.OPEN="a",tq.CLOSE="b",tq.ERROR="c",tq.MESSAGE="d",td.prototype.listen=td.prototype.N,eX.prototype.listenOnce=eX.prototype.O,eX.prototype.getLastError=eX.prototype.Oa,eX.prototype.getLastErrorCode=eX.prototype.Ea,eX.prototype.getStatus=eX.prototype.aa,eX.prototype.getResponseJson=eX.prototype.Sa,eX.prototype.getResponseText=eX.prototype.fa,eX.prototype.send=eX.prototype.da,eX.prototype.setWithCredentials=eX.prototype.Ka;var nw=u.createWebChannelTransport=function(){return new ng},n_=u.getStatEventTarget=function(){return tj()},nE=u.ErrorCode=tV,nI=u.EventType=tz,nT=u.Event=tP,nS=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},nC=u.FetchXmlHttpFactory=eU,nA=u.WebChannel=tK,nO=u.XhrIo=eX},1163:function(t,e,n){t.exports=n(1587)},2238:function(t,e,n){"use strict";n.d(e,{Jn:function(){return v},KN:function(){return E},Mq:function(){return _},Xd:function(){return g},ZF:function(){return w},qX:function(){return m}});var i=n(8463),r=n(3333),s=n(4444),a=n(6531);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t){this.container=t}getPlatformInfoString(){let t=this.container.getProviders();return t.map(t=>{if(!function(t){let e=t.getComponent();return(null==e?void 0:e.type)==="VERSION"}(t))return null;{let e=t.getImmediate();return`${e.library}/${e.version}`}}).filter(t=>t).join(" ")}}let l="@firebase/app",h="0.9.3",u=new r.Yd("@firebase/app"),c="[DEFAULT]",f={[l]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,d=new Map;function g(t){let e=t.name;if(d.has(e))return u.debug(`There were multiple attempts to register component ${e}.`),!1;for(let n of(d.set(e,t),p.values()))!function(t,e){try{t.container.addComponent(e)}catch(n){u.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}(n,t);return!0}function m(t,e){let n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}let y=new s.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw y.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v="9.17.1";function w(t,e={}){let n=t;if("object"!=typeof e){let t=e;e={name:t}}let r=Object.assign({name:c,automaticDataCollectionEnabled:!1},e),a=r.name;if("string"!=typeof a||!a)throw y.create("bad-app-name",{appName:String(a)});if(n||(n=(0,s.aH)()),!n)throw y.create("no-options");let o=p.get(a);if(o){if((0,s.vZ)(n,o.options)&&(0,s.vZ)(r,o.config))return o;throw y.create("duplicate-app",{appName:a})}let l=new i.H0(a);for(let t of d.values())l.addComponent(t);let h=new b(n,r,l);return p.set(a,h),h}function _(t=c){let e=p.get(t);if(!e&&t===c)return w();if(!e)throw y.create("no-app",{appName:t});return e}function E(t,e,n){var r;let s=null!==(r=f[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);let a=s.match(/\s|\//),o=e.match(/\s|\//);if(a||o){let t=[`Unable to register library "${s}" with version "${e}":`];a&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),u.warn(t.join(" "));return}g(new i.wA(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}let I="firebase-heartbeat-store",T=null;function S(){return T||(T=(0,a.X3)("firebase-heartbeat-database",1,{upgrade:(t,e)=>{0===e&&t.createObjectStore(I)}}).catch(t=>{throw y.create("idb-open",{originalErrorMessage:t.message})})),T}async function C(t){try{let e=await S();return e.transaction(I).objectStore(I).get(O(t))}catch(t){if(t instanceof s.ZR)u.warn(t.message);else{let e=y.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});u.warn(e.message)}}}async function A(t,e){try{let n=await S(),i=n.transaction(I,"readwrite"),r=i.objectStore(I);return await r.put(e,O(t)),i.done}catch(t){if(t instanceof s.ZR)u.warn(t.message);else{let e=y.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});u.warn(e.message)}}}function O(t){return`${t.name}!${t.options.appId}`}class D{constructor(t){this.container=t,this._heartbeatsCache=null;let e=this.container.getProvider("app").getImmediate();this._storage=new k(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){let t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=R();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(t=>t.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{let e=new Date(t.date).valueOf(),n=Date.now();return n-e<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let t=R(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){let n=[],i=t.slice();for(let r of t){let t=n.find(t=>t.agent===r.agent);if(t){if(t.dates.push(r.date),N(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),N(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function R(){let t=new Date;return t.toISOString().substring(0,10)}class k{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then(()=>!0).catch(()=>!1)}async read(){let t=await this._canUseIndexedDBPromise;if(!t)return{heartbeats:[]};{let t=await C(this.app);return t||{heartbeats:[]}}}async overwrite(t){var e;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return A(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return A(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function N(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}g(new i.wA("platform-logger",t=>new o(t),"PRIVATE")),g(new i.wA("heartbeat",t=>new D(t),"PRIVATE")),E(l,h,""),E(l,h,"esm2017"),E("fire-js","")},8463:function(t,e,n){"use strict";n.d(e,{H0:function(){return o},wA:function(){return r}});var i=n(4444);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){let e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){let t=new i.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;let n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if("EAGER"===t.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(let[t,e]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(t);try{let t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){let t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(let[t,e]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(t);n===r&&e.resolve(i)}return i}onInit(t,e){var n;let i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){let n=this.onInitCallbacks.get(e);if(n)for(let i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:t===s?void 0:t,options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t){this.name=t,this.providers=new Map}addComponent(t){let e=this.getProvider(t.name);if(e.isComponentSet())throw Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){let e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);let e=new a(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){"use strict";var i,r;n.d(e,{Yd:function(){return u},in:function(){return i}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(r=i||(i={}))[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT";let a={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,l={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},h=(t,e,...n)=>{if(e<t.logLevel)return;let i=new Date().toISOString(),r=l[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=h,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?a[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},3059:function(t,e,n){"use strict";let i,r,s,a;var o=n(2238),l=n(3333),h=n(4444),u=n(8463),c=n(6531);let f="@firebase/installations",p="0.6.3",d=`w:${p}`,g="FIS_v2",m=new h.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function y(t){return t instanceof h.ZR&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function v(t){return{token:t.token,requestStatus:2,expiresIn:Number(t.expiresIn.replace("s","000")),creationTime:Date.now()}}async function w(t,e){let n=await e.json(),i=n.error;return m.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function _({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}async function E(t){let e=await t();return e.status>=500&&e.status<600?t():e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I({appConfig:t,heartbeatServiceProvider:e},{fid:n}){let i=b(t),r=_(t),s=e.getImmediate({optional:!0});if(s){let t=await s.getHeartbeatsHeader();t&&r.append("x-firebase-client",t)}let a={fid:n,authVersion:g,appId:t.appId,sdkVersion:d},o={method:"POST",headers:r,body:JSON.stringify(a)},l=await E(()=>fetch(i,o));if(l.ok){let t=await l.json(),e={fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:v(t.authToken)};return e}throw await w("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let A=new Map;function O(t,e){let n=C(t);D(n,e),function(t,e){let n=(!R&&"BroadcastChannel"in self&&((R=new BroadcastChannel("[Firebase] FID Change")).onmessage=t=>{D(t.data.key,t.data.fid)}),R);n&&n.postMessage({key:t,fid:e}),0===A.size&&R&&(R.close(),R=null)}(n,e)}function D(t,e){let n=A.get(t);if(n)for(let t of n)t(e)}let R=null,k="firebase-installations-store",N=null;function L(){return N||(N=(0,c.X3)("firebase-installations-database",1,{upgrade:(t,e)=>{0===e&&t.createObjectStore(k)}})),N}async function P(t,e){let n=C(t),i=await L(),r=i.transaction(k,"readwrite"),s=r.objectStore(k),a=await s.get(n);return await s.put(e,n),await r.done,a&&a.fid===e.fid||O(t,e.fid),e}async function x(t){let e=C(t),n=await L(),i=n.transaction(k,"readwrite");await i.objectStore(k).delete(e),await i.done}async function j(t,e){let n=C(t),i=await L(),r=i.transaction(k,"readwrite"),s=r.objectStore(k),a=await s.get(n),o=e(a);return void 0===o?await s.delete(n):await s.put(o,n),await r.done,o&&(!a||a.fid!==o.fid)&&O(t,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M(t){let e;let n=await j(t.appConfig,n=>{let i=function(t){let e=t||{fid:function(){try{let t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;let n=function(t){let e=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){let e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}(t);return e.substr(0,22)}(t);return S.test(n)?n:""}catch(t){return""}}(),registrationStatus:0};return $(e)}(n),r=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){let t=Promise.reject(m.create("app-offline"));return{installationEntry:e,registrationPromise:t}}let n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=U(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:B(t)}:{installationEntry:e}}(t,i);return e=r.registrationPromise,r.installationEntry});return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function U(t,e){try{let n=await I(t,e);return P(t.appConfig,n)}catch(n){throw y(n)&&409===n.customData.serverCode?await x(t.appConfig):await P(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function B(t){let e=await F(t.appConfig);for(;1===e.registrationStatus;)await T(100),e=await F(t.appConfig);if(0===e.registrationStatus){let{installationEntry:e,registrationPromise:n}=await M(t);return n||e}return e}function F(t){return j(t,t=>{if(!t)throw m.create("installation-not-found");return $(t)})}function $(t){return 1===t.registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H({appConfig:t,heartbeatServiceProvider:e},n){let i=function(t,{fid:e}){return`${b(t)}/${e}/authTokens:generate`}(t,n),r=function(t,{refreshToken:e}){let n=_(t);return n.append("Authorization",`${g} ${e}`),n}(t,n),s=e.getImmediate({optional:!0});if(s){let t=await s.getHeartbeatsHeader();t&&r.append("x-firebase-client",t)}let a={installation:{sdkVersion:d,appId:t.appId}},o={method:"POST",headers:r,body:JSON.stringify(a)},l=await E(()=>fetch(i,o));if(l.ok){let t=await l.json(),e=v(t);return e}throw await w("Generate Auth Token",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(t,e=!1){let n;let i=await j(t.appConfig,i=>{var r;if(!K(i))throw m.create("not-registered");let s=i.authToken;if(!e&&2===(r=s).requestStatus&&!function(t){let e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+36e5}(r))return i;if(1===s.requestStatus)return n=z(t,e),i;{if(!navigator.onLine)throw m.create("app-offline");let e=function(t){let e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(i);return n=W(t,e),e}}),r=n?await n:i.authToken;return r}async function z(t,e){let n=await X(t.appConfig);for(;1===n.authToken.requestStatus;)await T(100),n=await X(t.appConfig);let i=n.authToken;return 0===i.requestStatus?V(t,e):i}function X(t){return j(t,t=>{if(!K(t))throw m.create("not-registered");let e=t.authToken;return 1===e.requestStatus&&e.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function W(t,e){try{let n=await H(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await P(t.appConfig,i),n}catch(n){if(y(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await x(t.appConfig);else{let n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await P(t.appConfig,n)}throw n}}function K(t){return void 0!==t&&2===t.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(t){let{installationEntry:e,registrationPromise:n}=await M(t);return n?n.catch(console.error):V(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(t,e=!1){await G(t);let n=await V(t,e);return n.token}async function G(t){let{registrationPromise:e}=await M(t);e&&await e}function Y(t){return m.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z="installations",Q=t=>{let e=t.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){if(!t||!t.options)throw Y("App Configuration");if(!t.name)throw Y("App Name");for(let e of["projectId","apiKey","appId"])if(!t.options[e])throw Y(e);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),i=(0,o.qX)(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},tt=t=>{let e=t.getProvider("app").getImmediate(),n=(0,o.qX)(e,Z).getImmediate();return{getId:()=>q(n),getToken:t=>J(n,t)}};(0,o.Xd)(new u.wA(Z,Q,"PUBLIC")),(0,o.Xd)(new u.wA("installations-internal",tt,"PRIVATE")),(0,o.KN)(f,p),(0,o.KN)(f,p,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let te="analytics",tn="https://www.googletagmanager.com/gtag/js",ti=new l.Yd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t){return Promise.all(t.map(t=>t.catch(t=>t)))}async function ts(t,e,n,i,r,s){let a=i[r];try{if(a)await e[a];else{let t=await tr(n),i=t.find(t=>t.measurementId===r);i&&await e[i.appId]}}catch(t){ti.error(t)}t("config",r,s)}async function ta(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let t=r.send_to;Array.isArray(t)||(t=[t]);let i=await tr(n);for(let n of t){let t=i.find(t=>t.measurementId===n),r=t&&e[t.appId];if(r)s.push(r);else{s=[];break}}}0===s.length&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(t){ti.error(t)}}let to=new h.LL("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'}),tl=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};async function th(t){var e;let{appId:n,apiKey:i}=t,r={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":i})},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),a=await fetch(s,r);if(200!==a.status&&304!==a.status){let t="";try{let n=await a.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw to.create("config-fetch-failed",{httpStatus:a.status,responseMessage:t})}return a.json()}async function tu(t,e=tl,n){let{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw to.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw to.create("no-api-key")}let a=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new tf;return setTimeout(async()=>{o.abort()},void 0!==n?n:6e4),tc({appId:i,apiKey:r,measurementId:s},a,o,e)}async function tc(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=tl){var s;let{appId:a,measurementId:o}=t;try{await new Promise((t,n)=>{let r=Math.max(e-Date.now(),0),s=setTimeout(t,r);i.addEventListener(()=>{clearTimeout(s),n(to.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}catch(t){if(o)return ti.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==t?void 0:t.message}]`),{appId:a,measurementId:o};throw t}try{let e=await th(t);return r.deleteThrottleMetadata(a),e}catch(u){if(!function(t){if(!(t instanceof h.ZR)||!t.customData)return!1;let e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(u)){if(r.deleteThrottleMetadata(a),o)return ti.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==u?void 0:u.message}]`),{appId:a,measurementId:o};throw u}let e=503===Number(null===(s=null==u?void 0:u.customData)||void 0===s?void 0:s.httpStatus)?(0,h.$s)(n,r.intervalMillis,30):(0,h.$s)(n,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+e,backoffCount:n+1};return r.setThrottleMetadata(a,l),ti.debug(`Calling attemptFetch again in ${e} millis`),tc(t,l,i,r)}}class tf{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function tp(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}{let r=await e,s=Object.assign(Object.assign({},i),{send_to:r});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function td(){if(!(0,h.hl)())return ti.warn(to.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,h.eu)()}catch(t){return ti.warn(to.create("indexeddb-unavailable",{errorInfo:null==t?void 0:t.toString()}).message),!1}return!0}async function tg(t,e,n,s,a,o,l){var h;let u=tu(t);u.then(e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&ti.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(t=>ti.error(t)),e.push(u);let c=td().then(t=>t?s.getId():void 0),[f,p]=await Promise.all([u,c]);!function(t){let e=window.document.getElementsByTagName("script");for(let n of Object.values(e))if(n.src&&n.src.includes(tn)&&n.src.includes(t))return n;return null}(o)&&function(t,e){let n=document.createElement("script");n.src=`${tn}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}(o,f.measurementId),r&&(a("consent","default",r),r=void 0),a("js",new Date);let d=null!==(h=null==l?void 0:l.config)&&void 0!==h?h:{};return d.origin="firebase",d.update=!0,null!=p&&(d.firebase_id=p),a("config",f.measurementId,d),i&&(a("set",i),i=void 0),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(t){this.app=t}_delete(){return delete ty[this.app.options.appId],Promise.resolve()}}let ty={},tb=[],tv={},tw="dataLayer",t_=!1,tE="@firebase/analytics",tI="0.9.3";(0,o.Xd)(new u.wA(te,(t,{options:e})=>{let n=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return function(t,e,n){!function(){let t=[];if((0,h.ru)()&&t.push("This is a browser extension environment."),(0,h.zI)()||t.push("Cookies are not available."),t.length>0){let e=t.map((t,e)=>`(${e+1}) ${t}`).join(" "),n=to.create("invalid-analytics-context",{errorInfo:e});ti.warn(n.message)}}();let i=t.options.appId;if(!i)throw to.create("no-app-id");if(!t.options.apiKey){if(t.options.measurementId)ti.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw to.create("no-api-key")}if(null!=ty[i])throw to.create("already-exists",{id:i});if(!t_){var r,o;let t,e;t=[],Array.isArray(window[tw])?t=window[tw]:window[tw]=t;let{wrappedGtag:n,gtagCore:i}=(r="gtag",e=function(...t){window[tw].push(arguments)},window[r]&&"function"==typeof window[r]&&(e=window[r]),window[r]=(o=e,async function(t,e,n){try{"event"===t?await ta(o,ty,tb,e,n):"config"===t?await ts(o,ty,tb,tv,e,n):"consent"===t?o("consent","update",n):o("set",e)}catch(t){ti.error(t)}}),{gtagCore:e,wrappedGtag:window[r]});a=n,s=i,t_=!0}ty[i]=tg(t,tb,tv,e,s,tw,n);let l=new tm(t);return l}(n,i,e)},"PUBLIC")),(0,o.Xd)(new u.wA("analytics-internal",function(t){try{let e=t.getProvider(te).getImmediate();return{logEvent:(t,n,i)=>(function(t,e,n,i){tp(a,ty[(t=(0,h.m9)(t)).app.options.appId],e,n,i).catch(t=>ti.error(t))})(e,t,n,i)}}catch(t){throw to.create("interop-component-reg-failed",{reason:t})}},"PRIVATE")),(0,o.KN)(tE,tI),(0,o.KN)(tE,tI,"esm2017")},3977:function(t,e,n){"use strict";n.d(e,{ZF:function(){return i.ZF}});var i=n(2238);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,i.KN)("firebase","9.17.1","app")},1019:function(t,e,n){"use strict";n.d(e,{N8:function(){return i.N8},iH:function(){return i.iH},t8:function(){return i.t8}});var i=n(5276)},9828:function(t,e,n){"use strict";n.d(e,{JU:function(){return i.JU},ad:function(){return i.ad},pl:function(){return i.pl}});var i=n(19)},6650:function(t,e,n){"use strict";n.d(e,{Jt:function(){return tn},cF:function(){return tr},iH:function(){return ti},KV:function(){return te}});var i,r,s,a,o=n(2238),l=n(4444),h=n(8463);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u="firebasestorage.googleapis.com",c="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f extends l.ZR{constructor(t,e,n=0){super(p(t),`Firebase Storage: ${e} (${p(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,f.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return p(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function p(t){return"storage/"+t}function d(){return new f(s.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function g(t){return new f(s.INVALID_ARGUMENT,t)}function m(){return new f(s.APP_DELETED,"The Firebase app was deleted.")}function y(t,e){return new f(s.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function b(t){throw new f(s.INTERNAL_ERROR,"Internal error: "+t)}(i=s||(s={})).UNKNOWN="unknown",i.OBJECT_NOT_FOUND="object-not-found",i.BUCKET_NOT_FOUND="bucket-not-found",i.PROJECT_NOT_FOUND="project-not-found",i.QUOTA_EXCEEDED="quota-exceeded",i.UNAUTHENTICATED="unauthenticated",i.UNAUTHORIZED="unauthorized",i.UNAUTHORIZED_APP="unauthorized-app",i.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",i.INVALID_CHECKSUM="invalid-checksum",i.CANCELED="canceled",i.INVALID_EVENT_NAME="invalid-event-name",i.INVALID_URL="invalid-url",i.INVALID_DEFAULT_BUCKET="invalid-default-bucket",i.NO_DEFAULT_BUCKET="no-default-bucket",i.CANNOT_SLICE_BLOB="cannot-slice-blob",i.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",i.NO_DOWNLOAD_URL="no-download-url",i.INVALID_ARGUMENT="invalid-argument",i.INVALID_ARGUMENT_COUNT="invalid-argument-count",i.APP_DELETED="app-deleted",i.INVALID_ROOT_OPERATION="invalid-root-operation",i.INVALID_FORMAT="invalid-format",i.INTERNAL_ERROR="internal-error",i.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){let t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=v.makeFromUrl(t,e)}catch(e){return new v(t,"")}if(""===n.path)return n;throw new f(s.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}static makeFromUrl(t,e){let n=null,i="([A-Za-z0-9.\\-_]+)",r=RegExp("^gs://"+i+"(/(.*))?$","i");function a(t){t.path_=decodeURIComponent(t.path)}let o=e.replace(/[.]/g,"\\."),l=RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${i}/o(/([^?#]*).*)?$`,"i"),h=RegExp(`^https?://${e===u?"(?:storage.googleapis.com|storage.cloud.google.com)":e}/${i}/([^?#]*)`,"i"),c=[{regex:r,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:l,indices:{bucket:1,path:3},postModify:a},{regex:h,indices:{bucket:1,path:2},postModify:a}];for(let e=0;e<c.length;e++){let i=c[e],r=i.regex.exec(t);if(r){let t=r[i.indices.bucket],e=r[i.indices.path];e||(e=""),n=new v(t,e),i.postModify(n);break}}if(null==n)throw new f(s.INVALID_URL,"Invalid URL '"+t+"'.");return n}}class w{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}function _(t){return"string"==typeof t||t instanceof String}function E(t){return I()&&t instanceof Blob}function I(){return"undefined"!=typeof Blob&&!(0,l.UG)()}function T(t,e,n,i){if(i<e)throw g(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw g(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t,e,n){let i=e;return null==n&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function C(t){let e=encodeURIComponent,n="?";for(let i in t)if(t.hasOwnProperty(i)){let r=e(i)+"="+e(t[i]);n=n+r+"&"}return n.slice(0,-1)}(r=a||(a={}))[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t,e,n,i,r,s,a,o,l,h,u,c=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=u,this.retry=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){let t=(t,e)=>{if(e){t(!1,new O(!1,null,!0));return}let n=this.connectionFactory_();this.pendingConnection_=n;let i=t=>{let e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;let e=n.getErrorCode()===a.NO_ERROR,r=n.getStatus();if(!e||/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t,e){let n=-1!==[408,429].indexOf(t),i=-1!==e.indexOf(t);return t>=500&&t<600||n||i}(r,this.additionalRetryCodes_)&&this.retry){let e=n.getErrorCode()===a.ABORT;t(!1,new O(!1,null,e));return}let s=-1!==this.successCodes_.indexOf(r);t(!0,new O(s,n))})},e=(t,e)=>{let n=this.resolve_,i=this.reject_,r=e.connection;if(e.wasSuccessCode)try{let t=this.callback_(r,r.getResponse());void 0!==t?n(t):n()}catch(t){i(t)}else if(null!==r){let t=d();t.serverResponse=r.getErrorText(),i(this.errorCallback_?this.errorCallback_(r,t):t)}else if(e.canceled){let t=this.appDelete_?m():new f(s.CANCELED,"User canceled the upload/download.");i(t)}else{let t=new f(s.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.");i(t)}};this.canceled_?e(!1,new O(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t,e,n){let i=1,r=null,s=null,a=!1,o=0,l=!1;function h(...t){l||(l=!0,e.apply(null,t))}function u(e){r=setTimeout(()=>{r=null,t(f,2===o)},e)}function c(){s&&clearTimeout(s)}function f(t,...e){let n;if(l){c();return}if(t){c(),h.call(null,t,...e);return}let r=2===o||a;if(r){c(),h.call(null,t,...e);return}i<64&&(i*=2),1===o?(o=2,n=0):n=(i+Math.random())*1e3,u(n)}let p=!1;function d(t){!p&&(p=!0,c(),!l&&(null!==r?(t||(o=2),clearTimeout(r),u(0)):t||(o=1)))}return u(0),s=setTimeout(()=>{a=!0,d(!0)},n),d}(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class O{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function D(...t){let e="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==e){let n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(I())return new Blob(t);throw new f(s.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let R={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class k{constructor(t,e){this.data=t,this.contentType=e||null}}function N(t){let e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|63&i);else if((64512&i)==55296){let r=n<t.length-1&&(64512&t.charCodeAt(n+1))==56320;if(r){let r=i,s=t.charCodeAt(++n);i=65536|(1023&r)<<10|1023&s,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else e.push(239,191,189)}else(64512&i)==56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(e)}function L(t,e){let n;switch(t){case R.BASE64:{let n=-1!==e.indexOf("-"),i=-1!==e.indexOf("_");if(n||i)throw y(t,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case R.BASE64URL:{let n=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(n||i)throw y(t,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/")}}try{n=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){if("undefined"==typeof atob)throw new f(s.UNSUPPORTED_ENVIRONMENT,"base-64 is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.");return atob(t)}(e)}catch(e){if(e.message.includes("polyfill"))throw e;throw y(t,"Invalid character found")}let i=new Uint8Array(n.length);for(let t=0;t<n.length;t++)i[t]=n.charCodeAt(t);return i}class P{constructor(t){this.base64=!1,this.contentType=null;let e=t.match(/^data:([^,]+)?,/);if(null===e)throw y(R.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let n=e[1]||null;null!=n&&(this.base64=function(t,e){let n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t,e){let n=0,i="";E(t)?(this.data_=t,n=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(E(this.data_)){let n=this.data_,i=n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null;return null===i?null:new x(i)}{let n=new Uint8Array(this.data_.buffer,t,e-t);return new x(n,!0)}}static getBlob(...t){if(I()){let e=t.map(t=>t instanceof x?t.data_:t);return new x(D.apply(null,e))}{let e=t.map(t=>_(t)?function(t,e){switch(t){case R.RAW:return new k(N(e));case R.BASE64:case R.BASE64URL:return new k(L(t,e));case R.DATA_URL:return new k(function(t){let e=new P(t);return e.base64?L(R.BASE64,e.rest):function(t){let e;try{e=decodeURIComponent(t)}catch(t){throw y(R.DATA_URL,"Malformed data URL.")}return N(e)}(e.rest)}(e),function(t){let e=new P(t);return e.contentType}(e))}throw d()}(R.RAW,t).data:t.data_),n=0;e.forEach(t=>{n+=t.byteLength});let i=new Uint8Array(n),r=0;return e.forEach(t=>{for(let e=0;e<t.length;e++)i[r++]=t[e]}),new x(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){var e;let n;try{n=JSON.parse(t)}catch(t){return null}return"object"!=typeof(e=n)||Array.isArray(e)?null:n}function M(t){let e=t.lastIndexOf("/",t.length-2);return -1===e?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t,e){return e}class B{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||U}}let F=null;function $(){if(F)return F;let t=[];t.push(new B("bucket")),t.push(new B("generation")),t.push(new B("metageneration")),t.push(new B("name","fullPath",!0));let e=new B("name");e.xform=function(t,e){return!_(e)||e.length<2?e:M(e)},t.push(e);let n=new B("size");return n.xform=function(t,e){return void 0!==e?Number(e):e},t.push(n),t.push(new B("timeCreated")),t.push(new B("updated")),t.push(new B("md5Hash",null,!0)),t.push(new B("cacheControl",null,!0)),t.push(new B("contentDisposition",null,!0)),t.push(new B("contentEncoding",null,!0)),t.push(new B("contentLanguage",null,!0)),t.push(new B("contentType",null,!0)),t.push(new B("metadata","customMetadata",!0)),F=t}function H(t,e,n){let i=j(e);return null===i?null:function(t,e,n){let i={};i.type="file";let r=n.length;for(let t=0;t<r;t++){let r=n[t];i[r.local]=r.xform(i,e[r.server])}return Object.defineProperty(i,"ref",{get:function(){let e=i.bucket,n=i.fullPath,r=new v(e,n);return t._makeStorageReference(r)}}),i}(t,i,n)}class V{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){if(!t)throw d()}function X(t){return function(e,n){var i,r;let a;return 401===e.getStatus()?a=e.getErrorText().includes("Firebase App Check token is invalid")?new f(s.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new f(s.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(i=t.bucket,a=new f(s.QUOTA_EXCEEDED,"Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(r=t.path,a=new f(s.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")):a=n,a.status=e.getStatus(),a.serverResponse=n.serverResponse,a}}class W{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=a.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=a.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=a.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,i){if(this.sent_)throw b("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(let t in i)i.hasOwnProperty(t)&&this.xhr_.setRequestHeader(t,i[t].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw b("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw b("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return -1}}getResponse(){if(!this.sent_)throw b("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw b("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class K extends W{initXhr(){this.xhr_.responseType="text"}}function q(){return new K}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this._service=t,e instanceof v?this._location=e:this._location=v.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new J(t,e)}get root(){let t=new v(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return M(this._location.path)}get storage(){return this._service}get parent(){let t=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){if(0===t.length)return null;let e=t.lastIndexOf("/");if(-1===e)return"";let n=t.slice(0,e);return n}(this._location.path);if(null===t)return null;let e=new v(this._location.bucket,t);return new J(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw new f(s.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}function G(t,e){let n=null==e?void 0:e[c];return null==n?null:v.makeFromBucketSpec(n,t)}class Y{constructor(t,e,n,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=u,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=i?this._bucket=v.makeFromBucketSpec(i,this._host):this._bucket=G(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=v.makeFromBucketSpec(this._url,t):this._bucket=G(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){T("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){T("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let t=this._authProvider.getImmediate({optional:!0});if(t){let e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){let t=this._appCheckProvider.getImmediate({optional:!0});if(t){let e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new J(this,t)}_makeRequest(t,e,n,i,r=!0){if(this._deleted)return new w(m());{let s=function(t,e,n,i,r,s,a=!0){var o,l,h;let u=C(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return o=f,e&&(o["X-Firebase-GMPID"]=e),l=f,null!==n&&n.length>0&&(l.Authorization="Firebase "+n),f["X-Firebase-Storage-Version"]="webjs/"+(null!=s?s:"AppManager"),h=f,null!==i&&(h["X-Firebase-AppCheck"]=i),new A(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,a)}(t,this._appId,n,i,e,this._firebaseVersion,r);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(t,e){let[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}let Z="@firebase/storage",Q="0.11.1",tt="storage";function te(t,e,n){return function(t,e,n){t._throwIfRoot("uploadBytes");let i=function(t,e,n,i,r){let a=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"},l=function(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}();o["Content-Type"]="multipart/related; boundary="+l;let h=function(t,e,n){let i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),!i.contentType&&(i.contentType=e&&e.type()||"application/octet-stream"),i}(e,i,r),u=function(t,e){let n={},i=e.length;for(let r=0;r<i;r++){let i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}(h,n),c="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+l+"\r\nContent-Type: "+h.contentType+"\r\n\r\n",p=x.getBlob(c,i,"\r\n--"+l+"--");if(null===p)throw new f(s.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.");let d={name:h.fullPath},g=S(a,t.host,t._protocol),m=t.maxUploadRetryTime,y=new V(g,"POST",function(e,i){let r=H(t,i,n);return z(null!==r),r},m);return y.urlParams=d,y.headers=o,y.body=p.uploadData(),y.errorHandler=X(e),y}(t.storage,t._location,$(),new x(e,!0),n);return t.storage.makeRequestWithTokens(i,q).then(e=>({metadata:e,ref:t}))}(t=(0,l.m9)(t),e,n)}function tn(t){return function(t){t._throwIfRoot("getDownloadURL");let e=function(t,e,n){let i=e.fullServerUrl(),r=S(i,t.host,t._protocol),a=t.maxOperationRetryTime,o=new V(r,"GET",function(e,i){let r=H(t,i,n);return z(null!==r),function(t,e,n,i){let r=j(e);if(null===r||!_(r.downloadTokens))return null;let s=r.downloadTokens;if(0===s.length)return null;let a=encodeURIComponent,o=s.split(","),l=o.map(e=>{let r=t.bucket,s=t.fullPath,o="/b/"+a(r)+"/o/"+a(s),l=S(o,n,i),h=C({alt:"media",token:e});return l+h});return l[0]}(r,i,t.host,t._protocol)},a);return o.errorHandler=function(t){let e=X(t);return function(n,i){let r=e(n,i);if(404===n.getStatus()){var a;a=t.path,r=new f(s.OBJECT_NOT_FOUND,"Object '"+a+"' does not exist.")}return r.serverResponse=i.serverResponse,r}}(e),o}(t.storage,t._location,$());return t.storage.makeRequestWithTokens(e,q).then(t=>{if(null===t)throw new f(s.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return t})}(t=(0,l.m9)(t))}function ti(t,e){return function(t,e){if(!(e&&/^[A-Za-z]+:\/\//.test(e)))return function t(e,n){if(e instanceof Y){if(null==e._bucket)throw new f(s.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+c+"' property when initializing the app?");let i=new J(e,e._bucket);return null!=n?t(i,n):i}return void 0!==n?function(t,e){let n=function(t,e){let n=e.split("/").filter(t=>t.length>0).join("/");return 0===t.length?n:t+"/"+n}(t._location.path,e),i=new v(t._location.bucket,n);return new J(t.storage,i)}(e,n):e}(t,e);if(t instanceof Y)return new J(t,e);throw g("To use ref(service, url), the first argument must be a Storage instance.")}(t=(0,l.m9)(t),e)}function tr(t=(0,o.Mq)(),e){t=(0,l.m9)(t);let n=(0,o.qX)(t,tt),i=n.getImmediate({identifier:e}),r=(0,l.P0)("storage");return r&&function(t,e,n,i={}){!function(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";let{mockUserToken:r}=i;r&&(t._overrideAuthToken="string"==typeof r?r:(0,l.Sg)(r,t.app.options.projectId))}(t,e,n,i)}(i,...r),i}(0,o.Xd)(new h.wA(tt,function(t,{instanceIdentifier:e}){let n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Y(n,i,r,e,o.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(Z,Q,""),(0,o.KN)(Z,Q,"esm2017")},6531:function(t,e,n){"use strict";var i;let r,s;n.d(e,{X3:function(){return g}});let a=(t,e)=>e.some(e=>t instanceof e),o=new WeakMap,l=new WeakMap,h=new WeakMap,u=new WeakMap,c=new WeakMap,f={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return l.get(t);if("objectStoreNames"===e)return t.objectStoreNames||h.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function p(t){var e;if(t instanceof IDBRequest)return function(t){let e=new Promise((e,n)=>{let i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(p(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&o.set(e,t)}).catch(()=>{}),c.set(e,t),e}(t);if(u.has(t))return u.get(t);let n="function"==typeof(e=t)?e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(d(this),t),p(o.get(this))}:function(...t){return p(e.apply(d(this),t))}:function(t,...n){let i=e.call(d(this),t,...n);return h.set(i,t.sort?t.sort():[t]),p(i)}:(e instanceof IDBTransaction&&function(t){if(l.has(t))return;let e=new Promise((e,n)=>{let i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)});l.set(t,e)}(e),a(e,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(e,f):e;return n!==t&&(u.set(t,n),c.set(n,t)),n}let d=t=>c.get(t);function g(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){let a=indexedDB.open(t,e),o=p(a);return i&&a.addEventListener("upgradeneeded",t=>{i(p(a.result),t.oldVersion,t.newVersion,p(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(t=>{s&&t.addEventListener("close",()=>s()),r&&t.addEventListener("versionchange",()=>r())}).catch(()=>{}),o}let m=["get","getKey","getAll","getAllKeys","count"],y=["put","add","delete","clear"],b=new Map;function v(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&"string"==typeof e))return;if(b.get(e))return b.get(e);let n=e.replace(/FromIndex$/,""),i=e!==n,r=y.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||m.includes(n)))return;let s=async function(t,...e){let s=this.transaction(t,r?"readwrite":"readonly"),a=s.store;return i&&(a=a.index(e.shift())),(await Promise.all([a[n](...e),r&&s.done]))[0]};return b.set(e,s),s}f={...i=f,get:(t,e,n)=>v(t,e)||i.get(t,e,n),has:(t,e)=>!!v(t,e)||i.has(t,e)}}}]);