import{r as B,a as c,o as s,c as f,F as y,e as T,f as p,w as a,b as n,g as k,x as U,k as u,A as P,C as F,B as G,N as A,v as _,G as E,O,P as Q,d as R}from"./index-eb00b459.js";import j from"./WarningParameters-c45956ff.js";import q from"./ActionButton-9125a8d2.js";import"./ColorItem-67563fc3.js";import"./ActionItem-b3190676.js";const z={class:"content-card-header"},H={key:0},Y={__name:"ContentSections",props:["componentData"],setup(w){const e=w,i=B(e.componentData.sectionsList.map(()=>!0)),g=()=>{e.componentData.sectionsList.push({buttonName:"",image:{imageURL:"",label:""},action:{name:"moveToStep",isSection:!0,internalId:0,checkQuestion:!1}}),i.value.push(!0)},L=t=>{if(t!==0){let l=e.componentData.sectionsList[t];e.componentData.sectionsList.splice(t,1),e.componentData.sectionsList.splice(t-1,0,l)}},b=t=>{if(t!==e.componentData.sectionsList.length-1){let l=e.componentData.sectionsList[t];e.componentData.sectionsList.splice(t,1),e.componentData.sectionsList.splice(t+1,0,l)}},v=t=>{i.value[t]=!i.value[t]},h=t=>{e.componentData.sectionsList.splice(t,1)};return(t,l)=>{const r=c("el-button"),S=c("el-card"),V=c("el-col"),C=c("el-switch"),D=c("el-form-item"),$=c("el-row"),N=c("el-divider");return s(),f(y,null,[(s(!0),f(y,null,T(e.componentData.sectionsList,(m,o)=>(s(),p(Q,{name:"sections",key:o},{default:a(()=>[n(S,{"body-style":"padding: 0;"},{header:a(()=>[k("div",z,[k("span",null,"Секция "+U(o+1),1),k("div",null,[n(r,{type:"danger",icon:u(P),plain:"",onClick:d=>h(o)},null,8,["icon","onClick"]),n(r,{type:"success",icon:u(F),plain:"",onClick:d=>L(o)},null,8,["icon","onClick"]),n(r,{type:"success",icon:u(G),plain:"",onClick:d=>b(o)},null,8,["icon","onClick"]),i.value[o]===!0?(s(),p(r,{key:0,type:"primary",icon:u(A),plain:"",onClick:d=>v(o)},null,8,["icon","onClick"])):_("",!0),i.value[o]===!1?(s(),p(r,{key:1,type:"primary",icon:u(E),plain:"",onClick:d=>v(o)},null,8,["icon","onClick"])):_("",!0)])])]),default:a(()=>[n(O,{class:"content-card",name:"section"},{default:a(()=>[i.value[o]===!0?(s(),f("div",H,[n(q,{button:m},null,8,["button"])])):_("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),n($,null,{default:a(()=>[n(V,{span:6},{default:a(()=>[n(r,{onClick:g,type:"success",round:""},{default:a(()=>[R("+ Добавить секцию")]),_:1})]),_:1}),n(D,{label:"Помечать пройденные секции?"},{default:a(()=>[n(C,{modelValue:e.componentData.markCompletedSections,"onUpdate:modelValue":l[0]||(l[0]=m=>e.componentData.markCompletedSections=m),style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue"])]),_:1})]),_:1}),n(N),e.componentData.warnings!=null?(s(),p(D,{key:0,label:"Предупреждения:"},{default:a(()=>[n(C,{modelValue:e.componentData.warnings,"onUpdate:modelValue":l[1]||(l[1]=m=>e.componentData.warnings=m)},null,8,["modelValue"])]),_:1})):_("",!0),e.componentData.warningParameters!=null?(s(),p(j,{key:1,parameters:e.componentData.warningParameters},null,8,["parameters"])):_("",!0)],64)}}};export{Y as default};
