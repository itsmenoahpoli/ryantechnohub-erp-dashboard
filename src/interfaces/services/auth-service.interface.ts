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