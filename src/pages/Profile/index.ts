import * as styles from './Profile.module.scss';

import { compileComponent, Component } from '../../utils';
import cn from 'classnames';
import template from './Profile';
import UserDataList from '../../components/block/UserDataList';
import Button from '../../components/core/Button';

import BACK_ICON from '../../../public/images/icons/back.svg';

interface IProfileProps {
  attr?: Record<string, any>;
  backProfile?: Button;
  userData?: UserDataList | UserDataList[];
  saveData?: Button;
  changeData?: Button;
  changePassword?: Button;
  exit?: Button;
}

const itemsInit = [
  { placeholder: 'Почта', name: 'email', value: 'admin@mail.ru' },
  { placeholder: 'Логин', name: 'login', value: 'admin' },
  { placeholder: 'Имя', name: 'first_name', value: 'Ефим' },
  { placeholder: 'Фамилия', name: 'second_name', value: 'Островский' },
  { placeholder: 'Имя в чате', name: 'display_name', value: 'RuMIN' },
  { placeholder: 'Телефон', name: 'phone', value: '+79993955535' },
];

class Profile extends Component<IProfileProps> {
  constructor(props: IProfileProps = {}) {
    const backProfile = new Button({
      className: styles.Cancel,
      value: `<img src="${BACK_ICON}" alt="Назад к чатам" />`
    });

    const userData = new UserDataList({ className: styles.Data, itemsInit });

    const saveData = new Button({
      className: styles.Save,
      value: 'Сохранить',
      events: {
        click: () =>{
          userData.setProps({
            itemsInit: itemsInit
          });

          saveData.hide();
          changeData.show();
          changePassword.show();
          exit.show();
        }
      }
    })
    saveData.hide();

    const changeData = new Button({
      className: styles.Button,
      value: 'Изменить данные',
      theme: 'transparent',
      events: {
        click: (event) => {
          const target = event.target as HTMLElement;
          const form =target.closest('form');

          if (form) {
            form.querySelectorAll('input')
              .forEach(input => input.removeAttribute('readonly'));
          }

          saveData.show();
          changeData.hide();
          changePassword.hide();
          exit.hide();
        }
      }
    });

    const changePassword = new Button({
      className: styles.Button,
      value: 'Изменить пароль',
      theme: 'transparent',
      events: {
        click: () => {
          userData.setProps({
            itemsInit: [
              { placeholder: 'Старый пароль', name: 'old_password', value: '' },
              { placeholder: 'Новый пароль', name: 'new_password', value: '' },
              { placeholder: 'Повторите новый пароль', name: 'repeat_new_password', value: '' },
            ]
          });

          saveData.show();
          changeData.hide();
          changePassword.hide();
          exit.hide();
        }
      }
    });

    const exit = new Button({
      className: cn(styles.Exit, styles.Button),
      value: 'Выйти',
      theme: 'transparent'
    });

    super('div',{
      attr: {
        class: styles.Root
      },
      backProfile,
      userData,
      saveData,
      changeData,
      changePassword,
      exit,
      ...props
    });
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    const { backProfile, userData, saveData, changeData, changePassword, exit } = this.props;

    return this.compile(this.templateNode, {
      backProfile,
      name: 'Ефим Островский',
      userData,
      saveData,
      changeData,
      changePassword,
      exit
    });
  }
}

export default Profile;
