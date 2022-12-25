export interface IHttpResponse<T> {
  status: number
  statusText: string
  data: {
    error?: boolean
    message?: string
    data: T
  }
}