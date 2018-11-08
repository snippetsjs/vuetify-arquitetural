<template>
  <v-container>
    <v-navigation-drawer
    fixed
    v-model="drawer"
    app
    >
    <v-list dense v-for="(menu, index) in menus">
      <v-list-tile @click="" :to="menu.path">
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
    <v-toolbar-title>{{ drawerTitleSeleted }}</v-toolbar-title>
  </v-toolbar>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      menus: [
        { path: '/home', icon: 'home', title: 'Home' },
        { path: '/contact', icon: 'group', title: 'Contacts' },
        { path: '/chats', icon: 'chat', title: 'Chats' }
      ]
    }
  },
  computed: {
    drawerTitleSeleted: function() {
      return this.$route.name
    }
  }
}
</script>
