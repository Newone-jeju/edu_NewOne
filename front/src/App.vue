<template>
  <div class="container">
    <router-view name="MainNav"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "./assets/css/main.css";
</style>
