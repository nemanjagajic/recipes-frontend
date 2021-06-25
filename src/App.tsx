import React from 'react';
import PrivateRoute from './PrivateRoute'
import { Route } from 'react-router'
import Auth from './containers/auth/Auth'
import Home from './containers/home/Home'
import Dashboard from './containers/dashboard/Dashboard'
import { GlobalWrapper } from './styles/shared'
import Recipes from './components/recipes/Recipes'

function App() {
  return (
    <GlobalWrapper>
      <Route path='/' component={Home} exact />
      <Route path='/auth' component={Auth} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <Route path='/recipes/:categoryId' render={props => <Recipes categoryId={props.match.params.categoryId} /> } />
    </GlobalWrapper>
  );
}

export default App;
