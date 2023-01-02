/**
 * Warehouse Pages Router
 */
import {
  InventoryCategoriesPage,
  InventoriesPage,
  InventoryUploadPage,
} from '@pages/dashboard'

const WAREHOUSE_PAGES_ROUTES = [
  {
    path: '/dashboard/warehouse/inventory-categories',
    element: <InventoryCategoriesPage />,
  },
  {
    path: '/dashboard/warehouse/inventories',
    element: <InventoriesPage />,
  },
  {
    path: '/dashboard/warehouse/inventories/upload',
    element: <InventoryUploadPage />,
  },
]

export default WAREHOUSE_PAGES_ROUTES
