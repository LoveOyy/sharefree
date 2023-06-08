import{A as _,ap as vt,a as J,c as r,b as B,aq as ie,y as Te,ar as ft,as as mt,d as Z,u as pt,e as Ae,at as gt,z as bt,f as S,B as yt,C as wt,au as Ie,ab as ge,av as xt,h as Me,D as kt,E as ye,i as I,V as $t,F as _t,aw as Ct,I as St,T as zt,ax as re,ay as de,R as Ve,ad as Rt,Y as Tt,a1 as It,a9 as Pe,o as j,S as q,v as o,W as i,m as c,n as s,H as ce,w as g,p as M,q as A,a7 as Mt,a8 as L,az as Vt,a0 as Dt,ah as Bt,aA as Ut,a2 as K,aB as At,aC as Ne,a3 as Pt,l as we,a6 as xe,aD as Nt,aE as Ft,aF as Et,aG as be,r as Ht,s as jt}from"./index-6f68a2db.js";function De(a){return window.TouchEvent&&a instanceof window.TouchEvent}function Be(){const a=_(new Map),l=k=>m=>{a.value.set(k,m)};return vt(()=>a.value.clear()),[a,l]}const Ot=J([r("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[B("reverse",[r("slider-handles",[r("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),r("slider-dots",[r("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),B("vertical",[r("slider-handles",[r("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),r("slider-marks",[r("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),r("slider-dots",[r("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),B("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[r("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[r("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),r("slider-rail",`
 height: 100%;
 `,[ie("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),B("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),r("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[r("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),r("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[r("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),B("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[r("slider-handle",`
 cursor: not-allowed;
 `)]),B("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),J("&:hover",[r("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[ie("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),r("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),B("active",[r("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[ie("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),r("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),r("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[r("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),r("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[ie("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),r("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[r("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[r("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[J("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),J("&:focus",[r("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[J("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),r("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[B("transition-disabled",[r("slider-dot","transition: none;")]),r("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[B("active","border: var(--n-dot-border-active);")])])]),r("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Te()]),r("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[B("top",`
 margin-bottom: 12px;
 `),B("right",`
 margin-left: 12px;
 `),B("bottom",`
 margin-top: 12px;
 `),B("left",`
 margin-right: 12px;
 `),Te()]),ft(r("slider",[r("slider-dot","background-color: var(--n-dot-color-modal);")])),mt(r("slider",[r("slider-dot","background-color: var(--n-dot-color-popover);")]))]),Lt=0,Gt=Object.assign(Object.assign({},Ae.props),{to:ye.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Ue=Z({name:"Slider",props:Gt,setup(a){const{mergedClsPrefixRef:l,namespaceRef:k,inlineThemeDisabled:m}=pt(a),h=Ae("Slider","-slider",Ot,gt,a,l),f=_(null),[b,$]=Be(),[w,y]=Be(),z=_(new Set),O=bt(a),{mergedDisabledRef:N}=O,F=S(()=>{const{step:e}=a;if(e<=0||e==="mark")return 0;const t=e.toString();let n=0;return t.includes(".")&&(n=t.length-t.indexOf(".")-1),n}),W=_(a.defaultValue),ue=yt(a,"value"),X=wt(ue,W),V=S(()=>{const{value:e}=X;return(a.range?e:[e]).map(Ce)}),Q=S(()=>V.value.length>2),v=S(()=>a.placement===void 0?a.vertical?"right":"top":a.placement),x=S(()=>{const{marks:e}=a;return e?Object.keys(e).map(parseFloat):null}),u=_(-1),E=_(-1),U=_(-1),D=_(!1),ee=_(!1),he=S(()=>{const{vertical:e,reverse:t}=a;return e?t?"top":"bottom":t?"right":"left"}),Fe=S(()=>{if(Q.value)return;const e=V.value,t=te(a.range?Math.min(...e):a.min),n=te(a.range?Math.max(...e):e[0]),{value:d}=he;return a.vertical?{[d]:`${t}%`,height:`${n-t}%`}:{[d]:`${t}%`,width:`${n-t}%`}}),Ee=S(()=>{const e=[],{marks:t}=a;if(t){const n=V.value.slice();n.sort((R,T)=>R-T);const{value:d}=he,{value:p}=Q,{range:C}=a,P=p?()=>!1:R=>C?R>=n[0]&&R<=n[n.length-1]:R<=n[0];for(const R of Object.keys(t)){const T=Number(R);e.push({active:P(T),label:t[R],style:{[d]:`${te(T)}%`}})}}return e});function He(e,t){const n=te(e),{value:d}=he;return{[d]:`${n}%`,zIndex:t===u.value?1:0}}function ke(e){return a.showTooltip||U.value===e||u.value===e&&D.value}function je(e){return D.value?!(u.value===e&&E.value===e):!0}function Oe(e){var t;~e&&(u.value=e,(t=b.value.get(e))===null||t===void 0||t.focus())}function Le(){w.value.forEach((e,t)=>{ke(t)&&e.syncPosition()})}function $e(e){const{"onUpdate:value":t,onUpdateValue:n}=a,{nTriggerFormInput:d,nTriggerFormChange:p}=O;n&&Ve(n,e),t&&Ve(t,e),W.value=e,d(),p()}function _e(e){const{range:t}=a;if(t){if(Array.isArray(e)){const{value:n}=V;e.join()!==n.join()&&$e(e)}}else Array.isArray(e)||V.value[0]!==e&&$e(e)}function ve(e,t){if(a.range){const n=V.value.slice();n.splice(t,1,e),_e(n)}else _e(e)}function fe(e,t,n){const d=n!==void 0;n||(n=e-t>0?1:-1);const p=x.value||[],{step:C}=a;if(C==="mark"){const T=ne(e,p.concat(t),d?n:void 0);return T?T.value:t}if(C<=0)return t;const{value:P}=F;let R;if(d){const T=Number((t/C).toFixed(P)),H=Math.floor(T),me=T>H?H:H-1,pe=T<H?H:H+1;R=ne(t,[Number((me*C).toFixed(P)),Number((pe*C).toFixed(P)),...p],n)}else{const T=Ye(e);R=ne(e,[...p,T])}return R?Ce(R.value):t}function Ce(e){return Math.min(a.max,Math.max(a.min,e))}function te(e){const{max:t,min:n}=a;return(e-n)/(t-n)*100}function Ge(e){const{max:t,min:n}=a;return n+(t-n)*e}function Ye(e){const{step:t,min:n}=a;if(t<=0||t==="mark")return e;const d=Math.round((e-n)/t)*t+n;return Number(d.toFixed(F.value))}function ne(e,t=x.value,n){if(!(t!=null&&t.length))return null;let d=null,p=-1;for(;++p<t.length;){const C=t[p]-e,P=Math.abs(C);(n===void 0||C*n>0)&&(d===null||P<d.distance)&&(d={index:p,distance:P,value:t[p]})}return d}function Se(e){const t=f.value;if(!t)return;const n=De(e)?e.touches[0]:e,d=t.getBoundingClientRect();let p;return a.vertical?p=(d.bottom-n.clientY)/d.height:p=(n.clientX-d.left)/d.width,a.reverse&&(p=1-p),Ge(p)}function Ke(e){if(N.value||!a.keyboard)return;const{vertical:t,reverse:n}=a;switch(e.key){case"ArrowUp":e.preventDefault(),ae(t&&n?-1:1);break;case"ArrowRight":e.preventDefault(),ae(!t&&n?-1:1);break;case"ArrowDown":e.preventDefault(),ae(t&&n?1:-1);break;case"ArrowLeft":e.preventDefault(),ae(!t&&n?1:-1);break}}function ae(e){const t=u.value;if(t===-1)return;const{step:n}=a,d=V.value[t],p=n<=0||n==="mark"?d:d+n*e;ve(fe(p,d,e>0?1:-1),t)}function We(e){var t,n;if(N.value||!De(e)&&e.button!==Lt)return;const d=Se(e);if(d===void 0)return;const p=V.value.slice(),C=a.range?(n=(t=ne(d,p))===null||t===void 0?void 0:t.index)!==null&&n!==void 0?n:-1:0;C!==-1&&(e.preventDefault(),Oe(C),Xe(),ve(fe(d,V.value[C]),C))}function Xe(){D.value||(D.value=!0,re("touchend",document,le),re("mouseup",document,le),re("touchmove",document,se),re("mousemove",document,se))}function oe(){D.value&&(D.value=!1,de("touchend",document,le),de("mouseup",document,le),de("touchmove",document,se),de("mousemove",document,se))}function se(e){const{value:t}=u;if(!D.value||t===-1){oe();return}const n=Se(e);ve(fe(n,V.value[t]),t)}function le(){oe()}function Je(e){u.value=e,N.value||(U.value=e)}function qe(e){u.value===e&&(u.value=-1,oe()),U.value===e&&(U.value=-1)}function Ze(e){U.value=e}function Qe(e){U.value===e&&(U.value=-1)}Ie(u,(e,t)=>void ge(()=>E.value=t)),Ie(X,()=>{if(a.marks){if(ee.value)return;ee.value=!0,ge(()=>{ee.value=!1})}ge(Le)}),xt(()=>{oe()});const ze=S(()=>{const{self:{markFontSize:e,railColor:t,railColorHover:n,fillColor:d,fillColorHover:p,handleColor:C,opacityDisabled:P,dotColor:R,dotColorModal:T,handleBoxShadow:H,handleBoxShadowHover:me,handleBoxShadowActive:pe,handleBoxShadowFocus:et,dotBorder:tt,dotBoxShadow:nt,railHeight:at,railWidthVertical:ot,handleSize:st,dotHeight:lt,dotWidth:it,dotBorderRadius:rt,fontSize:dt,dotBorderActive:ct,dotColorPopover:ut},common:{cubicBezierEaseInOut:ht}}=h.value;return{"--n-bezier":ht,"--n-dot-border":tt,"--n-dot-border-active":ct,"--n-dot-border-radius":rt,"--n-dot-box-shadow":nt,"--n-dot-color":R,"--n-dot-color-modal":T,"--n-dot-color-popover":ut,"--n-dot-height":lt,"--n-dot-width":it,"--n-fill-color":d,"--n-fill-color-hover":p,"--n-font-size":dt,"--n-handle-box-shadow":H,"--n-handle-box-shadow-active":pe,"--n-handle-box-shadow-focus":et,"--n-handle-box-shadow-hover":me,"--n-handle-color":C,"--n-handle-size":st,"--n-opacity-disabled":P,"--n-rail-color":t,"--n-rail-color-hover":n,"--n-rail-height":at,"--n-rail-width-vertical":ot,"--n-mark-font-size":e}}),G=m?Me("slider",void 0,ze,a):void 0,Re=S(()=>{const{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:n,indicatorTextColor:d,indicatorBorderRadius:p}}=h.value;return{"--n-font-size":e,"--n-indicator-border-radius":p,"--n-indicator-box-shadow":n,"--n-indicator-color":t,"--n-indicator-text-color":d}}),Y=m?Me("slider-indicator",void 0,Re,a):void 0;return{mergedClsPrefix:l,namespace:k,uncontrolledValue:W,mergedValue:X,mergedDisabled:N,mergedPlacement:v,isMounted:kt(),adjustedTo:ye(a),dotTransitionDisabled:ee,markInfos:Ee,isShowTooltip:ke,shouldKeepTooltipTransition:je,handleRailRef:f,setHandleRefs:$,setFollowerRefs:y,fillStyle:Fe,getHandleStyle:He,activeIndex:u,arrifiedValues:V,followerEnabledIndexSet:z,handleRailMouseDown:We,handleHandleFocus:Je,handleHandleBlur:qe,handleHandleMouseEnter:Ze,handleHandleMouseLeave:Qe,handleRailKeyDown:Ke,indicatorCssVars:m?void 0:Re,indicatorThemeClass:Y==null?void 0:Y.themeClass,indicatorOnRender:Y==null?void 0:Y.onRender,cssVars:m?void 0:ze,themeClass:G==null?void 0:G.themeClass,onRender:G==null?void 0:G.onRender}},render(){var a;const{mergedClsPrefix:l,themeClass:k,formatTooltip:m}=this;return(a=this.onRender)===null||a===void 0||a.call(this),I("div",{class:[`${l}-slider`,k,{[`${l}-slider--disabled`]:this.mergedDisabled,[`${l}-slider--active`]:this.activeIndex!==-1,[`${l}-slider--with-mark`]:this.marks,[`${l}-slider--vertical`]:this.vertical,[`${l}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},I("div",{class:`${l}-slider-rail`},I("div",{class:`${l}-slider-rail__fill`,style:this.fillStyle}),this.marks?I("div",{class:[`${l}-slider-dots`,this.dotTransitionDisabled&&`${l}-slider-dots--transition-disabled`]},this.markInfos.map(h=>I("div",{key:h.label,class:[`${l}-slider-dot`,{[`${l}-slider-dot--active`]:h.active}],style:h.style}))):null,I("div",{ref:"handleRailRef",class:`${l}-slider-handles`},this.arrifiedValues.map((h,f)=>{const b=this.isShowTooltip(f);return I($t,null,{default:()=>[I(_t,null,{default:()=>I("div",{ref:this.setHandleRefs(f),class:`${l}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(h,f),onFocus:()=>this.handleHandleFocus(f),onBlur:()=>this.handleHandleBlur(f),onMouseenter:()=>this.handleHandleMouseEnter(f),onMouseleave:()=>this.handleHandleMouseLeave(f)},Ct(this.$slots.thumb,()=>[I("div",{class:`${l}-slider-handle`})]))}),this.tooltip&&I(St,{ref:this.setFollowerRefs(f),show:b,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(f),teleportDisabled:this.adjustedTo===ye.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>I(zt,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(f),onEnter:()=>{this.followerEnabledIndexSet.add(f)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(f)}},{default:()=>{var $;return b?(($=this.indicatorOnRender)===null||$===void 0||$.call(this),I("div",{class:[`${l}-slider-handle-indicator`,this.indicatorThemeClass,`${l}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof m=="function"?m(h):h)):null}})})]})})),this.marks?I("div",{class:`${l}-slider-marks`},this.markInfos.map(h=>I("div",{key:h.label,class:`${l}-slider-mark`,style:h.style},h.label))):null))}});function Yt(){const a=new Date,l=a.getDate(),k=a.getMonth()+1;return`${a.getFullYear()}-${k}-${l}`}const Kt={class:"p-4 space-y-5 min-h-[200px]"},Wt={class:"space-y-6"},Xt={class:"flex items-center space-x-4"},Jt={class:"flex-shrink-0 w-[100px]"},qt={class:"flex-1"},Zt={class:"flex items-center space-x-4"},Qt={class:"flex-shrink-0 w-[100px]"},en={class:"w-[200px]"},tn={class:"flex items-center space-x-4"},nn={class:"flex-shrink-0 w-[100px]"},an={class:"flex-1"},on={class:"flex-shrink-0 w-[100px]"},sn={class:"flex flex-wrap items-center gap-4"},ln={class:"flex items-center space-x-4"},rn={class:"flex-shrink-0 w-[100px]"},dn={class:"flex flex-wrap items-center gap-4"},cn={class:"flex items-center space-x-4"},un={class:"flex-shrink-0 w-[100px]"},hn={class:"flex flex-wrap items-center gap-4"},vn={class:"flex items-center space-x-4"},fn={class:"flex-shrink-0 w-[100px]"},mn=Z({__name:"General",setup(a){const l=Rt(),k=Tt(),{isMobile:m}=It(),h=Pe(),f=S(()=>l.theme),b=S(()=>k.userInfo),$=_(b.value.avatar??""),w=_(b.value.name??""),y=_(b.value.description??""),z=S({get(){return l.language},set(v){l.setLanguage(v)}}),O=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],N=[{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"},{label:"English",key:"en-US",value:"en-US"},{label:"한국어",key:"ko-KR",value:"ko-KR"},{label:"Русский язык",key:"ru-RU",value:"ru-RU"}];function F(v){k.updateUserInfo(v),h.success(K("common.success"))}function W(){k.resetUserInfo(),h.success(K("common.success")),window.location.reload()}function ue(){const v=Yt(),x=localStorage.getItem("chatStorage")||"{}",u=JSON.stringify(JSON.parse(x),null,2),E=new Blob([u],{type:"application/json"}),U=URL.createObjectURL(E),D=document.createElement("a");D.href=U,D.download=`chat-store_${v}.json`,document.body.appendChild(D),D.click(),document.body.removeChild(D)}function X(v){const x=v.target;if(!x||!x.files)return;const u=x.files[0];if(!u)return;const E=new FileReader;E.onload=()=>{try{const U=JSON.parse(E.result);localStorage.setItem("chatStorage",JSON.stringify(U)),h.success(K("common.success")),location.reload()}catch{h.error(K("common.invalidFileFormat"))}},E.readAsText(u)}function V(){localStorage.removeItem("chatStorage"),location.reload()}function Q(){const v=document.getElementById("fileInput");v&&v.click()}return(v,x)=>(j(),q("div",Kt,[o("div",Wt,[o("div",Xt,[o("span",Jt,i(v.$t("setting.avatarLink")),1),o("div",qt,[c(s(ce),{value:$.value,"onUpdate:value":x[0]||(x[0]=u=>$.value=u),placeholder:""},null,8,["value"])]),c(s(A),{size:"tiny",text:"",type:"primary",onClick:x[1]||(x[1]=u=>F({avatar:$.value}))},{default:g(()=>[M(i(v.$t("common.save")),1)]),_:1})]),o("div",Zt,[o("span",Qt,i(v.$t("setting.name")),1),o("div",en,[c(s(ce),{value:w.value,"onUpdate:value":x[2]||(x[2]=u=>w.value=u),placeholder:""},null,8,["value"])]),c(s(A),{size:"tiny",text:"",type:"primary",onClick:x[3]||(x[3]=u=>F({name:w.value}))},{default:g(()=>[M(i(v.$t("common.save")),1)]),_:1})]),o("div",tn,[o("span",nn,i(v.$t("setting.description")),1),o("div",an,[c(s(ce),{value:y.value,"onUpdate:value":x[4]||(x[4]=u=>y.value=u),placeholder:""},null,8,["value"])]),c(s(A),{size:"tiny",text:"",type:"primary",onClick:x[5]||(x[5]=u=>F({description:y.value}))},{default:g(()=>[M(i(v.$t("common.save")),1)]),_:1})]),o("div",{class:Mt(["flex items-center space-x-4",s(m)&&"items-start"])},[o("span",on,i(v.$t("setting.chatHistory")),1),o("div",sn,[c(s(A),{size:"small",onClick:ue},{icon:g(()=>[c(s(L),{icon:"ri:download-2-fill"})]),default:g(()=>[M(" "+i(v.$t("common.export")),1)]),_:1}),o("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:X},null,32),c(s(A),{size:"small",onClick:Q},{icon:g(()=>[c(s(L),{icon:"ri:upload-2-fill"})]),default:g(()=>[M(" "+i(v.$t("common.import")),1)]),_:1}),c(s(Vt),{placement:"bottom",onPositiveClick:V},{trigger:g(()=>[c(s(A),{size:"small"},{icon:g(()=>[c(s(L),{icon:"ri:close-circle-line"})]),default:g(()=>[M(" "+i(v.$t("common.clear")),1)]),_:1})]),default:g(()=>[M(" "+i(v.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),o("div",ln,[o("span",rn,i(v.$t("setting.theme")),1),o("div",dn,[(j(),q(Dt,null,Bt(O,u=>c(s(A),{key:u.key,size:"small",type:u.key===s(f)?"primary":void 0,onClick:E=>s(l).setTheme(u.key)},{icon:g(()=>[c(s(L),{icon:u.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),o("div",cn,[o("span",un,i(v.$t("setting.language")),1),o("div",hn,[c(s(Ut),{style:{width:"140px"},value:s(z),options:N,onUpdateValue:x[6]||(x[6]=u=>s(l).setLanguage(u))},null,8,["value"])])]),o("div",vn,[o("span",fn,i(v.$t("setting.resetUserInfo")),1),c(s(A),{size:"small",onClick:W},{default:g(()=>[M(i(v.$t("common.reset")),1)]),_:1})])])]))}}),pn={class:"p-4 space-y-5 min-h-[200px]"},gn={class:"space-y-6"},bn={class:"flex items-center space-x-4"},yn={class:"flex-shrink-0 w-[120px]"},wn={class:"flex-1"},xn={class:"flex items-center space-x-4"},kn={class:"flex-shrink-0 w-[120px]"},$n={class:"flex-1"},_n={class:"flex items-center space-x-4"},Cn={class:"flex-shrink-0 w-[120px]"},Sn={class:"flex-1"},zn={class:"flex items-center space-x-4"},Rn=o("span",{class:"flex-shrink-0 w-[120px]"}," ",-1),Tn=Z({__name:"Advanced",setup(a){const l=At(),k=Pe(),m=_(l.systemMessage??""),h=_(l.temperature??.5),f=_(l.top_p??1);function b(w){l.updateSetting(w),k.success(K("common.success"))}function $(){l.resetSetting(),k.success(K("common.success")),window.location.reload()}return(w,y)=>(j(),q("div",pn,[o("div",gn,[o("div",bn,[o("span",yn,i(w.$t("setting.role")),1),o("div",wn,[c(s(ce),{value:m.value,"onUpdate:value":y[0]||(y[0]=z=>m.value=z),type:"textarea",autosize:{minRows:1,maxRows:4}},null,8,["value"])]),c(s(A),{size:"tiny",text:"",type:"primary",onClick:y[1]||(y[1]=z=>b({systemMessage:m.value}))},{default:g(()=>[M(i(w.$t("common.save")),1)]),_:1})]),o("div",xn,[o("span",kn,i(w.$t("setting.temperature")),1),o("div",$n,[c(s(Ue),{value:h.value,"onUpdate:value":y[2]||(y[2]=z=>h.value=z),max:1,min:0,step:.1},null,8,["value","step"])]),o("span",null,i(h.value),1),c(s(A),{size:"tiny",text:"",type:"primary",onClick:y[3]||(y[3]=z=>b({temperature:h.value}))},{default:g(()=>[M(i(w.$t("common.save")),1)]),_:1})]),o("div",_n,[o("span",Cn,i(w.$t("setting.top_p")),1),o("div",Sn,[c(s(Ue),{value:f.value,"onUpdate:value":y[4]||(y[4]=z=>f.value=z),max:1,min:0,step:.1},null,8,["value","step"])]),o("span",null,i(f.value),1),c(s(A),{size:"tiny",text:"",type:"primary",onClick:y[5]||(y[5]=z=>b({top_p:f.value}))},{default:g(()=>[M(i(w.$t("common.save")),1)]),_:1})]),o("div",zn,[Rn,c(s(A),{size:"small",onClick:$},{default:g(()=>[M(i(w.$t("common.reset")),1)]),_:1})])])]))}}),In="chatgpt-web",Mn="2.11.0",Vn="ChatGPT Web",Dn="ChenZhaoYu <chenzhaoyu1994@gmail.com>",Bn=["chatgpt-web","chatgpt","chatbot","vue"],Un={dev:"vite",build:"run-p build-only",preview:"vite preview","build-only":"vite build","type-check":"vue-tsc --noEmit",lint:"eslint .","lint:fix":"eslint . --fix",bootstrap:"pnpm install && pnpm run common:prepare","common:cleanup":"rimraf node_modules && rimraf pnpm-lock.yaml","common:prepare":"husky install"},An={"@fortaine/fetch-event-source":"^3.0.6","@traptitech/markdown-it-katex":"^3.6.0","@vueuse/core":"^9.13.0","highlight.js":"^11.7.0",html2canvas:"^1.4.1",katex:"^0.16.4","markdown-it":"^13.0.1","naive-ui":"^2.34.3",pinia:"^2.0.33",vue:"^3.2.47","vue-i18n":"^9.2.2","vue-router":"^4.1.6"},Pn={"@antfu/eslint-config":"^0.35.3","@commitlint/cli":"^17.4.4","@commitlint/config-conventional":"^17.4.4","@iconify/vue":"^4.1.0","@types/crypto-js":"^4.1.1","@types/katex":"^0.16.0","@types/markdown-it":"^12.2.3","@types/markdown-it-link-attributes":"^3.0.1","@types/node":"^18.14.6","@vitejs/plugin-vue":"^4.0.0",autoprefixer:"^10.4.13",axios:"^1.3.4","crypto-js":"^4.1.1",eslint:"^8.35.0",husky:"^8.0.3",less:"^4.1.3","lint-staged":"^13.1.2","markdown-it-link-attributes":"^4.0.1","npm-run-all":"^4.1.5",postcss:"^8.4.21",rimraf:"^4.2.0",tailwindcss:"^3.2.7",typescript:"~4.9.5",vite:"^4.2.0","vite-plugin-pwa":"^0.14.4","vue-tsc":"^1.2.0"},Nn={name:In,version:Mn,private:!1,description:Vn,author:Dn,keywords:Bn,scripts:Un,dependencies:An,devDependencies:Pn,"lint-staged":{"*.{ts,tsx,vue}":["pnpm lint:fix"]}},Fn={class:"p-4 space-y-4"},En={class:"text-xl font-bold"},Hn=o("div",{class:"p-2 space-y-2 rounded-md bg-neutral-100 dark:bg-neutral-700"},[o("p",null,[M(" 此项目开源于 "),o("a",{class:"text-blue-600 dark:text-blue-500",href:"https://github.com/Chanzhaoyu/chatgpt-web",target:"_blank"}," GitHub "),M(" ，免费且基于 MIT 协议，没有任何形式的付费行为！ ")]),o("p",null," 如果你觉得此项目对你有帮助，请在 GitHub 帮我点个 Star 或者给予一点赞助，谢谢！ ")],-1),jn={key:0},On={key:1},Ln=Z({__name:"About",setup(a){const l=Ne(),k=_(!1),m=_(),h=S(()=>!!l.isChatGPTAPI);async function f(){try{k.value=!0;const{data:b}=await Ft();m.value=b}finally{k.value=!1}}return Pt(()=>{f()}),(b,$)=>(j(),we(s(Nt),{show:k.value},{default:g(()=>{var w,y,z,O,N,F;return[o("div",Fn,[o("h2",En," Version - "+i(s(Nn).version),1),Hn,o("p",null,i(b.$t("setting.api"))+"："+i(((w=m.value)==null?void 0:w.apiModel)??"-"),1),s(h)?(j(),q("p",jn,i(b.$t("setting.monthlyUsage"))+"："+i(((y=m.value)==null?void 0:y.usage)??"-"),1)):xe("",!0),s(h)?xe("",!0):(j(),q("p",On,i(b.$t("setting.reverseProxy"))+"："+i(((z=m.value)==null?void 0:z.reverseProxy)??"-"),1)),o("p",null,i(b.$t("setting.timeout"))+"："+i(((O=m.value)==null?void 0:O.timeoutMs)??"-"),1),o("p",null,i(b.$t("setting.socks"))+"："+i(((N=m.value)==null?void 0:N.socksProxy)??"-"),1),o("p",null,i(b.$t("setting.httpsProxy"))+"："+i(((F=m.value)==null?void 0:F.httpsProxy)??"-"),1)])]}),_:1},8,["show"]))}}),Gn={class:"ml-2"},Yn={class:"min-h-[100px]"},Kn={class:"ml-2"},Wn={class:"min-h-[100px]"},Xn={class:"ml-2"},qn=Z({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(a,{emit:l}){const k=a,m=Ne(),h=S(()=>!!m.isChatGPTAPI),f=_("General"),b=S({get(){return k.visible},set($){l("update:visible",$)}});return($,w)=>(j(),we(s(jt),{show:s(b),"onUpdate:show":w[1]||(w[1]=y=>Ht(b)?b.value=y:null),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"640px"}},{default:g(()=>[o("div",null,[c(s(Et),{value:f.value,"onUpdate:value":w[0]||(w[0]=y=>f.value=y),type:"line",animated:""},{default:g(()=>[c(s(be),{name:"General",tab:"General"},{tab:g(()=>[c(s(L),{class:"text-lg",icon:"ri:file-user-line"}),o("span",Gn,i($.$t("setting.general")),1)]),default:g(()=>[o("div",Yn,[c(mn)])]),_:1}),s(h)?(j(),we(s(be),{key:0,name:"Advanced",tab:"Advanced"},{tab:g(()=>[c(s(L),{class:"text-lg",icon:"ri:equalizer-line"}),o("span",Kn,i($.$t("setting.advanced")),1)]),default:g(()=>[o("div",Wn,[c(Tn)])]),_:1})):xe("",!0),c(s(be),{name:"Config",tab:"Config"},{tab:g(()=>[c(s(L),{class:"text-lg",icon:"ri:list-settings-line"}),o("span",Xn,i($.$t("setting.config")),1)]),default:g(()=>[c(Ln)]),_:1})]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{qn as default};
