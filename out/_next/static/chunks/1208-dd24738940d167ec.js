(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1208],{1513:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(7294)),i=a(r(6189)),o=a(r(4338));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=function(){var e,t;function r(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r),this.tests=e||[]}return e=[{key:"prepareChildren",value:function(e,t){var r=this,n=Array.prototype.slice.call(e).map(function(e,n){return r.prepareNode(e,t+1,n)}).filter(Boolean);return n.length?n:null}},{key:"prepareAttributes",value:function(e,t){var r={key:t},n=e.getAttribute("class");return n&&(r.className=n),Array.prototype.slice.call(e.attributes).map(function(e){switch(e.name){case"class":case"style":break;case"checked":case"selected":case"disabled":case"autoplay":case"controls":r[e.name]=e.name;break;default:o.default[e.name]?r[o.default[e.name]]=e.value:r[e.name]=e.value}return null}),r}},{key:"prepareNode",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(!e)return null;var a=e,s="".concat(r,"-").concat(o),l=[];if(this.tests.forEach(function(n){n.condition(a,s,r,t)&&("function"!=typeof n.modify||(a=n.modify(a,s,r,t))instanceof Node||(a=e,console.warn("The `modify`-method always must return a valid DomNode (instanceof Node) - your modification will be ignored (Hint: if you want to render a React-component, use the `action`-method instead)")),"function"==typeof n.action&&l.push(n.action(a,s,r,t)))}),l.length)return l;switch(a.nodeType){case 1:return n.default.createElement(a.nodeName.toLowerCase(),this.prepareAttributes(a,s),this.prepareChildren(a.childNodes,r));case 3:var c=a.nodeValue.toString();if(!a.parentNode)return c;var u=a.parentNode.nodeName.toLowerCase();if(-1!==i.default.indexOf(u))return/\S/.test(c)&&console.warn("a textnode is not allowed inside '".concat(u,"'. your text \"").concat(c,'" will be ignored')),null;return c;default:return null}}}],s(r.prototype,e),t&&s(r,t),r}();t.default=l},6189:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=["br","col","colgroup","dl","hr","iframe","img","input","link","menuitem","meta","ol","param","select","table","tbody","tfoot","thead","tr","ul","wbr"]},4338:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",download:"download",draggable:"draggable",enctype:"encType",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"}},8875:function(e,t,r){var n,i,o;o={canUseDOM:i=!!("undefined"!=typeof window&&window.document&&window.document.createElement),canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:i&&!!(window.addEventListener||window.attachEvent),canUseViewport:i&&!!window.screen},void 0!==(n=(function(){return o}).call(t,r,t,e))&&(e.exports=n)},778:function(e,t,r){var n=r(2479);function i(e){var t=function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments))};return t.called=!1,t}function o(e){var t=function(){if(t.called)throw Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments)},r=e.name||"Function wrapped with `once`";return t.onceError=r+" shouldn't be called more than once",t.called=!1,t}e.exports=n(i),e.exports.strict=n(o),i.proto=i(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return i(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return o(this)},configurable:!0})})},8661:function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(778)),s=r(8875);t.canUseDOM=function(){return s.canUseDOM},t.supportsInlineSVG=function(){if(!document)return!1;var e=document.createElement("div");return e.innerHTML="<svg />",e.firstChild&&"http://www.w3.org/2000/svg"===e.firstChild.namespaceURI};var l=function(e){function t(t,r){var n=e.call(this)||this;return n.name="InlineSVGError",n.message=t,n.data=r,n}return i(t,e),t}(Error);t.InlineSVGError=l,t.isSupportedEnvironment=a.default(function(){return t.supportsInlineSVG()&&"undefined"!=typeof window&&null!==window}),t.randomString=function(e){void 0===e&&(e=8);for(var t="abcdefghijklmnopqrstuvwxyz",r=""+t+t.toUpperCase()+"1234567890",n="",i=0;i<e;i++)n+=r[Math.floor(Math.random()*r.length)];return n}},1208:function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},a=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r},s=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a},l=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=c(r(7294)),d=c(r(1513)),p=r(8661);t.STATUS={FAILED:"failed",LOADED:"loaded",LOADING:"loading",PENDING:"pending",READY:"ready",UNSUPPORTED:"unsupported"};var h=Object.create(null),f=function(e){function r(r){var n=e.call(this,r)||this;return n._isMounted=!1,n.handleLoad=function(e){n._isMounted&&n.setState({content:e,status:t.STATUS.LOADED},n.generateElement)},n.handleError=function(e){var r=n.props.onError,i="Browser does not support SVG"===e.message?t.STATUS.UNSUPPORTED:t.STATUS.FAILED;n._isMounted&&n.setState({status:i},function(){"function"==typeof r&&r(e)})},n.request=function(){var e=n.props,r=e.cacheRequests,i=e.src;try{return r&&(h[i]={content:"",status:t.STATUS.LOADING,queue:[]}),fetch(i).then(function(e){var t=e.headers.get("content-type"),r=s((t||"").split(/ ?; ?/),1)[0];if(e.status>299)throw new p.InlineSVGError("Not Found");if(!["image/svg+xml","text/plain"].some(function(e){return r.indexOf(e)>=0}))throw new p.InlineSVGError("Content type isn't valid: "+r);return e.text()}).then(function(e){if(n.handleLoad(e),r){var o=h[i];o&&(o.content=e,o.status=t.STATUS.LOADED,o.queue=o.queue.filter(function(t){return t(e),!1}))}}).catch(function(e){r&&delete h[i],n.handleError(e)})}catch(e){n.handleError(new p.InlineSVGError(e.message))}},n.state={content:"",element:null,hasCache:!!r.cacheRequests&&!!h[r.src],status:t.STATUS.PENDING},n}return i(r,e),r.prototype.componentDidMount=function(){if(this._isMounted=!0,!p.canUseDOM()){this.handleError(new p.InlineSVGError("No DOM"));return}var e=this.state.status,r=this.props.src;try{if(e===t.STATUS.PENDING){if(!p.isSupportedEnvironment())throw new p.InlineSVGError("Browser does not support SVG");if(!r)throw new p.InlineSVGError("Missing src");this.load()}}catch(e){this.handleError(e)}},r.prototype.componentDidUpdate=function(e,r){if(p.canUseDOM()){var n=this.state,i=n.hasCache,o=n.status,a=this.props,s=a.onLoad,l=a.src;if(r.status!==t.STATUS.READY&&o===t.STATUS.READY&&s&&s(l,i),e.src!==l){if(!l){this.handleError(new p.InlineSVGError("Missing src"));return}this.load()}}},r.prototype.componentWillUnmount=function(){this._isMounted=!1},r.prototype.parseSVG=function(){var e=this.state.content,t=this.props.preProcessor;return t?t(e):e},r.prototype.updateSVGAttributes=function(e){var t=this,r=this.props,n=r.baseURL,i=void 0===n?"":n,o=r.uniquifyIDs,a=r.uniqueHash,s=["id","href","xlink:href","xlink:role","xlink:arcrole"];if(!o)return e;var c=a||p.randomString();return l(e.children).map(function(e){if(e.attributes&&e.attributes.length){var r=Object.values(e.attributes);r.forEach(function(e){var t=e.value.match(/^url\((#[^)]+)/);t&&t[1]&&(e.value="url("+i+t[1]+"__"+c+")")}),s.forEach(function(e){var t=r.find(function(t){return t.name===e});t&&(t.value=t.value+"__"+c)})}return e.children.length&&(e=t.updateSVGAttributes(e)),e}),e},r.prototype.generateNode=function(){var e=this.props,t=e.description,r=e.title;try{var n=this.parseSVG(),i=new DOMParser().parseFromString(n,"image/svg+xml").querySelector("svg");if(!i)throw new p.InlineSVGError("Could not parse the loaded code");if(i=this.updateSVGAttributes(i),t){var o=i.querySelector("desc");o&&o.parentNode&&o.parentNode.removeChild(o);var a=document.createElement("desc");a.innerHTML=t,i.prepend(a)}if(r){var s=i.querySelector("title");s&&s.parentNode&&s.parentNode.removeChild(s);var l=document.createElement("title");l.innerHTML=r,i.prepend(l)}return i}catch(e){return this.handleError(e)}},r.prototype.generateElement=function(){var e=this.props,r=(e.baseURL,e.cacheRequests,e.children,e.description,e.onError,e.onLoad,e.loader,e.preProcessor,e.src,e.title,e.uniqueHash,e.uniquifyIDs,a(e,["baseURL","cacheRequests","children","description","onError","onLoad","loader","preProcessor","src","title","uniqueHash","uniquifyIDs"]));try{var n=this.generateNode();if(n){var i=new d.default;this.setState({element:u.default.cloneElement(i.prepareNode(n),o({},r)),status:t.STATUS.READY})}}catch(e){this.handleError(e)}},r.prototype.load=function(){var e=this;this._isMounted&&this.setState({content:"",element:null,status:t.STATUS.LOADING},function(){var r,n=e.props,i=n.cacheRequests,o=n.src,a=i&&h[o];if(a){a.status===t.STATUS.LOADING?a.queue.push(e.handleLoad):a.status===t.STATUS.LOADED&&e.handleLoad(a.content);return}var s=o.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);if(s?r=s[1]?atob(s[2]):decodeURIComponent(s[2]):o.indexOf("<svg")>=0&&(r=o),r){e.handleLoad(r);return}e.request()})},r.prototype.render=function(){if(!p.canUseDOM())return null;var e=this.state,r=e.element,n=e.status,i=this.props,o=i.children,a=i.loader;return r||([t.STATUS.UNSUPPORTED,t.STATUS.FAILED].indexOf(n)>-1?void 0===o?null:o:void 0===a?null:a)},r.defaultProps={cacheRequests:!0,uniquifyIDs:!1},r}(u.default.PureComponent);t.default=f},2479:function(e){e.exports=function e(t,r){if(t&&r)return e(t)(r);if("function"!=typeof t)throw TypeError("need wrapper function");return Object.keys(t).forEach(function(e){n[e]=t[e]}),n;function n(){for(var e=Array(arguments.length),r=0;r<e.length;r++)e[r]=arguments[r];var n=t.apply(this,e),i=e[e.length-1];return"function"==typeof n&&n!==i&&Object.keys(i).forEach(function(e){n[e]=i[e]}),n}}}}]);