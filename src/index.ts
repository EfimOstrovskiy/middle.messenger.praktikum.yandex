import '../public/styles/main.css';

import { renderComponent } from './utils';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ServerError from './pages/ServerError';
import Mains from './pages/Main';

const path = window.location.pathname;

let page;

switch (path) {
  case "/":
    page = new Mains();
    break;
  case "/login":
    page = new Login();
    break;
  case "/sign_in":
    page = new SignIn();
    break;
  case "/profile":
    page = new Profile();
    break;
  case "/server_error":
    page = new ServerError();
    break;
  default:
    page = new NotFound();
}

renderComponent('root', page.getContent());
