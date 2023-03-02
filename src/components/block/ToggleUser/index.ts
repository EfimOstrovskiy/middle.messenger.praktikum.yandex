import * as styles from './ToggleUser.module.scss';

import { compileComponent, Component } from '../../../utils';
import { addUser } from '../../../utils/Store/actions/addUser';
import { removeUser } from '../../../utils/Store/actions/removeUser';
import Button from '../../core/Button';
import Input from '../../core/Input';
import template from './ToggleUser';
import { handleSubmit, SerializeForm } from '../../../utils/helpers';

interface IToggleUserProps {
  attr?: Record<string, any>;
  title: string;
  state: string;
  chatId: string | number;
  nameUser?: Input;
  inUser?: Button;
  deleteUser?: Button
}

class ToggleUser extends Component<IToggleUserProps> {
  constructor(props: IToggleUserProps) {
    const nameUser = new Input({
      className: styles.Name,
      placeholder: 'Ник пользователя',
      name: 'login',
      value: ''
    });

    const inUser = new Button({
      className: '',
      value: 'Добавить',
      events: {
        click: (event) => {
          event.preventDefault();
          const target = event.target as HTMLElement;
          const form = target.closest('form');

          handleSubmit(target, 'signIn')
          && addUser(SerializeForm(form, 'login').login, props.chatId);
        }
      }
    });

    const deleteUser = new Button({
      className: '',
      value: 'Удалить',
      events: {
        click: (event) => {
          event.preventDefault();
          const target = event.target as HTMLElement;
          const form = target.closest('form');

          handleSubmit(target, 'signIn')
          && removeUser(SerializeForm(form, 'login').login, props.chatId);
        }
      }
    });

    super('form', {
      attr: {
        class: styles.Root
      },
      inUser,
      deleteUser,
      nameUser,
      ...props
    });

    this.viewButton(this.props.state);
  }

  private viewButton(state: string) {
    const { inUser, deleteUser } = this.children;

    if (state === 'add') {
      inUser?.show();
      deleteUser?.hide()
    }

    if (state === 'delete') {
      inUser?.hide();
      deleteUser?.show()
    }
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  componentDidUpdate(oldProps: IToggleUserProps, newProps: IToggleUserProps): boolean {
    if (oldProps['state'] !== newProps['state']) {
      this.viewButton(newProps['state'])
    }

    return oldProps['state'] !== newProps['state']
  }

  render() {
    const { inUser, deleteUser, nameUser, title } = this.props;

    return this.compile(this.templateNode, { inUser, deleteUser, nameUser, title });
  }
}

export default ToggleUser;
