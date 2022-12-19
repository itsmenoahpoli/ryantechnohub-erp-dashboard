import React from 'react'

import { IAppLayoutProps } from '@ts/types/components/layouts.type'
import { DashboardLayout, AuthLayout } from '@components/layouts'

export const AppLayout: React.FC<IAppLayoutProps> = (props) => {
  if (props.type === 'dashboard') {
    return <DashboardLayout>{props.children}</DashboardLayout>
  }

  return <AuthLayout>{props.children}</AuthLayout>
}
