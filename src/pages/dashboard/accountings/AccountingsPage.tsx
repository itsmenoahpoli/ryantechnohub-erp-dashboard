import React from 'react'
import { Outlet } from 'react-router-dom'

import { AppLayout } from '@components/layouts'

export const AccountingsPage: React.FC = () => {
  return (
    <AppLayout type="dashboard">
      <Outlet />
    </AppLayout>
  )
}
