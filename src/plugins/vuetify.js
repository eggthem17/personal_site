import Vue from 'vue'
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib'
import en from 'vuetify/es5/locale/en'
import ko from 'vuetify/es5/locale/ko'

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon
  }
})

const theme = {
  dark: true,
  themes: {
    dark: {
      background: '#161411', // App.vue/v-app/backgrund-color
      primary: '#3B3B48', // graphite
      secondary: '#4A4843', // beluga_grey
      accent: '#D94436', // red
      info: '#F29829', // orange
      default: '#F2F2F2' // white
    }
  }
}

const VuetifyObj = new Vuetify({
  lang: {
    locales: { en, ko },
    current: 'ko'
  },
  theme
})

export default VuetifyObj
