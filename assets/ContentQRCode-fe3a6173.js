import{r as q,a as l,o as d,c as _,b as e,w as t,F as f,e as x,f as g,d as V,x as v,k as j,A as O}from"./index-cf884484.js";const R={__name:"ContentQRCode",props:["componentData"],setup(b){const n=b;q(!1);const D=s=>{n.componentData.questionsObject.variants.splice(s,1)},k=()=>{let s=n.componentData.questionsObject.variants.length+1;n.componentData.questionsObject.variants.push({id:s,name:""})};return(s,u)=>{const p=l("el-input"),o=l("el-col"),c=l("el-form-item"),C=l("el-text"),m=l("el-button");return d(),_(f,null,[e(c,{label:"Размер QR-кода:"},{default:t(()=>[e(o,{span:22},{default:t(()=>[e(p,{modelValue:n.componentData.sizeQR,"onUpdate:modelValue":u[0]||(u[0]=a=>n.componentData.sizeQR=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(c,{label:"Текст вопроса:"}),e(o,{span:24},{default:t(()=>[e(p,{modelValue:n.componentData.question,"onUpdate:modelValue":u[1]||(u[1]=a=>n.componentData.question=a)},null,8,["modelValue"]),e(c,{label:"Варианты ответов:"}),(d(!0),_(f,null,x(n.componentData.questionsObject.variants,(a,r)=>(d(),g(c,null,{default:t(()=>[e(C,null,{default:t(()=>[V(v(r+1),1)]),_:2},1024),e(o,{span:22},{default:t(()=>[e(p,{modelValue:a.name,"onUpdate:modelValue":i=>a.name=i},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{span:1},{default:t(()=>[e(m,{class:"single-delete-btn",type:"danger",icon:j(O),circle:"",onClick:i=>D(r)},null,8,["icon","onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:1}),e(o,{span:2},{default:t(()=>[e(m,{onClick:k,type:"success",round:""},{default:t(()=>[V("+ Добавить вариант")]),_:1})]),_:1})],64)}}};export{R as default};
