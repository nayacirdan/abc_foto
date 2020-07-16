import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import store from './store/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import 'swiper/css/swiper.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#51AD33'
    },
    secondary: {
      main: '#F7F5F6'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 640,
      lg: 980,
      xl: 1200
    }
  }
});
console.log('theme', theme);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App/>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
