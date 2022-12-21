/**
 * Accountings Router
 */
import { AccountingsPage, PayableRemindersPage } from '@pages/dashboard'

const ACCOUNTINGS_ROUTES = [
  {
    path: '/dashboard/accountings',
    element: <AccountingsPage />,
    children: [
      {
        path: '/dashboard/accountings/payables-reminders',
        element: <PayableRemindersPage />,
      },
    ],
  },
]

export default ACCOUNTINGS_ROUTES
