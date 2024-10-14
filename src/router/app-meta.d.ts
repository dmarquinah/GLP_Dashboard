import { Roles } from '../utils/roles'

// Ensure this file is parsed as a module regardless of dependencies.
export {}

// Type-safety for the router.meta field
declare module 'vue-router' {
  interface RouteMeta {
    // is optional
    requiredRole?: Roles[]
    // must be declared by every route
    requiresAuth: boolean
  }
}
