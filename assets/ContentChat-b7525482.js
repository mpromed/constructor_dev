import{r as f,a as s,o as b,c as U,b as e,w as t,d as h,k as _,G as O,m as P,y as Q,z as X,A as Y,l as Z,g as ee,f as W,v as k}from"./index-4e7ea416.js";import le from"./WarningParameters-47041d00.js";import"./ColorItem-570b845f.js";const te={class:"collection-answer-wrapper"},oe={key:0},ne={class:"dialog-footer"},ce={__name:"ContentChat",props:["answerCollectionsData","answersList"],emits:["addCollectionToList","deleteCollection","updateCollectionItem","moveUpCollection","moveDownCollection"],setup(V,{emit:q}){const c=V,v=q,R=f(),a=f(null),r=f(!1),o=f(),C=f(!1),u=f([]),T=()=>{const n=[];for(let l=0;l<u.value.length;l++)u.value[l]&&n.push(c.answersList[l].id);o.value.selectedIdList=n,v("addCollectionToList",o.value),r.value=!1},y=()=>{if(c.answerCollectionsData.length===0)return 0;const n=c.answerCollectionsData.map(m=>m.id);return Math.max(...n)},x=()=>{if(c.answerCollectionsData.length===0)return 0;const n=c.answerCollectionsData.map(m=>m.seqNo);return Math.max(...n)},A=()=>{u.value=c.answersList.map(n=>!1),o.value={id:y()+1,name:"",description:"",seqNo:x()+1,checkedList:[],isRight:!1,useCollectionWarning:!1,collectionWarning:{text:"Все верно",color:"#A3D65C",image:{label:"",imageURL:""},showTime:0,buttons:[{buttonName:"Закрыть",action:{name:"closeModalWarning"}}]}},C.value=!1,r.value=!0},$=()=>{a.value&&(u.value=c.answersList.map(n=>!!a.value.selectedIdList.find(l=>l===n.id)),o.value={id:y()+1,name:a.value.name+"copy",description:a.value.description,seqNo:x()+1,checkedList:a.value.checkedList,isRight:a.value.isRight,useCollectionWarning:a.value.useCollectionWarning,collectionWarning:a.value.collectionWarning},C.value=!1,r.value=!0)},B=(n,l)=>{u.value=c.answersList.map(m=>!!n.selectedIdList.find(w=>w===m.id)),o.value=n,C.value=!0,r.value=!0},E=()=>{const n=[];for(let l=0;l<u.value.length;l++)u.value[l]&&n.push(c.answersList[l].id);o.value.selectedIdList=n,v("updateCollectionItem",o.value),r.value=!1},z=()=>{a.value&&v("deleteCollection",a.value.id)},F=n=>{a.value=n},M=()=>{if(!a.value){console.log("выберите строку");return}v("moveUpCollection",a.value)},S=()=>{if(!a.value){console.log("выберите строку");return}v("moveDownCollection",a.value)};return(n,l)=>{const m=s("el-col"),w=s("el-row"),d=s("el-button"),G=s("el-popconfirm"),p=s("el-table-column"),j=s("el-icon"),L=s("el-table"),N=s("el-input"),g=s("el-form-item"),H=s("el-checkbox"),D=s("el-switch"),J=s("el-form"),K=s("el-dialog");return b(),U("div",te,[e(w,null,{default:t(()=>[e(m,null,{default:t(()=>[h("Коллекции ответов пользователя")]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(m,null,{default:t(()=>[e(d,{type:"success",icon:_(O),onClick:A},null,8,["icon"]),e(d,{type:"success",icon:_(P),onClick:$},null,8,["icon"]),e(d,{type:"warning",icon:_(Q),onClick:M},null,8,["icon"]),e(d,{type:"warning",icon:_(X),onClick:S},null,8,["icon"]),e(G,{"confirm-button-text":"Да","cancel-button-text":"Нет","icon-color":"#F56C6C",title:"Вы уверены, что хотите удалить коллекцию?",onConfirm:z,width:"350"},{reference:t(()=>[e(d,{type:"danger",icon:_(Y)},null,8,["icon"])]),_:1})]),_:1})]),_:1}),e(L,{ref_key:"tableAnswerCollectionsRef",ref:R,data:V.answerCollectionsData,onCurrentChange:F,style:{width:"100%"},border:"","highlight-current-row":""},{default:t(()=>[e(p,{prop:"id",label:"id",width:"60"}),e(p,{prop:"seqNo",label:"seqNo",width:"100"}),e(p,{prop:"name",label:"Наименование",width:"180"}),e(p,{prop:"collection",label:"Коллекция",width:"180"}),e(p,{label:"Управление"},{default:t(i=>[e(d,{class:"control_btn",size:"small",onClick:I=>B(i.row)},{default:t(()=>[e(j,{size:"small",color:"#FF8A00"},{default:t(()=>[e(_(Z))]),_:1})]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(K,{modelValue:r.value,"onUpdate:modelValue":l[5]||(l[5]=i=>r.value=i),title:"Набор ответов",width:"700"},{footer:t(()=>[ee("div",ne,[e(d,{onClick:l[4]||(l[4]=i=>r.value=!1)},{default:t(()=>[h("Отмена")]),_:1}),C.value?k("",!0):(b(),W(d,{key:0,type:"primary",onClick:T},{default:t(()=>[h("Создать")]),_:1})),C.value?(b(),W(d,{key:1,type:"primary",onClick:E},{default:t(()=>[h("Сохранить")]),_:1})):k("",!0)])]),default:t(()=>[e(J,{model:o.value},{default:t(()=>[e(g,{label:"Наименование"},{default:t(()=>[e(N,{modelValue:o.value.name,"onUpdate:modelValue":l[0]||(l[0]=i=>o.value.name=i)},null,8,["modelValue"])]),_:1}),e(g,{label:"Описание"},{default:t(()=>[e(N,{modelValue:o.value.description,"onUpdate:modelValue":l[1]||(l[1]=i=>o.value.description=i)},null,8,["modelValue"])]),_:1}),e(L,{ref:"multipleTableRef",data:V.answersList,style:{width:"100%"},border:""},{default:t(()=>[e(p,{property:"answerText",label:"Ответ",width:"200"}),e(p,{label:"Выбран",width:"100"},{default:t(i=>[e(H,{modelValue:u.value[i.$index],"onUpdate:modelValue":I=>u.value[i.$index]=I},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(p,{label:"Необязательный",width:"100"})]),_:1},8,["data"]),e(g,{label:"Верный ответ"},{default:t(()=>[e(D,{modelValue:o.value.isRight,"onUpdate:modelValue":l[2]||(l[2]=i=>o.value.isRight=i)},null,8,["modelValue"])]),_:1}),e(g,{label:"Предупреждение"},{default:t(()=>[e(D,{modelValue:o.value.useCollectionWarning,"onUpdate:modelValue":l[3]||(l[3]=i=>o.value.useCollectionWarning=i)},null,8,["modelValue"])]),_:1}),o.value.useCollectionWarning?(b(),U("div",oe,[e(le,{parameters:o.value.collectionWarning},null,8,["parameters"])])):k("",!0)]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}};export{ce as default};
