"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[418],{2991:(e,t,i)=>{i.d(t,{Z:()=>g});var r=i(7294),n=i(6010),s=i(3438),a=i(9960),c=i(3919),o=i(5999);const l="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:i}=e;return r.createElement(a.Z,{href:t,className:(0,n.Z)("card padding--lg",l)},i)}function h(e){let{href:t,icon:i,title:s,description:a}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,n.Z)("text--truncate",m),title:s},i," ",s),a&&r.createElement("p",{className:(0,n.Z)("text--truncate",d),title:a},a))}function p(e){let{item:t}=e;const i=(0,s.Wl)(t);return i?r.createElement(h,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const i=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.xz)(t.docId??void 0);return r.createElement(h,{href:t.href,icon:i,title:t.label,description:null==n?void 0:n.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const i=(0,s.jA)();return r.createElement(g,{items:i.items,className:t})}function g(e){const{items:t,className:i}=e;if(!t)return r.createElement(x,e);const a=(0,s.MN)(t);return r.createElement("section",{className:(0,n.Z)("row",i)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e})))))}},6871:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var r=i(7462),n=(i(7294),i(3905)),s=i(2991);const a={sidebar_position:1},c="HTML \u3092\u7528\u3044\u305f Web \u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9",o={unversionedId:"04extras/04website/01html/index",id:"04extras/04website/01html/index",title:"HTML \u3092\u7528\u3044\u305f Web \u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9",description:"\u3053\u3053\u3067\u306f\u3001HTML \u3092\u7528\u3044\u305f\u4e00\u822c\u7684\u306a Web \u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u3066\u3044\u304d\u307e\u3059\u3002",source:"@site/docs/04extras/04website/01html/index.mdx",sourceDirName:"04extras/04website/01html",slug:"/04extras/04website/01html/",permalink:"/docs/04extras/04website/01html/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/04extras/04website/01html/index.mdx",tags:[],version:"current",lastUpdatedAt:1673779721,formattedLastUpdatedAt:"2023\u5e741\u670815\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9",permalink:"/docs/04extras/04website/"},next:{title:"HTML",permalink:"/docs/04extras/04website/01html/01html/"}},l={},m=[],d={toc:m};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"html-\u3092\u7528\u3044\u305f-web-\u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9"},"HTML \u3092\u7528\u3044\u305f Web \u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9"),(0,n.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001HTML \u3092\u7528\u3044\u305f\u4e00\u822c\u7684\u306a Web \u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,n.kt)(s.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);