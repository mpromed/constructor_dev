import{_ as Y,r as b,q as j,H as z,a as m,o as i,c as d,b as s,w as h,f as R,v as f,g as l,F as k,e as C,I as $,J,x as A,d as M,K,L as Q}from"./index-598d1404.js";import G from"./ContentImages-b981fb8c.js";import W from"./ColorItem-c1bc6767.js";import Z from"./ActionItem-8e2b8ddc.js";/* empty css                                                          */const L=v=>(K("data-v-3d029d1a"),v=v(),Q(),v),ee={key:0},te=["src"],ne=["onMousedown"],oe={class:"marker-index"},ae={key:1,class:"markers-table"},se={key:2,class:"marker-info"},le={class:"slider-text"},ie={class:"checkboxes"},ce=L(()=>l("div",{class:"checkbox-text"},"Правильный ?",-1)),me={class:"checkboxes"},de=L(()=>l("div",{class:"checkbox-text"},"Не обязательный ?",-1)),re=L(()=>l("div",{class:"slider-text"},"Размер маркера ",-1)),ue=L(()=>l("div",{class:"slider-text"},"Размер хитбокса ",-1)),pe={class:"action_edit"},O=2,_e=50,U=2,ge=50,we={__name:"AnswersOnImage",props:["componentData"],setup(v){const e=v,a=b(null),B=b(null),u=b(null),p=b({width:0,height:0});e.componentData.answersButtonType="buttonsOnImage";const S=(n,t)=>n/t*100,D=(n,t)=>n/100*t,T=n=>({position:"absolute",top:`${n.y}%`,left:`${n.x}%`,transform:"translate(-50%, -50%)",width:`${D(n.size,p.value.width)}px`,height:`${D(n.size,p.value.width)}px`,background:`${n.color}`}),E=n=>({position:"absolute",top:`${n.y}%`,left:`${n.x}%`,transform:"translate(-50%, -50%)",width:`${D(n.hitboxSize,p.value.width)}px`,height:`${D(n.hitboxSize,p.value.width)}px`,backgroundColor:`${n.color}55`,borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box",cursor:"pointer"}),q=()=>{a.value!==null&&(e.componentData.answersList.splice(a.value,1),a.value=e.componentData.answersList.length-1)},H=n=>{if(n.target.classList.contains("content-image")){const t=u.value.getBoundingClientRect(),r=(n.clientX-t.left)/t.width*100,c=(n.clientY-t.top)/t.height*100;e.componentData.answersList.push({id:e.componentData.answersList.length+1,isRight:!1,notRequired:!1,answerText:"",action:{doAction:!1,clickAction:!1,name:"moveToStep",internalId:0,checkQuestion:!1,trackRepeatAnswer:!1},style:{x:r,y:c,size:S(O,t.width),hitboxSize:S(U,t.width)}}),a.value=e.componentData.answersList.length-1}},N=(n,t)=>{n.preventDefault(),a.value=t;const r=_=>{const g=u.value.getBoundingClientRect();let x=(_.clientX-g.left)/g.width*100,w=(_.clientY-g.top)/g.height*100;x=Math.max(0,Math.min(x,100)),w=Math.max(0,Math.min(w,100)),e.componentData.answersList[a.value].style.x=x,e.componentData.answersList[a.value].style.y=w},c=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",c)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",c)},V=()=>{z(()=>{if(u.value&&u.value.complete){const{width:n,height:t}=u.value.getBoundingClientRect();p.value.width=n,p.value.height=t}})};j(async()=>{await z(),V()});const F=n=>{let t=n.id-1;a.value=t};return(n,t)=>{const r=m("el-switch"),c=m("el-form-item"),_=m("el-table-column"),g=m("el-table"),x=m("el-input"),w=m("el-checkbox"),I=m("el-slider"),P=m("el-button");return i(),d(k,null,[s(c,{label:"Ответы на картинке?"},{default:h(()=>[s(r,{modelValue:e.componentData.isAnswersOnImage,"onUpdate:modelValue":t[0]||(t[0]=o=>e.componentData.isAnswersOnImage=o),style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue"])]),_:1}),e.componentData.isAnswersOnImage?(i(),d("div",ee,[s(c,{label:"Множественный выбор:"},{default:h(()=>[s(r,{modelValue:e.componentData.multiple,"onUpdate:modelValue":t[1]||(t[1]=o=>e.componentData.multiple=o)},null,8,["modelValue"])]),_:1}),e.componentData.isAnswersOnImage?(i(),R(c,{key:0,label:"Картинка:"},{default:h(()=>[e.componentData.imagesData&&e.componentData.isAnswersOnImage?(i(),R(G,{key:0,componentData:e.componentData.imagesData,isSingleImage:e.componentData.isAnswersOnImage},null,8,["componentData","isSingleImage"])):f("",!0),l("div",{class:"image-container",onClick:t[2]||(t[2]=o=>H(o)),ref_key:"imageContainer",ref:B,onLoad:V},[l("img",{class:"content-image",src:e.componentData.imagesData.imagesList[0].imageURL,ref_key:"imageElement",ref:u,onLoad:V},null,40,te),(i(!0),d(k,null,C(e.componentData.answersList,(o,y)=>(i(),d("div",{class:"marker",key:y,style:$(T(o.style)),onMousedown:J(X=>N(X,y),["prevent"])},[l("div",oe,A(o.id),1)],44,ne))),128)),(i(!0),d(k,null,C(e.componentData.answersList,(o,y)=>(i(),d("div",{class:"hitbox",key:y,style:$(E(o.style))},null,4))),128))],544),e.componentData.answersList.length>0?(i(),d("div",ae,[s(g,{data:e.componentData.answersList,style:{width:"100%"},border:"","highlight-current-row":"",onRowClick:F},{default:h(()=>[s(_,{prop:"id",label:"id",width:"40"}),s(_,{prop:"answerText",label:"Текст ответа",width:"382"}),s(_,{prop:"isRight",label:"Значение",width:"160"},{default:h(({row:o})=>[l("span",null,A(o.isRight?"Правильный":"Неправильный"),1)]),_:1})]),_:1},8,["data"])])):f("",!0),a.value!==null&&e.componentData.answersList.length>0?(i(),d("div",se,[l("div",le,[M("Текст ответа"),s(x,{modelValue:e.componentData.answersList[a.value].answerText,"onUpdate:modelValue":t[3]||(t[3]=o=>e.componentData.answersList[a.value].answerText=o)},null,8,["modelValue"])]),l("div",ie,[ce,s(w,{modelValue:e.componentData.answersList[a.value].isRight,"onUpdate:modelValue":t[4]||(t[4]=o=>e.componentData.answersList[a.value].isRight=o),size:"large"},null,8,["modelValue"])]),l("div",me,[de,s(w,{modelValue:e.componentData.answersList[a.value].notRequired,"onUpdate:modelValue":t[5]||(t[5]=o=>e.componentData.answersList[a.value].notRequired=o),size:"large"},null,8,["modelValue"])]),re,s(I,{modelValue:e.componentData.answersList[a.value].style.size,"onUpdate:modelValue":t[6]||(t[6]=o=>e.componentData.answersList[a.value].style.size=o),min:O,max:_e,step:.1},null,8,["modelValue"]),ue,s(I,{modelValue:e.componentData.answersList[a.value].style.hitboxSize,"onUpdate:modelValue":t[7]||(t[7]=o=>e.componentData.answersList[a.value].style.hitboxSize=o),min:U,max:ge,step:.1},null,8,["modelValue"]),s(P,{onClick:q},{default:h(()=>[M("Удалить маркер")]),_:1}),s(W,{modelValue:e.componentData.answersList[a.value].style.color,"onUpdate:modelValue":t[8]||(t[8]=o=>e.componentData.answersList[a.value].style.color=o)},null,8,["modelValue"]),l("div",pe,[s(Z,{action:e.componentData.answersList[a.value].action},null,8,["action"])])])):f("",!0)]),_:1})):f("",!0)])):f("",!0)],64)}}},ye=Y(we,[["__scopeId","data-v-3d029d1a"]]);export{ye as default};