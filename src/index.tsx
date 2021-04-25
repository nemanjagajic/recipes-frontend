import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router'
import history from './utils/history'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App';

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
