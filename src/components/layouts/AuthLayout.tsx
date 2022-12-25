import React from 'react'
import { Navigate } from 'react-router-dom'
import { Layout, Card } from 'antd'
import { CopyrightOutlined } from '@ant-design/icons'

import BRAND_LOGO from '@assets/brand/brand-logo.png'
import IMG_LEFT from '@assets/svg/auth-left-svg.svg'
import IMG_RIGHT from '@assets/svg/auth-right-svg.svg'

import type { TAuthLayoutProps } from '@ts/types/components/layouts.type'
import { storage, getCurrentYear } from '@utils/index'

const { Header, Content } = Layout

export const AuthLayout: React.FC<TAuthLayoutProps> = (props) => {
  if (storage.get('accessToken') && storage.get('user')) {
    return <Navigate to="/dashboard" />
  }

  return (
    <Layout className="wrapper-auth h-100vh">
      <img src={IMG_LEFT} className="auth-svg left" />
      <img src={IMG_RIGHT} className="auth-svg right" />
      <Header>
        <img src={BRAND_LOGO} alt="brand-logo.png" />
        <p className="fw-bold">Ryan's Technohub ERP Dashboard</p>
      </Header>
      <Content className="h-100">
        {props.isAuthCapture ? (
          <Card style={{ width: '700px', marginTop: '10px' }}>{props.children}</Card>
        ) : (
          <Card>{props.children}</Card>
        )}
        <p className="text-center footer-label mt-3">
          <CopyrightOutlined /> Netclick Technologies | Ryan's Technohub | NoahDev {getCurrentYear()}
        </p>
      </Content>
    </Layout>
  )
}
