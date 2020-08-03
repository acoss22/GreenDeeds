import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App.js';
import * as serviceWorker from './serviceWorker';
import logo from './styles/logoGD.svg';
import './styles/fonts/Raleway/static/Raleway-Medium.ttf';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} isPrivate />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={App} />
    </Switch>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
