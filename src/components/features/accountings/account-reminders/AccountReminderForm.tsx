import React from 'react'
import { Form, Input, Radio } from 'antd'

import type { IAccountReminder } from '@interfaces/models/account-reminder.interface'

interface IAccountReminderFormProps {
  createAccountReminder: (accountReminder: IAccountReminder) => void
}

const typeOptions = [
  {
    label: 'Monthly Expenses',
    value: 'monthly-expenses',
  },
  {
    label: 'Receivables',
    value: 'receivables',
  },
  {
    label: 'Payables',
    value: 'payables',
  },
]

export const AccountReminderForm: React.FC<IAccountReminderFormProps> = (
  props,
) => {
  return (
    <Form layout="vertical" className="mt-3">
      <Form.Item label="Title">
        <Input />
      </Form.Item>
    </Form>
  )
}
