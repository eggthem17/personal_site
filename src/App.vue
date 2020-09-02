<template>
  <v-app>
    <v-app-bar app color="#424242" dark>
    <v-app-bar-nav-icon app @click="drawer = !drawer"/>
    <site-title :title="site.title"></site-title>
    <v-spacer/>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" width="400">
      <site-menu :items="site.menu"></site-menu>
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
      site: {
        menu: [
          {
            title: 'home',
            icon: 'mdi-home',
            subItems: [
              {
                title: 'Dashboard',
                to: '/'
              },
              {
                title: 'about',
                to: '/about'
              }
            ]
          },
          {
            title: 'about',
            active: true,
            icon: 'mdi-account-badge',
            subItems: [
              {
                title: 'xxx',
                to: '/xxx'
              }
            ]
          }],
        title: "걔랑계란's Chillog"
      }
    }
  },
  created () {
    this.subscribe()
  },
  methods: {
    subscribe () {
      this.$firebase.database().ref().child('site').on('value', (sn) => {
        const v = sn.val()
        if (!v) {
          this.$firebase.database().ref().child('site').set(this.site)
          return
        }
        this.site = v
      }, (e) => {
        console.log(e.message)
      })
    }
  }
}
</script>
