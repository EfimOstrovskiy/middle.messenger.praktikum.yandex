import * as styles from './Error.module.scss';

const template = `
  <h1 class="${styles.Title}">{#codeError#}</h1>
  <h3 class="${styles.SubTitle}">{#textError#}</h3>
  {#back#}
`;

export default template;
