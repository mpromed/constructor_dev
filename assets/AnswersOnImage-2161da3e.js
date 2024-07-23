import{_ as Y,r as L,q as j,G as I,a as m,o as i,c as u,b as a,w as _,f as k,v as D,g as l,F as C,e as R,H as $,I as G,x as M,d as A,J,K}from"./index-5f6966f2.js";import Q from"./ContentImages-ecef9022.js";import W from"./ColorItem-8fbb9196.js";import Z from"./AnswerCollections-4a6374c7.js";import"./WarningParameters-249f8786.js";const y=c=>(J("data-v-178a6b7a"),c=c(),K(),c),ee=["src"],te=["onMousedown"],ne={class:"marker-index"},oe={key:1,class:"markers-table"},se={key:2,class:"marker-info"},ae={class:"slider-text"},le={class:"checkboxes"},ie=y(()=>l("div",{class:"checkbox-text"},"Правильный ?",-1)),ce={class:"checkboxes"},re=y(()=>l("div",{class:"checkbox-text"},"Не обязательный ?",-1)),me=y(()=>l("div",{class:"slider-text"},"Размер маркера ",-1)),de=y(()=>l("div",{class:"slider-text"},"Размер хитбокса ",-1)),O=2,ue=50,T=2,pe=50,we={__name:"AnswersOnImage",props:["componentData"],setup(c){const t=c;console.log(t.componentData);const s=L(null),B=L(null),p=L(null),r=L({width:0,height:0});t.componentData.answersButtonType="buttonsOnImage";const S=(n,e)=>n/e*100,f=(n,e)=>n/100*e,U=n=>({position:"absolute",top:`${n.y}%`,left:`${n.x}%`,transform:"translate(-50%, -50%)",width:`${f(n.size,r.value.width)}px`,height:`${f(n.size,r.value.width)}px`,background:`${n.color}`}),E=n=>({position:"absolute",top:`${n.y}%`,left:`${n.x}%`,transform:"translate(-50%, -50%)",width:`${f(n.hitboxSize,r.value.width)}px`,height:`${f(n.hitboxSize,r.value.width)}px`,backgroundColor:`${n.color}55`,borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box",cursor:"pointer"}),q=()=>{s.value!==null&&(t.componentData.answersList.splice(s.value,1),s.value=t.componentData.answersList.length-1)},H=n=>{if(n.target.classList.contains("content-image")){const e=p.value.getBoundingClientRect(),w=(n.clientX-e.left)/e.width*100,d=(n.clientY-e.top)/e.height*100;t.componentData.answersList.push({index:t.componentData.answersList.length+1,isRight:!1,notRequired:!1,answerText:"",style:{x:w,y:d,size:S(O,e.width),hitboxSize:S(T,e.width)}}),s.value=t.componentData.answersList.length-1,console.log(t.componentData.answersList)}},N=(n,e)=>{n.preventDefault(),s.value=e;const w=g=>{const h=p.value.getBoundingClientRect();let x=(g.clientX-h.left)/h.width*100,v=(g.clientY-h.top)/h.height*100;x=Math.max(0,Math.min(x,100)),v=Math.max(0,Math.min(v,100)),t.componentData.answersList[s.value].style.x=x,t.componentData.answersList[s.value].style.y=v},d=()=>{document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",w),document.addEventListener("mouseup",d)},V=()=>{I(()=>{if(p.value&&p.value.complete){const{width:n,height:e}=p.value.getBoundingClientRect();r.value.width=n,r.value.height=e,console.log(r.value.width),console.log(r.value.height)}else console.log("Изображение еще не загружено или элемент не найден")})};j(async()=>{await I(),V()});const F=n=>{let e=n.index-1;s.value=e};return(n,e)=>{const w=m("el-switch"),d=m("el-form-item"),g=m("el-table-column"),h=m("el-table"),x=m("el-input"),v=m("el-checkbox"),z=m("el-slider"),P=m("el-button");return i(),u(C,null,[a(d,{label:"Ответы на картинке?"},{default:_(()=>[a(w,{modelValue:t.componentData.isAnswersOnImage,"onUpdate:modelValue":e[0]||(e[0]=o=>t.componentData.isAnswersOnImage=o),style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue"])]),_:1}),t.componentData.isAnswersOnImage?(i(),k(d,{key:0,label:"Картинка:"},{default:_(()=>[t.componentData.imagesData&&t.componentData.isAnswersOnImage?(i(),k(Q,{key:0,componentData:t.componentData.imagesData,isSingleImage:t.componentData.isAnswersOnImage},null,8,["componentData","isSingleImage"])):D("",!0),l("div",{class:"image-container",onClick:e[1]||(e[1]=o=>H(o)),ref_key:"imageContainer",ref:B,onLoad:V},[l("img",{class:"content-image",src:t.componentData.imagesData.imagesList[0].imageURL,ref_key:"imageElement",ref:p,onLoad:V},null,40,ee),(i(!0),u(C,null,R(t.componentData.answersList,(o,b)=>(i(),u("div",{class:"marker",key:b,style:$(U(o.style)),onMousedown:G(X=>N(X,b),["prevent"])},[l("div",ne,M(o.index),1)],44,te))),128)),(i(!0),u(C,null,R(t.componentData.answersList,(o,b)=>(i(),u("div",{class:"hitbox",key:b,style:$(E(o.style))},null,4))),128))],544),t.componentData.answersList.length>0?(i(),u("div",oe,[a(h,{data:t.componentData.answersList,style:{width:"100%"},border:"","highlight-current-row":"",onRowClick:F},{default:_(()=>[a(g,{prop:"index",label:"id",width:"40"}),a(g,{prop:"answerText",label:"Текст ответа",width:"115"}),a(g,{prop:"isRight",label:"Значение",width:"115"},{default:_(({row:o})=>[l("span",null,M(o.isRight?"Правильный":"Неправильный"),1)]),_:1})]),_:1},8,["data"])])):D("",!0),s.value!==null&&t.componentData.answersList.length>0?(i(),u("div",se,[l("div",ae,[A("Текст ответа"),a(x,{modelValue:t.componentData.answersList[s.value].answerText,"onUpdate:modelValue":e[2]||(e[2]=o=>t.componentData.answersList[s.value].answerText=o)},null,8,["modelValue"])]),l("div",le,[ie,a(v,{modelValue:t.componentData.answersList[s.value].isRight,"onUpdate:modelValue":e[3]||(e[3]=o=>t.componentData.answersList[s.value].isRight=o),size:"large"},null,8,["modelValue"])]),l("div",ce,[re,a(v,{modelValue:t.componentData.answersList[s.value].notRequired,"onUpdate:modelValue":e[4]||(e[4]=o=>t.componentData.answersList[s.value].notRequired=o),size:"large"},null,8,["modelValue"])]),me,a(z,{modelValue:t.componentData.answersList[s.value].style.size,"onUpdate:modelValue":e[5]||(e[5]=o=>t.componentData.answersList[s.value].style.size=o),min:O,max:ue,step:.1},null,8,["modelValue"]),de,a(z,{modelValue:t.componentData.answersList[s.value].style.hitboxSize,"onUpdate:modelValue":e[6]||(e[6]=o=>t.componentData.answersList[s.value].style.hitboxSize=o),min:T,max:pe,step:.1},null,8,["modelValue"]),a(P,{onClick:q},{default:_(()=>[A("Удалить маркер")]),_:1}),a(W,{modelValue:t.componentData.answersList[s.value].style.color,"onUpdate:modelValue":e[7]||(e[7]=o=>t.componentData.answersList[s.value].style.color=o)},null,8,["modelValue"])])):D("",!0),c.componentData.answersList?(i(),k(Z,{key:3,answerCollectionsData:c.componentData.answerCollections,answersList:c.componentData.answersList,onAddCollectionToList:e[8]||(e[8]=o=>n.addCollectionToList(o)),onDeleteCollection:e[9]||(e[9]=o=>n.deleteCollection(o))},null,8,["answerCollectionsData","answersList"])):D("",!0)]),_:1})):D("",!0)],64)}}},De=Y(we,[["__scopeId","data-v-178a6b7a"]]);export{De as default};
