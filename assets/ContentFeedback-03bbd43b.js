import{r as D,q as b,a as u,o as m,c,b as t,w as a,f as _,k as w,l as v,T as x,v as d,F as y}from"./index-119697d4.js";const U={key:0},C={key:0},S={__name:"ContentFeedback",props:["componentData"],setup(k){const o=k,p=D(!1),r=D(!1);return b(()=>{}),(T,e)=>{const i=u("el-input"),s=u("el-form-item"),V=u("el-switch"),n=u("el-col"),f=u("el-button");return m(),c(y,null,[t(s,{label:"Заголовок"},{default:a(()=>[t(i,{modelValue:o.componentData.title,"onUpdate:modelValue":e[0]||(e[0]=l=>o.componentData.title=l),width:"30vw"},null,8,["modelValue"])]),_:1}),t(s,{label:"Звезды"},{default:a(()=>[t(V,{modelValue:o.componentData.showStars,"onUpdate:modelValue":e[1]||(e[1]=l=>o.componentData.showStars=l)},null,8,["modelValue"])]),_:1}),o.componentData.showStars?(m(),_(s,{key:0,label:"Описание"},{default:a(()=>[t(n,{span:22},{default:a(()=>[t(i,{modelValue:o.componentData.starsDescription,"onUpdate:modelValue":e[2]||(e[2]=l=>o.componentData.starsDescription=l),width:"30vw"},null,8,["modelValue"])]),_:1}),t(n,{span:2},{default:a(()=>[t(f,{type:"primary",icon:w(v),plain:"",onClick:e[3]||(e[3]=l=>p.value=!p.value)},null,8,["icon"])]),_:1}),t(n,{span:22},{default:a(()=>[p.value?(m(),c("div",U,[t(x,{modelValue:o.componentData.starsDescription,"onUpdate:modelValue":e[4]||(e[4]=l=>o.componentData.starsDescription=l)},null,8,["modelValue"])])):d("",!0)]),_:1})]),_:1})):d("",!0),t(s,{label:"Текстовое поле"},{default:a(()=>[t(V,{modelValue:o.componentData.showText,"onUpdate:modelValue":e[5]||(e[5]=l=>o.componentData.showText=l)},null,8,["modelValue"])]),_:1}),o.componentData.showText?(m(),_(s,{key:1,label:"Описание"},{default:a(()=>[t(n,{span:22},{default:a(()=>[t(i,{modelValue:o.componentData.text,"onUpdate:modelValue":e[6]||(e[6]=l=>o.componentData.text=l),width:"30vw"},null,8,["modelValue"])]),_:1}),t(n,{span:2},{default:a(()=>[t(f,{type:"primary",icon:w(v),plain:"",onClick:e[7]||(e[7]=l=>r.value=!r.value)},null,8,["icon"])]),_:1}),t(n,{span:22},{default:a(()=>[r.value?(m(),c("div",C,[t(x,{modelValue:o.componentData.text,"onUpdate:modelValue":e[8]||(e[8]=l=>o.componentData.text=l)},null,8,["modelValue"])])):d("",!0)]),_:1})]),_:1})):d("",!0)],64)}}};export{S as default};
