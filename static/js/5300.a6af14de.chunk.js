"use strict";(self.webpackChunkunstock_front=self.webpackChunkunstock_front||[]).push([[5300],{4626:(e,s,t)=>{t.r(s),t.d(s,{default:()=>w});var n=t(5043),r=t(4101),l=t(4227),c=t(861),a=t(2723),o=t(6105),i=t(2378),d=t(5173),h=t.n(d),m=t(5196),u=t(7823),x=t(4462),f=(0,n.createContext)({}),p=(0,n.forwardRef)((function(e,s){var t=e.children,r=e.activeIndex,l=void 0===r?0:r,c=e.className,a=e.controls,o=e.dark,d=e.indicators,h=e.interval,p=void 0===h?5e3:h,v=e.onSlid,j=e.onSlide,g=e.pause,b=void 0===g?"hover":g,C=e.touch,E=void 0===C||C,y=e.transition,N=e.wrap,w=void 0===N||N,k=(0,i.Tt)(e,["children","activeIndex","className","controls","dark","indicators","interval","onSlid","onSlide","pause","touch","transition","wrap"]),F=(0,n.useRef)(null),T=(0,x.E2)(s,F),D=(0,n.useRef)({}).current,A=(0,n.useState)(l),S=A[0],B=A[1],R=(0,n.useState)(!1),O=R[0],W=R[1],U=(0,n.useState)(),V=U[0],_=U[1],I=(0,n.useState)("next"),L=I[0],X=I[1],H=(0,n.useState)(0),z=H[0],Y=H[1],M=(0,n.useState)(null),P=M[0],q=M[1],G=(0,n.useState)(),J=G[0],K=G[1];(0,n.useEffect)((function(){Y(n.Children.toArray(t).length)})),(0,n.useEffect)((function(){J&&Q()}),[J]),(0,n.useEffect)((function(){!O&&Q(),!O&&v&&v(S,L),O&&j&&j(S,L)}),[O]),(0,n.useEffect)((function(){return window.addEventListener("scroll",se),function(){window.removeEventListener("scroll",se)}}));var Q=function(){Z(),(w||S!==z-1)&&"number"===typeof p&&(D.timeout=setTimeout((function(){return $()}),"number"===typeof V?V:p))},Z=function(){return b&&D.timeout&&clearTimeout(D.timeout)},$=function(){if(!document.hidden&&F.current&&(0,u.A)(F.current)){if(O)return;ee("next")}},ee=function(e){O||(X(e),B("next"===e?S===z-1?0:S+1:0===S?z-1:S-1))},se=function(){!document.hidden&&F.current&&(0,u.A)(F.current)?K(!0):K(!1)};return n.createElement("div",(0,i.Cl)({className:(0,m.A)("carousel slide",{"carousel-fade":"crossfade"===y},c)},o&&{"data-coreui-theme":"dark"},{onMouseEnter:Z,onMouseLeave:Q},E&&{onTouchStart:function(e){var s=e.touches[0].clientX;q(s)},onTouchMove:function(e){if(null!==P){var s=P-e.touches[0].clientX;s>5&&ee("next"),s<-5&&ee("prev"),q(null)}}},k,{ref:T}),n.createElement(f.Provider,{value:{setAnimating:W,setCustomInterval:_}},d&&n.createElement("div",{className:"carousel-indicators"},Array.from({length:z},(function(e,s){return s})).map((function(e){return n.createElement("button",(0,i.Cl)({key:"indicator".concat(e),onClick:function(){!O&&function(e){if(S!==e)S<e?(X("next"),B(e)):S>e&&(X("prev"),B(e))}(e)},className:(0,m.A)({active:S===e}),"data-coreui-target":""},S===e&&{"aria-current":!0},{"aria-label":"Slide ".concat(e+1)}))}))),n.createElement("div",{className:"carousel-inner"},n.Children.map(t,(function(e,s){if(n.isValidElement(e))return n.cloneElement(e,{active:S===s,direction:L,key:s})}))),a&&n.createElement(n.Fragment,null,n.createElement("button",{className:"carousel-control-prev",onClick:function(){return ee("prev")}},n.createElement("span",{className:"carousel-control-prev-icon","aria-label":"prev"})),n.createElement("button",{className:"carousel-control-next",onClick:function(){return ee("next")}},n.createElement("span",{className:"carousel-control-next-icon","aria-label":"next"})))))}));p.propTypes={activeIndex:h().number,children:h().node,className:h().string,controls:h().bool,dark:h().bool,indicators:h().bool,interval:h().oneOfType([h().bool,h().number]),onSlid:h().func,onSlide:h().func,pause:h().oneOf([!1,"hover"]),touch:h().bool,transition:h().oneOf(["slide","crossfade"]),wrap:h().bool},p.displayName="CCarousel";var v=(0,n.forwardRef)((function(e,s){var t=e.children,r=e.className,l=e.active,c=e.direction,a=e.interval,o=void 0!==a&&a,d=(0,i.Tt)(e,["children","className","active","direction","interval"]),h=(0,n.useContext)(f),u=h.setAnimating,p=h.setCustomInterval,v=(0,n.useRef)(null),j=(0,x.E2)(s,v),g=(0,n.useRef)(),b=(0,n.useState)(),C=b[0],E=b[1],y=(0,n.useState)(),N=y[0],w=y[1],k=(0,n.useState)(l&&"active"),F=k[0],T=k[1],D=(0,n.useState)(0),A=D[0],S=D[1];return(0,n.useEffect)((function(){l&&(p(o),0!==A&&w("carousel-item-".concat(c))),g.current&&!l&&T("active"),(l||g.current)&&setTimeout((function(){var e;0!==A&&(null===(e=v.current)||void 0===e||e.offsetHeight,E("carousel-item-".concat("next"===c?"start":"end")))}),0),g.current=l,0===A&&S(A+1)}),[l]),(0,n.useEffect)((function(){var e,s;return null===(e=v.current)||void 0===e||e.addEventListener("transitionstart",(function(){l&&u(!0)})),null===(s=v.current)||void 0===s||s.addEventListener("transitionend",(function(){l&&u(!1),E(""),w(""),l&&T("active"),l||T("")})),function(){var e,s;null===(e=v.current)||void 0===e||e.removeEventListener("transitionstart",(function(){l&&u(!0)})),null===(s=v.current)||void 0===s||s.removeEventListener("transitionend",(function(){l&&u(!1),E(""),w(""),l&&T("active"),l||T("")}))}})),n.createElement("div",(0,i.Cl)({className:(0,m.A)("carousel-item",F,C,N,r),ref:j},d),t)}));v.propTypes={active:h().bool,children:h().node,className:h().string,direction:h().string,interval:h().oneOfType([h().bool,h().number])},v.displayName="CCarouselItem";var j=(0,n.forwardRef)((function(e,s){var t=e.className,r=(0,i.Tt)(e,["className"]);return n.createElement("div",(0,i.Cl)({className:(0,m.A)("carousel-caption",t)},r,{ref:s}))}));j.propTypes={className:h().string},j.displayName="CCarouselCaption";var g=t(7900);const b=t.p+"static/media/angular.2f3764e2ec8b0b47ebe6.jpg";var C=t(1218);const E=t.p+"static/media/vue.8a74d93fde1a02c24730.jpg";var y=t(579);const N=["data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23AAA%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23F5F5F5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E","data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23BBB%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23EEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E","data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23E5E5E5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"],w=()=>(0,y.jsxs)(r.s,{children:[(0,y.jsx)(l.U,{xs:12,children:(0,y.jsxs)(c.E,{className:"mb-4",children:[(0,y.jsxs)(a.V,{children:[(0,y.jsx)("strong",{children:"Carousel"})," ",(0,y.jsx)("small",{children:"Slide only"})]}),(0,y.jsxs)(o.W,{children:[(0,y.jsx)("p",{className:"text-body-secondary small",children:"Here\u2019s a carousel with slides"}),(0,y.jsx)(g.Eb,{href:"components/carousel",children:(0,y.jsxs)(p,{children:[(0,y.jsx)(v,{children:(0,y.jsx)("img",{className:"d-block w-100",src:C,alt:"slide 1"})}),(0,y.jsx)(v,{children:(0,y.jsx)("img",{className:"d-block w-100",src:b,alt:"slide 2"})}),(0,y.jsx)(v,{children:(0,y.jsx)("img",{className:"d-block w-100",src:E,alt:"slide 3"})})]})})]})]})}),(0,y.jsx)(l.U,{xs:12,children:(0,y.jsxs)(c.E,{className:"mb-4",children:[(0,y.jsxs)(a.V,{children:[(0,y.jsx)("strong",{children:"Carousel"})," ",(0,y.jsx)("small",{children:"With controls"})]}),(0,y.jsxs)(o.W,{children:[(0,y.jsxs)("p",{className:"text-body-secondary small",children:["Adding in the previous and next controls by ",(0,y.jsx)("code",{children:"controls"})," property."]}),(0,y.jsx)(g.Eb,{href:"components/carousel/#with-controls",children:(0,y.jsxs)(p,{controls:!0,children:[(0,y.jsx)(v,{children:(0,y.jsx)("img",{className:"d-block w-100",src:C,alt:"slide 1"})}),(0,y.jsx)(v,{children:(0,y.jsx)("img",{className:"d-block w-100",src:b,alt:"slide 2"})}),(0,y.jsx)(v,{children:(0,y.jsx)("img",{className:"d-block w-100",src:E,alt:"slide 3"})})]})})]})]})}),(0,y.jsx)(l.U,{xs:12,children:(0,y.jsxs)(c.E,{className:"mb-4",children:[(0,y.jsxs)(a.V,{children:[(0,y.jsx)("strong",{children:"Carousel"})," ",(0,y.jsx)("small",{children:"With indicators"})]}),(0,y.jsxs)(o.W,{children:[(0,y.jsx)("p",{className:"text-body-secondary small",children:"You can attach the indicators to the carousel, lengthwise the controls, too."}),(0,y.jsx)(g.Eb,{href:"components/carousel/#with-indicators",children:(0,y.jsxs)(p,{controls:!0,indicators:!0,children:[(0,y.jsx)(v,{children:(0,y.jsx)("img",{className:"d-block w-100",src:C,alt:"slide 1"})}),(0,y.jsx)(v,{children:(0,y.jsx)("img",{className:"d-block w-100",src:b,alt:"slide 2"})}),(0,y.jsx)(v,{children:(0,y.jsx)("img",{className:"d-block w-100",src:E,alt:"slide 3"})})]})})]})]})}),(0,y.jsx)(l.U,{xs:12,children:(0,y.jsxs)(c.E,{className:"mb-4",children:[(0,y.jsxs)(a.V,{children:[(0,y.jsx)("strong",{children:"Carousel"})," ",(0,y.jsx)("small",{children:"With captions"})]}),(0,y.jsxs)(o.W,{children:[(0,y.jsxs)("p",{className:"text-body-secondary small",children:["You can add captions to slides with the ",(0,y.jsx)("code",{children:"<CCarouselCaption>"})," element within any ",(0,y.jsx)("code",{children:"<CCarouselItem>"}),". They can be immediately hidden on smaller viewports, as shown below, with optional"," ",(0,y.jsx)("a",{href:"https://coreui.io//utilities/display",children:"display utilities"}),". We hide them with ",(0,y.jsx)("code",{children:".d-none"})," and draw them back on medium-sized devices with"," ",(0,y.jsx)("code",{children:".d-md-block"}),"."]}),(0,y.jsx)(g.Eb,{href:"components/carousel/#with-captions",children:(0,y.jsxs)(p,{controls:!0,indicators:!0,children:[(0,y.jsxs)(v,{children:[(0,y.jsx)("img",{className:"d-block w-100",src:C,alt:"slide 1"}),(0,y.jsxs)(j,{className:"d-none d-md-block",children:[(0,y.jsx)("h5",{children:"First slide label"}),(0,y.jsx)("p",{children:"Some representative placeholder content for the first slide."})]})]}),(0,y.jsxs)(v,{children:[(0,y.jsx)("img",{className:"d-block w-100",src:b,alt:"slide 2"}),(0,y.jsxs)(j,{className:"d-none d-md-block",children:[(0,y.jsx)("h5",{children:"Second slide label"}),(0,y.jsx)("p",{children:"Some representative placeholder content for the first slide."})]})]}),(0,y.jsxs)(v,{children:[(0,y.jsx)("img",{className:"d-block w-100",src:E,alt:"slide 3"}),(0,y.jsxs)(j,{className:"d-none d-md-block",children:[(0,y.jsx)("h5",{children:"Third slide label"}),(0,y.jsx)("p",{children:"Some representative placeholder content for the first slide."})]})]})]})})]})]})}),(0,y.jsx)(l.U,{xs:12,children:(0,y.jsxs)(c.E,{className:"mb-4",children:[(0,y.jsxs)(a.V,{children:[(0,y.jsx)("strong",{children:"Carousel"})," ",(0,y.jsx)("small",{children:"Crossfade"})]}),(0,y.jsxs)(o.W,{children:[(0,y.jsxs)("p",{className:"text-body-secondary small",children:["Add ",(0,y.jsx)("code",{children:'transition="crossfade"'})," to your carousel to animate slides with a fade transition instead of a slide."]}),(0,y.jsx)(g.Eb,{href:"components/carousel/#crossfade",children:(0,y.jsxs)(p,{controls:!0,transition:"crossfade",children:[(0,y.jsx)(v,{children:(0,y.jsx)("img",{className:"d-block w-100",src:C,alt:"slide 1"})}),(0,y.jsx)(v,{children:(0,y.jsx)("img",{className:"d-block w-100",src:b,alt:"slide 2"})}),(0,y.jsx)(v,{children:(0,y.jsx)("img",{className:"d-block w-100",src:E,alt:"slide 3"})})]})})]})]})}),(0,y.jsx)(l.U,{xs:12,children:(0,y.jsxs)(c.E,{className:"mb-4",children:[(0,y.jsxs)(a.V,{children:[(0,y.jsx)("strong",{children:"Carousel"})," ",(0,y.jsx)("small",{children:"Dark variant"})]}),(0,y.jsxs)(o.W,{children:[(0,y.jsxs)("p",{className:"text-body-secondary small",children:["Add ",(0,y.jsx)("code",{children:"dark"})," property to the ",(0,y.jsx)("code",{children:"CCarousel"})," for darker controls, indicators, and captions. Controls have been inverted from their default white fill with the ",(0,y.jsx)("code",{children:"filter"})," CSS property. Captions and controls have additional Sass variables that customize the ",(0,y.jsx)("code",{children:"color"})," and ",(0,y.jsx)("code",{children:"background-color"}),"."]}),(0,y.jsx)(g.Eb,{href:"components/carousel/#dark-variant",children:(0,y.jsxs)(p,{controls:!0,indicators:!0,dark:!0,children:[(0,y.jsxs)(v,{children:[(0,y.jsx)("img",{className:"d-block w-100",src:N[0],alt:"slide 1"}),(0,y.jsxs)(j,{className:"d-none d-md-block",children:[(0,y.jsx)("h5",{children:"First slide label"}),(0,y.jsx)("p",{children:"Some representative placeholder content for the first slide."})]})]}),(0,y.jsxs)(v,{children:[(0,y.jsx)("img",{className:"d-block w-100",src:N[1],alt:"slide 2"}),(0,y.jsxs)(j,{className:"d-none d-md-block",children:[(0,y.jsx)("h5",{children:"Second slide label"}),(0,y.jsx)("p",{children:"Some representative placeholder content for the first slide."})]})]}),(0,y.jsxs)(v,{children:[(0,y.jsx)("img",{className:"d-block w-100",src:N[2],alt:"slide 3"}),(0,y.jsxs)(j,{className:"d-none d-md-block",children:[(0,y.jsx)("h5",{children:"Third slide label"}),(0,y.jsx)("p",{children:"Some representative placeholder content for the first slide."})]})]})]})})]})]})})]})},861:(e,s,t)=>{t.d(s,{E:()=>i});var n=t(2378),r=t(5043),l=t(5173),c=t.n(l),a=t(5196),o=t(5232),i=(0,r.forwardRef)((function(e,s){var t,l=e.children,c=e.className,o=e.color,i=e.textBgColor,d=e.textColor,h=(0,n.Tt)(e,["children","className","color","textBgColor","textColor"]);return r.createElement("div",(0,n.Cl)({className:(0,a.A)("card",(t={},t["bg-".concat(o)]=o,t["text-".concat(d)]=d,t["text-bg-".concat(i)]=i,t),c)},h,{ref:s}),l)}));i.propTypes={children:c().node,className:c().string,color:o.TX,textBgColor:o.TX,textColor:c().string},i.displayName="CCard"},6105:(e,s,t)=>{t.d(s,{W:()=>o});var n=t(2378),r=t(5043),l=t(5173),c=t.n(l),a=t(5196),o=(0,r.forwardRef)((function(e,s){var t=e.children,l=e.className,c=(0,n.Tt)(e,["children","className"]);return r.createElement("div",(0,n.Cl)({className:(0,a.A)("card-body",l)},c,{ref:s}),t)}));o.propTypes={children:c().node,className:c().string},o.displayName="CCardBody"},2723:(e,s,t)=>{t.d(s,{V:()=>o});var n=t(2378),r=t(5043),l=t(5173),c=t.n(l),a=t(5196),o=(0,r.forwardRef)((function(e,s){var t=e.children,l=e.as,c=void 0===l?"div":l,o=e.className,i=(0,n.Tt)(e,["children","as","className"]);return r.createElement(c,(0,n.Cl)({className:(0,a.A)("card-header",o)},i,{ref:s}),t)}));o.propTypes={as:c().elementType,children:c().node,className:c().string},o.displayName="CCardHeader"},4227:(e,s,t)=>{t.d(s,{U:()=>i});var n=t(2378),r=t(5043),l=t(5173),c=t.n(l),a=t(5196),o=["xxl","xl","lg","md","sm","xs"],i=(0,r.forwardRef)((function(e,s){var t=e.children,l=e.className,c=(0,n.Tt)(e,["children","className"]),i=[];return o.forEach((function(e){var s=c[e];delete c[e];var t="xs"===e?"":"-".concat(e);"number"!==typeof s&&"string"!==typeof s||i.push("col".concat(t,"-").concat(s)),"boolean"===typeof s&&i.push("col".concat(t)),s&&"object"===typeof s&&("number"!==typeof s.span&&"string"!==typeof s.span||i.push("col".concat(t,"-").concat(s.span)),"boolean"===typeof s.span&&i.push("col".concat(t)),"number"!==typeof s.order&&"string"!==typeof s.order||i.push("order".concat(t,"-").concat(s.order)),"number"===typeof s.offset&&i.push("offset".concat(t,"-").concat(s.offset)))})),r.createElement("div",(0,n.Cl)({className:(0,a.A)(i.length>0?i:"col",l)},c,{ref:s}),t)})),d=c().oneOfType([c().bool,c().number,c().string,c().oneOf(["auto"])]),h=c().oneOfType([d,c().shape({span:d,offset:c().oneOfType([c().number,c().string]),order:c().oneOfType([c().oneOf(["first","last"]),c().number,c().string])})]);i.propTypes={children:c().node,className:c().string,xs:h,sm:h,md:h,lg:h,xl:h,xxl:h},i.displayName="CCol"},4101:(e,s,t)=>{t.d(s,{s:()=>i});var n=t(2378),r=t(5043),l=t(5173),c=t.n(l),a=t(5196),o=["xxl","xl","lg","md","sm","xs"],i=(0,r.forwardRef)((function(e,s){var t=e.children,l=e.className,c=(0,n.Tt)(e,["children","className"]),i=[];return o.forEach((function(e){var s=c[e];delete c[e];var t="xs"===e?"":"-".concat(e);"object"===typeof s&&(s.cols&&i.push("row-cols".concat(t,"-").concat(s.cols)),"number"===typeof s.gutter&&i.push("g".concat(t,"-").concat(s.gutter)),"number"===typeof s.gutterX&&i.push("gx".concat(t,"-").concat(s.gutterX)),"number"===typeof s.gutterY&&i.push("gy".concat(t,"-").concat(s.gutterY)))})),r.createElement("div",(0,n.Cl)({className:(0,a.A)("row",i,l)},c,{ref:s}),t)})),d=c().shape({cols:c().oneOfType([c().oneOf(["auto"]),c().number,c().string]),gutter:c().oneOfType([c().string,c().number]),gutterX:c().oneOfType([c().string,c().number]),gutterY:c().oneOfType([c().string,c().number])});i.propTypes={children:c().node,className:c().string,xs:d,sm:d,md:d,lg:d,xl:d,xxl:d},i.displayName="CRow"},1218:(e,s,t)=>{e.exports=t.p+"static/media/react.83088efde08a5dedde9f.jpg"}}]);
//# sourceMappingURL=5300.a6af14de.chunk.js.map