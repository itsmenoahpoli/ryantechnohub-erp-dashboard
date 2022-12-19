import axios from 'axios'
import { setupAxiosInstance } from '@api/axios-config'
import { getEnv } from '@config/env.config'

const $axios = setupAxiosInstance(axios.create({
  baseURL: getEnv('API_BASEURL'),
  timeout: 8000
}))

export {
  $axios
}