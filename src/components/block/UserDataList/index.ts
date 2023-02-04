import { compileComponent, Component } from '../../../utils';
import template from './UserDataList';
import UserDataListItem from './UserDataListItem';

interface IUserDataListProps {
  className: string;
  itemsInit: Record<string, string>[];
  items?: UserDataListItem | UserDataListItem[]
}

class UserDataList extends Component<IUserDataListProps> {
  constructor(props: IUserDataListProps) {
    const items = props.itemsInit.map((item) => {
      const { title, type, name, value } = item;
      return new UserDataListItem({ title, type, name, value }) ;
    });

    super({ items, ...props});
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    const { className, items } = this.props;

    return this.compile(this.templateNode, { className, items })
  }
}

export default UserDataList;
