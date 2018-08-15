<template>
  <div id="login" class="container">
    <div class="login-box">
      <input type="text" v-model="id">
      <input type="password" v-model="password">
      <button @click="login" type="submit">login</button>
    </div>
    <div class="test">
      {{ testId }} {{ testPassword }} {{ jwt }}
    </div>
  </div>
</template>

<script>
import auth from '@/services/authentication'
export default {
  data () {
    return {
      id: '',
      password: '',
      testId: '',
      testPassword: '',
      jwt: ''
    }
  },
  methods: {
    async login () {
      await auth.login({
        id: this.id,
        password: this.password
      })
        .then(res => {
          this.testId = res.data.id
          this.testPassword = res.data.password
          this.jwt = res.data.token
        })
    }
  }
}
</script>
