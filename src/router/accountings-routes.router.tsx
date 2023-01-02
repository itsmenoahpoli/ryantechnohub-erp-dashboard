/**
 * Accountings Router
 */
import { AccountingsPage, AccountRemindersPage } from '@pages/dashboard'

const ACCOUNTINGS_ROUTES = [
  {
    path: '/dashboard/accountings/account-reminders',
    element: <AccountRemindersPage />,
  },
]

export default ACCOUNTINGS_ROUTES
