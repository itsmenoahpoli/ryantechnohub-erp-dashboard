import React from 'react'

import { ACCOUNTING_SERVICE } from '@services/index'
import { IAccountReminder } from '@interfaces/models/account-reminder.interface'

export const useAccountings = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const fetchAccountReminders = async (params: any) => {
    setIsLoading(true)

    const data = await ACCOUNTING_SERVICE.getRemindersList(params).finally(() =>
      setIsLoading(false),
    )

    return data
  }

  const createAccountReminder = async (accountReminder: IAccountReminder) => {
    setIsLoading(true)

    const data = await ACCOUNTING_SERVICE.createReminder(accountReminder)

    return data
  }

  const getAccountReminder = async (reminderId: number) => {
    setIsLoading(true)

    const data = await ACCOUNTING_SERVICE.getReminder(reminderId)

    return data
  }

  const deleteAccountReminder = async (reminderId: number) => {
    setIsLoading(true)

    const data = await ACCOUNTING_SERVICE.deleteReminder(reminderId)

    return data
  }

  return {
    isLoading,
    fetchAccountReminders,
    createAccountReminder,
    getAccountReminder,
    deleteAccountReminder,
  } as const
}
