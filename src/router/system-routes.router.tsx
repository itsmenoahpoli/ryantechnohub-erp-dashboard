/**
 * System Pages Router
 */
import { LoginPage, CaptureAuthPage } from '@pages/system'

const SYSTEM_PAGES_ROUTES = [
  {
    path: '/system/auth/login',
    element: <LoginPage />
  },
  {
    path: '/system/auth/capture',
    element: <CaptureAuthPage />
  }
]

export default SYSTEM_PAGES_ROUTES