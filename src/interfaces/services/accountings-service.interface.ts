import type { IAccountReminder } from '@interfaces/models/account-reminder.interface'
import type { IHttpResponse } from '@interfaces/http-response.interface'

export interface IAccountingsService {
  getRemindersList: (params: object) => Promise<IHttpResponse<IAccountReminder[]>>
  createReminder: (reminder: IAccountReminder) => Promise<IAccountReminder>
  updateReminder: (reminderId: number, reminder: IAccountReminder) => Promise<IAccountReminder>
  deleteReminder: (reminderId: number) => Promise<unknown>
  batchActionOnReminders: (reminderIds: number[], actionType: string) => Promise<unknown>
}
