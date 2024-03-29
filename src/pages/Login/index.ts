import styles from './Login.module.scss';

import { compileComponent, Component } from '../../utils';
import { router } from '../../utils/Router';
import template from './Login';
import FormAuth from '../../components/block/FormAuth';
import Input from '../../components/core/Input';
import Button from '../../components/core/Button';
import { userLogin } from '../../utils/Store/actions/userLogin';
import { handleBlur, handleSubmit, SerializeForm } from '../../utils/helpers';

interface ILoginProps {
  attr?: Record<string, string | number>;
  auth?: FormAuth;
  events?: Record<string, (event: Event) => void>
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
        className: styles.input,
        placeholder: label,
        name,
        value: '',
        events: {
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
          type: 'submit'
        });
      }

      return new Button({
        className,
        value,
        theme,
        type: 'button',
        events: {
          click: () => router.go('/sign_in')
        }
      });
    });

    const auth = new FormAuth({ title: 'Вход', fields, buttons });

    super('div',{
      attr: {
        class: styles.root
      },
      events: {
        submit: (event) => {
          event.preventDefault();
          const target = event.target as HTMLFormElement;
          const fieldsName = fieldsInit.map(field => field.name);

          handleSubmit(target, 'signIn')
          && userLogin(SerializeForm(target!, fieldsName))
            .then(status => status === 200 && router.go('/'))
            .catch(error => console.error(error));
        }
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
