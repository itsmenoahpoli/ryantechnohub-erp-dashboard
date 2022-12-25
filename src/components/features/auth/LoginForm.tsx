import React from 'react'
import { Form, Input, Button } from 'antd'

import { ILoginFormProps, ICredentials } from '@ts/types/features/auth.type'

const initialValues: ICredentials = { email: 'superadmin@ryantechnohub.com', password: '1234567890' }

export const LoginForm: React.FC<ILoginFormProps> = (props) => {
  return (
    <Form layout="vertical" initialValues={initialValues} onFinish={props.onFormSubmit} autoComplete="off" requiredMark>
      <Form.Item
        label="Email Address"
        name="email"
        className="mb-2"
        rules={[{ required: true, message: 'Email Address Required' }]}
        required>
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        className="mb-4"
        rules={[{ required: true, message: 'Password Required' }]}
        required>
        <Input.Password />
      </Form.Item>

      <div className="d-flex justify-space-between align-items-center">
        <a href="#">I forgot my password</a>

        <Button type="primary" htmlType="submit" loading={props.loading}>
          Log In
        </Button>
      </div>
    </Form>
  )
}
