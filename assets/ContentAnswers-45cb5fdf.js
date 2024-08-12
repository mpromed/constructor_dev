import k from"./WarningParameters-dd7c12c6.js";import Z from"./WarningCombination-639786eb.js";import{r as A,q as ee,a as p,o as i,f as c,w as o,b as e,c as w,v as d,F as W,e as q,d as g,x as h,k as v,y as te,z as ne,A as ae,B as oe,C as le,T as E,g as se,D as me,l as ie}from"./index-6017cff3.js";import ue from"./ContentImages-45a42268.js";import de from"./ColorItem-5ba2b7f6.js";import re from"./ActionItem-8ea74162.js";import N from"./AnswerCollections-cc1e6a8e.js";import pe from"./AnswersOnImage-f9fdb049.js";/* empty css                                                          */const ce={key:0},De={key:1},fe={key:0},we={key:1},Ve={key:0,class:"answer_editor"},be={class:"action_edit"},ge={key:0},xe={__name:"ContentAnswers",props:["componentData"],setup(m){const t=m,O=A(!1),R=A("main"),C=A(t.componentData.answersList.map(s=>!1)),T=A(!1),$=s=>{C.value[s]=!C.value[s]},z=()=>{T.value=!T.value},P=s=>{C.value.splice(s,1),t.componentData.answersList.splice(s,1)},S=s=>{if(s===0)return;const a=t.componentData.answersList[s];t.componentData.answersList[s]=t.componentData.answersList[s-1],t.componentData.answersList[s-1]=a},F=s=>{if(s===t.componentData.answersList.length-1)return;const a=t.componentData.answersList[s];t.componentData.answersList[s]=t.componentData.answersList[s+1],t.componentData.answersList[s+1]=a},Q=s=>{let a=t.componentData.combinationOfAnswers.findIndex(D=>D.name===s);t.componentData.combinationOfAnswers.splice(a,1)},j=()=>{C.value.push(!1),t.componentData.combinationOfAnswers.push({name:"",isCorrect:!0,combinationWarning:{text:"",color:"",image:"",showTime:0,buttons:[{buttonName:"Закрыть",action:{name:"closeModalWarning"}}]}})},G=()=>{if(t.componentData.answersList.length===0)return 0;let s=!1;for(let l=0;l<t.componentData.answersList.length;l++)if(!t.componentData.answersList[l].id){s=!0;break}if(s){for(let l=0;l<t.componentData.answersList.length;l++)t.componentData.answersList[l].id=l+1;return t.componentData.answersList.length}const a=t.componentData.answersList.map(l=>l.id);return Math.max(...a)},J=()=>{t.componentData.answersList.push({id:G()+1,answerText:"",isRight:!1,notRequired:!1,image:{imageURL:"",label:""},action:{doAction:!1,clickAction:!1,name:"moveToStep",internalId:0,checkQuestion:!1,trackRepeatAnswer:!1},isRightAlt:!1})},K=()=>{t.componentData.imagesData==null&&(t.componentData.isAnswersWithImage=!1,t.componentData.isAnswersOnImage=!1,t.componentData.imagesData={imagesWidthPercent:100,imagesList:[{imageURL:"",label:""}]}),t.componentData.textData==null&&(t.componentData.textData={text:""}),t.componentData.markers==null&&(t.componentData.markers=[])};ee(()=>{K()});const M=s=>{t.componentData.answerCollections===void 0&&(t.componentData.answerCollections=[]),t.componentData.answerCollections.push(s)},B=s=>{const a=t.componentData.answerCollections.findIndex(D=>D.id===s);if(a===-1){log("Коллекция с таким id не найдена");return}t.componentData.answerCollections.splice(a,1)};return(s,a)=>{const D=p("el-switch"),l=p("el-form-item"),x=p("el-option"),X=p("el-select"),y=p("el-divider"),V=p("el-input"),b=p("el-button"),H=p("el-input-number"),u=p("el-col"),L=p("el-row"),_=p("el-text"),I=p("el-checkbox"),U=p("el-tab-pane"),Y=p("el-tabs");return i(),c(Y,{class:"demo-tabs",modelValue:R.value,"onUpdate:modelValue":a[26]||(a[26]=n=>R.value=n),type:"card",onTabClick:s.handleClick},{default:o(()=>[e(U,{label:"Основной",name:"main"},{default:o(()=>[e(l,{label:"Множественный выбор:"},{default:o(()=>[e(D,{modelValue:t.componentData.multiple,"onUpdate:modelValue":a[0]||(a[0]=n=>t.componentData.multiple=n)},null,8,["modelValue"])]),_:1}),e(l,{label:"Вид кнопок:"},{default:o(()=>[e(X,{modelValue:t.componentData.answersButtonType,"onUpdate:modelValue":a[1]||(a[1]=n=>t.componentData.answersButtonType=n),placeholder:"please select"},{default:o(()=>[e(x,{label:"Чекбоксы",value:"checkboxes"}),e(x,{label:"Кнопки",value:"buttons"}),e(x,{label:"Картинки+чекбоксы",value:"imageCheckboxes"})]),_:1},8,["modelValue"])]),_:1}),e(y),e(l,{label:"Подсказки:"},{default:o(()=>[e(D,{modelValue:t.componentData.hints,"onUpdate:modelValue":a[2]||(a[2]=n=>t.componentData.hints=n)},null,8,["modelValue"])]),_:1}),t.componentData.hints?(i(),w("div",ce,[e(l,{label:"Количество попыток:"},{default:o(()=>[e(V,{modelValue:t.componentData.totalHints,"onUpdate:modelValue":a[3]||(a[3]=n=>t.componentData.totalHints=n)},null,8,["modelValue"])]),_:1}),e(l,{label:"Анонс подсказки:"},{default:o(()=>[e(V,{modelValue:t.componentData.hintText,"onUpdate:modelValue":a[4]||(a[4]=n=>t.componentData.hintText=n)},null,8,["modelValue"])]),_:1}),e(l,{label:"Открыть модальную подсказку:"},{default:o(()=>[e(D,{modelValue:t.componentData.useModalHint,"onUpdate:modelValue":a[5]||(a[5]=n=>t.componentData.useModalHint=n)},null,8,["modelValue"])]),_:1}),t.componentData.useModalHint&&t.componentData.modalHintDescription!==void 0?(i(),c(l,{key:0,label:"Текст дополнительного описания:"},{default:o(()=>[e(V,{modelValue:t.componentData.modalHintDescription,"onUpdate:modelValue":a[6]||(a[6]=n=>t.componentData.modalHintDescription=n)},null,8,["modelValue"])]),_:1})):d("",!0),O.value||m.componentData.showLegend!=null&&m.componentData!=null?(i(),w("div",De,[e(l,{label:"Показывать легенду альтернативных ответов:"},{default:o(()=>[e(D,{modelValue:m.componentData.showLegend,"onUpdate:modelValue":a[7]||(a[7]=n=>m.componentData.showLegend=n)},null,8,["modelValue"])]),_:1}),m.componentData.showLegend?(i(),w("div",fe,[e(l,{label:"Текст легенды альтернативных ответов:"},{default:o(()=>[e(V,{modelValue:m.componentData.legendText,"onUpdate:modelValue":a[8]||(a[8]=n=>m.componentData.legendText=n)},null,8,["modelValue"])]),_:1}),e(l,{label:"Текст легенды альтернативных ответов цветной:"},{default:o(()=>[e(V,{modelValue:m.componentData.legendColoredText,"onUpdate:modelValue":a[9]||(a[9]=n=>m.componentData.legendColoredText=n)},null,8,["modelValue"])]),_:1}),e(l,{label:"Цвет:"},{default:o(()=>[e(de,{modelValue:m.componentData.legendTextColor,"onUpdate:modelValue":a[10]||(a[10]=n=>m.componentData.legendTextColor=n)},null,8,["modelValue"])]),_:1})])):d("",!0)])):d("",!0),e(k,{parameters:t.componentData.hintWarning},null,8,["parameters"])])):d("",!0),e(y),e(l,{label:"Предупреждения:"},{default:o(()=>[e(D,{modelValue:t.componentData.warnings,"onUpdate:modelValue":a[11]||(a[11]=n=>t.componentData.warnings=n)},null,8,["modelValue"])]),_:1}),t.componentData.warnings?(i(),w("div",we,[e(l,{label:"Все верные:"}),e(k,{parameters:t.componentData.allCorrect},null,8,["parameters"]),e(l,{label:"Все неверные/часть неверных:"}),e(k,{parameters:t.componentData.allInorrectPartlyIncorrect},null,8,["parameters"]),e(l,{label:"Часть верных:"}),e(k,{parameters:t.componentData.partlyCorrect},null,8,["parameters"]),e(l,{label:"Часть верных + неверные:"}),e(k,{parameters:t.componentData.partlyCorrectpartlyIncorrect},null,8,["parameters"]),e(l,{label:"Все верные + неверные:"}),e(k,{parameters:t.componentData.allCorrectPartlyIncorrect},null,8,["parameters"]),e(l,{label:"Комбинации:"}),(i(!0),w(W,null,q(t.componentData.combinationOfAnswers,n=>(i(),w("div",null,[e(Z,{parameters:n,onDeleteCombination:Q},null,8,["parameters","onDeleteCombination"])]))),256)),e(b,{type:"success",round:"",onClick:j},{default:o(()=>[g("+ Добавить комбинацию")]),_:1})])):d("",!0),e(y),e(l,{label:"Стили:"},{default:o(()=>[e(l,{label:"Кол-во колонок:"},{default:o(()=>[e(H,{modelValue:t.componentData.columns,"onUpdate:modelValue":a[12]||(a[12]=n=>t.componentData.columns=n),min:1,max:10},null,8,["modelValue"])]),_:1})]),_:1}),e(y),e(l,{label:"Содержание вопроса:"}),e(L,null,{default:o(()=>[e(u,{span:1}),e(u,{class:"question_text_col",span:12},{default:o(()=>[e(V,{modelValue:t.componentData.questionText,"onUpdate:modelValue":a[13]||(a[13]=n=>t.componentData.questionText=n)},null,8,["modelValue"])]),_:1})]),_:1}),e(L,null,{default:o(()=>[e(u,{span:1}),e(u,{span:12},{default:o(()=>[e(_,null,{default:o(()=>[g("Текст ответа")]),_:1})]),_:1}),e(u,{span:1},{default:o(()=>[e(_,null,{default:o(()=>[g("Правильный")]),_:1})]),_:1}),e(u,{span:1},{default:o(()=>[e(_,null,{default:o(()=>[g("Альт. прав.")]),_:1})]),_:1}),m.componentData.multiple?(i(),c(u,{key:0,span:2},{default:o(()=>[e(_,null,{default:o(()=>[g("Прав. необ.")]),_:1})]),_:1})):d("",!0),e(u,{span:2})]),_:1}),(i(!0),w(W,null,q(m.componentData.answersList,(n,f)=>(i(),c(L,{key:n.id,gutter:20},{default:o(()=>[e(u,{span:1},{default:o(()=>[e(_,null,{default:o(()=>[g(h(f+1),1)]),_:2},1024)]),_:2},1024),e(u,{span:1},{default:o(()=>[e(_,null,{default:o(()=>[g(h(n.id),1)]),_:2},1024)]),_:2},1024),e(u,{span:11},{default:o(()=>[e(V,{modelValue:n.answerText,"onUpdate:modelValue":r=>n.answerText=r},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(u,{span:1},{default:o(()=>[e(I,{modelValue:n.isRight,"onUpdate:modelValue":r=>n.isRight=r,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),n.isRightAlt!=null?(i(),c(u,{key:0,span:1},{default:o(()=>[e(I,{modelValue:n.isRightAlt,"onUpdate:modelValue":r=>n.isRightAlt=r,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):d("",!0),m.componentData.multiple?(i(),c(u,{key:1,span:2},{default:o(()=>[e(I,{modelValue:n.notRequired,"onUpdate:modelValue":r=>n.notRequired=r,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):d("",!0),e(u,{span:4},{default:o(()=>[e(b,{type:"warning",icon:v(te),circle:"",onClick:r=>S(f)},null,8,["icon","onClick"]),e(b,{type:"warning",icon:v(ne),circle:"",onClick:r=>F(f)},null,8,["icon","onClick"]),e(b,{type:"danger",icon:v(ae),circle:"",onClick:r=>P(f)},null,8,["icon","onClick"])]),_:2},1024),e(u,{span:m.componentData.multiple?3:5},{default:o(()=>[C.value[f]?d("",!0):(i(),c(b,{key:0,type:"primary",icon:v(oe),plain:"",onClick:r=>$(f)},null,8,["icon","onClick"])),C.value[f]?(i(),c(b,{key:1,type:"primary",icon:v(le),plain:"",onClick:r=>$(f)},null,8,["icon","onClick"])):d("",!0)]),_:2},1032,["span"]),e(u,{span:1}),e(u,{span:21},{default:o(()=>[C.value[f]?(i(),w("div",Ve,[e(E,{modelValue:n.answerText,"onUpdate:modelValue":r=>n.answerText=r},null,8,["modelValue","onUpdate:modelValue"]),se("div",be,[e(re,{action:n.action},null,8,["action"])])])):d("",!0)]),_:2},1024),m.componentData.answersButtonType==="imageCheckboxes"&&n.image!=null?(i(),c(L,{key:2},{default:o(()=>[e(me,{image:n.image,hideLabel:!0},null,8,["image"])]),_:2},1024)):d("",!0)]),_:2},1024))),128)),e(y),e(L,null,{default:o(()=>[e(u,{span:6},{default:o(()=>[e(b,{onClick:J,type:"success",round:""},{default:o(()=>[g("+ Добавить поле ")]),_:1})]),_:1})]),_:1}),m.componentData.answersList?(i(),c(N,{key:2,answerCollectionsData:m.componentData.answerCollections,answersList:m.componentData.answersList,onAddCollectionToList:a[14]||(a[14]=n=>M(n)),onDeleteCollection:a[15]||(a[15]=n=>B(n)),onMoveUpCollection:a[16]||(a[16]=n=>s.moveUpCollection(n)),onMoveDownCollection:a[17]||(a[17]=n=>s.moveDownCollection(n))},null,8,["answerCollectionsData","answersList"])):d("",!0)]),_:1}),e(U,{label:"Стили",name:"style"},{default:o(()=>[e(l,{label:"Стили:"},{default:o(()=>[e(l,{label:"Кол-во колонок:"}),e(H,{modelValue:t.componentData.columns,"onUpdate:modelValue":a[18]||(a[18]=n=>t.componentData.columns=n),min:1,max:10},null,8,["modelValue"])]),_:1})]),_:1}),e(U,{label:"С картинкой",name:"withImage"},{default:o(()=>[e(l,{label:"Ответы с картинками?"},{default:o(()=>[e(D,{modelValue:t.componentData.isAnswersWithImage,"onUpdate:modelValue":a[19]||(a[19]=n=>t.componentData.isAnswersWithImage=n),style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue"])]),_:1}),t.componentData.isAnswersWithImage?(i(),c(l,{key:0,label:"Текст:"},{default:o(()=>[e(u,{span:22},{default:o(()=>[e(V,{modelValue:t.componentData.textData.text,"onUpdate:modelValue":a[20]||(a[20]=n=>t.componentData.textData.text=n),width:"30vw"},null,8,["modelValue"])]),_:1}),e(u,{span:2},{default:o(()=>[e(b,{type:"primary",icon:v(ie),plain:"",onClick:z},null,8,["icon"])]),_:1}),e(u,{span:22},{default:o(()=>[T.value?(i(),w("div",ge,[e(E,{modelValue:t.componentData.textData.text,"onUpdate:modelValue":a[21]||(a[21]=n=>t.componentData.textData.text=n)},null,8,["modelValue"])])):d("",!0)]),_:1})]),_:1})):d("",!0),e(l,{label:"Картинки:"},{default:o(()=>[t.componentData.imagesData!=null?(i(),c(ue,{key:0,componentData:t.componentData.imagesData},null,8,["componentData"])):d("",!0)]),_:1})]),_:1}),t.componentData?(i(),c(U,{key:0,label:"На картинке",name:"onImage",lazy:""},{default:o(()=>[e(pe,{componentData:t.componentData},null,8,["componentData"]),m.componentData.answersList?(i(),c(N,{key:0,answerCollectionsData:m.componentData.answerCollections,answersList:m.componentData.answersList,onAddCollectionToList:a[22]||(a[22]=n=>M(n)),onDeleteCollection:a[23]||(a[23]=n=>B(n)),onMoveUpCollection:a[24]||(a[24]=n=>s.moveUpCollection(n)),onMoveDownCollection:a[25]||(a[25]=n=>s.moveDownCollection(n))},null,8,["answerCollectionsData","answersList"])):d("",!0)]),_:1})):d("",!0)]),_:1},8,["modelValue","onTabClick"])}}};export{xe as default};
