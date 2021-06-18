import React from 'react'
import { useHistory } from 'react-router'
import { navigateAndReload } from '../../utils/helpers'
import $t from '../../i18n'
import AddRecipe from '../../components/recipes/AddRecipe'
import AddCategory from '../../components/categories/AddCategory'
import Navbar from '../../components/shared/Navbar'

const Dashboard = () => {
  const history = useHistory()

  const logOut = () => {
    localStorage.removeItem('token')
    navigateAndReload(history, '/auth')
  }

  return (
    <div>
      <Navbar
        itemsFromLeft={[{ title: $t('dashboard.mainPage'), onClick: () => history.push('/')}]}
        itemsFromRight={[{ title: $t('auth.buttons.logOut'), onClick: logOut }]}
      />
      {$t('dashboard.title')}
      <AddCategory />
      <AddRecipe />
    </div>
  );
};

export default Dashboard;
