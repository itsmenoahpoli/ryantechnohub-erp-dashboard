import { $axios } from '@api/index'

export default class AccountingsService {
  constructor() { }

  async getRemindersList(params: any) {
    console.log(params)
    return params
  }
}