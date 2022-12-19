import React from 'react'
import { Form, Input, Button, Divider } from 'antd'

import { AUTH_SERVICE } from '@services/index'
import { AppLayout } from '@components/layouts'
import { LoginForm } from '@components/forms'

export const LoginPage: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false)

  const onFormSubmit = async (credentials: any) => {
    setLoading(true)

    await AUTH_SERVICE.login(credentials).finally(() => setLoading(false))
  }

  return (
    <AppLayout type="auth">
      <h3 className="fw-bold text-center title mb-3">Dashboard Log in</h3>

      <LoginForm loading={loading} onFormSubmit={onFormSubmit} />

      <Divider type="horizontal">
        <small>OR</small>
      </Divider>

      <Button type="ghost" className="btn-extra mb-4" block>
        Sign-in using OTP
      </Button>

      <div className="text-center">
        <a href="#">Having trouble signing in?</a>
      </div>
    </AppLayout>
  )
}
