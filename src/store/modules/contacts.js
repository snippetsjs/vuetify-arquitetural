import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

// Initial state
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

export default{
  state,
  getters: [],
  mutations,
  actions
}
