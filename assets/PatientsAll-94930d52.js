import{u as V,r as A,a as t,o as d,c as f,b as e,w as l,d as k,F as g,e as F,f as h,g as m,h as z,i as I,j as x,k as w,l as $,m as T,n as D,_ as E}from"./index-403d6067.js";const B=m("p",null,"Поиск",-1),M=m("p",null,"Пол",-1),y=m("div",{class:"filter"},null,-1),L=m("p",null,"Возраст",-1),R=m("p",null,"Рост",-1),U=m("p",null,"Вес",-1),P={__name:"PatientFilter",setup(C){V();const _=A(),r=[{id:1,value:!0,label:"Мужина"},{id:2,value:!1,label:"Женщина"}];return(o,i)=>{const n=t("el-row"),s=t("el-input"),c=t("el-button"),u=t("el-col"),p=t("el-option"),b=t("el-select");return d(),f(g,null,[e(n),e(n,{class:"filters",gutter:24},{default:l(()=>[e(u,{span:5},{default:l(()=>[B,e(s,{modelValue:o.name,"onUpdate:modelValue":i[0]||(i[0]=a=>o.name=a),placeholder:"Поиск"},null,8,["modelValue"]),e(c,{class:"btn__filter",color:"#2C3E50",onClick:i[1]||(i[1]=a=>o.filterOptions())},{default:l(()=>[k("Применить фильтр")]),_:1})]),_:1}),e(u,{span:3},{default:l(()=>[M,e(b,{clearable:"",modelValue:_.value,"onUpdate:modelValue":i[2]||(i[2]=a=>_.value=a),placeholder:"Любой"},{default:l(()=>[(d(),f(g,null,F(r,a=>e(p,{key:a.id,label:a.label,value:a.id},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),y]),_:1}),e(u,{span:3},{default:l(()=>[L,e(b,{clearable:"",modelValue:o.theme,"onUpdate:modelValue":i[3]||(i[3]=a=>o.theme=a),placeholder:"Любой"},{default:l(()=>[(d(!0),f(g,null,F(o.statuses,a=>(d(),h(p,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(u,{span:3},{default:l(()=>[R,e(b,{clearable:"",modelValue:o.value,"onUpdate:modelValue":i[4]||(i[4]=a=>o.value=a),placeholder:"Любой"},{default:l(()=>[(d(!0),f(g,null,F(o.statuses,a=>(d(),h(p,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(u,{span:3},{default:l(()=>[U,e(b,{clearable:"",modelValue:o.value,"onUpdate:modelValue":i[5]||(i[5]=a=>o.value=a),placeholder:"Любой"},{default:l(()=>[(d(!0),f(g,null,F(o.statuses,a=>(d(),h(p,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)}}},X={__name:"PatientTable",setup(C){z(),V();const _=(i,n)=>{},r=A(!1),o=A([{id:1,gender:"Мужчина",age:"64",height:"181",weight:"97",description:"Гипертоник",BMI:"",general_condition:"",behavior:"",consciousness:"",meningeal_signs:!1},{id:2,gender:"Женщина",age:"49",height:"164",weight:"91",description:"Жалоб нет",BMI:"",general_condition:"",behavior:"",consciousness:"",meningeal_signs:!1},{id:3,gender:"Женщина",age:"55",height:"155",weight:"72",description:"Критическое состояние",BMI:"",general_condition:"",behavior:"",consciousness:"",meningeal_signs:!1},{id:4,gender:"Мужчина",age:"31",height:"177",weight:"98",description:"Поражение мозга",BMI:"",general_condition:"",behavior:"",consciousness:"",meningeal_signs:!1},{id:5,gender:"Женщина",age:"52",height:"173",weight:"82",description:"Сломана нога",BMI:"",general_condition:"",behavior:"",consciousness:"",meningeal_signs:!1}]);return(i,n)=>{const s=t("el-table-column"),c=t("el-icon"),u=t("el-button"),p=t("el-popconfirm"),b=t("el-table"),a=I("loading");return d(),f(g,null,[e(P),m("main",null,[x((d(),h(b,{data:o.value,"default-sort":{prop:"id",order:"ascending"},style:{width:"100%",height:"62vh"},border:""},{default:l(()=>[e(s,{prop:"id",label:"ID",sortable:"",width:"65"}),e(s,{prop:"gender",label:"Пол",sortable:"","min-width":"80"}),e(s,{prop:"age",label:"Возраст",sortable:"","min-width":"65"}),e(s,{prop:"height",label:"Рост",sortable:"","min-width":"65"}),e(s,{prop:"weight",label:"Вес",sortable:"","min-width":"65"}),e(s,{prop:"description",label:"Описание",sortable:"","min-width":"320"}),e(s,{label:"Управление","min-width":"120"},{default:l(v=>[e(p,{"confirm-button-text":"Да","cancel-button-text":"Нет","icon-color":"#F56C6C",width:"190",title:"Скопировать сценарий?",onConfirm:n[0]||(n[0]=()=>{})},{reference:l(()=>[e(u,{class:"control_btn",size:"small"},{default:l(()=>[e(c,{size:"small",color:"#FF8A00"},{default:l(()=>[e(w($))]),_:1})]),_:1})]),_:1}),e(p,{"confirm-button-text":"Да","cancel-button-text":"Нет","icon-color":"#F56C6C",width:"190",title:"Скопировать сценарий?",onConfirm:n[1]||(n[1]=()=>{})},{reference:l(()=>[e(u,{size:"small",onClick:N=>_(v.$index,v.row)},{default:l(()=>[e(c,{size:"small",color:"#00A65A"},{default:l(()=>[e(w(T))]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),e(p,{"confirm-button-text":"Да","cancel-button-text":"Нет","icon-color":"#F56C6C",width:"310",title:"Вы уверены, что хотите удалить сценарий?",onConfirm:n[2]||(n[2]=()=>{})},{reference:l(()=>[e(u,{size:"small"},{default:l(()=>[e(c,{size:"small",color:"#F83A3A"},{default:l(()=>[e(w(D))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["data"])),[[a,r.value]])])],64)}}},O={__name:"PatientTab",setup(C){return(_,r)=>{const o=t("el-button"),i=t("RouterLink"),n=t("el-tab-pane");return d(),h(n,{label:"Пациент"},{default:l(()=>[m("main",null,[e(i,{to:"/CreatePatient"},{default:l(()=>[e(o,{class:"btn",color:"#2C3E50",size:"large",plain:""},{default:l(()=>[k("+ Создать")]),_:1})]),_:1})]),e(X)]),_:1})}}},j=m("p",null,"Поиск",-1),J={__name:"DiseaseFilter",setup(C){return V(),(_,r)=>{const o=t("el-row"),i=t("el-input"),n=t("el-button"),s=t("el-col");return d(),f(g,null,[e(o),e(o,{class:"filters",gutter:24},{default:l(()=>[e(s,{span:5},{default:l(()=>[j,e(i,{modelValue:_.name,"onUpdate:modelValue":r[0]||(r[0]=c=>_.name=c),placeholder:"Поиск"},null,8,["modelValue"]),e(n,{class:"btn__filter",color:"#2C3E50",onClick:r[1]||(r[1]=c=>_.filterOptions())},{default:l(()=>[k("Применить фильтр")]),_:1})]),_:1})]),_:1})],64)}}},K={__name:"DiseaseTable",setup(C){z(),V();const _=(i,n)=>{},r=A(!1),o=A([{id:345,name:"Нестабильная стенокардия",ICD_10_code:"I20.0",description:"Дополнительное описание 1"},{id:425,name:"Пневмония неуточненная",ICD_10_code:"J18.9",description:"Дополнительное описание 2"},{id:426,name:"Гастроэзофагеальный рефлюкс с эзофагитом",ICD_10_code:"K21.0",description:"Дополнительное описание 3"},{id:512,name:"Инсулинзависимый сахарный диабет ",ICD_10_code:"E10",description:"Дополнительное описание 4"}]);return(i,n)=>{const s=t("el-table-column"),c=t("el-icon"),u=t("el-button"),p=t("el-popconfirm"),b=t("el-table"),a=I("loading");return d(),f(g,null,[e(J),m("main",null,[x((d(),h(b,{data:o.value,"default-sort":{prop:"id",order:"ascending"},style:{width:"100%",height:"62vh"},border:""},{default:l(()=>[e(s,{prop:"id",label:"ID",sortable:"",width:"65"}),e(s,{prop:"name",label:"Наименование",sortable:"","min-width":"320"}),e(s,{prop:"ICD_10_code",label:"Код МКБ10",sortable:"","min-width":"65"}),e(s,{prop:"description",label:"Описание",sortable:"","min-width":"320"}),e(s,{label:"Управление","min-width":"120"},{default:l(v=>[e(p,{"confirm-button-text":"Да","cancel-button-text":"Нет","icon-color":"#F56C6C",width:"190",title:"Скопировать сценарий?",onConfirm:n[0]||(n[0]=()=>{})},{reference:l(()=>[e(u,{class:"control_btn",size:"small"},{default:l(()=>[e(c,{size:"small",color:"#FF8A00"},{default:l(()=>[e(w($))]),_:1})]),_:1})]),_:1}),e(p,{"confirm-button-text":"Да","cancel-button-text":"Нет","icon-color":"#F56C6C",width:"190",title:"Скопировать сценарий?",onConfirm:n[1]||(n[1]=()=>{})},{reference:l(()=>[e(u,{size:"small",onClick:N=>_(v.$index,v.row)},{default:l(()=>[e(c,{size:"small",color:"#00A65A"},{default:l(()=>[e(w(T))]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),e(p,{"confirm-button-text":"Да","cancel-button-text":"Нет","icon-color":"#F56C6C",width:"310",title:"Вы уверены, что хотите удалить сценарий?",onConfirm:n[2]||(n[2]=()=>{})},{reference:l(()=>[e(u,{size:"small"},{default:l(()=>[e(c,{size:"small",color:"#F83A3A"},{default:l(()=>[e(w(D))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["data"])),[[a,r.value]])])],64)}}},S={__name:"DiseaseTab",setup(C){return(_,r)=>{const o=t("el-button"),i=t("RouterLink"),n=t("el-tab-pane");return d(),h(n,{label:"Заболевания"},{default:l(()=>[m("main",null,[e(i,{to:"/CreateDisease"},{default:l(()=>[e(o,{class:"btn",color:"#2C3E50",size:"large",plain:""},{default:l(()=>[k("+ Создать")]),_:1})]),_:1})]),e(K)]),_:1})}}},q=m("p",null,"Поиск",-1),G={__name:"MedicineFilter",setup(C){return V(),(_,r)=>{const o=t("el-row"),i=t("el-input"),n=t("el-button"),s=t("el-col");return d(),f(g,null,[e(o),e(o,{class:"filters",gutter:24},{default:l(()=>[e(s,{span:5},{default:l(()=>[q,e(i,{modelValue:_.name,"onUpdate:modelValue":r[0]||(r[0]=c=>_.name=c),placeholder:"Поиск"},null,8,["modelValue"]),e(n,{class:"btn__filter",color:"#2C3E50",onClick:r[1]||(r[1]=c=>_.filterOptions())},{default:l(()=>[k("Применить фильтр")]),_:1})]),_:1})]),_:1})],64)}}},H={__name:"MedicineTable",setup(C){z(),V();const _=(i,n)=>{},r=A(!1),o=A([{id:345,INN:"Ибупрофен",ATX_code:"M01AE01",brand_name:"Адвил, Бонифен, Бруфен СР, Бурана, Долгит, Ибалгин, Ибунорм, Ибупром, Ибуфен, Нурофен..."},{id:425,INN:"Метамизол натрия",ATX_code:"N02BB02",brand_name:"Анальгин, Баралгин"},{id:426,INN:"Ацетилцистеин",ATX_code:"R05CB01",brand_name:"АЦЦ, Мукоцил Солюшн Таблетс, Флуимуцил"},{id:512,INN:"Фуросемид",ATX_code:"C03CA01",brand_name:"Лазикс"}]);return(i,n)=>{const s=t("el-table-column"),c=t("el-icon"),u=t("el-button"),p=t("el-popconfirm"),b=t("el-table"),a=I("loading");return d(),f(g,null,[e(G),m("main",null,[x((d(),h(b,{data:o.value,"default-sort":{prop:"id",order:"ascending"},style:{width:"100%",height:"62vh"},border:""},{default:l(()=>[e(s,{prop:"id",label:"ID",sortable:"",width:"65"}),e(s,{prop:"INN",label:"Международное непатентованное название (МНН)",sortable:"","min-width":"320"}),e(s,{prop:"ATX_code",label:"Код ATX",sortable:"","min-width":"65"}),e(s,{prop:"brand_name",label:"Торговые названия",sortable:"","min-width":"320"}),e(s,{label:"Управление","min-width":"120"},{default:l(v=>[e(p,{"confirm-button-text":"Да","cancel-button-text":"Нет","icon-color":"#F56C6C",width:"190",title:"Скопировать сценарий?",onConfirm:n[0]||(n[0]=()=>{})},{reference:l(()=>[e(u,{class:"control_btn",size:"small"},{default:l(()=>[e(c,{size:"small",color:"#FF8A00"},{default:l(()=>[e(w($))]),_:1})]),_:1})]),_:1}),e(p,{"confirm-button-text":"Да","cancel-button-text":"Нет","icon-color":"#F56C6C",width:"190",title:"Скопировать сценарий?",onConfirm:n[1]||(n[1]=()=>{})},{reference:l(()=>[e(u,{size:"small",onClick:N=>_(v.$index,v.row)},{default:l(()=>[e(c,{size:"small",color:"#00A65A"},{default:l(()=>[e(w(T))]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),e(p,{"confirm-button-text":"Да","cancel-button-text":"Нет","icon-color":"#F56C6C",width:"310",title:"Вы уверены, что хотите удалить сценарий?",onConfirm:n[2]||(n[2]=()=>{})},{reference:l(()=>[e(u,{size:"small"},{default:l(()=>[e(c,{size:"small",color:"#F83A3A"},{default:l(()=>[e(w(D))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["data"])),[[a,r.value]])])],64)}}},Q={__name:"MedicineTab",setup(C){return(_,r)=>{const o=t("el-button"),i=t("RouterLink"),n=t("el-tab-pane");return d(),h(n,{label:"Лекарственные средства"},{default:l(()=>[m("main",null,[e(i,{to:"/CreateMedicine"},{default:l(()=>[e(o,{class:"btn",color:"#2C3E50",size:"large",plain:""},{default:l(()=>[k("+ Создать")]),_:1})]),_:1})]),e(H)]),_:1})}}},W={__name:"PatientsAll",setup(C){return(_,r)=>{const o=t("el-tabs");return d(),h(o,{class:"patient-tabs",type:"card",stretch:""},{default:l(()=>[e(O),e(S),e(Q)]),_:1})}}},Z=E(W,[["__scopeId","data-v-ed7289bc"]]);export{Z as default};
