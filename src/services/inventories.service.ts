import { $axios } from '@api/index'
import API_URLS from '@constants/api.constant'
import { createQs } from '@utils/index'
import { IInventoriesService } from '@interfaces/services/inventories-service.interface'
import { IInventoryProductCategory, IInventoryProduct } from '@interfaces/models/inventory.interface'
import type { IHttpResponse } from '@interfaces/http-response.interface'

export default class InventoriesService implements IInventoriesService {
  constructor() { }

  async getInventoryProductCategories(params: object): Promise<any> {
    const response: IHttpResponse<IInventoryProductCategory> = await $axios.get(API_URLS.inventoryProductCategories, params)

    return response
  }

  async getInventoriesProducts(params: object): Promise<any> {
    //
  }
}