"use strict";(self.webpackChunkunstock_front=self.webpackChunkunstock_front||[]).push([[40],{6739:(e,a,t)=>{t.d(a,{A:()=>s});t(5043);var r=t(579);const s=e=>{let{text:a}=e;return(0,r.jsx)("h1",{className:"text-center mb-3",children:a})}},6347:(e,a,t)=>{t.d(a,{A:()=>z});var r=t(5043),s=t(2192),i=t(861),n=t(4101),l=t(4709),c=t(2723),o=t(6105),d=t(4227),m=t(579);const p=e=>{const{name:a,image:t,sell:r,type:s,ingredients:i,recipe:l}=e.recipe;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.V,{children:(0,m.jsx)("h5",{className:"text-center",children:a})}),(0,m.jsx)(o.W,{children:(0,m.jsxs)(n.s,{className:"justify-content-center",children:[(0,m.jsx)(d.U,{xs:"auto",className:"text-center",children:(0,m.jsx)("img",{style:{maxHeight:"40vh",maxWidth:"300px"},src:t,alt:a})}),(0,m.jsxs)(d.U,{children:[(0,m.jsxs)(n.s,{children:[(0,m.jsx)("h5",{children:"Descripci\xf3n"}),(0,m.jsxs)("p",{children:["Cantidad de venta: ",r," ",s]}),(0,m.jsxs)("p",{children:["Rendimiento de receta: ",r," ",s]})]}),(0,m.jsx)(n.s,{children:(0,m.jsxs)(d.U,{children:[(0,m.jsx)("h5",{children:"Ingredientes"}),(0,m.jsx)("ul",{className:"mx-5",children:i.map(((e,a)=>(0,m.jsxs)("li",{children:[e.quantity," ",e.measure," de"," ",e.ingredient]},a)))})]})}),(0,m.jsxs)(n.s,{children:[(0,m.jsx)("h5",{children:"Receta"}),(0,m.jsx)("p",{children:l})]})]})]})})]})},u="recipeCard_recipeImage__UlvYo",x=e=>{const{name:a,image:t}=e.recipe;return(0,m.jsxs)("div",{onClick:e.handleShowMore,children:[(0,m.jsx)("h5",{children:a}),(0,m.jsx)("img",{src:t,alt:a,className:`${u}  `})]})},h="RecipesGrid_cardHeight__zIZxe",y=e=>(0,m.jsx)(n.s,{className:`${h} overflow-auto `,children:e.filteredData.map(((a,t)=>(0,m.jsx)(d.U,{xs:"12",sm:"6",md:"3",className:"  mb-4 text-center",children:(0,m.jsx)("div",{className:"w-100 ps-2",children:(0,m.jsx)(x,{recipe:a,handleShowMore:()=>e.handleShowMore(t)})})},t)))});var b=t(4398),v=t(2382),f=t(6323),j=t(1917),g=t(3526),N=t(5823),C=t(825),k=t(4231),A=t(6152),D=t(2261),S=t(2686),q=t(2);const T=()=>{const[e,a]=(0,r.useState)("");return(0,m.jsxs)(A.j,{children:[(0,m.jsx)(D.V,{color:"secondary",children:e.length>0?e:"Medida"}),(0,m.jsx)(S.Q,{children:[{value:"gr",label:"Gramos"},{value:"ml",label:"Mililitros"},{value:"piezas",label:"Piezas"}].map(((e,t)=>(0,m.jsx)(q.k,{onClick:()=>{return t=e.value,a(t);var t},children:e.label},t)))})]})},w=()=>(0,m.jsxs)(n.s,{children:[(0,m.jsxs)(d.U,{md:"12",lg:"6",children:[(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)(N.A,{htmlFor:"name",children:"Nombre"}),(0,m.jsx)(C.O,{type:"text",id:"name",placeholder:"Nombre"})]}),(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)(N.A,{htmlFor:"cost",children:"Costo de venta"}),(0,m.jsx)(C.O,{type:"text",id:"cost",placeholder:"Costo de venta"})]}),(0,m.jsx)("div",{className:"mb-3",children:(0,m.jsxs)(n.s,{children:[(0,m.jsxs)(d.U,{sm:"8",md:"8",lg:"8",children:[(0,m.jsx)(N.A,{htmlFor:"sell",children:"Cantidad de venta:"}),(0,m.jsx)(C.O,{type:"text",id:"sell",placeholder:"Ej. 2"})]}),(0,m.jsxs)(d.U,{sm:"4",md:"4",lg:"4",children:[(0,m.jsx)(N.A,{htmlFor:"sell",children:"Medida:"})," ",(0,m.jsx)("br",{}),(0,m.jsx)(T,{})]})]})}),(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)(N.A,{htmlFor:"cost",children:"Costo"}),(0,m.jsx)(C.O,{type:"text",id:"cost",placeholder:"Costo"})]})]}),(0,m.jsxs)(d.U,{children:[(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)(N.A,{htmlFor:"yield",children:"Rendimiento de Receta:"}),(0,m.jsx)(C.O,{type:"text",id:"yield",placeholder:"Rendimiento de Receta:"})]}),(0,m.jsx)("div",{className:"mb-3",children:(0,m.jsx)(C.O,{type:"file",id:"image",label:"Imagen:"})}),(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)(N.A,{htmlFor:"recipe",children:"Receta"}),(0,m.jsx)(k.I,{id:"recipe",rows:3})]})]})]}),Q=e=>{let{options:a=[],renderItem:t,onChange:s,value:i,onSelect:n}=e;const[l,c]=(0,r.useState)(-1),o=(0,r.useRef)(null),[d,p]=(0,r.useState)(!1),[u,x]=(0,r.useState)(""),[h,y]=(0,r.useState)([]),[b,v]=(0,r.useState)([]),f=(0,r.useCallback)((()=>{c(-1),p(!1)}),[]);(0,r.useEffect)((()=>{if(u){const e=a.filter((e=>e.label.toLowerCase().includes(u.toLowerCase())));v(e),p(!0)}else v([]),p(!1)}),[u,a]);const j=e=>{if(!e)return f();h.includes(e)||(y((a=>[...a,e])),n&&n([...h,e])),f(),x("")};return(0,r.useEffect)((()=>{i&&x(i)}),[i]),(0,m.jsxs)("div",{className:"multi-select",children:[(0,m.jsxs)("div",{tabIndex:1,onBlur:f,onKeyDown:e=>{const{key:a}=e;let t=0;"ArrowDown"===a&&(t=(l+1)%b.length),"ArrowUp"===a&&(t=(l+b.length-1)%b.length),"Escape"===a&&f(),"Enter"===a&&(e.preventDefault(),j(b[l])),c(t)},className:"relative",children:[(0,m.jsx)("input",{value:u,onChange:e=>{x(e.target.value),s&&s(e)},type:"text",className:"search-input",placeholder:"Search and select..."}),d&&(0,m.jsx)("div",{className:"results-dropdown",children:b.map(((e,a)=>(0,m.jsx)("div",{onMouseDown:()=>j(e),ref:a===l?o:null,style:{backgroundColor:a===l?"rgba(0,0,0,0.1)":""},className:"result-item",children:t(e)},a)))})]}),(0,m.jsx)("div",{className:"selected-items",children:h.map(((e,a)=>(0,m.jsxs)("div",{className:"selected-item",children:[t(e),(0,m.jsx)("button",{onClick:()=>(e=>{const a=h.filter((a=>a!==e));y(a),n&&n(a)})(e),className:"remove-btn",children:"\xd7"})]},a)))})]})};var _=t(183);const R=e=>{const[a,t]=(0,r.useState)([]);return(0,m.jsxs)(b.z,{alignment:"center",scrollable:!0,size:"xl",visible:e.visible,onClose:()=>e.closeModal(),"aria-labelledby":"Carro",children:[(0,m.jsx)(v.E,{children:"Productos"}),(0,m.jsx)(f.T,{children:(0,m.jsx)(j.q,{children:(0,m.jsxs)(g.T,{children:[(0,m.jsx)(w,{}),(0,m.jsx)(Q,{options:_,renderItem:e=>(0,m.jsx)("span",{children:e.label}),onSelect:e=>console.log("Selected items:",e)})]})})})]})};var E=t(3354),O=t(9833);const z=()=>{const[e,a]=(0,r.useState)([]),[t,c]=(0,r.useState)(""),[o,d]=(0,r.useState)(null),[u,x]=(0,r.useState)(!1);(0,r.useEffect)((()=>{a(s._)}),[]);const h=e.filter((e=>e.name.toLowerCase().includes(t.toLowerCase())));return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i.E,{className:"mb-3",children:[(0,m.jsxs)(n.s,{children:[(0,m.jsxs)("div",{className:"col   mt-5 ms-4",children:[(0,m.jsx)("label",{for:"search",children:"Buscar Receta:"}),(0,m.jsx)("input",{id:"search",type:"text",placeholder:"Buscar receta",value:t,onChange:e=>{c(e.target.value)},className:"ms-3 "})]}),(0,m.jsx)("div",{className:"col-3 mt-4",children:(0,m.jsxs)(l.Q,{className:"   text-middle",onClick:()=>{x(!0)},children:[(0,m.jsx)(E.Ay,{icon:O.x}),(0,m.jsx)("p",{children:"A\xf1adir Receta"})]})}),(0,m.jsx)("div",{className:"px-4",children:(0,m.jsx)("hr",{})})]}),0!==h.length?(0,m.jsx)(y,{handleShowMore:e=>{d(e)},filteredData:h}):(0,m.jsx)("h3",{className:"text-center m-5",children:"No hay recetas para mostrar "})]}),(0,m.jsx)(R,{visible:u,closeModal:()=>{x(!1)}}),null!=o&&(0,m.jsx)(i.E,{children:(0,m.jsx)(p,{recipe:e[o]})})]})}},7040:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});t(5043);var r=t(6347),s=t(6739),i=t(579);const n=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.A,{text:"Recetas"}),(0,i.jsx)(r.A,{})]})},9833:(e,a,t)=>{t.d(a,{x:()=>r});var r=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='440 240 272 240 272 72 240 72 240 240 72 240 72 272 240 272 240 440 272 440 272 272 440 272 440 240' class='ci-primary'/>"]},861:(e,a,t)=>{t.d(a,{E:()=>o});var r=t(2378),s=t(5043),i=t(5173),n=t.n(i),l=t(5196),c=t(5232),o=(0,s.forwardRef)((function(e,a){var t,i=e.children,n=e.className,c=e.color,o=e.textBgColor,d=e.textColor,m=(0,r.Tt)(e,["children","className","color","textBgColor","textColor"]);return s.createElement("div",(0,r.Cl)({className:(0,l.A)("card",(t={},t["bg-".concat(c)]=c,t["text-".concat(d)]=d,t["text-bg-".concat(o)]=o,t),n)},m,{ref:a}),i)}));o.propTypes={children:n().node,className:n().string,color:c.TX,textBgColor:c.TX,textColor:n().string},o.displayName="CCard"},6105:(e,a,t)=>{t.d(a,{W:()=>c});var r=t(2378),s=t(5043),i=t(5173),n=t.n(i),l=t(5196),c=(0,s.forwardRef)((function(e,a){var t=e.children,i=e.className,n=(0,r.Tt)(e,["children","className"]);return s.createElement("div",(0,r.Cl)({className:(0,l.A)("card-body",i)},n,{ref:a}),t)}));c.propTypes={children:n().node,className:n().string},c.displayName="CCardBody"},2723:(e,a,t)=>{t.d(a,{V:()=>c});var r=t(2378),s=t(5043),i=t(5173),n=t.n(i),l=t(5196),c=(0,s.forwardRef)((function(e,a){var t=e.children,i=e.as,n=void 0===i?"div":i,c=e.className,o=(0,r.Tt)(e,["children","as","className"]);return s.createElement(n,(0,r.Cl)({className:(0,l.A)("card-header",c)},o,{ref:a}),t)}));c.propTypes={as:n().elementType,children:n().node,className:n().string},c.displayName="CCardHeader"},1917:(e,a,t)=>{t.d(a,{q:()=>c});var r=t(2378),s=t(5043),i=t(5173),n=t.n(i),l=t(5196),c=(0,s.forwardRef)((function(e,a){var t=e.children,i=e.className,n=e.validated,c=(0,r.Tt)(e,["children","className","validated"]);return s.createElement("form",(0,r.Cl)({className:(0,l.A)({"was-validated":n},i)||void 0},c,{ref:a}),t)}));c.propTypes={children:n().node,className:n().string,validated:n().bool},c.displayName="CForm"},4231:(e,a,t)=>{t.d(a,{I:()=>o});var r=t(2378),s=t(5043),i=t(5173),n=t.n(i),l=t(5196),c=t(1447),o=(0,s.forwardRef)((function(e,a){var t=e.children,i=e.className,n=e.feedback,o=e.feedbackInvalid,d=e.feedbackValid,m=e.floatingClassName,p=e.floatingLabel,u=e.id,x=e.invalid,h=e.label,y=e.plainText,b=e.text,v=e.tooltipFeedback,f=e.valid,j=(0,r.Tt)(e,["children","className","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","id","invalid","label","plainText","text","tooltipFeedback","valid"]);return s.createElement(c.O,{describedby:j["aria-describedby"],feedback:n,feedbackInvalid:o,feedbackValid:d,floatingClassName:m,floatingLabel:p,id:u,invalid:x,label:h,text:b,tooltipFeedback:v,valid:f},s.createElement("textarea",(0,r.Cl)({className:(0,l.A)(y?"form-control-plaintext":"form-control",{"is-invalid":x,"is-valid":f},i),id:u},j,{ref:a}),t))}));o.propTypes=(0,r.Cl)({className:n().string,id:n().string,plainText:n().bool},c.O.propTypes),o.displayName="CFormTextarea"},4227:(e,a,t)=>{t.d(a,{U:()=>o});var r=t(2378),s=t(5043),i=t(5173),n=t.n(i),l=t(5196),c=["xxl","xl","lg","md","sm","xs"],o=(0,s.forwardRef)((function(e,a){var t=e.children,i=e.className,n=(0,r.Tt)(e,["children","className"]),o=[];return c.forEach((function(e){var a=n[e];delete n[e];var t="xs"===e?"":"-".concat(e);"number"!==typeof a&&"string"!==typeof a||o.push("col".concat(t,"-").concat(a)),"boolean"===typeof a&&o.push("col".concat(t)),a&&"object"===typeof a&&("number"!==typeof a.span&&"string"!==typeof a.span||o.push("col".concat(t,"-").concat(a.span)),"boolean"===typeof a.span&&o.push("col".concat(t)),"number"!==typeof a.order&&"string"!==typeof a.order||o.push("order".concat(t,"-").concat(a.order)),"number"===typeof a.offset&&o.push("offset".concat(t,"-").concat(a.offset)))})),s.createElement("div",(0,r.Cl)({className:(0,l.A)(o.length>0?o:"col",i)},n,{ref:a}),t)})),d=n().oneOfType([n().bool,n().number,n().string,n().oneOf(["auto"])]),m=n().oneOfType([d,n().shape({span:d,offset:n().oneOfType([n().number,n().string]),order:n().oneOfType([n().oneOf(["first","last"]),n().number,n().string])})]);o.propTypes={children:n().node,className:n().string,xs:m,sm:m,md:m,lg:m,xl:m,xxl:m},o.displayName="CCol"},4101:(e,a,t)=>{t.d(a,{s:()=>o});var r=t(2378),s=t(5043),i=t(5173),n=t.n(i),l=t(5196),c=["xxl","xl","lg","md","sm","xs"],o=(0,s.forwardRef)((function(e,a){var t=e.children,i=e.className,n=(0,r.Tt)(e,["children","className"]),o=[];return c.forEach((function(e){var a=n[e];delete n[e];var t="xs"===e?"":"-".concat(e);"object"===typeof a&&(a.cols&&o.push("row-cols".concat(t,"-").concat(a.cols)),"number"===typeof a.gutter&&o.push("g".concat(t,"-").concat(a.gutter)),"number"===typeof a.gutterX&&o.push("gx".concat(t,"-").concat(a.gutterX)),"number"===typeof a.gutterY&&o.push("gy".concat(t,"-").concat(a.gutterY)))})),s.createElement("div",(0,r.Cl)({className:(0,l.A)("row",o,i)},n,{ref:a}),t)})),d=n().shape({cols:n().oneOfType([n().oneOf(["auto"]),n().number,n().string]),gutter:n().oneOfType([n().string,n().number]),gutterX:n().oneOfType([n().string,n().number]),gutterY:n().oneOfType([n().string,n().number])});o.propTypes={children:n().node,className:n().string,xs:d,sm:d,md:d,lg:d,xl:d,xxl:d},o.displayName="CRow"},183:e=>{e.exports=JSON.parse('[{"label":"Fresas","name":"fresas","price":50,"quantity":15,"stock":100,"type":"piezas","provider":"Alsuper","expirationDate":"2024-11-15","minimumQuantity":1},{"label":"BlueBerrys","name":"blueberrys","price":60,"quantity":25,"stock":200,"type":"piezas","provider":"Alsuper","expirationDate":"2024-11-20","minimumQuantity":1},{"label":"Pl\xe1tano","name":"platano","price":20,"quantity":5,"stock":0,"type":"piezas","provider":"Alsuper","expirationDate":"2024-11-10","minimumQuantity":1},{"label":"Az\xfacar Glass","name":"azucar_glass","price":45,"quantity":1000,"stock":5000,"type":"gr","provider":"Moldes y Detalles","expirationDate":"2025-12-31","minimumQuantity":5},{"label":"Harina","name":"harina","brand":"San Antonio","price":109,"quantity":4000,"stock":10,"type":"gr","provider":"Costco","expirationDate":"2025-08-15","minimumQuantity":100},{"label":"Sal","name":"sal","brand":"Cisne","price":20,"quantity":1000,"stock":3000,"type":"gr","provider":"Alsuper","expirationDate":"2026-01-01","minimumQuantity":5},{"label":"Bicarbonato de sodio","name":"bicarbonato_de_sodio","brand":"Arm & Hammer","price":30,"quantity":227,"stock":1000,"type":"gr","provider":"Alsuper","expirationDate":"2025-03-01","minimumQuantity":10},{"label":"Az\xfacar est\xe1ndar","name":"azucar_estandar","brand":"Aurrera","price":30,"quantity":900,"stock":5000,"type":"gr","provider":"Walmart","expirationDate":"2025-05-01","minimumQuantity":50},{"label":"Polvo para Hornear","name":"polvo_para_hornear","brand":"Rexal","price":15,"quantity":100,"stock":800,"type":"gr","provider":"Alsuper","expirationDate":"2025-09-01","minimumQuantity":10},{"label":"Huevo","name":"huevo","brand":"San Juan","price":90,"quantity":30,"stock":200,"type":"piezas","provider":"Sams","expirationDate":"2024-11-08","minimumQuantity":1},{"label":"Mantequilla","name":"mantequilla","brand":"Kirkland","price":330,"quantity":1812,"stock":5000,"type":"gr","provider":"Costco","expirationDate":"2025-06-01","minimumQuantity":100},{"label":"Extracto de Vainilla","name":"extracto_de_vainilla","brand":"Progourmet","price":165,"quantity":500,"stock":1000,"type":"ml","provider":"Sams","expirationDate":"2026-12-31","minimumQuantity":10},{"label":"Leche entera","name":"leche_entera","brand":"Kirkland","price":270,"quantity":12000,"stock":20000,"type":"ml","provider":"Costco","expirationDate":"2024-11-25","minimumQuantity":1000},{"label":"Agua","name":"agua","price":15,"quantity":20000,"stock":50000,"type":"ml","provider":"Purificadora","expirationDate":"2026-01-01","minimumQuantity":1000},{"label":"Hielo","name":"hielo","price":35,"quantity":5000,"stock":10000,"type":"gr","provider":"Alsuper","expirationDate":"2025-12-31","minimumQuantity":500},{"label":"Flor de Jamaica","name":"flor_de_jamaica","brand":"Members Mark","price":286,"quantity":1000,"stock":3000,"type":"gr","provider":"Sams","expirationDate":"2025-08-01","minimumQuantity":50},{"label":"Nieve de Fresa","name":"nieve_de_fresa","brand":"Members Mark","price":204,"quantity":4700,"stock":15000,"type":"gr","provider":"Sams","expirationDate":"2025-05-01","minimumQuantity":100},{"label":"Crema Batida","name":"crema_batida","brand":"Rich\'s","price":164,"quantity":906,"stock":2000,"type":"gr","provider":"Sams","expirationDate":"2025-04-01","minimumQuantity":50},{"label":"Syrup de Chocolate","name":"syrup_de_chocolate","brand":"Hershey\'s","price":162,"quantity":1767,"stock":3000,"type":"ml","provider":"Sams","expirationDate":"2025-12-31","minimumQuantity":50},{"label":"Cerezas","name":"cerezas","brand":"Members Mark","price":210,"quantity":100,"stock":500,"provider":"Sams","type":"ml","expirationDate":"2024-11-30","minimumQuantity":10},{"label":"Popotes","name":"popotes","brand":"Primo","price":343,"quantity":500,"stock":1000,"provider":"Sams","type":"piezas","expirationDate":"2026-01-01","minimumQuantity":1},{"label":"Queso Monterrey Jack","name":"queso_monterrey_jack","brand":"Kirkland","price":110,"quantity":1000,"stock":2500,"type":"gr","provider":"Costco","expirationDate":"2025-02-01","minimumQuantity":100},{"label":"Champi\xf1ones","name":"champinones","price":37,"quantity":10,"stock":200,"type":"piezas","provider":"Alsuper","expirationDate":"2024-11-15","minimumQuantity":1},{"label":"Pimienta","name":"pimienta","price":27,"quantity":50,"stock":300,"provider":"Alsuper","type":"gr","expirationDate":"2025-03-01","minimumQuantity":5},{"label":"Ceboll\xedn","name":"cebollin","price":20,"quantity":10,"stock":100,"type":"piezas","provider":"Alsuper","expirationDate":"2024-11-10","minimumQuantity":1},{"label":"Pan de Caja","name":"pan_de_caja","brand":"Bimbo Artesano","price":47,"quantity":14,"stock":80,"type":"piezas","provider":"Sams","expirationDate":"2025-01-01","minimumQuantity":1}]')}}]);
//# sourceMappingURL=40.aebc3eee.chunk.js.map