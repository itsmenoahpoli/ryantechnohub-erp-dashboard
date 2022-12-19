import React from 'react'
import { Layout, Card } from 'antd'
import { CopyrightOutlined } from '@ant-design/icons'

import BRAND_LOGO from '@assets/brand/brand-logo.png'
import IMG_LEFT from '@assets/svg/auth-left-svg.svg'
import IMG_RIGHT from '@assets/svg/auth-right-svg.svg'
import { getCurrentYear } from '@utils/datetime.utils'

const { Header, Content } = Layout

export const AuthLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Layout className="wrapper-auth h-100vh">
      <img src={IMG_LEFT} className="auth-svg left" />
      <img src={IMG_RIGHT} className="auth-svg right" />
      <Header>
        <img src={BRAND_LOGO} alt="brand-logo.png" />
        <p className="fw-bold">Ryan's Technohub ERP Dashboard</p>
      </Header>
      <Content className="h-100">
        <Card>{props.children}</Card>
        <p className="text-center footer-label mt-3">
          <CopyrightOutlined /> Netclick Technologies | Ryan's Technohub | NoahDev {getCurrentYear()}
        </p>
      </Content>
    </Layout>
  )
}
