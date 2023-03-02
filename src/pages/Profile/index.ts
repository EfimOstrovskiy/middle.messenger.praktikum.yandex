import * as styles from './Profile.module.scss';

import { compileComponent, Component } from '../../utils';
import { router } from '../../utils/Router';
import { connect } from '../../utils/Store/Connect';
import { userUpdate } from '../../utils/Store/actions/userUpdate';
import { userLogout } from '../../utils/Store/actions/userLogout';
import updateUserPassword from '../../api/methods/updateUserPassword';
import cn from 'classnames';
import template from './Profile';
import UserDataList from '../../components/block/UserDataList';
import Button from '../../components/core/Button';
import { handleSubmit, SerializeForm } from "../../utils/helpers";

import BACK_ICON from '../../../public/images/icons/back.svg';

interface IProfileProps {
  user?: Record<string, any>;
  attr?: Record<string, any>;
  backProfile?: Button;
  userData?: UserDataList | UserDataList[];
  saveData?: Button;
  changeData?: Button;
  changePassword?: Button;
  exit?: Button;
}

const items = [
  { placeholder: 'Почта', name: 'email' },
  { placeholder: 'Логин', name: 'login' },
  { placeholder: 'Имя', name: 'first_name' },
  { placeholder: 'Фамилия', name: 'second_name' },
  { placeholder: 'Имя в чате', name: 'display_name' },
  { placeholder: 'Телефон', name: 'phone' }
];

class Profile extends Component<IProfileProps> {
  constructor(tag: string, props: IProfileProps = {}) {
    let viewChange: string | null = null;

    const itemsInit = items.map((item: any) => {
      const state = props.user;
      if (state) {
        return { placeholder: item.placeholder, name: item.name, value: state[item.name] };
      } else {
        return { placeholder: item.placeholder, name: item.name, value: '' };
      }
    });

    const backProfile = new Button({
      className: styles.Cancel,
      value: `<img src="${BACK_ICON}" alt="Назад к чатам" />`,
      events: {
        click: () => router.go('/')
      }
    });

    const userData = new UserDataList({ className: styles.Data, itemsInit, readonly: 'readonly' });

    const saveData = new Button({
      className: styles.Save,
      value: 'Сохранить',
      events: {
        click: (event) =>{event.preventDefault();
          const target = event.target as HTMLElement;
          const form = target.closest('form');
          let fieldsName = userData.props.itemsInit.map(field => field.name);

          if (viewChange === 'data') {
            handleSubmit(target, 'base') && userUpdate(SerializeForm(form, fieldsName));
          }

          if (viewChange === 'password') {
            handleSubmit(target, 'base') && updateUserPassword(SerializeForm(form, fieldsName));
          }

          userData.setProps({
            itemsInit: itemsInit,
            readonly: 'readonly'
          });

          this.viewControl();
        }
      }
    })
    saveData.hide();

    const changeData = new Button({
      className: styles.Button,
      value: 'Изменить данные',
      theme: 'transparent',
      events: {
        click: () => {
          userData.setProps({
            readonly: ''
          });

          viewChange = 'data';

          this.viewControl();
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
              { placeholder: 'Старый пароль', name: 'oldPassword', value: '' },
              { placeholder: 'Новый пароль', name: 'newPassword', value: '' },
            ],
            readonly: ''
          });

          viewChange = 'password';

          this.viewControl();
        }
      }
    });

    const exit = new Button({
      className: cn(styles.Exit, styles.Button),
      value: 'Выйти',
      theme: 'transparent',
      events: {
        click: () => {
          userLogout().then(status => status === 200 && router.go('/login'));
        }
      }
    });

    super(tag,{
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

  private viewControl() {
    const saveData = this.children.saveData;
    const changeData = this.children.changeData;
    const changePassword = this.children.changePassword;
    const exit = this.children.exit;
    if (saveData.getContent().classList.contains('hide')) {
      saveData.show();
      changeData.hide();
      changePassword.hide();
      exit.hide();
    } else {
      saveData.hide();
      changeData.show();
      changePassword.show();
      exit.show();
    }
  }

  componentDidUpdate(oldProps: IProfileProps, newProps: IProfileProps) {
    if (oldProps['user'] !== newProps['user']) {
      this.children.userData.setProps({
        itemsInit: items.map((item: any) => {
          const state = newProps['user'];
          if (state) {
            return { placeholder: item.placeholder, name: item.name, value: state[item.name] };
          } else {
            return { placeholder: item.placeholder, name: item.name, value: '' };
          }
        })
      })
      this.props.user = newProps['user']
    }
    return oldProps['user'] !== newProps['user']
  }

  render() {
    const { user,
      backProfile,
      userData,
      saveData,
      changeData,
      changePassword,
      exit } = this.props;

    return this.compile(this.templateNode, {
      backProfile,
      name: user && user.login,
      userData,
      saveData,
      changeData,
      changePassword,
      exit
    });
  }
}

const mapStateToProps = (state: Record<string, any>) => {
  return {
    user: state.user || {}
  }
}

export default connect(Profile, mapStateToProps);
