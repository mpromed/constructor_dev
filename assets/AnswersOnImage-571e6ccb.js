import{_ as X,r as b,q as Y,H as z,a as r,o as c,c as u,b as a,w as v,f as R,v as f,g as l,F as k,e as C,I as $,J as j,x as A,d as M,K as J,L as K}from"./index-119697d4.js";import Q from"./ContentImages-d911f0bc.js";import G from"./ColorItem-f430bff7.js";import W from"./ActionItem-5d4f655a.js";/* empty css                                                          */const L=x=>(J("data-v-a173c4ae"),x=x(),K(),x),Z={key:0},ee=["src"],te=["onMousedown"],ne={class:"marker-index"},oe={key:1,class:"markers-table"},se={key:2,class:"marker-info"},ae={class:"slider-text"},le={class:"checkboxes"},ie=L(()=>l("div",{class:"checkbox-text"},"Правильный ?",-1)),ce={class:"checkboxes"},me=L(()=>l("div",{class:"checkbox-text"},"Не обязательный ?",-1)),de=L(()=>l("div",{class:"slider-text"},"Размер маркера ",-1)),re=L(()=>l("div",{class:"slider-text"},"Размер хитбокса ",-1)),ue={class:"action_edit"},pe=2,O=28,ge=50,we=2,_e=50,he={__name:"AnswersOnImage",props:["componentData"],setup(x){const e=x,s=b(null),U=b(null),w=b(null),_=b({width:0,height:0});e.componentData.answersButtonType="buttonsOnImage";const I=(n,t)=>n/t*100,D=(n,t)=>n/100*t,B=n=>({position:"absolute",top:`${n.y}%`,left:`${n.x}%`,transform:"translate(-50%, -50%)",width:`${D(n.size,_.value.width)}px`,height:`${D(n.size,_.value.width)}px`,background:`${n.color}`}),T=n=>({position:"absolute",top:`${n.y}%`,left:`${n.x}%`,transform:"translate(-50%, -50%)",width:`${D(n.hitboxSize,_.value.width)}px`,height:`${D(n.hitboxSize,_.value.width)}px`,backgroundColor:`${n.color}55`,borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box",cursor:"pointer"}),E=()=>{console.log("remove"),s.value!==null&&(e.componentData.answersList.splice(s.value,1),console.log(e.componentData.answersList.length-1),s.value=e.componentData.answersList.length-1)},q=n=>{if(n.target.classList.contains("content-image")){const t=w.value.getBoundingClientRect(),p=(n.clientX-t.left)/t.width*100,m=(n.clientY-t.top)/t.height*100,d=e.componentData.answersList.map(g=>g.id);let i=1;for(;d.includes(i);)i++;e.componentData.answersList.push({id:i,isRight:!1,notRequired:!1,answerText:"",action:{doAction:!1,clickAction:!1,name:"moveToStep",internalId:0,checkQuestion:!1,trackRepeatAnswer:!1},style:{x:p,y:m,size:I(O,t.width),hitboxSize:I(O,t.width)}}),s.value=e.componentData.answersList.length-1}},H=(n,t)=>{n.preventDefault(),s.value=t;const p=d=>{const i=w.value.getBoundingClientRect();let g=(d.clientX-i.left)/i.width*100,h=(d.clientY-i.top)/i.height*100;g=Math.max(0,Math.min(g,100)),h=Math.max(0,Math.min(h,100)),e.componentData.answersList[s.value].style.x=g,e.componentData.answersList[s.value].style.y=h},m=()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",m)};document.addEventListener("mousemove",p),document.addEventListener("mouseup",m)},V=()=>{z(()=>{if(w.value&&w.value.complete){const{width:n,height:t}=w.value.getBoundingClientRect();_.value.width=n,_.value.height=t}})};Y(async()=>{await z(),V()});const N=n=>{let t=n.id-1;s.value=t};return(n,t)=>{const p=r("el-switch"),m=r("el-form-item"),d=r("el-table-column"),i=r("el-table"),g=r("el-input"),h=r("el-checkbox"),S=r("el-slider"),P=r("el-button");return c(),u(k,null,[a(m,{label:"Ответы на картинке?"},{default:v(()=>[a(p,{modelValue:e.componentData.isAnswersOnImage,"onUpdate:modelValue":t[0]||(t[0]=o=>e.componentData.isAnswersOnImage=o),style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue"])]),_:1}),e.componentData.isAnswersOnImage?(c(),u("div",Z,[a(m,{label:"Множественный выбор:"},{default:v(()=>[a(p,{modelValue:e.componentData.multiple,"onUpdate:modelValue":t[1]||(t[1]=o=>e.componentData.multiple=o)},null,8,["modelValue"])]),_:1}),e.componentData.isAnswersOnImage?(c(),R(m,{key:0,label:"Картинка:"},{default:v(()=>[e.componentData.imagesData&&e.componentData.isAnswersOnImage?(c(),R(Q,{key:0,componentData:e.componentData.imagesData,isSingleImage:e.componentData.isAnswersOnImage},null,8,["componentData","isSingleImage"])):f("",!0),l("div",{class:"image-container",onClick:t[2]||(t[2]=o=>q(o)),ref_key:"imageContainer",ref:U,onLoad:V},[l("img",{class:"content-image",src:e.componentData.imagesData.imagesList[0].imageURL,ref_key:"imageElement",ref:w,onLoad:V},null,40,ee),(c(!0),u(k,null,C(e.componentData.answersList,(o,y)=>(c(),u("div",{class:"marker",key:y,style:$(B(o.style)),onMousedown:j(F=>H(F,y),["prevent"])},[l("div",ne,A(o.id),1)],44,te))),128)),(c(!0),u(k,null,C(e.componentData.answersList,(o,y)=>(c(),u("div",{class:"hitbox",key:y,style:$(T(o.style))},null,4))),128))],544),e.componentData.answersList.length>0?(c(),u("div",oe,[a(i,{data:e.componentData.answersList,style:{width:"100%"},border:"","highlight-current-row":"",onRowClick:N},{default:v(()=>[a(d,{prop:"id",label:"id",width:"40"}),a(d,{prop:"answerText",label:"Текст ответа",width:"382"}),a(d,{prop:"isRight",label:"Значение",width:"160"},{default:v(({row:o})=>[l("span",null,A(o.isRight?"Правильный":"Неправильный"),1)]),_:1})]),_:1},8,["data"])])):f("",!0),s.value!==null&&e.componentData.answersList.length>0?(c(),u("div",se,[l("div",ae,[M("Текст ответа"),a(g,{modelValue:e.componentData.answersList[s.value].answerText,"onUpdate:modelValue":t[3]||(t[3]=o=>e.componentData.answersList[s.value].answerText=o)},null,8,["modelValue"])]),l("div",le,[ie,a(h,{modelValue:e.componentData.answersList[s.value].isRight,"onUpdate:modelValue":t[4]||(t[4]=o=>e.componentData.answersList[s.value].isRight=o),size:"large"},null,8,["modelValue"])]),l("div",ce,[me,a(h,{modelValue:e.componentData.answersList[s.value].notRequired,"onUpdate:modelValue":t[5]||(t[5]=o=>e.componentData.answersList[s.value].notRequired=o),size:"large"},null,8,["modelValue"])]),de,a(S,{modelValue:e.componentData.answersList[s.value].style.size,"onUpdate:modelValue":t[6]||(t[6]=o=>e.componentData.answersList[s.value].style.size=o),min:pe,max:ge,step:.1},null,8,["modelValue"]),re,a(S,{modelValue:e.componentData.answersList[s.value].style.hitboxSize,"onUpdate:modelValue":t[7]||(t[7]=o=>e.componentData.answersList[s.value].style.hitboxSize=o),min:we,max:_e,step:.1},null,8,["modelValue"]),a(P,{onClick:E},{default:v(()=>[M("Удалить маркер")]),_:1}),a(G,{modelValue:e.componentData.answersList[s.value].style.color,"onUpdate:modelValue":t[8]||(t[8]=o=>e.componentData.answersList[s.value].style.color=o)},null,8,["modelValue"]),l("div",ue,[a(W,{action:e.componentData.answersList[s.value].action},null,8,["action"])])])):f("",!0)]),_:1})):f("",!0)])):f("",!0)],64)}}},be=X(he,[["__scopeId","data-v-a173c4ae"]]);export{be as default};
