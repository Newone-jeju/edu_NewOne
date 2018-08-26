<template>
  <div class="login-box">
    <h1>로그인</h1>
    <input type="text" v-model="id" @keyup.enter="login">
    <input type="password" v-model="password" @keyup.enter="login">
    <div class="btn-wrap">
      <input @click="login" type="submit" value="sign-in">
      <input type="button" value="sign-up">
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

<style>
  .login-box {
    position: relative;
    width: 500px;
    text-align: center;
    margin: 0 auto;
    top: 50%;
    margin-top: -160px;
  }
  .login-box > * {
    display: block;
    width: 90%;
    margin: 10px auto;
  }
  .login-box > input[type="text"], .login-box > input[type="password"] {
    background-color: transparent;
    border: 0.8px solid gray;
    border-radius: 6px;
    font-size: 16px;
    padding: 12px;
  }
  .btn-wrap {
    margin-top: 20px;
  }
  .btn-wrap > input[type="submit"], .btn-wrap > input[type="button"] {
    background-color: #0080ff;
    color: azure;
    font-size: 16px;
    font-weight: 600;
    border: none;
    padding: 15px 10px;
    float: left;
    width: 48%;
    margin: 0 1%;
  }
  .btn-wrap::after {
    display: block;
    content: '';
    clear: both;
  }
  .login-box > input[type="text"], .login-box > input[type="password"] {
    margin: 10px auto;
  }
</style>
