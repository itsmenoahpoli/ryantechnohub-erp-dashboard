import React from 'react'
import { Table, Button, Tag, Space } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

import type { IBaseTableProps } from '@interfaces/components/table.interface'
import type { IAccountReminder } from '@interfaces/models/account-reminder.interface'
import { formatDate, capitalize } from '@utils/index'

const PAGINATION_OPTS = {
  pageSize: 25,
  showQuickJumper: true,
}

const SelectedRowsAction: React.FC<any> = (props: any) => {
  return (
    <div className="list-filters-rows-action px-4 mb-4">
      <p>
        <b>{props.selectedRows.length}</b> rows selected, select action &mdash;
      </p>

      <Space direction="horizontal">
        <Button icon={<DeleteOutlined />} danger>
          Delete
        </Button>
        <Button onClick={props.clearSelectedRowKeys}>Clear</Button>
      </Space>
    </div>
  )
}

export const AccountRemindersList: React.FC<IBaseTableProps<IAccountReminder[]>> = React.memo(
  (props) => {
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([])

    const onSelectRow = (onSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(onSelectedRowKeys)
      props.onSelectRows?.(onSelectedRowKeys)
    }

    const clearSelectedRowKeys = () => {
      setSelectedRowKeys([])
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
        render: (text: string) => `RMNDR-${text}`,
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        render: (text: string) => (
          <Tag color={toggleTagType(text)}>{capitalize(text.replace('-', ' '))}</Tag>
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
        dataIndex: 'reminder_type',
        key: 'reminder_type',
        render: (text: string) => text || 'N/A',
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
        render: (text: string) => (
          <Space direction="horizontal">
            <Button
              icon={<EditOutlined />}
              onClick={() => props.onUpdateRow?.(Number(text))}></Button>
            <Button
              icon={<DeleteOutlined />}
              onClick={() => props.onDeleteRow?.(Number(text))}
              danger></Button>
          </Space>
        ),
      },
    ]

    return (
      <React.Fragment>
        {selectedRowKeys.length > 0 ? (
          <SelectedRowsAction
            selectedRows={selectedRowKeys}
            clearSelectedRowKeys={clearSelectedRowKeys}
          />
        ) : null}
        <Table
          rowKey={(row) => Number(row.id)}
          rowSelection={{ selectedRowKeys, onChange: onSelectRow }}
          pagination={PAGINATION_OPTS}
          columns={columns}
          dataSource={props.data}
          loading={props.loading}
        />
      </React.Fragment>
    )
  },
)
