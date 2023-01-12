import styles from './Profile.module.scss';

import Button from '../../components/core/Button';
import cn from 'classnames';
import BACK_ICON from '../../../public/images/icons/back.svg';
import PROFILE_ICON from '../../../public/images/icons/profile.svg'

const template = `
  <div class="${styles.Root}">
    <nav class="${styles.Menu}">
      ${Button(styles.Cancel, `<img src="${BACK_ICON}" alt="" />`)}
    </nav>
    <div class="${styles.Profile}">
      <div class="${styles.User}">
        <div class="${styles.Photo}">
          <img src="${PROFILE_ICON}" alt="" />
        </div>
        <h4 class="${styles.Name}">{#name#}</h4>
        {#userData#}
        <ul class="${styles.ControlList}">
          <li class="${styles.ControlItem}">
            ${Button(styles.Button, 'Изменить данные', 'transparent')}
          </li>
          <li class="${styles.ControlItem}">
            ${Button(styles.Button, 'Изменить пароль', 'transparent')}
          </li>
          <li class="${styles.ControlItem}">
            ${Button(cn(styles.Exit, styles.Button), 'Выйти', 'transparent')}
          </li>
        </ul>
      </div>
    </div>
  </div>
`;

export default template;
