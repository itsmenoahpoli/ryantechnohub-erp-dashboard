import React from 'react'
import { Input, Button, Table } from 'antd'
import { BsSearch } from 'react-icons/bs'

const columns: any = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text: string) => text,
  },
  {
    title: 'Remarks',
    dataIndex: 'remarks',
    key: 'remarks',
    render: (text: string) => text,
  },
  {
    title: 'Reminder Date',
    dataIndex: 'reminder_date',
    key: 'reminder_date',
    render: (text: string) => text,
  },
  {
    title: 'Date Created',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (text: string) => text,
  },
  {
    title: 'Last Modified Date',
    dataIndex: 'updated_at',
    key: 'updated_at',
    render: (text: string) => text,
  },
]

export const PayableRemindersPage: React.FC = () => {
  return (
    <div>
      <div className="dt-container">
        <div className="dt-container-actions">
          <div className="dt-container-actions left">
            <Input placeholder="Search" prefix={<BsSearch />} allowClear />
          </div>
          <div className="dt-container-actions right">
            <Button type="ghost">Create Reminder</Button>
          </div>
        </div>

        <Table rowSelection={{}} columns={columns} />
      </div>
    </div>
  )
}
