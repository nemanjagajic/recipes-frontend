import * as React from 'react';
import {
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;
  const isSignedIn = !!localStorage.getItem('token')

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isSignedIn ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: routeProps.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute
