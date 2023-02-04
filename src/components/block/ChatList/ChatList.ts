import * as styles from './ChatList.module.scss';

import PROFILE_ICON from '../../../../public/images/icons/profile.svg';

const template = `
  <div class="${styles.Root}">
    <div class="${styles.Icon}">
      <img src="${PROFILE_ICON}" alt="Фото профиля" />
    </div>
    <div class="${styles.Description}">
      <span class="${styles.NameChat}">{#nameChat#}</span>
      <span class="${styles.LastMessage}">{#lastMessage#}</span>
    </div>
  </div>
`;

export default template;
