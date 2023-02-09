<template>
    <div 
      class="page-main-body"
      :class="{'lightMode': modoCor}"
    >
      <div>
        <section class="topico profile" id="profile">
          <div>
            <img class="profilePic" src="../assets/cyberpunk_12.png" alt="thor">
          </div>
          <div class="profileText">
            <h1 class="profileHello letra">{{ $t("message.profileHello") }}</h1>
            <h2 class="profileName">{{ $t("message.profileName") }}</h2>
            <p class="profileDescription"> {{ $t("message.profileDescription")}}</p>
            <div class="profileButtons">
                <button class="profileResume">
                  <div class="profileResumeInner"  @click="downloadPDF">
                    {{ $t("message.profileResume") }}
                  </div>
                </button>
                <button class="profileContact">
                  <div class="profileContactInner">
                    {{ $t("message.profileGetInTouch") }}
                  </div> 
                </button>
            </div>

          </div>
        </section>
        <section class="topico" id="skills">
          <h1 class="text-center letra">Skills</h1>
          <ul>
            <li>
                Vue.js
                <img class="icons" src="../assets/icons/vue-logo.png" alt="vue">
            </li>
            <li class="letra">Bootstrap</li>
            <li class="letra">JavaScript</li>
            <li class="letra">HTML/CSS</li>
          </ul>
        </section>
        <section class="topico" id="projects">
          <h1 class="text-center letra">Projects</h1>
          <ul>
            <li class="letra">Projeto 1</li>
            <li class="letra">Projeto 2</li>
            <li class="letra">Projeto 3</li>
          </ul>
        </section>
        <section class="topico" id="contact">
          <h1 class="text-center letra">Contact</h1>
          <p class="letra">Entre em contato comigo pelo e-mail: email@exemplo.com</p>
        </section>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeView',
  props: {
    modoCor:{
      type: Boolean
    }
  },
  methods:{
    downloadPDF(){
      const link = document.createElement('a')
      link.download = 'CurriculoGabrielCordeiro.pdf'
      link.href = 'https://files.fm/down.php?i=gntz7kzee'
      link.click()
    }
  }
}
</script>

<style>
.page-main-body.lightMode{
  background-color: rgb(237, 237, 245);
}
.page-main-body {
  background-color: rgb(36, 37, 53);
  margin: 0 !important;
  margin-right:0 !important; 
}
.icons {
  width: 50px;
  height: 500px;
}
.topico {
  padding-top: 9rem;
  height: 100vh;
  width: 100hw;
}
.profile {
  display: flex;
  margin: 0 100px 0 100px;
  justify-content: space-around;
}
.profilePic {
  width: 26.125rem;
  height: 24.25rem;
  border-radius: 20px;
}
/* .profileText {
  align-items: center;
} */
.profileHello {
  font-family: 'Poppins', sans-serif;
  font-size: 3.2rem;
  font-weight: 500;
  color: #F9F9F9;
  line-height: 5.4rem;
}
.profileName {
  font-size: 3.6rem;
  color: darkorange;
  font-weight: 500;
}
.profileDescription {
  font-size: 2rem;
  color: rgb(150, 150, 148);
  font-weight: 400;
}
.profileResume, .profileContact{
  /* background-color: darkorange; */
  background-image: linear-gradient(to top left, darkorange, rgb(255, 196, 0));
  margin-right: 3rem;
  transform: skew(20deg);
  width: 12rem;
  height: 3.5rem;
  border-radius: 10px;
}
.profileResumeInner, .profileContactInner {
  transform: skew(-20deg);
  display: inline-block;
  font-weight: 700;
}
.letra {
  color: rgb(219, 219, 235);
}
</style>
