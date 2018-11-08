import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

const state = {
  contacts: []
}

const mutations = {
  'set-state-contacts'(state, contacts){
    state.contacts = contacts
  }
}

const actions = {
  'load-state-contacts'(context){
    Vue.http.get('https://aquarios-c47c4.firebaseio.com/contacts.json')
    .then(response => {
      let contacts = response.data;
      context.commit('set-state-contacts', contacts)
    })
  }
}

export default new Vuex.Store({
  state,
  getters: [],
  mutations,
  actions
})
