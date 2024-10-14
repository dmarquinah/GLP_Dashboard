import { Role } from '../../utils/roles'

const ROLE_KEY = 'userRole'
const AUTH_TOKEN_KEY = 'authToken'

export const isAuthenticated = (): boolean => {
  // Check if user is logged in (in this case using a token in localStorage)
  return !!localStorage.getItem(AUTH_TOKEN_KEY)
}

export const setAuthToken = (token: string) => {
  localStorage.setItem(AUTH_TOKEN_KEY, token)
}

export const getUserRole = (): Role => {
  // Function to get user role (admin/user/etc.)
  const userRole = (localStorage.getItem(ROLE_KEY) || Role.COLLABORATOR) as keyof typeof Role // Example: 'admin' or 'user'
  return Role[userRole]
}

export const setUserRole = (role: string): void => {
  // Function to set user role (admin/user/etc.)
  localStorage.setItem(ROLE_KEY, role)
}
