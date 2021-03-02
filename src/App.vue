<template>
  <v-app>
    <v-app-bar app color="secondary" dark :clipped-left="$vuetify.breakpoint.lgAndUp">
    <v-app-bar-nav-icon app color="orange" @click="drawer = !drawer"/>
    <site-title :title="site.title"></site-title>
    <v-spacer/>
    <site-search/>
    <site-sign></site-sign>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" :width="$store.state.editable ? 380 : null">
      <site-menu :items="site.menu" @close="drawer=false"></site-menu>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import SiteTitle from '@/views/site/title'
import SiteMenu from '@/views/site/menu'
import SiteSign from '@/views/site/sign'
import SiteSearch from '@/views/site/search'

export default {
  components: { SiteTitle, SiteMenu, SiteSign, SiteSearch },
  name: 'App',
  data () {
    return {
      drawer: false,
      site: {
        menu: [
          {
            title: '로드중...',
            icon: 'mdi-home',
            subItems: [
              {
                title: 'Dashboard',
                to: '/',
                createdAt: new Date('2000-01-01'),
                level: 5
              }
            ],
            createdAt: new Date('2000-01-01'),
            level: 5
          }
        ],
        title: '로드중...'
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
<style>
.white-space{
  white-space: pre-wrap;
}
</style>
