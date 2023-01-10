import React from 'react'
import { Form, Input, Button, Space } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const initialValues = {
  email: 'superadmin@ryantechnohub.com',
  password: '1234567890',
}

export const LoginForm: React.FC = (props: any) => {
  return (
    <Form
      layout="vertical"
      initialValues={initialValues}
      onFinish={props.onFormSubmit}
      requiredMark>
      <Form.Item label="Email or username" name="email" required>
        <Input prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item label="Password" name="password" required>
        <Input.Password prefix={<LockOutlined />} />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={props.loading}>
        LOG IN
      </Button>
    </Form>
  )
}
