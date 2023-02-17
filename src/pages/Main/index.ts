import * as styles from './Main.module.scss';

import { compileComponent, Component } from '../../utils';
import template from './Main';
import ChatList from '../../components/block/ChatList';
import Button from '../../components/core/Button';
import cn from 'classnames';
import { handleSubmit } from '../../utils/helpers';

import BACK_ICON from '../../../public/images/icons/back.svg';


interface IMain {
  attr?: Record<string, any>;
  chatsList?: ChatList[];
  selectMedia?: Button;
  sendMessage?: Button
}

const chatListInit = [
  { nameChat: 'Поход на речку', lastMessage: 'Завтра все в силе. Ркбят у кто на машине, заберите пожалуйста'},
  { nameChat: 'Работа', lastMessage: 'Созвонимся завтра, после утреннго дейлика'},
  { nameChat: `Gachi Meme's`, lastMessage: 'oh my..)'},
  { nameChat: 'World News', lastMessage: 'Далеко за  горами в стране гласных и согласных живут рыбные тексты'},
  { nameChat: 'Владимир', lastMessage: 'Ну че там с деньгами?'},
];

class Mains extends Component<IMain> {
  constructor(props: IMain = {}) {
    const chatsList = chatListInit.map((chat) => {
      const { nameChat, lastMessage } = chat
      return new ChatList({ nameChat, lastMessage });
    });
    const selectMedia = new Button({
      className: cn(styles.Button, styles.SelectMedia),
      value: '+' });
    const sendMessage = new Button({
      className: cn(styles.Button, styles.SendMessage),
      value: `<img src="${BACK_ICON}" alt="Отправить сообщение" />`,
      events: {
        click: (event) => {
          event.preventDefault();
          const target = event.target as HTMLElement;

          handleSubmit(target, 'base');
        }
      }
    });

    super('div',{
      attr: {
        class: styles.Root
      },
      chatsList,
      selectMedia,
      sendMessage,
      ...props
    });
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    const { chatsList } = this.props;

    return this.compile(this.templateNode, { chatsList })
  }
}

export default Mains;
