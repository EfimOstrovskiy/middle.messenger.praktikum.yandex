import * as styles from './Main.module.scss';

import ARROW_ICON from '../../../public/images/icons/arrow.svg';

const adMessage = `
  <p class="${styles.AdText}">Окно чата со списком чатов появится чуть позже, 
  а пока можете посмотреть какие страницы уже есть:)</p>
  <nav>
    <ul class="${styles.AdList}">
      <li class="${styles.AdItem}"><a href="/login" class="${styles.AdLink}">Login</a></li>
      <li class="${styles.AdItem}"><a href="/sign_in" class="${styles.AdLink}">SignIn</a></li>
      <li class="${styles.AdItem}"><a href="/profile" class="${styles.AdLink}">Profile</a></li>
      <li class="${styles.AdItem}"><a href="/price" class="${styles.AdLink}">NotFound</a></li>
      <li class="${styles.AdItem}"><a href="/server_error" class="${styles.AdLink}">ServerError</a></li>
    </ul>
  </nav>
`;

const template = `
  <div class="${styles.Root}">
    <div class="${styles.Chats}">
      <nav class="${styles.ChatsMenu}">
        <button class="${styles.SelectProfile}">
          <span class="${styles.SelectText}">Профиль</span>
          <img src="${ARROW_ICON}" alt="В профиль" />
        </button>
        <input class="${styles.Search}" placeholder="Поиск" type="text"/> 
      </nav>
      {#chatsList#}
    </div>
    <div class="${styles.Dialog}">
      ${adMessage}
    </div>
  </div>
`;

export default template;
