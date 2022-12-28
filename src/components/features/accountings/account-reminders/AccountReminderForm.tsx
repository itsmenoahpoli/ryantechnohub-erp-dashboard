import React from 'react'
import { Form, Input, Modal } from 'antd'

import type { IAccountReminder } from '@interfaces/models/account-reminder.interface'

interface IAccountReminderFormProps {
  onSubmit: (accountReminder: IAccountReminder) => void
  onCancel: () => void
  isOpen: boolean
  type: 'add' | 'edit'
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
    <Modal
      open={props.isOpen}
      onCancel={props.onCancel}
      okText={props.type === 'add' ? 'Create Record' : 'Update Record'}
      closable={false}>
      <div className="modal-body-header">
        <h3 className="modal-body-header-title fw-bold mb-0">
          Account Reminder
        </h3>
        <p className="modal-body-header-subtitle">
          Create account reminder record
        </p>
      </div>

      <div className="modal-body-content">
        <Form layout="vertical"></Form>
      </div>
    </Modal>
  )
}
