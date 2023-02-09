<template>
    <div class="cabecalho-box">
        <b-navbar class="cabecalho"
                  :class="{'lightMode': lightMode}" 
                  toggleable="sm" 
                  type="dark">
            <b-navbar-brand class="cabecalho-brand" to="/">
                <img v-if="lightMode" class="cabecalho-logo" src="../assets/icons/logoOrange.png"  alt="Gazu">
                <img v-else class="cabecalho-logo" src="../assets/icons/logoGray.png" alt="Gazu">
            </b-navbar-brand>
            <b-navbar-toggle class="cabecalho-toggler" target="nav-collapse">
                <span class="navbar-toggler-icon"></span>
            </b-navbar-toggle>
            <b-collapse class="cabecalho-direita" id="nav-collapse" is-nav>
                <b-navbar-nav class="cabecalho-navegacao">
                    <b-nav-item class="cabecalho-item" href="/#profile">{{ $t("message.headerProfile") }}</b-nav-item>
                    <b-nav-item class="cabecalho-item" href="/#skills">{{ $t("message.headerSkills") }}</b-nav-item>
                    <b-nav-item class="cabecalho-item" href="/#projects">{{ $t("message.headerProjects") }}</b-nav-item>
                    <b-nav-item class="cabecalho-item" href="/#contact">{{ $t("message.headerContact") }}</b-nav-item>
                </b-navbar-nav>
                <div class="button-lightMode">
                    <label class="switch">
                        <input type="checkbox" @input="trocaModo" v-model="lightMode">
                        <span class="slider"></span>
                    </label>
                    <b-form-select v-model="locale" :options="locales" v-on:change="changeLanguage" class="mb-2"></b-form-select>
                </div>
            </b-collapse>
        </b-navbar>
    </div>   
</template>

<script>

export default {
    data() {
      return {
        locale: 'en-US',
        locales: [
          { text: 'English US (en-US)', value: 'en-US' },
          { text: 'Português (pt-BR)', value: 'br' },
        ],
        lightMode: false,
      }
    },
    methods:{
        changeLanguage(){
          this.$i18n.locale = this.locale
        },
        trocaModo(){
          this.$emit("trocaModo")
        }
    },
  }
</script>

<style>
  .cabecalho-box{
      position: sticky !important;
      top: 0;
      z-index: 1;
  }
  .cabecalho {
      background-color: rgba(60,60,60);
      padding: 0rem 5rem !important;
      border-bottom: solid 2px rgb(255, 230, 0);
  }
  .cabecalho-logo {
      width: 8rem;
      height: 8rem;
  }
  .lightNavItem {
    color: rgb(60, 60, 60) !important;
  }
  .nav-link{
      color: rgb(255, 140, 0) !important;
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: 500;
  }
  .cabecalho-menu {
      display: flex;
  }
  .cabecalho-navegacao {
      display: flex;
      align-items: center;
      margin-right: 40px;
  }
  .cabecalho-item {
      margin-right: 40px;
  }
  .cabecalho-toggler {
      margin-right: 15px;
      width: 50px;
  }
  .cabecalho-direita {
      display: flex;
      justify-content: right;
  }

/* BOTAO LIGHT MODE E O ESTILO DO LIGHT MODE ABAIXO*/
.button-lightMode {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 30px;
}

.lightMode {
    background-color: rgb(255, 140, 0);
  }

.lightMode .nav-link {
    color: rgb(60, 60, 60) !important;
    font-weight: 500;
  }

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  border: solid rgb(255, 140, 0) 2px;
  border-radius: 10%;
  transform: skew(20deg);
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(60, 60, 60);
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 9%;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: rgb(218, 218, 218);
  -webkit-transition: .4s;
  transition: .4s;
  /* border-radius: 50%; */
}
input:checked + .slider {
  background-color: rgb(60,60,60);
}
input:focus + .slider {
  box-shadow: 0 0 1px rgba(8,9,87,255);
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>