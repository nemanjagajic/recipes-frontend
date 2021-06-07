import React from 'react'
import { useHistory } from 'react-router'
import { navigateAndReload } from '../utils/helpers'
import $t from '../i18n'

const Dashboard = () => {
  const history = useHistory()

  const logOut = () => {
    localStorage.removeItem('token')
    navigateAndReload(history, '/auth')
  }

  return (
    <div>
      {$t('dashboard.title')}
      <button onClick={logOut}>{$t('auth.buttons.logOut')}</button>
    </div>
  );
};

export default Dashboard;