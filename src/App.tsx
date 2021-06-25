import React, {useState} from 'react';
import PrivateRoute from './PrivateRoute'
import {Route, useHistory} from 'react-router'
import Auth from './containers/auth/Auth'
import Home from './containers/home/Home'
import Dashboard from './containers/dashboard/Dashboard'
import { GlobalWrapper } from './styles/shared'
import Recipes from './components/recipes/Recipes'
import $t from './i18n'
import Navbar from './components/shared/Navbar'
import { useLocation } from 'react-router-dom'

function App() {
  const history = useHistory()
  const location = useLocation();
  const [navbarTitle, setNavbarTitle] = useState<string>($t('home.title'))

  return (
    <GlobalWrapper>
      {location?.pathname !== '/dashboard' && (
        <Navbar
          itemsFromLeft={[{ title: $t('dashboard.mainPage'), onClick: () => history.push('/')}]}
          title={navbarTitle}
        />
      )}
      <Route path='/' exact render={props => <Home setNavbarTitle={setNavbarTitle} />} />
      <Route path='/auth' component={Auth} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <Route path='/recipes/:categoryId' render={props => (
        <Recipes setNavbarTitle={setNavbarTitle} categoryId={props.match.params.categoryId} />
      ) } />
    </GlobalWrapper>
  );
}

export default App;
