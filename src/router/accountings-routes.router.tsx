/**
 * Accountings Router
 */
import { AccountingsPage } from '@pages/dashboard/accountings/AccountingsPage'

const ACCOUNTINGS_ROUTES = [
  {
    path: '/dashboard/accountings',
    meta: {
      sidebar: {
        label: 'Accountings',
        icon: null,
      },
    },
    element: <AccountingsPage />,
  },
]

export default ACCOUNTINGS_ROUTES
