import React from 'react';
import PrivateRoute from './PrivateRoute'
import { Route } from 'react-router'
import Auth from './containers/Auth'
import Home from './containers/Home'
import Dashboard from './containers/Dashboard'

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
