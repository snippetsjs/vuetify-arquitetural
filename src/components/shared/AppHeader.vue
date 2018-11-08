<template>
  <v-container>
    <v-navigation-drawer
    fixed
    v-model="drawer"
    app
    >
    <v-list dense v-for="(menu, index) in menus">
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ menu.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>

  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
  </v-toolbar>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      drawerTitleSeleted: '',
      menus: [
        { icon: 'home', title: 'Home' },
        { icon: 'home', title: 'Page 1' },
        { icon: 'home', title: 'Page 2' }
      ]
    }
  },
  computed: {
    // drawerSeletedTitle: function() {
    //   return .this.$route.name
    // }
  }
}
</script>
