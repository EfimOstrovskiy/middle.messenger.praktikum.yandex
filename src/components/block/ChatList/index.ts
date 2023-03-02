import * as styles from './ChatList.module.scss';

import { compileComponent, Component } from '../../../utils';
import { activeChat } from '../../../utils/Store/actions/activeChat';
import template from './ChatList';

interface IChatListProps {
  nameChat: string;
  lastMessage: string;
  attr?: Record<string, any>
  events?: Record<string, (event: Event) => void>
}

class ChatList extends Component<IChatListProps> {
  constructor(props: IChatListProps) {
    super('div', {
      attr: {
        class: styles.Root
      },
      events: {
        click: (event) => {
          const target = event.target as HTMLElement;
          const parent = target.parentElement
          parent && parent.querySelectorAll('div')
            .forEach(node => node.classList.remove(styles.Active));
          target.classList.add(styles.Active);

          props.nameChat && activeChat(props.nameChat)
        }
      },
      ...props
    });
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    const { nameChat, lastMessage } = this.props;

    return this.compile(this.templateNode, { nameChat, lastMessage });
  }
}

export default ChatList;
