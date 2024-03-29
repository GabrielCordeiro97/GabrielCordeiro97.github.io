<template>
  <b-navbar class="header" :class="{ lightMode: lightMode }" toggleable="md">
    <b-navbar-brand class="brand" to="/">
      <img
        v-if="lightMode"
        class="brand__logo"
        src="../assets/icons/logoOrange.png"
        alt="Gazu"
      />
      <img
        v-else
        class="brand__logo"
        src="../assets/icons/logoGray.png"
        alt="Gazu"
      />
    </b-navbar-brand>
    <b-navbar-toggle class="toggler" target="nav-collapse">
      <span class="navbar-toggler-icon"></span>
    </b-navbar-toggle>
    <b-collapse class="menu" id="nav-collapse" is-nav>
      <b-navbar-nav class="menu__nav">
        <b-nav-item class="menu__nav-item active" href="#profile">{{
          $t("message.headerProfile")
        }}</b-nav-item>
        <b-nav-item class="menu__nav-item" href="#skills">{{
          $t("message.headerSkills")
        }}</b-nav-item>
        <b-nav-item class="menu__nav-item" href="#projects">{{
          $t("message.headerProjects")
        }}</b-nav-item>
        <b-nav-item class="menu__nav-item" href="#contact">{{
          $t("message.headerContact")
        }}</b-nav-item>
      </b-navbar-nav>
      <div class="menu__button-light">
        <label class="menu__button-switch">
          <input type="checkbox" @input="switchMode" v-model="lightMode" />
          <span class="menu__button-slider"></span>
        </label>
        <b-form-select
          v-model="locale"
          :options="locales"
          v-on:change="changeLanguage"
          class="mb-2 lang-button"
        ></b-form-select>
      </div>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      locale: "en-US",
      locales: [
        { text: "en-US", value: "en-US" },
        { text: "pt-BR", value: "br" },
      ],
      lightMode: false,
      isActive: false,
    };
  },

  methods: {
    changeLanguage() {
      this.$i18n.locale = this.locale;
    },
    switchMode() {
      this.$emit("switchMode");
    },

    deactivateNavLinks() {
      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach((link) => link.classList.remove("active"));
    },
    checkSectionInView() {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = section.offsetTop - 140;
        const bottom = top + section.offsetHeight;
        if (window.pageYOffset >= top && window.pageYOffset < bottom) {
          const navLink = document.querySelector(
            `.nav-link[href="#${section.id}"]`
          );
          this.deactivateNavLinks();
          navLink.classList.add("active");
        }
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.checkSectionInView);
  },
};
</script>

<style>
.header {
  background-color: rgba(60, 60, 60);
  padding: 0rem 4rem !important;
  border-bottom: solid 2px rgb(0, 0, 0);
  position: sticky !important;
  top: 0;
  z-index: 1;
}
.brand__logo {
  width: 8rem;
  height: 8rem;
}
.toggler {
  margin-right: 15px;
  width: 50px;
}
.nav-link {
  font-family: "DM Sans", sans-serif;
  color: rgb(255, 140, 0) !important;
  font-size: 1.2rem;
  font-weight: 500;
  align-items: center;
  display: flex !important;
  padding: 0 30px !important;
}
.nav-link.active {
  background-color: rgb(255, 140, 0) !important;
  color: black !important;
  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}
.cabecalho-menu {
  display: flex;
}
.menu__nav {
  display: flex;
  align-items: center;
  margin-right: 60px;
}
.menu {
  display: flex;
  justify-content: right;
  width: 80%;
}

/* BOTAO LIGHT MODE E O ESTILO DO LIGHT MODE ABAIXO*/
.menu__button-light {
  padding: 10px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2%;
}
.header.lightMode {
  background-color: rgb(255, 140, 0);
}
.lightMode .nav-link {
  color: rgb(60, 60, 60) !important;
  font-weight: 500;
}
.lightMode .nav-link.active {
  color: darkorange !important;
  font-weight: 500;
  background-color: rgb(60, 60, 60) !important;
}

.menu__button-switch {
  position: relative;
  display: inline-block;
  width: 73px;
  height: 38px;
  border: solid rgb(255, 140, 0) 2px;
  border-radius: 10%;

}
.menu__button-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.menu__button-slider {
  width: 68px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(60, 60, 60);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 9%;
}
.menu__button-slider:before {
  position: absolute;
  content: "";
  height: 27px;
  width: 32px;
  left: 4px;
  bottom: 4px;
  background-color: rgb(218, 218, 218);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .menu__button-slider {
  background-color: rgb(60, 60, 60);
}
input:focus + .menu__button-slider {
  box-shadow: 0 0 1px rgba(8, 9, 87, 255);
}
input:checked + .menu__button-slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.custom-select::-ms-expand {
  color: white;
}

.custom-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("../assets/icons/logo-lang.png") !important;
  background-repeat: no-repeat !important;
  background-position: right center !important;
  background-size: 18px 18px !important;
  padding-right: 25px !important;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 0.5rem;
  width: 30% !important;
}
.lang-button {
  background-color: rgb(60, 60, 60) !important;
  margin-bottom: 0 !important;
  font-family: "DM Sans", sans-serif;
  color: darkorange !important;
  border: 2px darkorange solid !important;
  margin-left: 40px;
}
@media screen and (max-width: 768px) {
  
}
@media screen and (max-width: 1200px) {
.header {
  padding: 0 1rem !important;
}
.nav-link {
  padding: 10px !important;
}
.menu__nav {
  margin-right: 10px;
}
.menu__button-light {
  padding: 10px 0px;
  width: 250px;
  margin-right: 0%;
}
.lang-button {
    background-color: rgb(60, 60, 60) !important;
    margin-bottom: 0 !important;
    font-family: "DM Sans", sans-serif;
    color: darkorange !important;
    border: 2px darkorange solid !important;
    margin-left: 10px;
    padding: 2px !important;
}
}
</style>
