const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./welcome-DbaT5_27.js","./index-D83YqL5l.js","./libs-Dw3TJ6XE.js","./arcoDesign-BLRznqck.js","./index-RQSg7sAv.css","./setToken-U3XbJAex.js","./index-KzozSCbq.js","./setToken-Bs2VO9S0.css","./addDownloader-XVupg6lS.js","./init-lwz-MYXw.js","./result-aU5vKJmw.js","./result-BQvipc9W.css"])))=>i.map(i=>d[i]);
import{l as c}from"./index-D83YqL5l.js";import{f as L,a6 as P,r as f,c as A,s as n,t,j as a,y as s,k as B,P as D,F as R,p as S,al as N,O,v as u,x as p,a2 as v,u as y,aa as l}from"./libs-Dw3TJ6XE.js";import{W as j,at as F,au as H,B as M,av as z,S as U,V as W,aw as q}from"./arcoDesign-BLRznqck.js";const G={style:{width:"100%",minHeight:"50vh",textAlign:"center",position:"relative"}},Z=L({__name:"index",setup(J){const{t:o}=P(),e=f(1),g=A(()=>[{title:o("page.oobe.steps.welcome"),description:""},{title:o("page.oobe.steps.setToken.title"),description:o("page.oobe.steps.setToken.description")},{title:o("page.oobe.steps.addDownloader.title"),description:""},{title:o("page.oobe.steps.success.title"),description:o("page.oobe.steps.success.description")}]),r=f({token:"",downloaderConfig:{name:"",config:{basicAuth:{},verifySsl:!0,httpVersion:"HTTP_1_1",incrementBan:!0}},valid:!1}),k=[l(()=>c(()=>import("./welcome-DbaT5_27.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),l(()=>c(()=>import("./setToken-U3XbJAex.js"),__vite__mapDeps([5,1,2,3,4,6,7]),import.meta.url)),l(()=>c(()=>import("./addDownloader-XVupg6lS.js"),__vite__mapDeps([8,1,2,3,4,9]),import.meta.url)),l(()=>c(()=>import("./result-aU5vKJmw.js"),__vite__mapDeps([10,1,2,3,4,9,11]),import.meta.url))],x=()=>{e.value=Math.max(1,e.value-1)},b=()=>{switch(e.value){case 1:return!0;case 2:return r.value.token.length>0;case 3:return r.value.valid;case 4:return!1}},h=()=>{e.value=Math.min(4,e.value+1)};return(K,_)=>{const V=q,w=F,C=H,d=M,E=z,m=U,I=W,T=j;return a(),n(T,{justify:"center",style:{margin:"2% auto 0",width:"100%"}},{default:t(()=>[s(I,{xl:16,md:18,sm:24},{default:t(()=>[s(m,{direction:"vertical",style:{display:"flex","justify-content":"center"}},{default:t(()=>[s(w,{current:e.value},{default:t(()=>[(a(!0),B(R,null,D(g.value,i=>(a(),n(V,{key:i.title,description:i.description},{default:t(()=>[u(p(i.title),1)]),_:2},1032,["description"]))),128))]),_:1},8,["current"]),S("div",G,[(a(),n(N,null,{default:t(()=>[(a(),n(O(k[e.value-1]),{modelValue:r.value,"onUpdate:modelValue":_[0]||(_[0]=i=>r.value=i)},null,8,["modelValue"]))]),_:1}))]),s(m,{size:"large",style:{display:"flex","justify-content":"center"}},{default:t(()=>[e.value>1?(a(),n(d,{key:0,type:"secondary",onClick:x},{default:t(()=>[s(C),u(" "+p(v(o)("page.oobe.action.back")),1)]),_:1})):y("",!0),e.value<4?(a(),n(d,{key:1,type:"primary",disabled:!b(),onClick:h},{default:t(()=>[u(p(v(o)("page.oobe.action.next"))+" ",1),s(E)]),_:1},8,["disabled"])):y("",!0)]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Z as default};
