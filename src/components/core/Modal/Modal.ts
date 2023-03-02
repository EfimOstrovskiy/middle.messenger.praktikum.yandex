import * as styles from './Modal.module.scss';

const template = `
  <div class="${styles.Content}">
    {#close#}
    {#content#}
  </div>
`;

export default template;
