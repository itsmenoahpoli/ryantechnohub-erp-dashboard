import React from 'react'

import { IAppLayoutProps } from '@interfaces/components/layouts.interface'
import { DashboardLayout, AuthLayout, ErrorLayout } from '@components/layouts'

export const AppLayout: React.FC<IAppLayoutProps> = (props) => {
  if (props.type === 'dashboard') {
    return (
      <DashboardLayout width={props.width}>{props.children}</DashboardLayout>
    )
  }

  if (props.type === 'error') {
    return <ErrorLayout>{props.children}</ErrorLayout>
  }

  return (
    <AuthLayout isAuthCapture={props.isAuthCapture}>
      {props.children}
    </AuthLayout>
  )
}
