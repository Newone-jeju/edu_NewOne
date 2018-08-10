<template>
<div id="board" class="container">
<input class="title"/>
<input class="content"/>
<button @click="write">write</button>
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
