import { $axios } from "@api/index"
import { storage } from '@utils/index'

interface ICredentials {
  email: string
  password: string
}

interface ILoginResponse {
  data: {
    accessToken: string
    authenticated: boolean
    user: object
    request: object
  }
}

export default class AuthService {
  constructor() { }

  async login(credentials: ICredentials): Promise<ILoginResponse> {
    const response: ILoginResponse = await $axios.post('/core/auth/login', credentials)

    storage.set('accessToken', response.data.accessToken)
    storage.set('user', response.data.user)

    window.location.href = '/dashboard'

    return response
  }

  logout(): void {
    storage.remove('accessToken')
    storage.remove('user')

    window.location.href = '/system/login'
  }
}