import http from './http'

export default {
  create (credentials) {
    return http().post('posts', credentials)
  }
}
