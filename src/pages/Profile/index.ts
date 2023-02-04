import * as styles from './Profile.module.scss';

import { compileComponent, Component } from '../../utils';
import cn from 'classnames';
import template from './Profile';
import UserDataList from '../../components/block/UserDataList';
import Button from '../../components/core/Button';

import BACK_ICON from '../../../public/images/icons/back.svg';

interface IProfileProps {
  backProfile?: Button;
  userData?: UserDataList;
  changeData?: Button;
  changePassword?: Button;
  exit?: Button;
}

const itemsInit = [
  { title: 'Почта', type: 'text', name: 'email', value: 'admin@mail.ru' },
  { title: 'Логин', type: 'text', name: 'login', value: 'admin' },
  { title: 'Имя', type: 'text', name: 'first_name', value: 'Ефим' },
  { title: 'Фамилия', type: 'text', name: 'second_name', value: 'Островский' },
  { title: 'Имя в чате', type: 'text', name: 'display_name', value: 'RuMIN' },
  { title: 'Телефон', type: 'text', name: 'phone', value: '+79993955535' },
];

class Profile extends Component<IProfileProps> {
  constructor(props: IProfileProps = {}) {
    const backProfile = new Button({
      className: styles.Cancel,
      value: `<img src="${BACK_ICON}" alt="Назад к чатам" />`
    });
    const userData = new UserDataList({ className: styles.Data, itemsInit });
    const changeData = new Button({
      className: styles.Button,
      value: 'Изменить данные',
      theme: 'transparent'
    });
    const changePassword = new Button({
      className: styles.Button,
      value: 'Изменить пароль',
      theme: 'transparent',
      events: {
        click: () => {
          userData.setProps({
            itemsInit: [
              { title: 'Старый пароль', type: 'old_password', name: 'password', value: '' },
              { title: 'Новый пароль', type: 'new_password', name: 'password', value: '' },
              { title: 'Повторите новый пароль', type: 'password', name: 'repeat_new_password', value: '' },
            ]
          });
        }
      }
    });
    const exit = new Button({
      className: cn(styles.Exit, styles.Button),
      value: 'Выйти',
      theme: 'transparent'
    });

    super({
      backProfile,
      userData,
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
    const { backProfile, userData, changeData, changePassword, exit } = this.props;

    return this.compile(this.templateNode, { backProfile, name: 'Efim', userData, changeData, changePassword, exit });
  }
}

export default Profile;
