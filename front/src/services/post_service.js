import http from './http'

export default {
  create (credentials, header) {
    return http().post('posts')
  },
  all () {
    return http().get('posts')
  }
}
