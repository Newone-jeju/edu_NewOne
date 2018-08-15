import axios from 'axios'
import store from '@/store/store'

export default function () {
  const token = store.state.token
  return axios.create({baseURL: 'http://localhost:8000', headers: {token: token}})
}
