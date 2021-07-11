import React, { useState } from 'react'
import PrivateRoute from './PrivateRoute'
import {Route, useHistory} from 'react-router'
import Auth from './containers/auth/Auth'
import Home from './containers/home/Home'
import Dashboard from './containers/dashboard/Dashboard'
import { GlobalWrapper } from './styles/shared'
import Recipes from './containers/recipes/Recipes'
import $t from './i18n'
import Navbar from './components/shared/Navbar'
import { useLocation } from 'react-router-dom'
import RecipeDetails from './containers/recipes/RecipeDetails'

function App() {
  const history = useHistory()
  const location = useLocation();
  const isSignedIn = !!localStorage.getItem('token')
  const [navbarTitle, setNavbarTitle] = useState<string>($t('home.title'))

  return (
    <GlobalWrapper>
      {location?.pathname !== '/dashboard' && (
        <Navbar
          itemsFromLeft={[{ title: $t('dashboard.mainPage'), onClick: () => history.push('/'), showIcon: true}]}
          title={navbarTitle}
          itemsFromRight={
            isSignedIn
              ? [{ title: $t('dashboard.title'), onClick: () => history.push('/dashboard'), showIcon: false }]
              : []
          }
        />
      )}
      <Route path='/' exact render={() => <Home setNavbarTitle={setNavbarTitle} />} />
      <Route path='/auth' component={Auth} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <Route path='/recipes/:categoryId' exact render={props => (
        <Recipes setNavbarTitle={setNavbarTitle} categoryId={props.match.params.categoryId} />
      ) } />
      <Route path='/recipes/:categoryId/:recipeId' render={props => (
        <RecipeDetails setNavbarTitle={setNavbarTitle} recipeId={props.match.params.recipeId} />
      ) } />
    </GlobalWrapper>
  );
}

export default App;
