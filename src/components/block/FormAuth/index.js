import { LiteComponent } from '../../../utils';
import template from './FromAuth';

const liteComponent = new LiteComponent();

const FormAuth = (title, fields, buttons) => {
  const formAuth = liteComponent.compileComponent(template);

  return formAuth({
    title,
    fields,
    buttons
  });
};

export default FormAuth;
