import React from 'react'
import { Form, Input, Button } from 'antd'

const initialValues = { type: '', title: '', amount: '', remarks: '', reminder_date: '' }

export const AccountingReminderForm: React.FC = (props): any => {
  return (
    <Form layout="vertical" initialValues={initialValues}>
      AccountingReminderForm
    </Form>
  )
}
