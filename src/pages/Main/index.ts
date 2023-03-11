import styles from './Main.module.scss';

import { compileComponent, Component } from '../../utils';
import { connect } from '../../utils/Store/Connect';
import { router } from '../../utils/Router';
import { declination } from '../../utils/helpers/declination';
import template from './Main';
import ChatList from '../../components/block/ChatList';
import Button from '../../components/core/Button';
import Modal from '../../components/core/Modal';
import CreateChat from '../../components/block/CreateChat';
import Message from '../../components/block/Message';
import SearchChat from '../../components/block/SearchChat';

import ARROW_ICON from '../../../public/images/icons/arrow.svg';

interface IMain {
  attr?: Record<string, string | number>;
  chats?: Record<string, any>;
  activeChat?: Record<string, any>;
  modalCreate?: Modal;
  message?: Component | string;
  chatsList?: ChatList[];
  inProfile?: Button;
  createChat?: Button;
  searchChat?: SearchChat
}

class Main extends Component<IMain> {
  constructor(tag: string, props: IMain = {}) {
    const modalCreate = new Modal({
      content: new CreateChat({
        modalClose: () => {
          modalCreate.hide();
        }
      })
    });
    modalCreate.hide();

    const createChat = new Button({
      className: styles.select,
      value: `<span class="${styles.selectText}">Создать чат</span>`,
      theme: 'transparent',
      type: 'button',
      events: {
        click: () => modalCreate.show()
      }
    });

    const inProfile = new Button({
      className: styles.select,
      value: `
        <span class="${styles.selectText}">Профиль</span>
        <img src="${ARROW_ICON}" alt="В профиль" />
      `,
      theme: 'transparent',
      type: 'button',
      events: {
        click: () => router.go('/profile')
      }
    });

    const chatListInit = props.chats?.map((chat: Record<string, any>) => {
      const { title, last_message } = chat;
      return { nameChat: title, lastMessage: last_message ? last_message.content : 'Нет сообщений' };
    })

    const chatsList = chatListInit.map((chat: Record<string, any>) => {
      const { nameChat, lastMessage } = chat
      return new ChatList({ nameChat, lastMessage });
    });

    const message = 'Выберите чат чтобы отправить сообщение';

    const searchChat = new SearchChat();

    super(tag,{
      attr: {
        class: styles.root
      },
      modalCreate,
      createChat,
      inProfile,
      chatsList: !chatsList.length ? '' : chatsList,
      message,
      searchChat,
      ...props
    });
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  componentDidUpdate(oldProps: IMain, newProps: IMain): boolean {
    if (oldProps['activeChat'] !== newProps['activeChat'] && newProps['activeChat']) {
      const countUser = newProps['activeChat']?.users.length;

      this.children.message = new Message('div',{
        accessChat: newProps['activeChat'],
        countUser: `${countUser} ${declination(countUser, ['участник', 'участника', 'участников'])}`
      });
    }

    if (oldProps['chats'] !== newProps['chats'] && newProps['chats']) {
      if (Array.isArray(newProps['chats'])) {
        const chatListInit = newProps['chats'].map((chat: Record<string, any>) => {
          const { title, last_message } = chat;
          return {
            nameChat: title,
            lastMessage:  last_message ? last_message.content : 'Нет сообщений'
          };
        });

        this.children.chatsList = chatListInit.map((chat: Record<string, any>) => {
          const { nameChat, lastMessage } = chat
          return new ChatList({ nameChat, lastMessage });
        });
      }
    }

    return oldProps !== newProps;
  }

  render() {
    const { createChat,
      message,
      modalCreate,
      inProfile,
      chatsList,
      searchChat
    } = this.props;

    return this.compile(this.templateNode, {
      createChat,
      message,
      modalCreate,
      inProfile,
      chatsList,
      searchChat
    })
  }
}

const mapStateToProps = (state: Record<string, any>) => {
  return {
    chats: state.chats || null,
    activeChat: state.activeChat || null,
  }
}

export default connect(Main, mapStateToProps);
