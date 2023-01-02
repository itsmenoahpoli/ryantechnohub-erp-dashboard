import type { IHttpResponse } from "@interfaces/http-response.interface"

export interface IInventoriesService {
  /**
   * Inventory Products
   */
  getInventoriesProducts: (params: object) => Promise<IHttpResponse<any>>

  /**
   * Inventory Product Categories
   */
  getInventoryProductCategories: (params: object) => Promise<IHttpResponse<any>>
}