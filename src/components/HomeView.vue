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
            <button class="profile__contact">
              <div class="profile__contact-inner">
                {{ $t("message.profileGetInTouch") }}
              </div>
            </button>
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
.letra {
  color: rgb(219, 219, 235);
}
</style>
