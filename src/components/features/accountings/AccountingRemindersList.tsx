import React from 'react'
import { Table, Tag, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'

import { capitalize, formatDate } from '@utils/index'

interface IProps {
  loading: boolean
  data: Array<object>
}

const toggleTagColor = (type: string) => {
  switch (type) {
    case 'payables':
      return 'processing'

    case 'receivables':
      return 'warning'

    default:
      return 'success'
  }
}

export const AccountingRemindersList: React.FC<IProps> = React.memo((props) => {
  const columns: ColumnsType<any> = [
    {
      title: 'Type',
      key: 'type',
      dataIndex: 'type',
      render: (data: string) => <Tag color={toggleTagColor(data)}>{capitalize(data)}</Tag>,
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
      width: 120,
      render: (text: string) => `₱ ${Number(text).toFixed(2)}`,
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
      render: (text: string) => formatDate(text),
    },
    {
      title: 'Date Created',
      key: 'created_at',
      dataIndex: 'created_at',
      render: (text: string) => formatDate(text),
    },
    {
      title: 'Last Updated',
      key: 'updated_at',
      dataIndex: 'updated_at',
      render: (text: string) => formatDate(text),
    },
    {
      title: 'Actions',
      key: 'id',
      dataIndex: 'id',
      align: 'right',
      render: (text: string) => <Button type="default">...</Button>,
    },
  ]

  return (
    <Table
      tableLayout="auto"
      size="middle"
      rowKey="id"
      rowSelection={{}}
      dataSource={props.data}
      columns={columns}
      loading={props.loading}
    />
  )
})
