/**
 * System Pages Router
 */
import { LoginPage } from '@pages/system'

const SYSTEM_PAGES_ROUTES = [
  {
    path: '/system/auth/login',
    element: <LoginPage />,
  },
]

export default SYSTEM_PAGES_ROUTES
