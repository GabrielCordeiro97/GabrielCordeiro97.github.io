<template>
  <body>
    <HeaderComponent @trocaModo="trocaModoHome"/>
    <main>
      <HomeView :modoCor="modoCor"/>
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
      modoCor: false,
    }
  },
  methods: {
    trocaModoHome() {
      this.modoCor = !this.modoCor,
      console.log(this.modoCor)
    }
  }
}

</script>

<style lang="scss">

</style>
