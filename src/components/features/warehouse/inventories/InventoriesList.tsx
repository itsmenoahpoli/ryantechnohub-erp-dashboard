import React from 'react'
import { Table, Button, Tag, Space } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import { IBaseTableProps } from '@interfaces/components/table.interface'
import { IInventoryProduct } from '@interfaces/models/inventory.interface'
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

export const InventoriesList: React.FC<IBaseTableProps<IInventoryProduct[]>> = (props) => {
  const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([])

  const onSelectRow = (onSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(onSelectedRowKeys)
    props.onSelectRows?.(onSelectedRowKeys)
  }

  const clearSelectedRowKeys = () => {
    setSelectedRowKeys([])
  }

  const columns: any = [
    {
      title: 'SKU',
      dataIndex: 'sku',
      key: 'sku',
      render: (text: string) => text,
    },
    {
      title: 'Serial #',
      dataIndex: 'serial_no',
      key: 'serial_no',
      render: (text: string) => text,
    },
    {
      title: 'Barcode #',
      dataIndex: 'barcode_no',
      key: 'barcode_no',
      render: (text: string) => text,
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
      render: (text: string) => text,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => text,
    },
    {
      title: 'Tracked Stocks',
      dataIndex: 'is_tracked_stocks',
      key: 'is_tracked_stocks',
      render: (text: string) => (Boolean(text) ? 'Tracked' : 'Untracked'),
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
}
