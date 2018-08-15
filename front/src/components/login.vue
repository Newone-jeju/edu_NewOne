<template>
  <div id="login" class="container">
    <div class="main-section">
      <div class="grid-container">
        <div class="row">
          <div class="col-lg-20 col-xl-20">
            <div class="login-box">
              <input type="text" v-model="id" @keyup.enter="login">
              <input type="password" v-model="password" @keyup.enter="login">
              <input @click="login" type="submit" value="login">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import auth from '@/services/authentication'
export default {
  data () {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    async login () {
      await auth.login({
        id: this.id,
        password: this.password
      })
        .then(res => {
          this.$store.dispatch('setToken', res.data.token)
          this.$store.dispatch('setName', res.data.name)
          this.$router.go(-1)
        })
    }
  }
}
</script>
