import{a as o,o as e,c as s,F as _,e as k,f as B,w as a,b as n,k as C,B as g,x as y,d as L}from"./index-fd002604.js";import h from"./ActionButton-0e5f2583.js";import"./ActionItem-85929ba0.js";const v={key:0},F={__name:"ContentButtons",props:["componentData"],setup(i){const t=i,m=()=>{t.componentData.buttonsList.push({buttonName:"",action:{name:"",internalId:0,checkQuestion:!1,closeSessionPick:!1},image:{imageURL:"",label:""}})},p=c=>{t.componentData.buttonsList.splice(c,1)};return(c,x)=>{var u;const l=o("el-button"),d=o("el-col"),f=o("el-row");return e(),s(_,null,[(u=t.componentData)!=null&&u.buttonsList?(e(),s("div",v,[(e(!0),s(_,null,k(t.componentData.buttonsList,(b,r)=>(e(),B(f,{key:r},{default:a(()=>[n(h,{button:b},null,8,["button"]),n(d,{span:2},{default:a(()=>[n(l,{class:"single-delete-btn",type:"danger",icon:C(g),circle:"",onClick:D=>p(r)},null,8,["icon","onClick"])]),_:2},1024)]),_:2},1024))),128))])):y("",!0),n(l,{onClick:m,type:"success",round:""},{default:a(()=>[L("+ Добавить кнопку")]),_:1})],64)}}};export{F as default};
