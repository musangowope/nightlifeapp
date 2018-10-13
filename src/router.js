import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'history',
  routes: [
    { path: '/starting', component: load('Starting') },
    { path: '/getting-started', component: load('GettingStarted') },
    { path: '/night-life', component: load('NightLife') },
    { path: '/avatar-setup', component: load('AvatarSetup') },
    { path: '/chat', component: load('Chat') },
    { path: '/chat-tutorial', component: load('chat-tutorial/ChatTutorial') },
    { path: '/place-details', component: load('PlaceDetails') },
    { path: '/callback', component: load('Callback') },
    // Always leave this last one
    { path: '*', component: load('Starting') } // Not found
  ]
})
