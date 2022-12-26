import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Button, Modal } from 'antd'

import type { IAccountReminder } from '@interfaces/models/account-reminder.interface'
import { ACCOUNTING_SERVICE } from '@services/index'
import {
  AccountRemindersList,
  AccountReminderForm,
} from '@features/accountings'
import { AppLayout } from '@components/layouts'

export const AccountRemindersPage: React.FC = () => {
  const fetchAccountReminders = async (params: any) => {
    return await ACCOUNTING_SERVICE.getRemindersList({ type: 'payables' })
  }

  const { isFetching, data, refetch } = useQuery({
    queryKey: ['account-reminders'],
    queryFn: fetchAccountReminders,
  })

  return (
    <AppLayout type="dashboard">
      <div className="list-filters">
        <div className="list-filters-panel">
          <Button onClick={() => refetch()}>Refresh List</Button>
        </div>
        <div className="list-filters-panel">
          <Button className="primary">Create Reminder</Button>
        </div>
      </div>

      <AccountRemindersList data={data} loading={isFetching} />
    </AppLayout>
  )
}
