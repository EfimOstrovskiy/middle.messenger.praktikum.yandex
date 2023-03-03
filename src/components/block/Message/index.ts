import * as styles from './Message.module.scss';

import { compileComponent, Component } from '../../../utils';
import { connect } from '../../../utils/Store/Connect';
import { Socket } from '../../../utils/Socket';
import template from './Message';
import Button from '../../core/Button';
import Modal from '../../core/Modal';
import ToggleUser from '../ToggleUser';
import cn from 'classnames';
import { handleSubmit, SerializeForm } from "../../../utils/helpers";

import BACK_ICON from '../../../../public/images/icons/back.svg';

interface IMessageProps {
  accessChat: Record<string, any>;
  message?: Record<string, string | number | null> | Record<string, string | number | null>[];
  user?: Record<string, string | number | null>;
  attr?: Record<string, string | number>;
  nameChat?: string;
  dialog?: string | string[];
  selectMedia?: Button;
  sendMessage?: Button;
  addUser?: Button;
  removeUser?: Button;
  modalToggleUser?: Modal;
  countUser: string;
  events?: Record<string, (event: Event) => void>
}

class Message extends Component<IMessageProps> {
  constructor(tag: string, props: IMessageProps) {
    const { accessChat, message, user } = props;

    const socket = Socket(accessChat.chatId, accessChat.token);

    const modalToggleUser = new Modal({
      content: new ToggleUser({
        state: '',
        title: '',
      })
    });
    modalToggleUser.hide();

    const addUser = new Button({
      className: styles.toggleUser,
      value: 'Добавить пользователя',
      theme: 'transparent',
      events: {
        click: () => {
          modalToggleUser.setProps({
            content: new ToggleUser({
              state: 'add',
              title: 'Добавить пользователя',
            })
          });
          modalToggleUser.show();
        }
      }
    });

    const removeUser = new Button({
      className: styles.toggleUser,
      value: 'Удалить пользователя',
      theme: 'transparent',
      events: {
        click: () => {
          modalToggleUser.setProps({
            content: new ToggleUser({
              state: 'delete',
              title: 'Удалить пользователя',
            })
          });
          modalToggleUser.show();
        }
      }
    });

    const selectMedia = new Button({
      className: cn(styles.button, styles.selectMedia),
      value: '+'
    });

    const sendMessage = new Button({
      className: cn(styles.button, styles.sendMessage),
      value: `<img src="${BACK_ICON}" alt="Отправить сообщение" />`,
      events: {
        click: (event) => {
          event.preventDefault();
          const target = event.target as HTMLFormElement;
          const form = target.closest('form');
          const input: HTMLInputElement | null | undefined = form?.querySelector(`.${styles.field}`);

          handleSubmit(target, 'base') && socket?.send(JSON.stringify({
            content: SerializeForm(form!, 'message').message,
            type: 'message',
          }));

          input!.value = ''
        }
      }
    });

    super(tag, {
      attr: {
        class: styles.root
      },
      events: {
        submit: (event) => {
          event.preventDefault();
          const target = event.target as HTMLFormElement;
          const input: HTMLInputElement | null = target.querySelector(`.${styles.field}`);

          handleSubmit(target, 'base') && socket?.send(JSON.stringify({
            content: SerializeForm(target, 'message').message,
            type: 'message',
          }));

          input!.value = ''
        }
      },
      selectMedia,
      sendMessage,
      addUser,
      removeUser,
      nameChat: accessChat.title,
      dialog: '',
      modalToggleUser,
      ...props
    });

    this.props.dialog = this.messageFormatter(message, user)
  }

  private viwLastMessage() {
    const dialog = document.querySelector(`.${styles.dialog}`);
    if (dialog) {
      dialog.scrollTop = dialog.scrollHeight;
    }
  }

  private messageFormatter(message?: IMessageProps['message'], user?: IMessageProps['user']) {
    if (!message || !user) {
      return;
    }

    if (Array.isArray(message)) {
      return message.map((item) => {
        const className = user?.id === item.user_id ? styles.right : styles.left;
        return `<div class="${cn(styles.dialogMessage, className)}">${item.content}</div>`
      }).reverse();
    } else {
      const className = user?.id === message.user_id ? styles.right : styles.left;
      return `<div class="${cn(styles.dialogMessage, className)}">${message.content}</div>`
    }
  }

  componentDidUpdate(oldProps: IMessageProps, newProps: IMessageProps) {
    if (oldProps['message'] !== newProps['message']) {
      const dialog = this.messageFormatter(newProps['message'], newProps['user']);
      if (Array.isArray(dialog) && dialog) {
        this.props.dialog = dialog;
      } else if (dialog) {
        Array.isArray(this.props.dialog) && this.props.dialog.push(dialog);
      }
    }

    this.viwLastMessage();

    return oldProps !== newProps
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    const { selectMedia,
      sendMessage,
      nameChat,
      dialog,
      addUser,
      removeUser,
      modalToggleUser,
      countUser
    } = this.props;

    return this.compile(this.templateNode, {
      selectMedia,
      sendMessage,
      nameChat,
      dialog,
      addUser,
      removeUser,
      modalToggleUser,
      countUser
    });
  }
}

const mapStateToProps = (state: Record<string, any>) => {
  return {
    message: state.message || null,
    user: state.user || null
  };
}

export default connect(Message, mapStateToProps);
