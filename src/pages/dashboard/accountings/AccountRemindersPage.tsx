import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Button, Modal } from 'antd'
import {
  ReloadOutlined,
  CloudDownloadOutlined,
  FilterOutlined,
} from '@ant-design/icons'

import type { IAccountReminder } from '@interfaces/models/account-reminder.interface'
import { ACCOUNTING_SERVICE } from '@services/index'
import {
  AccountRemindersList,
  AccountReminderForm,
} from '@features/accountings'
import { AppLayout } from '@components/layouts'

export const AccountRemindersPage: React.FC = () => {
  const [searchParams] = useSearchParams()

  const fetchAccountReminders = async () => {
    return await ACCOUNTING_SERVICE.getRemindersList({
      type: searchParams.get('type'),
    })
  }

  const { isFetching, data, refetch } = useQuery({
    queryKey: ['account-reminders', searchParams.get('type')],
    queryFn: fetchAccountReminders,
    select: ({ data }) => data.data,
  })

  return (
    <AppLayout type="dashboard">
      <div className="list-filters">
        <div className="list-filters-panel">
          <Button onClick={() => refetch()} icon={<ReloadOutlined />} />
          <Button icon={<CloudDownloadOutlined />}>Export</Button>
          <Button icon={<FilterOutlined />}>Filters</Button>
        </div>
        <div className="list-filters-panel">
          <Button className="primary">Create Reminder</Button>
        </div>
      </div>

      <AccountRemindersList data={data} loading={isFetching} />
    </AppLayout>
  )
}
