import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'
import { Result, Button, Space } from 'antd'

import { AppLayout } from '@components/layouts'

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate()
  const error: any = useRouteError()

  const errorTitle = () => {
    switch (error.status) {
      case 404:
        return 'Page does not exist'
      default:
        return 'Server error occured, please contact system administrator'
    }
  }

  return (
    <AppLayout type="error">
      <Result
        status="warning"
        title={errorTitle()}
        extra={
          <>
            <h2 className="text-center mb-5">Error {error.status}</h2>
            <Space direction="horizontal">
              <Button type="primary" key="console" onClick={() => navigate(-1)}>
                Go back to previous page
              </Button>
              <Button type="primary" key="console" onClick={() => navigate('/dashboard')}>
                Go back to dashboard
              </Button>
            </Space>
          </>
        }
      />
    </AppLayout>
  )
}
