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
  message?: Record<string, any>[];
  user?: Record<string, any>;
  attr?: Record<string, any>;
  nameChat?: string;
  dialog?: any;
  selectMedia?: Button;
  sendMessage?: Button;
  addUser?: Button;
  removeUser?: Button;
  modalToggleUser?: Modal
}

class Message extends Component<IMessageProps> {
  constructor(tag: string, props: IMessageProps) {
    const { accessChat, message, user } = props;

    const socket = Socket(accessChat.chatId, accessChat.token);

    const modalToggleUser = new Modal({
      content: new ToggleUser({
        state: '',
        title: '',
        chatId: accessChat.chatId
      })
    });
    modalToggleUser.hide();

    const addUser = new Button({
      className: styles.ToggleUser,
      value: 'Добавить пользователя',
      theme: 'transparent',
      events: {
        click: () => {
          modalToggleUser.setProps({
            content: new ToggleUser({
              state: 'add',
              title: 'Добавить пользователя',
              chatId: accessChat.chatId
            })
          });
          modalToggleUser.show();
        }
      }
    });

    const removeUser = new Button({
      className: styles.ToggleUser,
      value: 'Удалить пользователя',
      theme: 'transparent',
      events: {
        click: () => {
          modalToggleUser.setProps({
            content: new ToggleUser({
              state: 'delete',
              title: 'Удалить пользователя',
              chatId: accessChat.chatId
            })
          });
          modalToggleUser.show();
        }
      }
    });

    const selectMedia = new Button({
      className: cn(styles.Button, styles.SelectMedia),
      value: '+'
    });

    const sendMessage = new Button({
      className: cn(styles.Button, styles.SendMessage),
      value: `<img src="${BACK_ICON}" alt="Отправить сообщение" />`,
      events: {
        click: (event) => {
          event.preventDefault();
          const target = event.target as HTMLElement;
          const form = target.closest('form');
          const input = form?.querySelector('input');

          handleSubmit(target, 'base') && socket && socket.send(JSON.stringify({
            content: SerializeForm(form, 'message').message,
            type: 'message',
          }));

          if (input) {
            input.value = ''
          }
        }
      }
    });

    super(tag, {
      attr: {
        class: styles.Root
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
    const dialog = document.querySelector(`.${styles.Dialog}`);
    if (dialog) {
      dialog.scrollTop = dialog.scrollHeight;
    }
  }

  private messageFormatter(message: any, user: any) {
    if (!message) {
      return;
    }

    if (Array.isArray(message)) {
      return message.map((item) => {
        const className = user?.id === item.user_id ? styles.Right : styles.Left;
        return `<div class="${cn(styles.DialogMessage, className)}">${item.content}</div>`
      }).reverse();
    } else {
      const className = user?.id === message.user_id ? styles.Right : styles.Left;
      return `<div class="${cn(styles.DialogMessage, className)}">${message.content}</div>`
    }
  }

  componentDidUpdate(oldProps: IMessageProps, newProps: IMessageProps) {
    if (oldProps['message'] !== newProps['message']) {
      const dialog = this.messageFormatter(newProps['message'], newProps['user']);
      if (dialog) {
        if (Array.isArray(dialog)) {
          this.props.dialog = dialog;
        } else {
          this.props.dialog.push(dialog);
        }
      }
    }

    this.viwLastMessage();

    return oldProps['message'] !== newProps['message']
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
      modalToggleUser
    } = this.props;

    return this.compile(this.templateNode, {
      selectMedia,
      sendMessage,
      nameChat,
      dialog,
      addUser,
      removeUser,
      modalToggleUser
    });
  }
}

const mapStateToProps = (state: Record<string, any>) => {
  return {
    message: state.message || null,
    user: state.user || {}
  };
}

export default connect(Message, mapStateToProps);
