import{r as h,S as v,a as l,o as w,f as C,w as n,b as a}from"./index-1068788b.js";const g={__name:"ColorItem",props:["modelValue"],emits:["update:modelValue"],setup(s,{emit:p}){const m=s,c=p,e=h(m.modelValue),d=o=>{e.value=o,c("update:modelValue",o)};return v(()=>m.modelValue,o=>{e.value=o}),(o,t)=>{const _=l("el-input"),r=l("el-col"),i=l("el-color-picker"),V=l("el-row"),f=l("el-form-item");return w(),C(f,{label:"Цвет:"},{default:n(()=>[a(V,{gutter:18},{default:n(()=>[a(r,{span:15},{default:n(()=>[a(_,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=u=>e.value=u),"show-alpha":"",placeholder:"Выберите цвет"},null,8,["modelValue"])]),_:1}),a(r,{span:3},{default:n(()=>[a(i,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=u=>e.value=u),"show-alpha":"",onActiveChange:d},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}}};export{g as default};
