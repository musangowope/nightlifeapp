// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar, * as All from 'quasar'
import router from './router'
import 'quasar-extras/animate/fadeIn.css'
import 'quasar-extras/animate/fadeOut.css'
import 'quasar-extras/animate'
import 'quasar-extras/fontawesome'
import { store } from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueFire from 'vuefire'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(Quasar, {
  components: All,
  directives: All
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAX28CJU-mIzZjwWSW7LPZv7qfUzrTeGSY',
    libraries: 'places'
  }
})

Vue.use(VueAxios, axios)
Vue.use(VueFire)

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    store: store,
    el: '#q-app',
    router,
    render: h => h(require('./App'))
  })
})
