<template>
  <div class="skills">
    <h1 class="skills__title" :class="{ lightMode: colorMode }">
      {{ $t("message.skillsTitle") }}
    </h1>
    <div class="skills__list-wrapper">
      <ul class="skills__list">
        <li class="skills__card-wrapper">
          <article
            class="skills__card-content"
            v-for="(skill, index) in skills"
            :key="index"
            :class="{ lightMode: colorMode }"
          >
            <div class="skills__card-img">
              <img
                class="skills__card-logo"
                :src="skill.image"
                :alt="skill.title"
              />
            </div>
            <div class="skills__card-info">
              <h2 class="skills__h2" :class="{ lightMode: colorMode }">
                {{ skill.title }}
              </h2>
              <p class="skills__text" :class="{ lightMode: colorMode }">
                {{ $t(`message.${skill.description}`) }}
              </p>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    colorMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      skills: [
        {
          title: "HTML5",
          image:
            "https://logodownload.org/wp-content/uploads/2016/10/html5-logo-6.png",
          description: "skillsDescriptionHTML",
        },
        {
          title: "CSS3",
          image:
            "https://logodownload.org/wp-content/uploads/2017/04/css-3-logo-6.png",
          description: "skillsDescriptionCSS",
        },
        {
          title: "JavaScript",
          image:
            "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-4.png",
          description: "skillsDescriptionJS",
        },
        {
          title: "Vue JS",
          image: "https://logospng.org/download/vue.js/vue-js-512.png",
          description: "skillsDescriptionVUE",
        },
        {
          title: "Bootstrap",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024",
          description: "skillsDescriptionBTSP",
        },
        {
          title: "Git/Github",
          image: "https://img.icons8.com/color/256/git.png",
          description: "skillsDescriptionGIT",
        },
      ],
    };
  },
};
</script>

<style>
.skills__list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.skills__title {
  font-family: "DM Sans", sans-serif;
  font-size: 2.6rem;
  color: #f9f9f9;
  font-weight: 600;
  text-align: center;
}
.skills__card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.skills__card-content {
  display: flex;
  align-items: center;
  max-width: 17rem;
  max-height: auto;
  background-color: rgb(60, 60, 60);
  padding: 0.7rem 0;
  box-shadow: 0 1.4rem 8rem rgba(0, 0, 0, 0.2);
  border-radius: 0.8rem;
  margin: 1rem 5rem;
}
.skills__card-img {
  position: relative;
  max-width: 5rem;
  min-width: 5rem;
  height: 6rem;
  transform: translateX(-3rem);
}
.skills__card-logo {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
}

.skills__card-info {
  padding-right: 2rem;
}
.skills__h2 {
  font-size: 1.5rem;
  margin: 0.7rem 0 1.2rem;
  text-transform: uppercase;
  color: darkorange;
  font-weight: 700;
}
.skills__text {
  color: rgba(209, 209, 209, 0.7);
  font-size: 1rem;
  font-weight: 500;
}

/* classes lightmode */
.skills__title.lightMode {
  color: rgb(70, 70, 70);
}
.skills__card-content.lightMode {
  background-color: darkorange;
  box-shadow: black 6px 6px 12px;
}
.skills__h2.lightMode {
  color: rgb(70, 70, 70);
}
.skills__text.lightMode {
  color: rgb(60, 60, 60);
}

@media (max-width: 1168px) {
  .skills__card-content {
    max-width: 20rem;
  }
  .skills__card-img {
    max-width: 4rem;
    min-width: 4rem;
  }
}
@media (max-width: 868px) {
  .profile {
    flex-direction: column;
  }
  .skills__card-content {
    max-width: 10rem;
    flex-direction: column;
  }
}
@media (max-width: 768px) {
  .skills__card-content {
    padding: 0.5rem;
    flex-direction: column;
  }
  .skills__card-img {
    min-width: 100%;
    transform: translate(0, -6rem);
  }
}
</style>
