export const createBreadcrumbItems = () => {
  const breadcrumbItems = window.location.pathname.split('/')
  breadcrumbItems.shift()

  return breadcrumbItems
}