import styles from './SignIn.module.scss';

import { LiteComponent } from '../../utils';
import template from './SignIn';
import FormAuth from '../../components/block/FormAuth';
import Input from '../../components/core/Input';
import Button from '../../components/core/Button';

const liteComponent = new LiteComponent();

const SignIn = () => {
  const signIn = liteComponent.compileComponent(template);

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

  const fields = fieldsInit.map((field) => {
    const { name, label } = field;
    return Input(styles.Input, label, name);
  });
  const buttons = buttonsInit.map((button) => {
    const { className, value, theme } = button;
    return Button(className, value, theme);
  });

  return signIn({
    auth: FormAuth('Регистрация', fields, buttons)
  });
};

export default SignIn;
