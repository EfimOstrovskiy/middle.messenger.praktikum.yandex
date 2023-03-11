import styles from './Input.module.scss';

const template = `
  <label class="${styles.label}">{#placeholder#}</label>
  <input type="{#type#}" class="${styles.input}" name="{#name#}" value="{#value#}" {#readonly#} />
  <span class="${styles.error}"></span>
`;

export default template;
