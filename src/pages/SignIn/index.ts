import * as styles from './SignIn.module.scss';

import { compileComponent, Component } from '../../utils';
import { router } from '../../utils/Router';
import template from './SignIn';
import FormAuth from '../../components/block/FormAuth';
import Input from '../../components/core/Input';
import Button from '../../components/core/Button';
import { userSignIn } from '../../utils/Store/actions/userSignIn';
import { handleBlur, handleSubmit, SerializeForm } from '../../utils/helpers';

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
        className: styles.input,
        placeholder: label,
        name,
        value: '',
        events: {
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
              const form = target.closest('form');
              const fieldsName = fieldsInit.map(field => field.name);

              handleSubmit(target, 'signIn')
                && userSignIn(SerializeForm(form!, fieldsName))
                .then(status => status === 200 && router.go('/login'));
            }
          }
        });
      }

      return new Button({
        className,
        value,
        theme,
        events: {
          click: () => router.go('/login')
        }
      });
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
