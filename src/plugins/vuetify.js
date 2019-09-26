import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#336699',
        secondary: '#2a9f7d',
        accent: '#3f51b5',
        error: '#f44336',
        warning: '#ff9800',
        info: '#00bcd4',
        success: '#8bc34a'
      }
    }
  }
  // icons: {
  //   iconfont: 'mdi'
  // }
})
