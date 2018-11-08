<template>
  <v-container fluid ma-0 pa-0 fill-width>
    <v-layout row>
      <v-flex xs12>
        <v-list subheader>
          <v-subheader>Recent chat</v-subheader>
          <v-list-tile
          v-for="contact in contacts"
          :key="contact.title"
          avatar
          @click=""
          >
          <v-list-tile-avatar>
            <img :src="contact.avatar">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="contact.title"></v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon :color="contact.active ? 'teal' : 'grey'">chat_bubble</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import store from '../store'
/*
  No momento da execução do methods do ciclo de vida do componente (created)
  é disparada uma evento para a store solicitando que os dados sejá carregado.

  Utilizando um method computed, os dados são mapeados no componente apartir
  do unico pode de verdade(Single Source Of Truth).
*/
export default {
  created(){
    store.dispatch('load-state-contacts')
  },
  computed: {
    contacts() {
      return store.state.contacts
    }
  }
}
</script>
