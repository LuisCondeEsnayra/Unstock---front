"use strict";(self.webpackChunkunstock_front=self.webpackChunkunstock_front||[]).push([[9813],{9813:(e,a,t)=>{t.r(a),t.d(a,{default:()=>T});var n=t(5043),s=t(4101),r=t(4227),l=t(861),c=t(2723),i=t(6105),o=t(5173),d=t.n(o),m=t(5196),b=(0,n.createContext)({}),h=(0,n.forwardRef)((function(e,a){var t=e.children,s=e.activeItemKey,r=e.className,l=e.onChange,c=(0,n.useId)(),i=(0,n.useState)(s),o=i[0],d=i[1];return(0,n.useEffect)((function(){o&&l&&l(o)}),[o]),n.createElement(b.Provider,{value:{_activeItemKey:o,setActiveItemKey:d,id:c}},n.createElement("div",{className:(0,m.A)("tabs",r),ref:a},t))}));h.propTypes={activeItemKey:d().oneOfType([d().number,d().string]).isRequired,children:d().node,className:d().string,onChange:d().func},h.displayName="CTabs";var p=t(2378),y=t(4462),x=t(4815),f=(0,n.forwardRef)((function(e,a){var t,s=e.children,r=e.className,l=e.layout,c=e.variant,i=(0,p.Tt)(e,["children","className","layout","variant"]),o=(0,n.useRef)(null),d=(0,y.E2)(a,o);return n.createElement("div",(0,p.Cl)({className:(0,m.A)("nav",(t={},t["nav-".concat(l)]=l,t["nav-".concat(c)]=c,t),r),role:"tablist",onKeyDown:function(e){if(null!==o.current&&("ArrowDown"===e.key||"ArrowUp"===e.key||"ArrowLeft"===e.key||"ArrowRight"===e.key||"Home"===e.key||"End"===e.key)){e.preventDefault();var a=e.target,t=Array.from(o.current.querySelectorAll(".nav-link:not(.disabled):not(:disabled)")),n=void 0;(n="Home"===e.key||"End"===e.key?"End"===e.key?t.at(-1):t[0]:(0,x.A)(t,a,"ArrowDown"===e.key||"ArrowRight"===e.key,!0))&&n.focus({preventScroll:!0})}},ref:d},i),s)}));f.propTypes={children:d().node,className:d().string,layout:d().oneOf(["fill","justified"]),variant:d().oneOf(["pills","tabs","underline","underline-border"])},f.displayName="CTabList";var u=(0,n.forwardRef)((function(e,a){var t=e.children,s=e.className,r=e.itemKey,l=(0,p.Tt)(e,["children","className","itemKey"]),c=(0,n.useContext)(b),i=c._activeItemKey,o=c.setActiveItemKey,d=c.id,h=function(){return r===i};return n.createElement("button",(0,p.Cl)({className:(0,m.A)("nav-link",{active:h()},s),id:"".concat(d).concat(r,"-tab"),onClick:function(){return o(r)},onFocus:function(){return o(r)},role:"tab",tabIndex:h()?0:-1,type:"button","aria-controls":"".concat(d).concat(r,"-tab-pane"),"aria-selected":h(),ref:a},l),t)}));u.propTypes={children:d().node,className:d().string,disabled:d().bool,itemKey:d().oneOfType([d().number,d().string]).isRequired},u.displayName="CTab";var j=t(9689),N=t(8607),v=t(413),K=(0,n.forwardRef)((function(e,a){var t=e.children,s=e.className,r=e.itemKey,l=e.onHide,c=e.onShow,i=e.transition,o=void 0===i||i,d=e.visible,h=(0,p.Tt)(e,["children","className","itemKey","onHide","onShow","transition","visible"]),x=(0,n.useContext)(b),f=x._activeItemKey,u=x.id,j=(0,n.useRef)(),K=(0,y.E2)(a,j),g=(0,n.useState)(d||f===r),C=g[0],T=g[1];return(0,n.useEffect)((function(){void 0!==d&&T(d)}),[d]),(0,n.useEffect)((function(){T(f===r)}),[f]),n.createElement(v.Ay,{in:C,nodeRef:j,onEnter:c,onExit:l,timeout:j.current?(0,N.A)(j.current):0},(function(e){return n.createElement("div",(0,p.Cl)({className:(0,m.A)("tab-pane",{active:C,fade:o,show:"entered"===e},s),id:"".concat(u).concat(r,"-tab-pane"),role:"tabpanel","aria-labelledby":"".concat(u).concat(r,"-tab"),tabIndex:0,ref:K},h),t)}))}));K.propTypes={children:d().node,className:d().string,itemKey:d().oneOfType([d().number,d().string]).isRequired,onHide:d().func,onShow:d().func,transition:d().bool,visible:d().bool},K.displayName="CTabPanel";var g=t(7900),C=t(579);const T=()=>(0,C.jsxs)(s.s,{children:[(0,C.jsx)(r.U,{xs:12,children:(0,C.jsxs)(l.E,{className:"mb-4",children:[(0,C.jsx)(c.V,{children:(0,C.jsx)("strong",{children:"React Tabs"})}),(0,C.jsxs)(i.W,{children:[(0,C.jsxs)("p",{className:"text-body-secondary small",children:["The basic React tabs example uses the ",(0,C.jsx)("code",{children:'variant="tabs"'})," props to generate a tabbed interface."]}),(0,C.jsx)(g.Eb,{href:"components/tabs/#example",children:(0,C.jsxs)(h,{activeItemKey:"profile",children:[(0,C.jsxs)(f,{variant:"tabs",children:[(0,C.jsx)(u,{itemKey:"home",children:"Home"}),(0,C.jsx)(u,{itemKey:"profile",children:"Profile"}),(0,C.jsx)(u,{itemKey:"contact",children:"Contact"}),(0,C.jsx)(u,{disabled:!0,itemKey:"disabled",children:"Disabled"})]}),(0,C.jsxs)(j.e,{children:[(0,C.jsx)(K,{className:"p-3",itemKey:"home",children:"Home tab content"}),(0,C.jsx)(K,{className:"p-3",itemKey:"profile",children:"Profile tab content"}),(0,C.jsx)(K,{className:"p-3",itemKey:"contact",children:"Contact tab content"}),(0,C.jsx)(K,{className:"p-3",itemKey:"disabled",children:"Disabled tab content"})]})]})})]})]})}),(0,C.jsx)(r.U,{xs:12,children:(0,C.jsxs)(l.E,{className:"mb-4",children:[(0,C.jsxs)(c.V,{children:[(0,C.jsx)("strong",{children:"React Tabs"})," ",(0,C.jsx)("small",{children:"Unstyled"})]}),(0,C.jsxs)(i.W,{children:[(0,C.jsxs)("p",{className:"text-body-secondary small",children:["If you don\u2019t provide the ",(0,C.jsx)("code",{children:"variant"})," prop, the component will default to a basic style."]}),(0,C.jsx)(g.Eb,{href:"components/tabs/#unstyled",children:(0,C.jsxs)(h,{activeItemKey:"profile",children:[(0,C.jsxs)(f,{children:[(0,C.jsx)(u,{itemKey:"home",children:"Home"}),(0,C.jsx)(u,{itemKey:"profile",children:"Profile"}),(0,C.jsx)(u,{itemKey:"contact",children:"Contact"}),(0,C.jsx)(u,{disabled:!0,itemKey:"disabled",children:"Disabled"})]}),(0,C.jsxs)(j.e,{children:[(0,C.jsx)(K,{className:"p-3",itemKey:"home",children:"Home tab content"}),(0,C.jsx)(K,{className:"p-3",itemKey:"profile",children:"Profile tab content"}),(0,C.jsx)(K,{className:"p-3",itemKey:"contact",children:"Contact tab content"}),(0,C.jsx)(K,{className:"p-3",itemKey:"disabled",children:"Disabled tab content"})]})]})})]})]})}),(0,C.jsx)(r.U,{xs:12,children:(0,C.jsxs)(l.E,{className:"mb-4",children:[(0,C.jsxs)(c.V,{children:[(0,C.jsx)("strong",{children:"React Tabs"})," ",(0,C.jsx)("small",{children:"Pills"})]}),(0,C.jsxs)(i.W,{children:[(0,C.jsxs)("p",{className:"text-body-secondary small",children:["Take that same code, but use ",(0,C.jsx)("code",{children:'variant="pills"'})," instead:"]}),(0,C.jsx)(g.Eb,{href:"components/tabs/#unstyled",children:(0,C.jsxs)(h,{activeItemKey:2,children:[(0,C.jsxs)(f,{variant:"pills",children:[(0,C.jsx)(u,{"aria-controls":"home-tab-pane",itemKey:1,children:"Home"}),(0,C.jsx)(u,{"aria-controls":"profile-tab-pane",itemKey:2,children:"Profile"}),(0,C.jsx)(u,{"aria-controls":"contact-tab-pane",itemKey:3,children:"Contact"}),(0,C.jsx)(u,{"aria-controls":"disabled-tab-pane",disabled:!0,itemKey:4,children:"Disabled"})]}),(0,C.jsxs)(j.e,{children:[(0,C.jsx)(K,{className:"p-3","aria-labelledby":"home-tab-pane",itemKey:1,children:"Home tab content"}),(0,C.jsx)(K,{className:"p-3","aria-labelledby":"profile-tab-pane",itemKey:2,children:"Profile tab content"}),(0,C.jsx)(K,{className:"p-3","aria-labelledby":"contact-tab-pane",itemKey:3,children:"Contact tab content"}),(0,C.jsx)(K,{className:"p-3","aria-labelledby":"disabled-tab-pane",itemKey:4,children:"Disabled tab content"})]})]})})]})]})}),(0,C.jsx)(r.U,{xs:12,children:(0,C.jsxs)(l.E,{className:"mb-4",children:[(0,C.jsxs)(c.V,{children:[(0,C.jsx)("strong",{children:"React Tabs"})," ",(0,C.jsx)("small",{children:"Underline"})]}),(0,C.jsxs)(i.W,{children:[(0,C.jsxs)("p",{className:"text-body-secondary small",children:["Take that same code, but use ",(0,C.jsx)("code",{children:'variant="underline"'})," instead:"]}),(0,C.jsx)(g.Eb,{href:"components/tabs/#unstyled",children:(0,C.jsxs)(h,{activeItemKey:2,children:[(0,C.jsxs)(f,{variant:"underline",children:[(0,C.jsx)(u,{"aria-controls":"home-tab-pane",itemKey:1,children:"Home"}),(0,C.jsx)(u,{"aria-controls":"profile-tab-pane",itemKey:2,children:"Profile"}),(0,C.jsx)(u,{"aria-controls":"contact-tab-pane",itemKey:3,children:"Contact"}),(0,C.jsx)(u,{"aria-controls":"disabled-tab-pane",disabled:!0,itemKey:4,children:"Disabled"})]}),(0,C.jsxs)(j.e,{children:[(0,C.jsx)(K,{className:"py-3","aria-labelledby":"home-tab-pane",itemKey:1,children:"Home tab content"}),(0,C.jsx)(K,{className:"py-3","aria-labelledby":"profile-tab-pane",itemKey:2,children:"Profile tab content"}),(0,C.jsx)(K,{className:"py-3","aria-labelledby":"contact-tab-pane",itemKey:3,children:"Contact tab content"}),(0,C.jsx)(K,{className:"py-3","aria-labelledby":"disabled-tab-pane",itemKey:4,children:"Disabled tab content"})]})]})})]})]})}),(0,C.jsx)(r.U,{xs:12,children:(0,C.jsxs)(l.E,{className:"mb-4",children:[(0,C.jsxs)(c.V,{children:[(0,C.jsx)("strong",{children:"React Tabs"})," ",(0,C.jsx)("small",{children:"Underline border"})]}),(0,C.jsxs)(i.W,{children:[(0,C.jsxs)("p",{className:"text-body-secondary small",children:["Take that same code, but use ",(0,C.jsx)("code",{children:'variant="underline-border"'})," instead:"]}),(0,C.jsx)(g.Eb,{href:"components/tabs/#unstyled",children:(0,C.jsxs)(h,{activeItemKey:2,children:[(0,C.jsxs)(f,{variant:"underline-border",children:[(0,C.jsx)(u,{"aria-controls":"home-tab-pane",itemKey:1,children:"Home"}),(0,C.jsx)(u,{"aria-controls":"profile-tab-pane",itemKey:2,children:"Profile"}),(0,C.jsx)(u,{"aria-controls":"contact-tab-pane",itemKey:3,children:"Contact"}),(0,C.jsx)(u,{"aria-controls":"disabled-tab-pane",disabled:!0,itemKey:4,children:"Disabled"})]}),(0,C.jsxs)(j.e,{children:[(0,C.jsx)(K,{className:"py-3","aria-labelledby":"home-tab-pane",itemKey:1,children:"Home tab content"}),(0,C.jsx)(K,{className:"py-3","aria-labelledby":"profile-tab-pane",itemKey:2,children:"Profile tab content"}),(0,C.jsx)(K,{className:"py-3","aria-labelledby":"contact-tab-pane",itemKey:3,children:"Contact tab content"}),(0,C.jsx)(K,{className:"py-3","aria-labelledby":"disabled-tab-pane",itemKey:4,children:"Disabled tab content"})]})]})})]})]})})]})},861:(e,a,t)=>{t.d(a,{E:()=>o});var n=t(2378),s=t(5043),r=t(5173),l=t.n(r),c=t(5196),i=t(5232),o=(0,s.forwardRef)((function(e,a){var t,r=e.children,l=e.className,i=e.color,o=e.textBgColor,d=e.textColor,m=(0,n.Tt)(e,["children","className","color","textBgColor","textColor"]);return s.createElement("div",(0,n.Cl)({className:(0,c.A)("card",(t={},t["bg-".concat(i)]=i,t["text-".concat(d)]=d,t["text-bg-".concat(o)]=o,t),l)},m,{ref:a}),r)}));o.propTypes={children:l().node,className:l().string,color:i.TX,textBgColor:i.TX,textColor:l().string},o.displayName="CCard"},6105:(e,a,t)=>{t.d(a,{W:()=>i});var n=t(2378),s=t(5043),r=t(5173),l=t.n(r),c=t(5196),i=(0,s.forwardRef)((function(e,a){var t=e.children,r=e.className,l=(0,n.Tt)(e,["children","className"]);return s.createElement("div",(0,n.Cl)({className:(0,c.A)("card-body",r)},l,{ref:a}),t)}));i.propTypes={children:l().node,className:l().string},i.displayName="CCardBody"},2723:(e,a,t)=>{t.d(a,{V:()=>i});var n=t(2378),s=t(5043),r=t(5173),l=t.n(r),c=t(5196),i=(0,s.forwardRef)((function(e,a){var t=e.children,r=e.as,l=void 0===r?"div":r,i=e.className,o=(0,n.Tt)(e,["children","as","className"]);return s.createElement(l,(0,n.Cl)({className:(0,c.A)("card-header",i)},o,{ref:a}),t)}));i.propTypes={as:l().elementType,children:l().node,className:l().string},i.displayName="CCardHeader"},4227:(e,a,t)=>{t.d(a,{U:()=>o});var n=t(2378),s=t(5043),r=t(5173),l=t.n(r),c=t(5196),i=["xxl","xl","lg","md","sm","xs"],o=(0,s.forwardRef)((function(e,a){var t=e.children,r=e.className,l=(0,n.Tt)(e,["children","className"]),o=[];return i.forEach((function(e){var a=l[e];delete l[e];var t="xs"===e?"":"-".concat(e);"number"!==typeof a&&"string"!==typeof a||o.push("col".concat(t,"-").concat(a)),"boolean"===typeof a&&o.push("col".concat(t)),a&&"object"===typeof a&&("number"!==typeof a.span&&"string"!==typeof a.span||o.push("col".concat(t,"-").concat(a.span)),"boolean"===typeof a.span&&o.push("col".concat(t)),"number"!==typeof a.order&&"string"!==typeof a.order||o.push("order".concat(t,"-").concat(a.order)),"number"===typeof a.offset&&o.push("offset".concat(t,"-").concat(a.offset)))})),s.createElement("div",(0,n.Cl)({className:(0,c.A)(o.length>0?o:"col",r)},l,{ref:a}),t)})),d=l().oneOfType([l().bool,l().number,l().string,l().oneOf(["auto"])]),m=l().oneOfType([d,l().shape({span:d,offset:l().oneOfType([l().number,l().string]),order:l().oneOfType([l().oneOf(["first","last"]),l().number,l().string])})]);o.propTypes={children:l().node,className:l().string,xs:m,sm:m,md:m,lg:m,xl:m,xxl:m},o.displayName="CCol"},4101:(e,a,t)=>{t.d(a,{s:()=>o});var n=t(2378),s=t(5043),r=t(5173),l=t.n(r),c=t(5196),i=["xxl","xl","lg","md","sm","xs"],o=(0,s.forwardRef)((function(e,a){var t=e.children,r=e.className,l=(0,n.Tt)(e,["children","className"]),o=[];return i.forEach((function(e){var a=l[e];delete l[e];var t="xs"===e?"":"-".concat(e);"object"===typeof a&&(a.cols&&o.push("row-cols".concat(t,"-").concat(a.cols)),"number"===typeof a.gutter&&o.push("g".concat(t,"-").concat(a.gutter)),"number"===typeof a.gutterX&&o.push("gx".concat(t,"-").concat(a.gutterX)),"number"===typeof a.gutterY&&o.push("gy".concat(t,"-").concat(a.gutterY)))})),s.createElement("div",(0,n.Cl)({className:(0,c.A)("row",o,r)},l,{ref:a}),t)})),d=l().shape({cols:l().oneOfType([l().oneOf(["auto"]),l().number,l().string]),gutter:l().oneOfType([l().string,l().number]),gutterX:l().oneOfType([l().string,l().number]),gutterY:l().oneOfType([l().string,l().number])});o.propTypes={children:l().node,className:l().string,xs:d,sm:d,md:d,lg:d,xl:d,xxl:d},o.displayName="CRow"},8607:(e,a,t)=>{t.d(a,{A:()=>n});var n=function(e){if(!e)return 0;var a=window.getComputedStyle(e),t=a.transitionDuration,n=a.transitionDelay,s=Number.parseFloat(t),r=Number.parseFloat(n);return s||r?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0}}}]);
//# sourceMappingURL=9813.9021dbab.chunk.js.map