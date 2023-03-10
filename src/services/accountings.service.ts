import { notification } from 'antd'
import { $axios } from '@api/index'
import API_URLS from '@constants/api.constant'
import { createQs } from '@utils/index'
import type { IAccountingsService } from '@interfaces/services/accountings-service.interface'
import type { IAccountReminder } from '@interfaces/models/account-reminder.interface'
import type { IHttpResponse } from '@interfaces/http-response.interface'
import * as ACCOUNTING_STORE from '@store/accountings'

export default class AccountingsService implements IAccountingsService {
  constructor() {}

  async getRemindersList(params: any): Promise<any> {
    const response: IHttpResponse<IAccountReminder[]> = await $axios.get(
      API_URLS.accountReminders + createQs(params),
    )

    ACCOUNTING_STORE.setState({ accountReminders: response.data.data })

    return response
  }

  async createReminder(reminder: IAccountReminder): Promise<any> {
    const response: IHttpResponse<IAccountReminder> = await $axios.post(
      API_URLS.accountReminders,
      reminder,
    )

    if (response.status === 201) {
      notification.success({
        duration: 5,
        message: 'Created',
        description: 'Account reminder created successfully',
      })
    }

    return response
  }

  async getReminder(reminderId: number): Promise<any> {
    const response: IHttpResponse<IAccountReminder> = await $axios.get(
      API_URLS.accountReminders + '/' + reminderId,
    )

    return response
  }

  async updateReminder(reminderId: number, reminder: IAccountReminder): Promise<any> {
    const response: IHttpResponse<IAccountReminder> = await $axios.patch(
      API_URLS.accountReminders + '/' + reminderId,
      reminder,
    )

    if (response.status === 200) {
      notification.success({
        duration: 5,
        message: 'Updated',
        description: 'Account reminder updated successfully',
      })
    }

    return response
  }

  async deleteReminder(reminderId: number): Promise<any> {
    const response: IHttpResponse<unknown> = await $axios.delete(
      API_URLS.accountReminders + '/' + reminderId,
    )

    if (response.status === 204) {
      notification.success({
        duration: 5,
        message: 'Deleted',
        description: `Account reminder (RMND-${reminderId}) deleted/removed successfully`,
      })
    }

    return response
  }

  async batchActionOnReminders(reminderIds: number[], actionType: string): Promise<unknown> {
    const response: IHttpResponse<IAccountReminder[]> = await $axios.post(
      API_URLS.accountReminders + '/batch-action',
      {
        reminderIds,
        actionType,
      },
    )

    return response
  }
}
