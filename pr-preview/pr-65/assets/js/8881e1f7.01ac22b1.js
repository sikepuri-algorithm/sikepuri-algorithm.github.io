"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[6506],{85162:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(67294),o=a(86010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return s.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>p});var s=a(87462),o=a(67294),l=a(86010),r=a(72389),i=a(67392),n=a(7094),u=a(12466);const d="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:a,block:r,defaultValue:m,values:p,groupId:v,className:b}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??f.map((e=>{let{props:{value:t,label:a,attributes:s}}=e;return{value:t,label:a,attributes:s}})),k=(0,i.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==x&&!h.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,n.U)(),[T,y]=(0,o.useState)(x),S=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=v){const e=g[v];null!=e&&e!==T&&h.some((t=>t.value===e))&&y(e)}const _=e=>{const t=e.currentTarget,a=S.indexOf(t),s=h[a].value;s!==T&&(C(t),y(s),null!=v&&w(v,String(s)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;a=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;a=S[t]??S[S.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},b)},h.map((e=>{let{value:t,label:a,attributes:r}=e;return o.createElement("li",(0,s.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>S.push(e),onKeyDown:E,onClick:_},r,{className:(0,l.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,o.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function p(e){const t=(0,r.Z)();return o.createElement(m,(0,s.Z)({key:String(t)},e))}},7649:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var s=a(87462),o=(a(67294),a(3905)),l=a(65488),r=a(85162);const i=a.p+"assets/medias/install_vscode-02f65af5a6c2de514ec1aa135ffe6e9e.mov",n=a.p+"assets/medias/open_folder-55a2214c133a6ed5ef277d082755fbf9.mp4",u={sidebar_position:1},d="Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",c={unversionedId:"03extras/1vscode/index",id:"03extras/1vscode/index",title:"Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",source:"@site/docs/03extras/1vscode/index.mdx",sourceDirName:"03extras/1vscode",slug:"/03extras/1vscode/",permalink:"/docs/03extras/1vscode/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/03extras/1vscode/index.mdx",tags:[],version:"current",lastUpdatedAt:1669130627,formattedLastUpdatedAt:"2022\u5e7411\u670822\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u304a\u307e\u3051",permalink:"/docs/03extras/"},next:{title:"WSL \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff08Windows \u306e\u307f\u5fc5\u8981\uff09",permalink:"/docs/03extras/2wsl/"}},m={},p=[{value:"Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",id:"visual-studio-code-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u4f5c\u308a\u65b9",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u4f5c\u308a\u65b9",level:2}],v={toc:p};function b(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"visual-studio-code-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,o.kt)("h2",{id:"visual-studio-code-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"},"Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"),(0,o.kt)("p",null,"Visual Studio Code \u306f\u3001Microsoft \u793e \u304c\u958b\u767a\u3057\u3066\u3044\u308b\u30d5\u30ea\u30fc\u304b\u3064\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306a\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u3067\u3059\u3002\u69d8\u3005\u306a\u4fbf\u5229\u306a\u62e1\u5f35\u6a5f\u80fd\u304c\u3042\u308a\u3001\u591a\u304f\u306e\u958b\u767a\u8005\u306b\u4f7f\u308f\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001Visual Studio Code \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7c21\u5358\u306b\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u6b21\u306e\u52d5\u753b\u3092\u898b\u306a\u304c\u3089\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"win10",label:"Windows 10",mdxType:"TabItem"},(0,o.kt)("video",{src:i,controls:!0,width:"100%"})),(0,o.kt)(r.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"macOS\u3067\u3082\u3001Windows\u3068\u540c\u3058\u3088\u3046\u306b\u3059\u308c\u3070\u3067\u304d\u307e\u3059\u3002macOS\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u306e\u3067\u3001\u52d5\u753b\u306f\u64ae\u308c\u307e\u305b\u3093\u3067\u3057\u305f\u2026\u3002\u7533\u3057\u8a33\u3042\u308a\u307e\u305b\u3093\u3002")),(0,o.kt)("h2",{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u4f5c\u308a\u65b9"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306e\u4f5c\u308a\u65b9"),(0,o.kt)("p",null,"VSCode \u3067\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306f\u6b21\u306e\u52d5\u753b\u306e\u3088\u3046\u306b\u3057\u3066\u958b\u304d\u307e\u3059\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u306b\u69d8\u3005\u306a\u30d5\u30a1\u30a4\u30eb\u3092\u7f6e\u3044\u3066\u958b\u767a\u3092\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,o.kt)("video",{src:n,controls:!0,width:"100%"}))}b.isMDXComponent=!0}}]);