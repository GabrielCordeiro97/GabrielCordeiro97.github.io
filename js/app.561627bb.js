(function(){var t={3952:function(){},1089:function(){},7247:function(t,e,s){"use strict";var a=s(6369),o=function(){var t=this,e=t._self._c;return e("body",[e("HeaderComponent",{on:{switchMode:t.switchColorMode}}),e("main",[e("HomeView",{attrs:{colorMode:t.lightMode}})],1),e("FooterComponent")],1)},i=[],n=function(){var t=this,e=t._self._c;return e("b-navbar",{staticClass:"header",class:{lightMode:t.lightMode},attrs:{toggleable:"sm"}},[e("b-navbar-brand",{staticClass:"brand",attrs:{to:"/"}},[t.lightMode?e("img",{staticClass:"brand__logo",attrs:{src:s(8066),alt:"Gazu"}}):e("img",{staticClass:"brand__logo",attrs:{src:s(571),alt:"Gazu"}})]),e("b-navbar-toggle",{staticClass:"toggler",attrs:{target:"nav-collapse"}},[e("span",{staticClass:"navbar-toggler-icon"})]),e("b-collapse",{staticClass:"menu",attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"menu__nav"},[e("b-nav-item",{staticClass:"menu__nav-item active",attrs:{href:"#profile"}},[t._v(t._s(t.$t("message.headerProfile")))]),e("p",[t._v("pinto sucks")]),e("b-nav-item",{staticClass:"menu__nav-item",attrs:{href:"#skills"}},[t._v(t._s(t.$t("message.headerSkills")))]),e("b-nav-item",{staticClass:"menu__nav-item",attrs:{href:"#projects"}},[t._v(t._s(t.$t("message.headerProjects")))]),e("b-nav-item",{staticClass:"menu__nav-item",attrs:{href:"#contact"}},[t._v(t._s(t.$t("message.headerContact")))])],1),e("div",{staticClass:"menu__button-light"},[e("label",{staticClass:"menu__button-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.lightMode,expression:"lightMode"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.lightMode)?t._i(t.lightMode,null)>-1:t.lightMode},on:{input:t.switchMode,change:function(e){var s=t.lightMode,a=e.target,o=!!a.checked;if(Array.isArray(s)){var i=null,n=t._i(s,i);a.checked?n<0&&(t.lightMode=s.concat([i])):n>-1&&(t.lightMode=s.slice(0,n).concat(s.slice(n+1)))}else t.lightMode=o}}}),e("span",{staticClass:"menu__button-slider"})]),e("b-form-select",{staticClass:"mb-2",attrs:{options:t.locales},on:{change:t.changeLanguage},model:{value:t.locale,callback:function(e){t.locale=e},expression:"locale"}})],1)],1)],1)},r=[],l={data(){return{locale:"en-US",locales:[{text:"en-US",value:"en-US"},{text:"pt-BR",value:"br"}],lightMode:!1,isActive:!1}},methods:{changeLanguage(){this.$i18n.locale=this.locale},switchMode(){this.$emit("switchMode")},deactivateNavLinks(){const t=document.querySelectorAll(".nav-link");t.forEach((t=>t.classList.remove("active")))},checkSectionInView(){const t=document.querySelectorAll("section");t.forEach((t=>{const e=t.offsetTop-140,s=e+t.offsetHeight;if(window.pageYOffset>=e&&window.pageYOffset<s){const e=document.querySelector(`.nav-link[href="#${t.id}"]`);this.deactivateNavLinks(),e.classList.add("active")}}))}},mounted(){window.addEventListener("scroll",this.checkSectionInView)}},c=l,u=s(1001),d=(0,u.Z)(c,n,r,!1,null,null,null),p=d.exports,g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main__body",class:{lightMode:t.colorMode}},[e("div",[e("section",{staticClass:"topic",attrs:{id:"profile"}},[e("HomeViewProfile",{attrs:{colorMode:t.colorMode}})],1),e("HomeViewAbout"),e("section",{staticClass:"topic",attrs:{id:"skills"}},[e("HomeViewSkills")],1),e("section",{staticClass:"topic",attrs:{id:"projects"}},[e("HomeViewProjects")],1),e("section",{staticClass:"topic",attrs:{id:"contact"}},[e("HomeViewContact")],1)],1)])},m=[],A=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"profile"},[t._m(0),e("div",{staticClass:"profile__text"},[e("h1",{staticClass:"profile__hello",class:{lightMode:t.colorMode}},[t._v(" "+t._s(t.$t("message.profileHello"))+" ")]),e("h2",{staticClass:"profile__name",class:{lightMode:t.colorMode}},[t._v(" "+t._s(t.$t("message.profileName"))+" ")]),e("p",{staticClass:"profile__description",class:{lightMode:t.colorMode}},[t._v(" "+t._s(t.$t("message.profileDescription"))+" ")]),e("div",{staticClass:"profile__buttons"},[e("a",{staticClass:"profile__resume",attrs:{href:"https://files.fm/down.php?i=gntz7kzee",download:"GabrielCordeiro.pdf"}},[e("div",{staticClass:"profile__resume-inner"},[t._v(" "+t._s(t.$t("message.profileResume"))+" ")])]),e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"profile__contact"},[e("div",{staticClass:"profile__contact-inner"},[t._v(" "+t._s(t.$t("message.profileGetInTouch"))+" ")])]),e("b-modal",{attrs:{id:"modal-1",centered:"","hide-footer":!0,title:"Channels"}},[e("a",{staticClass:"modal-channel modal-linkedIn",attrs:{href:"https://www.linkedin.com/in/gabriel-cordeiro-faria/",target:"_blank"}},[e("img",{staticClass:"modal-channel-icon",attrs:{src:s(5531),alt:"linkedIn"}}),t._v(" LinkedIn ")]),e("a",{staticClass:"modal-channel modal-email",attrs:{href:"/",target:"_blank"}},[e("img",{staticClass:"modal-channel-icon",attrs:{src:s(7085),alt:"Email"}}),t._v(" E-mail ")]),e("a",{staticClass:"modal-channel modal-cell",attrs:{href:"https://wa.me/5521965012197",target:"_blank"}},[e("img",{staticClass:"modal-channel-icon",attrs:{src:s(1977),alt:"Cell"}}),t._v(" Cell Phone ")]),e("a",{staticClass:"modal-channel modal-instagram",attrs:{href:"https://www.instagram.com/gabriel_gazu/",target:"_blank"}},[e("img",{staticClass:"modal-channel-icon",attrs:{src:s(8709),alt:"Instagram"}}),t._v(" Instagram ")])])],1)])]),t._m(1)])},f=[function(){var t=this,e=t._self._c;return e("div",[e("img",{staticClass:"profile__pic",attrs:{src:s(25),alt:"gazu"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"profile__arrow-wrapper"},[e("div",{staticClass:"profile__arrow"})])}],h={name:"HomeViewProfile",props:{colorMode:{type:Boolean}}},v=h,w=(0,u.Z)(v,A,f,!1,null,null,null),C=w.exports,b=function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"about"},[e("h1",{staticClass:"about__title"},[t._v(t._s(t.$t("message.profileAboutTitle")))]),e("p",{staticClass:"about__content"},[t._v(t._s(t.$t("message.profileAboutContent")))])])},_=[],k={name:"HomeViewAbout"},M=k,B=(0,u.Z)(M,b,_,!1,null,null,null),E=B.exports,H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"skills"},[e("h1",{staticClass:"skills__title"},[t._v("Skills")]),e("div",{staticClass:"skills__list-wrapper"},[e("ul",{staticClass:"skills__list"},[e("li",{staticClass:"skills__card-wrapper"},t._l(t.skills,(function(s,a){return e("article",{key:a,staticClass:"skills__card-content"},[e("div",{staticClass:"skills__card-img"},[e("img",{staticClass:"skills__card-logo",attrs:{src:s.image,alt:s.title}})]),e("div",{staticClass:"skills__card-info"},[e("h2",{staticClass:"skills__h2"},[t._v(t._s(s.title))]),e("p",{staticClass:"skills__text"},[t._v(t._s(s.description))])])])})),0)])])])},x=[],y={data(){return{skills:[{title:"HTML5",image:"https://logodownload.org/wp-content/uploads/2016/10/html5-logo-6.png",description:"Linguagem de marcação para construção de páginas web"},{title:"CSS3",image:"https://logodownload.org/wp-content/uploads/2017/04/css-3-logo-6.png",description:"Linguagem de estilização para páginas web"},{title:"JavaScript",image:"https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-4.png",description:"Linguagem de programação para páginas web"},{title:"VueJS",image:"https://logospng.org/download/vue.js/vue-js-512.png",description:"Framework JavaScript progressivo para construir interfaces de usuário interativas e reativas em aplicações web."},{title:"Bootstrap",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024",description:"Framework de desenvolvimento web para criar sites responsivos e estilos predefinidos."},{title:"Git/Github",image:"https://img.icons8.com/color/256/git.png",description:"Sistema de controle de versionamento distribuído de código fonte utilizado para gerenciar o desenvolvimento de projetos de software."}]}}},j=y,G=(0,u.Z)(j,H,x,!1,null,null,null),F=G.exports,P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"projects"},[e("h1",{staticClass:"projects__title"},[t._v("Projects")]),e("div",{staticClass:"projects__list-wrapper"},[e("ul",{staticClass:"projects__list"},t._l(t.projects,(function(s,a){return e("li",{key:a,staticClass:"projects__card-wrapper",class:{"projects__card--left-align":a%2===0,"projects__card--right-align":a%2===1}},[e("div",{staticClass:"projects__card"},[e("b-card",{staticClass:"mb-2 projects__card-content",attrs:{title:`${s.title}`,"img-src":`${s.img}`,"img-alt":t.Image,"img-top":"",tag:"article"}},[e("b-card-text",[t._v(" "+t._s(s.description)+" ")]),e("b-button",{attrs:{href:"#",variant:"danger"}},[t._v("Visit Project")])],1)],1),e("div",{staticClass:"timeline"}),e("div",[e("h3",{staticClass:"projects__card-year"},[t._v(t._s(s.year))])])])})),0)])])},D=[],S={data(){return{projects:[{title:"Flamenguismo",img:"https://www.flaresenha.com/wp-content/uploads/2018/02/conmebol-proibe-sinalizadores-fumacas-e-rolos-de-papel-de-torcida-1.jpg",imgAlt:"Flamenguismo",year:"2022",description:"A portal for news and statistics about Clube de Regatas do Flamengo. The proposal of this project is to build a dynamic and easily updatable website with content centered on one of my passions: the Flamengo soccer team."},{title:"Flamenguismo",img:"https://www.flaresenha.com/wp-content/uploads/2018/02/conmebol-proibe-sinalizadores-fumacas-e-rolos-de-papel-de-torcida-1.jpg",imgAlt:"Flamenguismo",year:"2022",description:"A portal for news and statistics about Clube de Regatas do Flamengo. The proposal of this project is to build a dynamic and easily updatable website with content centered on one of my passions: the Flamengo soccer team."},{title:"Eu topo",year:"2022",img:"",description:""}]}}},T=S,Y=(0,u.Z)(T,P,D,!1,null,null,null),I=Y.exports,R=function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)},O=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"contact"},[e("h1",{staticClass:"contact__title"},[t._v("Contact")]),e("h2",{staticClass:"contact__subtitle"},[t._v("Entre em contato por qualquer um dos canais!")]),e("ul",{staticClass:"contact__channels"},[e("li",{staticClass:"contact__chennels-item"},[e("a",{staticClass:"contact__channels-link",attrs:{href:"https://www.instagram.com/gabriel_gazu/"}},[t._v("INSTAGRAM")])])])])}],N=s(1089),V=s.n(N),U=V(),Z=(0,u.Z)(U,R,O,!1,null,null,null),q=Z.exports,W={name:"HomeView",components:{HomeViewProfile:C,HomeViewAbout:E,HomeViewSkills:F,HomeViewProjects:I,HomeViewContact:q},props:{colorMode:{type:Boolean}},mounted(){window.addEventListener("scroll",this.checkAboutInView)},methods:{checkAboutInView(){const t=document.querySelector(".about"),e=document.querySelector(".profile__arrow-wrapper");function s(t){const e=t.getBoundingClientRect();return e.top>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)}s(t)?(t.classList.add("show"),e.classList.add("hide")):e.classList.remove("hide")}}},K=W,L=(0,u.Z)(K,g,m,!1,null,null,null),Q=L.exports,J=function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)},z=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("p",[t._v("Footer")])])}],X=s(3952),$=s.n(X),tt=$(),et=(0,u.Z)(tt,J,z,!1,null,null,null),st=et.exports,at={name:"App",components:{HeaderComponent:p,HomeView:Q,FooterComponent:st},data(){return{lightMode:!1}},methods:{switchColorMode(){this.lightMode=!this.lightMode}}},ot=at,it=(0,u.Z)(ot,o,i,!1,null,null,null),nt=it.exports,rt=s(2631),lt=function(){var t=this;t._self._c;return t._m(0)},ct=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")])])}],ut={},dt=(0,u.Z)(ut,lt,ct,!1,null,null,null),pt=dt.exports;a["default"].use(rt.ZP);const gt=[{path:"/",name:"home",component:Q},{path:"/about",name:"about",component:pt}],mt=new rt.ZP({routes:gt});var At=mt,ft=s(6882),ht=(s(7024),s(6018)),vt=s(1159);a["default"].use(vt.IT,{accessToken:"Vlvw7LcwyYTqRiUbxdSChAtt",bridge:!1,use:[vt.M$]}),a["default"].use(ht.Z),a["default"].use(ft.ZPm),a["default"].config.productionTip=!1;const wt=new ht.Z({locale:"en-US",messages:{en:{message:{headerProfile:"Profile",headerSkills:"Skills",headerProjects:"Projects",headerContact:"Contact",profileHello:"Hello! My name is",profileName:"Gabriel Cordeiro",profileDescription:"Front-End Developer",profileResume:"Download Resume",profileGetInTouch:"Get in Touch",profileAboutTitle:"About me",profileAboutContent:"Hello, I'm Gabriel Cordeiro! (Also known as Gazu since i was a kid). I'm a passionate front-end developer from Curitiba, Brazil. I believe that there's no limits for human creation when imagination, teamwork and motivation are combined, and i seek to always be an agent of positive change. Feel free to explore my portfolio and get in touch if you'd like to work together!"}},br:{message:{headerProfile:"Perfil",headerSkills:"Habilidades",headerProjects:"Projetos",headerContact:"Contatos",profileHello:"Olá! Meu nome é",profileName:"Gabriel Cordeiro",profileDescription:"Desenvolvedor Front-End",profileResume:"Baixar curriculo",profileGetInTouch:"Entrar em contato"}}}});new a["default"]({i18n:wt,router:At,render:t=>t(nt)}).$mount("#app")},25:function(t,e,s){"use strict";t.exports=s.p+"img/cyberpunk_12.ff3fcdb3.png"},1977:function(t){"use strict";t.exports="data:image/png;base64,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"},7085:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAkCAYAAADLsGk3AAAAAXNSR0IArs4c6QAAA+RJREFUWEfNmffLnEUQgJ9YY01M7C0xwYhEEQtiRRCxE7FgRAKBgP+VEgiIKBZssSGIGGIiimgIIpYotsTeuwnPx6wOy7337d29F29+udv3nd2Z52Z2d3ZvAf/JIuAZ4BJgQXo+i1/3AjuA64DPdbA4fH1AzKLT8/l0D3CvIEcD31fafwBSz6ocWjm2XJBXgMurFz8Bpto/M0hiSq2u/NoliM6WFPsCODGUfgyYWYrMW8C54d/fwPvAqjJHsqMCCXNCKP8ALJ6RNHsTOC/88sc/Cni1gOl4DaLubuD46OT8OeZ/hnkDOD9BOK9/Bv6NUBeIfb4Ejp0BmNeAixKEc9c5rDSBCCnM0uj0HbBkP0dmG3BxgjDNnbtFmkDKHPoqAGx/G2D7YwHYGpuzdrUnhHM2SzNIgfkmBrLtd1NumjBbgMvCY+04R+u9rjm1MrlpZjTMT+Vr4LgpwbwMXJkgTGfTepCMFJEygDAO6IqhmHLC9CkvAVclCOenP2CXjAVS0swQu4YrLgZlmZ4U6EXg6gRh+prGw2RsEAc9IPL1yLCwJ22g48K8AFyTIIy06TufTARSYFxBjghLbqCltJnPeP3+2SjHy3MhTNsWmRikwLimHx4WLW1OarGedDYDN6S2pZERbpVeQDR2YGxQh4Xlz4BTGr14Erg56RpRIzuK9AYyCOZT4NR5vHkcWJN0jKQRHVV6BdH4WcA7yYtPgNM6vHoUuDW9syz3jDGO9AqyIs4FtSMfA8uqhw8Dt1fP3LlbltpBoL2BLAc+TBbuA+4Gypz5CFBHeRC4M+laS10abWGG7eBd0eoF5HRAR4tsBDbEAmCZvTBeuJQ6b8qhyMfC2bcuR7pqqqmBmP+mTpFNwPrUPijODPUlgSpnALuSbr4z6KpypwLi8upkLnI/sG6ApYPjFOdnkZXABwN0c8nuMTYfnrogfD52ap0caVIGfyDmRJexQwLGCJ0JvDfEq/oQVY6zvYO4Yc3d6oU8BKwdZiXeWZsJ9FuDbn2stTj9ZUi/kSNi6ZA3rEeAOxocG0fldeCC6OiVjzC/dgw0EohFXK5/HgNuG8fDEfrkqx9hrLQHRbQZxI3KM0eRJ4BbRnBoEtV8GfdXwPxeDdgE4ulMiHIL+XRV5E3iZGvffD0qjMcG76WLvA2cY6O+Mi1Ou8u6kZW2fzfc2Gq9Z72dwNkx5p8RmQLjadXVbW99iX0X8FwcMQvE89XBp2c/m4azILUwVYRwzlwIuP8oW3TWVaG+L8qjv9tkavpKc5fVIVYA+c+oRaVxbURi+u70b+EmYHOmMjJPAVfEBUP/Jvsb0YhsB/ynbe7Oax+QrPHYMESgCQAAAABJRU5ErkJggg=="},8709:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAA6JJREFUaEPtmknITlEYx3+fOVMoQzYyb5SpLAxLIYRYSKxYGMpYQoYMUcpYhsTKkAUhhGxZKGPZGMISX+Yh0+fTX/foOJ17z73fd+/3vm6eehfvvWd4fuc8z3Oec86tIZ0MA1YAY4EuQDOgJl3VzKXqgZ/Aa+AqsAO4HWolpMxSYDvQMtRQwe+/AyuB3XH9xIH0Bu4BHQpWMGvzH4DBwFO3og9kOnAqaw9NXH4GcNru0wUJQTwCLgEPgK8FKd8aGAhMAPon9PEXjA0ic3riqSjnWw9sA+oKUj6u2ebAamBTTHDpY8zMBnnv8YlaoB+gd5WUjsBjoKujhHxG7/6E0GXATqeQIHpEobCSEKZvhfznHhjpvtvMyDcnxMqcOlVoJloAq4CRwDngECB9JBr9t46ZKTS3EogWu1vOkK8DtlRgGtpEisrhjWgWelow0k0+Y8twgRwHZjkvNCpN7dhS4Qww1TOAWpj3RM8VAH44ZU4I5KVjdwqxAyowG+ryVZQCud1fA8ZYDx86oblWIKITpZG9wJJGgGg2JwILgKFA+6itj8Ad4ABw0TOqKnYDGOHpexew3Hqu2Vls/a8TiBI0OwwvAvY3AEQKn4wg0lQXzExAgEZ6Ac+cyjJxtf3Fer4Q2Gf9rxeAiQjm+TzgSBpNrDKawdiELtCWbf8qqkVOvtIXuAlMAd45bcwFDtvP8gA5D0zKCO4WvwBMztBG7iBJEPK9+9FPOg6KfvIhn2SByRUkzpzeRKN7PUbhUYAGoLPnvWtmcZOUG4icT3mOK8eAOSlN5Cgw21NWeyA7APiayw1EZqAQa0sWCFPPB6NoFvK5XEBk48pvbJE5aS/fENHe3DUzba3d1dtuOxcQpRAKj7aMBuJ8IgQnn9HKbcs04GxCxVxALgPjrE40co09nNAM29HsCjC+aJAXQDerk7tRKhIa+aT3Sl2GWAWU/3UvGuQT0NbqpCFO7uroOv1noN1/kGgEQrlWaUyrNM5emvBbmgVRrlSKFEUgpUkaBVOKNN6sVaXYWKWBSZu2ZNkdqs1ckkafcnkePqSB94JU03FQGgiV8R4HFXFApx3e/JgDuoNR+E7aOIWAvAd01XRkGgIw771HptV0iJ0GJPYQu5quFdKArAU2OwV/XytIqumiJwkm8aJHFUtz9SaYUlyGCiTpenoDsLUCt1hy7DXAxizX04IpxQcDxslCMGkiS9Flgp9wGAVK8VGNPZr//GdOrmlU/YdnvwCYUC+ili3rhwAAAABJRU5ErkJggg=="},5531:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAkpJREFUaEPtmT1IHEEYhp9TEBsRBaNF2mgnCknANB5KKhPQQuwsYyGCkipaBxuRFDYKqdKEFAZFCAQSSKv414l1IFHhOGxEElQ+2b3bHLszuwu3+x2ZqY67mbn3mXd2Zt7ZAtUyAHwBegLfaf54AYwBeyKy4CldBRY0qzZo2wBmBEScOGxQCF/2MwH51UDTKWq8SwJy2+Bu3Mv/L0GugSugPbBIqDEzjiNHwFPgT0D1CPBNDUWMqSUQgxGCu4HfWmBsjrTUOFGrexOY0ABjApFnotUisg840Q5SBjosIruAc+0gsr80WUROAp+0g4i+UeC7Qegl0NYIIKJRTsNnIWI/AlMaIJLs7J+BN0AJKALvtTjhD6Rt+dUy4FYdDsQ6RBlXyNsRWeIPgB/eMzcM9KYZAxvIMrBo6Dgsy/jxOayZ9PXWy0BytNmK6Fuy+HaMfazSPA+QWeBhzEAnEVyiuLVkDTIPvLOq+reCTL2oE3hujiRkqFT/CzSbGmftSFqQ58BXjSAygC+AR96h82cMwhtTxM7DERF/WiN8H3hsgTkG+qPqZA0i/ycjG1bWgDkDzArwWgvIS29/CNNjyz/+HhTKkrUjRjGWayYHIhbW64himupRvzlHnCOGJdQ97F6ckAjglt96BCu3armpVafM7qZW2qkl1zSmZBa2HC4Z9hG5bpW0F1VSt7WdfmMENx1VHIgOH6oqxBF59/FAm7CEesoC8gTYTdhQW/Wif0+7DrzSpi6mng/AdPDCeQjYATpjdpB3NXnrPO7d5HMHxSe0XeDUKq8AAAAASUVORK5CYII="},571:function(t,e,s){"use strict";t.exports=s.p+"img/logoGray.3111fff6.png"},8066:function(t,e,s){"use strict";t.exports=s.p+"img/logoOrange.622e74a6.png"}},e={};function s(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,a,o,i){if(!a){var n=1/0;for(u=0;u<t.length;u++){a=t[u][0],o=t[u][1],i=t[u][2];for(var r=!0,l=0;l<a.length;l++)(!1&i||n>=i)&&Object.keys(s.O).every((function(t){return s.O[t](a[l])}))?a.splice(l--,1):(r=!1,i<n&&(n=i));if(r){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,o,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,i,n=a[0],r=a[1],l=a[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(l)var u=l(s)}for(e&&e(a);c<n.length;c++)i=n[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(u)},a=self["webpackChunkportfoliogabrielvuejs"]=self["webpackChunkportfoliogabrielvuejs"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(7247)}));a=s.O(a)})();
//# sourceMappingURL=app.561627bb.js.map