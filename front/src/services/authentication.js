import http from './http'

export default {
  login (credentials) {
    return http().post('login', credentials)
  }
}
