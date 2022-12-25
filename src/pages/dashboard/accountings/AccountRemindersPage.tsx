import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { ACCOUNTING_SERVICE } from '@services/index'
import { AccountRemindersList } from '@components/features/accoutings/AccountRemindersList'

const paginationParams = {
  page: 1,
  limit: 25,
}

export const AccountRemindersPage: React.FC = () => {
  const fetchAccountReminders = async (params: any) => {
    return await ACCOUNTING_SERVICE.getRemindersList({ type: 'payables' })
  }

  const { isFetching, data } = useQuery({
    queryKey: ['account-reminders'],
    queryFn: fetchAccountReminders,
  })

  console.log(data)

  return (
    <div>
      <AccountRemindersList paginationParams={paginationParams} />
    </div>
  )
}
