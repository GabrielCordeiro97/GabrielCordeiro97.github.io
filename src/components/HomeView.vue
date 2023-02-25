<template>
  <div class="main__body" :class="{ lightMode: colorMode }">
    <div>
      <section class="topic" id="profile">
        <div class="profile">
          <div>
            <img
              class="profile__pic"
              src="../assets/cyberpunk_12.png"
              alt="gazu"
            />
          </div>
          <div class="profile__text">
            <h1 class="profile__hello" :class="{ lightMode: colorMode }">
              {{ $t("message.profileHello") }}
            </h1>
            <h2 class="profile__name" :class="{ lightMode: colorMode }">{{ $t("message.profileName") }}</h2>
            <p class="profile__description" :class="{ lightMode: colorMode }">
              {{ $t("message.profileDescription") }}
            </p>
            <div class="profile__buttons">
              <a
                class="profile__resume"
                href="https://files.fm/down.php?i=gntz7kzee"
                download="GabrielCordeiro.pdf"
              >
                <div class="profile__resume-inner">
                  {{ $t("message.profileResume") }}
                </div>
              </a>
              <button v-b-modal.modal-1 class="profile__contact">
                <div class="profile__contact-inner">
                  {{ $t("message.profileGetInTouch") }}
                </div>
              </button>
              <b-modal id="modal-1" centered :hide-footer="true" title="Channels">
                <a
                  href="https://www.linkedin.com/in/gabriel-cordeiro-faria/"
                  target="_blank"
                  class="modal-channel modal-linkedIn"
                >
                  <img
                    class="modal-channel-icon"
                    src="../assets/icons/linkedIn.png"
                    alt="linkedIn"
                  />
                  LinkedIn
                </a>
                <a href="/" target="_blank" class="modal-channel modal-email">
                  <img
                    class="modal-channel-icon"
                    src="../assets/icons/email.png"
                    alt="Email"
                  />
                  E-mail
                </a>
                <a
                  href="https://wa.me/5521965012197"
                  target="_blank"
                  class="modal-channel modal-cell"
                >
                  <img
                    class="modal-channel-icon"
                    src="../assets/icons/cellphone.png"
                    alt="Cell"
                  />
                  Cell Phone
                </a>
                <a
                  href="https://www.instagram.com/gabriel_gazu/"
                  target="_blank"
                  class="modal-channel modal-instagram"
                >
                  <img
                    class="modal-channel-icon"
                    src="../assets/icons/instagram.png"
                    alt="Instagram"
                  />
                  Instagram
                </a>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="profile__arrow-wrapper">
          <div class="profile__arrow"></div>
        </div>
      </section>
      <b-container class="about">
        <h1 class="about__title">{{ $t("message.profileAboutTitle") }}</h1>
        <p class="about__content">{{ $t("message.profileAboutContent") }}</p>
      </b-container>
      <section class="topic" id="skills">
        <div class="skills">
          <h1 class="skills__title">Skills</h1>
          <ul>
            <li v-for="(skill, index) in skills" :key="index">
              <h3>{{ skill.title }}</h3>
              <img :src="skill.image" :alt="skill.title" />
              <p>{{ skill.description }}</p>
            </li>
          </ul>
        </div>
      </section>
      <section class="topic" id="projects">
        <h1 class="text-center">Projects</h1>
        <ul>
          <li>Projeto 1</li>
          <li>Projeto 2</li>
          <li>Projeto 3</li>
        </ul>
      </section>
      <section class="topic" id="contact">
        <h1 class="text-center">Contact</h1>
        <p>Entre em contato comigo pelo e-mail: email@exemplo.com</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data(){
    return {
      skills: [
        {
          title: 'HTML5',
          image: '/',
          description: 'Linguagem de marcação para construção de páginas web'
        },
        {
          title: 'CSS',
          image: '/',
          description: 'Linguagem de estilização para páginas web'
        },
        {
          title: 'JavaScript',
          image: '/',
          description: 'Linguagem de programação para páginas web'
        },
        {
          title: 'VueJS',
          image: 'https://w7.pngwing.com/pngs/595/279/png-transparent-vue-js-javascript-library-angularjs-react-vue-js-template-angle-text-thumbnail.png',
          description: 'Linguagem de programação para páginas web'
        },
      ]
    }
  },
  props: {
    colorMode: {
      type: Boolean,
    },
  },
  mounted() {
    window.addEventListener("scroll", this.checkAboutInView);
  },
  methods: {
    checkAboutInView(){
      const aboutSection = document.querySelector('.about');
      const arrowWrapper = document.querySelector('.profile__arrow-wrapper');
      if (isElementInViewport(aboutSection)) {
        aboutSection.classList.add('show');
        arrowWrapper.classList.add('hide');
      }else{
        arrowWrapper.classList.remove('hide');
      }
      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
      }
    },
  }
}
</script>

<style>
.main__body {
  background-color: rgb(36, 37, 53);
  margin: 0 !important;
  margin-right: 0 !important;
}
.topic {
  padding-top: 9rem;
  height: 100vh;
  width: 100hw;
}
.profile {
  display: flex;
  margin: 0 100px 0 100px;
  justify-content: space-around;
}
.profile__pic {
  width: 26.125rem;
  height: 24.25rem;
  border-radius: 20px;
}
.profile__hello {
  font-family: "Poppins", sans-serif;
  font-size: 3.2rem;
  font-weight: 500;
  color: #f9f9f9;
  line-height: 5.4rem;
}
.profile__name {
  font-size: 3.6rem;
  color: darkorange;
  font-weight: 500;
}
.profile__description {
  font-size: 2rem;
  color: rgb(150, 150, 148);
  font-weight: 400;
}
.profile__buttons {
  display: flex;
}
.profile__resume,
.profile__contact {
  background-image: linear-gradient(to top left, rgb(255, 196, 0), darkorange);
  margin-right: 3rem;
  transform: skew(20deg);
  width: 12rem;
  height: 3.5rem;
  border: solid black 1px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: rgb(70, 70, 70);
}
.profile__resume:hover,
.profile__contact:hover {
  text-decoration: none;
  color: rgb(7, 7, 7);
  background-image: linear-gradient(to top left, darkorange, rgb(251, 255, 0));
}
.profile__resume-inner,
.profile__contact-inner {
  transform: skew(-20deg);
  display: inline-block;
  font-weight: 700;
}
.profile__arrow-wrapper {
  display: flex;
  justify-content: center;
  margin: 100px 0 100px 0;
}
.profile__arrow {
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-top: 30px solid darkorange;
  animation: move-down 2s linear infinite;
  display: flex;
  justify-content: center;
}
.profile__arrow-wrapper.hide {
  opacity: 0;
}
.about {
  opacity: 0;
  transform: translateX(-100px);
}
.about.show {
  display: flex;
  flex-direction: column;
  opacity: 1;
  transform: translateX(0px);
  transition: 1.2s;
}
.about__title {
  color: #F9F9F9;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 20px;
}
.about__content {
  color: rgb(150, 150, 148);
  text-align: justify;
  line-height: 180%;
  font-size: 1.6rem;
  font-weight: 500;
  font-family: 'DM Sans', sans-serif;
  width: 100%;
}
/* CSS DO MODAL */

.modal-body {
  display: flex;
  flex-direction: column;
  padding: 0 !important;
  border-radius: 10px;
}
.modal-channel {
  padding: 30px;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  color: rgb(88, 88, 88);
}
.modal-channel:hover {
  text-decoration: none;
  color: black;
}
.modal-channel-icon {
  width: 60px;
  height: 60px;
}
.modal-header {
  background-color: rgb(94, 94, 94);
  border-bottom: 0px !important;
  color: darkorange;
}
.modal-header .close {
  padding: 1.2rem 1rem !important;
  color: black;
  background-color: orange;
}
.modal-linkedIn {
  background-color: rgb(185, 217, 228);
}
.modal-email {
  background-color: rgb(253, 130, 130);
}
.modal-cell {
  background-color: rgb(161, 236, 161);
}
.modal-instagram {
  background-color: rgb(245, 183, 193);
}
.modal-channel:hover {
  padding: 40px;
}
.modal-linkedIn:hover {
  background-color: rgb(2, 173, 230);
}
.modal-email:hover {
  background-color: rgb(250, 9, 9);
}
.modal-cell:hover {
  background-color: rgb(18, 233, 18);
}
.modal-instagram:hover {
  background-color: rgb(255, 23, 205);
}

/* CSS SKILLS */
.skills__title {
    font-family: 'DM Sans', sans-serif;
    font-size: 3rem;
    color: #F9F9F9;
    font-weight: 600;
    text-align: center;
}
.skills__item-img {
  width: 150px;
  height: 150px;
}

/* CSS PAGINA NO LIGHTMODE */

.main__body.lightMode {
  background-color: rgb(237, 237, 245);
}
.profile__hello.lightMode {
  color: rgb(60, 60, 60);
  font-weight: 500;
}
.profile__name.lightMode {
  color: darkorange;
  text-shadow: 2px 3px 4px rgb(60, 60, 60);
}
.profile__description.lightMode {
  color: rgb(70, 70, 70);
}


@keyframes move-down {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(50px);
    opacity: 1;
  }
  51% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
