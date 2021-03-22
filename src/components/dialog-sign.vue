<template>
  <v-card>
    <v-toolbar dense color="secondary" dark flat>
      <v-toolbar-title>
        {{ modeIn ? 'LogIn' : 'SignIn' }}
      </v-toolbar-title>
      <v-spacer/>
      <v-btn text @click="modeIn=!modeIn">
        <v-icon left v-text="modeIn ? 'mdi-account-plus' : 'mdi-account'"></v-icon>
        <span v-text="modeIn ? '회원가입' : '로그인'"></span>
      </v-btn>
      <v-btn icon @click="$emit('close')"><v-icon>mdi-close</v-icon></v-btn>
    </v-toolbar>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6" :oeder="$vuetify.breakpoint.xs ? 1 : null">
          <template v-if="modeIn">
            <v-alert color="default" dark border="left" outlined height="100%">
              <ul>
                <li>{{site.title}}{{site.description}}</li>
                <br>
                <ul>edit later</ul>
              </ul>
            </v-alert>
          </template>
          <template v-else>
            <v-alert color="info" border="left" outlined height="100%">
              <ul>
                <li>소셜 로그인은 별도의 회원가입이 필요 없습니다.</li>
                <li>소셜 로그인시 이메일, 계정명, 프로필사진이 저장됩니다.</li>
                <li>이메일 가입시 이메일과 계정명이 저장됩니다.</li>
                <li>비밀번호는 firebase auth 정책에 의해 암호화 저장되며 수집되지 않습니다.</li>
                <li>회원 탈퇴시 7일 이후 모든 정보가 삭제됩니다.</li>
              </ul>
            </v-alert>
          </template>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card outlined :loading="loading" :disabled="loading"></v-card>
          <template>
            <v-subheader>
              Social Login
              <v-spacer/>
            </v-subheader>
            <v-card-actions>
              <v-btn block color="info" dark @click="signInWithGoogle" class="mb-4">
                <v-icon left>mdi-google</v-icon>
              </v-btn>
            </v-card-actions>
          </template>
          <v-divider/>
          <template v-if="modeIn">
            <v-subheader>Email Login<v-spacer/></v-subheader>
            <v-card-text>
              <v-text-field v-model="email" outlined label="email" autocomplete="email" required />
              <v-text-field v-model="password" type="password" outlined label="password" hide-details required @keypress.native.enter="signInWithEmail"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn block color="" @click="signInWithEmail">
                <v-icon left>mdi-email</v-icon>
              </v-btn>
            </v-card-actions>
          </template>
          <template v-else>
            <v-subheader>Signin with email</v-subheader>
            <v-card-text>
              <v-text-field v-model="email" outlined label="email" hide-details type="email" autocomplete="email" required />
              <v-text-field v-model="displayName" outlined label="NickName" hide-details type="text" required />
              <v-text-field v-model="password" type="password" outlined label="password" hide-details required @keypress.native.enter="signUpWithEmail"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn block color="" @click="signUpWithEmail">
                <v-icon left>mdi-email</v-icon>
              </v-btn>
            </v-card-actions>
          </template>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      site: {
        title: process.env.VUE_APP_SITE_TITLE,
        description: process.env.VUE_APP_SITE_DESCRIPTION
      },
      loading: false,
      modeIn: true,
      email: '',
      password: '',
      displayName: ''
    }
  },
  methods: {
    async signInWithGoogle () {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.loading = true
      try {
        await this.$firebase.auth().signInWithPopup(provider)
      } finally {
        this.loading = false
      }
    },
    async signInWithEmail () {
      throw Error('준비중입니다.')
    },
    async signUpWithEmail () {
      throw Error('준비중입니다.')
    }
  }
}
</script>
