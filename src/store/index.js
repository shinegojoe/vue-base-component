import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from './modules/sidebar.js'
import closeOutside from './modules/closeOutside.js'

Vue.use(Vuex)
console.log('sidebar', sidebar)
export default new Vuex.Store({
  modules: {
    sidebar,
    closeOutside
  }
})
