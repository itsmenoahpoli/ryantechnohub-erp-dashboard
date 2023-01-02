import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Space, Input } from 'antd'
import {
  ReloadOutlined,
  CloudDownloadOutlined,
  FilterOutlined,
  SearchOutlined,
} from '@ant-design/icons'

import { AppLayout } from '@components/layouts'

export const InventoriesPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <AppLayout type="dashboard">
      <div className="list-filters">
        <div className="list-filters-panel">
          <Space direction="vertical">
            <Space direction="horizontal">
              <Button icon={<ReloadOutlined />} />
              <Button icon={<CloudDownloadOutlined />}>Export</Button>
              <Button icon={<FilterOutlined />}>Filters</Button>
              <Input
                prefix={<SearchOutlined />}
                placeholder="Search"
                size="large"
              />
            </Space>
          </Space>
        </div>
        <div className="list-filters-panel">
          <Button
            className="primary"
            onClick={() => navigate('/dashboard/warehouse/inventories/upload')}>
            Uplaod Inventory
          </Button>
        </div>
      </div>
    </AppLayout>
  )
}
