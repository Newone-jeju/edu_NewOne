<template>
  <div id="login" class="container">
    <div class="login-box">
      <input type="text" v-model="id">
      <input type="password" v-model="password">
      <button @click="login" type="submit">login</button>
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
    login () {
      auth.login({
        id: this.id,
        password: this.password
      })
    }
  }
}
</script>
