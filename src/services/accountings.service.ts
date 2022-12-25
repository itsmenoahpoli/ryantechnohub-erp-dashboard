import { $axios } from '@api/index'
import API_URLS from '@constants/api.constant'
import { createQs } from '@utils/index'
import type { IAccountingsService } from '@interfaces/services/accountings-service.interface'
import type { IAccountReminder } from '@interfaces/models/account-reminder.interface'
import type { IHttpResponse } from '@interfaces/http-response.interface'

export default class AccountingsService implements IAccountingsService {
  constructor() { }

  async getRemindersList(params: any): Promise<any> {
    const response: IHttpResponse<IAccountReminder[]> = await $axios.get(API_URLS.accountReminders + createQs(params))

    return response;
  }

  async createReminder(reminder: IAccountReminder): Promise<any> {
    const response: IHttpResponse<IAccountReminder> = await $axios.post(API_URLS.accountReminders, reminder)

    return response;
  }

  async updateReminder(reminderId: number, reminder: IAccountReminder): Promise<any> {
    const response: IHttpResponse<IAccountReminder> = await $axios.patch(API_URLS.accountReminders + '/' + reminderId, reminder)

    return response
  }

  async deleteReminder(reminderId: number): Promise<any> {
    const response: any = await $axios.delete(API_URLS.accountReminders + '/' + reminderId)

    return response
  }
}