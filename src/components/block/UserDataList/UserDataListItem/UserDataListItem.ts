import * as styles from './UserDataListItem.module.scss';

const template = `
  <li class="${styles.Root}">
    <label class="${styles.Label}">{#title#}</label>
    <input class="${styles.Input}" type="{#type#}" name="{#name#}" value="{#value#}" readonly />
    <span class="${styles.Error}"></span>
  </li>
`;

export default template;
