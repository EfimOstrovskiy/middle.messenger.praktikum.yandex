import * as styles from './Error.module.scss';

const template = `
  <div class="${styles.Root}">
    <h1 class="${styles.Title}">{#codeError#}</h1>
    <h3 class="${styles.SubTitle}">{#textError#}</h3>
    {#back#}
  </div>
`;

export default template;
