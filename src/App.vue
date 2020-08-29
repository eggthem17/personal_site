<template>
  <v-app>
    <v-app-bar
      app
      color="#424242"
      dark
    >
    <v-app-bar-nav-icon app @click="drawer = !drawer"/>
    <site-title :title="title"></site-title>
    <v-spacer/>
    <v-btn icon @click='save'><v-icon>mdi-check</v-icon></v-btn>
    <v-btn icon @click='read'><v-icon>mdi-numeric</v-icon></v-btn>
    <v-btn icon @click='readOne'><v-icon>mdi-heart</v-icon></v-btn>
    <v-btn icon to="/about">
        <v-icon>mdi-magnify</v-icon>
    </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            메뉴
          </v-list-item-title>
          <v-list-item-subtitle>
            Menu
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <site-menu></site-menu>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import SiteTitle from '@/views/site/title'
import SiteMenu from '@/views/site/menu'

export default {
  components: { SiteTitle, SiteMenu },
  name: 'App',
  data () {
    return {
      drawer: false,
      title: "걔랑계란's Chillog"
    }
  },
  mounted () {
    console.log(this.$firebase)
  },
  methods: {
    save () {
      console.log('save@@@')
      this.$firebase.database().ref().child('abcd').set({
        title: 'abcd', text: 'tttttttttt'
      })
    },
    read () {
      this.$firebase.database().ref().child('abcd').on('value', (sn) => {
        console.log(sn)
        console.log(sn.val())
      })
    },
    async readOne () {
      const sn = await this.$firebase.database().ref().child('abcd').once('value')
      console.log(sn.val())
    }
  }
}
</script>
