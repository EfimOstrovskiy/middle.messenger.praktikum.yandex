import * as styles from './SignIn.module.scss';

import { compileComponent, Component } from '../../utils';
import template from './SignIn';
import FormAuth from '../../components/block/FormAuth';
import Input from '../../components/core/Input';
import Button from '../../components/core/Button';
import { handleBlur, handleFocus, handleSubmit} from '../../utils/helpers';

interface ISingInProps {
  auth?: FormAuth
}

const fieldsInit = [
  { name: 'email', label: 'Почта' },
  { name: 'login', label: 'Логин' },
  { name: 'first_name', label: 'Имя'},
  { name: 'second_name', label: 'Фамилия'},
  { name: 'phone', label: 'Телефон'},
  { name: 'password', label: 'Пароль'}
];
const buttonsInit = [
  { className: '', value: 'Зарегистрироваться', theme: 'default' },
  { className: '', value: 'Войти', theme: 'transparent' }
];

class SingIn extends Component<ISingInProps> {
  constructor(props: ISingInProps = {}) {
    const fields = fieldsInit.map((field) => {
      const { name, label } = field;

      return new Input({
        className: styles.Input,
        placeholder: label,
        name,
        value: '',
        events: {
          focusin: (event) => {
            const target = event.target as HTMLInputElement;

            handleFocus(target, 'signIn');
          },
          focusout: (event) => {
            const target = event.target as HTMLInputElement;

            handleBlur(target, 'signIn');
          }
        }
      });
    });
    const buttons = buttonsInit.map((button) => {
      const { className, value, theme } = button;

      if (value === 'Зарегистрироваться') {
        return new Button({
          className,
          value,
          theme,
          events: {
            click: (event) => {
              event.preventDefault();
              const target = event.target as HTMLElement;

              handleSubmit(target, 'signIn');
            }
          }
        });
      }

      return new Button({ className, value, theme });
    });
    const auth = new FormAuth({ title: 'Регистрация', fields, buttons });

    super('div',{ auth, ...props });
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    const { auth } = this.props;

    return this.compile(this.templateNode, { auth });
  }
}

export default SingIn;
