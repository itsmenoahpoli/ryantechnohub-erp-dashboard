import { createBrowserRouter } from "react-router-dom";
import APP_ROUTES from '@router/routes.router'

const APP_ROUTER = createBrowserRouter(APP_ROUTES)

export {
  APP_ROUTER,
  APP_ROUTES
}