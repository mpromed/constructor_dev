import{r as w,a,o as u,c as d,b as e,w as n,k as D,l as x,T as v,v as b,F as k}from"./index-ee0765d3.js";import g from"./WarningParameters-91e46de5.js";import"./ColorItem-c82f8a6c.js";const y={key:0},A={__name:"ContentAcceptCheckbox",props:["componentData"],setup(r){const t=r,s=w(!1),i=()=>{s.value=!s.value};return(C,o)=>{const _=a("el-input"),c=a("el-col"),f=a("el-button"),m=a("el-form-item"),p=a("el-switch"),V=a("el-divider");return u(),d(k,null,[e(m,{label:"Текст дисклеймера:"},{default:n(()=>[e(c,{span:22},{default:n(()=>[e(_,{modelValue:t.componentData.text,"onUpdate:modelValue":o[0]||(o[0]=l=>t.componentData.text=l),width:"30vw"},null,8,["modelValue"])]),_:1}),e(c,{span:2},{default:n(()=>[e(f,{type:"primary",icon:D(x),plain:"",onClick:i},null,8,["icon"])]),_:1})]),_:1}),e(c,{span:24},{default:n(()=>[s.value?(u(),d("div",y,[e(v,{modelValue:t.componentData.text,"onUpdate:modelValue":o[1]||(o[1]=l=>t.componentData.text=l)},null,8,["modelValue"])])):b("",!0)]),_:1}),e(m,null,{default:n(()=>[e(m,{label:"Начальное значение чекбокса:",style:{"margin-right":"20px"}},{default:n(()=>[e(p,{modelValue:t.componentData.isAccepted,"onUpdate:modelValue":o[2]||(o[2]=l=>t.componentData.isAccepted=l),style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue"])]),_:1}),e(m,{label:"Проверка чекбокса:"},{default:n(()=>[e(p,{modelValue:t.componentData.checkQuestion,"onUpdate:modelValue":o[3]||(o[3]=l=>t.componentData.checkQuestion=l),style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue"])]),_:1})]),_:1}),e(V),e(m,{label:"Предупреждения:"},{default:n(()=>[e(p,{modelValue:t.componentData.warnings,"onUpdate:modelValue":o[4]||(o[4]=l=>t.componentData.warnings=l)},null,8,["modelValue"])]),_:1}),e(g,{parameters:t.componentData.warningParameters},null,8,["parameters"])],64)}}};export{A as default};
