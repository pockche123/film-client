import { useNavigate } from 'react-router-dom'
import { Paths } from '../components/services/Utils/Paths'

export const useLogout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate(Paths.login)
  }

  return handleLogout
}
