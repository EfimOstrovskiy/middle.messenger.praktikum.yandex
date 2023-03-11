import { Component } from '../Component';
import { router } from './Router';

class TestMain extends Component {
  constructor() {
    super('div', {});
  }

  render() {
    return this.compile(() => 'Main', {});
  }
}

class TestProfile extends Component {
  constructor() {
    super('div', {});
  }

  render() {
    return this.compile(() => 'Profile', {});
  }
}

describe('Router', () => {
  test('Initialize', () => {
    router
      .use('/', TestMain)
      .use('/profile', TestProfile)
      .start();

    expect(router.getRoute('/').block.getContent().innerHTML).toBe('Main');
  });

  test('Using routes', () => {
    expect(window.location.pathname).toBe('/');

    router.go('/profile');

    expect(window.location.pathname).toBe('/profile');
  });
});
