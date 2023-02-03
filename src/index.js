import '../public/styles/main.css';

import { LiteComponent } from './utils';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ServerError from './pages/ServerError';
import Mains from './pages/Main';

const path = window.location.pathname;
const liteComponent = new LiteComponent();

let page;

switch (path) {
  case "/":
    page = new Mains({ chatsList: 'testing log' });
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

liteComponent.renderComponent('root', page.getContent());
