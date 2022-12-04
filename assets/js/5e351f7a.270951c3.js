"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[151,918],{3665:(a,t,e)=>{e.d(t,{Z:()=>m});var n=e(7294),s=e(4673);function m(a){let{children:t}=a;return n.createElement(s.Z,{summary:n.createElement("summary",null,"\u89e3\u7b54")},t)}},2320:(a,t,e)=>{e.d(t,{Z:()=>h});var n=e(7294),s=e(7174),m=e.n(s),p=e(1686),r=e(7184);const l="root_frVT";function i(a){let{path:t}=a;return n.createElement(n.Fragment,null,n.createElement("div",{className:l},n.createElement("a",{href:`https://colab.research.google.com/github/sikepuri-algorithm/sikepuri-algorithm.github.io/blob/main/static${t}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}))))}const N="iframe-wrapper_kRL9";function o(a,t){const e=new(m())({newline:!0});switch(a){case"text":return e.toHtml(t);case"html":return t;case"png":return`<img src="data:image/png;base64,${t}"></img>`;case"js":return`<script>${t}<\/script>`}}function k(a){const t=[];let e="normal";for(const n of a)switch(n.output_type){case"stream":t.push(o("text",n.text.join("")));break;case"execute_result":{const a=[];null!=n.data["text/plain"]&&a.push(o("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&a.push(o("html",n.data["text/html"].join(""))),t.push(a.join(""));break}case"error":t.push(o("text",n.traceback.join(""))),e="error";break;case"display_data":{const a=[];null!=n.data["text/plain"]&&a.push(o("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&a.push(o("html",n.data["text/html"].join(""))),null!=n.data["application/javascript"]&&a.push(o("js",n.data["application/javascript"])),null!=n.data["image/png"]&&a.push(o("png",n.data["image/png"])),t.push(a.join(""));break}}return{result:t.join(""),cellType:e}}function c(a){let{children:t,cellColor:e,title:s}=a;return n.createElement("div",{className:N,style:{backgroundColor:e}},n.createElement("iframe",{height:"40px",width:"100%",style:{minHeight:"40px"},srcDoc:t,onLoad:a=>{const t=a.target;t.height=t.contentDocument.documentElement.scrollHeight+"px"},title:s}))}function h(a){let{path:t,noOutput:e=!1}=a;const[s,m]=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch(t).then((a=>a.json())).then((a=>{m(function(a){const t=[];for(const e of a.cells)switch(e.cell_type){case"markdown":t.push({cell_type:"markdown",source:0===e.source.length?null:e.source.join("")});break;case"code":{const{result:a,cellType:n}=k(e.outputs);t.push({cell_type:"code",source:0===e.source.length?null:e.source.join(""),output:0===e.outputs.length?null:a,cellColor:"normal"===n?"#eee":"#ffdddc"});break}}return t}(a))}))}),[]),n.createElement(n.Fragment,null,s.map(((a,t)=>n.createElement(n.Fragment,{key:t},"markdown"===a.cell_type&&null!=a.source&&n.createElement(c,{cellColor:"#f8f8f8",title:"Markdown Code"},(0,r.Z)(a.source)),"code"===a.cell_type&&n.createElement(n.Fragment,null,null!=a.source&&n.createElement(p.Z,{language:"python"},a.source),!e&&null!=a.output&&n.createElement(c,{cellColor:a.cellColor,title:"Code Output"},a.output))))),n.createElement(i,{path:t}))}},6922:(a,t,e)=>{e.d(t,{Z:()=>m});var n=e(7294),s=e(9832);const m={React:n,...n,LifeGame:function(){return n.createElement(n.Fragment,null,n.createElement("div",{style:{maxWidth:"200px"}},n.createElement(s.Z,null)))}}},3585:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>N,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var n=e(7462),s=(e(7294),e(3905)),m=e(2320),p=e(3665);const r={sidebar_position:6},l="\u30e9\u30a4\u30d6\u30e9\u30ea",i={unversionedId:"01python/06library/index",id:"01python/06library/index",title:"\u30e9\u30a4\u30d6\u30e9\u30ea",description:"\u30e9\u30a4\u30d6\u30e9\u30ea",source:"@site/docs/01python/06library/index.mdx",sourceDirName:"01python/06library",slug:"/01python/06library/",permalink:"/docs/01python/06library/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/01python/06library/index.mdx",tags:[],version:"current",lastUpdatedAt:1670133639,formattedLastUpdatedAt:"2022\u5e7412\u67084\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u95a2\u6570",permalink:"/docs/01python/05function/"},next:{title:"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/docs/01python/07pip/"}},N={},o=[{value:"\u30e9\u30a4\u30d6\u30e9\u30ea",id:"\u30e9\u30a4\u30d6\u30e9\u30ea-1",level:2},{value:"\u7df4\u7fd2\u554f\u984c 1",id:"\u7df4\u7fd2\u554f\u984c-1",level:3},{value:"\u7df4\u7fd2\u554f\u984c 2",id:"\u7df4\u7fd2\u554f\u984c-2",level:3}],k={toc:o};function c(a){let{components:t,...e}=a;return(0,s.kt)("wrapper",(0,n.Z)({},k,e,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u30e9\u30a4\u30d6\u30e9\u30ea"},"\u30e9\u30a4\u30d6\u30e9\u30ea"),(0,s.kt)("h2",{id:"\u30e9\u30a4\u30d6\u30e9\u30ea-1"},"\u30e9\u30a4\u30d6\u30e9\u30ea"),(0,s.kt)("p",null,"Python \u3067\u306f\u3001\u81ea\u5206\u3067\u3044\u3061\u3044\u3061\u95a2\u6570\u3092\u4f5c\u3089\u306a\u304f\u3066\u3082\u3001\u3059\u3067\u306b\u7528\u610f\u3055\u308c\u3066\u3044\u308b\u8c4a\u5bcc\u306a\u95a2\u6570\u7fa4\u3092\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\uff08\u7d20\u6674\u3089\u3057\u3044\uff01\uff09"),(0,s.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u6570\u5b66\u306b\u95a2\u3059\u308b\u8a08\u7b97\u3092\u3059\u308b\u306e\u306b\u4fbf\u5229\u306a ",(0,s.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u304c\u3042\u308a\u307e\u3059\u3002",(0,s.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u3046\u3068\u3001\u69d8\u3005\u306a\u8a08\u7b97\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,s.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u7d76\u5bfe\u5024\u3092\u6c42\u3081\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,s.kt)(m.Z,{path:"/library/fabs.ipynb",mdxType:"ViewSource"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u8aad\u307f\u8fbc\u3080\u305f\u3081\u306b\u3001\u4e00\u884c\u76ee\u3067\u3001"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import math\n")),(0,s.kt)("p",null,"\u3068\u5165\u529b\u3057\u307e\u3059\u3002\u3059\u308b\u3068\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"math.\u95a2\u6570\u540d")," \u306e\u3088\u3046\u306b\u3057\u3066\u95a2\u6570\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u306f\u3053\u308c\u4ee5\u5916\u306b\u3082\u591a\u304f\u306e\u95a2\u6570\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u4e00\u90e8\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"\u95a2\u6570\u540d"),(0,s.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"),(0,s.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"math.pi")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03c0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\pi")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0")))))," \u3092\u8fd4\u3059\u3002"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(m.Z,{path:"/library/pi.ipynb",mdxType:"ViewSource"}))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"math.ceil(x)")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"x")," \u306e\u5207\u308a\u4e0a\u3052\u3092\u8fd4\u3059\u3002"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(m.Z,{path:"/library/ceil.ipynb",mdxType:"ViewSource"}))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"math.floor(x)")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"x")," \u306e\u5207\u308a\u6368\u3066\u3092\u8fd4\u3059\u3002"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(m.Z,{path:"/library/floor.ipynb",mdxType:"ViewSource"}))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"math.fabs(x)")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"x")," \u306e\u7d76\u5bfe\u5024\u3092\u8fd4\u3059\u3002"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(m.Z,{path:"/library/fabs.ipynb",mdxType:"ViewSource"}))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"math.sqrt(x)")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msqrt",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msqrt"},"x"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sqrt{x}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.04em",verticalAlign:"-0.2397em"}}),(0,s.kt)("span",{parentName:"span",className:"mord sqrt"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8003em"}},(0,s.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord",style:{paddingLeft:"0.833em"}},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))),(0,s.kt)("span",{parentName:"span",style:{top:"-2.7603em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"}},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},(0,s.kt)("path",{parentName:"svg",d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"}))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2397em"}},(0,s.kt)("span",{parentName:"span"})))))))))," \u3092\u8fd4\u3059\u3002"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(m.Z,{path:"/library/sqrt.ipynb",mdxType:"ViewSource"}))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"math.log(x,base)")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"base")," \u3092\u5e95\u3068\u3059\u308b ",(0,s.kt)("inlineCode",{parentName:"td"},"x")," \u306e\u5bfe\u6570\u3092\u8fd4\u3059\u3002"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(m.Z,{path:"/library/log.ipynb",mdxType:"ViewSource"}))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"math.exp(x)")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"e"),(0,s.kt)("mi",{parentName:"msup"},"x"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"e^x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6644em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6644em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"))))))))))))," \u3092\u8fd4\u3059\u3002"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(m.Z,{path:"/library/exp.ipynb",mdxType:"ViewSource"}))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"math.sin(x)")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"sin"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061"),(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sin x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6679em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},"sin"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," \u3092\u8fd4\u3059\u3002",(0,s.kt)("inlineCode",{parentName:"td"},"x")," \u306f\u30e9\u30b8\u30a2\u30f3"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(m.Z,{path:"/library/sin.ipynb",mdxType:"ViewSource"}))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"math.cos(x)")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"cos"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061"),(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\cos x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},"cos"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," \u3092\u8fd4\u3059\u3002",(0,s.kt)("inlineCode",{parentName:"td"},"x")," \u306f\u30e9\u30b8\u30a2\u30f3"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(m.Z,{path:"/library/cos.ipynb",mdxType:"ViewSource"}))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"math.tan(x)")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"tan"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061"),(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\tan x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},"tan"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," \u3092\u8fd4\u3059\u3002",(0,s.kt)("inlineCode",{parentName:"td"},"x")," \u306f\u30e9\u30b8\u30a2\u30f3"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(m.Z,{path:"/library/tan.ipynb",mdxType:"ViewSource"}))))),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u306f\u3001\u3053\u306e\u4ed6\u306b\u3082\u3055\u307e\u3056\u307e\u306a\u4f7f\u3044\u65b9\u304c\u3042\u308b\u306e\u3067\u8abf\u3079\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)("p",null,"\u307e\u305f\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u4ee5\u5916\u306b\u3082\u4fbf\u5229\u306a\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u305f\u304f\u3055\u3093\u3042\u308b\u306e\u3067\u3001\u305d\u308c\u306b\u3064\u3044\u3066\u3082\u8abf\u3079\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)("admonition",{title:"\u8abf\u3079\u65b9",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u307e\u305a\u3001\u3084\u308a\u305f\u3044\u3053\u3068\u3092",(0,s.kt)("a",{parentName:"p",href:"https://www.google.co.jp/"},"Google"),"\u3084",(0,s.kt)("a",{parentName:"p",href:"https://www.yahoo.co.jp/"},"Yahoo Japan!"),"\u3001",(0,s.kt)("a",{parentName:"p",href:"https://www.bing.com/?cc=jp"},"Bing"),"\u306a\u3069\u306e\u691c\u7d22\u30a8\u30f3\u30b8\u30f3\u3092\u7528\u3044\u3066\u8abf\u3079\u3066\u307f\u307e\u3057\u3087\u3046\u3002Python \u306b\u95a2\u3059\u308b\u60c5\u5831\u306f\u8c4a\u5bcc\u306b\u3042\u308b\u306e\u3067\u3001\u304d\u3063\u3068\u898b\u3064\u304b\u308b\u306f\u305a\u3067\u3059\u3002\u305d\u3053\u3067\u3001\u3069\u306e\u3088\u3046\u306a\u65b9\u6cd5\u3092\u4f7f\u3048\u3070\u826f\u3044\u306e\u304b\u308f\u304b\u3063\u305f\u3089\u3001\u516c\u5f0f\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8aad\u3093\u3067\u8a73\u3057\u3044\u4f7f\u3044\u65b9\u3092\u5b66\u3073\u307e\u3057\u3087\u3046\u3002\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u306f\u53e4\u3044\u60c5\u5831\u3084\u9593\u9055\u3063\u305f\u60c5\u5831\u3082\u591a\u304f\u3042\u308b\u306e\u3067\u3001\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8aad\u3080\u3068\u3088\u304f\u5206\u304b\u308b\u3053\u3068\u3082\u591a\u3044\u3067\u3059\u3002"),(0,s.kt)("p",{parentName:"admonition"},"Python \u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3001",(0,s.kt)("a",{parentName:"p",href:"https://docs.python.org/ja/3/"},"https://docs.python.org/ja/3/"),"\u3092\u898b\u308b\u3068\u826f\u3044\u3067\u3057\u3087\u3046\u3002")),(0,s.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-1"},"\u7df4\u7fd2\u554f\u984c 1"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3057\u3066\u3001",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"sin"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061"),(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"mfrac"},"\u03c0"),(0,s.kt)("mn",{parentName:"mfrac"},"2"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sin \\frac{\\pi}{2}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0404em",verticalAlign:"-0.345em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},"sin"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6954em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"\u03c0"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))," \u306e\u5024\u3092\u8a08\u7b97\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)(p.Z,{mdxType:"Answer"},(0,s.kt)(m.Z,{path:"/library/sin_pi.ipynb",mdxType:"ViewSource"})),(0,s.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-2"},"\u7df4\u7fd2\u554f\u984c 2"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3057\u3066\u3001\u81ea\u7136\u5bfe\u6570\u306e\u5e95 ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"e")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"e")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e")))))," \u306e\u5024\u3092\u51fa\u529b\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)("p",null,"\u30d2\u30f3\u30c8\uff1a\u3053\u306e\u8cc7\u6599\u306e\u8aac\u660e\u3060\u3051\u3067\u306f\u4f5c\u308c\u307e\u305b\u3093\u3002\u81ea\u5206\u3067\u8abf\u3079\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)(p.Z,{mdxType:"Answer"},(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u306e",(0,s.kt)("a",{parentName:"p",href:"https://docs.python.org/ja/3/library/math.html#constants"},"\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u306b\u4f7f\u3044\u65b9\u304c\u8f09\u3063\u3066\u3044\u307e\u3059\u3002\n",(0,s.kt)("inlineCode",{parentName:"p"},"math.e")," \u3068\u3059\u308c\u3070\u3001\u81ea\u7136\u5bfe\u6570\u306e\u5e95\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,s.kt)(m.Z,{path:"/library/e.ipynb",mdxType:"ViewSource"}),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"e"),(0,s.kt)("mn",{parentName:"msup"},"1")),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"e")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"e^1=e")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1")))))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e")))))," \u3067\u3042\u308b\u3053\u3068\u3092\u5229\u7528\u3057\u3066\u4e0b\u306e\u3088\u3046\u306b\u3059\u308c\u3070\u8abf\u3079\u306a\u304f\u3066\u3082\u3067\u304d\u307e\u3059\u304c\uff08\u7b11\uff09\u3001\u4e0a\u306e\u3088\u3046\u306b\u3057\u305f\u65b9\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u3002"),(0,s.kt)(m.Z,{path:"/library/e2.ipynb",mdxType:"ViewSource"}))))}c.isMDXComponent=!0}}]);