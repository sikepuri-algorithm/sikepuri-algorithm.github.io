"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[2522],{52991:(e,t,r)=>{r.d(t,{Z:()=>w});var s=r(67294),i=r(86010),a=r(53438),n=r(39960),o=r(13919),c=r(95999);const u="cardContainer_fWXF",l="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return s.createElement(n.Z,{href:t,className:(0,i.Z)("card padding--lg",u)},r)}function p(e){let{href:t,icon:r,title:a,description:n}=e;return s.createElement(m,{href:t},s.createElement("h2",{className:(0,i.Z)("text--truncate",l),title:a},r," ",a),n&&s.createElement("p",{className:(0,i.Z)("text--truncate",d),title:n},n))}function f(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?s.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return s.createElement(p,{href:t.href,icon:r,title:t.label,description:null==i?void 0:i.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return s.createElement(h,{item:t});case"category":return s.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const r=(0,a.jA)();return s.createElement(w,{items:r.items,className:t})}function w(e){const{items:t,className:r}=e;if(!t)return s.createElement(k,e);const n=(0,a.MN)(t);return s.createElement("section",{className:(0,i.Z)("row",r)},n.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(b,{item:e})))))}},11100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var s=r(87462),i=(r(67294),r(3905)),a=r(52991);const n={sidebar_position:2},o="Docusaurus \u3092\u7528\u3044\u305f Web \u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9",c={unversionedId:"extras/website/docusaurus/index",id:"extras/website/docusaurus/index",title:"Docusaurus \u3092\u7528\u3044\u305f Web \u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9",description:"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306f\u3001Docusaurus \u3068\u3044\u3046\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u4f7f\u3063\u3066\u4f5c\u3089\u308c\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/07-extras/04-website/02-docusaurus/index.mdx",sourceDirName:"07-extras/04-website/02-docusaurus",slug:"/extras/website/docusaurus/",permalink:"/pr-preview/pr-263/docs/extras/website/docusaurus/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/07-extras/04-website/02-docusaurus/index.mdx",tags:[],version:"current",lastUpdatedAt:1675730680,formattedLastUpdatedAt:"2023\u5e742\u67087\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"JavaScript",permalink:"/pr-preview/pr-263/docs/extras/website/html/javascript/"},next:{title:"Markdown",permalink:"/pr-preview/pr-263/docs/extras/website/docusaurus/markdown/"}},u={},l=[],d={toc:l};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,s.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"docusaurus-\u3092\u7528\u3044\u305f-web-\u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9"},"Docusaurus \u3092\u7528\u3044\u305f Web \u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9"),(0,i.kt)("p",null,"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306f\u3001Docusaurus \u3068\u3044\u3046\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u4f7f\u3063\u3066\u4f5c\u3089\u308c\u3066\u3044\u307e\u3059\u3002\n\u3053\u3053\u3067\u306f\u3001Docusaurus \u3092\u7528\u3044\u305f Web \u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,"Docusaurus \u3067\u306f Markdown \u3068\u3044\u3046\u975e\u5e38\u306b\u7c21\u5358\u306a\u8a18\u6cd5\u3067\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u306f\u3058\u3081\u306b\u3001Markdown \u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"Docusaurus \u3092\u4f7f\u3046\u306b\u306f npm \u3068\u3044\u3046\u30d1\u30c3\u30b1\u30fc\u30b8\u7ba1\u7406\u30c4\u30fc\u30eb\u304c\u5fc5\u8981\u3067\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u307e\u305a npm \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u6b21\u306b\u3001npm \u3092\u7528\u3044\u3066 Docusaurus \u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u6b21\u306b\u3001GitHub \u306b Docusaurus \u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u6700\u5f8c\u306b\u3001Render \u3092\u4f7f\u3063\u3066\u30c7\u30d7\u30ed\u30a4\u3057\u307e\u3059\u3002"),(0,i.kt)(a.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);