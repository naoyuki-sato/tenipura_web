import{a as T,V as h,b as E,c as G}from"./VTable-DYyC8_qi.js";import{V as L,a as M}from"./VRadioGroup-BQlAVP9f.js";import{V as P,a as U,b as K}from"./VSelect-CbrTAI67.js";import{r as s,e as Y,B as C,f as Z,o as v,c as R,w as i,l as k,k as a,j as u,i as n,F as H,n as I,t as D,u as O,V as _}from"./index-VrF7NJa8.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VCheckboxBtn-DtiSs9Ci.js";const J={key:0},Q={key:1},W={class:"d-flex flex-row justify-end text-black"},X={__name:"TeniPuraScheduleUpdate",setup(F){const d=s(!1),V=s(!1),o=s(null),j=s([]),$=Y(()=>j.value.map(l=>o.value[l])),x=s(null),r=s(""),c=s(""),g=s(""),f=s(""),p=s("");C(j,l=>{console.log("選択された行番号",l),console.log("選択されたデータ",$.value)}),C(x,l=>{if(console.log("選択された行番号: ",l),console.log("選択されたデータ: ",o.value[l]),console.log("選択されたデータ: ",o.value[l].date),console.log("選択されたデータ: ",o.value[l].time),l!==null){r.value=new Date(o.value[l].date);const e=o.value[l].time.split("-");c.value=e[0],g.value=e[1],f.value=o.value[l].area,p.value=o.value[l].memo}}),Z(()=>{d.value=!0,T.get("https://script.google.com/macros/s/AKfycbwOtbT0YoBijvxmn5N_ivSGgNHnL4vPr50ajnmNIofZMZGjSkks2iuEDJKt1be0t86O/exec").then(l=>{console.log(l.data.items.length);for(let e=0;e<l.data.items.length;e++)console.log(l.data.items[e]);o.value=l.data.items}).catch(l=>{console.log(l),V.value=!0}).finally(()=>d.value=!1)});const A=l=>{if(r.value){console.log(r);let e=new Date(r.value),t=e.getFullYear(),y=e.getMonth()+1,S=e.getDate(),B=`${t}/${y}/${S}`;console.log(B),console.log(c.value),console.log(g.value),console.log(f.value),console.log(p.value);let N="https://script.google.com/macros/s/AKfycbyDneXaD-uCya72RE6Dv-HmaiFkvL4C5xqCes4x0TPyj5eZAbilN385mGRkWraQ0jYR/exec?mode=update&id="+x.value+"&date="+B+"&time="+c.value+"-"+g.value+"&area="+f.value+"&memo="+p.value;console.log(N),d.value=!0,T.get(N).then(m=>{console.log(m.data.items.length);for(let b=0;b<m.data.items.length;b++)console.log(m.data.items[b]);o.value=m.data.items}).catch(m=>{console.log(m),V.value=!0}).finally(()=>{d.value=!1})}else console.log("日付が選択されていません。"),alert("日付を選択してください。")};return(l,e)=>(v(),R(G,null,{default:i(()=>[d.value?(v(),k("section",J,e[7]||(e[7]=[a("div",null,"Loading",-1)]))):(v(),k("section",Q,[u(h,{class:"mx-auto"},{default:i(()=>[e[9]||(e[9]=n(" 更新したい予定を選択して、内容を変更して下さい。 ")),u(E,null,{default:i(()=>[e[8]||(e[8]=a("thead",null,[a("tr",null,[a("th",null,"選択"),a("th",null,"日程"),a("th",null,"時間"),a("th",null,"場所"),a("th",null,"メモ")])],-1)),(v(!0),k(H,null,I(o.value,(t,y)=>(v(),k("tbody",{key:t.date},[a("tr",null,[a("td",null,[u(L,{modelValue:x.value,"onUpdate:modelValue":e[0]||(e[0]=S=>x.value=S),value:y},{default:i(()=>[u(M,{value:y},null,8,["value"])]),_:2},1032,["modelValue","value"])]),a("td",null,D(t.date),1),a("td",null,D(t.time),1),a("td",null,D(t.area),1),a("td",null,D(t.memo),1)])]))),128))]),_:1})]),_:1}),u(h,{class:"mx-auto"},{default:i(()=>[e[11]||(e[11]=n(" 日程: ")),u(O(P),{"prepend-icon":"",modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=t=>r.value=t)},null,8,["modelValue"]),e[12]||(e[12]=n(" 開始時刻: ")),u(U,{modelValue:c.value,"onUpdate:modelValue":e[2]||(e[2]=t=>c.value=t),items:["6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"]},null,8,["modelValue"]),e[13]||(e[13]=n(" 終了時間: ")),u(U,{modelValue:g.value,"onUpdate:modelValue":e[3]||(e[3]=t=>g.value=t),items:["7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"]},null,8,["modelValue"]),e[14]||(e[14]=n(" 場所: ")),u(U,{modelValue:f.value,"onUpdate:modelValue":e[4]||(e[4]=t=>f.value=t),items:["善福寺川緑地","井の頭恩賜公園","武蔵野中央公園","小金井公園","野川公園","府中の森公園","祖師谷公園","高井戸公園"]},null,8,["modelValue"]),e[15]||(e[15]=n(" メモ: ")),u(K,{modelValue:p.value,"onUpdate:modelValue":e[5]||(e[5]=t=>p.value=t)},null,8,["modelValue"]),a("div",W,[u(_,{color:"primary",onClick:e[6]||(e[6]=t=>A("clickUpdateSchedule"))},{default:i(()=>e[10]||(e[10]=[n(" 予定の更新 ")])),_:1})])]),_:1})]))]),_:1}))}},w={};function z(F,d){const V=X;return v(),R(V)}const se=q(w,[["render",z]]);export{se as default};
