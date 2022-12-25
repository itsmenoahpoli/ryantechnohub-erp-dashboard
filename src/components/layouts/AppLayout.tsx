import React from 'react'

import type { TAppLayoutProps } from '@ts/types/components/layouts.type'
import { DashboardLayout, AuthLayout } from '@components/layouts'

export const AppLayout: React.FC<TAppLayoutProps> = (props) => {
  if (props.type === 'dashboard') {
    return <DashboardLayout>{props.children}</DashboardLayout>
  }

  return <AuthLayout isAuthCapture={props.isAuthCapture}>{props.children}</AuthLayout>
}
