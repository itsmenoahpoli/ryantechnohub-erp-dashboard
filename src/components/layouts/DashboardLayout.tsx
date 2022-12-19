import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout } from 'antd'

import { DEFAULT_META } from '@config/meta.config'

const { Sider, Content } = Layout

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  const navigate = useNavigate()

  React.useEffect(() => {
    document.title = DEFAULT_META.dashboard.title

    // if (localStorage.getItem('user') === null) {
    //   navigate('/system/login')
    // }
  }, [])

  return (
    <Layout className="wrapper-dashboard">
      <Sider
        className="wrapper-dashboard-sidebar"
        breakpoint="md"
        width={240}
        trigger={null}
        collapsedWidth={60}
        collapsible></Sider>

      <Layout className="wrapper-dashboard-main">
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  )
}
