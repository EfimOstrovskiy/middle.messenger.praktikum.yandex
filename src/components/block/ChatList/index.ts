import styles from './ChatList.module.scss';

import { compileComponent, Component } from '../../../utils';
import { activeChat } from '../../../utils/Store/actions/activeChat';
import template from './ChatList';

interface IChatListProps {
  nameChat: string;
  lastMessage: string;
  attr?: Record<string, string | number>
  events?: Record<string, (event: Event) => void>
}

class ChatList extends Component<IChatListProps> {
  constructor(props: IChatListProps) {
    super('div', {
      attr: {
        class: styles.root
      },
      events: {
        click: (event) => {
          const target = event.currentTarget as HTMLElement;
          const parent = target.parentElement;
          const searchField: HTMLInputElement | null = document.querySelector('[name="search"]');

          parent?.querySelectorAll(`.${styles.root}`)
            .forEach(node => node.classList.remove(styles.active));

          target.classList.add(styles.active);

          activeChat(props.nameChat).then(() => {
            const titles = document.querySelectorAll('[data-name]');

            searchField!.value = '';
            titles.forEach(title => {
              title?.parentElement?.parentElement?.classList.remove('hide');
            });
          }).catch(error => console.error(error));
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

    return this.compile(this.templateNode, { nameChat, lastMessage, dataNameChat: nameChat });
  }
}

export default ChatList;
