"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[423],{2991:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7294),r=a(6010),l=a(3438),s=a(9960),i=a(3919),o=a(5999);const c="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:a}=e;return n.createElement(s.Z,{href:t,className:(0,r.Z)("card padding--lg",c)},a)}function p(e){let{href:t,icon:a,title:l,description:s}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",u),title:l},a," ",l),s&&n.createElement("p",{className:(0,r.Z)("text--truncate",d),title:s},s))}function h(e){let{item:t}=e;const a=(0,l.Wl)(t);return a?n.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){let{item:t}=e;const a=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,l.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:a,title:t.label,description:null==r?void 0:r.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(b,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const a=(0,l.jA)();return n.createElement(v,{items:a.items,className:t})}function v(e){const{items:t,className:a}=e;if(!t)return n.createElement(g,e);const s=(0,l.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",a)},s.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7462),r=a(7294),l=a(6010),s=a(2389),i=a(7392),o=a(7094),c=a(2466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:a,block:s,defaultValue:m,values:p,groupId:h,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,i.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const E=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==E&&!g.some((e=>e.value===E)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${E}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:k}=(0,o.U)(),[y,N]=(0,r.useState)(E),x=[],{blockElementScrollPositionUntilNextRender:Z}=(0,c.o5)();if(null!=h){const e=w[h];null!=e&&e!==y&&g.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,a=x.indexOf(t),n=g[a].value;n!==y&&(Z(t),N(n),null!=h&&k(h,String(n)))},_=e=>{var t;let a=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},b)},g.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>x.push(e),onKeyDown:_,onClick:C},s,{className:(0,l.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":y===t})}),a??t)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function p(e){const t=(0,s.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},5856:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7294),r=a(6010);const l="browserWindow_my1Q",s="browserWindowHeader_jXSR",i="buttons_uHc7",o="browserWindowAddressBar_Pd8y",c="dot_giz1",u="browserWindowMenuIcon_Vhuh",d="bar_rrRL",m="browserWindowBody_Idgs";function p(e){let{children:t,minHeight:a,url:p="http://localhost:3000"}=e;return n.createElement("div",{className:l,style:{minHeight:a}},n.createElement("div",{className:s},n.createElement("div",{className:i},n.createElement("span",{className:c,style:{background:"#f25f58"}}),n.createElement("span",{className:c,style:{background:"#fbbe3c"}}),n.createElement("span",{className:c,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,r.Z)(o,"text--truncate")},p),n.createElement("div",{className:u},n.createElement("div",null,n.createElement("span",{className:d}),n.createElement("span",{className:d}),n.createElement("span",{className:d})))),n.createElement("div",{className:m},t))}function h(e){let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement(p,{minHeight:200},n.createElement("iframe",{width:"100%",height:"100%",srcDoc:t,title:"Live Code",onLoad:e=>{setInterval((e=>{const t=e.target;t.height="100%",t.height=t.contentDocument.documentElement.scrollHeight+"px"}),3e3,e)}})))}},3309:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7294),r=a(5488),l=a(5162),s=a(9604),i=a(5856),o=a(7184);const c="playgroundContainer_dc2C",u="playgroundHeader_gfqA",d="playgroundEditor_bEFE",m="playgroundPreview_I95C";function p(e){let{language:t,children:a,defaultHTML:p,defaultCSS:h,defaultJavaScript:b}=e;const[f,g]=(0,n.useState)(a),[v,E]=(0,n.useState)(p),[w,k]=(0,n.useState)(h),[y,N]=(0,n.useState)(b);return n.createElement(n.Fragment,null,n.createElement("div",{className:c},n.createElement("div",{className:u},"\u30e9\u30a4\u30d6\u30a8\u30c7\u30a3\u30bf\u30fc"),n.createElement("div",{className:d},"HTML-CSS-JavaScript"===t?n.createElement(r.Z,{groupId:"editor"},n.createElement(l.Z,{value:"html",label:"HTML"},n.createElement(s.ZP,{height:"400px",defaultLanguage:"html",defaultValue:p,onChange:e=>{E(e)}})),n.createElement(l.Z,{value:"css",label:"CSS"},n.createElement(s.ZP,{height:"400px",defaultLanguage:"css",defaultValue:h,onChange:e=>{k(e)}})),n.createElement(l.Z,{value:"js",label:"JavaScript"},n.createElement(s.ZP,{height:"400px",defaultLanguage:"javascript",defaultValue:b,onChange:e=>{N(e)}}))):n.createElement(s.ZP,{height:"400px",defaultLanguage:t,defaultValue:a,onChange:e=>{g(e)}})),n.createElement("div",{className:u},"\u7d50\u679c"),n.createElement("div",{className:m},n.createElement(i.Z,null,"html"===t?f:"markdown"===t?(0,o.Z)(f):"latex"===t?'    <!DOCTYPE html>\n    <html lang="ja">\n      <head>\n        <meta charset="UTF-8" />\n        <script type="module">\n          import { LaTeXJSComponent } from "https://cdn.jsdelivr.net/npm/latex.js/dist/latex.mjs";\n          customElements.define("latex-js", LaTeXJSComponent);\n        <\/script>\n      </head>\n      <body>\n        <latex-js baseURL="https://cdn.jsdelivr.net/npm/latex.js/dist/">  '+f+"        </latex-js>\n      </body>\n    </html>  ":`<style>${w}</style>${v}<script>${y}<\/script>`))))}},7745:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),l=a(2991);a(3309);const s={sidebar_position:4},i="\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9",o={unversionedId:"03extras/04website/index",id:"03extras/04website/index",title:"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9",description:"Visual Studio Code \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u9805\u3092\u53c2\u8003\u306b VSCode \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/docs/03extras/04website/index.mdx",sourceDirName:"03extras/04website",slug:"/03extras/04website/",permalink:"/docs/03extras/04website/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/03extras/04website/index.mdx",tags:[],version:"current",lastUpdatedAt:1671246767,formattedLastUpdatedAt:"2022\u5e7412\u670817\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Python \u3092\u30ed\u30fc\u30ab\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/docs/03extras/03python/"},next:{title:"\u4e00\u822c\u7684\u306a Web \u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9",permalink:"/docs/03extras/04website/01web/"}},c={},u=[],d={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9"},"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/03extras/02vscode/"},"Visual Studio Code \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u9805"),"\u3092\u53c2\u8003\u306b VSCode \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",{parentName:"admonition"},"Windows \u3092\u4f7f\u3063\u3066\u3044\u308b\u5834\u5408\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/docs/03extras/01wsl/"},"WSL \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u9805"),"\u3092\u53c2\u8003\u306b WSL \u3082\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9\u3092\u7d39\u4ecb\u3057\u3066\u304a\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"Web \u30b5\u30a4\u30c8\u306f\u3001HTML \u3092\u7528\u3044\u3066\u4f5c\u308b\u306e\u304c\u4e00\u822c\u7684\u3067\u3059\u3002\u307e\u305a\u306f\u3058\u3081\u306b HTML \u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"HTML \u3092\u4f7f\u3048\u3070\u5927\u62b5\u306e\u3082\u306e\u3092\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304c\u3001\u8907\u96d1\u306a\u3082\u306e\u3092\u4f5c\u308b\u306e\u306f\u3042\u307e\u308a\u306b\u3082\u5927\u5909\u306a\u306e\u3067\u3001\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u3067\u306f\u3088\u308a\u7c21\u5358\u306b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u4f5c\u6210\u3067\u304d\u308b Docusaurus \u3092\u4f7f\u3044\u307e\u3057\u305f\u3002\u305d\u306e\u305f\u3081\u3001Docusaurus \u3092\u4f7f\u3063\u305f Web \u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9\u306b\u3064\u3044\u3066\u305d\u306e\u5f8c\u89e3\u8aac\u3057\u307e\u3059\u3002HTML \u306b\u3064\u3044\u3066\u306e\u9805\u3068\u305d\u306e\u5f8c\u306e\u9805\u306f\u72ec\u7acb\u306b\u306a\u3063\u3066\u3044\u308b\u306e\u3067\u3001\u3059\u3067\u306b\u77e5\u3063\u3066\u3044\u308b\u4eba\u306f\u8aad\u307f\u98db\u3070\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u4ee5\u964d\u306e\u624b\u9806\u306b\u6cbf\u3046\u3053\u3068\u3067\u3001\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u3068\u5168\u304f\u540c\u3058\u3088\u3046\u306a\u3082\u306e\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u5b9f\u306f\u3001\u3082\u3063\u3068\u7c21\u5358\u306b Web \u30b5\u30a4\u30c8\u3092\u4f5c\u6210\u3067\u304d\u308b\u30b5\u30fc\u30d3\u30b9\u306f\u305f\u304f\u3055\u3093\u3042\u308a\u30a2\u30ab\u30a6\u30f3\u30c8\u767b\u9332\u3060\u3051\u3067\u3067\u304d\u305f\u308a\u3057\u307e\u3059\u304c\u3001\u305b\u3063\u304b\u304f\u306a\u306e\u3067 Web \u958b\u767a\u8005\u304c\u901a\u5e38\u884c\u3046\u65b9\u6cd5\u3067\u89e3\u8aac\u3057\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u5c11\u3057\u9762\u5012\u306a\u8a2d\u5b9a\u304c\u591a\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u5b8c\u6210\u54c1\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("iframe",{width:"100%",height:"400vw",src:"https://docusaurus-sample.onrender.com/docs/intro"}),(0,r.kt)("p",null,"\u305d\u308c\u3067\u306f\u3001\u5b9f\u969b\u306b Web \u30b5\u30a4\u30c8\u3092\u4f5c\u3063\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)(l.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);