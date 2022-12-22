/**
 * Root Page
 */
import { RootPage } from '@pages/RootPage'

/**
 * System | Auth | Error | Maintenance Pages
 */
import { ErrorPage } from '@pages/system'

/**
 * Module Pages
 */
import DASHBOARD_ROUTES from './dashboard-routes.router'
import SYSTEM_PAGES_ROUTES from './system-routes.router'
import ACCOUNTINGS_ROUTES from './accountings-routes.router'

const APP_ROUTES = [
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/system',
        children: [
          ...SYSTEM_PAGES_ROUTES
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
