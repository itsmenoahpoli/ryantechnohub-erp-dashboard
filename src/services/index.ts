
import AuthService from "@services/auth.service"
import AccountingsService from '@services/accountings.service'

const AUTH_SERVICE = new AuthService()
const ACCOUNTING_SERVICE = new AccountingsService()

export {
  AUTH_SERVICE,
  ACCOUNTING_SERVICE
}