import React from 'react'
import { Table } from 'antd'

interface IProps {
  loading: boolean
  data: Array<object>
}

export const AccountingRemindersList: React.FC<IProps> = React.memo((props) => {
  const columns = [
    {
      title: 'Type',
      key: 'type',
      dataIndex: 'type',
    },
    {
      title: 'Title',
      key: 'title',
      dataIndex: 'title',
    },
    {
      title: 'Amount',
      key: 'amount',
      dataIndex: 'amount',
    },
    {
      title: 'Remarks',
      key: 'remarks',
      dataIndex: 'remarks',
    },
    {
      title: 'Reminder Date',
      key: 'reminder_date',
      dataIndex: 'reminder_date',
    },
    {
      title: 'Date Created',
      key: 'created_at',
      dataIndex: 'created_at',
    },
    {
      title: 'Last Updated',
      key: 'updated_at',
      dataIndex: 'updated_at',
    },
  ]

  return <Table rowSelection={{}} dataSource={[]} columns={columns} />
})
