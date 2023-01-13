import { LiteComponent } from '../../utils';
import template from './Main';

const liteComponent = new LiteComponent();

const Main = () => {
  const main = liteComponent.compileComponent(template);

  return main({
    chatsList: null
  });
};

export default Main;
