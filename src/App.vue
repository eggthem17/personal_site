<template>
  <v-app>
    <v-app-bar
      app
      color="#424242"
      dark
    >
    <v-app-bar-nav-icon app @click="drawer = !drawer"/>
    <v-toolbar-title>걔랑계란 Chillog</v-toolbar-title>
    <v-spacer/>
    <v-btn icon to="/about">
        <v-icon>mdi-magnify</v-icon>
    </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false
    }
  }
}
</script>
