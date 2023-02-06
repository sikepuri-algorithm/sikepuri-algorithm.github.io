"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[7249],{84765:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),l=a(34673);function r(e){let{children:t}=e;return n.createElement(l.Z,{summary:n.createElement("summary",null,"\u89e3\u7b54")},t)}},90147:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),l=a(34673);function r(e){let{children:t}=e;return n.createElement(l.Z,{summary:n.createElement("summary",null,"\u30d2\u30f3\u30c8")},t)}},45140:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),l=a(40667),r=a(86886),p=a(15861),m=a(93193),s=a(26126),i=a(74005),o=a(62288),c=a(17440),k=a(1849),u=a(3018),d=a(98034);function N(e,t,a){const n=function(e,t,a){let n=0;for(let l=t-1;l<=t+1;l++)for(let t=a-1;t<=a+1;t++)0<=l&&l<e.length&&0<=t&&t<e[0].length&&(n+=Number(e[l][t]));return n-Number(e[t][a])}(e,t,a);return e[t][a]&&2===n||3===n}function h(e){let{data:t=Array(100).fill().map((()=>Array(100).fill(!1)))}=e;const[a,h]=(0,n.useState)(t),[g,f]=(0,n.useState)(4),[b,x]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=setInterval((()=>{b&&h(function(e){const t=e.map((e=>e.map((e=>e))));for(let a=0;a<e.length;a++)for(let n=0;n<e[0].length;n++)t[a][n]=N(e,a,n);return t}(a))}),4e3/g);return()=>{clearInterval(e)}}),[b,a]),n.createElement(n.Fragment,null,n.createElement(s.d$,{initialScale:7},(e=>{let{zoomIn:t,zoomOut:r,resetTransform:p}=e;return n.createElement(n.Fragment,null,n.createElement(l.Z,{onClick:()=>{t()}},n.createElement(i.Z,null)),n.createElement(l.Z,{onClick:()=>{r()}},n.createElement(o.Z,null)),n.createElement(l.Z,{onClick:()=>{p()}},n.createElement(c.Z,null)),n.createElement(s.Uv,null,n.createElement(y,{board:a,setBoard:h})))})),n.createElement(r.ZP,{container:!0,direction:"row",spacing:2,alignItems:"center"},n.createElement(r.ZP,{item:!0},n.createElement(l.Z,{onClick:()=>{x(!b)}},b?n.createElement(d.Z,null):n.createElement(u.Z,null))),n.createElement(r.ZP,{item:!0},n.createElement(l.Z,{onClick:()=>{h(t)}},n.createElement(k.Z,null))),n.createElement(r.ZP,{item:!0},n.createElement(p.Z,{gutterBottom:!0},"\u901f\u3055")),n.createElement(r.ZP,{item:!0,xs:!0},n.createElement(m.ZP,{value:g,onChange:e=>{f(e.target.value)},min:1,step:1,max:100,valueLabelDisplay:"auto"}))))}function y(e){let{board:t,setBoard:a}=e;const l=52*t.length+2,r=52*t[0].length+2;return n.createElement(n.Fragment,null,n.createElement("svg",{width:"100%",height:"100%",viewBox:`0 0 ${l} ${r}`},n.createElement("defs",null),n.createElement("g",null,n.createElement("rect",{x:"0",y:"0",width:l,height:r,fill:"#808080"}),t.map(((e,l)=>e.map(((e,r)=>n.createElement("rect",{key:`${l},${r}`,x:52*r+2,y:52*l+2,width:"50",height:"50",fill:e?"#000000":"#ffffff",onClick:()=>{const e=[...t];e[l][r]=!t[l][r],a(e)}}))))))))}},41089:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),l=a(7174),r=a.n(l),p=a(31413),m=a(35993);const s="root_frVT";function i(e){let{path:t}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:s},n.createElement("a",{href:`https://colab.research.google.com/github/sikepuri-algorithm/sikepuri-algorithm.github.io/blob/main/static${t}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}))))}const o="iframe-wrapper_kRL9";function c(e,t){const a=new(r())({newline:!0});switch(e){case"text":return a.toHtml(t);case"html":return t;case"png":return`<img src="data:image/png;base64,${t}"></img>`;case"js":return`<script>${t}<\/script>`}}function k(e){const t=[];let a="normal";for(const n of e)switch(n.output_type){case"stream":t.push(c("text",n.text.join("")));break;case"execute_result":{const e=[];null!=n.data["text/plain"]&&e.push(c("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&e.push(c("html",n.data["text/html"].join(""))),t.push(e.join(""));break}case"error":t.push(c("text",n.traceback.join(""))),a="error";break;case"display_data":{const e=[];null!=n.data["text/plain"]&&e.push(c("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&e.push(c("html",n.data["text/html"].join(""))),null!=n.data["application/javascript"]&&e.push(c("js",n.data["application/javascript"])),null!=n.data["image/png"]&&e.push(c("png",n.data["image/png"])),t.push(e.join(""));break}}return{result:t.join(""),cellType:a}}function u(e){let{children:t,cellColor:a,title:l}=e;return n.createElement("div",{className:o,style:{backgroundColor:a}},n.createElement("iframe",{height:"40px",width:"100%",style:{minHeight:"40px",maxHeight:"620px"},srcDoc:t,onLoad:e=>{const t=e.target;t.height=t.contentDocument.documentElement.scrollHeight+"px"},title:l}))}function d(e){let{path:t,noOutput:a=!1}=e;const[l,r]=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch(t).then((e=>e.json())).then((e=>{r(function(e){const t=[];for(const a of e.cells)switch(a.cell_type){case"markdown":t.push({cell_type:"markdown",source:0===a.source.length?null:a.source.join("")});break;case"code":{const{result:e,cellType:n}=k(a.outputs);t.push({cell_type:"code",source:0===a.source.length?null:a.source.join(""),output:0===a.outputs.length?null:e,cellColor:"normal"===n?"#eee":"#ffdddc"});break}}return t}(e))}))}),[]),n.createElement(n.Fragment,null,l.map(((e,t)=>n.createElement(n.Fragment,{key:t},"markdown"===e.cell_type&&null!=e.source&&n.createElement(u,{cellColor:"#f8f8f8",title:"Markdown Code"},(0,m.Z)(e.source)),"code"===e.cell_type&&n.createElement(n.Fragment,null,null!=e.source&&n.createElement(p.Z,{language:"python"},e.source),!a&&null!=e.output&&n.createElement(u,{cellColor:e.cellColor,title:"Code Output"},e.output))))),n.createElement(i,{path:t}))}},56922:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),l=a(45140);const r={React:n,...n,LifeGame:function(){return n.createElement(n.Fragment,null,n.createElement("div",{style:{maxWidth:"200px"}},n.createElement(l.Z,null)))}}},998:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>k});var n=a(87462),l=(a(67294),a(3905)),r=a(41089),p=a(90147),m=a(84765);const s={sidebar_position:8},i="\u6761\u4ef6\u5206\u5c90",o={unversionedId:"python/if/index",id:"python/if/index",title:"\u6761\u4ef6\u5206\u5c90",description:"\u3053\u3053\u3067\u306f\u3001Python \u3067\u6761\u4ef6\u5206\u5c90\u3092\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u5b66\u3093\u3067\u3044\u304d\u307e\u3059\u3002",source:"@site/docs/01-python/08-if/index.mdx",sourceDirName:"01-python/08-if",slug:"/python/if/",permalink:"/docs/python/if/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/01-python/08-if/index.mdx",tags:[],version:"current",lastUpdatedAt:1675693932,formattedLastUpdatedAt:"2023\u5e742\u67086\u65e5",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/docs/python/pip/"},next:{title:"\u7e70\u308a\u8fd4\u3057\u51e6\u7406",permalink:"/docs/python/for/"}},c={},k=[{value:"\u8ad6\u7406\u5024",id:"\u8ad6\u7406\u5024",level:2},{value:"\u6bd4\u8f03\u6f14\u7b97\u5b50",id:"\u6bd4\u8f03\u6f14\u7b97\u5b50",level:2},{value:"\u8ad6\u7406\u6f14\u7b97\u5b50",id:"\u8ad6\u7406\u6f14\u7b97\u5b50",level:2},{value:"\u6761\u4ef6\u5206\u5c90",id:"\u6761\u4ef6\u5206\u5c90-1",level:2},{value:"if",id:"if",level:3},{value:"if ~ else",id:"if--else",level:3},{value:"if ~ elif ~ else",id:"if--elif--else",level:3},{value:"\u7df4\u7fd2\u554f\u984c 1",id:"\u7df4\u7fd2\u554f\u984c-1",level:3},{value:"\u7df4\u7fd2\u554f\u984c 2",id:"\u7df4\u7fd2\u554f\u984c-2",level:3},{value:"\u7df4\u7fd2\u554f\u984c 3",id:"\u7df4\u7fd2\u554f\u984c-3",level:3}],u={toc:k};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6761\u4ef6\u5206\u5c90"},"\u6761\u4ef6\u5206\u5c90"),(0,l.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001Python \u3067\u6761\u4ef6\u5206\u5c90\u3092\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u5b66\u3093\u3067\u3044\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u8ad6\u7406\u5024"},"\u8ad6\u7406\u5024"),(0,l.kt)("p",null,"Python \u3067\u306f\u3001\u6587\u5b57\u5217\u3084\u6570\u5b57\u4ee5\u5916\u306b\u3082\u8ad6\u7406\u5024\u3068\u3044\u3046\u771f\u304b\u507d\u304b\u3092\u8868\u3059\u5024\u304c\u3042\u308a\u307e\u3059\u3002\u771f\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"True"),"\u3001\u507d\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," \u3068\u8868\u305b\u3001\u3053\u308c\u306f\u5909\u6570\u306a\u3069\u306b\u3082\u4ee3\u5165\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4e0b\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"True")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," \u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002",(0,l.kt)("inlineCode",{parentName:"p"},'"True"'),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},'"False"')," \u306e\u3088\u3046\u306b\u30c0\u30d6\u30eb\u30af\u30a9\u30fc\u30c6\u30fc\u30b7\u30e7\u30f3\uff08 ",(0,l.kt)("inlineCode",{parentName:"p"},'"')," \uff09\u304c\u3064\u3044\u3066\u3044\u306a\u3044\u3053\u3068\u306b\u6c17\u3092\u3064\u3051\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)(r.Z,{path:"/if/true.ipynb",mdxType:"ViewSource"}),(0,l.kt)(r.Z,{path:"/if/false.ipynb",mdxType:"ViewSource"}),(0,l.kt)("h2",{id:"\u6bd4\u8f03\u6f14\u7b97\u5b50"},"\u6bd4\u8f03\u6f14\u7b97\u5b50"),(0,l.kt)("p",null,"Python \u3067\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u6bd4\u8f03\u6f14\u7b97\u5b50\u3092\u7528\u3044\u3066\u771f\u507d\u3092\u5224\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u6b21\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"age > 20")," \u304c\u507d\u306a\u306e\u3067\u3001\u8ad6\u7406\u5024\u3067\u3042\u308b ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," \u304c\u8fd4\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)(r.Z,{path:"/if/comparison_operator.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"\u4ed6\u306b\u3082\u69d8\u3005\u306a\u6bd4\u8f03\u6f14\u7b97\u5b50\u304c\u3042\u308a\u307e\u3059\u3002\u306a\u305c\u304b ",(0,l.kt)("inlineCode",{parentName:"p"},"!=")," \u306e\u5b58\u5728\u3092\u5fd8\u308c\u308b\u4eba\u304c\u7d9a\u51fa\u3059\u308b\u306e\u3067\u3001\u8981\u6ce8\u610f\uff01"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6bd4\u8f03\u6f14\u7b97\u5b50"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"==")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b49\u3057\u3044"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{path:"/if/eq.ipynb",mdxType:"ViewSource"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"!=")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b49\u3057\u304f\u306a\u3044"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{path:"/if/neq.ipynb",mdxType:"ViewSource"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c0f\u306a\u308a"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{path:"/if/less_than.ipynb",mdxType:"ViewSource"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<=")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee5\u4e0b"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{path:"/if/below.ipynb",mdxType:"ViewSource"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5927\u306a\u308a"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{path:"/if/greater.ipynb",mdxType:"ViewSource"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">=")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee5\u4e0a"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{path:"/if/over.ipynb",mdxType:"ViewSource"}))))),(0,l.kt)("p",null,"\u4ed6\u306e\u591a\u304f\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u306f\u3067\u304d\u307e\u305b\u3093\u304c\u3001\u5b9f\u306f\u3001Python \u3067\u306f\u6570\u5b66\u306e\u3088\u3046\u306b\u8907\u6570\u306e\u6bd4\u8f03\u6f14\u7b97\u5b50\u3092\u4f7f\u3063\u305f\u6761\u4ef6\u3082\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)(r.Z,{path:"/if/multi_comparison_operator.ipynb",mdxType:"ViewSource"}),(0,l.kt)("h2",{id:"\u8ad6\u7406\u6f14\u7b97\u5b50"},"\u8ad6\u7406\u6f14\u7b97\u5b50"),(0,l.kt)("p",null,"\u8ad6\u7406\u5024\u306b\u5bfe\u3057\u3066\u3001\u8ad6\u7406\u6f14\u7b97\u5b50\u3092\u4f7f\u3063\u3066\u3055\u3089\u306b\u8907\u96d1\u306a\u8a08\u7b97\u3092\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)(r.Z,{path:"/if/logical_operator.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},">=")," \u4e00\u3064\u3092\u4f7f\u3063\u3066\u66f8\u304d\u63db\u3048\u305f\u6b21\u3068\u540c\u3058\u3067\u3059\u3002"),(0,l.kt)(r.Z,{path:"/if/logical_operator_another.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"\u4ed6\u306b\u3082\u69d8\u3005\u306a\u8ad6\u7406\u6f14\u7b97\u5b50\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8ad6\u7406\u6f14\u7b97\u5b50"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426\u5b9a"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{path:"/if/not.ipynb",mdxType:"ViewSource"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"and")),(0,l.kt)("td",{parentName:"tr",align:null},"\u304b\u3064"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{path:"/if/and.ipynb",mdxType:"ViewSource"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"or")),(0,l.kt)("td",{parentName:"tr",align:null},"\u307e\u305f\u306f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{path:"/if/or.ipynb",mdxType:"ViewSource"}))))),(0,l.kt)("h2",{id:"\u6761\u4ef6\u5206\u5c90-1"},"\u6761\u4ef6\u5206\u5c90"),(0,l.kt)("h3",{id:"if"},"if"),(0,l.kt)("p",null,"\u5e74\u9f62\u306b\u5fdc\u3058\u3066\u3001\u98f2\u9152\u53ef\u80fd\u306a\u5e74\u9f62\u304b\u3092\u5224\u5b9a\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u308a\u307e\u3057\u3087\u3046\u3002\u3057\u304b\u3057\u3001\u4eca\u307e\u3067\u306b\u5b66\u7fd2\u3057\u305f\u5185\u5bb9\u3067\u306f\u3053\u306e\u3088\u3046\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u308b\u3053\u3068\u306f\u3067\u304d\u305d\u3046\u306b\u3042\u308a\u307e\u305b\u3093\u3002\u3053\u306e\u3088\u3046\u306a\u51e6\u7406\u3092\u3059\u308b\u305f\u3081\u306b\u3001if \u6587\u304c\u4f7f\u3048\u307e\u3059\u3002\u98f2\u9152\u53ef\u80fd\u306a\u5e74\u9f62\u304b\u3092\u5224\u5b9a\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)(r.Z,{path:"/if/alcohol.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"if \u6587\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u6761\u4ef6\u5f0f\u306b\u306f\u3001\u5148\u7a0b\u306e\u6bd4\u8f03\u6f14\u7b97\u5b50\u3084\u8ad6\u7406\u6f14\u7b97\u5b50\u304c\u4f7f\u3048\u307e\u3059\u3002\n\u6761\u4ef6\u5f0f\u3092\u8a55\u4fa1\u3057\u305f\u7d50\u679c\u304c ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," \u3067\u3042\u308c\u3070\u3001\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"if \u6761\u4ef6\u5f0f:\n    \u771f\u306e\u6642\u306e\u51e6\u7406\n")),(0,l.kt)("h3",{id:"if--else"},"if ~ else"),(0,l.kt)("p",null,"\u6761\u4ef6\u304c\u507d\u306e\u6642\u306b\u3082\u884c\u3044\u305f\u3044\u51e6\u7406\u304c\u3042\u308b\u5834\u5408\u306f\u3001if ~ else \u6587\u3092\u7528\u3044\u3066\u3001\u6b21\u306e\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u672a\u6210\u5e74\u304b\u6210\u4eba\u304b\u3092\u5224\u5b9a\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)(r.Z,{path:"/if/legal_age.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"if ~ else \u6587\u306e\u69cb\u6587\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"if \u6761\u4ef6\u5f0f:\n    \u771f\u306e\u6642\u306e\u51e6\u7406\nelse:\n    \u507d\u306e\u6642\u306e\u51e6\u7406\n")),(0,l.kt)("h3",{id:"if--elif--else"},"if ~ elif ~ else"),(0,l.kt)("p",null,"\u6761\u4ef6\u304c\u507d\u306e\u6642\u3067\u3055\u3089\u306b\u6761\u4ef6\u5206\u5c90\u3092\u884c\u3044\u305f\u3044\u5834\u5408\u306f\u3001if ~ elif ~ else \u6587\u3092\u7528\u3044\u3066\u3001\u6b21\u306e\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u9078\u6319\u6a29\u3092\u5224\u5b9a\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)(r.Z,{path:"/if/the_right_to_vote.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"if ~ elif ~ else \u6587\u306e\u69cb\u6587\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"if \u6761\u4ef6\u5f0f1:\n    \u6761\u4ef6\u5f0f1\u304c\u771f\u306e\u6642\u306e\u51e6\u7406\nelif \u6761\u4ef6\u5f0f2:\n    \u6761\u4ef6\u5f0f1\u304c\u507d\u3067\u304b\u3064\u6761\u4ef6\u5f0f2\u304c\u771f\u306e\u6642\u306e\u51e6\u7406\nelse:\n    \u6761\u4ef6\u5f0f1\u3082\u6761\u4ef6\u5f0f2\u3082\u507d\u306e\u6642\u306e\u51e6\u7406\n")),(0,l.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-1"},"\u7df4\u7fd2\u554f\u984c 1"),(0,l.kt)("p",null,"\u5b66\u751f\u306e\u6210\u7e3e\u3092\u5224\u5b9a\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u5b66\u751f\u306e\u70b9\u6570\u304b\u3089\u3001\u512a\u4e0a\u3001\u512a\u3001\u826f\u3001\u53ef\u3001\u4e0d\u53ef\u3092\u5224\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6210\u7e3e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u70b9\u6570"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u512a\u4e0a"),(0,l.kt)("td",{parentName:"tr",align:null},"90 \u70b9\u4ee5\u4e0a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u512a"),(0,l.kt)("td",{parentName:"tr",align:null},"80\u301c89 \u70b9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u826f"),(0,l.kt)("td",{parentName:"tr",align:null},"65\u301c79 \u70b9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef"),(0,l.kt)("td",{parentName:"tr",align:null},"50\u301c64 \u70b9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u53ef"),(0,l.kt)("td",{parentName:"tr",align:null},"0\u301c49 \u70b9")))),(0,l.kt)(m.Z,{mdxType:"Answer"},(0,l.kt)(r.Z,{path:"/if/grade.ipynb",mdxType:"ViewSource"})),(0,l.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-2"},"\u7df4\u7fd2\u554f\u984c 2"),(0,l.kt)("p",null,"2 \u3064\u306e\u6570\u306e\u3046\u3061\u5927\u304d\u3044\u65b9\u306e\u6570\u3092\u8fd4\u3059\u95a2\u6570\u3092\u4f5c\u308a\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)(m.Z,{mdxType:"Answer"},(0,l.kt)(r.Z,{path:"/if/greater_val.ipynb",mdxType:"ViewSource"})),(0,l.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-3"},"\u7df4\u7fd2\u554f\u984c 3"),(0,l.kt)("p",null,"\u7d76\u5bfe\u5024\u3092\u6c42\u3081\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)(p.Z,{mdxType:"Hint"},(0,l.kt)("p",null,"\u6b21\u306e\u5f0f\u3092\u601d\u3044\u8d77\u3053\u305b\u3070\u3001\u4f5c\u308c\u305d\u3046\u3067\u3059\u3002"),(0,l.kt)("div",{className:"math math-display"},(0,l.kt)("span",{parentName:"div",className:"katex-display"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,l.kt)("mi",{parentName:"mrow"},"x"),(0,l.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,l.kt)("mo",{parentName:"mrow"},"="),(0,l.kt)("mrow",{parentName:"mrow"},(0,l.kt)("mo",{parentName:"mrow",fence:"true"},"{"),(0,l.kt)("mtable",{parentName:"mrow",rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em"},(0,l.kt)("mtr",{parentName:"mtable"},(0,l.kt)("mtd",{parentName:"mtr"},(0,l.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,l.kt)("mi",{parentName:"mstyle"},"x"))),(0,l.kt)("mtd",{parentName:"mtr"},(0,l.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,l.kt)("mrow",{parentName:"mstyle"},(0,l.kt)("mtext",{parentName:"mrow"},"if\xa0"),(0,l.kt)("mstyle",{parentName:"mrow",scriptlevel:"0",displaystyle:"false"},(0,l.kt)("mi",{parentName:"mstyle"},"x"),(0,l.kt)("mo",{parentName:"mstyle"},"\u2265"),(0,l.kt)("mn",{parentName:"mstyle"},"0")),(0,l.kt)("mtext",{parentName:"mrow"},","))))),(0,l.kt)("mtr",{parentName:"mtable"},(0,l.kt)("mtd",{parentName:"mtr"},(0,l.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,l.kt)("mrow",{parentName:"mstyle"},(0,l.kt)("mo",{parentName:"mrow"},"\u2212"),(0,l.kt)("mi",{parentName:"mrow"},"x")))),(0,l.kt)("mtd",{parentName:"mtr"},(0,l.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,l.kt)("mtext",{parentName:"mstyle"},"else."))))))),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"|x|= \\begin{dcases} x & \\text{if $x\\geq 0$,} \\\\ -x & \\text{else.} \\end{dcases}")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,l.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.kt)("span",{parentName:"span",className:"mrel"},"="),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"3em",verticalAlign:"-1.25em"}}),(0,l.kt)("span",{parentName:"span",className:"minner"},(0,l.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},(0,l.kt)("span",{parentName:"span",className:"delimsizing size4"},"{")),(0,l.kt)("span",{parentName:"span",className:"mord"},(0,l.kt)("span",{parentName:"span",className:"mtable"},(0,l.kt)("span",{parentName:"span",className:"col-align-l"},(0,l.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,l.kt)("span",{parentName:"span",className:"vlist-r"},(0,l.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.69em"}},(0,l.kt)("span",{parentName:"span",style:{top:"-3.69em"}},(0,l.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,l.kt)("span",{parentName:"span",className:"mord"},(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))),(0,l.kt)("span",{parentName:"span",style:{top:"-2.25em"}},(0,l.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,l.kt)("span",{parentName:"span",className:"mord"},(0,l.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))),(0,l.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,l.kt)("span",{parentName:"span",className:"vlist-r"},(0,l.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.19em"}},(0,l.kt)("span",{parentName:"span"}))))),(0,l.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"1em"}}),(0,l.kt)("span",{parentName:"span",className:"col-align-l"},(0,l.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,l.kt)("span",{parentName:"span",className:"vlist-r"},(0,l.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.69em"}},(0,l.kt)("span",{parentName:"span",style:{top:"-3.69em"}},(0,l.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,l.kt)("span",{parentName:"span",className:"mord"},(0,l.kt)("span",{parentName:"span",className:"mord text"},(0,l.kt)("span",{parentName:"span",className:"mord"},"if\xa0"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.kt)("span",{parentName:"span",className:"mrel"},"\u2265"),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.kt)("span",{parentName:"span",className:"mord"},"0,")))),(0,l.kt)("span",{parentName:"span",style:{top:"-2.25em"}},(0,l.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,l.kt)("span",{parentName:"span",className:"mord"},(0,l.kt)("span",{parentName:"span",className:"mord text"},(0,l.kt)("span",{parentName:"span",className:"mord"},"else."))))),(0,l.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,l.kt)("span",{parentName:"span",className:"vlist-r"},(0,l.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.19em"}},(0,l.kt)("span",{parentName:"span"}))))))),(0,l.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})))))))),(0,l.kt)(m.Z,{mdxType:"Answer"},(0,l.kt)(r.Z,{path:"/if/abs.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"\u5225\u89e3"),(0,l.kt)(r.Z,{path:"/if/abs2.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"\u5b9f\u306f\u3001\u7d44\u307f\u8fbc\u307f\u95a2\u6570\u3067 abs \u95a2\u6570\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u524d\u306b\u51fa\u3066\u304d\u305f",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/ja/3/library/math.html#math.fabs"},"math \u30e9\u30a4\u30d6\u30e9\u30ea\u306e fabs \u95a2\u6570"),"\u3082\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)(r.Z,{path:"/if/abs_default.ipynb",mdxType:"ViewSource"}),(0,l.kt)(r.Z,{path:"/if/abs_math.ipynb",mdxType:"ViewSource"})))}d.isMDXComponent=!0}}]);