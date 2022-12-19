/**
 * Dashboard Router
 */
import { HomePage } from '@pages/dashboard'

const DASHBOARD_ROUTES = [
  {
    path: '',
    meta: {
      sidebar: {
        label: 'Dashboard',
        icon: null,
      },
    },
    element: <HomePage />,
  },
]

export default DASHBOARD_ROUTES
