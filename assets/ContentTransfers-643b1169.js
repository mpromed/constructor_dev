import{r as N,a as l,o,c as k,F as C,e as I,f as u,w as s,b as n,g as v,x as S,k as p,A as U,C as A,B as F,H as G,v as _,G as P,I as R,J as E,d as H}from"./index-24ef0a00.js";import J from"./WarningParameters-249c1eb4.js";import Q from"./ActionButton-dbe95b88.js";import"./ColorItem-97946e7a.js";import"./ActionItem-ceb489bb.js";const j={class:"content-card-header"},q={key:0},X={__name:"ContentTransfers",props:["componentData"],setup(r){const t=r,c=N(t.componentData.transfersList.map(()=>!0)),D=()=>{t.componentData.transfersList.push({buttonName:"",image:{imageURL:"",label:""},action:{name:"moveToStep",internalId:0,checkQuestion:!1,trackRepeatAnswer:!1}}),c.value.push(!0)},w=e=>{if(e!==0){let i=t.componentData.transfersList[e];t.componentData.transfersList.splice(e,1),t.componentData.transfersList.splice(e-1,0,i)}},g=e=>{if(e!==t.componentData.transfersList.length-1){let i=t.componentData.transfersList[e];t.componentData.transfersList.splice(e,1),t.componentData.transfersList.splice(e+1,0,i)}},y=e=>{c.value[e]=!c.value[e]},L=e=>{t.componentData.transfersList.splice(e,1)};return(e,i)=>{const m=l("el-button"),b=l("el-card"),h=l("el-col"),T=l("el-row"),V=l("el-divider"),$=l("el-switch"),B=l("el-form-item");return o(),k(C,null,[(o(!0),k(C,null,I(t.componentData.transfersList,(d,a)=>(o(),u(E,{name:"transfers",key:a},{default:s(()=>[n(b,{"body-style":"padding: 0;"},{header:s(()=>[v("div",j,[v("span",null,"Переход "+S(a+1),1),v("div",null,[n(m,{type:"danger",icon:p(U),plain:"",onClick:f=>L(a)},null,8,["icon","onClick"]),n(m,{type:"success",icon:p(A),plain:"",onClick:f=>w(a)},null,8,["icon","onClick"]),n(m,{type:"success",icon:p(F),plain:"",onClick:f=>g(a)},null,8,["icon","onClick"]),c.value[a]===!0?(o(),u(m,{key:0,type:"primary",icon:p(G),plain:"",onClick:f=>y(a)},null,8,["icon","onClick"])):_("",!0),c.value[a]===!1?(o(),u(m,{key:1,type:"primary",icon:p(P),plain:"",onClick:f=>y(a)},null,8,["icon","onClick"])):_("",!0)])])]),default:s(()=>[n(R,{class:"content-card",name:"section"},{default:s(()=>[c.value[a]===!0?(o(),k("div",q,[n(Q,{button:d},null,8,["button"])])):_("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),n(T,null,{default:s(()=>[n(h,{span:6},{default:s(()=>[n(m,{onClick:D,type:"success",round:""},{default:s(()=>[H("+ Добавить переход")]),_:1})]),_:1})]),_:1}),n(V),r.componentData.warnings?(o(),u(B,{key:0,label:"Предупреждения:"},{default:s(()=>[n($,{modelValue:r.componentData.warnings,"onUpdate:modelValue":i[0]||(i[0]=d=>r.componentData.warnings=d)},null,8,["modelValue"])]),_:1})):_("",!0),r.componentData.warningParameters?(o(),u(J,{key:1,parameters:r.componentData.warningParameters},null,8,["parameters"])):_("",!0)],64)}}};export{X as default};
