import f from"./WarningParameters-249c1eb4.js";import{a as n,o as b,c as C,b as e,w as a,k as V,A as w,F as g}from"./index-24ef0a00.js";import"./ColorItem-97946e7a.js";const B={__name:"WarningCombination",props:["parameters"],emits:["deleteCombination"],setup(s,{emit:i}){const t=s,p=i,c=()=>{p("deleteCombination",t.parameters.name)};return(k,o)=>{const u=n("el-input"),r=n("el-col"),_=n("el-button"),d=n("el-switch"),m=n("el-form-item");return b(),C(g,null,[e(m,{label:"Комбинация:"},{default:a(()=>[e(r,{span:15},{default:a(()=>[e(u,{modelValue:t.parameters.name,"onUpdate:modelValue":o[0]||(o[0]=l=>t.parameters.name=l)},null,8,["modelValue"])]),_:1}),e(r,{span:4},{default:a(()=>[e(_,{type:"danger",icon:V(w),circle:"",onClick:o[1]||(o[1]=l=>c())},null,8,["icon"])]),_:1}),e(m,{label:"Правильная:"},{default:a(()=>[e(d,{modelValue:t.parameters.isCorrect,"onUpdate:modelValue":o[2]||(o[2]=l=>t.parameters.isCorrect=l),style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{parameters:t.parameters.combinationWarning},null,8,["parameters"])],64)}}};export{B as default};
