import{u as p,r as m,a as f,j as t,b as v,c as x,t as y,L as _,M as u,d as C,l as N,e as b}from"./index-2459f720.js";const L="_productList_uzr53_3",P={productList:L},w="_formContainer_16kop_1",S="_form_16kop_1",l={formContainer:w,form:S},k=()=>{const i=p(),[o,s]=m.useState(""),[e,a]=f("product",{title:"",description:"",category:"",price:"",image:""}),r=n=>{const{name:g,value:j}=n.target;a({...e,[g]:j})};function c(){const n=/^(https?:\/\/)?([\w.-]+\.\w{2,})(\/\S*)?$/;return e.title.trim()===""?(s("title is not valid"),!1):e.description.trim()===""?(s("description is not valid"),!1):e.category.trim()===""?(s("category is not valid"),!1):e.price.trim()===""||Number.isNaN(Number(e.price))?(s("price is not valid"),!1):n.test(e.image)?!0:(s("url is not valid"),!1)}const h=n=>{n.preventDefault(),s(""),sessionStorage.setItem("price",e.price),c()&&i(v(e))};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:l.formContainer,children:t.jsxs("form",{className:l.form,onSubmit:h,action:"",children:[t.jsx("label",{children:"Добавить новый продукт:"}),t.jsx("input",{name:"title",onChange:r,placeholder:"title",type:"text",value:e.title}),t.jsx("input",{name:"description",onChange:r,placeholder:"description",type:"text",value:e.description}),t.jsx("input",{name:"category",onChange:r,placeholder:"category",type:"text",value:e.category}),t.jsx("input",{name:"price",onChange:r,placeholder:"price",type:"text",value:e.price}),t.jsx("input",{name:"image",onChange:r,placeholder:"image",type:"text",value:e.image}),t.jsx("button",{className:l.button,type:"submit",children:"Добавить файл"})]})}),t.jsx("div",{style:{textAlign:"center"},children:o&&t.jsx("span",{style:{color:"red"},children:o})})]})},E="_productCard_1231s_1",W="_title_1231s_11",A="_imgWrapper_1231s_21",d={productCard:E,title:W,imgWrapper:A},D=({id:i,title:o,image:s,price:e})=>{const a=p(),{favorites:r}=x(c=>c.products);return t.jsx("div",{children:t.jsxs("li",{className:d.productCard,children:[t.jsx("span",{className:d.title,children:o}),t.jsx("div",{className:d.imgWrapper,children:t.jsx("img",{src:s,alt:""})}),t.jsxs("span",{children:["Цена: ",e]}),t.jsx("svg",{style:{cursor:"pointer"},onClick:()=>a(y(i)),width:"30px",height:"30px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:t.jsx("g",{transform:"translate(0 -1028.4)",children:t.jsx("path",{d:"m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z",fill:r.includes(i)?"#e74c3c":"grey"})})}),t.jsx(_,{to:String(i),children:t.jsx(u,{text:"To product"})}),t.jsx(u,{text:"Delete",onClick:()=>a(C(i))})]},i)})},$=()=>{const i=p(),{products:o,error:s,isLoading:e,favorites:a}=x(r=>r.products);return m.useEffect(()=>{i(N())},[]),t.jsxs("div",{children:[t.jsx(k,{}),e&&t.jsx(b,{}),s&&t.jsxs("h4",{style:{color:"red"},children:["Error ",s]}),!e&&t.jsx("ul",{className:P.productList,children:o.map(r=>t.jsx(D,{id:r.id,title:r.title,image:r.image,price:r.price},r.id))})]})};export{$ as default};
//# sourceMappingURL=ProductPage-385361fe.js.map
