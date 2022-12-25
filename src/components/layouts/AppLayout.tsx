import React from 'react'

import { DashboardLayout, AuthLayout } from '@components/layouts'

interface IAppLayoutProps {
  type: 'auth' | 'dashboard' | 'error'
  children: React.ReactNode
  isAuthCapture?: boolean
}

export const AppLayout: React.FC<IAppLayoutProps> = (props) => {
  if (props.type === 'dashboard') {
    return <DashboardLayout>{props.children}</DashboardLayout>
  }

  return <AuthLayout isAuthCapture={props.isAuthCapture}>{props.children}</AuthLayout>
}
