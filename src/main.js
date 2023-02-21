import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueI18n from "vue-i18n";

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
      },
    },
  },
});

new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount("#app");
