import { LiteComponent } from '../../../utils';
import template from './UserDataList';
import UserDataListItem from './UserDataListItem';

const liteComponent = new LiteComponent();

const UserDataList = (className) => {
  const userDataList = liteComponent.compileComponent(template);

  const itemsInit = [
    { title: 'Почта', type: 'text', name: 'email', value: 'admin@mail.ru' },
    { title: 'Логин', type: 'text', name: 'login', value: 'admin' },
    { title: 'Имя', type: 'text', name: 'first_name', value: 'Ефим' },
    { title: 'Фамилия', type: 'text', name: 'second_name', value: 'Островский' },
    { title: 'Имя в чате', type: 'text', name: 'display_name', value: 'RuMIN' },
    { title: 'Телефон', type: 'text', name: 'phone', value: '+7(999)395-55-35' },
  ];
  const items = itemsInit.map((item) => {
    const { title, type, name, value } = item;
    return UserDataListItem(title, type, name, value);
  });

  return userDataList({
    className,
    items
  });
};

export default UserDataList;
