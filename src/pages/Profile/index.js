import * as styles from './Profile.module.scss';

import { LiteComponent } from '../../utils';
import template from './Profile';
import UserDataList from '../../components/block/UserDataList';

const liteComponent = new LiteComponent();

const Profile = () => {
  const profile = liteComponent.compileComponent(template);

  return profile({
    name: 'Ефим',
    userData: UserDataList(styles.Data)
  });
};

export default Profile;
