import{r as _,a as i,o as w,c as D,b as e,w as l,d as b,k as p,H as j,z as G,A as J,B as K,l as O,g as P,f as U,x as k}from"./index-403d6067.js";import Q from"./WarningParameters-a4dd400d.js";import"./ColorItem-10c0943d.js";const X={class:"collection-answer-wrapper"},Y={key:0},Z={class:"dialog-footer"},oe={__name:"AnswerCollections",props:["answerCollectionsData","answersList"],emits:["addCollectionToList","deleteCollection","updateCollectionItem"],setup(g,{emit:h}){const d=g,q=_(),V=_(null),r=_(!1),o=_(),f=_(!1),m=_([]),I=()=>{const n=[];for(let t=0;t<m.value.length;t++)m.value[t]&&n.push(d.answersList[t].id);o.value.selectedIdList=n,h("addCollectionToList",o.value),r.value=!1},T=()=>{if(d.answerCollectionsData.length===0)return 0;const n=d.answerCollectionsData.map(s=>s.id);return Math.max(...n)},A=()=>{if(d.answerCollectionsData.length===0)return 0;const n=d.answerCollectionsData.map(s=>s.seqNo);return Math.max(...n)},R=()=>{m.value=d.answersList.map(n=>!1),o.value={id:T()+1,name:"",description:"",seqNo:A()+1,checkedList:[],isRight:!1,useCollectionWarning:!1,collectionWarning:{text:"Все верно",color:"#A3D65C",image:{label:"",imageURL:""},showTime:0,buttons:[{buttonName:"Закрыть",action:{name:"closeModalWarning"}}]}},f.value=!1,r.value=!0},W=(n,t)=>{m.value=d.answersList.map(s=>!!n.selectedIdList.find(C=>C===s.id)),o.value=n,f.value=!0,r.value=!0},B=()=>{h("updateCollectionItem",o.value),r.value=!1},M=()=>{V.value&&h("deleteCollection",V.value.id)},$=n=>{V.value=n};return(n,t)=>{const s=i("el-col"),C=i("el-row"),c=i("el-button"),E=i("el-popconfirm"),u=i("el-table-column"),z=i("el-icon"),x=i("el-table"),y=i("el-input"),v=i("el-form-item"),F=i("el-checkbox"),L=i("el-switch"),S=i("el-form"),H=i("el-dialog");return w(),D("div",X,[e(C,null,{default:l(()=>[e(s,null,{default:l(()=>[b("Коллекции ответов пользователя")]),_:1})]),_:1}),e(C,null,{default:l(()=>[e(s,null,{default:l(()=>[e(c,{type:"success",icon:p(j),onClick:R},null,8,["icon"]),e(c,{type:"warning",icon:p(G),onClick:n.moveModuleTestUp},null,8,["icon","onClick"]),e(c,{type:"warning",icon:p(J),onClick:n.moveModuleTestDown},null,8,["icon","onClick"]),e(E,{"confirm-button-text":"Да","cancel-button-text":"Нет","icon-color":"#F56C6C",title:"Вы уверены, что хотите удалить коллекцию?",onConfirm:M,width:"350"},{reference:l(()=>[e(c,{type:"danger",icon:p(K)},null,8,["icon"])]),_:1})]),_:1})]),_:1}),e(x,{ref_key:"tableAnswerCollectionsRef",ref:q,data:g.answerCollectionsData,onCurrentChange:$,style:{width:"100%"},border:"","highlight-current-row":""},{default:l(()=>[e(u,{prop:"id",label:"id",width:"60"}),e(u,{prop:"seqNo",label:"seqNo",width:"100"}),e(u,{prop:"name",label:"Наименование",width:"180"}),e(u,{prop:"collection",label:"Коллекция",width:"180"}),e(u,{label:"Управление"},{default:l(a=>[e(c,{class:"control_btn",size:"small",onClick:N=>W(a.row)},{default:l(()=>[e(z,{size:"small",color:"#FF8A00"},{default:l(()=>[e(p(O))]),_:1})]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(H,{modelValue:r.value,"onUpdate:modelValue":t[5]||(t[5]=a=>r.value=a),title:"Набор ответов",width:"700"},{footer:l(()=>[P("div",Z,[e(c,{onClick:t[4]||(t[4]=a=>r.value=!1)},{default:l(()=>[b("Отмена")]),_:1}),f.value?k("",!0):(w(),U(c,{key:0,type:"primary",onClick:I},{default:l(()=>[b("Создать")]),_:1})),f.value?(w(),U(c,{key:1,type:"primary",onClick:B},{default:l(()=>[b("Сохранить")]),_:1})):k("",!0)])]),default:l(()=>[e(S,{model:o.value},{default:l(()=>[e(v,{label:"Наименование"},{default:l(()=>[e(y,{modelValue:o.value.name,"onUpdate:modelValue":t[0]||(t[0]=a=>o.value.name=a)},null,8,["modelValue"])]),_:1}),e(v,{label:"Описание"},{default:l(()=>[e(y,{modelValue:o.value.description,"onUpdate:modelValue":t[1]||(t[1]=a=>o.value.description=a)},null,8,["modelValue"])]),_:1}),e(x,{ref:"multipleTableRef",data:g.answersList,style:{width:"100%"},border:""},{default:l(()=>[e(u,{property:"answerText",label:"Ответ",width:"200"}),e(u,{label:"Выбран",width:"100"},{default:l(a=>[e(F,{modelValue:m.value[a.$index],"onUpdate:modelValue":N=>m.value[a.$index]=N},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{label:"Необязательный",width:"100"})]),_:1},8,["data"]),e(v,{label:"Верный ответ"},{default:l(()=>[e(L,{modelValue:o.value.isRight,"onUpdate:modelValue":t[2]||(t[2]=a=>o.value.isRight=a)},null,8,["modelValue"])]),_:1}),e(v,{label:"Предупреждение"},{default:l(()=>[e(L,{modelValue:o.value.useCollectionWarning,"onUpdate:modelValue":t[3]||(t[3]=a=>o.value.useCollectionWarning=a)},null,8,["modelValue"])]),_:1}),o.value.useCollectionWarning?(w(),D("div",Y,[e(Q,{parameters:o.value.collectionWarning},null,8,["parameters"])])):k("",!0)]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}};export{oe as default};
