import styles from './Main.module.scss';

const template = `
  {#modalCreate#}
  <div class="${styles.chats}">
    <nav class="${styles.chatsMenu}">
      <div class="${styles.chatsControl}">
        {#createChat#}
        {#inProfile#}
      </div>
      {#searchChat#}
    </nav>
    {#chatsList#}
  </div>
  <div class="${styles.message}">
    {#message#}
  </div>
`;

export default template;
