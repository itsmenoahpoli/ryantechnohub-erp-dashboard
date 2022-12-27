import React from 'react'
import { Table, Button, Tag } from 'antd'

import type { IBaseTableProps } from '@interfaces/components/table.interface'
import type { IAccountReminder } from '@interfaces/models/account-reminder.interface'
import { formatDate, capitalize } from '@utils/index'

export const AccountRemindersList: React.FC<
  IBaseTableProps<IAccountReminder[]>
> = React.memo((props) => {
  const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([])

  const onSelectRow = (onSelectedRowKeys: React.Key[]) => {
    console.log(onSelectedRowKeys)
    setSelectedRowKeys(onSelectedRowKeys)
  }

  const toggleTagType = (type: string) => {
    switch (type) {
      case 'payables':
        return 'processing'
      case 'receivables':
        return 'green'
      default:
        return 'purple'
    }
  }

  const columns: any = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      render: (text: string) => `R-${text}`,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (text: string) => (
        <Tag color={toggleTagType(text)}>
          {capitalize(text.replace('-', ' '))}
        </Tag>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text: string) => `₱ ${Number(text).toFixed(2)}`,
    },
    {
      title: 'Reminder Type',
      dataIndex: 'id',
      key: 'id',
      render: (text: string) => 'Daily/Weekly/Yearly',
    },
    {
      title: 'Reminder Date',
      dataIndex: 'reminder_date',
      key: 'reminder_date',
      render: (text: string) => formatDate(text),
    },
    {
      title: 'Date Created',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (text: string) => formatDate(text),
    },
    {
      title: 'Last Updated',
      dataIndex: 'updated_at',
      key: 'updated_at',
      render: (text: string) => formatDate(text),
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'id',
      align: 'right',
      render: (item: string) => <Button>...</Button>,
    },
  ]

  return (
    <Table
      rowKey={(row) => Number(row.id)}
      rowSelection={{ selectedRowKeys, onChange: onSelectRow }}
      pagination={{
        pageSize: 25,
        showQuickJumper: true,
      }}
      columns={columns}
      dataSource={props.data}
      loading={props.loading}
    />
  )
})
