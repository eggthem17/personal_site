<template>
  <v-toolbar-title>
    {{title}}
    <v-btn v-if="$store.state.editable" icon @click="openDialog" color="accent" ><v-icon>mdi-grease-pencil</v-icon></v-btn>
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title>
          사이트 이름 수정
          <v-spacer/>
          <v-btn icon color="green" @click="save"><v-icon>mdi-content-save</v-icon></v-btn>
          <v-btn icon color="error" @click="dialog=false"><v-icon>mdi-close</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="text" outlined label="제목" @keypress.enter="save" hide-details />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-toolbar-title>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
      dialog: false,
      text: this.title
    }
  },
  methods: {
    openDialog () {
      this.dialog = true
      this.text = this.title
    },
    async save () {
      try {
        await this.$firebase.database().ref().child('site').update({ title: this.text })
      } finally {
        this.dialoge = false
      }
    }
  }
}
</script>
