import * as styles from './Error.module.scss';

const template = `
  <h1 class="${styles.title}">{#codeError#}</h1>
  <h3 class="${styles.subTitle}">{#textError#}</h3>
  {#back#}
`;

export default template;
