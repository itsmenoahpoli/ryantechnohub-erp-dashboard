import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Card } from 'antd'

import type { TDashboardLayoutProps } from '@ts/types/components/layouts.type'
import { DEFAULT_META } from '@config/meta.config'
import { Header, Sidebar } from '@components/layouts/navigations'

const { Sider, Content } = Layout

export const DashboardLayout: React.FC<TDashboardLayoutProps> = (props) => {
  const navigate = useNavigate()

  React.useEffect(() => {
    document.title = DEFAULT_META.dashboard.title
  }, [])

  return (
    <React.Fragment>
      <Layout className="wrapper-dashboard" hasSider>
        <Sider className="wrapper-dashboard-sidebar" breakpoint="md" width={270}>
          <Sidebar />
        </Sider>

        <Layout className="wrapper-dashboard-main animate__animated animate__faster animate__fadeIn">
          <Content>
            <div className="top-container">
              <Header />
            </div>
            <Card className="page-content-container">{props.children}</Card>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  )
}
