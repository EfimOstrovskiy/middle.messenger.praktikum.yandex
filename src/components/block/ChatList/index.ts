import * as styles from './ChatList.module.scss';

import { compileComponent, Component } from '../../../utils';
import template from './ChatList';

interface IChatListProps {
  nameChat: string;
  lastMessage: string;
  attr?: Record<string, any>
}

class ChatList extends Component<IChatListProps> {
  constructor(props: IChatListProps) {
    super('div', {
      attr: {
        class: styles.Root
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
