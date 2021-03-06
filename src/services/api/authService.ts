import request from '../request'
import { UserAuthData } from '../../ts/userTypes'

const API_ENDPOINTS = {
  LOGIN: '/api/auth/login',
}

class AuthService {
  logIn = ({ email, password }: UserAuthData) => request.post(API_ENDPOINTS.LOGIN, { email, password })
}
export default new AuthService()
