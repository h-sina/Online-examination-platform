var be=Object.defineProperty;var x=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var X=(e,n,r)=>n in e?be(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,k=(e,n)=>{for(var r in n||(n={}))Be.call(n,r)&&X(e,r,n[r]);if(x)for(var r of x(n))he.call(n,r)&&X(e,r,n[r]);return e};import{B as Ge,u as We}from"./index.df010333.js";import{aL as A,dJ as v,dK as h,dL as M,ak as f,al as I,dM as K,c as Q,b8 as y,aZ as Y,dN as Z,dO as j,aV as z,dP as Pe,dQ as Fe,dR as me,dS as He,a as J,b4 as we,ap as xe,f as Xe,n as i,i as o,K as a,l as ke,E as U,dT as ve,dU as Ke,dV as Ve,W as $e,U as Qe,an as Ye,J as V,o as Ze,h as je}from"./index.5903aaea.js";/* empty css               */import{c,u as ze,a as Je}from"./index.b9ce84f7.js";const qe=c(()=>A(()=>import("./TypePicker.57baf417.js"),["assets/TypePicker.57baf417.js","assets/TypePicker.8770fc04.css","assets/index.5903aaea.js","assets/index.e94865f0.css"])),G=c(()=>A(()=>import("./ThemeColorPicker.962330b0.js"),["assets/ThemeColorPicker.962330b0.js","assets/ThemeColorPicker.8eb61909.css","assets/index.5f816ca3.css","assets/index.3a3c1369.css","assets/index.a2831ae3.css","assets/index.5903aaea.js","assets/index.e94865f0.css","assets/index.df010333.js","assets/index.5c7227e9.css","assets/index.b9ce84f7.js","assets/index.f894f473.css","assets/FullscreenOutlined.115d63d2.js","assets/index.286b7012.js","assets/index.55076fdd.css","assets/useWindowSizeFn.9bc4a4d0.js","assets/useContentViewHeight.0ad58928.js","assets/uniqBy.03c90016.js","assets/RedoOutlined.4a997f15.js","assets/lock.9ae3883c.js"])),et=c(()=>A(()=>import("./SettingFooter.150b82ae.js"),["assets/SettingFooter.150b82ae.js","assets/SettingFooter.9c0370f9.css","assets/index.5903aaea.js","assets/index.e94865f0.css","assets/RedoOutlined.4a997f15.js"])),_=c(()=>A(()=>import("./SwitchItem.76da5dd9.js"),["assets/SwitchItem.76da5dd9.js","assets/SwitchItem.458f0d56.css","assets/index.579bd49e.css","assets/index.5f816ca3.css","assets/index.3a3c1369.css","assets/index.a2831ae3.css","assets/index.5903aaea.js","assets/index.e94865f0.css","assets/index.df010333.js","assets/index.5c7227e9.css","assets/index.b9ce84f7.js","assets/index.f894f473.css","assets/FullscreenOutlined.115d63d2.js","assets/index.286b7012.js","assets/index.55076fdd.css","assets/useWindowSizeFn.9bc4a4d0.js","assets/useContentViewHeight.0ad58928.js","assets/uniqBy.03c90016.js","assets/RedoOutlined.4a997f15.js","assets/lock.9ae3883c.js"])),N=c(()=>A(()=>import("./SelectItem.bb1ab74d.js"),["assets/SelectItem.bb1ab74d.js","assets/SelectItem.809be52d.css","assets/index.5f816ca3.css","assets/index.3a3c1369.css","assets/index.a2831ae3.css","assets/index.5903aaea.js","assets/index.e94865f0.css","assets/index.df010333.js","assets/index.5c7227e9.css","assets/index.b9ce84f7.js","assets/index.f894f473.css","assets/FullscreenOutlined.115d63d2.js","assets/index.286b7012.js","assets/index.55076fdd.css","assets/useWindowSizeFn.9bc4a4d0.js","assets/useContentViewHeight.0ad58928.js","assets/uniqBy.03c90016.js","assets/RedoOutlined.4a997f15.js","assets/lock.9ae3883c.js"])),$=c(()=>A(()=>import("./InputNumberItem.c01322eb.js"),["assets/InputNumberItem.c01322eb.js","assets/InputNumberItem.228b843e.css","assets/index.47f7c782.css","assets/index.5f816ca3.css","assets/index.3a3c1369.css","assets/index.a2831ae3.css","assets/index.5903aaea.js","assets/index.e94865f0.css","assets/index.df010333.js","assets/index.5c7227e9.css","assets/index.b9ce84f7.js","assets/index.f894f473.css","assets/FullscreenOutlined.115d63d2.js","assets/index.286b7012.js","assets/index.55076fdd.css","assets/useWindowSizeFn.9bc4a4d0.js","assets/useContentViewHeight.0ad58928.js","assets/uniqBy.03c90016.js","assets/RedoOutlined.4a997f15.js","assets/lock.9ae3883c.js"])),{t:l}=Q();var t=(e=>(e[e.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",e[e.CHANGE_THEME_COLOR=1]="CHANGE_THEME_COLOR",e[e.CHANGE_THEME=2]="CHANGE_THEME",e[e.MENU_HAS_DRAG=3]="MENU_HAS_DRAG",e[e.MENU_ACCORDION=4]="MENU_ACCORDION",e[e.MENU_TRIGGER=5]="MENU_TRIGGER",e[e.MENU_TOP_ALIGN=6]="MENU_TOP_ALIGN",e[e.MENU_COLLAPSED=7]="MENU_COLLAPSED",e[e.MENU_COLLAPSED_SHOW_TITLE=8]="MENU_COLLAPSED_SHOW_TITLE",e[e.MENU_WIDTH=9]="MENU_WIDTH",e[e.MENU_SHOW_SIDEBAR=10]="MENU_SHOW_SIDEBAR",e[e.MENU_THEME=11]="MENU_THEME",e[e.MENU_SPLIT=12]="MENU_SPLIT",e[e.MENU_FIXED=13]="MENU_FIXED",e[e.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=14]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",e[e.MENU_TRIGGER_MIX_SIDEBAR=15]="MENU_TRIGGER_MIX_SIDEBAR",e[e.MENU_FIXED_MIX_SIDEBAR=16]="MENU_FIXED_MIX_SIDEBAR",e[e.HEADER_SHOW=17]="HEADER_SHOW",e[e.HEADER_THEME=18]="HEADER_THEME",e[e.HEADER_FIXED=19]="HEADER_FIXED",e[e.HEADER_SEARCH=20]="HEADER_SEARCH",e[e.TABS_SHOW_QUICK=21]="TABS_SHOW_QUICK",e[e.TABS_SHOW_REDO=22]="TABS_SHOW_REDO",e[e.TABS_SHOW=23]="TABS_SHOW",e[e.TABS_SHOW_FOLD=24]="TABS_SHOW_FOLD",e[e.LOCK_TIME=25]="LOCK_TIME",e[e.FULL_CONTENT=26]="FULL_CONTENT",e[e.CONTENT_MODE=27]="CONTENT_MODE",e[e.SHOW_BREADCRUMB=28]="SHOW_BREADCRUMB",e[e.SHOW_BREADCRUMB_ICON=29]="SHOW_BREADCRUMB_ICON",e[e.GRAY_MODE=30]="GRAY_MODE",e[e.COLOR_WEAK=31]="COLOR_WEAK",e[e.SHOW_LOGO=32]="SHOW_LOGO",e[e.SHOW_FOOTER=33]="SHOW_FOOTER",e[e.ROUTER_TRANSITION=34]="ROUTER_TRANSITION",e[e.OPEN_PROGRESS=35]="OPEN_PROGRESS",e[e.OPEN_PAGE_LOADING=36]="OPEN_PAGE_LOADING",e[e.OPEN_ROUTE_TRANSITION=37]="OPEN_ROUTE_TRANSITION",e))(t||{});const tt=[{value:v.FULL,label:l("layout.setting.contentModeFull")},{value:v.FIXED,label:l("layout.setting.contentModeFixed")}],ot=[{value:h.CENTER,label:l("layout.setting.topMenuAlignRight")},{value:h.START,label:l("layout.setting.topMenuAlignLeft")},{value:h.END,label:l("layout.setting.topMenuAlignCenter")}],nt=e=>[{value:y.NONE,label:l("layout.setting.menuTriggerNone")},{value:y.FOOTER,label:l("layout.setting.menuTriggerBottom")},...e?[]:[{value:y.HEADER,label:l("layout.setting.menuTriggerTop")}]],it=[M.ZOOM_FADE,M.FADE,M.ZOOM_OUT,M.FADE_SIDE,M.FADE_BOTTOM,M.FADE_SCALE].map(e=>({label:e,value:e})),st=[{title:l("layout.setting.menuTypeSidebar"),mode:f.INLINE,type:I.SIDEBAR},{title:l("layout.setting.menuTypeMix"),mode:f.INLINE,type:I.MIX},{title:l("layout.setting.menuTypeTopMenu"),mode:f.HORIZONTAL,type:I.TOP_MENU},{title:l("layout.setting.menuTypeMixSidebar"),mode:f.INLINE,type:I.MIX_SIDEBAR}],_t=[{value:K.HOVER,label:l("layout.setting.triggerHover")},{value:K.CLICK,label:l("layout.setting.triggerClick")}];function rt(e,n){const r=Y(),O=lt(e,n);r.setProjectConfig(O),e===t.CHANGE_THEME&&(Z(),j())}function lt(e,n){const r=Y(),{getThemeColor:O,getDarkMode:D}=z();switch(e){case t.CHANGE_LAYOUT:const{mode:C,type:R,split:u}=n;return{menuSetting:k({mode:C,type:R,collapsed:!1,show:!0,hidden:!1},u===void 0?{split:u}:{})};case t.CHANGE_THEME_COLOR:return O.value===n?{}:(He(n),{themeColor:n});case t.CHANGE_THEME:return D.value===n?{}:(me(n),{});case t.MENU_HAS_DRAG:return{menuSetting:{canDrag:n}};case t.MENU_ACCORDION:return{menuSetting:{accordion:n}};case t.MENU_TRIGGER:return{menuSetting:{trigger:n}};case t.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:n}};case t.MENU_COLLAPSED:return{menuSetting:{collapsed:n}};case t.MENU_WIDTH:return{menuSetting:{menuWidth:n}};case t.MENU_SHOW_SIDEBAR:return{menuSetting:{show:n}};case t.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:n}};case t.MENU_THEME:return j(n),{menuSetting:{bgColor:n}};case t.MENU_SPLIT:return{menuSetting:{split:n}};case t.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:n}};case t.MENU_FIXED:return{menuSetting:{fixed:n}};case t.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:n}};case t.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideFixed:n}};case t.OPEN_PAGE_LOADING:return r.setPageLoading(!1),{transitionSetting:{openPageLoading:n}};case t.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:n}};case t.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:n}};case t.OPEN_PROGRESS:return{transitionSetting:{openNProgress:n}};case t.LOCK_TIME:return{lockTime:n};case t.FULL_CONTENT:return{fullContent:n};case t.CONTENT_MODE:return{contentMode:n};case t.SHOW_BREADCRUMB:return{showBreadCrumb:n};case t.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:n};case t.GRAY_MODE:return Fe(n),{grayMode:n};case t.SHOW_FOOTER:return{showFooter:n};case t.COLOR_WEAK:return Pe(n),{colorWeak:n};case t.SHOW_LOGO:return{showLogo:n};case t.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:n}};case t.TABS_SHOW:return{multiTabsSetting:{show:n}};case t.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:n}};case t.TABS_SHOW_FOLD:return{multiTabsSetting:{showFold:n}};case t.HEADER_THEME:return Z(n),{headerSetting:{bgColor:n}};case t.HEADER_SEARCH:return{headerSetting:{showSearch:n}};case t.HEADER_FIXED:return{headerSetting:{fixed:n}};case t.HEADER_SHOW:return{headerSetting:{show:n}};default:return{}}}const{t:s}=Q();var at=J({name:"SettingDrawer",setup(e,{attrs:n}){const{getContentMode:r,getShowFooter:O,getShowBreadCrumb:D,getShowBreadCrumbIcon:C,getShowLogo:R,getFullContent:u,getColorWeak:b,getGrayMode:q,getLockTime:ee,getShowDarkModeToggle:W,getThemeColor:te}=z(),{getOpenPageLoading:oe,getBasicTransition:ne,getEnableTransition:P,getOpenNProgress:ie}=we(),{getIsHorizontal:B,getShowMenu:F,getMenuType:m,getTrigger:se,getCollapsedShowTitle:_e,getMenuFixed:re,getCollapsed:H,getCanDrag:le,getTopMenuAlign:ae,getAccordion:Ee,getMenuWidth:ge,getMenuBgColor:Oe,getIsTopMenu:ue,getSplit:p,getIsMixSidebar:E,getCloseMixSidebarOnChange:Se,getMixSideTrigger:Te,getMixSideFixed:de}=xe(),{getShowHeader:S,getFixed:Me,getHeaderBgColor:Ae,getShowSearch:ce}=ze(),{getShowMultipleTab:L,getShowQuick:Re,getShowRedo:Ne,getShowFold:Ie}=Je(),g=Xe(()=>o(F)&&!o(B));function De(){return i(U,null,[i(qe,{menuTypeList:st,handler:T=>{rt(t.CHANGE_LAYOUT,{mode:T.mode,type:T.type,split:o(B)?!1:void 0})},def:o(m)},null)])}function Ce(){return i(G,{colorList:Ke,def:o(Ae),event:t.HEADER_THEME},null)}function pe(){return i(G,{colorList:Ve,def:o(Oe),event:t.MENU_THEME},null)}function Le(){return i(G,{colorList:ve,def:o(te),event:t.CHANGE_THEME_COLOR},null)}function fe(){let T=o(se);const w=nt(o(p));return w.some(d=>d.value===T)||(T=y.FOOTER),i(U,null,[i(_,{title:s("layout.setting.splitMenu"),event:t.MENU_SPLIT,def:o(p),disabled:!o(g)||o(m)!==I.MIX},null),i(_,{title:s("layout.setting.mixSidebarFixed"),event:t.MENU_FIXED_MIX_SIDEBAR,def:o(de),disabled:!o(E)},null),i(_,{title:s("layout.setting.closeMixSidebarOnChange"),event:t.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,def:o(Se),disabled:!o(E)},null),i(_,{title:s("layout.setting.menuCollapse"),event:t.MENU_COLLAPSED,def:o(H),disabled:!o(g)},null),i(_,{title:s("layout.setting.menuDrag"),event:t.MENU_HAS_DRAG,def:o(le),disabled:!o(g)},null),i(_,{title:s("layout.setting.menuSearch"),event:t.HEADER_SEARCH,def:o(ce),disabled:!o(S)},null),i(_,{title:s("layout.setting.menuAccordion"),event:t.MENU_ACCORDION,def:o(Ee),disabled:!o(g)},null),i(_,{title:s("layout.setting.collapseMenuDisplayName"),event:t.MENU_COLLAPSED_SHOW_TITLE,def:o(_e),disabled:!o(g)||!o(H)||o(E)},null),i(_,{title:s("layout.setting.fixedHeader"),event:t.HEADER_FIXED,def:o(Me),disabled:!o(S)},null),i(_,{title:s("layout.setting.fixedSideBar"),event:t.MENU_FIXED,def:o(re),disabled:!o(g)||o(E)},null),i(N,{title:s("layout.setting.mixSidebarTrigger"),event:t.MENU_TRIGGER_MIX_SIDEBAR,def:o(Te),options:_t,disabled:!o(E)},null),i(N,{title:s("layout.setting.topMenuLayout"),event:t.MENU_TOP_ALIGN,def:o(ae),options:ot,disabled:!o(S)||o(p)||!o(ue)&&!o(p)||o(E)},null),i(N,{title:s("layout.setting.menuCollapseButton"),event:t.MENU_TRIGGER,def:T,options:w,disabled:!o(g)||o(E)},null),i(N,{title:s("layout.setting.contentMode"),event:t.CONTENT_MODE,def:o(r),options:tt},null),i($,{title:s("layout.setting.autoScreenLock"),min:0,event:t.LOCK_TIME,defaultValue:o(ee),formatter:d=>parseInt(d)===0?`0(${s("layout.setting.notAutoScreenLock")})`:`${d}${s("layout.setting.minute")}`},null),i($,{title:s("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:t.MENU_WIDTH,disabled:!o(g),defaultValue:o(ge),formatter:d=>`${parseInt(d)}px`},null)])}function Ue(){return i(U,null,[i(_,{title:s("layout.setting.breadcrumb"),event:t.SHOW_BREADCRUMB,def:o(D),disabled:!o(S)},null),i(_,{title:s("layout.setting.breadcrumbIcon"),event:t.SHOW_BREADCRUMB_ICON,def:o(C),disabled:!o(S)},null),i(_,{title:s("layout.setting.tabs"),event:t.TABS_SHOW,def:o(L)},null),i(_,{title:s("layout.setting.tabsRedoBtn"),event:t.TABS_SHOW_REDO,def:o(Ne),disabled:!o(L)},null),i(_,{title:s("layout.setting.tabsQuickBtn"),event:t.TABS_SHOW_QUICK,def:o(Re),disabled:!o(L)},null),i(_,{title:s("layout.setting.tabsFoldBtn"),event:t.TABS_SHOW_FOLD,def:o(Ie),disabled:!o(L)},null),i(_,{title:s("layout.setting.sidebar"),event:t.MENU_SHOW_SIDEBAR,def:o(F),disabled:o(B)},null),i(_,{title:s("layout.setting.header"),event:t.HEADER_SHOW,def:o(S)},null),i(_,{title:"Logo",event:t.SHOW_LOGO,def:o(R),disabled:o(E)},null),i(_,{title:s("layout.setting.footer"),event:t.SHOW_FOOTER,def:o(O)},null),i(_,{title:s("layout.setting.fullContent"),event:t.FULL_CONTENT,def:o(u)},null),i(_,{title:s("layout.setting.grayMode"),event:t.GRAY_MODE,def:o(q)},null),i(_,{title:s("layout.setting.colorWeak"),event:t.COLOR_WEAK,def:o(b)},null)])}function ye(){return i(U,null,[i(_,{title:s("layout.setting.progress"),event:t.OPEN_PROGRESS,def:o(ie)},null),i(_,{title:s("layout.setting.switchLoading"),event:t.OPEN_PAGE_LOADING,def:o(oe)},null),i(_,{title:s("layout.setting.switchAnimation"),event:t.OPEN_ROUTE_TRANSITION,def:o(P)},null),i(N,{title:s("layout.setting.animationType"),event:t.ROUTER_TRANSITION,def:o(ne),options:it,disabled:!o(P)},null)])}return()=>i(Ge,$e(n,{title:s("layout.setting.drawerTitle"),width:330,class:"setting-drawer"}),{default:()=>[o(W)&&i(a,null,{default:()=>s("layout.setting.darkMode")}),o(W)&&i(ke,{class:"mx-auto"},null),i(a,null,{default:()=>s("layout.setting.navMode")}),De(),i(a,null,{default:()=>s("layout.setting.sysTheme")}),Le(),i(a,null,{default:()=>s("layout.setting.headerTheme")}),Ce(),i(a,null,{default:()=>s("layout.setting.sidebarTheme")}),pe(),i(a,null,{default:()=>s("layout.setting.interfaceFunction")}),fe(),i(a,null,{default:()=>s("layout.setting.interfaceDisplay")}),Ue(),i(a,null,{default:()=>s("layout.setting.animation")}),ye(),i(a,null,null),i(et,null,null)]})}});const Et=J({name:"SettingButton",components:{SettingDrawer:at,Icon:Ye},setup(){const[e,{openDrawer:n}]=We();return{register:e,openDrawer:n}}});function gt(e,n,r,O,D,C){const R=V("Icon"),u=V("SettingDrawer");return Ze(),je("div",{onClick:n[0]||(n[0]=b=>e.openDrawer(!0))},[i(R,{icon:"ion:settings-outline"}),i(u,{onRegister:e.register},null,8,["onRegister"])])}var Ot=Qe(Et,[["render",gt]]),ct=Object.freeze(Object.defineProperty({__proto__:null,default:Ot},Symbol.toStringTag,{value:"Module"}));export{rt as b,ct as i};
