import { useNavigate } from 'react-router-dom'
import { Paths } from '../services/Utils/Paths'

export const useLogout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate(Paths.login)
  }

  return handleLogout
}
