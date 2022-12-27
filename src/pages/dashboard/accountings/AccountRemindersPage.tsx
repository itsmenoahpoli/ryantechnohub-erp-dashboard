import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Button, Space, Input, Alert } from 'antd'
import {
  ReloadOutlined,
  CloudDownloadOutlined,
  FilterOutlined,
  SearchOutlined,
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
  const [selectedRows, setSelectedRows] = React.useState<React.Key[]>([])

  const fetchAccountReminders = async () => {
    return await ACCOUNTING_SERVICE.getRemindersList({
      type: searchParams.get('type'),
    })
  }

  const onSelectRows = (rowIds: React.Key[]) => {
    setSelectedRows([...new Set(rowIds)])
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
          <Space direction="vertical">
            <Space direction="horizontal">
              <Button onClick={() => refetch()} icon={<ReloadOutlined />} />
              <Button icon={<CloudDownloadOutlined />}>Export</Button>
              <Button icon={<FilterOutlined />}>Filters</Button>
              <Input
                prefix={<SearchOutlined />}
                placeholder="Search"
                size="large"
              />
            </Space>
          </Space>
        </div>
        <div className="list-filters-panel">
          <Button className="primary">Create Reminder</Button>
        </div>
      </div>

      <AccountRemindersList
        data={data}
        loading={isFetching}
        onSelectRows={onSelectRows}
      />
    </AppLayout>
  )
}
