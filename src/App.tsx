import React from 'react';
import PrivateRoute from './PrivateRoute'
import { Route } from 'react-router'
import Auth from './containers/auth/Auth'
import Home from './containers/home/Home'
import Dashboard from './containers/dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Route path='/' component={Home} exact />
      <Route path='/auth' component={Auth} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
    </div>
  );
}

export default App;
