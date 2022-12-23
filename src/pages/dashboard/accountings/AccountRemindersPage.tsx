import React from 'react'
import { useQuery } from 'react-query'

import { ACCOUNTING_SERVICE } from '@services/index'

export const AccountRemindersPage: React.FC = () => {
  const { isLoading, isError, data } = useQuery(
    ['accountings/account-reminders'],
    async () => await ACCOUNTING_SERVICE.getRemindersList({ type: 'payables' }),
  )

  console.log({ isLoading, isError, data })

  return <div></div>
}
