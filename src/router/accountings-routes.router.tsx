/**
 * Accountings Router
 */
import { AccountRemindersPage, AccountReminderFormPage } from '@pages/dashboard'

const ACCOUNTINGS_ROUTES = [
  {
    path: '/dashboard/accountings/account-reminders',
    element: <AccountRemindersPage />,
  },
  {
    path: '/dashboard/accountings/account-reminders/create',
    element: <AccountReminderFormPage type="create" />,
  },
  {
    path: '/dashboard/accountings/account-reminders/:accountReminderId/update',
    element: <AccountReminderFormPage type="update" />,
  },
]

export default ACCOUNTINGS_ROUTES
