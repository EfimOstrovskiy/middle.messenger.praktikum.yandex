import * as styles from './CreateChat.module.scss';

import { compileComponent, Component } from '../../../utils';
import { createChat } from '../../../utils/Store/actions/createChat';
import Button from '../../core/Button';
import Input from '../../core/Input';
import template from './CreateChat';
import { handleSubmit, SerializeForm } from "../../../utils/helpers";

interface ICreateChatProps {
  attr?: Record<string, any>;
  searchUser?: Input;
  nameChat?: Input;
  create?: Button;
  modalClose: () => void;
}

class CreateChat extends Component<ICreateChatProps> {
  constructor(props: ICreateChatProps) {
    const searchUser = new Input({
      className: styles.user,
      placeholder: 'Ник пользователя',
      name: 'login',
      value: ''
    });

    const nameChat = new Input({
      className: styles.name,
      placeholder: 'Название чата',
      name: 'title',
      value: ''
    });

    const create = new Button({
      className: '',
      value: 'Создать',
      events: {
        click: (event) => {
          event.preventDefault();
          const target = event.target as HTMLElement;
          const form = target.closest('form');

          if (handleSubmit(target, 'signIn')) {
            createChat(SerializeForm(form!, ['login', 'title'])).then(status => {
              return status === 200 && props.modalClose()
            }).catch(error => console.error(error));
          }
        }
      }
    });

    super('form', {
      attr: {
        class: styles.root
      },
      searchUser,
      nameChat,
      create,
      ...props
    });
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    const { searchUser, nameChat, create } = this.props;

    return this.compile(this.templateNode, { searchUser, nameChat, create });
  }
}

export default CreateChat;
