import AuthService from '@services/auth.service'
import AccountingsService from '@services/accountings.service'
import InventoriesService from '@services/inventories.service'

const AUTH_SERVICE = new AuthService()
const ACCOUNTING_SERVICE = new AccountingsService()
const INVENTORY_SERVICE = new InventoriesService()

export { AUTH_SERVICE, ACCOUNTING_SERVICE, INVENTORY_SERVICE }
