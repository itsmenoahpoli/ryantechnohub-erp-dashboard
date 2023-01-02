import React from 'react'

import { INVENTORY_SERVICE } from '@services/index'
import { IInventoryProductCategory } from '@interfaces/models/inventory.interface'
import { AppLayout } from '@components/layouts'

export const InventoryCategoriesList: React.FC = () => {
  const fetchInventoryCategories = async (params: any) => {
    //
  }
  return <AppLayout type="dashboard">InventoryCategoriesList</AppLayout>
}
