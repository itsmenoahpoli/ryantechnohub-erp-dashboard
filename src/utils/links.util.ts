
import { APP_ROUTES } from '@router/index'

export const sidebarItemsFromRoutes = () => {
  let dashboardRoutes: any = APP_ROUTES[0].children[1]
  let items: any = dashboardRoutes.children.map((route: any) => ({ path: route.path, attr: route.meta.sidebar }))

  return items
}