<template>
  <b-container class="about">
    <h1 class="about__title" :class="{ lightMode: colorMode }">
      {{ $t("message.profileAboutTitle") }}
    </h1>
    <p class="about__content" :class="{ lightMode: colorMode }">
      {{ $t("message.profileAboutContent") }}
    </p>
  </b-container>
</template>

<script>
export default {
  name: "HomeViewAbout",
  props: {
    colorMode: {
      type: Boolean,
    },
  },
};
</script>

<style>
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
  color: #f9f9f9;
  text-align: center;
  font-size: 2.6rem;
  font-weight: 600;
  margin-bottom: 20px;
}
.about__content {
  color: rgb(150, 150, 148);
  text-align: justify;
  line-height: 180%;
  font-size: 1.6rem;
  font-weight: 500;
  font-family: "DM Sans", sans-serif;
  width: 100%;
}

.about__title.lightMode {
  color: rgb(70, 70, 70);
}
.about__content.lightMode {
  color: rgb(70, 70, 70);
}
</style>
