<template>
  <div class="main__body" :class="{ lightMode: colorMode }">
    <div>
      <section class="topic" id="profile">
        <HomeViewProfile :colorMode="colorMode" />
      </section>
      <HomeViewAbout :colorMode="colorMode"/>
      <section class="topic" id="skills">
        <HomeViewSkills :colorMode="colorMode"/>
      </section>
      <section class="topic" id="projects">
        <HomeViewProjects :colorMode="colorMode"/>
      </section>
      <section class="topic" id="contact">
        <HomeViewContact :colorMode="colorMode"/>
      </section>
    </div>
  </div>
</template>

<script>
import HomeViewProfile from "./HomeViewProfile.vue";
import HomeViewAbout from "./HomeViewAbout.vue";
import HomeViewSkills from "./HomeViewSkills.vue";
import HomeViewProjects from "./HomeViewProjects.vue";
import HomeViewContact from "./HomeViewContact.vue";

export default {
  name: "HomeView",
  components: {
    HomeViewProfile,
    HomeViewAbout,
    HomeViewSkills,
    HomeViewProjects,
    HomeViewContact,
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
    checkAboutInView() {
      const aboutSection = document.querySelector(".about");
      const arrowWrapper = document.querySelector(".profile__arrow-wrapper");
      if (isElementInViewport(aboutSection)) {
        aboutSection.classList.add("show");
        arrowWrapper.classList.add("hide");
      } else {
        arrowWrapper.classList.remove("hide");
      }
      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        );
      }
    },
  },
};
</script>

<style>
.main__body {
  background-color: rgb(27, 27, 26);
  margin: 0 !important;
  margin-right: 0 !important;
}
.topic {
  padding-top: 9rem;
  width: 100hw;
}

@media (max-width: 1168px) {
}
@media (max-width: 868px) {
}
@media (max-width: 768px) {
}

.main__body.lightMode {
  background-color: rgb(237, 237, 245);
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
