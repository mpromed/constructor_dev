import{M as _,a as n,o as b,c as F,b as e,w as a,g as f,I as V,F as D}from"./index-1068788b.js";const y={__name:"ContentResult",props:["componentData"],setup(u){const o=u,c=_(()=>({color:o.componentData.textColor,fontSize:o.componentData.FontSize+"px",fontFamily:o.componentData.FontFamily,fontWeight:o.componentData.FontBold?"bold":"normal"}));return(x,l)=>{const s=n("el-color-picker"),m=n("el-form-item"),r=n("el-input-number"),p=n("el-option"),d=n("el-select"),i=n("el-checkbox");return b(),F(D,null,[e(m,{label:"Цвет текста"},{default:a(()=>[e(s,{modelValue:o.componentData.textColor,"onUpdate:modelValue":l[0]||(l[0]=t=>o.componentData.textColor=t)},null,8,["modelValue"])]),_:1}),e(m,{label:"Размер шрифта"},{default:a(()=>[e(r,{modelValue:o.componentData.FontSize,"onUpdate:modelValue":l[1]||(l[1]=t=>o.componentData.FontSize=t),min:1,max:100},null,8,["modelValue"])]),_:1}),e(m,{label:"Шрифт"},{default:a(()=>[e(d,{modelValue:o.componentData.FontFamily,"onUpdate:modelValue":l[2]||(l[2]=t=>o.componentData.FontFamily=t)},{default:a(()=>[e(p,{label:"Arial",value:"Arial"}),e(p,{label:"Times New Roman",value:"Times New Roman"}),e(p,{label:"Open Sans",value:"Open Sans"}),e(p,{label:"Montserrat",value:"Montserrat"}),e(p,{label:"Helvetica",value:"Helvetica"})]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"Жирное начертание"},{default:a(()=>[e(i,{modelValue:o.componentData.FontBold,"onUpdate:modelValue":l[3]||(l[3]=t=>o.componentData.FontBold=t)},null,8,["modelValue"])]),_:1}),e(m,null,{default:a(()=>[f("span",{style:V(c.value)},"75%",4)]),_:1})],64)}}};export{y as default};
