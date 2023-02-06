import { compileComponent, Component } from '../../../utils';
import template from './ChatList';

interface IChatListProps {
  nameChat: string;
  lastMessage: string
}

class ChatList extends Component<IChatListProps> {
  constructor(props: IChatListProps) {
    super(props);
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
