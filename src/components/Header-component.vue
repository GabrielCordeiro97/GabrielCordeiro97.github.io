<template>
  <b-navbar class="header" :class="{ lightMode: lightMode }" toggleable="sm">
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
          class="mb-2"
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
        { text: "English US (en-US)", value: "en-US" },
        { text: "Português (pt-BR)", value: "br" },
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
  padding: 0rem 5rem !important;
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
  color: rgb(255, 140, 0) !important;
  font-size: 1.5rem;
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
  margin-right: 40px;
}
.menu {
  display: flex;
  justify-content: right;
}

/* BOTAO LIGHT MODE E O ESTILO DO LIGHT MODE ABAIXO*/
.menu__button-light {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 30px;
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
  width: 60px;
  height: 34px;
  border: solid rgb(255, 140, 0) 2px;
  border-radius: 10%;
  transform: skew(20deg);
}
.menu__button-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.menu__button-slider {
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
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: rgb(218, 218, 218);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  /* border-radius: 50%; */
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
</style>
