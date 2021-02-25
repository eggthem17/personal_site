<template>
    <v-container v-if="!loaded" fluid>
        <v-skeleton-loader type="article" v-for="i in 4" :key="i"></v-skeleton-loader>
    </v-container>
    <v-container fluid v-else-if="loaded && result && !result.hits.length">
        <v-alert type="warning" border="left" class="mb-0">
            검색된 내용이 없습니다.
        </v-alert>
    </v-container>
    <v-container v-else fluid class="">
        <v-card-title class="body-1">
          <v-icon>mdi-madnify</v-icon>
          <span class="font-weight-bold mr-1">{{text}}</span>
          (으)로 검색된 결과:
          <span class="font-weight-bold ml-1">{{result.nbHits}}</span>
          건
          <v-spacer/>
          <v-img contain max-width="130" src="https://res.cloudinary.com/hilnmyskv/image/upload/q_auto/v1595410010/Algolia_com_Website_assets/images/shared/algolia_logo/search-by-algolia-light-background.svg"></v-img>
        </v-card-title>
        <template v-for="(hit) in result.hits">
          <display-search-item :item="hit" :key="hit.objectId" />
        </template>
    </v-container>
</template>
<script>
import DisplaySearchItem from '@/components/display-search-item'
import setMeta from '@/util/setMeta'

export default {
  components: { DisplaySearchItem },
  props: ['text'],
  data () {
    return {
      loaded: false,
      result: null
    }
  },
  watch: {
    text () {
      this.fetch()
    }
  },
  created () {
    this.fetch()
  },
  destroyed () {
    if (this.text) this.$store.commit('setSearchText', '')
  },
  methods: {
    async fetch () {
      if (this.text) this.$store.commit('setSearchText', this.text)
      setMeta({
        title: "검색 '" + this.text + "'",
        description: "검색 '" + this.text + "'",
        image: '/logo.png'
      })
      try {
        if (this.text.length < 2) throw Error('최소 2글자 이상 입력하세요.')
        this.loaded = false
        this.result = await this.$index.search(this.text)
        console.log(JSON.stringify(this.result, 2, null))
      } finally {
        this.loaded = true
      }
    }
  }
}
</script>
