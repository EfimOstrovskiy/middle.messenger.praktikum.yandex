import { compileComponent, Component } from '../../../../utils';
import template from './UserDataListItem';

interface IUserDataListItem {
  title: string;
  type: string;
  name: string;
  value: string | number;
  events?: Record<string, (event: Event) => void>;
}

class UserDataListItem extends Component<IUserDataListItem> {
  constructor(props: IUserDataListItem) {
    super(props);
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    console.log('list-item')
    const { title, type, name, value } = this.props;

    return this.compile(this.templateNode, { title, type, name, value });
  }
}

export default UserDataListItem;
