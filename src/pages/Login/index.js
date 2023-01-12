import * as styles from './Login.module.scss';

import { LiteComponent } from '../../utils';
import template from './Login';
import FormAuth from '../../components/block/FormAuth';
import Input from '../../components/core/Input';
import Button from '../../components/core/Button';

const liteComponent = new LiteComponent();

const Login = () => {
  const login = liteComponent.compileComponent(template);

  const fieldsInit = [
    { name: 'login', label: 'Логин' },
    { name: 'password', label: 'Пароль'}
  ];
  const buttonsInit = [
    { className: '', value: 'Авторизоваться', theme: 'default' },
    { className: '', value: 'Нет аккаунта?', theme: 'transparent' }
  ];

  const fields = fieldsInit.map((field) => {
    const { name, label } = field;
    return Input(styles.Input, label, name);
  });
  const buttons = buttonsInit.map((button) => {
    const { className, value, theme } = button;
    return Button(className, value, theme);
  });

  return login({
    auth: FormAuth('Вход', fields, buttons)
  });
};

export default Login;
