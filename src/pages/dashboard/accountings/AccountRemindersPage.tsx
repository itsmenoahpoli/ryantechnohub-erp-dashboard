import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Button, Space, Input, Modal } from 'antd'
import {
  ReloadOutlined,
  CloudDownloadOutlined,
  FilterOutlined,
  SearchOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons'
import { CSVLink } from 'react-csv'

import { AccountRemindersList } from '@features/accountings'
import { AppLayout } from '@components/layouts'
import { ACCOUNTING_SERVICE } from '@services/index'
import { generateCSVFilename } from '@utils/index'

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

  const onUpdateRecord = (reminderId: React.Key) => {
    navigate(`/dashboard/accountings/account-reminders/${reminderId}/update`)
  }

  const confirmDeleteRecord = (reminderId: React.Key) => {
    Modal.confirm({
      wrapClassName: 'confirm-dialog',
      title: 'Confirm',
      content: 'Do you confirm to delete this record?',
      okType: 'danger',
      okText: 'Delete',
      onOk: async () => {
        await ACCOUNTING_SERVICE.deleteReminder(reminderId as number).then(() => refetch())
      },
      icon: <ExclamationCircleFilled />,
    })
  }

  return (
    <AppLayout type="dashboard">
      <div className="list-filters">
        <div className="list-filters-panel">
          <Space direction="vertical">
            <Space direction="horizontal">
              <Button onClick={() => refetch()} icon={<ReloadOutlined />} />
              {!isLoading ? (
                <CSVLink
                  data={data}
                  filename={generateCSVFilename('account-reminders')}
                  target="_blank">
                  <Button icon={<CloudDownloadOutlined />}>Export</Button>
                </CSVLink>
              ) : null}
              <Button icon={<FilterOutlined />}>Filters</Button>
              <Input prefix={<SearchOutlined />} placeholder="Search" />
            </Space>
          </Space>
        </div>
        <div className="list-filters-panel">
          <Button
            className="primary"
            onClick={() => navigate('/dashboard/accountings/account-reminders/create')}>
            Create Reminder
          </Button>
        </div>
      </div>

      <AccountRemindersList
        data={data}
        loading={isLoading}
        onSelectRows={onSelectRows}
        onUpdateRow={onUpdateRecord}
        onDeleteRow={confirmDeleteRecord}
      />
    </AppLayout>
  )
}
