<template>
  <body>
    <HeaderComponent @switchMode="switchColorMode"/>
    <main>
      <HomeView :colorMode="lightMode"/>
    </main>
    <FooterComponent/>
  </body>
</template>

<script>
import HeaderComponent from './components/Header-component.vue'
import HomeView from './components/HomeView.vue'
import FooterComponent from './components/Footer-component.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HomeView,
    FooterComponent,
  },
  data() {
    return{
      lightMode: false,
    }
  },
  methods: {
    switchColorMode() {
      this.lightMode = !this.lightMode
    }
  }
}

</script>

<style lang="scss">

</style>
