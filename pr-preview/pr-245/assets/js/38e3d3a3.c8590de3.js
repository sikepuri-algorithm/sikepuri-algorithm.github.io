"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[4479],{85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>V});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),s=a(16550),i=a(91980),u=a(67392),d=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,u]=f({queryString:a,groupId:r}),[c,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=i??c;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),v(e)}),[u,v,l]),tabValues:l}}var b=a(72389);const h="tabList__CuJ",k="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),r=u[a].value;r!==s&&(c(t),i(r))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",k,null==o?void 0:o.className,{"tabs__item--active":s===t})}),a??t)})))}function S(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=v(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h)},n.createElement(w,(0,r.Z)({},e,t)),n.createElement(S,(0,r.Z)({},e,t)))}function V(e){const t=(0,b.Z)();return n.createElement(g,(0,r.Z)({key:String(t)},e))}},53252:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>w,frontMatter:()=>m,metadata:()=>v,toc:()=>h});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),o=a(85162);const s=a.p+"assets/medias/install_vscode-02f65af5a6c2de514ec1aa135ffe6e9e.mov",i=a.p+"assets/medias/open_folder-55a2214c133a6ed5ef277d082755fbf9.mp4",u=a.p+"assets/medias/install_remote_wsl-d41758ec4182b30c80a5b5fa943dfba7.mov",d=a.p+"assets/medias/start_wsl-620ca0e3e28c78892a570cfe8729d98a.mov",c=a.p+"assets/medias/open_folder_wsl-3e08ef0f4172e71437388d60f09089d2.mov",p=a.p+"assets/medias/open_terminal-73735bd32665b18edfea8ce2efa2cd44.mp4",m={sidebar_position:2},f="Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",v={unversionedId:"extras/vscode/index",id:"extras/vscode/index",title:"Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",source:"@site/docs/07-extras/02-vscode/index.mdx",sourceDirName:"07-extras/02-vscode",slug:"/extras/vscode/",permalink:"/$BASE_URL/docs/extras/vscode/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/07-extras/02-vscode/index.mdx",tags:[],version:"current",lastUpdatedAt:1676774301,formattedLastUpdatedAt:"2023\u5e742\u670819\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"WSL \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff08Windows \u306e\u307f\uff09",permalink:"/$BASE_URL/docs/extras/wsl/"},next:{title:"Python \u306e\u74b0\u5883\u69cb\u7bc9",permalink:"/$BASE_URL/docs/extras/python/"}},b={},h=[{value:"Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",id:"visual-studio-code-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",level:2},{value:"WSL \u62e1\u5f35\u6a5f\u80fd\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\uff08Windows \u306e\u307f\uff09",id:"wsl-\u62e1\u5f35\u6a5f\u80fd\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5windows-\u306e\u307f",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u958b\u304d\u65b9",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u958b\u304d\u65b9",level:2},{value:"WSL \u4e0a\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u958b\u304d\u65b9\uff08Windows \u306e\u307f\uff09",id:"wsl-\u4e0a\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u958b\u304d\u65b9windows-\u306e\u307f",level:2},{value:"\u30bf\u30fc\u30df\u30ca\u30eb\u306e\u8d77\u52d5\u65b9\u6cd5",id:"\u30bf\u30fc\u30df\u30ca\u30eb\u306e\u8d77\u52d5\u65b9\u6cd5",level:2}],k={toc:h};function w(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"visual-studio-code-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,n.kt)("h2",{id:"visual-studio-code-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"},"Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"),(0,n.kt)("p",null,"Visual Studio Code(VS Code) \u306f\u3001Microsoft \u793e \u304c\u958b\u767a\u3057\u3066\u3044\u308b\u30d5\u30ea\u30fc\u304b\u3064\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306a\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u3067\u3059\u3002\u69d8\u3005\u306a\u4fbf\u5229\u306a\u62e1\u5f35\u6a5f\u80fd\u304c\u3042\u308a\u3001\u591a\u304f\u306e\u958b\u767a\u8005\u306b\u4f7f\u308f\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7c21\u5358\u306b\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u6b21\u306e\u52d5\u753b\u3092\u898b\u306a\u304c\u3089\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"win10",label:"Windows 10",mdxType:"TabItem"},(0,n.kt)("video",{src:s,controls:!0,width:"100%"})),(0,n.kt)(o.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"macOS\u3067\u3082\u3001Windows\u3068\u540c\u3058\u3088\u3046\u306b\u3059\u308c\u3070\u3067\u304d\u307e\u3059\u3002macOS\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u306e\u3067\u3001\u52d5\u753b\u306f\u64ae\u308c\u307e\u305b\u3093\u3067\u3057\u305f\u2026\u3002\u7533\u3057\u8a33\u3042\u308a\u307e\u305b\u3093\u3002")),(0,n.kt)("h2",{id:"wsl-\u62e1\u5f35\u6a5f\u80fd\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5windows-\u306e\u307f"},"WSL \u62e1\u5f35\u6a5f\u80fd\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\uff08Windows \u306e\u307f\uff09"),(0,n.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001VSCode \u304b\u3089 WSL \u4e0a\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u7c21\u5358\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b WSL \u62e1\u5f35\u6a5f\u80fd\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../wsl/"},"WSL \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u9805"),"\u3092\u53c2\u8003\u306b WSL \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,"\u4e0b\u8a18\u306e\u52d5\u753b\u3092\u53c2\u8003\u306b VSCode \u3067\u62e1\u5f35\u6a5f\u80fd\u3092\u691c\u7d22\u3057\u3066\u3001 Remote WSL \u62e1\u5f35\u6a5f\u80fd\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("video",{src:u,controls:!0,width:"100%"}),(0,n.kt)("h2",{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u958b\u304d\u65b9"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u958b\u304d\u65b9"),(0,n.kt)("p",null,"VSCode \u3067\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306f\u6b21\u306e\u52d5\u753b\u306e\u3088\u3046\u306b\u3057\u3066\u958b\u304d\u307e\u3059\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306b\u69d8\u3005\u306a\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u3063\u3066\u958b\u767a\u3092\u3057\u3066\u3044\u304f\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("video",{src:i,controls:!0,width:"100%"}),(0,n.kt)("h2",{id:"wsl-\u4e0a\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u958b\u304d\u65b9windows-\u306e\u307f"},"WSL \u4e0a\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u958b\u304d\u65b9\uff08Windows \u306e\u307f\uff09"),(0,n.kt)("p",null,"WSL \u306e\u8d77\u52d5\u306f\u3001\u6b21\u306e\u52d5\u753b\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u5de6\u4e0b\u306e\u7dd1\u306e\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"New WSL Window")," \u3092\u30af\u30ea\u30c3\u30af\u3059\u308c\u3070\u3001WSL \u4e0a\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("video",{src:d,controls:!0,width:"100%"}),(0,n.kt)("p",null,"\u6b21\u306e\u52d5\u753b\u306e\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3001\u65b0\u3057\u304f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u3092\u4f5c\u6210\u3057\u3066\u3001\u305d\u308c\u3092 VSCode \u3067\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc\u306e\u30a2\u30c9\u30ec\u30b9\u30d0\u30fc\u306b ",(0,n.kt)("inlineCode",{parentName:"p"},"\xa5\xa5wsl$")," \u3068\u5165\u529b\u3059\u308b\u3068\u3001WSL \u4e0a\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3055\u3089\u306b\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"Ubuntu"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"home"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"\u30e6\u30fc\u30b6\u30fc\u540d")," \u306e\u9806\u306b\u30af\u30ea\u30c3\u30af\u3057\u3066\u3044\u304f\u3053\u3068\u3067\u30db\u30fc\u30e0\u30d5\u30a9\u30eb\u30c0\u306b\u79fb\u52d5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u305d\u306e\u5f8c\u3001VSCode \u3067\u305d\u306e\u30d5\u30a9\u30eb\u30c0\u3092\u958b\u304d\u307e\u3059\u3002"),(0,n.kt)("video",{src:c,controls:!0,width:"100%"}),(0,n.kt)("h2",{id:"\u30bf\u30fc\u30df\u30ca\u30eb\u306e\u8d77\u52d5\u65b9\u6cd5"},"\u30bf\u30fc\u30df\u30ca\u30eb\u306e\u8d77\u52d5\u65b9\u6cd5"),(0,n.kt)("p",null,"\u30bf\u30fc\u30df\u30ca\u30eb\u306f\u3001\u6b21\u306e\u52d5\u753b\u306e\u3088\u3046\u306b\u3057\u3066\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3067 UNIX \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("video",{src:p,controls:!0,width:"100%"}))}w.isMDXComponent=!0}}]);