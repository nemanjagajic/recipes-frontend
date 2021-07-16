import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router'
import history from './utils/history'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App';
import {ThemeProvider} from 'styled-components'
import theme from './theme/theme'
import { Provider as AlertProvider, positions } from 'react-alert'
// @ts-ignore
import AlertTemplate from 'react-alert-template-basic'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const options = {
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: '30px',
}

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AlertProvider template={AlertTemplate} {...options}>
            <App />
          </AlertProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
