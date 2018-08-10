import axios from 'axios'

export default function () {
  return axios.create({baseUrl: 'http://localhost:8000'})
}
