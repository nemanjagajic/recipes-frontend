import React from 'react';
import PrivateRoute from './PrivateRoute'
import { Route } from 'react-router'
import Auth from './containers/Auth'
import Home from './containers/Home'

function App() {
  return (
    <div className="App">
      <Route path='/auth' component={Auth} />
      <PrivateRoute exact path='/' component={Home} />
    </div>
  );
}

export default App;
