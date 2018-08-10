<template>
  <div id="board" class="container">
    <div class="main-section">
      <div class="grid-container">
        <div class="row">
          <div class="col-lg-20 col-xl-20">
            <div class="board-title">
              <h2>커뮤니티</h2>
            </div>
            <ul class="card">
              <li v-for="post in posts" :key="post.id">
                <a href="" class="clear">
                  <div class="title h5">{{ post.title }}</div>
                </a>
                <div class="additional h4">
                  <div class="tag-container">
                    <a href="" class="tag block h6 mono">html</a>
                    <a href="" class="writer"></a>
                  </div>
                  <div class="time"><img src="../../assets/images/eye.png" alt="">&nbsp;<span class="count">10k</span>&nbsp;&nbsp;&nbsp; {{ post.updatedAt }} </div>
                </div>
                </li>
            </ul>
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

<style>
  .board-title h2 {
    padding: 15px 0;
  }
</style>
