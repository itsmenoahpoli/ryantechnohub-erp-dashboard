import React from 'react'

import { ACCOUNTING_SERVICE } from '@services/index'
import { IAccountReminder } from '@interfaces/models/account-reminder.interface'
import { AccountReminderForm } from '@features/accountings'
import { AppLayout } from '@components/layouts'

interface IProps {
  type: 'create' | 'update'
}

export const AccountReminderFormPage: React.FC<IProps> = (props) => {
  const createAccountReminder = async (accountReminder: IAccountReminder) => {
    return await ACCOUNTING_SERVICE.createReminder(accountReminder)
  }

  return (
    <AppLayout type="dashboard">
      <div className="pa-4 w-50">
        <AccountReminderForm
          onSubmit={createAccountReminder}
          type={props.type}
        />
      </div>
    </AppLayout>
  )
}
