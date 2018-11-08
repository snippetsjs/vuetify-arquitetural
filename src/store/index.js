import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import contacts from './modules/contacts'

Vue.use(Vuex)
Vue.use(VueResource)

// // Initial state
// const state = {
//   contacts: []
// }
//
// const mutations = {
//   'set-state-contacts'(state, contacts){
//     state.contacts = contacts
//   }
// }
//
// const actions = {
//   'load-state-contacts'(context){
//     Vue.http.get('https://aquarios-c47c4.firebaseio.com/contacts.json')
//     .then(response => {
//       let contacts = response.data;
//       context.commit('set-state-contacts', contacts)
//     })
//   }
// }

export default new Vuex.Store({
  modules: {
    contacts
  },
  // mutations,
  // actions
})
