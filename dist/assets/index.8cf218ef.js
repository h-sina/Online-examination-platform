import{aL as _,a as P,aV as pe,b4 as ce,ap as me,f as fe,n as t,i as e,K as o,l as Se,E as S,dW as Te,dX as Oe,dY as Me,al as ye,W as Ie,c as Re,b8 as ve,U as be,an as Ae,J as B,o as De,h as Ce}from"./index.66dc6cca.js";import{B as Le,u as Ne}from"./index.08d670d1.js";import{c as E,u as he,a as He}from"./index.1075d2fa.js";/* empty css               */import{m as Be,b as we,H as l,a as Pe,t as Ue,c as xe,r as Fe,g as We}from"./handler.c67c01e1.js";/* empty css               */import"./FullscreenOutlined.72d58049.js";import"./index.da4f95c1.js";import"./useWindowSizeFn.42dc6d89.js";import"./useContentViewHeight.1394d2f2.js";import"./uniqBy.e1e9a821.js";/* empty css               */import"./RedoOutlined.f37638f5.js";import"./lock.66976a83.js";const Ge=E(()=>_(()=>import("./TypePicker.189a8537.js"),["assets/TypePicker.189a8537.js","assets/TypePicker.8770fc04.css","assets/index.66dc6cca.js","assets/index.dbeabbe1.css"])),y=E(()=>_(()=>import("./ThemeColorPicker.00d64067.js"),["assets/ThemeColorPicker.00d64067.js","assets/ThemeColorPicker.8eb61909.css","assets/index.66dc6cca.js","assets/index.dbeabbe1.css","assets/handler.c67c01e1.js"])),ke=E(()=>_(()=>import("./SettingFooter.a81977dd.js"),["assets/SettingFooter.a81977dd.js","assets/SettingFooter.9c0370f9.css","assets/index.66dc6cca.js","assets/index.dbeabbe1.css","assets/RedoOutlined.f37638f5.js"])),i=E(()=>_(()=>import("./SwitchItem.4d189021.js"),["assets/SwitchItem.4d189021.js","assets/SwitchItem.7c9c2e51.css","assets/index.579bd49e.css","assets/index.66dc6cca.js","assets/index.dbeabbe1.css","assets/handler.c67c01e1.js"])),c=E(()=>_(()=>import("./SelectItem.a4d18233.js"),["assets/SelectItem.a4d18233.js","assets/SelectItem.5c079f50.css","assets/index.66dc6cca.js","assets/index.dbeabbe1.css","assets/handler.c67c01e1.js"])),w=E(()=>_(()=>import("./InputNumberItem.f58ce5fc.js"),["assets/InputNumberItem.f58ce5fc.js","assets/InputNumberItem.228b843e.css","assets/index.47f7c782.css","assets/index.66dc6cca.js","assets/index.dbeabbe1.css","assets/handler.c67c01e1.js"])),{t:n}=Re();var Ve=P({name:"SettingDrawer",setup(p,{attrs:r}){const{getContentMode:I,getShowFooter:R,getShowBreadCrumb:v,getShowBreadCrumbIcon:b,getShowLogo:T,getFullContent:O,getColorWeak:A,getGrayMode:U,getLockTime:x,getShowDarkModeToggle:D,getThemeColor:F}=pe(),{getOpenPageLoading:W,getBasicTransition:G,getEnableTransition:C,getOpenNProgress:k}=ce(),{getIsHorizontal:M,getShowMenu:L,getMenuType:N,getTrigger:V,getCollapsedShowTitle:$,getMenuFixed:X,getCollapsed:h,getCanDrag:K,getTopMenuAlign:Q,getAccordion:Y,getMenuWidth:z,getMenuBgColor:J,getIsTopMenu:j,getSplit:m,getIsMixSidebar:a,getCloseMixSidebarOnChange:q,getMixSideTrigger:Z,getMixSideFixed:ee}=me(),{getShowHeader:u,getFixed:te,getHeaderBgColor:ne,getShowSearch:le}=he(),{getShowMultipleTab:f,getShowQuick:ie,getShowRedo:oe,getShowFold:ae}=He(),s=fe(()=>e(L)&&!e(M));function se(){return t(S,null,[t(Ge,{menuTypeList:Be,handler:d=>{we(l.CHANGE_LAYOUT,{mode:d.mode,type:d.type,split:e(M)?!1:void 0})},def:e(N)},null)])}function re(){return t(y,{colorList:Oe,def:e(ne),event:l.HEADER_THEME},null)}function ue(){return t(y,{colorList:Me,def:e(J),event:l.MENU_THEME},null)}function de(){return t(y,{colorList:Te,def:e(F),event:l.CHANGE_THEME_COLOR},null)}function ge(){let d=e(V);const H=We(e(m));return H.some(g=>g.value===d)||(d=ve.FOOTER),t(S,null,[t(i,{title:n("layout.setting.splitMenu"),event:l.MENU_SPLIT,def:e(m),disabled:!e(s)||e(N)!==ye.MIX},null),t(i,{title:n("layout.setting.mixSidebarFixed"),event:l.MENU_FIXED_MIX_SIDEBAR,def:e(ee),disabled:!e(a)},null),t(i,{title:n("layout.setting.closeMixSidebarOnChange"),event:l.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,def:e(q),disabled:!e(a)},null),t(i,{title:n("layout.setting.menuCollapse"),event:l.MENU_COLLAPSED,def:e(h),disabled:!e(s)},null),t(i,{title:n("layout.setting.menuDrag"),event:l.MENU_HAS_DRAG,def:e(K),disabled:!e(s)},null),t(i,{title:n("layout.setting.menuSearch"),event:l.HEADER_SEARCH,def:e(le),disabled:!e(u)},null),t(i,{title:n("layout.setting.menuAccordion"),event:l.MENU_ACCORDION,def:e(Y),disabled:!e(s)},null),t(i,{title:n("layout.setting.collapseMenuDisplayName"),event:l.MENU_COLLAPSED_SHOW_TITLE,def:e($),disabled:!e(s)||!e(h)||e(a)},null),t(i,{title:n("layout.setting.fixedHeader"),event:l.HEADER_FIXED,def:e(te),disabled:!e(u)},null),t(i,{title:n("layout.setting.fixedSideBar"),event:l.MENU_FIXED,def:e(X),disabled:!e(s)||e(a)},null),t(c,{title:n("layout.setting.mixSidebarTrigger"),event:l.MENU_TRIGGER_MIX_SIDEBAR,def:e(Z),options:Pe,disabled:!e(a)},null),t(c,{title:n("layout.setting.topMenuLayout"),event:l.MENU_TOP_ALIGN,def:e(Q),options:Ue,disabled:!e(u)||e(m)||!e(j)&&!e(m)||e(a)},null),t(c,{title:n("layout.setting.menuCollapseButton"),event:l.MENU_TRIGGER,def:d,options:H,disabled:!e(s)||e(a)},null),t(c,{title:n("layout.setting.contentMode"),event:l.CONTENT_MODE,def:e(I),options:xe},null),t(w,{title:n("layout.setting.autoScreenLock"),min:0,event:l.LOCK_TIME,defaultValue:e(x),formatter:g=>parseInt(g)===0?`0(${n("layout.setting.notAutoScreenLock")})`:`${g}${n("layout.setting.minute")}`},null),t(w,{title:n("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:l.MENU_WIDTH,disabled:!e(s),defaultValue:e(z),formatter:g=>`${parseInt(g)}px`},null)])}function _e(){return t(S,null,[t(i,{title:n("layout.setting.breadcrumb"),event:l.SHOW_BREADCRUMB,def:e(v),disabled:!e(u)},null),t(i,{title:n("layout.setting.breadcrumbIcon"),event:l.SHOW_BREADCRUMB_ICON,def:e(b),disabled:!e(u)},null),t(i,{title:n("layout.setting.tabs"),event:l.TABS_SHOW,def:e(f)},null),t(i,{title:n("layout.setting.tabsRedoBtn"),event:l.TABS_SHOW_REDO,def:e(oe),disabled:!e(f)},null),t(i,{title:n("layout.setting.tabsQuickBtn"),event:l.TABS_SHOW_QUICK,def:e(ie),disabled:!e(f)},null),t(i,{title:n("layout.setting.tabsFoldBtn"),event:l.TABS_SHOW_FOLD,def:e(ae),disabled:!e(f)},null),t(i,{title:n("layout.setting.sidebar"),event:l.MENU_SHOW_SIDEBAR,def:e(L),disabled:e(M)},null),t(i,{title:n("layout.setting.header"),event:l.HEADER_SHOW,def:e(u)},null),t(i,{title:"Logo",event:l.SHOW_LOGO,def:e(T),disabled:e(a)},null),t(i,{title:n("layout.setting.footer"),event:l.SHOW_FOOTER,def:e(R)},null),t(i,{title:n("layout.setting.fullContent"),event:l.FULL_CONTENT,def:e(O)},null),t(i,{title:n("layout.setting.grayMode"),event:l.GRAY_MODE,def:e(U)},null),t(i,{title:n("layout.setting.colorWeak"),event:l.COLOR_WEAK,def:e(A)},null)])}function Ee(){return t(S,null,[t(i,{title:n("layout.setting.progress"),event:l.OPEN_PROGRESS,def:e(k)},null),t(i,{title:n("layout.setting.switchLoading"),event:l.OPEN_PAGE_LOADING,def:e(W)},null),t(i,{title:n("layout.setting.switchAnimation"),event:l.OPEN_ROUTE_TRANSITION,def:e(C)},null),t(c,{title:n("layout.setting.animationType"),event:l.ROUTER_TRANSITION,def:e(G),options:Fe,disabled:!e(C)},null)])}return()=>t(Le,Ie(r,{title:n("layout.setting.drawerTitle"),width:330,class:"setting-drawer"}),{default:()=>[e(D)&&t(o,null,{default:()=>n("layout.setting.darkMode")}),e(D)&&t(Se,{class:"mx-auto"},null),t(o,null,{default:()=>n("layout.setting.navMode")}),se(),t(o,null,{default:()=>n("layout.setting.sysTheme")}),de(),t(o,null,{default:()=>n("layout.setting.headerTheme")}),re(),t(o,null,{default:()=>n("layout.setting.sidebarTheme")}),ue(),t(o,null,{default:()=>n("layout.setting.interfaceFunction")}),ge(),t(o,null,{default:()=>n("layout.setting.interfaceDisplay")}),_e(),t(o,null,{default:()=>n("layout.setting.animation")}),Ee(),t(o,null,null),t(ke,null,null)]})}});const $e=P({name:"SettingButton",components:{SettingDrawer:Ve,Icon:Ae},setup(){const[p,{openDrawer:r}]=Ne();return{register:p,openDrawer:r}}});function Xe(p,r,I,R,v,b){const T=B("Icon"),O=B("SettingDrawer");return De(),Ce("div",{onClick:r[0]||(r[0]=A=>p.openDrawer(!0))},[t(T,{icon:"ion:settings-outline"}),t(O,{onRegister:p.register},null,8,["onRegister"])])}var st=be($e,[["render",Xe]]);export{st as default};