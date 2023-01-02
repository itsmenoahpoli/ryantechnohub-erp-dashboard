import { $axios } from '@api/index'
import { storage } from '@utils/index'
import type {
  ICredentials,
  ILoginResponse,
  IAuthService,
} from '@interfaces/services/auth-service.interface'
import type { IHttpResponse } from '@interfaces/http-response.interface'

export default class AuthService implements IAuthService {
  constructor() {}

  async login(
    credentials: ICredentials,
  ): Promise<IHttpResponse<ILoginResponse>> {
    const response: IHttpResponse<ILoginResponse> = await $axios.post(
      '/core/auth/login',
      credentials,
    )

    // storage.set('accessToken', response.data.accessToken)
    // storage.set('user', response.data.user)
    // storage.set('user-face-captured', false)

    // window.location.href = '/dashboard'

    return response
  }

  logout(): void {
    storage.remove('accessToken')
    storage.remove('user')

    window.location.href = '/system/login'
  }
}
