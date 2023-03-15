import styles from './ToggleUser.module.scss';

import { compileComponent, Component } from '../../../utils';
import { addUser } from '../../../utils/Store/actions/addUser';
import { removeUser } from '../../../utils/Store/actions/removeUser';
import Button from '../../core/Button';
import Input from '../../core/Input';
import template from './ToggleUser';
import { handleSubmit, SerializeForm } from '../../../utils/helpers';

interface IToggleUserProps {
  attr?: Record<string, string | number>;
  title: string;
  state: string;
  nameUser?: Input;
  inUser?: Button;
  deleteUser?: Button;
  events?: Record<string, (event: Event) => void>
}

class ToggleUser extends Component<IToggleUserProps> {
  constructor(props: IToggleUserProps) {
    const nameUser = new Input({
      className: styles.name,
      placeholder: 'Ник пользователя',
      name: 'login',
      value: ''
    });

    const inUser = new Button({
      className: '',
      value: 'Добавить',
      type: 'submit'
    });

    const deleteUser = new Button({
      className: '',
      value: 'Удалить',
      type: 'submit'
    });

    super('form', {
      attr: {
        class: styles.root
      },
      events: {
        submit: (event) => {
          event.preventDefault();
          const target = event.target as HTMLFormElement;
          const login = SerializeForm(target, 'login').login;

          if (handleSubmit(target, 'signIn') && login) {
            if (props.state === 'add') {
              addUser(login)
                .catch(error => console.error(error));
            } else {
              removeUser(login)
                .catch(error => console.error(error));
            }
          }
        }
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
