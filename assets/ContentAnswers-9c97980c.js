import T from"./WarningParameters-c45956ff.js";import{r as x,q as K,a as f,o as u,f as D,w as a,b as e,c as b,v as c,d as _,F as X,e as Y,x as Z,k,y as ee,z as te,A as ne,B as oe,C as ae,T as h,g as le,D as se,l as me}from"./index-eb00b459.js";import ie from"./ContentImages-7c805511.js";import ue from"./ColorItem-67563fc3.js";import de from"./ActionItem-b3190676.js";import z from"./AnswerCollections-64db3669.js";import ce from"./AnswersOnImage-6ac7add1.js";/* empty css                                                          */const re={key:0},pe={key:0},fe={key:0},De={key:1},we={key:0,class:"answer_editor"},Ve={class:"action_edit"},ge={key:0},xe={__name:"ContentAnswers",props:["componentData","blockData"],setup(m){const t=m,N=x(!1),R=x("main"),C=x(t.componentData.answersList.map(s=>!1)),A=x(!1),$=s=>{C.value[s]=!C.value[s]},S=()=>{A.value=!A.value},H=s=>{C.value.splice(s,1),t.componentData.answersList.splice(s,1)},B=s=>{const o=s.id,r=t.componentData.answerCollections,l=r.findIndex(d=>d.id===o);if(l>0){const d=[...r];[d[l],d[l-1]]=[d[l-1],d[l]],t.componentData.answerCollections=d}},q=s=>{const o=s.id,r=t.componentData.answerCollections,l=r.findIndex(d=>d.id===o);if(l<r.length-1){const d=[...r];[d[l],d[l+1]]=[d[l+1],d[l]],t.componentData.answerCollections=d}},P=s=>{if(s===0)return;const o=t.componentData.answersList[s];t.componentData.answersList[s]=t.componentData.answersList[s-1],t.componentData.answersList[s-1]=o},F=s=>{if(s===t.componentData.answersList.length-1)return;const o=t.componentData.answersList[s];t.componentData.answersList[s]=t.componentData.answersList[s+1],t.componentData.answersList[s+1]=o},O=()=>{if(t.componentData.answersList.length===0)return 0;let s=!1;for(let l=0;l<t.componentData.answersList.length;l++)if(!t.componentData.answersList[l].id){s=!0;break}if(s){for(let l=0;l<t.componentData.answersList.length;l++)t.componentData.answersList[l].id=l+1;return t.componentData.answersList.length}const o=t.componentData.answersList.map(l=>l.id);return Math.max(...o)},Q=()=>{t.componentData.answersList.push({id:O()+1,answerText:"",isRight:!1,notRequired:!1,image:{imageURL:"",label:""},action:{doAction:!1,clickAction:!1,name:"moveToStep",internalId:0,checkQuestion:!1,trackRepeatAnswer:!1},isRightAlt:!1})},j=()=>{t.componentData.imagesData==null&&(t.componentData.isAnswersWithImage=!1,t.componentData.isAnswersOnImage=!1,t.componentData.imagesData={imagesWidthPercent:100,imagesList:[{imageURL:"",label:""}]}),t.componentData.textData==null&&(t.componentData.textData={text:""}),t.componentData.markers==null&&(t.componentData.markers=[])};K(()=>{j()});const E=s=>{t.componentData.answerCollections===void 0&&(t.componentData.answerCollections=[]),t.componentData.answerCollections.push(s)},M=s=>{const o=t.componentData.answerCollections.findIndex(r=>r.id===s);if(o===-1){log("Коллекция с таким id не найдена");return}t.componentData.answerCollections.splice(o,1)};return(s,o)=>{const r=f("el-switch"),l=f("el-form-item"),d=f("el-option"),G=f("el-select"),v=f("el-divider"),V=f("el-input"),W=f("el-input-number"),i=f("el-col"),L=f("el-row"),y=f("el-text"),I=f("el-checkbox"),g=f("el-button"),U=f("el-tab-pane"),J=f("el-tabs");return u(),D(J,{class:"demo-tabs",modelValue:R.value,"onUpdate:modelValue":o[25]||(o[25]=n=>R.value=n),type:"card",onTabClick:s.handleClick},{default:a(()=>[e(U,{label:"Основной",name:"main"},{default:a(()=>[e(l,{label:"Множественный выбор:"},{default:a(()=>[e(r,{modelValue:t.componentData.multiple,"onUpdate:modelValue":o[0]||(o[0]=n=>t.componentData.multiple=n)},null,8,["modelValue"])]),_:1}),e(l,{label:"Перемешивать ответы?"},{default:a(()=>[e(r,{modelValue:t.componentData.doShuffle,"onUpdate:modelValue":o[1]||(o[1]=n=>t.componentData.doShuffle=n)},null,8,["modelValue"])]),_:1}),e(l,{label:"Вид кнопок:"},{default:a(()=>[e(G,{modelValue:t.componentData.answersButtonType,"onUpdate:modelValue":o[2]||(o[2]=n=>t.componentData.answersButtonType=n),placeholder:"please select"},{default:a(()=>[e(d,{label:"Чекбоксы",value:"checkboxes"}),e(d,{label:"Кнопки",value:"buttons"}),e(d,{label:"Картинки+чекбоксы",value:"imageCheckboxes"})]),_:1},8,["modelValue"])]),_:1}),e(v),e(l,{label:"Подсказки:"},{default:a(()=>[e(r,{modelValue:t.componentData.hints,"onUpdate:modelValue":o[3]||(o[3]=n=>t.componentData.hints=n)},null,8,["modelValue"])]),_:1}),t.componentData.hints?(u(),b("div",re,[e(l,{label:"Количество попыток:"},{default:a(()=>[e(V,{modelValue:t.componentData.totalHints,"onUpdate:modelValue":o[4]||(o[4]=n=>t.componentData.totalHints=n)},null,8,["modelValue"])]),_:1}),e(l,{label:"Текст в окне подсказки:"},{default:a(()=>[e(V,{modelValue:t.componentData.modalHintDescription,"onUpdate:modelValue":o[5]||(o[5]=n=>t.componentData.modalHintDescription=n)},null,8,["modelValue"])]),_:1}),N.value||m.componentData.showLegend!=null&&m.componentData!=null?(u(),b("div",pe,[e(l,{label:"Показывать легенду альтернативных ответов:"},{default:a(()=>[e(r,{modelValue:m.componentData.showLegend,"onUpdate:modelValue":o[6]||(o[6]=n=>m.componentData.showLegend=n)},null,8,["modelValue"])]),_:1}),m.componentData.showLegend?(u(),b("div",fe,[e(l,{label:"Текст легенды альтернативных ответов:"},{default:a(()=>[e(V,{modelValue:m.componentData.legendText,"onUpdate:modelValue":o[7]||(o[7]=n=>m.componentData.legendText=n)},null,8,["modelValue"])]),_:1}),e(l,{label:"Текст легенды альтернативных ответов цветной:"},{default:a(()=>[e(V,{modelValue:m.componentData.legendColoredText,"onUpdate:modelValue":o[8]||(o[8]=n=>m.componentData.legendColoredText=n)},null,8,["modelValue"])]),_:1}),e(l,{label:"Цвет:"},{default:a(()=>[e(ue,{modelValue:m.componentData.legendTextColor,"onUpdate:modelValue":o[9]||(o[9]=n=>m.componentData.legendTextColor=n)},null,8,["modelValue"])]),_:1})])):c("",!0)])):c("",!0),e(T,{parameters:t.componentData.hintWarning},null,8,["parameters"])])):c("",!0),e(v),e(l,{label:"Предупреждения:"},{default:a(()=>[e(r,{modelValue:t.componentData.warnings,"onUpdate:modelValue":o[10]||(o[10]=n=>t.componentData.warnings=n)},null,8,["modelValue"])]),_:1}),t.componentData.warnings?(u(),b("div",De,[e(l,{class:"form-item-bold",label:"Все верные:"}),e(T,{parameters:t.componentData.allCorrect},null,8,["parameters"]),e(l,{class:"form-item-bold",label:"Все неверные/часть неверных:"}),e(T,{parameters:t.componentData.allInorrectPartlyIncorrect},null,8,["parameters"])])):c("",!0),e(v),e(l,{label:"Стили:"},{default:a(()=>[e(l,{label:"Кол-во колонок:"},{default:a(()=>[e(W,{modelValue:t.componentData.columns,"onUpdate:modelValue":o[11]||(o[11]=n=>t.componentData.columns=n),min:1,max:10},null,8,["modelValue"])]),_:1})]),_:1}),e(v),e(l,{label:"Содержание вопроса:"}),e(L,null,{default:a(()=>[e(i,{span:1}),e(i,{class:"question_text_col",span:12},{default:a(()=>[e(V,{modelValue:t.blockData.question_text,"onUpdate:modelValue":o[12]||(o[12]=n=>t.blockData.question_text=n)},null,8,["modelValue"])]),_:1})]),_:1}),e(L,null,{default:a(()=>[e(i,{span:1}),e(i,{span:12},{default:a(()=>[e(y,null,{default:a(()=>[_("Текст ответа")]),_:1})]),_:1}),e(i,{span:1},{default:a(()=>[e(y,null,{default:a(()=>[_("Правильный")]),_:1})]),_:1}),e(i,{span:1},{default:a(()=>[e(y,null,{default:a(()=>[_("Альт. прав.")]),_:1})]),_:1}),m.componentData.multiple?(u(),D(i,{key:0,span:2},{default:a(()=>[e(y,null,{default:a(()=>[_("Прав. необ.")]),_:1})]),_:1})):c("",!0),e(i,{span:2})]),_:1}),(u(!0),b(X,null,Y(m.componentData.answersList,(n,w)=>(u(),D(L,{key:n.id,gutter:20},{default:a(()=>[e(i,{span:1},{default:a(()=>[e(y,null,{default:a(()=>[_(Z(w+1),1)]),_:2},1024)]),_:2},1024),e(i,{span:12},{default:a(()=>[e(V,{modelValue:n.answerText,"onUpdate:modelValue":p=>n.answerText=p},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{span:1},{default:a(()=>[e(I,{modelValue:n.isRight,"onUpdate:modelValue":p=>n.isRight=p,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),n.isRightAlt!=null?(u(),D(i,{key:0,span:1},{default:a(()=>[e(I,{modelValue:n.isRightAlt,"onUpdate:modelValue":p=>n.isRightAlt=p,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):c("",!0),m.componentData.multiple?(u(),D(i,{key:1,span:2},{default:a(()=>[e(I,{modelValue:n.notRequired,"onUpdate:modelValue":p=>n.notRequired=p,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):c("",!0),e(i,{span:4},{default:a(()=>[e(g,{type:"warning",icon:k(ee),circle:"",onClick:p=>P(w)},null,8,["icon","onClick"]),e(g,{type:"warning",icon:k(te),circle:"",onClick:p=>F(w)},null,8,["icon","onClick"]),e(g,{type:"danger",icon:k(ne),circle:"",onClick:p=>H(w)},null,8,["icon","onClick"])]),_:2},1024),e(i,{span:m.componentData.multiple?3:5},{default:a(()=>[C.value[w]?c("",!0):(u(),D(g,{key:0,type:"primary",icon:k(oe),plain:"",onClick:p=>$(w)},null,8,["icon","onClick"])),C.value[w]?(u(),D(g,{key:1,type:"primary",icon:k(ae),plain:"",onClick:p=>$(w)},null,8,["icon","onClick"])):c("",!0)]),_:2},1032,["span"]),e(i,{span:1}),e(i,{span:21},{default:a(()=>[C.value[w]?(u(),b("div",we,[e(h,{modelValue:n.answerText,"onUpdate:modelValue":p=>n.answerText=p},null,8,["modelValue","onUpdate:modelValue"]),le("div",Ve,[e(de,{action:n.action},null,8,["action"])])])):c("",!0)]),_:2},1024),m.componentData.answersButtonType==="imageCheckboxes"&&n.image!=null?(u(),D(L,{key:2},{default:a(()=>[e(se,{image:n.image,hideLabel:!0},null,8,["image"])]),_:2},1024)):c("",!0)]),_:2},1024))),128)),e(v),e(L,null,{default:a(()=>[e(i,{span:6},{default:a(()=>[e(g,{onClick:Q,type:"success",round:""},{default:a(()=>[_("+ Добавить поле ")]),_:1})]),_:1})]),_:1}),m.componentData.answersList?(u(),D(z,{key:2,answerCollectionsData:m.componentData.answerCollections,answersList:m.componentData.answersList,onAddCollectionToList:o[13]||(o[13]=n=>E(n)),onDeleteCollection:o[14]||(o[14]=n=>M(n)),onMoveUpCollection:o[15]||(o[15]=n=>B(n)),onMoveDownCollection:o[16]||(o[16]=n=>q(n))},null,8,["answerCollectionsData","answersList"])):c("",!0)]),_:1}),e(U,{label:"Стили",name:"style"},{default:a(()=>[e(l,{label:"Стили:"},{default:a(()=>[e(l,{label:"Кол-во колонок:"}),e(W,{modelValue:t.componentData.columns,"onUpdate:modelValue":o[17]||(o[17]=n=>t.componentData.columns=n),min:1,max:10},null,8,["modelValue"])]),_:1})]),_:1}),e(U,{label:"С картинкой",name:"withImage"},{default:a(()=>[e(l,{label:"Ответы с картинками?"},{default:a(()=>[e(r,{modelValue:t.componentData.isAnswersWithImage,"onUpdate:modelValue":o[18]||(o[18]=n=>t.componentData.isAnswersWithImage=n),style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue"])]),_:1}),t.componentData.isAnswersWithImage?(u(),D(l,{key:0,label:"Текст:"},{default:a(()=>[e(i,{span:22},{default:a(()=>[e(V,{modelValue:t.componentData.textData.text,"onUpdate:modelValue":o[19]||(o[19]=n=>t.componentData.textData.text=n),width:"30vw"},null,8,["modelValue"])]),_:1}),e(i,{span:2},{default:a(()=>[e(g,{type:"primary",icon:k(me),plain:"",onClick:S},null,8,["icon"])]),_:1}),e(i,{span:22},{default:a(()=>[A.value?(u(),b("div",ge,[e(h,{modelValue:t.componentData.textData.text,"onUpdate:modelValue":o[20]||(o[20]=n=>t.componentData.textData.text=n)},null,8,["modelValue"])])):c("",!0)]),_:1})]),_:1})):c("",!0),e(l,{label:"Картинки:"},{default:a(()=>[t.componentData.imagesData!=null?(u(),D(ie,{key:0,componentData:t.componentData.imagesData},null,8,["componentData"])):c("",!0)]),_:1})]),_:1}),t.componentData?(u(),D(U,{key:0,label:"На картинке",name:"onImage",lazy:""},{default:a(()=>[e(ce,{componentData:t.componentData},null,8,["componentData"]),m.componentData.answersList?(u(),D(z,{key:0,answerCollectionsData:m.componentData.answerCollections,answersList:m.componentData.answersList,onAddCollectionToList:o[21]||(o[21]=n=>E(n)),onDeleteCollection:o[22]||(o[22]=n=>M(n)),onMoveUpCollection:o[23]||(o[23]=n=>B(n)),onMoveDownCollection:o[24]||(o[24]=n=>q(n))},null,8,["answerCollectionsData","answersList"])):c("",!0)]),_:1})):c("",!0)]),_:1},8,["modelValue","onTabClick"])}}};export{xe as default};