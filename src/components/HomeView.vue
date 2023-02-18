<template>
  <div class="main__body" :class="{ lightMode: colorMode }">
    <div>
      <section class="topic topic__profile" id="profile">
        <div>
          <img
            class="profile__pic"
            src="../assets/cyberpunk_12.png"
            alt="gazu"
          />
        </div>
        <div class="profile__text">
          <h1 class="profile__hello letra">{{ $t("message.profileHello") }}</h1>
          <h2 class="profile__name">{{ $t("message.profileName") }}</h2>
          <p class="profile__description">
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
              <a href="https://www.linkedin.com/in/gabriel-cordeiro-faria/" target="_blank" class="modal-channel modal-linkedIn">
                  <img class="modal-channel-icon" src="../assets/icons/linkedIn.png" alt="linkedIn">
                  LinkedIn
              </a>
              <a href="/" target="_blank" class="modal-channel modal-email">
                <img class="modal-channel-icon" src="../assets/icons/email.png" alt="Email">
                E-mail
              </a>
              <a href="https://wa.me/5521965012197" target="_blank" class="modal-channel modal-cell">
                <img class="modal-channel-icon" src="../assets/icons/cellphone.png" alt="Cell">
                Cell Phone
              </a>
              <a href="https://www.instagram.com/gabriel_gazu/" target="_blank" class="modal-channel modal-instagram">
                <img class="modal-channel-icon" src="../assets/icons/instagram.png" alt="Instagram">
                Instagram
              </a>
            </b-modal>
          </div>
        </div>
      </section>
      <section class="topic" id="skills">
        <h1 class="text-center letra">Skills</h1>
        <ul>
          <li>
            Vue.js
            <img class="icons" src="../assets/icons/vue-logo.png" alt="vue" />
          </li>
          <li class="letra">Bootstrap</li>
          <li class="letra">JavaScript</li>
          <li class="letra">HTML/CSS</li>
        </ul>
      </section>
      <section class="topic" id="projects">
        <h1 class="text-center letra">Projects</h1>
        <ul>
          <li class="letra">Projeto 1</li>
          <li class="letra">Projeto 2</li>
          <li class="letra">Projeto 3</li>
        </ul>
      </section>
      <section class="topic" id="contact">
        <h1 class="text-center letra">Contact</h1>
        <p class="letra">
          Entre em contato comigo pelo e-mail: email@exemplo.com
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  props: {
    colorMode: {
      type: Boolean,
    },
  },
};
</script>

<style>
.main__body.lightMode {
  background-color: rgb(237, 237, 245);
}
.main__body {
  background-color: rgb(36, 37, 53);
  margin: 0 !important;
  margin-right: 0 !important;
}
.icons {
  width: 50px;
  height: 500px;
}
.topic {
  padding-top: 9rem;
  height: 100vh;
  width: 100hw;
}
.topic__profile {
  display: flex;
  margin: 0 100px 0 100px;
  justify-content: space-around;
}
.profile__pic {
  width: 26.125rem;
  height: 24.25rem;
  border-radius: 20px;
}
/* .profile__text {
  align-items: center;
} */
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
  background-color:  rgb(185, 217, 228);
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
  background-color:  rgb(2, 173, 230);
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
.letra {
  color: rgb(219, 219, 235);
}
</style>
