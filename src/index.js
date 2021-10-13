import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import GlobalStyle from 'style/GlobalStyle ';
import theme from 'style/theme';
import { ThemeProvider } from 'styled-components';

import App from './App';
import store from './store';

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
