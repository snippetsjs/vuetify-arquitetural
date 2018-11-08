<template>
  <v-app>
    <v-content>
      <v-container fluid ma-0 pa-0 fill-width>
        <v-layout row>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>

    <v-navigation-drawer></v-navigation-drawer>

    <v-footer></v-footer>
  </v-app>
</template>

<script>
import VNavigationDrawer from './components/shared/VNavigationDrawer'
import VFooter from './components/shared/VFooter'

export default {
  name: 'App',
  components: {
    VNavigationDrawer,
    VFooter
  },
  data () {
    return {
      //
    }
  }
}
</script>
