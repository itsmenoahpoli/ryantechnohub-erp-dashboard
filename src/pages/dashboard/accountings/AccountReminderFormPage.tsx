import React from 'react'
import { useParams } from 'react-router-dom'

import { ACCOUNTING_SERVICE } from '@services/index'
import { IAccountReminder } from '@interfaces/models/account-reminder.interface'
import { AccountReminderForm } from '@features/accountings'
import { useAccountingsStore } from '@store/accountings'
import { AppLayout } from '@components/layouts'

interface IProps {
  type: 'create' | 'update'
}

const initialValues = {
  type: '',
  title: '',
  amount: '',
  reminder_date: '',
  remarks: '',
}

export const AccountReminderFormPage: React.FC<IProps> = (props) => {
  const { accountReminderId } = useParams()
  const [formLoading, setFormLoading] = React.useState<boolean>(false)

  const createAccountReminder = async (accountReminder: IAccountReminder) => {
    setFormLoading(true)
    return await ACCOUNTING_SERVICE.createReminder(accountReminder).finally(() =>
      setFormLoading(false),
    )
  }

  const setFormInitialValues = () => {}

  React.useEffect(() => {
    console.log(props.type)
  }, [])

  return (
    <AppLayout type="dashboard">
      <div className="pa-4 w-50">
        <AccountReminderForm
          onSubmit={createAccountReminder}
          type={props.type}
          initialValues={initialValues}
          formLoading={formLoading}
        />
      </div>
    </AppLayout>
  )
}
