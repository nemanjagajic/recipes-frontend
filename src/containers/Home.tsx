import React from 'react'
import { useHistory } from 'react-router'
import { navigateHomeAndReload } from '../utils/helpers'

const Home = () => {
  const history = useHistory()

  const logOut = () => {
    localStorage.removeItem('token')
    navigateHomeAndReload(history)
  }

  return (
    <div>
      Home
      <button onClick={logOut}>Log out</button>
    </div>
  );
};

export default Home;
