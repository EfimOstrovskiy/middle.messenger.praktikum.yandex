import './main.scss';

import { Store } from './utils/Store';
import { router } from './utils/Router';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import Main from './pages/Main';

const store = new Store();
const auth = store.getState().auth;

if (!auth || auth === 'unauthorized') {
  router.go('/login');
}

router
  .use('/', Main, 'div')
  .use('/login', Login)
  .use('/sign_in', SignIn)
  .use('/profile', Profile, 'div')
  .start();
