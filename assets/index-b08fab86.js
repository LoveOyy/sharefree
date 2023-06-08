import{c as R,a as b,b as h,d as _,u as k,e as v,t as V,f as x,g as c,h as N,i as m,j,k as L,o as O,l as W,w as d,m as g,n as l,p,N as H,q as D,r as M,s as F,v as I,x as A}from"./index-6f68a2db.js";const E=R("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[b("&:first-child",{marginTop:0}),h("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[h("align-text",{paddingLeft:0},[b("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),b("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),b("&::before",{backgroundColor:"var(--n-bar-color)"})])]),K=Object.assign(Object.assign({},v.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),u=e=>_({name:`H${e}`,props:K,setup(r){const{mergedClsPrefixRef:a,inlineThemeDisabled:t}=k(r),s=v("Typography","-h",E,V,r,a),o=x(()=>{const{type:i}=r,{common:{cubicBezierEaseInOut:f},self:{headerFontWeight:y,headerTextColor:C,[c("headerPrefixWidth",e)]:w,[c("headerFontSize",e)]:$,[c("headerMargin",e)]:B,[c("headerBarWidth",e)]:T,[c("headerBarColor",i)]:z}}=s.value;return{"--n-bezier":f,"--n-font-size":$,"--n-margin":B,"--n-bar-color":z,"--n-bar-width":T,"--n-font-weight":y,"--n-text-color":C,"--n-prefix-width":w}}),n=t?N(`h${e}`,x(()=>r.type[0]),o,r):void 0;return{mergedClsPrefix:a,cssVars:t?void 0:o,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var r;const{prefix:a,alignText:t,mergedClsPrefix:s,cssVars:o,$slots:n}=this;return(r=this.onRender)===null||r===void 0||r.call(this),m(`h${e}`,{class:[`${s}-h`,`${s}-h${e}`,this.themeClass,{[`${s}-h--prefix-bar`]:a,[`${s}-h--align-text`]:t}],style:o},n)}}),Q=u("1");u("2");u("3");u("4");u("5");u("6");const q=R("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[h("strong",`
 font-weight: var(--n-font-weight-strong);
 `),h("italic",{fontStyle:"italic"}),h("underline",{textDecoration:"underline"}),h("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),G=Object.assign(Object.assign({},v.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),S=_({name:"Text",props:G,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:a}=k(e),t=v("Typography","-text",q,V,e,r),s=x(()=>{const{depth:n,type:i}=e,f=i==="default"?n===void 0?"textColor":`textColor${n}Depth`:c("textColor",i),{common:{fontWeightStrong:y,fontFamilyMono:C,cubicBezierEaseInOut:w},self:{codeTextColor:$,codeBorderRadius:B,codeColor:T,codeBorder:z,[f]:P}}=t.value;return{"--n-bezier":w,"--n-text-color":P,"--n-font-weight-strong":y,"--n-font-famliy-mono":C,"--n-code-border-radius":B,"--n-code-text-color":$,"--n-code-color":T,"--n-code-border":z}}),o=a?N("text",x(()=>`${e.type[0]}${e.depth||""}`),s,e):void 0;return{mergedClsPrefix:r,compitableTag:j(e,["as","tag"]),cssVars:a?void 0:s,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e,r,a;const{mergedClsPrefix:t}=this;(e=this.onRender)===null||e===void 0||e.call(this);const s=[`${t}-text`,this.themeClass,{[`${t}-text--code`]:this.code,[`${t}-text--delete`]:this.delete,[`${t}-text--strong`]:this.strong,[`${t}-text--italic`]:this.italic,[`${t}-text--underline`]:this.underline}],o=(a=(r=this.$slots).default)===null||a===void 0?void 0:a.call(r);return this.code?m("code",{class:s,style:this.cssVars},this.delete?m("del",null,o):o):this.delete?m("del",{class:s,style:this.cssVars},o):m(this.compitableTag||"span",{class:s,style:this.cssVars},o)}}),U=I("div",{style:{padding:"5px"}},null,-1),X=_({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(e,{emit:r}){const a=e,t=x({get(){return a.visible},set(n){r("update:visible",n)}}),s=L(),o=()=>{s.loading=!0,A().then(n=>{if(s.loading=!1,n.data.code==0){location.reload();let i=n.data.data.access_token;sessionStorage.setItem("Authentication",i),t.value=!1}else alert("登陆失败: "+n.data.msg)}).catch(()=>{alert("请求失败请刷新页面重试")})};return(n,i)=>(O(),W(l(F),{show:l(t),"onUpdate:show":i[0]||(i[0]=f=>M(t)?t.value=f:null),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"480px"},round:"true"},{default:d(()=>[g(l(Q),{prefix:"bar"},{default:d(()=>[p("登陆")]),_:1}),g(l(S),null,{default:d(()=>[p("请点击游客登录 免费使用 Share ChatGPT 永久免费 测试期间无广告 ")]),_:1}),g(l(S),null,{default:d(()=>[p(" 问题反馈&交流 QQ群：147302926")]),_:1}),U,g(l(H),{justify:"center"},{default:d(()=>[g(l(D),{onClick:o,type:"default"},{default:d(()=>[p("游客登陆")]),_:1})]),_:1})]),_:1},8,["show"]))}});export{X as default};
