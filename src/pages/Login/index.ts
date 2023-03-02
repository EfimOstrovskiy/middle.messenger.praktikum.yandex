import * as styles from './Login.module.scss';

import { compileComponent, Component } from '../../utils';
import { router } from '../../utils/Router';
import template from './Login';
import FormAuth from '../../components/block/FormAuth';
import Input from '../../components/core/Input';
import Button from '../../components/core/Button';
import { userLogin } from '../../utils/Store/actions/userLogin';
import { handleBlur, handleFocus, handleSubmit, SerializeForm } from '../../utils/helpers';

interface ILoginProps {
  attr?: Record<string, any>;
  auth?: FormAuth
}

const fieldsInit = [
  { name: 'login', label: 'Логин' },
  { name: 'password', label: 'Пароль'}
];
const buttonsInit = [
  { className: '', value: 'Авторизоваться', theme: 'default' },
  { className: '', value: 'Нет аккаунта?', theme: 'transparent' }
];

class Login extends Component<ILoginProps> {
  constructor(props: ILoginProps = {}) {
    const fields = fieldsInit.map((field) => {
      const { name, label } = field;

      return new Input({
        className: styles.Input,
        placeholder: label,
        name,
        value: '',
        events: {
          focusin: (event) => {
            const input = event.target as HTMLInputElement
            handleFocus(input, 'login')
          },
          focusout: (event) => {
            const input = event.target as HTMLInputElement
            handleBlur(input, 'login');
          }
        }
      });
    });
    const buttons = buttonsInit.map((button) => {
      const { className, value, theme } = button;

      if (value === 'Авторизоваться') {
        return new Button({
          className,
          value,
          theme,
          events: {
            click: (event) => {
              event.preventDefault();
              const target = event.target as HTMLElement;
              const form = target.closest('form');
              const fieldsName = fieldsInit.map(field => field.name);

              handleSubmit(target, 'signIn')
                && userLogin(SerializeForm(form, fieldsName))
                .then(status => status === 200 && router.go('/'));
            }
          }
        });
      }

      return new Button({
        className,
        value,
        theme,
        events: {
          click: () => router.go('/sign_in')
        }
      });
    });
    const auth = new FormAuth({ title: 'Вход', fields, buttons });

    super('div',{
      attr: {
        class: styles.Root
      },
      auth,
      ...props
    });
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    const { auth } = this.props;

    return this.compile(this.templateNode, { auth });
  }
}

export default Login;
