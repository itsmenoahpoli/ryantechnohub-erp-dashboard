import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Card } from 'antd'

import { DEFAULT_META } from '@config/meta.config'
import { storage } from '@utils/index'
import { Header, Sidebar } from '@components/layouts/navigations'

const { Sider, Content } = Layout

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  const navigate = useNavigate()

  React.useEffect(() => {
    document.title = DEFAULT_META.dashboard.title

    if (storage.get('accessToken') === null && storage.get('user') === null) {
      navigate('/system/login')
    }
  }, [])

  return (
    <Layout className="wrapper-dashboard" hasSider>
      <Sider className="wrapper-dashboard-sidebar" breakpoint="md" width={270}>
        <Sidebar navigate={navigate} />
      </Sider>

      <Layout className="wrapper-dashboard-main">
        <Content>
          <div className="top-container">
            <Header />
            <h1 className="page-name">[[Page_name]]</h1>
          </div>
          <Card className="page-content-container">{props.children}</Card>
        </Content>
      </Layout>
    </Layout>
  )
}
