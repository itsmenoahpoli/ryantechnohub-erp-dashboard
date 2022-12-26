import React from 'react'
import { ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { APP_ROUTER } from '@router/index'
import { CUSTOM_THEME } from '@config/theme.config'

const QUERY_CLIENT = new QueryClient()

export const App: React.FC = () => {
  return (
    <ConfigProvider theme={CUSTOM_THEME}>
      <QueryClientProvider client={QUERY_CLIENT}>
        <RouterProvider router={APP_ROUTER} />

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ConfigProvider>
  )
}
