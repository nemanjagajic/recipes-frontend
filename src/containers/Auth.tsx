import React, { useState } from 'react';
import { useHistory } from 'react-router'
import { navigateHomeAndReload } from '../utils/helpers'

const Auth = () => {
  const history = useHistory()
  const [userData, setUserData] = useState({ email: '', password: '' })

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setUserData({ ...userData, [name]: value })
  }

  const handleLogin = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    localStorage.setItem('token', 'testToken')
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
  );
};

export default Auth;
