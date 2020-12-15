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
  themes: {
    light: {
      primary: '#3B3B48', // graphite
      secondary: '#716E6A', // grey
      accent: '#F29829', // orange
      info: '#F29829', // orange
      success: '#D94436', // red
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
