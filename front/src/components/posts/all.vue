<template>
  <div id="board" class="container">
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }} {{ post.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import postService from '@/services/post_service'
export default {
  data () {
    return {
      posts: {}
    }
  },
  methods: {
    async getPosts () {
      await postService.all()
        .then(res => {
          this.posts = res.data.posts
        })
    }
  },
  created () {
    this.getPosts()
  }
}
</script>
