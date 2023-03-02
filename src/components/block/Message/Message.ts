import * as styles from './Message.module.scss';
import cn from 'classnames';

const template = `
  {#modalToggleUser#}
  <div class="${cn(styles.Panel, styles.Header)}">
    <div class="${styles.Avatar}">
    </div>
    <span class="${styles.Name}">{#nameChat#}</span>
    <div class="${styles.Control}">
       {#addUser#}
       {#removeUser#}
    </div>
  </div>
  <div class="${styles.Dialog}">
    {#dialog#}
  </div>
  <form class="${cn(styles.Panel, styles.Form)}">
    {#selectMedia#}
    <input class="${styles.Field}" placeholder="Сообщение" type="text" name="message" />
    {#sendMessage#}
  </form>
`;

export default template;
