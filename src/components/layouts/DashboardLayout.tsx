import React from 'react'
import { Layout, Card } from 'antd'

import type { IDashboardLayoutProps } from '@interfaces/components/layouts.interface'
import { DEFAULT_META } from '@config/meta.config'
import { getRouteLabel, storage } from '@utils/index'
import { Header, Sidebar } from '@components/layouts/navigations'

const { Sider, Content } = Layout

export const DashboardLayout: React.FC<IDashboardLayoutProps> = (props) => {
  React.useEffect(() => {
    document.title = DEFAULT_META.dashboard.title
  }, [])

  return (
    <React.Fragment>
      <Layout className="wrapper-dashboard" hasSider>
        <Sider className="wrapper-dashboard-sidebar" breakpoint="md" width={270}>
          <Sidebar user={storage.get('user')} />
        </Sider>

        <Layout className="wrapper-dashboard-main animate__animated animate__faster animate__fadeIn">
          <Content>
            <div className="top-container">
              <Header />
              <h1 className="page-name fw-bold">{getRouteLabel()}</h1>
            </div>
            <Card className="page-content-container" style={{ width: props.width ?? '98%' }}>
              {props.children}
            </Card>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  )
}
