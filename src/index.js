import '../public/styles/main.css';

import { LiteComponent } from './utils';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Main from './pages/Main';

const path = window.location.pathname;
const liteComponent = new LiteComponent();

let page;

switch (path) {
  case "/":
    page = Main();
    break;
  case "/login":
    page = Login();
    break;
  case "/sign_in":
    page = SignIn();
    break;
  case "/profile":
    page = Profile();
    break;
  default:
    page = NotFound();
}

liteComponent.renderComponent('root', page);
