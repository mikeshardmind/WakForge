import{_ as v,r as h,f,g as d,o as c,h as r,j as t,t as o,k as a,F as y,m as w,a3 as C,s as G,x as $}from"./index-5f11d770.js";const k=n=>(G("data-v-452e0428"),n=n(),$(),n),S={class:"flex flex-column flex-grow-1 ml-4 mr-3",style:{height:"100%",overflow:"hidden"}},b={class:"mt-3",style:{"font-size":"42px"}},x={class:"mt-2"},L={class:"mt-2"},P={class:"guide-list mt-3 pr-1"},I={class:"guide-name"},V=k(()=>t("div",{class:"flex-grow-1"},null,-1)),A={class:"guide-language"},E={class:"guide-description"},T={__name:"GuidesPage",setup(n){const l=h(""),p=f(()=>C.filter(e=>e.name.toLowerCase().includes(l.value.toLowerCase())||e.description.toLowerCase().includes(l.value.toLowerCase()))),_=e=>{window.open(e.url,"_blank").focus()};return(e,u)=>{const i=d("p-divider"),m=d("p-inputText"),g=d("p-button");return c(),r("div",S,[t("div",b,o(e.$t("guidesPage.title")),1),t("div",x,o(e.$t("guidesPage.description")),1),t("div",L,o(e.$t("characterSheet.guidesContent.doYouHaveAGuide")),1),a(i),a(m,{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=s=>l.value=s),placeholder:e.$t("guidesPage.searchGuides")},null,8,["modelValue","placeholder"]),t("div",P,[(c(!0),r(y,null,w(p.value,s=>(c(),r("div",{key:s.name,class:"guide-entry px-3 py-1 mb-2"},[t("div",I,o(s.name),1),V,a(i,{layout:"vertical"}),t("div",A,o((s.languages[0]?e.$t(s.languages[0]):"")+(s.languages[1]?", "+e.$t(s.languages[1]):"")+(s.languages[2]?", "+e.$t(s.languages[2]):"")),1),a(i,{layout:"vertical"}),t("div",E,o(s.description),1),a(g,{label:e.$t("characterSheet.guidesContent.openGuide"),class:"ml-2 py-1 px-3",style:{"min-width":"fit-content"},onClick:B=>_(s)},null,8,["label","onClick"])]))),128))])])}}},N=v(T,[["__scopeId","data-v-452e0428"]]);export{N as default};