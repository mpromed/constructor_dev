import i from"./ActionItem-accd226d.js";import{a as n,o as s,c as r,b as t,w as a,D as _,F as b}from"./index-f7c8c9c8.js";const g={__name:"ActionButton",props:["button"],setup(e){return(f,o)=>{const l=n("el-input"),m=n("el-form-item"),u=n("el-col");return s(),r(b,null,[t(u,{span:8},{default:a(()=>[t(m,{label:"Текст кнопки:"},{default:a(()=>[t(l,{modelValue:e.button.buttonName,"onUpdate:modelValue":o[0]||(o[0]=c=>e.button.buttonName=c)},null,8,["modelValue"])]),_:1})]),_:1}),t(i,{action:e.button.action},null,8,["action"]),t(_,{image:e.button.image,hideLabel:!0},null,8,["image"])],64)}}};export{g as default};
