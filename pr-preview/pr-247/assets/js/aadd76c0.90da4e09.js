"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[5170],{84765:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(34673);function l(e){let{children:t}=e;return n.createElement(r.Z,{summary:n.createElement("summary",null,"\u89e3\u7b54")},t)}},45140:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(67294),r=a(40667),l=a(86886),m=a(15861),p=a(93193),s=a(26126),i=a(74005),o=a(62288),c=a(17440),k=a(1849),u=a(3018),h=a(98034);function d(e,t,a){const n=function(e,t,a){let n=0;for(let r=t-1;r<=t+1;r++)for(let t=a-1;t<=a+1;t++)0<=r&&r<e.length&&0<=t&&t<e[0].length&&(n+=Number(e[r][t]));return n-Number(e[t][a])}(e,t,a);return e[t][a]&&2===n||3===n}function N(e){let{data:t=Array(100).fill().map((()=>Array(100).fill(!1)))}=e;const[a,N]=(0,n.useState)(t),[f,x]=(0,n.useState)(4),[y,w]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=setInterval((()=>{y&&N(function(e){const t=e.map((e=>e.map((e=>e))));for(let a=0;a<e.length;a++)for(let n=0;n<e[0].length;n++)t[a][n]=d(e,a,n);return t}(a))}),4e3/f);return()=>{clearInterval(e)}}),[y,a]),n.createElement(n.Fragment,null,n.createElement(s.d$,{initialScale:7},(e=>{let{zoomIn:t,zoomOut:l,resetTransform:m}=e;return n.createElement(n.Fragment,null,n.createElement(r.Z,{onClick:()=>{t()}},n.createElement(i.Z,null)),n.createElement(r.Z,{onClick:()=>{l()}},n.createElement(o.Z,null)),n.createElement(r.Z,{onClick:()=>{m()}},n.createElement(c.Z,null)),n.createElement(s.Uv,null,n.createElement(g,{board:a,setBoard:N})))})),n.createElement(l.ZP,{container:!0,direction:"row",spacing:2,alignItems:"center"},n.createElement(l.ZP,{item:!0},n.createElement(r.Z,{onClick:()=>{w(!y)}},y?n.createElement(h.Z,null):n.createElement(u.Z,null))),n.createElement(l.ZP,{item:!0},n.createElement(r.Z,{onClick:()=>{N(t)}},n.createElement(k.Z,null))),n.createElement(l.ZP,{item:!0},n.createElement(m.Z,{gutterBottom:!0},"\u901f\u3055")),n.createElement(l.ZP,{item:!0,xs:!0},n.createElement(p.ZP,{value:f,onChange:e=>{x(e.target.value)},min:1,step:1,max:100,valueLabelDisplay:"auto"}))))}function g(e){let{board:t,setBoard:a}=e;const r=52*t.length+2,l=52*t[0].length+2;return n.createElement(n.Fragment,null,n.createElement("svg",{width:"100%",height:"100%",viewBox:`0 0 ${r} ${l}`},n.createElement("defs",null),n.createElement("g",null,n.createElement("rect",{x:"0",y:"0",width:r,height:l,fill:"#808080"}),t.map(((e,r)=>e.map(((e,l)=>n.createElement("rect",{key:`${r},${l}`,x:52*l+2,y:52*r+2,width:"50",height:"50",fill:e?"#000000":"#ffffff",onClick:()=>{const e=[...t];e[r][l]=!t[r][l],a(e)}}))))))))}},41089:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),r=a(7174),l=a.n(r),m=a(31413),p=a(35993);const s="root_frVT";function i(e){let{path:t}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:s},n.createElement("a",{href:`https://colab.research.google.com/github/sikepuri-algorithm/sikepuri-algorithm.github.io/blob/main/static${t}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}))))}const o="iframe-wrapper_kRL9";function c(e,t){const a=new(l())({newline:!0});switch(e){case"text":return a.toHtml(t);case"html":return t;case"png":return`<img src="data:image/png;base64,${t}"></img>`;case"js":return`<script>${t}<\/script>`}}function k(e){const t=[];let a="normal";for(const n of e)switch(n.output_type){case"stream":t.push(c("text",n.text.join("")));break;case"execute_result":{const e=[];null!=n.data["text/plain"]&&e.push(c("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&e.push(c("html",n.data["text/html"].join(""))),t.push(e.join(""));break}case"error":t.push(c("text",n.traceback.join(""))),a="error";break;case"display_data":{const e=[];null!=n.data["text/plain"]&&e.push(c("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&e.push(c("html",n.data["text/html"].join(""))),null!=n.data["application/javascript"]&&e.push(c("js",n.data["application/javascript"])),null!=n.data["image/png"]&&e.push(c("png",n.data["image/png"])),t.push(e.join(""));break}}return{result:t.join(""),cellType:a}}function u(e){let{children:t,cellColor:a,title:r}=e;return n.createElement("div",{className:o,style:{backgroundColor:a}},n.createElement("iframe",{height:"40px",width:"100%",style:{minHeight:"40px",maxHeight:"620px"},srcDoc:t,onLoad:e=>{const t=e.target;t.height=t.contentDocument.documentElement.scrollHeight+"px"},title:r}))}function h(e){let{path:t,noOutput:a=!1}=e;const[r,l]=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch(t).then((e=>e.json())).then((e=>{l(function(e){const t=[];for(const a of e.cells)switch(a.cell_type){case"markdown":t.push({cell_type:"markdown",source:0===a.source.length?null:a.source.join("")});break;case"code":{const{result:e,cellType:n}=k(a.outputs);t.push({cell_type:"code",source:0===a.source.length?null:a.source.join(""),output:0===a.outputs.length?null:e,cellColor:"normal"===n?"#eee":"#ffdddc"});break}}return t}(e))}))}),[]),n.createElement(n.Fragment,null,r.map(((e,t)=>n.createElement(n.Fragment,{key:t},"markdown"===e.cell_type&&null!=e.source&&n.createElement(u,{cellColor:"#f8f8f8",title:"Markdown Code"},(0,p.Z)(e.source)),"code"===e.cell_type&&n.createElement(n.Fragment,null,null!=e.source&&n.createElement(m.Z,{language:"python"},e.source),!a&&null!=e.output&&n.createElement(u,{cellColor:e.cellColor,title:"Code Output"},e.output))))),n.createElement(i,{path:t}))}},56922:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(45140);const l={React:n,...n,LifeGame:function(){return n.createElement(n.Fragment,null,n.createElement("div",{style:{maxWidth:"200px"}},n.createElement(r.Z,null)))}}},15456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(41089),m=a(84765);const p={sidebar_position:9},s="\u7e70\u308a\u8fd4\u3057\u51e6\u7406",i={unversionedId:"python/for/index",id:"python/for/index",title:"\u7e70\u308a\u8fd4\u3057\u51e6\u7406",description:"for \u6587",source:"@site/docs/02-python/09-for/index.mdx",sourceDirName:"02-python/09-for",slug:"/python/for/",permalink:"/pr-preview/pr-247/docs/python/for/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/02-python/09-for/index.mdx",tags:[],version:"current",lastUpdatedAt:1682824012,formattedLastUpdatedAt:"2023\u5e744\u670830\u65e5",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u6761\u4ef6\u5206\u5c90",permalink:"/pr-preview/pr-247/docs/python/if/"},next:{title:"\u914d\u5217",permalink:"/pr-preview/pr-247/docs/python/array/"}},o={},c=[{value:"for \u6587",id:"for-\u6587",level:2},{value:"\u7df4\u7fd2\u554f\u984c 1",id:"\u7df4\u7fd2\u554f\u984c-1",level:3},{value:"\u7df4\u7fd2\u554f\u984c 2",id:"\u7df4\u7fd2\u554f\u984c-2",level:3}],k={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7e70\u308a\u8fd4\u3057\u51e6\u7406"},"\u7e70\u308a\u8fd4\u3057\u51e6\u7406"),(0,r.kt)("h2",{id:"for-\u6587"},"for \u6587"),(0,r.kt)("p",null,"\u4eca\u307e\u3067\u306b\u7fd2\u3063\u305f\u3053\u3068\u3092\u4f7f\u3063\u3066\u30011 \u304b\u3089 10 \u307e\u3067\u306e\u548c\u3092\u6c42\u3081\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)(l.Z,{path:"/for/sum_1to10.ipynb",mdxType:"ViewSource"}),(0,r.kt)("p",null,"\u3053\u308c\u3050\u3089\u3044\u306a\u3089\u3001\u7c21\u5358\u306b\u66f8\u3051\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3067\u306f\u30011 \u304b\u3089 20 \u307e\u3067\u306e\u548c\u306f\u3069\u3046\u3067\u3057\u3087\u3046\u3002"),(0,r.kt)(l.Z,{path:"/for/sum_1to20.ipynb",mdxType:"ViewSource"}),(0,r.kt)("p",null,"\u3060\u3093\u3060\u3093\u5927\u5909\u306b\u306a\u3063\u3066\u304d\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"\u3067\u306f\u30011 \u304b\u3089 100 \u307e\u3067\u306e\u548c\u306a\u3089\u3069\u3046\u3067\u3057\u3087\u3046\u3002"),(0,r.kt)(l.Z,{path:"/for/sum_1to100.ipynb",mdxType:"ViewSource"}),(0,r.kt)("p",null,"\u4e00\u5fdc\u4f5c\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304c\u3001\u6642\u9593\u304c\u304b\u304b\u308a\u307e\u3059\u3057\u3001\u6253\u3061\u9593\u9055\u3044\u3092\u3059\u308b\u53ef\u80fd\u6027\u3082\u9ad8\u304f\u306a\u3063\u3066\u304d\u307e\u3059\u3002\u3082\u3046\u5c11\u3057\u826f\u3044\u65b9\u6cd5\u3092\u8003\u3048\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u3067 for \u6587\u306e\u51fa\u756a\u3067\u3059\u3002for \u6587\u306f\u3001\u7e70\u308a\u8fd4\u3057\u51e6\u7406\u3092\u7c21\u5358\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u30021 \u304b\u3089 100 \u307e\u3067\u306e\u548c\u3092 for \u6587\u3092\u7528\u3044\u3066\u6c42\u3081\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u203b\u3053\u306e\u5f8c\u3001\u8a73\u3057\u304f\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)(l.Z,{path:"/for/sum_1to100_revised.ipynb",mdxType:"ViewSource"}),(0,r.kt)("p",null,"for \u6587\u3092\u7528\u3044\u308b\u3068\u3001\u3053\u306e\u3088\u3046\u306b\u7c21\u5358\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u554f\u984c\u304c\u5c11\u3057\u5909\u308f\u3063\u3066\u3082\u3001\u3059\u3050\u306b\u305d\u308c\u306b\u5408\u308f\u305b\u305f\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u62e1\u5f35\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u30011 \u304b\u3089 1000 \u306e\u548c\u306f\u3053\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"101")," \u3092 ",(0,r.kt)("inlineCode",{parentName:"p"},"1001")," \u306b\u3059\u308b\u3060\u3051\u3067\u7c21\u5358\u306b\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u203b\u3053\u306e\u5f8c\u3001\u8a73\u3057\u304f\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)(l.Z,{path:"/for/sum_1to1000_revised.ipynb",mdxType:"ViewSource"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"sum += i")," \u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"sum = sum + i")," \u3068\u540c\u3058\u610f\u5473\u3067\u3059\u3002\u7d2f\u7b97\u4ee3\u5165\u6f14\u7b97\u5b50\u3068\u547c\u3070\u308c\u307e\u3059\u3002\n\u6b21\u306e\u3088\u3046\u306b\u3001\u69d8\u3005\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6f14\u7b97\u5b50"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"+=")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a += b")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a = a + b"),"\u3068\u540c\u3058")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-=")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a -= b")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a = a - b"),"\u3068\u540c\u3058")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*=")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a *= b")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a = a * b"),"\u3068\u540c\u3058")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/=")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a /= b")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a = a / b"),"\u3068\u540c\u3058"))))),(0,r.kt)("p",null,"for \u6587\u306e\u69cb\u6587\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"for \u5909\u6570\u540d in range(\u958b\u59cb\u5024, \u7d42\u7aef\u5024):\n    \u4efb\u610f\u306e\u51e6\u7406\n")),(0,r.kt)("p",null,"for \u6587\u306b\u3064\u3044\u3066\u3088\u308a\u3088\u304f\u7406\u89e3\u3059\u308b\u305f\u3081 1 \u304b\u3089 10 \u307e\u3067\u3092\u51fa\u529b\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)(l.Z,{path:"/for/print_1to10.ipynb",mdxType:"ViewSource"}),(0,r.kt)("p",null,"for \u6587\u306e\u4e2d\u306e\u51e6\u7406\u304c\u7e70\u308a\u8fd4\u3057\u884c\u308f\u308c\u3066\u3044\u307e\u3059\u3002for \u6587\u306b\u6307\u5b9a\u3057\u305f\u5909\u6570\uff08\u3053\u3053\u3067\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," \uff09\u306b\u30011 \u56de\u76ee\u306e\u51e6\u7406\u3067\u306f 1 \u304c\u30012 \u56de\u76ee\u306e\u51e6\u7406\u3067\u306f 2 \u304c\u3001\u2026\u300110 \u56de\u76ee\u306e\u51e6\u7406\u3067\u306f 10 \u304c\u5165\u3063\u3066\u3044\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u6570\u5b66\u7684\u306b\u66f8\u3051\u3070\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"i")," \u306b\u306f\u3001\u958b\u59cb\u5024\u3092 ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," \u3001\u7d42\u7aef\u5024\u3092 ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"b")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))," \u3068\u3059\u308b\u3068 ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"b"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[a,b)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u3068\u306a\u308b\u3088\u3046\u306a\u6574\u6570\u304c\u9806\u756a\u306b\u5165\u3063\u3066\u3044\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"for \u6587\u306f\u540c\u3058\u51e6\u7406\u3092\u305f\u3060\u7e70\u308a\u8fd4\u3057\u305f\u3044\u3068\u304d\u306b\u3082\u7528\u3044\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(l.Z,{path:"/for/repeat_hello.ipynb",mdxType:"ViewSource"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0a\u8a18\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u3001\u6b21\u3068\u540c\u3058\u3067\u3059\u3002"),(0,r.kt)(l.Z,{path:"/for/repeat_hello2.ipynb",mdxType:"ViewSource"}),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Python \u3067\u306f\u3001\u5909\u6570\u306e\u5024\u304c\u4f7f\u308f\u308c\u306a\u3044\u3068\u304d\u306b\u306f\u3001\u5909\u6570\u540d\u306b\u30a2\u30f3\u30c0\u30fc\u30d0\u30fc(",(0,r.kt)("inlineCode",{parentName:"p"},"_"),")\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6b21\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u898b\u308c\u3070\u5206\u304b\u308b\u3088\u3046\u306b\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," \u95a2\u6570\u306b\u5f15\u6570\u3092\u4e00\u3064\u3060\u3051\u6e21\u3059\u3068\u3001\u958b\u59cb\u5024\u306f 0 \u3068\u307f\u306a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(l.Z,{path:"/for/range.ipynb",mdxType:"ViewSource"})))),(0,r.kt)("admonition",{title:"while \u6587",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Python \u3067\u306f\u3001while \u6587\u3082\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\nwhile \u6587\u306e\u69cb\u6587\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u6761\u4ef6\u5f0f\u304c\u771f\u306e\u3068\u304d\u306b\u5b9f\u884c\u3057\u7d9a\u3051\u307e\u3059\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"while \u6761\u4ef6\u5f0f:\n    \u4efb\u610f\u306e\u51e6\u7406\n")),(0,r.kt)("p",{parentName:"admonition"},"\u4f8b\u3068\u3057\u3066\u30011 \u304b\u3089 10 \u307e\u3067\u306e\u548c\u3092\u6c42\u3081\u308b while \u6587\u3092\u4f7f\u3063\u305f\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)(l.Z,{path:"/for/while.ipynb",mdxType:"ViewSource"})),(0,r.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-1"},"\u7df4\u7fd2\u554f\u984c 1"),(0,r.kt)("p",null,(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1")))))," \u304b\u3089 ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," \u307e\u3067\u306e\u548c\u3092\u6c42\u3081\u308b\u95a2\u6570\u3092\u4f5c\u3063\u3066\u3001\u5b9f\u969b\u306b 1 \u304b\u3089 10 \u307e\u3067\u306e\u548c\u3092\u6c42\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)(m.Z,{mdxType:"Answer"},(0,r.kt)(l.Z,{path:"/for/up_to.ipynb",mdxType:"ViewSource"}),(0,r.kt)("p",null,"\u5b9f\u306f\u3001\u3053\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u3082\u3063\u3068\u7c21\u5358\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u6b21\u9805\u306e\u914d\u5217\u306e\u5185\u5bb9\u304c\u308f\u304b\u3063\u3066\u3044\u306a\u3044\u3068\u7406\u89e3\u3067\u304d\u306a\u3044\u305f\u3081\u3001\u6b21\u9805\u3067\u8a73\u3057\u304f\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.kt)(l.Z,{path:"/for/up_to_sum.ipynb",mdxType:"ViewSource"})),(0,r.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-2"},"\u7df4\u7fd2\u554f\u984c 2"),(0,r.kt)("p",null,(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," \u306e\u968e\u4e57\u3092\u6c42\u3081\u308b\u95a2\u6570\u3092\u4f5c\u3063\u3066\u3001\u5b9f\u969b\u306b 10 \u306e\u968e\u4e57\u3092\u6c42\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)(m.Z,{mdxType:"Answer"},(0,r.kt)(l.Z,{path:"/for/factorial.ipynb",mdxType:"ViewSource"}),(0,r.kt)("p",null,"\u3061\u306a\u307f\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u968e\u4e57\u3092\u8a08\u7b97\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u304c\u5165\u3063\u3066\u3044\u308b\u3088\u3046\u3067\u3059\u3002\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/ja/3/library/math.html#math.factorial"},"\u3053\u3061\u3089")),(0,r.kt)("p",null,"\u3053\u308c\u3092\u4f7f\u3048\u3070\u3001\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(l.Z,{path:"/for/factorial_math.ipynb",mdxType:"ViewSource"})))}u.isMDXComponent=!0}}]);