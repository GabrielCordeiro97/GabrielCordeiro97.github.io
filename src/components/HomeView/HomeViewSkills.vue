<template>
    <div class="skills">
        <h1 class="skills__title">Skills</h1>
        <div class="skills__list-wrapper">
        <ul class="skills__list">
            <li class="skills__card-wrapper">
            <article
                class="skills__card-content"
                v-for="(skill, index) in skills"
                :key="index"
            >
                <div class="skills__card-img">
                <img
                    class="skills__card-logo"
                    :src="skill.image"
                    :alt="skill.title"
                />
                </div>
                <div class="skills__card-info">
                <h2 class="skills__h2">{{ skill.title }}</h2>
                <p class="skills__text">{{ skill.description }}</p>
                </div>
            </article>
            </li>
        </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
      skills: [
        {
          title: "HTML5",
          image:
            "https://logodownload.org/wp-content/uploads/2016/10/html5-logo-6.png",
          description: "Linguagem de marcação para construção de páginas web",
        },
        {
          title: "CSS3",
          image:
            "https://logodownload.org/wp-content/uploads/2017/04/css-3-logo-6.png",
          description: "Linguagem de estilização para páginas web",
        },
        {
          title: "JavaScript",
          image:
            "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-4.png",
          description: "Linguagem de programação para páginas web",
        },
        {
          title: "Vue JS",
          image: "https://logospng.org/download/vue.js/vue-js-512.png",
          description:
            "Framework JavaScript progressivo para construir interfaces de usuário interativas e reativas em aplicações web.",
        },
        {
          title: "Bootstrap",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024",
          description:
            "Framework de desenvolvimento web para criar sites responsivos e estilos predefinidos.",
        },
        {
          title: "Git/Github",
          image: "https://img.icons8.com/color/256/git.png",
          description:
            "Sistema de controle de versionamento distribuído de código fonte utilizado para gerenciar o desenvolvimento de projetos de software.",
        },
      ],
    };
  },
}
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
  /* object-fit: cover; */
  border-radius: 0.8rem;
}

.skills__card-info {
  padding-right: 2rem;
}
.skills__h2 {
  font-size: 1.5rem;
  margin: 1rem 0 1.5rem;
  text-transform: uppercase;
  color: darkorange;
}
.skills__text {
  color: rgba(209, 209, 209, 0.7);
  font-size: 0.9rem;
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