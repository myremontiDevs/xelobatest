"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[357],{357:(e,a,n)=>{n.r(a),n.d(a,{default:()=>d});const r={parentContainer:"CraftsmanRegistration_parentContainer__6X3rN",formContainer:"CraftsmanRegistration_formContainer__n1tfa",header:"CraftsmanRegistration_header__BOvLa",registrationForm:"CraftsmanRegistration_registrationForm__UqGJj",inputCard:"CraftsmanRegistration_inputCard__iSB5X",inputCard__labelBox:"CraftsmanRegistration_inputCard__labelBox__0gOCm",inputCard__relative:"CraftsmanRegistration_inputCard__relative__QisRm",inputCard__input:"CraftsmanRegistration_inputCard__input__RRSQd",inputCard__textarea:"CraftsmanRegistration_inputCard__textarea__DI7ML",inputCard__imgInput:"CraftsmanRegistration_inputCard__imgInput__5P98P",inputCard__inputError:"CraftsmanRegistration_inputCard__inputError__qZLz0",inputCard__errorMessages:"CraftsmanRegistration_inputCard__errorMessages__wdoAq",inputCard__eyeIconContainer:"CraftsmanRegistration_inputCard__eyeIconContainer__mPFGI",showPasswordInfo:"CraftsmanRegistration_showPasswordInfo__jygG0",showExperienceInfo:"CraftsmanRegistration_showExperienceInfo__eW62J",showPriceInfo:"CraftsmanRegistration_showPriceInfo__5HMuk",showCallFeeInfo:"CraftsmanRegistration_showCallFeeInfo__2UlwG",showMoreInfo:"CraftsmanRegistration_showMoreInfo__Ka85D",hideAdditionalInfo:"CraftsmanRegistration_hideAdditionalInfo__JwZDS",xmarkContainer:"CraftsmanRegistration_xmarkContainer__rexrB",faQuestion:"CraftsmanRegistration_faQuestion__3fclj",faCircleXmark:"CraftsmanRegistration_faCircleXmark__ZIU+v",buttonContainer:"CraftsmanRegistration_buttonContainer__NNW8N",submitButton:"CraftsmanRegistration_submitButton__rGMf9"};var s=n(858),i=n(43),t=n(910),o=n(929),l=n(579);const c=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;const d=function(){const e=function(){const[e,a]=(0,i.useState)("");return(0,i.useEffect)((()=>{fetch("http://127.0.0.1:5500/token.json").then((e=>{if(!e.ok)throw new Error("Failed to fetch CSRF token");return e.json()})).then((e=>{console.log("Fetched CSRF Token:",e.token.csrf_token),a(e.token.csrf_token)})).catch((e=>{console.error("Error fetching CSRF token:",e)}))}),[]),e}(),[a,n]=(0,i.useState)(!1),[d,u]=(0,i.useState)(""),p=(0,i.useRef)(null),{register:m,handleSubmit:_,setValue:h,formState:{errors:x}}=(0,s.mN)();(0,i.useEffect)((()=>{h("userId","user_".concat(Math.floor(1e8*Math.random()))),h("registrationDate",(()=>{const e=new Date,a=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),r=e.getFullYear();return"".concat(a,".").concat(n,".").concat(r)})()),h("verificationStatus","false")}),[h]);const C=e=>{u(e)},j=e=>{const a=document.querySelector(".".concat(r.showCallFeeInfo)),n=document.querySelector(".".concat(r.showMoreInfo));(a&&!a.contains(e.target)||n&&!n.contains(e.target))&&u("")};return(0,i.useEffect)((()=>(document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)})),[]),(0,l.jsx)("div",{className:r.parentContainer,children:(0,l.jsxs)("div",{className:r.formContainer,children:[(0,l.jsx)("h2",{className:r.header,children:"\u10e0\u10d4\u10d2\u10d8\u10e1\u10e2\u10e0\u10d0\u10ea\u10d8\u10d0"}),(0,l.jsxs)("form",{onSubmit:_((async e=>{var a;console.log("data",e),null===(a=p.current)||void 0===a||a.submit()})),ref:p,method:"post",action:"/reg",children:[(0,l.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:e}),(0,l.jsx)("input",{type:"hidden",...m("userId")}),(0,l.jsx)("input",{type:"hidden",...m("registrationDate")}),(0,l.jsx)("input",{type:"hidden",...m("verificationStatus")}),(0,l.jsxs)("div",{className:r.registrationForm,children:[(0,l.jsxs)("div",{className:r.inputCard,children:[(0,l.jsx)("div",{className:r.inputCard__labelBox,children:(0,l.jsx)("label",{htmlFor:"firstName",children:"\u10e1\u10d0\u10ee\u10d4\u10da\u10d8"})}),(0,l.jsx)("input",{type:"text",id:"firstName",className:"".concat(r.inputCard__input," ").concat(x.firstName?r.inputCard__inputError:""),...m("firstName",{required:"\u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8 \u10d5\u10d4\u10da\u10d8",minLength:{value:2,message:"\u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db 2 \u10d0\u10e1\u10dd"},pattern:{value:/^[a-zA-Z\u10d0-\u10f0]+$/,message:"\u10d3\u10d0\u10e1\u10d0\u10e8\u10d5\u10d4\u10d1\u10d8\u10d0 \u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10d0\u10e1\u10dd\u10d4\u10d1\u10d8"}})}),x.firstName&&(0,l.jsx)("p",{className:r.inputCard__errorMessages,children:x.firstName.message})]}),(0,l.jsxs)("div",{className:r.inputCard,children:[(0,l.jsx)("div",{className:r.inputCard__labelBox,children:(0,l.jsx)("label",{htmlFor:"lastName",children:"\u10d2\u10d5\u10d0\u10e0\u10d8"})}),(0,l.jsx)("input",{type:"text",id:"lastName",className:"".concat(r.inputCard__input," ").concat(x.lastName?r.inputCard__inputError:""),...m("lastName",{required:"\u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8 \u10d5\u10d4\u10da\u10d8",minLength:{value:5,message:"\u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db 5 \u10d0\u10e1\u10dd"},pattern:{value:/^[a-zA-Z\u10d0-\u10f0]+$/,message:"\u10d3\u10d0\u10e1\u10d0\u10e8\u10d5\u10d4\u10d1\u10d8\u10d0 \u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10d0\u10e1\u10dd\u10d4\u10d1\u10d8"}})}),x.lastName&&(0,l.jsx)("p",{className:r.inputCard__errorMessages,children:x.lastName.message})]}),(0,l.jsxs)("div",{className:r.inputCard,children:[(0,l.jsx)("div",{className:r.inputCard__labelBox,children:(0,l.jsx)("label",{htmlFor:"personalId",children:"\u10de\u10d8\u10e0\u10d0\u10d3\u10d8 \u10dc\u10dd\u10db\u10d4\u10e0\u10d8"})}),(0,l.jsx)("input",{type:"number",id:"personalId",className:"".concat(r.inputCard__input," ").concat(x.personalIdNumber?r.inputCard__inputError:""),...m("personalIdNumber",{required:"\u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8 \u10d5\u10d4\u10da\u10d8",minLength:{value:11,message:"\u10e4\u10dd\u10e0\u10db\u10d0\u10e2\u10d8 \u10d0\u10e0\u10d0\u10d5\u10d0\u10da\u10d8\u10d3\u10e3\u10e0\u10d8\u10d0"},maxLength:{value:11,message:"\u10e4\u10dd\u10e0\u10db\u10d0\u10e2\u10d8 \u10d0\u10e0\u10d0\u10d5\u10d0\u10da\u10d8\u10d3\u10e3\u10e0\u10d8\u10d0"}}),onKeyDown:e=>{"-"!==e.key&&"E"!==e.key&&"e"!==e.key&&"."!==e.key||e.preventDefault()}}),x.personalIdNumber&&(0,l.jsx)("p",{className:r.inputCard__errorMessages,children:x.personalIdNumber.message})]}),(0,l.jsxs)("div",{className:r.inputCard,children:[(0,l.jsx)("div",{className:r.inputCard__labelBox,children:(0,l.jsx)("label",{htmlFor:"phoneNumber",children:"\u10e2\u10d4\u10da\u10d4\u10e4\u10dd\u10dc\u10d8\u10e1 \u10dc\u10dd\u10db\u10d4\u10e0\u10d8"})}),(0,l.jsx)("input",{type:"number",id:"phoneNumber",className:"".concat(r.inputCard__input," ").concat(x.phoneNumber?r.inputCard__inputError:""),...m("phoneNumber",{required:"\u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8 \u10d5\u10d4\u10da\u10d8",minLength:{value:9,message:"\u10e4\u10dd\u10e0\u10db\u10d0\u10e2\u10d8 \u10d0\u10e0\u10d0\u10d5\u10d0\u10da\u10d8\u10d3\u10e3\u10e0\u10d8\u10d0"},maxLength:{value:9,message:"\u10e4\u10dd\u10e0\u10db\u10d0\u10e2\u10d8 \u10d0\u10e0\u10d0\u10d5\u10d0\u10da\u10d8\u10d3\u10e3\u10e0\u10d8\u10d0"}}),onKeyDown:e=>{"-"!==e.key&&"E"!==e.key&&"e"!==e.key&&"."!==e.key||e.preventDefault()}}),x.phoneNumber&&(0,l.jsx)("p",{className:r.inputCard__errorMessages,children:x.phoneNumber.message})]}),(0,l.jsxs)("div",{className:r.inputCard,children:[(0,l.jsx)("div",{className:r.inputCard__labelBox,children:(0,l.jsx)("label",{htmlFor:"email",children:"\u10d8\u10db\u10d4\u10d8\u10da\u10d8"})}),(0,l.jsx)("input",{type:"text",id:"email",className:"".concat(r.inputCard__input," ").concat(x.email?r.inputCard__inputError:""),...m("email",{required:"\u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8 \u10d5\u10d4\u10da\u10d8",pattern:{value:c,message:"\u10e4\u10dd\u10e0\u10db\u10d0\u10e2\u10d8 \u10d0\u10e0\u10d0\u10d5\u10d0\u10da\u10d8\u10d3\u10e3\u10e0\u10d8\u10d0"}})}),x.email&&(0,l.jsx)("p",{className:r.inputCard__errorMessages,children:x.email.message})]}),(0,l.jsxs)("div",{className:r.inputCard,children:[(0,l.jsx)("div",{className:r.inputCard__labelBox,children:(0,l.jsx)("label",{htmlFor:"password",children:"\u10de\u10d0\u10e0\u10dd\u10da\u10d8"})}),(0,l.jsxs)("div",{className:r.inputCard__relative,children:[(0,l.jsx)("input",{type:a?"text":"password",id:"password",className:"".concat(r.inputCard__input," ").concat(x.password?r.inputCard__inputError:""),...m("password",{required:"\u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8 \u10d5\u10d4\u10da\u10d8",minLength:{value:8,message:"\u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db 8 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd"},pattern:{value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,message:"\u10da\u10d0\u10d7\u10d8\u10dc\u10e3\u10e0\u10d8 \u10d0\u10e1\u10dd\u10d4\u10d1\u10d8 \u10d3\u10d0 \u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db \u10d4\u10e0\u10d7\u10d8 \u10e0\u10d8\u10ea\u10ee\u10d5\u10d8"}})}),(0,l.jsx)("div",{className:r.inputCard__eyeIconContainer,onClick:()=>n(!a),children:(0,l.jsx)(t.g,{icon:a?o.pS3:o.k6j,className:r.faEye})})]}),x.password&&(0,l.jsx)("p",{className:r.inputCard__errorMessages,children:x.password.message})]}),(0,l.jsxs)("div",{className:r.inputCard,children:[(0,l.jsx)("div",{className:r.inputCard__labelBox,children:(0,l.jsx)("label",{htmlFor:"city",children:"\u10e5\u10d0\u10da\u10d0\u10e5\u10d8"})}),(0,l.jsx)("select",{id:"city",className:"".concat(r.inputCard__input," ").concat(x.city?r.inputCard__inputError:""),...m("city",{required:"\u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8 \u10d5\u10d4\u10da\u10d8"}),children:(0,l.jsx)("option",{value:"\u10d7\u10d1\u10d8\u10da\u10d8\u10e1\u10d8",children:"\u10d7\u10d1\u10d8\u10da\u10d8\u10e1\u10d8"})}),x.city&&(0,l.jsx)("p",{className:r.inputCard__errorMessages,children:x.city.message})]}),(0,l.jsxs)("div",{className:r.inputCard,children:[(0,l.jsx)("div",{className:r.inputCard__labelBox,children:(0,l.jsx)("label",{htmlFor:"district",children:"\u10e3\u10d1\u10d0\u10dc\u10d8"})}),(0,l.jsxs)("select",{id:"district",className:"".concat(r.inputCard__input," ").concat(x.district?r.inputCard__inputError:""),...m("district",{required:"\u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8 \u10d5\u10d4\u10da\u10d8"}),children:[(0,l.jsx)("option",{value:"",children:"\u10e0\u10d0\u10d8\u10dd\u10dc\u10d8"}),(0,l.jsx)("option",{value:"\u10e1\u10d0\u10d1\u10e3\u10e0\u10d7\u10d0\u10da\u10dd",children:"\u10e1\u10d0\u10d1\u10e3\u10e0\u10d7\u10d0\u10da\u10dd"}),(0,l.jsx)("option",{value:"\u10d5\u10d0\u10d9\u10d4",children:"\u10d5\u10d0\u10d9\u10d4"}),(0,l.jsx)("option",{value:"\u10db\u10d7\u10d0\u10ec\u10db\u10d8\u10dc\u10d3\u10d0",children:"\u10db\u10d7\u10d0\u10ec\u10db\u10d8\u10dc\u10d3\u10d0"}),(0,l.jsx)("option",{value:"\u10dd\u10e0\u10d7\u10d0\u10ed\u10d0\u10da\u10d0",children:"\u10dd\u10e0\u10d7\u10d0\u10ed\u10d0\u10da\u10d0"}),(0,l.jsx)("option",{value:"\u10d9\u10e0\u10ec\u10d0\u10dc\u10d8\u10e1\u10d8",children:"\u10d9\u10e0\u10ec\u10d0\u10dc\u10d8\u10e1\u10d8"}),(0,l.jsx)("option",{value:"\u10d8\u10e1\u10d0\u10dc\u10d8",children:"\u10d8\u10e1\u10d0\u10dc\u10d8"}),(0,l.jsx)("option",{value:"\u10d5\u10d0\u10e0\u10d9\u10d4\u10d7\u10d8\u10da\u10d8",children:"\u10d5\u10d0\u10e0\u10d9\u10d4\u10d7\u10d8\u10da\u10d8"}),(0,l.jsx)("option",{value:"\u10d0\u10d5\u10da\u10d0\u10d1\u10d0\u10e0\u10d8",children:"\u10d0\u10d5\u10da\u10d0\u10d1\u10d0\u10e0\u10d8"}),(0,l.jsx)("option",{value:"\u10e1\u10d0\u10db\u10d2\u10dd\u10e0\u10d8",children:"\u10e1\u10d0\u10db\u10d2\u10dd\u10e0\u10d8"}),(0,l.jsx)("option",{value:"\u10dc\u10d0\u10eb\u10d0\u10da\u10d0\u10d3\u10d4\u10d5\u10d8",children:"\u10dc\u10d0\u10eb\u10d0\u10da\u10d0\u10d3\u10d4\u10d5\u10d8"}),(0,l.jsx)("option",{value:"\u10d2\u10da\u10d3\u10d0\u10dc\u10d8",children:"\u10d2\u10da\u10d3\u10d0\u10dc\u10d8"}),(0,l.jsx)("option",{value:"\u10d6\u10e6\u10d5\u10d8\u10e1\u10e3\u10d1\u10d0\u10dc\u10d8",children:"\u10d6\u10e6\u10d5\u10d8\u10e1\u10e3\u10d1\u10d0\u10dc\u10d8"}),(0,l.jsx)("option",{value:"\u10e1\u10d0\u10dc\u10d6\u10dd\u10dc\u10d0",children:"\u10e1\u10d0\u10dc\u10d6\u10dd\u10dc\u10d0"}),(0,l.jsx)("option",{value:"\u10d3\u10d8\u10d3\u10e3\u10d1\u10d4-\u10e9\u10e3\u10e6\u10e3\u10e0\u10d4\u10d7\u10d8",children:"\u10d3\u10d8\u10d3\u10e3\u10d1\u10d4-\u10e9\u10e3\u10e6\u10e3\u10e0\u10d4\u10d7\u10d8"}),(0,l.jsx)("option",{value:"\u10d0\u10d5\u10ed\u10d0\u10da\u10d0",children:"\u10d0\u10d5\u10ed\u10d0\u10da\u10d0"}),(0,l.jsx)("option",{value:"\u10d5\u10d0\u10d6\u10d8\u10e1\u10e3\u10d1\u10d0\u10dc\u10d8",children:"\u10d5\u10d0\u10d6\u10d8\u10e1\u10e3\u10d1\u10d0\u10dc\u10d8"}),(0,l.jsx)("option",{value:"\u10da\u10d8\u10da\u10dd\u10e1 \u10d3\u10d0\u10e1\u10d0\u10ee\u10da\u10d4\u10d1\u10d0",children:"\u10da\u10d8\u10da\u10dd\u10e1 \u10d3\u10d0\u10e1\u10d0\u10ee\u10da\u10d4\u10d1\u10d0"}),(0,l.jsx)("option",{value:"\u10e4\u10dd\u10dc\u10d8\u10ed\u10d0\u10da\u10d0",children:"\u10e4\u10dd\u10dc\u10d8\u10ed\u10d0\u10da\u10d0"})]}),x.district&&(0,l.jsx)("p",{className:r.inputCard__errorMessages,children:x.district.message})]}),(0,l.jsxs)("div",{className:r.inputCard,children:[(0,l.jsx)("div",{className:r.inputCard__labelBox,children:(0,l.jsx)("label",{htmlFor:"profession",children:"\u10d0\u10d8\u10e0\u10e9\u10d8\u10d4 \u10de\u10e0\u10dd\u10e4\u10d4\u10e1\u10d8\u10d0"})}),(0,l.jsxs)("select",{id:"profession",className:"".concat(r.inputCard__input," ").concat(x.profession?r.inputCard__inputError:""),...m("profession",{required:"\u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8 \u10d5\u10d4\u10da\u10d8"}),children:[(0,l.jsx)("option",{value:"",children:"\u10de\u10e0\u10dd\u10e4\u10d4\u10e1\u10d8\u10d0"}),(0,l.jsx)("option",{value:"\u10db\u10d0\u10da\u10d8\u10d0\u10e0\u10d8",children:"\u10db\u10d0\u10da\u10d8\u10d0\u10e0\u10d8"}),(0,l.jsx)("option",{value:"\u10d9\u10d0\u10e4\u10d4\u10da-\u10db\u10d4\u10e2\u10da\u10d0\u10ee\u10d8\u10e1 \u10ee\u10d4\u10da\u10dd\u10e1\u10d0\u10dc\u10d8",children:"\u10d9\u10d0\u10e4\u10d4\u10da-\u10db\u10d4\u10e2\u10da\u10d0\u10ee\u10d8\u10e1 \u10ee\u10d4\u10da\u10dd\u10e1\u10d0\u10dc\u10d8"}),(0,l.jsx)("option",{value:"\u10d4\u10da\u10d4\u10e5\u10e2\u10e0\u10d8\u10d9\u10dd\u10e1\u10d8",children:"\u10d4\u10da\u10d4\u10e5\u10e2\u10e0\u10d8\u10d9\u10dd\u10e1\u10d8"}),(0,l.jsx)("option",{value:"\u10e1\u10d0\u10dc\u10e2\u10d4\u10e5\u10dc\u10d8\u10d9\u10d8",children:"\u10e1\u10d0\u10dc\u10e2\u10d4\u10e5\u10dc\u10d8\u10d9\u10d8"}),(0,l.jsx)("option",{value:"\u10d7\u10d0\u10d1\u10d0\u10e8\u10d8\u10e0-\u10db\u10e3\u10e7\u10d0\u10dd\u10e1 \u10ee\u10d4\u10da\u10dd\u10e1\u10d0\u10dc\u10d8",children:"\u10d7\u10d0\u10d1\u10d0\u10e8\u10d8\u10e0-\u10db\u10e3\u10e7\u10d0\u10dd\u10e1 \u10ee\u10d4\u10da\u10dd\u10e1\u10d0\u10dc\u10d8"}),(0,l.jsx)("option",{value:"\u10d2\u10d0\u10d7\u10d1\u10dd\u10d1\u10d0-\u10d2\u10d0\u10d2\u10e0\u10d8\u10da\u10d4\u10d1\u10d8\u10e1 \u10e1\u10d8\u10e1\u10e2\u10d4\u10db\u10d8\u10e1 \u10ee\u10d4\u10da\u10dd\u10e1\u10d0\u10dc\u10d8",children:"\u10d2\u10d0\u10d7\u10d1\u10dd\u10d1\u10d0-\u10d2\u10d0\u10d2\u10e0\u10d8\u10da\u10d4\u10d1\u10d8\u10e1 \u10e1\u10d8\u10e1\u10e2\u10d4\u10db\u10d0"}),(0,l.jsx)("option",{value:"\u10db\u10d4\u10e2\u10d0\u10da\u10dd \u10de\u10da\u10d0\u10e1\u10e2\u10db\u10d0\u10e1\u10d8\u10e1 \u10d9\u10d0\u10e0-\u10e4\u10d0\u10dc\u10ef\u10d0\u10e0\u10d0",children:"\u10db\u10d4\u10e2\u10d0\u10da\u10dd \u10de\u10da\u10d0\u10e1\u10e2\u10db\u10d0\u10e1\u10d8\u10e1 \u10d9\u10d0\u10e0-\u10e4\u10d0\u10dc\u10ef\u10d0\u10e0\u10d0"}),(0,l.jsx)("option",{value:"\u10e1\u10d0\u10ee\u10da\u10d8\u10e1 \u10d3\u10d0\u10da\u10d0\u10d2\u10d4\u10d1\u10d0",children:"\u10e1\u10d0\u10ee\u10da\u10d8\u10e1 \u10d3\u10d0\u10da\u10d0\u10d2\u10d4\u10d1\u10d0"}),(0,l.jsx)("option",{value:"\u10d8\u10d0\u10e2\u10d0\u10d9\u10d8\u10e1 \u10e1\u10d0\u10db\u10e3\u10e8\u10d0\u10dd\u10d4\u10d1\u10d8",children:"\u10d8\u10d0\u10e2\u10d0\u10d9\u10d8\u10e1 \u10e1\u10d0\u10db\u10e3\u10e8\u10d0\u10dd\u10d4\u10d1\u10d8"}),(0,l.jsx)("option",{value:"\u10e1\u10d0\u10ee\u10e3\u10e0\u10d0\u10d5\u10d8\u10e1 \u10e1\u10de\u10d4\u10ea\u10d8\u10d0\u10da\u10d8\u10e1\u10e2\u10d8",children:"\u10e1\u10d0\u10ee\u10e3\u10e0\u10d0\u10d5\u10d8\u10e1 \u10e1\u10de\u10d4\u10ea\u10d8\u10d0\u10da\u10d8\u10e1\u10e2\u10d8"}),(0,l.jsx)("option",{value:"\u10d3\u10d0\u10db\u10ee\u10db\u10d0\u10e0\u10d4(\u10db\u10e3\u10e8\u10d0)",children:"\u10d3\u10d0\u10db\u10ee\u10db\u10d0\u10e0\u10d4(\u10db\u10e3\u10e8\u10d0)"}),(0,l.jsx)("option",{value:"\u10e3\u10dc\u10d8\u10d5\u10d4\u10e0\u10e1\u10d0\u10da\u10e3\u10e0\u10d8 \u10ee\u10d4\u10da\u10dd\u10e1\u10d0\u10dc\u10d8",children:"\u10e3\u10dc\u10d8\u10d5\u10d4\u10e0\u10e1\u10d0\u10da\u10e3\u10e0\u10d8 \u10ee\u10d4\u10da\u10dd\u10e1\u10d0\u10dc\u10d8"}),(0,l.jsx)("option",{value:"\u10db\u10e8\u10d4\u10dc\u10d4\u10d1\u10d4\u10da\u10d8",children:"\u10db\u10e8\u10d4\u10dc\u10d4\u10d1\u10d4\u10da\u10d8"}),(0,l.jsx)("option",{value:"\u10d0\u10d5\u10d4\u10ef\u10d8\u10e1 \u10ee\u10d4\u10da\u10dd\u10e1\u10d0\u10dc\u10d8",children:"\u10d0\u10d5\u10d4\u10ef\u10d8\u10e1 \u10ee\u10d4\u10da\u10dd\u10e1\u10d0\u10dc\u10d8"}),(0,l.jsx)("option",{value:"\u10e1\u10d0\u10db\u10e8\u10d4\u10dc\u10d4\u10d1\u10da\u10dd \u10e1\u10de\u10d4\u10ea-\u10e2\u10d4\u10e5\u10dc\u10d8\u10d9\u10d0",children:"\u10e1\u10d0\u10db\u10e8\u10d4\u10dc\u10d4\u10d1\u10da\u10dd \u10e1\u10de\u10d4\u10ea-\u10e2\u10d4\u10e5\u10dc\u10d8\u10d9\u10d0"}),(0,l.jsx)("option",{value:"\u10d4\u10da-\u10e8\u10d4\u10db\u10d3\u10e3\u10e6\u10d4\u10d1\u10d4\u10da\u10d8",children:"\u10d4\u10da-\u10e8\u10d4\u10db\u10d3\u10e3\u10e6\u10d4\u10d1\u10d4\u10da\u10d8"}),(0,l.jsx)("option",{value:"\u10d0\u10e0\u10e5\u10d8\u10e2\u10d4\u10e5\u10e2\u10dd\u10e0\u10d8",children:"\u10d0\u10e0\u10e5\u10d8\u10e2\u10d4\u10e5\u10e2\u10dd\u10e0\u10d8"}),(0,l.jsx)("option",{value:"\u10ee\u10d8\u10e1 \u10d9\u10d0\u10e0\u10d8\u10e1 \u10ee\u10d4\u10da\u10dd\u10e1\u10d0\u10dc\u10d8",children:"\u10ee\u10d8\u10e1 \u10d9\u10d0\u10e0\u10d8\u10e1 \u10ee\u10d4\u10da\u10dd\u10e1\u10d0\u10dc\u10d8"})]}),x.profession&&(0,l.jsx)("p",{className:r.inputCard__errorMessages,children:x.profession.message})]}),(0,l.jsxs)("div",{className:r.inputCard,children:[(0,l.jsx)("div",{className:r.inputCard__labelBox,children:(0,l.jsx)("label",{htmlFor:"experience",children:"\u10d2\u10d0\u10db\u10dd\u10ea\u10d3\u10d8\u10da\u10d4\u10d1\u10d0"})}),(0,l.jsx)("input",{type:"number",id:"experience",className:"".concat(r.inputCard__input," ").concat(x.experience?r.inputCard__inputError:""),...m("experience",{required:"\u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8 \u10d5\u10d4\u10da\u10d8",min:{value:1,message:"\u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db 1 \u10ec\u10d4\u10da\u10d8"},max:{value:50,message:"\u10db\u10d0\u10e5\u10e1\u10d8\u10db\u10e3\u10db 50 \u10ec\u10d4\u10da\u10d8"},pattern:{value:/^[1-9]\d*$/,message:"\u10e4\u10dd\u10e0\u10db\u10d0\u10e2\u10d8 \u10d0\u10e0\u10d0\u10d5\u10d0\u10da\u10d8\u10d3\u10e3\u10e0\u10d8\u10d0"}}),onKeyDown:e=>{"-"!==e.key&&"E"!==e.key&&"e"!==e.key&&"."!==e.key||e.preventDefault()}}),x.experience&&(0,l.jsx)("p",{className:r.inputCard__errorMessages,children:x.experience.message})]}),(0,l.jsxs)("div",{className:r.inputCard,children:[(0,l.jsx)("div",{className:r.inputCard__labelBox,children:(0,l.jsx)("label",{htmlFor:"price",children:"1 \u10ec\u10d4\u10e0\u10e2\u10d8\u10da\u10d8\u10e1 - \u10d9\u10d5.\u10db \u10e6\u10d8\u10e0\u10d4\u10d1\u10e3\u10da\u10d4\u10d1\u10d0"})}),(0,l.jsx)("input",{type:"number",id:"price",className:"".concat(r.inputCard__input," ").concat(x.price?r.inputCard__inputError:""),...m("price",{required:"\u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8 \u10d5\u10d4\u10da\u10d8",pattern:{value:/^[1-9]\d*$/,message:"\u10e4\u10dd\u10e0\u10db\u10d0\u10e2\u10d8 \u10d0\u10e0\u10d0\u10d5\u10d0\u10da\u10d8\u10d3\u10e3\u10e0\u10d8\u10d0"}}),onKeyDown:e=>{"-"!==e.key&&"E"!==e.key&&"e"!==e.key&&"."!==e.key||e.preventDefault()}}),x.price&&(0,l.jsx)("p",{className:r.inputCard__errorMessages,children:x.price.message})]}),(0,l.jsxs)("div",{className:r.inputCard,children:[(0,l.jsxs)("div",{className:"callFee"===d?r.showCallFeeInfo:r.hideAdditionalInfo,children:[(0,l.jsx)("div",{className:r.xmarkContainer,onClick:()=>{C("")},children:(0,l.jsx)(t.g,{icon:o.bnw,className:r.faCircleXmark})}),(0,l.jsx)("p",{children:"\u10d3\u10d0\u10d0\u10ec\u10d4\u10e1\u10d4 \u10e8\u10d4\u10dc\u10d8 \u10db\u10d8\u10dc\u10d8\u10db\u10d0\u10da\u10e3\u10e0\u10d8 \u10d2\u10d0\u10db\u10dd\u10eb\u10d0\u10ee\u10d4\u10d1\u10d8\u10e1 \u10e1\u10d0\u10e4\u10d0\u10e1\u10e3\u10e0\u10d8. \u10d7\u10e3 \u10db\u10dd\u10ea\u10d4\u10db\u10e3\u10da \u10e1\u10d8\u10e2\u10e3\u10d0\u10ea\u10d8\u10d0\u10e8\u10d8 \u10db\u10dd\u10db\u10ee\u10db\u10d0\u10e0\u10d4\u10d1\u10d4\u10da\u10d8 \u10d2\u10d8\u10eb\u10d0\u10ee\u10d4\u10d1\u10e1 \u10db\u10d0\u10d2\u10d0\u10da\u10d8\u10d7\u10d0\u10d3: \u10d4\u10e0\u10d7\u10d8 \u10ec\u10d4\u10e0\u10e2\u10d8\u10da\u10d8\u10e1, \u10d4\u10e0\u10d7\u10d8 \u10d9\u10d5\u10d0\u10d3\u10e0\u10d0\u10e2\u10d8\u10e1 \u10d0\u10dc \u10e1\u10ee\u10d5\u10d0 \u10db\u10ea\u10d8\u10e0\u10d4 \u10e1\u10d0\u10e5\u10db\u10d8\u10e1\u10d7\u10d5\u10d8\u10e1, \u10e0\u10dd\u10db\u10da\u10d8\u10e1 \u10d0\u10dc\u10d0\u10d6\u10e6\u10d0\u10e3\u10e0\u10d4\u10d1\u10d8\u10e1 \u10d2\u10d0\u10db\u10dd\u10ea \u10d0\u10e0 \u10d2\u10d8\u10e6\u10d8\u10e0\u10e1 \u10d2\u10d0\u10db\u10dd\u10eb\u10d0\u10ee\u10d4\u10d1\u10d0\u10d6\u10d4 \u10ec\u10d0\u10e1\u10d5\u10da\u10d0."})]}),(0,l.jsx)("div",{className:r.inputCard__labelBox,children:(0,l.jsx)("label",{htmlFor:"callFee",children:"\u10db\u10d8\u10dc\u10d8\u10db\u10d0\u10da\u10e3\u10e0\u10d8 \u10d2\u10d0\u10db\u10dd\u10eb\u10d0\u10ee\u10d4\u10d1\u10d8\u10e1 \u10e1\u10d0\u10e4\u10d0\u10e1\u10e3\u10e0\u10d8"})}),(0,l.jsxs)("div",{className:r.inputCard__relative,children:[(0,l.jsx)("input",{type:"number",id:"callFee",className:"".concat(r.inputCard__input," ").concat(x.minCallFee?r.inputCard__inputError:""),...m("minCallFee",{required:"\u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8 \u10d5\u10d4\u10da\u10d8",pattern:{value:/^[1-9]\d*$/,message:"\u10e4\u10dd\u10e0\u10db\u10d0\u10e2\u10d8 \u10d0\u10e0\u10d0\u10d5\u10d0\u10da\u10d8\u10d3\u10e3\u10e0\u10d8\u10d0"}}),onKeyDown:e=>{"-"!==e.key&&"E"!==e.key&&"e"!==e.key&&"."!==e.key||e.preventDefault()}}),"callFee"===d?(0,l.jsx)("div",{children:(0,l.jsx)(t.g,{icon:o.EvL,className:r.faQuestion,onClick:()=>{C("")}})}):(0,l.jsx)(t.g,{icon:o.EvL,className:r.faQuestion,onClick:()=>{C("callFee")}})]}),x.minCallFee&&(0,l.jsx)("p",{className:r.inputCard__errorMessages,children:x.minCallFee.message})]}),(0,l.jsxs)("div",{className:r.inputCard,children:[(0,l.jsx)("div",{className:r.inputCard__labelBox,children:(0,l.jsx)("label",{htmlFor:"profilePicture",children:"\u10d0\u10e2\u10d5\u10d8\u10e0\u10d7\u10d4 \u10e1\u10e3\u10e0\u10d0\u10d7\u10d8"})}),(0,l.jsx)("input",{type:"file",id:"profilePicture",accept:".jpg,.jpeg,.png",className:"".concat(r.inputCard__input," ").concat(r.inputCard__imgInput," ").concat(x.profilePicture?r.inputCard__inputError:""),...m("profilePicture",{required:"\u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0 \u10e1\u10e3\u10e0\u10d0\u10d7\u10d8\u10e1 \u10d0\u10e2\u10d5\u10d8\u10e0\u10d7\u10d5\u10d0",validate:e=>{if(0===e.length)return"\u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0 \u10e1\u10e3\u10e0\u10d0\u10d7\u10d8\u10e1 \u10d0\u10e2\u10d5\u10d8\u10e0\u10d7\u10d5\u10d0";const a=e[0];return["image/jpeg","image/png","image/jpg"].includes(a.type)?!(a.size>5242880)||"\u10e1\u10e3\u10e0\u10d0\u10d7\u10d8 \u10d0\u10e0 \u10e3\u10dc\u10d3\u10d0 \u10d0\u10e6\u10d4\u10db\u10d0\u10e2\u10d4\u10d1\u10dd\u10d3\u10d4\u10e1 5MB-\u10e1":"\u10d3\u10d0\u10e1\u10d0\u10e8\u10d5\u10d4\u10d1\u10d8\u10d0 \u10db\u10ee\u10dd\u10da\u10dd\u10d3 JPEG \u10d3\u10d0 PNG \u10e4\u10dd\u10e0\u10db\u10d0\u10e2\u10d4\u10d1\u10d8"}})}),x.profilePicture&&(0,l.jsx)("p",{className:r.inputCard__errorMessages,children:x.profilePicture.message})]}),(0,l.jsxs)("div",{className:"".concat(r.inputCard," ").concat(r.cardOfTextarea),children:[(0,l.jsxs)("div",{className:"moreInformation"===d?r.showMoreInfo:r.hideAdditionalInfo,children:[(0,l.jsx)("div",{className:r.xmarkContainer,onClick:()=>{C("")},children:(0,l.jsx)(t.g,{icon:o.bnw,className:r.faCircleXmark})}),(0,l.jsx)("p",{children:"\u10db\u10dd\u10d2\u10d5\u10d0\u10ec\u10dd\u10d3\u10d4 \u10d3\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d8\u10d7\u10d8 \u10d8\u10dc\u10e4\u10dd\u10e0\u10db\u10d0\u10ea\u10d8\u10d0 \u10e8\u10d4\u10dc\u10d8 \u10e1\u10d0\u10e5\u10db\u10dc\u10d8\u10d0\u10dc\u10dd\u10d1\u10d8\u10e1\u10d0 \u10d3\u10d0 \u10d3\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d8\u10d7\u10d8 \u10de\u10d8\u10e0\u10dd\u10d1\u10d4\u10d1\u10d8\u10e1 \u10e8\u10d4\u10e1\u10d0\u10ee\u10d4\u10d1. \u10d4\u10e1 \u10d3\u10d0\u10d4\u10ee\u10db\u10d0\u10e0\u10d4\u10d1\u10d0 \u10ee\u10d4\u10da\u10dd\u10e1\u10dc\u10d8\u10e1 \u10db\u10d0\u10eb\u10d8\u10d4\u10d1\u10da\u10d4\u10d1\u10e1 \u10e1\u10d0\u10e1\u10e3\u10e0\u10d5\u10d4\u10da\u10d8 \u10ee\u10d4\u10da\u10dd\u10e1\u10dc\u10d8\u10e1 \u10e8\u10d4\u10e0\u10e9\u10d4\u10d5\u10d0\u10e8\u10d8."})]}),(0,l.jsx)("div",{className:r.inputCard__labelBox,children:(0,l.jsx)("label",{htmlFor:"moreInformation",children:"\u10d3\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d8\u10d7\u10d8 \u10d8\u10dc\u10e4\u10dd\u10e0\u10db\u10d0\u10ea\u10d8\u10d0"})}),(0,l.jsxs)("div",{className:r.inputCard__relative,children:[(0,l.jsx)("textarea",{id:"moreInformation",className:r.inputCard__textarea,rows:4,placeholder:"\u10e8\u10d4\u10d8\u10e7\u10d5\u10d0\u10dc\u10d4 \u10e2\u10d4\u10e5\u10e1\u10e2\u10d8 \u10d0\u10e5...",...m("moreInformation",{maxLength:{value:300,message:"\u10db\u10d0\u10e5\u10e1\u10d8\u10db\u10e3\u10db 300 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd"}})}),"moreInformation"===d?(0,l.jsx)("div",{children:(0,l.jsx)(t.g,{icon:o.EvL,className:r.faQuestion,onClick:()=>{C("")}})}):(0,l.jsx)(t.g,{icon:o.EvL,className:r.faQuestion,onClick:()=>{C("moreInformation")}})]}),x.moreInformation&&(0,l.jsx)("p",{className:r.inputCard__errorMessages,children:x.moreInformation.message})]})]}),(0,l.jsx)("div",{className:r.buttonContainer,children:(0,l.jsx)("button",{type:"submit",className:r.submitButton,children:"\u10e0\u10d4\u10d2\u10d8\u10e1\u10e2\u10e0\u10d0\u10ea\u10d8\u10d0"})})]})]})})}}}]);
//# sourceMappingURL=357.4d044e83.chunk.js.map