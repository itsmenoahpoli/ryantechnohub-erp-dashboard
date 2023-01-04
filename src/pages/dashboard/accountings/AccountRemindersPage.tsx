import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Button, Space, Input } from 'antd'
import {
  ReloadOutlined,
  CloudDownloadOutlined,
  FilterOutlined,
  SearchOutlined,
} from '@ant-design/icons'

import { AccountRemindersList } from '@features/accountings'
import { AppLayout } from '@components/layouts'
import { ACCOUNTING_SERVICE } from '@services/index'

export const AccountRemindersPage: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [selectedRows, setSelectedRows] = React.useState<React.Key[]>([])

  const { isLoading, data, refetch } = useQuery({
    queryKey: ['account-reminders'],
    queryFn: async () => await ACCOUNTING_SERVICE.getRemindersList({ type: 'all' }),
    select: ({ data }) => data.data.filter((d: any) => d.type === searchParams.get('type')),
  })

  const onSelectRows = (rowIds: React.Key[]) => {
    setSelectedRows([...new Set(rowIds)])
  }

  return (
    <AppLayout type="dashboard">
      <div className="list-filters">
        <div className="list-filters-panel">
          <Space direction="vertical">
            <Space direction="horizontal">
              <Button onClick={() => null} icon={<ReloadOutlined />} />
              <Button icon={<CloudDownloadOutlined />}>Export</Button>
              <Button icon={<FilterOutlined />}>Filters</Button>
              <Input prefix={<SearchOutlined />} placeholder="Search" />
            </Space>
          </Space>
        </div>
        <div className="list-filters-panel">
          <Button
            className="primary"
            onClick={() =>
              navigate('/dashboard/accountings/account-reminders/create-account-reminder')
            }>
            Create Reminder
          </Button>
        </div>
      </div>

      <AccountRemindersList data={data} loading={isLoading} onSelectRows={onSelectRows} />
    </AppLayout>
  )
}
