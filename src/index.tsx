import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router'
import history from './utils/history'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App';
import {ThemeProvider} from 'styled-components'
import theme from './theme/theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
