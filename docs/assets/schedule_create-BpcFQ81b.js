import{_ as T}from"./TeniPuraScheduleHome-B6Khm7p-.js";import{V as $,c as j,a as B}from"./VTable-DYyC8_qi.js";import{V as C,a as f,b as U}from"./VSelect-CbrTAI67.js";import{r as o,f as A,o as x,c,w as g,k as i,j as t,i as a,u as M,V as P,q as K}from"./index-VrF7NJa8.js";/* empty css                                                                  */import"./VCheckboxBtn-DtiSs9Ci.js";const E={class:"d-flex flex-row justify-end text-black"},F={__name:"TeniPuraScheduleCreate",setup(b){const v=o(!1),k=o(!1),u=o(!1),n=o(new Date),s=o("6:00"),r=o("8:00"),d=o("小金井公園"),m=o(""),D=w=>{if(n.value){console.log(n);let e=new Date(n.value),p=e.getFullYear(),l=e.getMonth()+1,N=e.getDate(),S=`${p}/${l}/${N}`;console.log(S),console.log(s.value),console.log(r.value),console.log(d.value),console.log(m.value);let y="https://script.google.com/macros/s/AKfycbwOtbT0YoBijvxmn5N_ivSGgNHnL4vPr50ajnmNIofZMZGjSkks2iuEDJKt1be0t86O/exec?mode=create&date="+S+"&time="+s.value+"-"+r.value+"&area="+d.value+"&memo="+m.value;console.log(y),v.value=!0,B.get(y).then(V=>{console.log(V),u.value=!u.value}).catch(V=>{console.log(V),k.value=!0}).finally(()=>v.value=!1)}else console.log("日付が選択されていません。"),alert("日付を選択してください。")};return A(()=>{}),(w,e)=>{const p=T;return x(),c(j,null,{default:g(()=>[e[12]||(e[12]=i("p",null,"追加する予定を記入してください",-1)),e[13]||(e[13]=i("br",null,null,-1)),t($,{class:"mx-auto"},{default:g(()=>[e[7]||(e[7]=a(" 日程: ")),t(M(C),{"prepend-icon":"",modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=l=>n.value=l)},null,8,["modelValue"]),e[8]||(e[8]=a(" 開始時刻: ")),t(f,{modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=l=>s.value=l),items:["6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"]},null,8,["modelValue"]),e[9]||(e[9]=a(" 終了時間: ")),t(f,{modelValue:r.value,"onUpdate:modelValue":e[2]||(e[2]=l=>r.value=l),items:["7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"]},null,8,["modelValue"]),e[10]||(e[10]=a(" 場所: ")),t(f,{modelValue:d.value,"onUpdate:modelValue":e[3]||(e[3]=l=>d.value=l),items:["善福寺川緑地","井の頭恩賜公園","武蔵野中央公園","小金井公園","野川公園","府中の森公園","祖師谷公園","高井戸公園"]},null,8,["modelValue"]),e[11]||(e[11]=a(" メモ: ")),t(U,{modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=l=>m.value=l)},null,8,["modelValue"]),i("div",E,[t(P,{color:"primary",onClick:e[5]||(e[5]=l=>D("clickAddSchedule"))},{default:g(()=>e[6]||(e[6]=[a(" 予定の追加 ")])),_:1})])]),_:1}),e[14]||(e[14]=a(" 「予定の追加」ボタン後、下のスケジュールに反映されていることを確認してして下さい。 ")),e[15]||(e[15]=i("br",null,null,-1)),t(K,{class:"border-opacity-75"}),(x(),c(p,{key:u.value}))]),_:1})}}},q={__name:"schedule_create",setup(b){return(v,k)=>{const u=F;return x(),c(u)}}};export{q as default};
