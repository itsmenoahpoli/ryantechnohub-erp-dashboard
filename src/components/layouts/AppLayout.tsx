import React from 'react'

import { IAppLayoutProps } from '@interfaces/components/layouts.interface'
import { DashboardLayout, AuthLayout } from '@components/layouts'

export const AppLayout: React.FC<IAppLayoutProps> = (props) => {
  if (props.type === 'dashboard') {
    return <DashboardLayout>{props.children}</DashboardLayout>
  }

  return <AuthLayout isAuthCapture={props.isAuthCapture}>{props.children}</AuthLayout>
}
