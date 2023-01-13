import { LiteComponent } from '../../../../utils';
import template from './UserDataListItem';

const listComponent = new LiteComponent();

const UserDataListItem = (title, type, name, value) => {
  const userDataListItem = listComponent.compileComponent(template);

  return userDataListItem({
    title,
    type,
    name,
    value
  });
};

export default UserDataListItem;
