import{a as o,o as c,c as _,b as e,w as t,F as V,e as I,f as d,D as P,k as W,A as v,v as b,d as y}from"./index-0acbc085.js";const U={__name:"ContentImages",props:["componentData","isSingleImage"],setup(n){const m=n,k=()=>{m.componentData.imagesList.push({imageURL:"",label:""})},D=r=>{m.componentData.imagesList.splice(r,1)};return(r,l)=>{const s=o("el-input-number"),i=o("el-form-item"),u=o("el-col"),x=o("el-checkbox"),g=o("el-row"),p=o("el-button"),C=o("el-divider");return c(),_(V,null,[e(g,null,{default:t(()=>[e(u,{span:16},{default:t(()=>[e(i,{label:"Ширина картинок, стандартный экран (%):"},{default:t(()=>[e(s,{modelValue:n.componentData.imagesWidthPercent,"onUpdate:modelValue":l[0]||(l[0]=a=>n.componentData.imagesWidthPercent=a),min:1,max:100},null,8,["modelValue"])]),_:1}),e(i,{label:"Ширина картинок, маленький экран (%):"},{default:t(()=>[e(s,{modelValue:n.componentData.imagesWidthPercentSmall,"onUpdate:modelValue":l[1]||(l[1]=a=>n.componentData.imagesWidthPercentSmall=a),min:1,max:100},null,8,["modelValue"])]),_:1}),e(i,{label:"Ширина картинок, мобильный экран (%):"},{default:t(()=>[e(s,{modelValue:n.componentData.imagesWidthPercentMobile,"onUpdate:modelValue":l[2]||(l[2]=a=>n.componentData.imagesWidthPercentMobile=a),min:1,max:100},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{span:2},{default:t(()=>[e(i,{label:"Масштабирование картинки"},{default:t(()=>[e(x,{modelValue:n.componentData.clickEnlarge,"onUpdate:modelValue":l[3]||(l[3]=a=>n.componentData.clickEnlarge=a),size:"large"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),(c(!0),_(V,null,I(m.componentData.imagesList,(a,f)=>(c(),d(g,{key:f},{default:t(()=>[e(u,{span:22},{default:t(()=>[e(P,{image:a},null,8,["image"])]),_:2},1024),e(u,{span:2},{default:t(()=>[m.isSingleImage?b("",!0):(c(),d(p,{key:0,type:"danger",icon:W(v),circle:"",onClick:L=>D(f)},null,8,["icon","onClick"]))]),_:2},1024),e(C)]),_:2},1024))),128)),m.isSingleImage?b("",!0):(c(),d(p,{key:0,onClick:k,type:"success",round:""},{default:t(()=>[y("+ Добавить картинку")]),_:1}))],64)}}};export{U as default};
