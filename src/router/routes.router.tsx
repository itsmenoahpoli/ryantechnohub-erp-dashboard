/**
 * Root Page
 */
import { RootPage } from '@pages/RootPage'

/**
 * Dashboard Pages
 */
import { HomePage } from '@pages/dashboard'

/**
 * System | Auth | Error | Maintenance Pages
 */
import { LoginPage } from '@pages/system'

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
        meta: {
          requiresAuth: true,
        },
        children: [
          {
            path: '',
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]

export default APP_ROUTES
