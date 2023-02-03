import { compileComponent, Component } from '../../../utils';
import template from './UserDataList';
import UserDataListItem from './UserDataListItem';

interface IUserDataListProps {
  className: string;
  items?: UserDataListItem | UserDataListItem[]
}

const itemsInit = [
  { title: 'Почта', type: 'text', name: 'email', value: 'admin@mail.ru' },
  { title: 'Логин', type: 'text', name: 'login', value: 'admin' },
  { title: 'Имя', type: 'text', name: 'first_name', value: 'Ефим' },
  { title: 'Фамилия', type: 'text', name: 'second_name', value: 'Островский' },
  { title: 'Имя в чате', type: 'text', name: 'display_name', value: 'RuMIN' },
  { title: 'Телефон', type: 'text', name: 'phone', value: '+7(999)395-55-35' },
];

class UserDataList extends Component<IUserDataListProps> {
  constructor(props: IUserDataListProps) {
    const items = itemsInit.map((item) => {
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
