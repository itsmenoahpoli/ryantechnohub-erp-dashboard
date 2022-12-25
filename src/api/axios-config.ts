import { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { notification } from 'antd'
import { getEnv } from "@config/env.config"
import { storage } from '@utils/index'

const onRequest = (request: AxiosRequestConfig): AxiosRequestConfig => {
  const accessToken = storage.get('accessToken')

  if (request.headers) {
    request.headers['X-API-KEY'] = getEnv('X_API_KEY')
    request.headers['Authorization'] = 'Bearer ' + accessToken
    request.headers['Content-Type'] = 'application/json'
    request.headers['Accept'] = 'application/json'
  }

  return request
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  notification.error({
    duration: 5,
    message: 'Request Error',
    description: 'Failed to send request to server'
  })

  return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (error.code === 'ERR_NETWORK') {
    notification.error({
      duration: 5,
      message: 'Network Error',
      description: 'Failed to connect to server'
    })
  }

  return Promise.reject(error)
}


export const setupAxiosInstance = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(onRequest, onRequestError)
  instance.interceptors.response.use(onResponse, onResponseError)

  return instance
}