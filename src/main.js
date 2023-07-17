import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueI18n from "vue-i18n";
import { StoryblokVue, apiPlugin } from "@storyblok/vue-2";

Vue.use(StoryblokVue, {
  accessToken: "Vlvw7LcwyYTqRiUbxdSChAtt",
  bridge: process.env.NODE_ENV !== "production",
  use: [apiPlugin],
});
Vue.use(VueI18n);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: "en-US", // set the default locale
  messages: {
    en: {
      message: {
        headerProfile: "Profile",
        headerSkills: "Skills",
        headerProjects: "Projects",
        headerContact: "Contact",

        profileHello: "Hello! My name is",
        profileName: "Gabriel Cordeiro",
        profileDescription: "Front-End Developer",
        profileResume: "Download Resume",
        profileGetInTouch: "Get in Touch",

        profileAboutTitle: "About me",
        profileAboutContent:
          "Hello, I'm Gabriel Cordeiro! (Also known as Gazu since i was a kid). I'm a passionate front-end developer from Curitiba, Brazil. I believe that there's no limits for human creation when imagination, teamwork and motivation are combined, and i seek to always be an agent of positive change. Feel free to explore my portfolio and get in touch if you'd like to work together!",
      
        skillsTitle: "Skills",
        skillsDescriptionHTML: "Markup language for web page construction",
        skillsDescriptionCSS: "Styling language for web pages",
        skillsDescriptionJS: "Programming language for webpages",
        skillsDescriptionVUE: "Progressive JavaScript framework for building interactive and reactive user interfaces in web applications.",
        skillsDescriptionBTSP: "Web development framework for creating responsive websites and pre-defined styles.",
        skillsDescriptionGIT: "Distributed source code versioning control system used to manage software project development.",

        projectsTitle: "Projects",
        projectsDescriptionFLA: "A portal for news and statistics about Clube de Regatas do Flamengo. The proposal of this project is to build a dynamic and easily updatable website with content centered on one of my passions: the Flamengo soccer team.",
        projectsButton: "Visit Project",

        contactTitle: "Contact",
        contactSubtitle: "Leave your message and i will reply it as soon as possible!",
        contactName: "Name:",
        contactNamePlaceholder: "Type your name here",
        contactEmailPlaceholder: "Type your e-mail here",
        contactCompany: "Company:",
        contactCompanyPlaceholder: "Write here the company you represent",
        contactMessage: "Message:",
        contactMessagePlaceholder: "Leave you message here",
        contactSend: "Send",
        contactClear: "Clear",

        footer: "Gabriel Cordeiro | Front-end Developer"
        
      },
    },
    br: {
      message: {
        headerProfile: "Perfil",
        headerSkills: "Habilidades",
        headerProjects: "Projetos",
        headerContact: "Contatos",

        profileHello: "Olá! Meu nome é",
        profileName: "Gabriel Cordeiro",
        profileDescription: "Desenvolvedor Front-End",
        profileResume: "Baixar curriculo",
        profileGetInTouch: "Entrar em contato",

        profileAboutTitle: "Sobre mim",
        profileAboutContent:
          "Olá, eu sou Gabriel Cordeiro! (Também conhecido como Gazu desde criança). Sou um desenvolvedor front-end de Curitiba, Brasil. Acredito que não há limites para a criação humana quando imaginação, trabalho em equipe e motivação são combinados, e procuro ser sempre um agente de mudanças positivas. Sinta-se à vontade para explorar meu portfólio e entrar em contato se quiser trabalhar comigo!",
        
        skillsTitle: "Habilidades",
        skillsDescriptionHTML: "Linguagem de marcação para construção de páginas da Web",
        skillsDescriptionCSS: "Linguagem de estilização para páginas da Web",
        skillsDescriptionJS: "Linguagem de programação para páginas da Web",
        skillsDescriptionVUE: "Framework JavaScript progressiva para criar interfaces de usuário interativas e reativas em aplicativos da Web",
        skillsDescriptionBTSP: "Framework de desenvolvimento da Web para criar sites responsivos e estilos predefinidos",
        skillsDescriptionGIT: "Sistema de controle de versionamento de código-fonte distribuído usado para gerenciar o desenvolvimento de projetos de software.",
        
        projectsTitle: "Projetos",
        projectsDescriptionFLA: "Um portal de notícias e estatísticas sobre o Clube de Regatas do Flamengo. A proposta deste projeto é construir um site dinâmico e facilmente atualizável com conteúdo centrado em uma de minhas paixões: o time de futebol do Flamengo.",
        projectsButton: "Visite o projeto",

        contactTitle: "Contato",
        contactSubtitle: "Deixe sua mensagem e eu a responderei o mais rápido possível!",
        contactName: "Nome:",
        contactNamePlaceholder: "Escreva seu nome aqui",
        contactEmailPlaceholder: "Escreva seu e-mail aqui",
        contactCompany: "Empresa:",
        contactCompanyPlaceholder: "Escreva a empresa que você representa",
        contactMessage: "Mensagem:",
        contactMessagePlaceholder: "Deixe aqui sua mensagem",
        contactSend: "Enviar",
        contactClear: "Limpar",

        footer: "Gabriel Cordeiro | Desenvolvedor Front-end"
      },
    },
  },
});

new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount("#app");
