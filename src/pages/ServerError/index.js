import { LiteComponent } from '../../utils';
import template from './ServerError';

const liteComponent = new LiteComponent();

const ServerError = () => {
  const serverError = liteComponent.compileComponent(template);

  return serverError();
};

export default ServerError;
