export const createBreadcrumbItems = () => {
  const breadcrumbItems = window.location.pathname.split('/')
  breadcrumbItems.shift()
  console.log(breadcrumbItems)

  return breadcrumbItems
}