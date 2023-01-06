import React from 'react'
import { Form, Input, Select, Checkbox, DatePicker, Button, Space } from 'antd'

import type { IAccountReminder } from '@interfaces/models/account-reminder.interface'
import { capitalize } from '@utils/index'

interface IAccountReminderFormProps {
  onSubmit: (accountReminder: IAccountReminder) => void
  type: 'create' | 'update'
  formData?: IAccountReminder | unknown
  formLoading?: boolean
}

export const AccountReminderForm: React.FC<IAccountReminderFormProps> = (props) => {
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

  const reminderByOptions = ['Daily', 'Weekly', 'Monthly', 'Yearly']

  const initialValues = {
    type: '',
    title: '',
    amount: '',
    reminder_date: '',
    remarks: '',
  }

  return (
    <Form
      layout="horizontal"
      initialValues={initialValues}
      onFinish={props.onSubmit}
      colon={false}
      labelCol={{ span: 4 }}
      labelAlign="left"
      labelWrap
      requiredMark
      className="pa-5">
      <Form.Item
        label="Type"
        name="type"
        rules={[{ required: true, message: 'Type is required' }]}
        hasFeedback
        required>
        <Select options={typeOptions} />
      </Form.Item>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Title is required' }]}
        hasFeedback
        required>
        <Input />
      </Form.Item>
      <Form.Item
        label="Amount"
        name="amount"
        rules={[{ required: true, message: 'Amount is required' }]}
        hasFeedback
        required>
        <Input />
      </Form.Item>
      <Form.Item
        label="Reminder Date/Due"
        name="reminder_date"
        rules={[{ required: true, message: 'Reminder Date is required' }]}
        hasFeedback
        required>
        <DatePicker inputReadOnly />
      </Form.Item>
      <Form.Item label="Reminder Type" name="reminder_type">
        <Checkbox.Group options={reminderByOptions} />
      </Form.Item>
      <Form.Item label="Remarks (Optional)" name="remarks">
        <Input.TextArea rows={4} />
      </Form.Item>

      <div className="d-flex justify-center mt-3">
        <Space direction="horizontal">
          <Button htmlType="submit" type="default" loading={props.formLoading}>
            {capitalize(props.type)} Reminder
          </Button>
          <Button htmlType="reset" danger>
            Clear Form
          </Button>
        </Space>
      </div>
    </Form>
  )
}
