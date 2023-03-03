import * as styles from './Profile.module.scss';

import PROFILE_ICON from '../../../public/images/icons/profile.svg'

const template = `
  <nav class="${styles.menu}">
    {#backProfile#}
  </nav>
  <div class="${styles.profile}">
    <div class="${styles.user}">
      <div class="${styles.photo}">
        <img src="${PROFILE_ICON}" alt="Фото профиля" />
      </div>
      <h4 class="${styles.name}">{#name#}</h4>
      <form class="${styles.form}">
        {#userData#}
        <div class="${styles.control}">
          {#saveData#}
          {#changeData#}
          {#changePassword#}
          {#exit#}
        </div>
      </form>
    </div>
  </div>
`;

export default template;
