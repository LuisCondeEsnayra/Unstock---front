"use strict";(self.webpackChunkunstock_front=self.webpackChunkunstock_front||[]).push([[842],{6739:(e,t,a)=>{a.d(t,{A:()=>n});a(5043);var r=a(579);const n=e=>{let{text:t}=e;return(0,r.jsx)("h1",{className:"text-center mb-3",children:t})}},5842:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var r=a(5043),n=a(4709),s=a(861),c=a(825),i=a(9580),o=a(4303),l=a(7861),d=a(6528),x=a(2845),u=a(2657),h=a(183);const m="Pagination_pagination__oh8i4",p="Pagination_active__W8u6H";var b=a(579);const g=e=>{let{currentPage:t,totalPages:a,onPageChange:r}=e;return(0,b.jsxs)("div",{className:m,children:[(0,b.jsx)("button",{onClick:()=>r(1),disabled:1===t,children:"First"}),(0,b.jsx)("button",{onClick:()=>r(t-1),disabled:1===t,children:"Previous"}),[...Array(a)].map(((e,a)=>(0,b.jsx)("button",{onClick:()=>r(a+1),className:t===a+1?p:"",children:a+1},a))),(0,b.jsx)("button",{onClick:()=>r(t+1),disabled:t===a,children:"Next"}),(0,b.jsx)("button",{onClick:()=>r(a),disabled:t===a,children:"Last"})]})},j={good:{label:"Buen estado",color:{backgroundColor:"#198754"}},expired:{label:"Expirado",color:{backgroundColor:"#bb2d3b"}},aboutToExpire:{label:"Expira Pronto",color:{backgroundColor:"#ffca2c"}}},k=()=>{const[e,t]=(0,r.useState)([]),[a,m]=(0,r.useState)(1),[p]=(0,r.useState)(10),[k,C]=(0,r.useState)(""),[y,N]=(0,r.useState)({key:"name",direction:"ascending"}),f=Date.now();(0,r.useEffect)((()=>{t(h)}),[]);const v=e.filter((e=>e.name.toLowerCase().includes(k.toLowerCase())||e.provider.toLowerCase().includes(k.toLowerCase()))),w=e=>{const{stock:t,minimumQuantity:a}=e;return 0===t?0:t<a?1:2},D=v.sort(((e,t)=>{if("expiration"===y.key){if(e.expirationDate<t.expirationDate)return"ascending"===y.direction?-1:1;if(e.expirationDate>t.expirationDate)return"ascending"===y.direction?1:-1}return"status"===y.key?(w(e)-w(t))*("ascending"===y.direction?1:-1):e[y.key]<t[y.key]?"ascending"===y.direction?-1:1:e[y.key]>t[y.key]?"ascending"===y.direction?1:-1:0})),P=a*p,E=P-p,_=D.slice(E,P),T=Math.ceil(D.length/p),A={label:"nombre",provider:"proveedor",brand:"marca",quantity:"cantidad",price:"precio",stock:"stock",expirationDate:"fecha de expiraci\xf3n",status:"status",expiration:"caducidad"},Q=e=>{const{stock:t,minimumQuantity:a}=e;return 0===t?(0,b.jsx)(n.Q,{style:{backgroundColor:"#bb2d3b"},className:"text-white",children:"Agotado"}):t<a?(0,b.jsx)(n.Q,{color:"danger",children:"Insuficiente"}):(0,b.jsx)(n.Q,{style:{backgroundColor:"#198754"},className:"text-white",children:"Disponible"})},B=e=>{const t=new Date(e.expirationDate).getTime()-f;let a="good";return t<0?a="expired":t<6048e5&&(a="aboutToExpire"),(0,b.jsx)(n.Q,{style:j[a].color,className:"aboutToExpire"!==a&&"text-white",children:j[a].label})};return(0,b.jsxs)(s.E,{className:"p-3",children:[(0,b.jsx)(c.O,{type:"text",placeholder:"Buscar...",value:k,onChange:e=>{C(e.target.value),m(1)},className:"mb-3"}),(0,b.jsxs)(i._,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[(0,b.jsx)(o.w,{className:"text-nowrap",children:(0,b.jsx)(l.Y,{children:Object.keys(A).map((e=>(0,b.jsxs)(d.$,{className:"bg-body-tertiary text-center",onClick:()=>(e=>{const t=y.key===e&&"ascending"===y.direction?"descending":"ascending";N({key:e,direction:t})})(e),style:{cursor:"pointer"},children:[A[e].charAt(0).toUpperCase()+A[e].slice(1),y.key===e&&("ascending"===y.direction?" \ud83d\udd3c":" \ud83d\udd3d")]},e)))})}),(0,b.jsx)(x.C,{children:_.map(((e,t)=>(0,b.jsxs)(l.Y,{children:[(0,b.jsx)(u.c,{className:"text-center",children:e.label}),(0,b.jsx)(u.c,{className:"text-center",children:e.provider}),(0,b.jsx)(u.c,{className:"text-center",children:e.brand||"Generica"}),(0,b.jsxs)(u.c,{className:"text-center",children:[e.quantity," ",e.type||""]}),(0,b.jsxs)(u.c,{className:"text-center",children:["$",e.price]}),(0,b.jsxs)(u.c,{className:"text-center",children:[e.stock," ",e.type||""]}),(0,b.jsx)(u.c,{className:"text-center",children:e.expirationDate}),(0,b.jsx)(u.c,{className:"text-center",children:Q(e)}),(0,b.jsx)(u.c,{className:"text-center",children:B(e)})]},t)))})]}),(0,b.jsx)(g,{currentPage:a,totalPages:T,onPageChange:e=>m(e)})]})};var C=a(6739);const y=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(C.A,{text:"Insumos"}),(0,b.jsx)(k,{})]})},861:(e,t,a)=>{a.d(t,{E:()=>l});var r=a(2378),n=a(5043),s=a(5173),c=a.n(s),i=a(5196),o=a(5232),l=(0,n.forwardRef)((function(e,t){var a,s=e.children,c=e.className,o=e.color,l=e.textBgColor,d=e.textColor,x=(0,r.Tt)(e,["children","className","color","textBgColor","textColor"]);return n.createElement("div",(0,r.Cl)({className:(0,i.A)("card",(a={},a["bg-".concat(o)]=o,a["text-".concat(d)]=d,a["text-bg-".concat(l)]=l,a),c)},x,{ref:t}),s)}));l.propTypes={children:c().node,className:c().string,color:o.TX,textBgColor:o.TX,textColor:c().string},l.displayName="CCard"}}]);
//# sourceMappingURL=842.7ffb894f.chunk.js.map