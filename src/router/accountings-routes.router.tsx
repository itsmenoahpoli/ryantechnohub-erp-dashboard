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
    path: '/dashboard/accountings/account-reminders/create-account-reminder',
    element: <AccountReminderFormPage type="create" />,
  },
  {
    path: '/dashboard/accountings/account-reminders/update-account-reminder',
    element: <AccountReminderFormPage type="update" />,
  },
]

export default ACCOUNTINGS_ROUTES
