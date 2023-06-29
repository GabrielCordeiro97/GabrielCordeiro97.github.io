<template>
  <div class="projects">
    <h1 class="projects__title" :class="{ lightMode: colorMode }">Projects</h1>
    <div class="projects__list-wrapper">
      <ul class="projects__list">
        <li
          class="projects__card-wrapper"
          v-for="(project, index) in projects"
          :key="index"
          :class="{
            'projects__card--left-align': index % 2 === 0,
            'projects__card--right-align': index % 2 === 1,
          }"
        >
          <div class="projects__card"
            :class="{
            'projects__inner--left-align': index % 2 === 0,
            'projects__inner--right-align': index % 2 === 1,
          }"
          >
            <b-card
              :title="`${project.title}`"
              :img-src="`${project.img}`"
              :img-alt="Image"
              img-top
              tag="article"
              class="mb-2 projects__card-content"
            >
              <b-card-text>
                {{ project.description }}
              </b-card-text>
              <b-button href="#" variant="danger">Visit Project</b-button>
            </b-card>
          </div>
          <div class="timeline"></div>
          <div>
            <h3 class="projects__card-year" :class="{ lightMode: colorMode }">{{ project.year }}</h3>
          </div>
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
      projects: [
        {
          title: "Flamenguismo",
          img: "https://www.flaresenha.com/wp-content/uploads/2018/02/conmebol-proibe-sinalizadores-fumacas-e-rolos-de-papel-de-torcida-1.jpg",
          imgAlt: "Flamenguismo",
          year: "2022",
          description:
            "A portal for news and statistics about Clube de Regatas do Flamengo. The proposal of this project is to build a dynamic and easily updatable website with content centered on one of my passions: the Flamengo soccer team.",
        },
        {
          title: "Flamenguismo",
          img: "https://www.flaresenha.com/wp-content/uploads/2018/02/conmebol-proibe-sinalizadores-fumacas-e-rolos-de-papel-de-torcida-1.jpg",
          imgAlt: "Flamenguismo",
          year: "2022",
          description:
            "A portal for news and statistics about Clube de Regatas do Flamengo. The proposal of this project is to build a dynamic and easily updatable website with content centered on one of my passions: the Flamengo soccer team.",
        },
        {
          title: "Eu topo",
          year: "2022",
          img: "",
          description: "",
        },
      ],
    };
  },
};
</script>

<style>
.projects__title {
  font-family: "DM Sans", sans-serif;
  font-size: 2.6rem;
  color: #f9f9f9;
  font-weight: 600;
  text-align: center;
  margin-bottom: 50px;
}
.projects__list {
  padding: 0 5%;
}
.card-img-top {
  max-width: 35rem !important;
  max-height: 10rem;
}
.projects__card-wrapper {
  display: flex;
}
.projects__card--left-align {
  justify-content: left;
}
.projects__card--right-align {
  justify-content: right;
  flex-flow: row-reverse;
}

.projects__card {
  margin-bottom: 140px;
  width: 45%;
}
.projects__inner--left-align {
  display: flex;
  justify-content: right;
}




.projects__card-content {
  max-width: 35rem;
  max-height: 30rem;
}
.timeline {
  background-color: darkorange;
  width: 0.2%;
  margin: 0 4.9%;
}
.projects__card-year {
  color: white;
}

/* classes lightMode */

.projects__title.lightMode {
  color: rgb(70, 70, 70);
}
.projects__card-year.lightMode {
  color: rgb(70, 70, 70);
}
</style>
