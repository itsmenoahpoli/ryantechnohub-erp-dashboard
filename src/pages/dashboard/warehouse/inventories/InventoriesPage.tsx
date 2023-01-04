import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { Button, Space, Input } from 'antd'
import {
  ReloadOutlined,
  CloudDownloadOutlined,
  FilterOutlined,
  SearchOutlined,
} from '@ant-design/icons'

import { INVENTORY_SERVICE } from '@services/index'
import { InventoriesList } from '@features/warehouse'
import { AppLayout } from '@components/layouts'

export const InventoriesPage: React.FC = () => {
  const navigate = useNavigate()
  const [selectedRows, setSelectedRows] = React.useState<React.Key[]>([])

  const { isLoading, data, refetch } = useQuery({
    queryKey: ['inventory-products'],
    queryFn: async () => await INVENTORY_SERVICE.getInventoriesProducts({}),
    select: ({ data }) => data,
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
          <Button onClick={() => navigate('/dashboard/warehouse/inventories/upload')}>
            Manage Categories
          </Button>

          <Button
            className="primary"
            onClick={() => navigate('/dashboard/warehouse/inventories/upload')}>
            Upload Inventory
          </Button>
        </div>
      </div>

      <InventoriesList data={data} loading={isLoading} onSelectRows={onSelectRows} />
    </AppLayout>
  )
}
