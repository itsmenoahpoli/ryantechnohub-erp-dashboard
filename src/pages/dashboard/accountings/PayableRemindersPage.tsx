import React from 'react'
import { Input, Button, Table } from 'antd'
import { BsSearch } from 'react-icons/bs'

const columns: Array<object> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 100,
    render: (text: string) => text,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text: string) => text,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (text: string) => text,
  },
  {
    title: 'Remarks',
    dataIndex: 'remarks',
    key: 'remarks',
    width: 480,
    ellipsis: true,
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
    title: 'Last Updated',
    dataIndex: 'updated_at',
    key: 'updated_at',
    render: (text: string) => text,
  },
]

const tableData: Array<object> = [
  // {
  //   id: 1,
  //   remarks: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus maiores minus, inventore aliquam porro dolore, perferendis tempora repudiandae omnis voluptate non mollitia consequatur magni iusto hic aut provident necessitatibus optio id.',
  //   reminder_date: '2023-02-24 12:00PM',
  //   created_at: '2022-12-21 6:30PM',
  //   updated_at: '2022-12-21 6:30PM',
  // }
]

export const PayableRemindersPage: React.FC = () => {
  const onTableChange = (pagination : any, filters : any, sorter : any, extra: any) => {
    console.log({
      pagination, filters, sorter, extra
    })
  }

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

        <Table rowSelection={{}} dataSource={tableData} columns={columns} onChange={onTableChange} />
      </div>
    </div>
  )
}
