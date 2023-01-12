import { LiteComponent } from '../../../utils';
import template from './Input';

const liteComponent = new LiteComponent();

const Input = (className, placeholder, name) => {
  const input = liteComponent.compileComponent(template);
  const type = name === 'password' ? 'password' : 'text';

  return input({
    className,
    placeholder,
    type,
    name
  })
};

export default Input;
