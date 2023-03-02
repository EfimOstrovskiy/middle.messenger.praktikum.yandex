import * as styles from './Main.module.scss';

const template = `
  {#modalCreate#}
  <div class="${styles.Chats}">
    <nav class="${styles.ChatsMenu}">
      <div class="${styles.ChatsControl}">
        {#createChat#}
        {#inProfile#}
      </div>
      <input class="${styles.Search}" placeholder="Поиск" type="text" name="search"/>
    </nav>
    {#chatsList#}
  </div>
  <div class="${styles.Message}">
    {#message#}
  </div>
`;

export default template;
