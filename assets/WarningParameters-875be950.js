import{r as c,a as n,o as p,c as d,b as e,w as o,k as V,l as x,T as b,v,D as w,F as g}from"./index-e02e31f6.js";import k from"./ColorItem-8dc025c2.js";const C={key:0},B={__name:"WarningParameters",props:["parameters"],emits:["deleteCombination"],setup(i,{emit:E}){const t=i,m=c(!1),_=()=>{m.value=!m.value};return(T,a)=>{const u=n("el-input"),r=n("el-col"),f=n("el-button"),s=n("el-form-item");return p(),d(g,null,[e(s,{label:"Текст подсказки:"},{default:o(()=>[e(r,{span:22},{default:o(()=>[e(u,{modelValue:t.parameters.text,"onUpdate:modelValue":a[0]||(a[0]=l=>t.parameters.text=l),width:"30vw"},null,8,["modelValue"])]),_:1}),e(r,{span:2},{default:o(()=>[e(f,{type:"primary",icon:V(x),plain:"",onClick:_},null,8,["icon"])]),_:1})]),_:1}),e(r,{span:24},{default:o(()=>[m.value?(p(),d("div",C,[e(b,{modelValue:t.parameters.text,"onUpdate:modelValue":a[1]||(a[1]=l=>t.parameters.text=l)},null,8,["modelValue"])])):v("",!0)]),_:1}),e(k,{modelValue:t.parameters.color,"onUpdate:modelValue":a[2]||(a[2]=l=>t.parameters.color=l)},null,8,["modelValue"]),e(s,{label:"Картинка:"},{default:o(()=>[e(w,{image:t.parameters.image},null,8,["image"])]),_:1}),e(s,{label:"Время показа:"},{default:o(()=>[e(u,{modelValue:t.parameters.showTime,"onUpdate:modelValue":a[3]||(a[3]=l=>t.parameters.showTime=l)},null,8,["modelValue"])]),_:1})],64)}}};export{B as default};