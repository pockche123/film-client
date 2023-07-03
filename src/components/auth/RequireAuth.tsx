import { Navigate, Outlet, useLocation } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'

const RequireAuth = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const { auth } = useAuth() as any

  const location = useLocation()

  return allowedRoles.includes(auth.role) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to='/accessNotAllowed' state={{ from: location }} replace />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  )
}

export default RequireAuth
