import React from 'react'
import { Form, Input, Select, Checkbox, DatePicker, Button, Space } from 'antd'

import type { IAccountReminder } from '@interfaces/models/account-reminder.interface'

interface IAccountReminderFormProps {
  onSubmit: (accountReminder: IAccountReminder) => void
  type: 'create' | 'update'
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

const initialValues = {
  type: '',
  title: '',
  amount: '',
  reminder_date: '',
  remarks: '',
}

export const AccountReminderForm: React.FC<IAccountReminderFormProps> = (
  props,
) => {
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
        required>
        <Select options={typeOptions} />
      </Form.Item>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Title is required' }]}
        required>
        <Input />
      </Form.Item>
      <Form.Item
        label="Amount"
        name="amount"
        rules={[{ required: true, message: 'Amount is required' }]}
        required>
        <Input />
      </Form.Item>
      <Form.Item
        label="Reminder Date/Due"
        name="reminder_date"
        rules={[{ required: true, message: 'Reminder Date is required' }]}
        required>
        <DatePicker inputReadOnly />
      </Form.Item>
      <Form.Item label="Reminder By" name="reminder_by">
        <Space direction="horizontal">
          <Checkbox>Daily</Checkbox>
          <Checkbox>Weekly</Checkbox>
          <Checkbox>Monthly</Checkbox>
          <Checkbox>Yearly</Checkbox>
        </Space>
      </Form.Item>
      <Form.Item label="Remarks (Optional)" name="remarks">
        <Input.TextArea rows={4} />
      </Form.Item>

      <div className="d-flex justify-center mt-3">
        <Space direction="horizontal">
          <Button htmlType="submit" type="default">
            Create Reminder
          </Button>
          <Button htmlType="reset" danger>
            Clear Form
          </Button>
        </Space>
      </div>
    </Form>
  )
}
