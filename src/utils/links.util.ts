export const createBreadcrumbItems = (): Array<string> => {
  const breadcrumbItems = window.location.pathname.split('/')
  breadcrumbItems.shift()

  return breadcrumbItems
}