export interface IInventoryProductCategory {
  id?: number
  name: string
  description: string
  created_at?: Date
  updated_at?: Date
}

export interface IInventoryProduct {
  id?: number
  sku: string
  barcode_no: number
  serial_no: number
  name: string
  name_slug: string
  model: string
  description: string
  price: number
  sale_price: number
  stocks: number
  is_stocks_tracked: boolean
  is_featured: boolean
  is_posted: boolean
  created_at?: Date
  updated_at?: Date
}
