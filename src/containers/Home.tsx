import React from 'react'
import { useHistory } from 'react-router'
import { navigateHomeAndReload } from '../utils/helpers'
import $t from '../i18n'

const Home = () => {
  const history = useHistory()

  const logOut = () => {
    localStorage.removeItem('token')
    navigateHomeAndReload(history)
  }

  return (
    <div>
      Home
      <button onClick={logOut}>{$t('auth.buttons.logOut')}</button>
    </div>
  );
};

export default Home;
