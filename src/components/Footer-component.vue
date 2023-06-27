<template>
  <div class="footer" :class="{ lightMode: colorMode }">
    <div class="footer__logo">
      <img
        v-if="colorMode"
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
      <!-- <img class="footer__logo-img" src="../assets/icons/logoGray.png" alt="" /> -->
    </div>
    <div class="footer__description">
      <h2 class="footer__description-text" :class="{ lightMode: colorMode }">
        Gabriel Cordeiro | Front-end Developer
      </h2>
      <h2 class="footer__description-text" :class="{ lightMode: colorMode }">© 2023</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {
    colorMode: {
      type: Boolean,
    },
  },
}
</script>

<style>
.footer {
  display: flex;
  background-color: rgba(60, 60, 60);
  flex-direction: column;
  align-items: center;
}
.footer.lightMode {
  background-color: darkorange;
}
.footer__logo {
  justify-content: center;
}
.footer__logo-img {
  height: 6rem;
}
.footer__description {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer__description-text {
  font-size: 1rem;
  color: darkorange;
}
.footer__description-text.lightMode {
  color: rgb(37, 37, 37);
}
</style>