import type { IHttpResponse } from '@interfaces/http-response.interface'
export interface ICredentials {
  email: string
  password: string
}
export interface ILoginResponse {
  accessToken: string
  authenticated: boolean
  user: object
  request: object
}
export interface IAuthService {
  login: (credentials: ICredentials) => Promise<IHttpResponse<ILoginResponse>>
  logout: () => void
}