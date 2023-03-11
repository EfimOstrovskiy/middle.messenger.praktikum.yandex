import styles from './ChatList.module.scss';

import PROFILE_ICON from '../../../../public/images/icons/profile.svg';

const template = `
  <div class="${styles.icon}">
    <img src="${PROFILE_ICON}" alt="Фото профиля" />
  </div>
  <div class="${styles.description}">
    <span class="${styles.nameChat}" data-name="{#dataNameChat#}">{#nameChat#}</span>
    <span class="${styles.lastMessage}">{#lastMessage#}</span>
  </div>
`;

export default template;
