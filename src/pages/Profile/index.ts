import * as styles from './Profile.module.scss';

import { compileComponent, Component } from '../../utils';
import cn from 'classnames';
import template from './Profile';
import UserDataList from '../../components/block/UserDataList';
import Button from '../../components/core/Button';

import BACK_ICON from '../../../public/images/icons/back.svg';

interface IProfileProps {
  items?: any;
  backProfile?: Button;
  userData?: UserDataList;
  changeData?: Button;
  changePassword?: Button;
  exit?: Button;
}

class Profile extends Component<IProfileProps> {
  constructor(props: IProfileProps = {}) {
    const backProfile = new Button({
      className: styles.Cancel,
      value: `<img src="${BACK_ICON}" alt="Назад к чатам" />`
    });
    const userData = new UserDataList({ className: styles.Data });
    const changeData = new Button({
      className: styles.Button,
      value: 'Изменить данные',
      theme: 'transparent'
    });
    const changePassword = new Button({
      className: styles.Button,
      value: 'Изменить пароль',
      theme: 'transparent'
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
