import { LiteComponent } from '../../utils';
import template from './NotFound';

const liteComponent = new LiteComponent();

const NotFound = () => {
  const notFound = liteComponent.compileComponent(template);

  return notFound();
};

export default NotFound;
