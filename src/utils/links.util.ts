import { capitalize } from '@utils/index'

export const createBreadcrumbItems = (): Array<string> => {
  const breadcrumbItems = window.location.pathname.split('/')
  breadcrumbItems.shift()

  return breadcrumbItems
}

export const getRouteLabel = (): string => {
  const route = window.location.pathname.split('/')
  const label = route[route.length - 1]

  return capitalize(label.replaceAll('-', ' '))
}

export const createQs = (params: any): string => {
  return (
    '?' +
    String(
      Object.keys(params)
        .map((k: any) => k + '=' + params[k])
        .join('&'),
    )
  )
}
