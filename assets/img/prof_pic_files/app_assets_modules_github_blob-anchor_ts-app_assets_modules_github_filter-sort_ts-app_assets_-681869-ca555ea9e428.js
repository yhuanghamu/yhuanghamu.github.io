"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_blob-anchor_ts-app_assets_modules_github_filter-sort_ts-app_assets_-681869"],{56334:(e,t,n)=>{function i(e){let t=e.match(/#?(?:L)(\d+)((?:C)(\d+))?/g);if(t){if(1===t.length){let e=o(t[0]);if(!e)return;return Object.freeze({start:e,end:e})}if(2!==t.length)return;{let e=o(t[0]),n=o(t[1]);if(!e||!n)return;return u(Object.freeze({start:e,end:n}))}}}function r(e){let{start:t,end:n}=u(e);return null!=t.column&&null!=n.column?`L${t.line}C${t.column}-L${n.line}C${n.column}`:null!=t.column?`L${t.line}C${t.column}-L${n.line}`:null!=n.column?`L${t.line}-L${n.line}C${n.column}`:t.line===n.line?`L${t.line}`:`L${t.line}-L${n.line}`}function s(e){let t=i(e),n=function(e){let t=e.length<5e3&&e.match(/(file-.+?-)L\d+?/i);return t?t[1]:""}(e);return{blobRange:t,anchorPrefix:n}}function l({anchorPrefix:e,blobRange:t}){return t?`#${e}${r(t)}`:"#"}function o(e){let t=e.match(/L(\d+)/),n=e.match(/C(\d+)/);return t?Object.freeze({line:parseInt(t[1]),column:n?parseInt(n[1]):null}):null}function a(e,t){let[n,i]=c(e.start,!0,t),[r,s]=c(e.end,!1,t);if(!n||!r)return;let l=i,o=s;if(-1===l&&(l=0),-1===o&&(o=r.childNodes.length),!n.ownerDocument)throw Error("DOMRange needs to be inside document");let a=n.ownerDocument.createRange();return a.setStart(n,l),a.setEnd(r,o),a}function c(e,t,n){let i=[null,0],r=n(e.line);if(!r)return i;if(null==e.column)return[r,-1];let s=e.column-1,l=function e(t){if(t.nodeType===Node.TEXT_NODE)return[t];if(!t.childNodes||!t.childNodes.length)return[];let n=[];for(let i of t.childNodes)n=n.concat(e(i));return n}(r);for(let e=0;e<l.length;e++){let n=l[e],i=s-(n.textContent||"").length;if(0===i){let i=l[e+1];if(t&&i)return[i,0];return[n,s]}if(i<0)return[n,s];s=i}return i}function u(e){let t=[e.start,e.end];return(t.sort(h),t[0]===e.start&&t[1]===e.end)?e:Object.freeze({start:t[0],end:t[1]})}function h(e,t){return e.line===t.line&&e.column===t.column?0:e.line===t.line&&"number"==typeof e.column&&"number"==typeof t.column?e.column-t.column:e.line-t.line}n.d(t,{Dw:()=>l,G5:()=>i,M9:()=>a,g1:()=>r,n6:()=>s})},41982:(e,t,n)=>{n.d(t,{W:()=>i});function i(e,t,n){return[...function*(e,t){for(let n of e){let e=t(n);null!=e&&(yield e)}}(e,e=>{let n=t(e);return null!=n?[e,n]:null})].sort((e,t)=>n(e[1],t[1])).map(([e])=>e)}},87738:(e,t,n)=>{function i(e,t,n=.1){let i=l(e,t,n);if(i&&-1===t.indexOf("/")){let r=e.substring(e.lastIndexOf("/")+1);i+=l(r,t,n)}return i}function r(e,t,n){if(t){let i=e.innerHTML.trim().match(n||function(e){let t=e.toLowerCase().split(""),n="";for(let e=0;e<t.length;e++){let i=t[e],r=i.replace(/[\\^$*+?.()|[\]{}]/g,"\\$&");0===e?n+=`(.*)(${r})`:n+=`([^${r}]*?)(${r})`}return RegExp(`${n}(.*?)$`,"i")}(t));if(!i)return;let r=!1,s=[];for(let e=1;e<i.length;++e){let t=i[e];t&&(e%2==0?r||(s.push("<mark>"),r=!0):r&&(s.push("</mark>"),r=!1),s.push(t))}e.innerHTML=s.join("")}else{let t=e.innerHTML.trim(),n=t.replace(/<\/?mark>/g,"");t!==n&&(e.innerHTML=n)}}n.d(t,{EW:()=>i,Qw:()=>r,qu:()=>o});let s=new Set([" ","-","_"]);function l(e,t,n=.1){let i=e;if(i===t)return 1;let r=i.length,l=0,o=0;for(let e=0;e<t.length;e++){let a=t[e],c=i.indexOf(a.toLowerCase()),u=i.indexOf(a.toUpperCase()),h=Math.min(c,u),d=h>-1?h:Math.max(c,u);if(-1===d)return 0;l+=.1,i[d]===a&&(l+=.1),0===d&&(l+=.9-n,0===e&&(o=1)),s.has(i.charAt(d-1))&&(l+=.9-n),i=i.substring(d+1,r)}let a=t.length,c=l/a,u=(c*(a/r)+c)/2;return o&&u+n<1&&(u+=n),u}function o(e,t){return e.score>t.score?-1:e.score<t.score?1:e.text<t.text?-1:e.text>t.text?1:0}},89359:(e,t,n)=>{function i(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function r(){return`${window.location.protocol}//${window.location.host}${function(){let e=i("meta[name=analytics-location]");return e?e.content:window.location.pathname}()+function(){let e=i("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=i("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}()}`}n.d(t,{S:()=>r})},92059:(e,t,n)=>{n.d(t,{Ny:()=>s.Ny,bm:()=>r.bm,cR:()=>i.cR,e7:()=>r.e7,v:()=>r.v});var i=n(51082),r=n(59679),s=n(70049);n(17784)},59679:(e,t,n)=>{n.d(t,{bm:()=>CodeNavigationInfo,e7:()=>h,v:()=>u});var i=n(78212),r=n(89445),s=n(51082),l=n(70049),o=n(17784);let CodeNavigationInfo=class CodeNavigationInfo{initCodeSections(){let e=new Map,t=new Map;for(let n=0;n<this.symbols.length;n++)if(this.symbols[n].lineNumber<this.symbols[n].extent.end.line-2){let i={startLine:this.symbols[n].lineNumber,endLine:this.symbols[n].extent.end.line,index:n,collapsed:!1,level:this.symbols[n].depth};if(e.has(i.startLine)){let t=e.get(i.startLine);t.push(i),e.set(i.startLine,t)}else e.set(i.startLine,[i]);if(e.has(i.endLine)){let t=e.get(i.endLine);t.push(i),e.set(i.endLine,t)}else e.set(i.endLine,[i]);for(let e=i.startLine+1;e<i.endLine;e++)if(t.has(e)){let n=t.get(e);n.push(i),t.set(e,n)}else t.set(e,[i])}this.lineToSectionMap=t,this.codeSections=e}initSymbols(e){return e.map(e=>{let t=this.blobLines[e.identUtf16.start.lineNumber]||"",n=(0,o.sm)(e,t,{stylingDirectives:this.stylingDirectives,repo:this.repo,refInfo:this.refInfo,path:this.path});return this.lineIndexedSymbols[n.lineNumber]=n,n})}getBlobLine(e){return this.blobLines[e]||""}getSymbolOnLine(e){return this.lineIndexedSymbols[e]}initSymbolTree(){if(this.symbols){let e=[],t=this.symbols.filter(e=>"field"!==e.kind.fullName).map(t=>{let n=0;for(let i=e.length-1;i>=0;i--){let r=e[i];if(t.extent.start.line===r.extent.end.line?t.extent.start.column>r.extent.end.column:t.extent.start.line>r.extent.end.line)e.pop();else{n=e.length;break}}return e.push(t),t.setSymbolDepth(n),{symbol:t,depth:n}});this.symbolTree=[];for(let e=0;e<t.length;e++){let n=t[e];if(e+1<t.length){let i=t[e+1];if(i.depth>n.depth){let i=function e(t,n){let i=[],r=t[n];for(let s=n+1;s<t.length;s++){let n=t[s];if(n.depth>r.depth){let r=e(t,s);s+=c(r),i.push({symbol:n.symbol,children:r,isParent:r.length>0})}else break}return i}(t,e);e+=c(i),this.symbolTree.push({symbol:n.symbol,isParent:!0,children:i});continue}}this.symbolTree.push({symbol:n.symbol,isParent:!1,children:[]})}}}createReferences(e){return e.map(e=>{let t=new s.i6({ident:e,repo:this.repo,refInfo:this.refInfo,path:this.path,isPlain:this.isPlain,source:s.sH.BLOB_CONTENT});return t.setSnippet(void 0,this.stylingDirectives?.[e.start.line],this.blobLines[e.start.line],void 0),t})}getReferencesToSymbol(e){let t=u(this.blobLines,(0,l.tb)(e));return this.createReferences(t)}getReferencesToSearch(e){let t=u(this.blobLines,(0,l.Ny)(e));return this.createReferences(t)}getDefinitionsAndReferences(e,t,n){this.setLoading(!0);let i=(async()=>{let i=this.getSymbolOnLine(t+1);if(i&&i.name===e)return{definitions:[i],backend:"search"};let[r,l]=await this.getAlephDefinitions(e,t,n,this.loggedIn);if("search"===l){let t=this.getLocalDefinitions(e);t.length>0&&(r=t);let n=r.find(e=>e.path===this.path&&e.repo===this.repo);n&&(r=[n]),l="search"}else{let t=this.getLocalDefinitions(e,!0);for(let n of r)""===n.kind.fullName&&n.name===e&&(n.kind=t[0]?t[0].kind:new s.cR({kind:""}))}return{definitions:r,backend:l}})(),r=(async()=>{let{definitions:t}=await i,n=t.map(e=>e.lineNumber),r=this.getReferencesToSymbol(e).filter(e=>!n.includes(e.lineNumber));return{references:r,backend:"search"}})(),l=(async()=>{let r="SYMBOL_KIND_UNKNOWN",s=this.getSymbolOnLine(t+1);if(s)r=s.kind.enumStringVal;else{let{definitions:e}=await i;r=e[0]?.kind?.enumStringVal||r}return this.getAlephReferences(e,t,n,this.loggedIn,r)})(),o=(async()=>{let[e,t]=await l;return{references:e,backend:t}})();return{definitions:i,localReferences:r,crossReferences:o,setLoading:this.setLoading}}getLocalDefinitions(e,t=!1){let n=9,i=[];for(let r of this.symbols)r.name===e&&(r.kind.rank<n||t)&&(n=r.kind.rank,i=[r]);return i}async getAlephDefinitions(e,t,n,s){let l,c,u="search";if(""===e&&-1===t&&-1===n||!s)return[[],u];let h=(0,i.UY)({repo:this.repo,type:"definition",q:e,language:this.language,row:t,column:n,ref:this.refInfo.name,path:this.path,codeNavContext:"BLOB_VIEW",symbolKind:null});try{l=await (0,r.v)(h)}catch(e){return[[],u]}if(!l.ok)return[[],u];try{c=await l.json()}catch(e){return[[],u]}u=a(c.backend)??"search";let d=c.payload.flatMap(e=>e).map(t=>(0,o.bo)(t,{stylingDirectives:this.stylingDirectives,repo:this.repo,refInfo:this.refInfo,path:this.path,symbol:e,backend:u}));return[d,u]}async getAlephReferences(e,t,n,s,l){let c,u="search";if(""===e&&-1===t&&-1===n||!s)return[[],u];let h=(0,i.UY)({repo:this.repo,type:"references",q:e,language:this.language,row:t,column:n,ref:this.refInfo.name,path:this.path,codeNavContext:"BLOB_VIEW",symbolKind:l}),d=await (0,r.v)(h);if(!d.ok)return[[],u];try{c=await d.json()}catch(e){return[[],u]}u=a(c.backend)??"search";let f=new Set,m=e=>!!f.has(e)||(f.add(e),!1),p=c.payload.flatMap(e=>e).reduce((e,t)=>{if(t.path===this.path)return e;let n=(0,o.Rc)(t,{stylingDirectives:this.stylingDirectives,repo:this.repo,refInfo:this.refInfo,path:this.path,backend:u});return m(n.lineNumber)||e.push(n),e},[]).sort((e,t)=>e.lineNumber-t.lineNumber);return[p,u]}constructor(e,t,n,i,r,s,l,o,a,c){this.lineIndexedSymbols={},this.setLoading=c,this.setLoading(!0),this.repo=e,this.refInfo=t,this.path=n,this.loggedIn=i,this.language=o,this.blobLines=r,this.stylingDirectives=l,this.isPlain=a,this.symbols=this.initSymbols(s),this.initSymbolTree(),this.initCodeSections(),this.setLoading(!1)}};function a(e){switch(e){case"ALEPH_PRECISE":case"ALEPH_PRECISE_PREVIEW":case"ALEPH_PRECISE_DEVELOPMENT":return"precise";case"BLACKBIRD":return"search";default:return null}}function c(e){let t=e.length;for(let n=0;n<e.length;n++){let i=e[n];i.isParent&&(t+=c(i.children))}return t}function u(e,t){let n=[],i=(0,l.Pc)(t,e),r=i.next();for(;!r.done&&n.length<200;){let{column:e,columnEnd:t,line:s}=r.value;n.push({start:{line:s,column:e},end:{line:s,column:t}}),r=i.next()}return n}function h(e,t,n){if(0===e.length)return[];let i=e.length>=200,r={},s=e.reduce((e,i)=>{if(r[i.ident.start.line])return e;r[i.ident.start.line]=!0;let s=(0,l.Pc)(n,[t[i.ident.start.line]]),o=s.next();for(;!o.done&&e.length<200;){let{column:t,columnEnd:n}=o.value;e.push({start:{line:i.ident.start.line,column:t},end:{line:i.ident.start.line,column:n}}),o=s.next()}return e},[]);if(s.length<200&&i){let i=e[e.length-1].ident.start.line,r=(0,l.Pc)(n,t,i),o=r.next();for(;!o.done&&s.length<200;){let{line:e,column:t,columnEnd:n}=o.value;s.push({start:{line:e,column:t},end:{line:e,column:n}}),o=r.next()}}return s}},51082:(e,t,n)=>{n.d(t,{cR:()=>SymbolKind,i6:()=>CodeReference,lt:()=>CodeSymbol,sH:()=>i});var i,r=n(78212);!function(e){e.BLACKBIRD_SEARCH="blackbird-search",e.BLACKBIRD_ANALYSIS="blackbird-analysis",e.ALEPH_PRECISE="aleph-precise",e.BLOB_CONTENT="blob-content-search"}(i||(i={}));let SymbolKind=class SymbolKind{constructor({kind:e}){let[t,n]=function(e){if("string"==typeof e){let t=e.toString().replace("SYMBOL_KIND_","").replace(/_DEF$/,"").replace(/_REF$/,"").toLowerCase();if(e.startsWith("SYMBOL_KIND_"))return[t,e.toString()];if(""!==e&&"unknown"!==e){let t=`SYMBOL_KIND_${e.toUpperCase()}`;return"call"===e?t+="_REF":t+="_DEF",[e,t]}}return["unknown","SYMBOL_KIND_UNKNOWN"]}(e);this.enumStringVal=n,this.fullName=t,this.shortName=function(e){switch(e){case"function":case"method":return"func";case"interface":return"intf";case"implementation":return"impl";case"constant":return"const";case"module":return"mod";case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"class":case"call":case"enum":case"field":case"macro":case"struct":case"trait":case"type":case"union":return e;default:return e.substring(0,1)}}(t),this.plColor=function(e){switch(e){case"function":case"method":default:return"prettylights.syntax.entity";case"class":case"enum":case"struct":case"union":return"prettylights.syntax.constant";case"interface":case"trait":return"prettylights.syntax.keyword";case"constant":case"field":case"enum member":return"prettylights.syntax.variable";case"implementation":return"prettylights.syntax.string"}}(t),this.rank=({class:1,struct:1,enum:1,type:2,interface:3,trait:3,module:4,implementation:5,function:6,method:7,call:8,field:9})[t]||9}};let CodeSymbol=class CodeSymbol{setSymbolDepth(e){this.depth=e}setFileInfo(e,t,n){this.repo=e,this.refInfo=t,this.path=n}get lineNumber(){return this.ident.start.line+1}setSnippet(e,t,n,i){this.highlightedText=e,this.stylingDirectives=t,this.bodyText=n,this.leadingWhitespace=i}href(){if(!this.repo||!this.refInfo||!this.path)return`/${window.location.pathname}#L${this.lineNumber}`;let e="blackbird-search"===this.source?this.repo.defaultBranch:this.refInfo.name||this.refInfo.currentOid;return(0,r.C9)({owner:this.repo.ownerLogin,repo:this.repo.name,commitish:e,filePath:this.path,lineNumber:this.lineNumber})}pathKey(){return`${this.repo.ownerLogin}/${this.repo.name}/${this.refInfo.currentOid}/${this.path}`}constructor({ident:e,extent:t,kind:n,name:i,fullyQualifiedName:r,source:s}){this.ident=e,this.extent=t,this.kind=new SymbolKind({kind:n}),this.name=i,this.fullyQualifiedName=r,this.source=s}};let CodeReference=class CodeReference{get lineNumber(){return this.ident.start.line+1}href(e){if(!this.repo||!this.refInfo||!this.path)return`/${window.location.pathname}#L${this.lineNumber}`;let t="blackbird-search"===this.source?this.repo.defaultBranch:this.refInfo.name||this.refInfo.currentOid,n={owner:this.repo.ownerLogin,repo:this.repo.name,commitish:t,filePath:this.path,lineNumber:this.lineNumber,plain:this.isPlain?1:void 0};return e?(0,r.t4)(n):(0,r.C9)(n)}setSnippet(e,t,n,i){this.highlightedText=e,this.stylingDirectives=t,this.bodyText=n,this.leadingWhitespace=i}pathKey(){return`${this.repo.ownerLogin}/${this.repo.name}/${this.refInfo.currentOid}/${this.path}`}constructor({ident:e,repo:t,refInfo:n,path:i,isPlain:r,source:s}){this.ident=e,this.repo=t,this.refInfo=n,this.path=i,this.isPlain=r??!1,this.source=s}}},70049:(e,t,n)=>{var i;function r(e){let t=`(\\W|^)${e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(\\W|$)`;return{kind:1,regexp:RegExp(t,"g")}}function s(e){let t=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return{kind:0,regexp:RegExp(t,"gi")}}function*l(e,t,n=0){for(let i=n;i<t.length;i++){let n;let r=t[i];for(;null!==(n=e.regexp.exec(r));){let t=n[0],s=n.index;1===e.kind&&(t.length>0&&/\W/.test(t[0])&&(t=t.substring(1),s+=n[0].length-t.length),t.length>0&&/\W/.test(t[t.length-1])&&(t=t.substring(0,t.length-1))),yield{line:i,column:s,columnEnd:s+t.length,text:r}}}}n.d(t,{Ny:()=>s,Pc:()=>l,tb:()=>r}),function(e){e[e.Text=0]="Text",e[e.Symbol=1]="Symbol"}(i||(i={}))},17784:(e,t,n)=>{n.d(t,{Rc:()=>l,bo:()=>s,sm:()=>r});var i=n(51082);function r(e,t,{stylingDirectives:n,repo:r,refInfo:s,path:l}){let{extentUtf16:o,identUtf16:a}=e,c=new i.lt({kind:e.kind,fullyQualifiedName:e.fullyQualifiedName,name:e.name,extent:{start:{line:o.start.lineNumber,column:o.start.utf16Col},end:{line:o.end.lineNumber,column:o.end.utf16Col}},ident:{start:{line:a.start.lineNumber,column:a.start.utf16Col},end:{line:a.end.lineNumber,column:a.end.utf16Col}},source:i.sH.BLACKBIRD_ANALYSIS});return c.setSnippet(void 0,n?.[a.start.lineNumber],t,void 0),c.setFileInfo(r,s,l),c}function s(e,{symbol:t,refInfo:n,repo:r,path:s,backend:l}){let o=e.ident?.start?.character,a=e.ident?.end?.character??e.ident?.start?.character,c={start:{line:e.ident.start.line,column:o?o-e.leadingWhitespace:0},end:{line:e.ident?.end?.line??e.ident.start.line,column:a?a-e.leadingWhitespace:0}},u=e.extent?.start?.character,h=e.extent?.end?.character??e.extent?.start?.character,d={start:{line:e.extent.start.line,column:u||0},end:{line:e.extent.end?.line??e.extent.start.line,column:h||0}},f=new i.lt({ident:c,extent:d,kind:e.symbolKind,name:t,fullyQualifiedName:t,source:"search"===l?i.sH.BLACKBIRD_SEARCH:i.sH.ALEPH_PRECISE});if(e.local)f.setFileInfo(r,n,s);else if(e.commitOid&&e.path){let t=n;e.commitOid!==n.currentOid&&(t={name:"",listCacheKey:e.commitOid,currentOid:e.commitOid,canEdit:!1}),f.setFileInfo(e.repo??r,t,e.path)}let m=Array(e.leadingWhitespace).fill(" ").join(""),p=m+(e.firstLine||"");return f.setSnippet(e.highlightedText,void 0,p,e.leadingWhitespace),f}function l(e,{refInfo:t,path:n,repo:r,backend:s}){let l=t,o=n;!e.local&&e.commitOid&&e.path&&(l=t,o=e.path,e.commitOid!==t.currentOid&&(l={name:"",listCacheKey:e.commitOid,currentOid:e.commitOid,canEdit:!1}));let a=e.ident.start.character,c=e.ident.end?.character,u=new i.i6({repo:r,refInfo:l,path:o,ident:{start:{line:e.ident.start.line,column:a?a-e.leadingWhitespace:0},end:{line:e.ident.end?.line||e.ident.start.line,column:c?c-e.leadingWhitespace:0}},source:"search"===s?i.sH.BLACKBIRD_SEARCH:i.sH.ALEPH_PRECISE}),h=Array(e.leadingWhitespace).fill(" ").join("")+(e.firstLine||"");return u.setSnippet(e.highlightedText,void 0,h,e.leadingWhitespace),u}},24601:(e,t,n)=>{n.d(t,{aJ:()=>E,cI:()=>S,eK:()=>g});var i=n(82918),r=n(49237),s=n(28382),l=n(89359),o=n(15981),a=n(53729),c=n(86283),u=n(46426);let h=!1,d=0,f=Date.now(),m=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function p(e){return!!("AbortError"===e.name||"TypeError"===e.name&&m.has(e.message)||e.name.startsWith("ApiError")&&m.has(e.message))}function g(e,t={}){if((0,u.c)("FAILBOT_HANDLE_NON_ERRORS")){if(!(e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message)){if(function(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(I.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}(e))return;let n=Error(),i=function(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}(e),r={type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${i}`,stacktrace:S(n)};y(L(r,t));return}p(e)||y(L(b(e),t))}else p(e)||y(L(b(e),t))}async function y(e){if(!(!N&&!h&&d<10&&(0,r.Gb)()))return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(e.error.stacktrace.some(e=>w.test(e.filename)||w.test(e.function))){h=!0;return}d++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function b(e){return{type:e.name,value:e.message,stacktrace:S(e)}}function L(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,l.S)()||window.location.href,readyState:document.readyState,referrer:(0,o.wP)(),timeSinceLoad:Math.round(Date.now()-f),user:E()||void 0,bundler:a.A7,ui:!!document.querySelector('meta[name="ui"]')},t)}function S(e){return(0,s.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let w=/(chrome|moz|safari)-extension:\/\//;function E(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,i.b)();return`anonymous-${t}`}let N=!1;if(c.iG?.addEventListener("pageshow",()=>N=!1),c.iG?.addEventListener("pagehide",()=>N=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{g(e.data.error)})}let I=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"]},7180:(e,t,n)=>{n.d(t,{O:()=>c,d:()=>TrustedTypesPolicyError});var i=n(46426),r=n(71643),s=n(24601),l=n(27856),o=n.n(l),a=n(95253);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};let c={apply:function({policy:e,policyName:t,fallback:n,fallbackOnError:l=!1,sanitize:c,silenceErrorReporting:u=!1}){try{if((0,i.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return n;(0,r.b)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let s=e();return c&&new Promise(e=>{let n=window.performance.now(),i=o().sanitize(s,{FORBID_ATTR:[]}),r=window.performance.now();if(s.length!==i.length){let l=Error("Trusted Types policy output sanitized"),o=l.stack?.slice(0,1e3),c=s.slice(0,250);(0,a.qP)("trusted_types_policy.sanitize",{policyName:t,output:c,stack:o,outputLength:s.length,sanitizedLength:i.length,executionTime:r-n}),e(s)}}),s}catch(e){if(e instanceof TrustedTypesPolicyError||(u||(0,s.eK)(e),(0,r.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!l))throw e}return n}}},22490:(e,t,n)=>{n.d(t,{ZO:()=>c});var i=n(86283),r=n(71643);function s(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let l={createHTML:s("createHTML"),createScript:s("createScript"),createScriptURL:s("createScriptURL")},o=new Map,a=globalThis.trustedTypes??{createPolicy:(e,t)=>({name:e,...l,...t})},c={createPolicy:(e,t)=>{if(o.has(e))return(0,r.b)({incrementKey:"TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"}),o.get(e);{let n=a.createPolicy(e,t);return o.set(e,n),n}}},u=!1;i.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||u||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),u=!0)})},89445:(e,t,n)=>{function i(e,t={}){if(e.match(/^(https?:|\/\/)/))throw Error("Can not make cross-origin requests from verifiedFetch");let n={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:n})}function r(e,t){let n=t?.headers??{},r={...n,Accept:"application/json","Content-Type":"application/json"},s=t?.body?JSON.stringify(t.body):void 0;return i(e,{...t,body:s,headers:r})}n.d(t,{Q:()=>i,v:()=>r})}}]);
//# sourceMappingURL=app_assets_modules_github_blob-anchor_ts-app_assets_modules_github_filter-sort_ts-app_assets_-681869-56777d14dbe7.js.map