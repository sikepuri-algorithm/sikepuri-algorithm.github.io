"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[1145],{52991:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(67294),n=a(86010),l=a(53438),s=a(39960),u=a(13919),c=a(95999);const i="cardContainer_fWXF",o="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:a}=e;return r.createElement(s.Z,{href:t,className:(0,n.Z)("card padding--lg",i)},a)}function p(e){let{href:t,icon:a,title:l,description:s}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,n.Z)("text--truncate",o),title:l},a," ",l),s&&r.createElement("p",{className:(0,n.Z)("text--truncate",d),title:s},s))}function h(e){let{item:t}=e;const a=(0,l.Wl)(t);return a?r.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const a=(0,u.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,l.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:a,title:t.label,description:null==n?void 0:n.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const a=(0,l.jA)();return r.createElement(v,{items:a.items,className:t})}function v(e){const{items:t,className:a}=e;if(!t)return r.createElement(b,e);const s=(0,l.MN)(t);return r.createElement("section",{className:(0,n.Z)("row",a)},s.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>S});var r=a(87462),n=a(67294),l=a(86010),s=a(12466),u=a(16550),c=a(91980),i=a(67392),o=a(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[s,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,i]=h({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,o.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),g=(()=>{const e=c??d;return p({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),f(e)}),[i,f,l]),tabValues:l}}var g=a(72389);const b="tabList__CuJ",v="tabItem_LNqP";function E(e){let{className:t,block:a,selectedValue:u,selectValue:c,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=o.indexOf(t),r=i[a].value;r!==u&&(d(t),c(r))},p=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;a=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;a=o[t]??o[o.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>o.push(e),onKeyDown:p,onClick:m},s,{className:(0,l.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":u===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",b)},n.createElement(E,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function S(e){const t=(0,g.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},26811:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(67294),n=a(86010);const l="browserWindow_my1Q",s="browserWindowHeader_jXSR",u="buttons_uHc7",c="browserWindowAddressBar_Pd8y",i="dot_giz1",o="browserWindowMenuIcon_Vhuh",d="bar_rrRL",m="browserWindowBody_Idgs";function p(e){let{children:t,minHeight:a,height:p,url:h="http://localhost:3000"}=e;return r.createElement("div",{className:l,style:{minHeight:a,height:p}},r.createElement("div",{className:s},r.createElement("div",{className:u},r.createElement("span",{className:i,style:{background:"#f25f58"}}),r.createElement("span",{className:i,style:{background:"#fbbe3c"}}),r.createElement("span",{className:i,style:{background:"#58cb42"}})),r.createElement("div",{className:(0,n.Z)(c,"text--truncate")},h),r.createElement("div",{className:o},r.createElement("div",null,r.createElement("span",{className:d}),r.createElement("span",{className:d}),r.createElement("span",{className:d})))),r.createElement("div",{className:m,style:{height:"90%"}},t))}function h(e){let{children:t,height:a}=e;return r.createElement(r.Fragment,null,r.createElement(p,{height:void 0!==a&&a,minHeight:void 0===a&&"200px"},r.createElement("iframe",{width:"100%",height:"100%",srcDoc:t,title:"Live Code",onLoad:e=>{setInterval((e=>{if(null==a){const t=e.target;t.height="100%",t.height=t.contentDocument.documentElement.scrollHeight+"px"}}),3e3,e)}})))}},24701:(e,t,a)=>{a.d(t,{Z:()=>b});var r=a(67294),n=a(74866),l=a(85162),s=a(19604),u=a(26811),c=a(35993),i=a(37403);const o="playgroundContainer_dc2C",d="playgroundHeader_gfqA",m="playgroundEditor_bEFE",p="playgroundPreview_I95C";function h(e){let{defaultHTML:t,setHTML:a,defaultCSS:u,setCSS:c,defaultJavaScript:i,setJS:o}=e;return r.createElement(r.Fragment,null,r.createElement(n.Z,{groupId:"editor"},r.createElement(l.Z,{value:"html",label:"HTML"},r.createElement(s.ZP,{height:"400px",defaultLanguage:"html",defaultValue:t,onChange:e=>{a(e)}})),r.createElement(l.Z,{value:"css",label:"CSS"},r.createElement(s.ZP,{height:"400px",defaultLanguage:"css",defaultValue:u,onChange:e=>{c(e)}})),r.createElement(l.Z,{value:"js",label:"JavaScript"},r.createElement(s.ZP,{height:"400px",defaultLanguage:"javascript",defaultValue:i,onChange:e=>{o(e)}}))))}function f(e){let{defaultHTML:t,setHTML:a,defaultCSS:u,setCSS:c}=e;return r.createElement(r.Fragment,null,r.createElement(n.Z,{groupId:"editor"},r.createElement(l.Z,{value:"html",label:"HTML"},r.createElement(s.ZP,{height:"400px",defaultLanguage:"html",defaultValue:t,onChange:e=>{a(e)}})),r.createElement(l.Z,{value:"css",label:"CSS"},r.createElement(s.ZP,{height:"400px",defaultLanguage:"css",defaultValue:u,onChange:e=>{c(e)}}))))}function g(e){let{defaultHTML:t,setHTML:a,defaultJavaScript:u,setJS:c}=e;return r.createElement(r.Fragment,null,r.createElement(n.Z,{groupId:"editor"},r.createElement(l.Z,{value:"html",label:"HTML"},r.createElement(s.ZP,{height:"400px",defaultLanguage:"html",defaultValue:t,onChange:e=>{a(e)}})),r.createElement(l.Z,{value:"js",label:"JavaScript"},r.createElement(s.ZP,{height:"400px",defaultLanguage:"javascript",defaultValue:u,onChange:e=>{c(e)}}))))}function b(e){let{language:t,children:a,defaultCSS:n,defaultJavaScript:l}=e;const[b,v]=(0,r.useState)(a),[E,y]=(0,r.useState)(n),[w,S]=(0,r.useState)(l);return r.createElement(r.Fragment,null,r.createElement("div",{className:o},r.createElement("div",{className:d},"\u30e9\u30a4\u30d6\u30a8\u30c7\u30a3\u30bf\u30fc"),r.createElement("div",{className:m},"html-css-javascript"===t?r.createElement(h,{defaultHTML:a,setHTML:v,defaultCSS:n,setCSS:y,defaultJavaScript:l,setJS:S}):"html-css"===t?r.createElement(f,{defaultHTML:a,setHTML:v,defaultCSS:n,setCSS:y}):"html-javascript"===t?r.createElement(g,{defaultHTML:a,setHTML:v,defaultJavaScript:l,setJS:S}):r.createElement(s.ZP,{height:"400px",defaultLanguage:t,defaultValue:a,onChange:e=>{v(e)}})),r.createElement("div",{className:d},"\u7d50\u679c"),r.createElement("div",{className:p},r.createElement(u.Z,null,"html"===t?b:"markdown"===t?(0,c.Z)(b):"latex"===t?(0,i.Z)(b):"html-css"===t?`<style>${E}</style>${b}`:"html-javascript"===t?`${b}<script>${w}<\/script>`:`<style>${E}</style>${b}<script>${w}<\/script>`))))}},37403:(e,t,a)=>{function r(e){return'  <!DOCTYPE html>\n  <html lang="ja">\n    <head>\n      <meta charset="UTF-8" />\n      <script type="module">\n        import { LaTeXJSComponent } from "https://cdn.jsdelivr.net/npm/latex.js/dist/latex.mjs";\n        customElements.define("latex-js", LaTeXJSComponent);\n      <\/script>\n    </head>\n    <body>\n      <latex-js baseURL="https://cdn.jsdelivr.net/npm/latex.js/dist/">'+e+"      </latex-js>\n    </body>\n  </html>"}a.d(t,{Z:()=>r})},14328:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=a(87462),n=(a(67294),a(3905)),l=a(52991);a(24701);const s={sidebar_position:4},u="\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9",c={unversionedId:"extras/website/index",id:"extras/website/index",title:"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9",description:"\u3053\u3053\u3067\u306f\u3001\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9\u3092\u7d39\u4ecb\u3057\u3066\u304a\u304d\u307e\u3059\u3002",source:"@site/docs/07-extras/04-website/index.mdx",sourceDirName:"07-extras/04-website",slug:"/extras/website/",permalink:"/pr-preview/pr-254/docs/extras/website/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/07-extras/04-website/index.mdx",tags:[],version:"current",lastUpdatedAt:1682826461,formattedLastUpdatedAt:"2023\u5e744\u670830\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Python \u306e\u74b0\u5883\u69cb\u7bc9",permalink:"/pr-preview/pr-254/docs/extras/python/"},next:{title:"HTML \u3092\u7528\u3044\u305f Web \u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9",permalink:"/pr-preview/pr-254/docs/extras/website/html/"}},i={},o=[],d={toc:o};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9"},"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9"),(0,n.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9\u3092\u7d39\u4ecb\u3057\u3066\u304a\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"Web \u30b5\u30a4\u30c8\u306f\u3001HTML \u3092\u7528\u3044\u3066\u4f5c\u308b\u306e\u304c\u4e00\u822c\u7684\u3067\u3059\u3002\u307e\u305a\u306f\u3058\u3081\u306b HTML \u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"HTML \u3092\u4f7f\u3048\u3070\u5927\u62b5\u306e\u3082\u306e\u3092\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304c\u3001\u8907\u96d1\u306a\u3082\u306e\u3092\u4f5c\u308b\u306e\u306f\u3042\u307e\u308a\u306b\u3082\u5927\u5909\u306a\u306e\u3067\u3001\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u3067\u306f\u3088\u308a\u7c21\u5358\u306b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u4f5c\u6210\u3067\u304d\u308b Docusaurus \u3092\u4f7f\u3044\u307e\u3057\u305f\u3002\u305d\u306e\u305f\u3081\u3001Docusaurus \u3092\u4f7f\u3063\u305f Web \u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9\u306b\u3064\u3044\u3066\u305d\u306e\u5f8c\u89e3\u8aac\u3057\u307e\u3059\u3002HTML \u306b\u3064\u3044\u3066\u306e\u9805\u3068 Docusaurus \u306b\u3064\u3044\u3066\u306e\u9805\u306f\u72ec\u7acb\u306b\u306a\u3063\u3066\u3044\u308b\u306e\u3067\u3001HTML \u306e\u9805\u306f\u3072\u3068\u307e\u305a\u8aad\u307f\u98db\u3070\u3057\u3066\u3082\u69cb\u3044\u307e\u305b\u3093\u3002"),(0,n.kt)("p",null,"\u4ee5\u964d\u306e\u624b\u9806\u306b\u6cbf\u3046\u3053\u3068\u3067\u3001\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u3068\u5168\u304f\u540c\u3058\u3088\u3046\u306a\u3082\u306e\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u5b9f\u306f\u3001\u3082\u3063\u3068\u7c21\u5358\u306b Web \u30b5\u30a4\u30c8\u3092\u4f5c\u6210\u3067\u304d\u308b\u30b5\u30fc\u30d3\u30b9\u306f\u305f\u304f\u3055\u3093\u3042\u308a\u30a2\u30ab\u30a6\u30f3\u30c8\u767b\u9332\u3060\u3051\u3067\u3067\u304d\u305f\u308a\u3057\u307e\u3059\u304c\u3001\u305b\u3063\u304b\u304f\u306a\u306e\u3067 Web \u958b\u767a\u8005\u304c\u901a\u5e38\u884c\u3046\u65b9\u6cd5\u3067\u89e3\u8aac\u3057\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u305f\u3060\u30b7\u30b1\u30d7\u30ea\u3092\u4f5c\u308b\u76ee\u7684\u306a\u3089\u5c11\u3005\u56de\u308a\u9053\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u3057\u304b\u3057\u3001\u3053\u306e\u65b9\u6cd5\u3092\u4f7f\u3048\u3070\u3053\u306e\u5148\u4ed6\u306e\u8a00\u8a9e\u306e\u74b0\u5883\u69cb\u7bc9\u3092\u3057\u3088\u3046\u3068\u3059\u308b\u6642\u3084\u4ed6\u306e\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u4f7f\u304a\u3046\u3068\u3059\u308b\u6642\u306b\u30b3\u30de\u30f3\u30c9\u4e00\u3064\u3067\u3067\u304d\u305f\u308a\u3059\u308b\u306e\u3067\u3001\u3042\u3048\u3066\u3053\u306e\u65b9\u6cd5\u3092\u63a1\u7528\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u5b8c\u6210\u54c1\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("iframe",{width:"100%",height:"800px",style:{border:"1px solid black"},src:"https://docusaurus-sample.onrender.com/docs/intro"}),(0,n.kt)("p",null,"\u305d\u308c\u3067\u306f\u3001\u5b9f\u969b\u306b Web \u30b5\u30a4\u30c8\u3092\u4f5c\u3063\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)(l.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);