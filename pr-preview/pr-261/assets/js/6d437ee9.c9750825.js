"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[6995],{84765:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(67294),l=a(34673);function r(t){let{children:e}=t;return n.createElement(l.Z,{summary:n.createElement("summary",null,"\u89e3\u7b54")},e)}},90147:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(67294),l=a(34673);function r(t){let{children:e}=t;return n.createElement(l.Z,{summary:n.createElement("summary",null,"\u30d2\u30f3\u30c8")},e)}},45140:(t,e,a)=>{a.d(e,{Z:()=>N});var n=a(67294),l=a(40667),r=a(86886),m=a(15861),p=a(93193),i=a(26126),u=a(74005),o=a(62288),s=a(17440),c=a(1849),k=a(3018),d=a(98034);function g(t,e,a){const n=function(t,e,a){let n=0;for(let l=e-1;l<=e+1;l++)for(let e=a-1;e<=a+1;e++)0<=l&&l<t.length&&0<=e&&e<t[0].length&&(n+=Number(t[l][e]));return n-Number(t[e][a])}(t,e,a);return t[e][a]&&2===n||3===n}function N(t){let{data:e=Array(100).fill().map((()=>Array(100).fill(!1)))}=t;const[a,N]=(0,n.useState)(e),[y,b]=(0,n.useState)(4),[f,x]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const t=setInterval((()=>{f&&N(function(t){const e=t.map((t=>t.map((t=>t))));for(let a=0;a<t.length;a++)for(let n=0;n<t[0].length;n++)e[a][n]=g(t,a,n);return e}(a))}),4e3/y);return()=>{clearInterval(t)}}),[f,a]),n.createElement(n.Fragment,null,n.createElement(i.d$,{initialScale:7},(t=>{let{zoomIn:e,zoomOut:r,resetTransform:m}=t;return n.createElement(n.Fragment,null,n.createElement(l.Z,{onClick:()=>{e()}},n.createElement(u.Z,null)),n.createElement(l.Z,{onClick:()=>{r()}},n.createElement(o.Z,null)),n.createElement(l.Z,{onClick:()=>{m()}},n.createElement(s.Z,null)),n.createElement(i.Uv,null,n.createElement(h,{board:a,setBoard:N})))})),n.createElement(r.ZP,{container:!0,direction:"row",spacing:2,alignItems:"center"},n.createElement(r.ZP,{item:!0},n.createElement(l.Z,{onClick:()=>{x(!f)}},f?n.createElement(d.Z,null):n.createElement(k.Z,null))),n.createElement(r.ZP,{item:!0},n.createElement(l.Z,{onClick:()=>{N(e)}},n.createElement(c.Z,null))),n.createElement(r.ZP,{item:!0},n.createElement(m.Z,{gutterBottom:!0},"\u901f\u3055")),n.createElement(r.ZP,{item:!0,xs:!0},n.createElement(p.ZP,{value:y,onChange:t=>{b(t.target.value)},min:1,step:1,max:100,valueLabelDisplay:"auto"}))))}function h(t){let{board:e,setBoard:a}=t;const l=52*e.length+2,r=52*e[0].length+2;return n.createElement(n.Fragment,null,n.createElement("svg",{width:"100%",height:"100%",viewBox:`0 0 ${l} ${r}`},n.createElement("defs",null),n.createElement("g",null,n.createElement("rect",{x:"0",y:"0",width:l,height:r,fill:"#808080"}),e.map(((t,l)=>t.map(((t,r)=>n.createElement("rect",{key:`${l},${r}`,x:52*r+2,y:52*l+2,width:"50",height:"50",fill:t?"#000000":"#ffffff",onClick:()=>{const t=[...e];t[l][r]=!e[l][r],a(t)}}))))))))}},41089:(t,e,a)=>{a.d(e,{Z:()=>d});var n=a(67294),l=a(7174),r=a.n(l),m=a(31413),p=a(35993);const i="root_frVT";function u(t){let{path:e}=t;return n.createElement(n.Fragment,null,n.createElement("div",{className:i},n.createElement("a",{href:`https://colab.research.google.com/github/sikepuri-algorithm/sikepuri-algorithm.github.io/blob/main/static${e}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}))))}const o="iframe-wrapper_kRL9";function s(t,e){const a=new(r())({newline:!0});switch(t){case"text":return a.toHtml(e);case"html":return e;case"png":return`<img src="data:image/png;base64,${e}"></img>`;case"js":return`<script>${e}<\/script>`}}function c(t){const e=[];let a="normal";for(const n of t)switch(n.output_type){case"stream":e.push(s("text",n.text.join("")));break;case"execute_result":{const t=[];null!=n.data["text/plain"]&&t.push(s("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&t.push(s("html",n.data["text/html"].join(""))),e.push(t.join(""));break}case"error":e.push(s("text",n.traceback.join(""))),a="error";break;case"display_data":{const t=[];null!=n.data["text/plain"]&&t.push(s("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&t.push(s("html",n.data["text/html"].join(""))),null!=n.data["application/javascript"]&&t.push(s("js",n.data["application/javascript"])),null!=n.data["image/png"]&&t.push(s("png",n.data["image/png"])),e.push(t.join(""));break}}return{result:e.join(""),cellType:a}}function k(t){let{children:e,cellColor:a,title:l}=t;return n.createElement("div",{className:o,style:{backgroundColor:a}},n.createElement("iframe",{height:"40px",width:"100%",style:{minHeight:"40px",maxHeight:"620px"},srcDoc:e,onLoad:t=>{const e=t.target;e.height=e.contentDocument.documentElement.scrollHeight+"px"},title:l}))}function d(t){let{path:e,noOutput:a=!1}=t;const[l,r]=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch(e).then((t=>t.json())).then((t=>{r(function(t){const e=[];for(const a of t.cells)switch(a.cell_type){case"markdown":e.push({cell_type:"markdown",source:0===a.source.length?null:a.source.join("")});break;case"code":{const{result:t,cellType:n}=c(a.outputs);e.push({cell_type:"code",source:0===a.source.length?null:a.source.join(""),output:0===a.outputs.length?null:t,cellColor:"normal"===n?"#eee":"#ffdddc"});break}}return e}(t))}))}),[]),n.createElement(n.Fragment,null,l.map(((t,e)=>n.createElement(n.Fragment,{key:e},"markdown"===t.cell_type&&null!=t.source&&n.createElement(k,{cellColor:"#f8f8f8",title:"Markdown Code"},(0,p.Z)(t.source)),"code"===t.cell_type&&n.createElement(n.Fragment,null,null!=t.source&&n.createElement(m.Z,{language:"python"},t.source),!a&&null!=t.output&&n.createElement(k,{cellColor:t.cellColor,title:"Code Output"},t.output))))),n.createElement(u,{path:e}))}},56922:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(67294),l=a(45140);const r={React:n,...n,LifeGame:function(){return n.createElement(n.Fragment,null,n.createElement("div",{style:{maxWidth:"200px"}},n.createElement(l.Z,null)))}}},73390:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),l=(a(67294),a(3905)),r=a(41089),m=a(90147),p=a(84765);const i={sidebar_position:11},u="\u591a\u6b21\u5143\u914d\u5217",o={unversionedId:"python/multi-array/index",id:"python/multi-array/index",title:"\u591a\u6b21\u5143\u914d\u5217",description:"\u4e8c\u6b21\u5143\u914d\u5217",source:"@site/docs/02-python/11-multi-array/index.mdx",sourceDirName:"02-python/11-multi-array",slug:"/python/multi-array/",permalink:"/pr-preview/pr-261/docs/python/multi-array/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/02-python/11-multi-array/index.mdx",tags:[],version:"current",lastUpdatedAt:1675730680,formattedLastUpdatedAt:"2023\u5e742\u67087\u65e5",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"\u914d\u5217",permalink:"/pr-preview/pr-261/docs/python/array/"},next:{title:"\u7df4\u7fd2\u554f\u984c",permalink:"/pr-preview/pr-261/docs/python/practice/"}},s={},c=[{value:"\u4e8c\u6b21\u5143\u914d\u5217",id:"\u4e8c\u6b21\u5143\u914d\u5217",level:2},{value:"\u7df4\u7fd2\u554f\u984c",id:"\u7df4\u7fd2\u554f\u984c",level:3},{value:"\u4e09\u6b21\u5143\u914d\u5217",id:"\u4e09\u6b21\u5143\u914d\u5217",level:2},{value:"\u7df4\u7fd2\u554f\u984c",id:"\u7df4\u7fd2\u554f\u984c-1",level:3},{value:"\u591a\u6b21\u5143\u914d\u5217",id:"\u591a\u6b21\u5143\u914d\u5217-1",level:2}],k={toc:c};function d(t){let{components:e,...i}=t;return(0,l.kt)("wrapper",(0,n.Z)({},k,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u591a\u6b21\u5143\u914d\u5217"},"\u591a\u6b21\u5143\u914d\u5217"),(0,l.kt)("h2",{id:"\u4e8c\u6b21\u5143\u914d\u5217"},"\u4e8c\u6b21\u5143\u914d\u5217"),(0,l.kt)("p",null,"\u524d\u9805\u3067\u306f\u751f\u5f92\u306e",(0,l.kt)("strong",{parentName:"p"},"\u6570\u5b66"),"\u306e\u70b9\u6570\u306e\u307f\u306b\u3064\u3044\u3066\u8003\u3048\u307e\u3057\u305f\u304c\u3001\u751f\u5f92\u306e",(0,l.kt)("strong",{parentName:"p"},"\u5168\u6559\u79d1"),"\u306e\u70b9\u6570\u306b\u3064\u3044\u3066\u8003\u3048\u305f\u3089\u3001\u3069\u3046\u306a\u308b\u3067\u3057\u3087\u3046\u3002"),(0,l.kt)("p",null,"A\u3001B\u3001C \u306e 3 \u4eba\u306e\u751f\u5f92\u304c\u3044\u3066\u3001\u305d\u308c\u305e\u308c\u306e\u56fd\u8a9e\u3001\u6570\u5b66\u3001\u82f1\u8a9e\u306e\u70b9\u6570\u304c\u6b21\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u308b\u3068\u3057\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"\u56fd\u8a9e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u5b66"),(0,l.kt)("th",{parentName:"tr",align:null},"\u82f1\u8a9e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"A")),(0,l.kt)("td",{parentName:"tr",align:null},"83"),(0,l.kt)("td",{parentName:"tr",align:null},"75"),(0,l.kt)("td",{parentName:"tr",align:null},"32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"B")),(0,l.kt)("td",{parentName:"tr",align:null},"73"),(0,l.kt)("td",{parentName:"tr",align:null},"53"),(0,l.kt)("td",{parentName:"tr",align:null},"84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"C")),(0,l.kt)("td",{parentName:"tr",align:null},"63"),(0,l.kt)("td",{parentName:"tr",align:null},"48"),(0,l.kt)("td",{parentName:"tr",align:null},"64")))),(0,l.kt)("p",null,"\u524d\u9805\u306e\u5185\u5bb9\u3092\u4f7f\u3063\u3066\u3001\u70b9\u6570\u306e\u5408\u8a08\u3092\u8a08\u7b97\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)(r.Z,{path:"/multi-array/calc_sum.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"\u4e00\u5fdc\u3067\u304d\u307e\u3057\u305f\u304c\u3001\u751f\u5f92\u306e\u4eba\u6570\u304c\u5897\u3048\u3066\u3057\u307e\u3046\u3068\u5927\u5909\u3067\u3059\u3057\u3001\u751f\u5f92\u306e\u4eba\u6570\u304c\u5909\u308f\u308b\u3054\u3068\u306b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u304d\u76f4\u3055\u306a\u3044\u3068\u3044\u3051\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,"\u3053\u3053\u3067\u3001\u4e8c\u6b21\u5143\u914d\u5217\u3092\u4f7f\u3044\u307e\u3059\u3002\u4e8c\u6b21\u5143\u914d\u5217\u306f\u540d\u524d\u306e\u901a\u308a\u914d\u5217\u304c\u4e8c\u6b21\u5143\u3068\u306a\u3063\u305f\u3082\u306e\u3067\u3001\u914d\u5217\u306e\u914d\u5217\u3067\u3059\u3002\u6570\u5b66\u306b\u304a\u3051\u308b\u884c\u5217\u3068\u540c\u3058\u3088\u3046\u306a\u3082\u306e\u3067\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u4e8c\u6b21\u5143\u914d\u5217\u306e\u8aac\u660e",src:a(78856).Z,width:"761",height:"442"})),(0,l.kt)("p",null,"\u4e0a\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4e8c\u6b21\u5143\u914d\u5217\u3092\u4f7f\u3063\u3066\u8a18\u8ff0\u3059\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)(r.Z,{path:"/multi-array/calc_sum_revised.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"\u4e8c\u6b21\u5143\u914d\u5217\u3092\u4f5c\u308b\u3068\u304d\u306f\u3001\u914d\u5217\u306e\u8981\u7d20\u3092\u914d\u5217\u306b\u3059\u308c\u3070\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\u914d\u5217\u540d = [\u7b2c\u4e00\u884c\u306e\u914d\u5217, \u7b2c\u4e8c\u884c\u306e\u914d\u5217, \u7b2c\u4e09\u884c\u306e\u914d\u5217, ..., \u7b2ci\u884c\u306e\u914d\u5217]\n")),(0,l.kt)("p",null,(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"i")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," \u884c\u3001",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"j")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j")))))," \u5217\u306e\u6570\u5b57\u3092\u53d6\u308a\u51fa\u3059\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\u914d\u5217\u540d[i][j]\n")),(0,l.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c"},"\u7df4\u7fd2\u554f\u984c"),(0,l.kt)("p",null,"\u5168\u6559\u79d1\u306e\u70b9\u6570\u306e\u5408\u8a08\u70b9\u306e\u6700\u9ad8\u70b9\u3092\u6c42\u3081\u308b\u95a2\u6570\u3092\u6c42\u3081\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,"A\u3001B\u3001C \u306e 3 \u4eba\u306e\u751f\u5f92\u304c\u3044\u3066\u3001\u305d\u308c\u305e\u308c\u306e\u56fd\u8a9e\u3001\u6570\u5b66\u3001\u82f1\u8a9e\u306e\u70b9\u6570\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"\u56fd\u8a9e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u5b66"),(0,l.kt)("th",{parentName:"tr",align:null},"\u82f1\u8a9e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"A")),(0,l.kt)("td",{parentName:"tr",align:null},"83"),(0,l.kt)("td",{parentName:"tr",align:null},"75"),(0,l.kt)("td",{parentName:"tr",align:null},"32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"B")),(0,l.kt)("td",{parentName:"tr",align:null},"73"),(0,l.kt)("td",{parentName:"tr",align:null},"53"),(0,l.kt)("td",{parentName:"tr",align:null},"84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"C")),(0,l.kt)("td",{parentName:"tr",align:null},"63"),(0,l.kt)("td",{parentName:"tr",align:null},"48"),(0,l.kt)("td",{parentName:"tr",align:null},"64")))),(0,l.kt)(m.Z,{mdxType:"Hint"},(0,l.kt)("p",null,"\u307e\u305a\u305d\u308c\u305e\u308c\u306e\u751f\u5f92\u306e\u5f97\u70b9\u306e\u5408\u8a08\u3092\u6c42\u3081\u308b\u95a2\u6570\u3092\u4f5c\u3063\u3066\u304b\u3089\u3001\u305d\u306e\u6700\u9ad8\u70b9\u3092\u6c42\u3081\u308b\u95a2\u6570\u3092\u4f5c\u308b\u3068\u826f\u3044\u3067\u3057\u3087\u3046\u3002")),(0,l.kt)(p.Z,{mdxType:"Answer"},(0,l.kt)(r.Z,{path:"/multi-array/total_score_max.ipynb",mdxType:"ViewSource"})),(0,l.kt)("h2",{id:"\u4e09\u6b21\u5143\u914d\u5217"},"\u4e09\u6b21\u5143\u914d\u5217"),(0,l.kt)("p",null,"\u4e8c\u6b21\u5143\u914d\u5217\u3092\u3055\u3089\u306b\u767a\u5c55\u3055\u305b\u3066\u3001\u4e09\u6b21\u5143\u914d\u5217\u3092\u8003\u3048\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4f8b\u3048\u3070\u30011 \u7d44\u306b A \u3068 B \u304c\u6240\u5c5e\u3057\u3066\u3044\u3066\u30012 \u7d44\u306b C \u3068 D \u304c\u6240\u5c5e\u3057\u3066\u3044\u308b\u3068\u3057\u307e\u3059\u3002\n\u305d\u306e\u6642\u3001\u305d\u308c\u305e\u308c\u306e\u751f\u5f92\u306e\u56fd\u8a9e\u3068\u6570\u5b66\u3068\u82f1\u8a9e\u306e\u70b9\u6570\u304c\u6b21\u306e\u3088\u3046\u306b\u4e0e\u3048\u3089\u308c\u305f\u3068\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"1 \u7d44"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"\u56fd\u8a9e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u5b66"),(0,l.kt)("th",{parentName:"tr",align:null},"\u82f1\u8a9e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"A")),(0,l.kt)("td",{parentName:"tr",align:null},"51"),(0,l.kt)("td",{parentName:"tr",align:null},"56"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"B")),(0,l.kt)("td",{parentName:"tr",align:null},"47"),(0,l.kt)("td",{parentName:"tr",align:null},"52"),(0,l.kt)("td",{parentName:"tr",align:null},"58")))),(0,l.kt)("p",null,"2 \u7d44"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"\u56fd\u8a9e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u5b66"),(0,l.kt)("th",{parentName:"tr",align:null},"\u82f1\u8a9e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"C")),(0,l.kt)("td",{parentName:"tr",align:null},"24"),(0,l.kt)("td",{parentName:"tr",align:null},"92"),(0,l.kt)("td",{parentName:"tr",align:null},"34")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"D")),(0,l.kt)("td",{parentName:"tr",align:null},"28"),(0,l.kt)("td",{parentName:"tr",align:null},"44"),(0,l.kt)("td",{parentName:"tr",align:null},"19")))),(0,l.kt)("p",null,"\u4e09\u6b21\u5143\u914d\u5217\u3092\u7528\u3044\u3066\u3001\u3053\u308c\u306e\u5408\u8a08\u70b9\u3092\u6c42\u3081\u308b\u3068\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)(r.Z,{path:"/multi-array/calc_sum3d.ipynb",mdxType:"ViewSource"}),(0,l.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-1"},"\u7df4\u7fd2\u554f\u984c"),(0,l.kt)("p",null,"\u5168\u6559\u79d1\u306e\u70b9\u6570\u306e\u5408\u8a08\u70b9\u306e\u6700\u9ad8\u70b9\u3092\u6c42\u3081\u308b\u95a2\u6570\u3092\u6c42\u3081\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,"1 \u7d44\u306b A \u3068 B \u304c\u6240\u5c5e\u3057\u3066\u3044\u3066\u30012 \u7d44\u306b C \u3068 D \u304c\u6240\u5c5e\u3057\u3066\u3044\u307e\u3059\u3002\n\u305d\u306e\u6642\u3001\u305d\u308c\u305e\u308c\u306e\u751f\u5f92\u306e\u56fd\u8a9e\u3068\u6570\u5b66\u3068\u82f1\u8a9e\u306e\u70b9\u6570\u304c\u6b21\u306e\u3088\u3046\u306b\u4e0e\u3048\u3089\u308c\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"1 \u7d44"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"\u56fd\u8a9e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u5b66"),(0,l.kt)("th",{parentName:"tr",align:null},"\u82f1\u8a9e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"A")),(0,l.kt)("td",{parentName:"tr",align:null},"51"),(0,l.kt)("td",{parentName:"tr",align:null},"56"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"B")),(0,l.kt)("td",{parentName:"tr",align:null},"47"),(0,l.kt)("td",{parentName:"tr",align:null},"52"),(0,l.kt)("td",{parentName:"tr",align:null},"58")))),(0,l.kt)("p",null,"2 \u7d44"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"\u56fd\u8a9e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u5b66"),(0,l.kt)("th",{parentName:"tr",align:null},"\u82f1\u8a9e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"C")),(0,l.kt)("td",{parentName:"tr",align:null},"24"),(0,l.kt)("td",{parentName:"tr",align:null},"92"),(0,l.kt)("td",{parentName:"tr",align:null},"34")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"D")),(0,l.kt)("td",{parentName:"tr",align:null},"28"),(0,l.kt)("td",{parentName:"tr",align:null},"44"),(0,l.kt)("td",{parentName:"tr",align:null},"19")))),(0,l.kt)(p.Z,{mdxType:"Answer"},(0,l.kt)(r.Z,{path:"/multi-array/total_score_max_2d.ipynb",mdxType:"ViewSource"})),(0,l.kt)("h2",{id:"\u591a\u6b21\u5143\u914d\u5217-1"},"\u591a\u6b21\u5143\u914d\u5217"),(0,l.kt)("p",null,"\u3055\u3089\u306b\u767a\u5c55\u3055\u305b\u3066\u3001\u56db\u6b21\u5143\u914d\u5217\u3001\u4e94\u6b21\u5143\u914d\u5217\u3001...\u3092\u8003\u3048\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"))}d.isMDXComponent=!0},78856:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/array.drawio-fc3bc3c4374d6201b2764c5ba4ed4358.svg"}}]);