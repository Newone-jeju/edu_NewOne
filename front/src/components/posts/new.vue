<template>
  <div id="board" class="container">
    <div class="main-section">
      <div class="grid-container">
        <div class="row">
          <div class="col-lg-20 col-xl-20">
            <input v-model="title"/>
            <input v-model="content"/>
            <button @click="write">write</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postService from '@/services/post_service'
export default {
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    write () {
      postService.create({
        title: this.title,
        content: this.content
      })
    }
  }
}
</script>
