import{e as d,o,c as l,a,f as g,d as v,g as _,n as e,w as u}from"./index-BEc_em8N.js";const C={},f={href:"#",class:"logo"};function h(p,n){return o(),l("a",f,n[0]||(n[0]=[a("span",{class:"logo__icon"},[a("svg",{width:"30",height:"26",viewBox:"0 0 30 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.5617 8.73955C13.3989 8.73955 13.2361 8.631 13.2361 8.46818C12.8019 7.1656 10.9565 1.304 10.9565 1.304C10.848 0.92408 11.0108 0.65271 11.3365 0.65271H12.8019C13.1818 0.65271 13.5617 0.92408 13.6702 1.304C13.6702 1.304 16.384 6.46004 17.3066 8.14253C17.3609 8.25108 17.3609 8.4139 17.3066 8.52245C17.2523 8.631 17.1438 8.68527 16.981 8.68527C16.0583 8.73955 14.2673 8.73955 13.5617 8.73955ZM12.9647 25.3474H11.4993C11.1736 25.3474 10.9565 25.076 11.1194 24.6961L14.3758 13.5699C9.21977 13.6785 4.5522 12.9187 2.81543 12.3216C2.54406 12.2131 2.38124 11.996 2.32696 11.7246C1.94704 10.422 0.807288 6.51431 0.807288 6.51431C0.753014 6.40576 0.861562 6.18866 1.07866 6.18866C1.51285 6.18866 1.78422 6.18866 2.32696 6.18866C2.65261 6.18866 2.97825 6.40576 3.14107 6.67713C3.73809 7.59979 4.98639 9.60793 5.36631 10.2049C5.42059 10.3135 5.58341 10.3678 5.69196 10.3678C8.02574 10.3678 27.7272 10.3678 27.7272 10.3678C28.4328 10.422 29.0298 10.9105 29.1926 11.6161C29.3555 12.3216 28.9755 13.0272 28.3243 13.2986C28.0529 13.4071 27.8358 13.5157 27.7272 13.5157H19.3148L13.8873 24.6418C13.7245 25.076 13.3446 25.3474 12.9647 25.3474Z",fill:"#1D2D42"})])],-1),a("span",{class:"logo__title"},[a("span",null,"Titan Air"),g(" service")],-1)]))}const x=d(C,[["render",h],["__scopeId","data-v-8d2581bf"]]),m={action:"",class:"search-form"},w=v({__name:"SearchFormItem",props:{transparent:{type:Boolean},iconVariant:{}},setup(p){const n=_(!1);function s(){n.value=!n.value}return(r,i)=>(o(),l("form",m,[a("input",{type:"text",class:e(["search-form__input",{"search-form__input--active":n.value}])},null,2),a("a",{href:"#",ref:"icon",class:e([r.transparent||n.value?"icon icon--transparent":"icon","search-form__icon",{"search-form__icon--active":n.value}]),onClick:u(s,["prevent"])},[(o(),l("svg",{class:e(["variant-"+(r.iconVariant==="dark"?"dark":"light")]),width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.6084 13.7175L12.1325 10.2416C12.114 10.2232 12.0923 10.2103 12.073 10.1931C12.757 9.15558 13.1561 7.91368 13.1561 6.57813C13.1561 2.94511 10.211 0 6.57807 0C2.94511 0 0 2.94511 0 6.57807C0 10.211 2.94505 13.1561 6.578 13.1561C7.91361 13.1561 9.15545 12.757 10.1929 12.073C10.2101 12.0923 10.223 12.1139 10.2415 12.1324L13.7174 15.6084C14.2396 16.1305 15.0861 16.1305 15.6084 15.6084C16.1305 15.0862 16.1305 14.2396 15.6084 13.7175ZM6.57807 10.8757C4.20446 10.8757 2.28035 8.95161 2.28035 6.57807C2.28035 4.20446 4.20453 2.28035 6.57807 2.28035C8.95155 2.28035 10.8757 4.20453 10.8757 6.57807C10.8757 8.95161 8.95155 10.8757 6.57807 10.8757Z",fill:"#1D2D42"},null,-1)]),2))],2)]))}}),B=d(w,[["__scopeId","data-v-8763d2d1"]]),L=v({__name:"LangSwitcherItem",props:{transparent:{type:Boolean},variant:{}},setup(p){const n=p,s=_(!1),r=_(null);function i(){var t;s.value=!s.value,n.variant==="darken"&&((t=r.value)==null||t.classList.toggle("lang__current--darken"))}return(t,c)=>(o(),l("div",{class:"lang",onClick:i},[a("div",{class:e([t.transparent?"icon icon--transparent":"icon","lang__wrapper"])},[a("p",{ref_key:"currentLang",ref:r,class:e(["lang__current",{"lang__current--darken":t.variant==="darken"}])}," En ",2),a("span",{class:e(["lang__icon",{"lang__icon--rotate":s.value}])},[(o(),l("svg",{class:e(["variant-"+(t.variant==="darken"?"dark":"light")]),width:"6",height:"3",viewBox:"0 0 6 3",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c[0]||(c[0]=[a("path",{d:"M0 0L6.00009 9.10372e-05L3.00009 3L0 0Z",fill:"white"},null,-1)]),2))],2)],2),a("div",{class:e(["lang-variants",{"lang-variants--open":s.value}])},c[1]||(c[1]=[a("span",{class:"icon lang-variants__value"},"Ru",-1),a("span",{class:"icon lang-variants__value"},"No",-1)]),2)]))}}),I=d(L,[["__scopeId","data-v-78563dd0"]]);export{x as L,B as S,I as a};