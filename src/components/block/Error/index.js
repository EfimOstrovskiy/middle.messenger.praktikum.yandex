import { LiteComponent } from '../../../utils';
import template from './Error';

const liteComponent = new LiteComponent();

const Error = (code, text) => {
  const error = liteComponent.compileComponent(template);

  return error({
    codeError: code,
    textError: text
  });
};

export default Error;
