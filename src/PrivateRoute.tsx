import * as React from 'react'
import {
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { navigateAndReload } from './utils/helpers'
import { AUTH_PATH } from './constants/constants'

interface PrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props
  const isSignedIn = !!localStorage.getItem('token')
  const isAuthRoute = window.location.href.includes(AUTH_PATH)
  const history = useHistory()

  useEffect(() => {
    if (isSignedIn && isAuthRoute) {
      navigateAndReload(history, '/dashboard')
    }
  }, [])

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
