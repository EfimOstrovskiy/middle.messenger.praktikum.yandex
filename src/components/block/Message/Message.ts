import * as styles from './Message.module.scss';
import cn from 'classnames';

const template = `
  {#modalToggleUser#}
  <div class="${cn(styles.panel, styles.header)}">
    <div class="${styles.avatar}">
    </div>
    <span class="${styles.name}">{#nameChat#}</span>
    <span class="${styles.count}">{#countUser#}</span>
    <div class="${styles.control}">
       {#addUser#}
       {#removeUser#}
    </div>
  </div>
  <div class="${styles.dialog}">
    {#dialog#}
  </div>
  <form class="${cn(styles.panel, styles.form)}">
    {#selectMedia#}
    <input class="${styles.field}" placeholder="Сообщение" type="text" name="message" />
    {#sendMessage#}
  </form>
`;

export default template;
