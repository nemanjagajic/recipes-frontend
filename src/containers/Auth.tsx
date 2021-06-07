import React, { useState } from 'react';
import { useHistory } from 'react-router'
import { navigateHomeAndReload } from '../utils/helpers'
import { UserAuthData } from '../ts/types'
import authService from '../services/api/authService'

const Auth = () => {
  const history = useHistory()
  const [userData, setUserData] = useState<UserAuthData>({ email: '', password: '' })

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setUserData({ ...userData, [name]: value })
  }

  const handleLogin = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const response = await authService.logIn(userData)
    localStorage.setItem('token', response.data.token)
    navigateHomeAndReload(history)
  }

  return (
    <div>
      <form>
        <input
          type={'email'}
          onChange={onChange}
          name={'email'}
          placeholder={'Email'}
          value={userData.email}
        />
        <input
          onChange={onChange}
          name={'password'}
          placeholder={'Password'}
          type={'password'}
          value={userData.password}
        />
        <input
          type={'submit'}
          value={'Login'}
          onClick={handleLogin}
          onSubmit={handleLogin}
        />
      </form>
    </div>
  )
}

export default Auth
