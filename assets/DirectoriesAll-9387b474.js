import{a as n,o as h,f as T,_ as D,p as B,r as w,q as k,w as l,b as e,k as _,n as z,l as A,d as E,E as F,s as I,t as M}from"./index-e02e31f6.js";function N(y,i){const c=n("el-tab-pane");return h(),T(c,{label:"Компания"})}const q={},j=D(q,[["render",N]]),G={__name:"ThemesDirectory",setup(y){const i=B();w([]);const c=w([]),s=w({name:"",title:""}),p=()=>{c.value=i.testThemes.map(()=>!1)},V=async()=>{try{const a={name:s.value.name,title:s.value.title};await i.createTestTheme(a),p(),s.value.title="",s.value.name=""}catch(a){console.error(a),F.error({message:`Произошла ошибка: ${a.message}`,duration:0})}},C=(a,o,r)=>{c.value[a]=!c.value[a],c.value[a]||i.updateTestThemes(o,r)};k(()=>{p()});const x=async(a,o)=>{try{await I.updateTheme(a,{...o,is_active:!o.is_active}),o.is_active=!o.is_active}catch(r){console.error(r),F.error({message:`Произошла ошибка: ${r.message}`,duration:0})}};return(a,o)=>{const r=n("el-input"),d=n("el-table-column"),$=n("el-switch"),f=n("el-popconfirm"),v=n("el-icon"),m=n("el-button"),S=n("el-table"),b=n("el-col"),U=n("el-row"),g=n("el-tab-pane");return h(),T(g,{label:"Тематика сценариев"},{default:l(()=>[e(S,{data:_(i).testThemes,style:{width:"100%"},border:"",height:"650"},{default:l(()=>[e(d,{label:"Имя"},{default:l(t=>[e(r,{modelValue:t.row.name,"onUpdate:modelValue":u=>t.row.name=u,disabled:!c.value[t.$index]},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1}),e(d,{label:"Заголовок"},{default:l(t=>[e(r,{modelValue:t.row.title,"onUpdate:modelValue":u=>t.row.title=u,disabled:!c.value[t.$index]},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1}),e(d,{prop:"is_active",label:"Публикация",width:"120"},{default:l(t=>[e(f,{"confirm-button-text":"Да","cancel-button-text":"Нет","icon-color":"#F56C6C",title:"Изменить статус?",onConfirm:u=>x(t.row.id,t.row),width:"180px"},{reference:l(()=>[e($,{value:t.row.is_active,style:{"--el-switch-on-color":"#2C3E50","--el-switch-off-color":"#797979"}},null,8,["value"])]),_:2},1032,["onConfirm"])]),_:1}),e(d,{label:"Управление",width:"120"},{default:l(t=>[e(f,{"confirm-button-text":"Да","cancel-button-text":"Нет","icon-color":"#F56C6C",title:"Вы уверены, что хотите удалить тематику?",onConfirm:u=>_(i).deleteServerTheme(t.row.id)},{reference:l(()=>[e(m,{size:"small"},{default:l(()=>[e(v,{size:"small",color:"#F83A3A"},{default:l(()=>[e(_(z))]),_:1})]),_:1})]),_:2},1032,["onConfirm"]),e(m,{size:"small",onClick:u=>C(t.$index,t.row.id,t.row)},{default:l(()=>[e(v,{size:"small",color:"#FF8A00"},{default:l(()=>[e(_(A))]),_:1})]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(U,null,{default:l(()=>[e(b,{class:"input-col",span:9},{default:l(()=>[e(r,{modelValue:s.value.name,"onUpdate:modelValue":o[0]||(o[0]=t=>s.value.name=t),placeholder:"Имя"},null,8,["modelValue"])]),_:1}),e(b,{class:"input-col",span:9},{default:l(()=>[e(r,{modelValue:s.value.title,"onUpdate:modelValue":o[1]||(o[1]=t=>s.value.title=t),placeholder:"Заголовок"},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{class:"btn__filter",color:"#2C3E50",onClick:o[2]||(o[2]=t=>V())},{default:l(()=>[E("Добавить новый ")]),_:1})]),_:1})}}},H={__name:"TypesDirectory",setup(y){const i=M(),c=w([]),s=w({name:"",description:""}),p=()=>{c.value=i.testTypes.map(()=>!1)},V=async()=>{try{const a={name:s.value.name,description:s.value.description};await i.createTestType(a),p(),s.value.description="",s.value.name=""}catch(a){console.error(a)}},C=(a,o,r)=>{c.value[a]=!c.value[a],c.value[a]||i.updateTestType(o,r)};k(()=>{p()});const x=async(a,o)=>{try{await i.updateTestType(a,{...o,is_active:!o.is_active}),o.is_active=!o.is_active}catch(r){console.error(r),F.error({message:`Произошла ошибка: ${r.message}`,duration:0})}};return(a,o)=>{const r=n("el-input"),d=n("el-table-column"),$=n("el-switch"),f=n("el-popconfirm"),v=n("el-icon"),m=n("el-button"),S=n("el-table"),b=n("el-col"),U=n("el-row"),g=n("el-tab-pane");return h(),T(g,{label:"Типы сценариев"},{default:l(()=>[e(S,{data:_(i).testTypes,style:{width:"100%"},border:"",height:"650"},{default:l(()=>[e(d,{label:"Имя"},{default:l(t=>[e(r,{modelValue:t.row.name,"onUpdate:modelValue":u=>t.row.name=u,disabled:!c.value[t.$index]},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1}),e(d,{label:"Описание"},{default:l(t=>[e(r,{modelValue:t.row.description,"onUpdate:modelValue":u=>t.row.description=u,disabled:!c.value[t.$index]},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1}),e(d,{prop:"is_active",label:"Публикация",width:"120"},{default:l(t=>[e(f,{"confirm-button-text":"Да","cancel-button-text":"Нет","icon-color":"#F56C6C",title:"Изменить статус?",onConfirm:u=>x(t.row.id,t.row),width:"180px"},{reference:l(()=>[e($,{value:t.row.is_active,style:{"--el-switch-on-color":"#2C3E50","--el-switch-off-color":"#797979"}},null,8,["value"])]),_:2},1032,["onConfirm"])]),_:1}),e(d,{label:"Управление",width:"120"},{default:l(t=>[e(f,{"confirm-button-text":"Да","cancel-button-text":"Нет","icon-color":"#F56C6C",title:"Вы уверены, что хотите удалить тип?",onConfirm:u=>_(i).deleteTestType(t.row.id)},{reference:l(()=>[e(m,{size:"small"},{default:l(()=>[e(v,{size:"small",color:"#F83A3A"},{default:l(()=>[e(_(z))]),_:1})]),_:1})]),_:2},1032,["onConfirm"]),e(m,{size:"small",onClick:u=>C(t.$index,t.row.id,t.row)},{default:l(()=>[e(v,{size:"small",color:"#FF8A00"},{default:l(()=>[e(_(A))]),_:1})]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(U,null,{default:l(()=>[e(b,{class:"input-col",span:9},{default:l(()=>[e(r,{modelValue:s.value.name,"onUpdate:modelValue":o[0]||(o[0]=t=>s.value.name=t),placeholder:"Имя"},null,8,["modelValue"])]),_:1}),e(b,{class:"input-col",span:9},{default:l(()=>[e(r,{modelValue:s.value.description,"onUpdate:modelValue":o[1]||(o[1]=t=>s.value.description=t),placeholder:"Описание"},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{class:"btn__filter",color:"#2C3E50",onClick:o[2]||(o[2]=t=>V())},{default:l(()=>[E("Добавить новый")]),_:1})]),_:1})}}},K={__name:"DirectoriesAll",setup(y){return(i,c)=>{const s=n("el-tabs");return h(),T(s,{type:"border-card"},{default:l(()=>[e(j),e(G),e(H)]),_:1})}}};export{K as default};
