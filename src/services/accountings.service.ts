import { $axios } from '@api/index'

export default class AccountingsService {
  constructor() { }

  async getRemindersList(params: any): Promise<any> {
    const response: any = await $axios.get('/core/accountings/account-reminders?type=' + params.type)

    return response.data;
  }
}