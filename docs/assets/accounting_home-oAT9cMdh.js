import{a as f,V as p,b as h,c as x}from"./VTable-BFaYrD-Y.js";import{r,f as b,o,c as g,w as c,k as t,j as i,l as m,F as v,n as k,t as n}from"./index-CLgiaRK5.js";/* empty css                                                                  */const V={__name:"TeniPuraAccountingHome",setup(_){const u=r(!1),d=r(!1),a=r(null);return b(()=>{let s="https://script.google.com/macros/s/AKfycbwOtbT0YoBijvxmn5N_ivSGgNHnL4vPr50ajnmNIofZMZGjSkks2iuEDJKt1be0t86O/exec?mode=read&name=accounting";console.log(s),u.value=!0,f.get(s).then(l=>{console.log(l.data.items.length);for(let e=0;e<l.data.items.length;e++)console.log(l.data.items[e]);a.value=l.data.items}).catch(l=>{console.log(l),d.value=!0}).finally(()=>u.value=!1)}),(s,l)=>(o(),g(x,null,{default:c(()=>[l[1]||(l[1]=t("p",null,"最終更新日: 2025/3/5 13:00",-1)),l[2]||(l[2]=t("br",null,null,-1)),i(p,{class:"mx-auto"},{default:c(()=>[i(h,null,{default:c(()=>[l[0]||(l[0]=t("thead",null,[t("tr",null,[t("th",null,"日程"),t("th",null,"科目"),t("th",null,"支出"),t("th",null,"収入"),t("th",null,"合計"),t("th",null,"備考")])],-1)),t("tbody",null,[(o(!0),m(v,null,k(a.value,e=>(o(),m("tr",{key:e.date},[t("td",null,n(e.date),1),t("td",null,n(e.subject),1),t("td",null,n(e.expence),1),t("td",null,n(e.income),1),t("td",null,n(e.total),1),t("td",null,n(e.memo),1)]))),128))])]),_:1})]),_:1})]),_:1}))}},N={__name:"accounting_home",setup(_){return(u,d)=>{const a=V;return o(),g(a)}}};export{N as default};
