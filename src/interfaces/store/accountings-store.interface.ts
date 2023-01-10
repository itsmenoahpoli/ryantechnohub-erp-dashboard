import { IAccountReminder } from '@interfaces/models/account-reminder.interface'

export interface IAccountingsStore {
  accountReminders: IAccountReminder[]
  setAccountReminders: (accountReminders: IAccountReminder[]) => void
}
