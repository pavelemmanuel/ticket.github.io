(self["webpackChunkrendez_vous_ci"]=self["webpackChunkrendez_vous_ci"]||[]).push([[645],{9186:(e,s,a)=>{"use strict";a.d(s,{Z:()=>p});a(246);var l=a(3673),r=a(2323);const i={class:"breadcrumb-bar"},t={class:"container-fluid"},u={class:"row align-items-center"},n={class:"col-md-12 col-12"},c={"aria-label":"breadcrumb",class:"page-breadcrumb"},o={class:"breadcrumb"},m=(0,l.Wm)("li",{class:"breadcrumb-item"},[(0,l.Wm)("a",{href:"index-2.html"},"Accueil")],-1),d={class:"breadcrumb-item active","aria-current":"page"},b={class:"breadcrumb-title"};function W(e,s,a,W,f,p){return(0,l.wg)(),(0,l.j4)("div",null,[(0,l.Wm)("div",i,[(0,l.Wm)("div",t,[(0,l.Wm)("div",u,[(0,l.Wm)("div",n,[(0,l.Wm)("nav",c,[(0,l.Wm)("ol",o,[m,(0,l.Wm)("li",d,(0,r.zw)(a.titre),1)])]),(0,l.Wm)("h2",b,(0,r.zw)(a.description),1)])])])])])}const f={props:["titre","description"],setup(){return{}}};f.render=W;const p=f},4645:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>E});a(71);var l=a(3673),r=a(2323),i=a(8880);const t={class:"content"},u={class:"container-fluid"},n={class:"row"},c={class:"col-md-5 col-lg-4 col-xl-3 theiaStickySidebar"},o={class:"profile-sidebar"},m={class:"widget-profile pro-widget-content"},d={class:"profile-info-widget"},b={href:"#",class:"booking-doc-img"},W={class:"profile-det-info"},f={class:"patient-details"},p={class:"mb-0"},g={class:"dashboard-widget"},h={class:"dashboard-menu"},v={class:"active"},w=(0,l.Wm)("i",{class:"fas fa-columns"},null,-1),_=(0,l.Wm)("span",null,"Accueil",-1),k=(0,l.Wm)("i",{class:"fas fa-hourglass-start"},null,-1),S=(0,l.Wm)("span",null,"Calendrier",-1),z=(0,l.Wm)("i",{class:"fas fa-user-cog"},null,-1),j=(0,l.Wm)("span",null,"Paramètre de profil",-1),y=(0,l.Wm)("i",{class:"fas fa-lock"},null,-1),A=(0,l.Wm)("span",null,"Modifier mot de passe",-1),C=(0,l.Wm)("i",{class:"fas fa-sign-out-alt"},null,-1),I=(0,l.Wm)("span",null,"Se déconnecter",-1);function N(e,s,a,N,O,q){const L=(0,l.up)("breadcrumb"),P=(0,l.up)("router-link"),x=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)("div",null,[(0,l.Wm)(L,{titre:"Dashboard"}),(0,l.Wm)("div",t,[(0,l.Wm)("div",u,[(0,l.Wm)("div",n,[(0,l.Wm)("div",c,[(0,l.Wm)("div",o,[(0,l.Wm)("div",m,[(0,l.Wm)("div",d,[(0,l.Wm)("a",b,[null==e.user.userable.image?((0,l.wg)(),(0,l.j4)("img",{key:0,src:"https://eu.ui-avatars.com/api/?rounded=true&color=ffffff&background=20c0f3&name="+e.user.userable.given_names+"+"+e.user.userable.last_name,alt:"User Image"},null,8,["src"])):((0,l.wg)(),(0,l.j4)("img",{key:1,src:e.user.userable.image,alt:"User Image"},null,8,["src"]))]),(0,l.Wm)("div",W,[(0,l.Wm)("h3",null,(0,r.zw)(q.fqdn),1),(0,l.Wm)("div",f,[(0,l.Wm)("h5",p,(0,r.zw)(e.user.userable.bio_desciprition),1)])])])]),(0,l.Wm)("div",g,[(0,l.Wm)("nav",h,[(0,l.Wm)("ul",null,[(0,l.Wm)("li",v,[(0,l.Wm)(P,{to:"PROFESSIONNAL"==e.user.role?"/dashboard":"customer_dashboard"},{default:(0,l.w5)((()=>[w,_])),_:1},8,["to"])]),(0,l.Wm)("li",null,["PROFESSIONNAL"==e.user.role?((0,l.wg)(),(0,l.j4)(P,{key:0,to:"/dashboard/schedule"},{default:(0,l.w5)((()=>[k,S])),_:1})):(0,l.kq)("",!0)]),(0,l.Wm)("li",null,[(0,l.Wm)(P,{to:"/dashboard/profile"},{default:(0,l.w5)((()=>[z,j])),_:1})]),(0,l.Wm)("li",null,[(0,l.Wm)(P,{to:"/dashboard/password"},{default:(0,l.w5)((()=>[y,A])),_:1})]),(0,l.Wm)("li",null,[(0,l.Wm)("a",{onClick:s[1]||(s[1]=(0,i.iM)(((...e)=>q.logout&&q.logout(...e)),["prevent"])),href:"#"},[C,I])])])])])])]),(0,l.Wm)(x)])])])])}var O=a(515),q=a.n(O),L=(a(7280),a(9186)),P=a(7874);const x={components:{Breadcrumb:L.Z},computed:q()(q()({},(0,P.Se)("auth",["authenticated","user"])),{},{fqdn(){return this.user.userable.titre?this.user.userable.titre+" "+this.user.userable.given_names.split(" ")[0]+" "+this.user.userable.last_name:this.user.userable.given_names.split(" ")[0]+" "+this.user.userable.last_name}}),methods:{logout(){console.log("Log out")}}};x.render=N;const E=x}}]);