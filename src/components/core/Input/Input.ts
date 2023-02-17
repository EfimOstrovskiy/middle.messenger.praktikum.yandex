import * as styles from './Input.module.scss';

const template = `
  <label class="${styles.Label}">{#placeholder#}</label>
  <input type="{#type#}" class="${styles.Input}" name="{#name#}" value="{#value#}" />
  <span class="${styles.Error}"></span>
`;

export default template;
