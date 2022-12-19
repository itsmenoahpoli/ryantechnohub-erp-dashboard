import React from 'react'
import { ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import { APP_ROUTER } from '@router/index'
import { CUSTOM_THEME } from '@config/theme.config'

export const App: React.FC = () => {
  return (
    <ConfigProvider theme={CUSTOM_THEME}>
      <RouterProvider router={APP_ROUTER} />
    </ConfigProvider>
  )
}
