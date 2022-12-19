/**
 * Root Page
 */
import { RootPage } from '@pages/RootPage'

/**
 * System | Auth | Error | Maintenance Pages
 */
import { LoginPage } from '@pages/system'

/**
 * Module Pages
 */
import ACCOUNTINGS_ROUTES from './accountings-routes.router'
import DASHBOARD_ROUTES from './dashboard-routes.router'

const APP_ROUTES = [
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: '/system',
        children: [
          {
            path: 'login',
            element: <LoginPage />,
          },
        ],
      },
      {
        path: '/dashboard',
        children: [...DASHBOARD_ROUTES, ...ACCOUNTINGS_ROUTES],
      },
    ],
  },
]

export default APP_ROUTES
