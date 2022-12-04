"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[798],{3665:(a,t,e)=>{e.d(t,{Z:()=>p});var n=e(7294),s=e(4673);function p(a){let{children:t}=a;return n.createElement(s.Z,{summary:n.createElement("summary",null,"\u89e3\u7b54")},t)}},2320:(a,t,e)=>{e.d(t,{Z:()=>k});var n=e(7294),s=e(7174),p=e.n(s),m=e(1844),r=e(7184);const l="root_frVT";function i(a){let{path:t}=a;return n.createElement(n.Fragment,null,n.createElement("div",{className:l},n.createElement("a",{href:`https://colab.research.google.com/github/sikepuri-algorithm/sikepuri-algorithm.github.io/blob/main/static${t}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}))))}const c="iframe-wrapper_kRL9";function o(a,t){const e=new(p())({newline:!0});switch(a){case"text":return e.toHtml(t);case"html":return t;case"png":return`<img src="data:image/png;base64,${t}"></img>`;case"js":return`<script>${t}<\/script>`}}function h(a){const t=[];let e="normal";for(const n of a)switch(n.output_type){case"stream":t.push(o("text",n.text.join("")));break;case"execute_result":{const a=[];null!=n.data["text/plain"]&&a.push(o("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&a.push(o("html",n.data["text/html"].join(""))),t.push(a.join(""));break}case"error":t.push(o("text",n.traceback.join(""))),e="error";break;case"display_data":{const a=[];null!=n.data["text/plain"]&&a.push(o("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&a.push(o("html",n.data["text/html"].join(""))),null!=n.data["application/javascript"]&&a.push(o("js",n.data["application/javascript"])),null!=n.data["image/png"]&&a.push(o("png",n.data["image/png"])),t.push(a.join(""));break}}return{result:t.join(""),cellType:e}}function N(a){let{children:t,cellColor:e,title:s}=a;return n.createElement("div",{className:c,style:{backgroundColor:e}},n.createElement("iframe",{height:"40px",width:"100%",style:{minHeight:"40px"},srcDoc:t,onLoad:a=>{const t=a.target;t.height=t.contentDocument.documentElement.scrollHeight+"px"},title:s}))}function k(a){let{path:t,noOutput:e=!1}=a;const[s,p]=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch(t).then((a=>a.json())).then((a=>{p(function(a){const t=[];for(const e of a.cells)switch(e.cell_type){case"markdown":t.push({cell_type:"markdown",source:0===e.source.length?null:e.source.join("")});break;case"code":{const{result:a,cellType:n}=h(e.outputs);t.push({cell_type:"code",source:0===e.source.length?null:e.source.join(""),output:0===e.outputs.length?null:a,cellColor:"normal"===n?"#eee":"#ffdddc"});break}}return t}(a))}))}),[]),n.createElement(n.Fragment,null,s.map(((a,t)=>n.createElement(n.Fragment,{key:t},"markdown"===a.cell_type&&null!=a.source&&n.createElement(N,{cellColor:"#f8f8f8",title:"Markdown Code"},(0,r.Z)(a.source)),"code"===a.cell_type&&n.createElement(n.Fragment,null,null!=a.source&&n.createElement(m.Z,{language:"python"},a.source),!e&&null!=a.output&&n.createElement(N,{cellColor:a.cellColor,title:"Code Output"},a.output))))),n.createElement(i,{path:t}))}},24:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>N,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var n=e(7462),s=(e(7294),e(3905)),p=e(2320),m=e(3665);const r={sidebar_position:12},l="\u7df4\u7fd2\u554f\u984c",i={unversionedId:"01python/12practice/index",id:"01python/12practice/index",title:"\u7df4\u7fd2\u554f\u984c",description:"\u3053\u308c\u307e\u3067\u306e\u9805\u3067\u3001Python \u306b\u3064\u3044\u3066\u306e\u57fa\u672c\u7684\u306a\u3053\u3068\u306f\u5b66\u3073\u7d42\u308f\u3063\u305f\u306e\u3067\u3001\u5b9f\u969b\u306b\u69d8\u3005\u306a\u7df4\u7fd2\u554f\u984c\u3092\u89e3\u3044\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002",source:"@site/docs/01python/12practice/index.mdx",sourceDirName:"01python/12practice",slug:"/01python/12practice/",permalink:"/docs/01python/12practice/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/01python/12practice/index.mdx",tags:[],version:"current",lastUpdatedAt:1670157621,formattedLastUpdatedAt:"2022\u5e7412\u67084\u65e5",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"\u6761\u4ef6\u5206\u5c90",permalink:"/docs/01python/11if/"},next:{title:"\u5fdc\u7528",permalink:"/docs/02advanced/"}},c={},o=[{value:"\u7df4\u7fd2\u554f\u984c 1",id:"\u7df4\u7fd2\u554f\u984c-1",level:2},{value:"\u7df4\u7fd2\u554f\u984c 2",id:"\u7df4\u7fd2\u554f\u984c-2",level:2},{value:"\u7df4\u7fd2\u554f\u984c 3",id:"\u7df4\u7fd2\u554f\u984c-3",level:2},{value:"\u7df4\u7fd2\u554f\u984c 4",id:"\u7df4\u7fd2\u554f\u984c-4",level:2}],h={toc:o};function N(a){let{components:t,...e}=a;return(0,s.kt)("wrapper",(0,n.Z)({},h,e,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u7df4\u7fd2\u554f\u984c"},"\u7df4\u7fd2\u554f\u984c"),(0,s.kt)("p",null,"\u3053\u308c\u307e\u3067\u306e\u9805\u3067\u3001Python \u306b\u3064\u3044\u3066\u306e\u57fa\u672c\u7684\u306a\u3053\u3068\u306f\u5b66\u3073\u7d42\u308f\u3063\u305f\u306e\u3067\u3001\u5b9f\u969b\u306b\u69d8\u3005\u306a\u7df4\u7fd2\u554f\u984c\u3092\u89e3\u3044\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)("h2",{id:"\u7df4\u7fd2\u554f\u984c-1"},"\u7df4\u7fd2\u554f\u984c 1"),(0,s.kt)("p",null,"Fizz Buzz \u554f\u984c\u3092\u89e3\u304f\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002\n\u3053\u308c\u306f\u3001\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u521d\u5fc3\u8005\u5411\u3051\u306e\u7c21\u5358\u306a\u4f8b\u984c\u3068\u3057\u3066\u3068\u3066\u3082\u6709\u540d\u3067\u3059\u3002\u521d\u6b69\u7684\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u6210\u3059\u308b\u80fd\u529b\u304c\u3042\u308b\u306e\u304b\u3092\u5224\u5b9a\u3059\u308b\u305f\u3081\u306b\u3088\u304f\u4f7f\u308f\u308c\u307e\u3059\u3002"),(0,s.kt)("p",null,"Fizz Buzz \u306e\u30eb\u30fc\u30eb\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u30d7\u30ec\u30a4\u30e4\u30fc\u306f\u5186\u72b6\u306b\u5ea7\u308b\u3002\u6700\u521d\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u306f\u300c1\u300d\u3068\u6570\u5b57\u3092\u767a\u8a00\u3059\u308b\u3002\u6b21\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u306f\u76f4\u524d\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u767a\u8a00\u3057\u305f\u6570\u5b57\u306b 1 \u3092\u8db3\u3057\u305f\u6570\u5b57\u3092\u767a\u8a00\u3057\u3066\u3044\u304f\u3002\u305f\u3060\u3057\u30013 \u306e\u500d\u6570\u306e\u5834\u5408\u306f\u300cFizz\u300d\uff08Bizz Buzz \u306e\u5834\u5408\u306f\u300cBizz\u300d\uff09\u30015 \u306e\u500d\u6570\u306e\u5834\u5408\u306f\u300cBuzz\u300d\u30013 \u306e\u500d\u6570\u304b\u3064 5 \u306e\u500d\u6570\u306e\u5834\u5408\uff08\u3059\u306a\u308f\u3061 15 \u306e\u500d\u6570\u306e\u5834\u5408\uff09\u306f\u300cFizz Buzz\u300d\uff08Bizz Buzz \u306e\u5834\u5408\u306f\u300cBizz Buzz\u300d\uff09\u3092\u6570\u306e\u4ee3\u308f\u308a\u306b\u767a\u8a00\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3002\u767a\u8a00\u3092\u9593\u9055\u3048\u305f\u8005\u3084\u3001\u305f\u3081\u3089\u3063\u305f\u8005\u306f\u8131\u843d\u3068\u306a\u308b\u3002\nWikipedia \u30d5\u30ea\u30fc\u767e\u79d1\u4e8b\u5178 \u3088\u308a")),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," \u756a\u76ee\u307e\u3067 Fizz Buzz \u3067\u306e\u6b63\u3057\u3044\u89e3\u3092\u8868\u793a\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)(m.Z,{mdxType:"Answer"},(0,s.kt)(p.Z,{path:"/practice/fizzbuzz.ipynb",mdxType:"ViewSource"}),(0,s.kt)("p",null,"\u3082\u3046\u4e00\u3064\u306e\u6709\u540d\u306a\u89e3\u6cd5\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)(p.Z,{path:"/practice/fizzbuzz2.ipynb",mdxType:"ViewSource"})),(0,s.kt)("h2",{id:"\u7df4\u7fd2\u554f\u984c-2"},"\u7df4\u7fd2\u554f\u984c 2"),(0,s.kt)("p",null,"\u7d20\u6570\u304b\u3069\u3046\u304b\u3092\u5224\u5b9a\u3059\u308b\u95a2\u6570\u3092\u4f5c\u308a\u307e\u3057\u3087\u3046\u3002\u3055\u3089\u306b\u3001\u3053\u306e\u95a2\u6570\u3092\u4f7f\u3063\u3066 ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," \u756a\u76ee\u307e\u3067\u306e\u7d20\u6570\u3092\u8868\u793a\u3059\u308b\u95a2\u6570\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u5b9f\u969b\u306b\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"n = 100")," \u3068\u3057\u3066\u51fa\u529b\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)(m.Z,{mdxType:"Answer"},(0,s.kt)(p.Z,{path:"/practice/prime_number.ipynb",mdxType:"ViewSource"}),(0,s.kt)("p",null,"\u5b9f\u306f\u3001",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," \u304c\u7d20\u6570\u3067\u3042\u308b\u304b\u3092\u5224\u5b9a\u3059\u308b\u306e\u306b\u306f\u3001",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msqrt",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msqrt"},"n"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sqrt{n}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.04em",verticalAlign:"-0.2397em"}}),(0,s.kt)("span",{parentName:"span",className:"mord sqrt"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8003em"}},(0,s.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord",style:{paddingLeft:"0.833em"}},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))),(0,s.kt)("span",{parentName:"span",style:{top:"-2.7603em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"}},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},(0,s.kt)("path",{parentName:"svg",d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"}))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2397em"}},(0,s.kt)("span",{parentName:"span"})))))))))," \u307e\u3067\u306e\u81ea\u7136\u6570\u3067\u5272\u308a\u5207\u308c\u308b\u304b\u3092\u8abf\u3079\u308c\u3070\u5341\u5206\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u3082\u3057 ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msqrt",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msqrt"},"n"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sqrt{n}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.04em",verticalAlign:"-0.2397em"}}),(0,s.kt)("span",{parentName:"span",className:"mord sqrt"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8003em"}},(0,s.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord",style:{paddingLeft:"0.833em"}},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))),(0,s.kt)("span",{parentName:"span",style:{top:"-2.7603em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"}},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},(0,s.kt)("path",{parentName:"svg",d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"}))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2397em"}},(0,s.kt)("span",{parentName:"span"})))))))))," \u3088\u308a\u3082\u5927\u304d\u3044\u7d04\u6570\u304c\u3042\u3063\u3066\u3082\u305d\u306e\u7d04\u6570\u3068\u5bfe\u306b\u306a\u308b\u7d04\u6570\u304c\u5b58\u5728\u3057\u3066\u305d\u308c\u306f ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msqrt",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msqrt"},"n"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sqrt{n}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.04em",verticalAlign:"-0.2397em"}}),(0,s.kt)("span",{parentName:"span",className:"mord sqrt"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8003em"}},(0,s.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord",style:{paddingLeft:"0.833em"}},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))),(0,s.kt)("span",{parentName:"span",style:{top:"-2.7603em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"}},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},(0,s.kt)("path",{parentName:"svg",d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"}))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2397em"}},(0,s.kt)("span",{parentName:"span"})))))))))," \u3088\u308a\u3082\u5c0f\u3055\u304f\u306a\u308b\u304b\u3089\u3067\u3059\u3002\u3088\u3063\u3066\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u305f\u65b9\u304c\u3088\u308a\u9ad8\u901f\u3067\u3057\u3087\u3046\u3002"),(0,s.kt)(p.Z,{path:"/practice/prime_number2.ipynb",mdxType:"ViewSource"})),(0,s.kt)("h2",{id:"\u7df4\u7fd2\u554f\u984c-3"},"\u7df4\u7fd2\u554f\u984c 3"),(0,s.kt)("p",null,"\u7d20\u56e0\u6570\u5206\u89e3\u3092\u3059\u308b\u95a2\u6570\u3092\u4f5c\u308a\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)(m.Z,{mdxType:"Answer"},(0,s.kt)(p.Z,{path:"/practice/prime_factorize.ipynb",mdxType:"ViewSource"})),(0,s.kt)("h2",{id:"\u7df4\u7fd2\u554f\u984c-4"},"\u7df4\u7fd2\u554f\u984c 4"),(0,s.kt)("p",null,"\u6700\u5927\u516c\u7d04\u6570\u3092\u6c42\u3081\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u6700\u5927\u516c\u7d04\u6570\uff08greatest common divisor\uff09\u306f\u3001GCD \u3068\u3088\u304f\u7565\u3055\u308c\u307e\u3059\u3002"),(0,s.kt)(m.Z,{mdxType:"Answer"},(0,s.kt)(p.Z,{path:"/practice/gcd.ipynb",mdxType:"ViewSource"}),(0,s.kt)("p",null,"\u518d\u5e30\u3092\u4f7f\u3046\u3068\u6b21\u306e\u3088\u3046\u306b\u3082\u3067\u304d\u307e\u3059\u3002\u518d\u5e30\u306f\u5f8c\u306e\u9805\u3067\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,s.kt)(p.Z,{path:"/practice/gcd_recursive.ipynb",mdxType:"ViewSource"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.python.org/ja/3/library/math.html#math.gcd"},(0,s.kt)("inlineCode",{parentName:"a"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u306e ",(0,s.kt)("inlineCode",{parentName:"a"},"gcd")," \u95a2\u6570"),"\u3092\u4f7f\u3063\u3066\u3082\u8a08\u7b97\u3067\u304d\u307e\u3059\u3002"),(0,s.kt)(p.Z,{path:"/practice/gcd_math.ipynb",mdxType:"ViewSource"})))}N.isMDXComponent=!0}}]);