import styles from './Error.module.scss';

import Button from '../../core/Button';

const template = `
  <div class="${styles.Root}">
    <h1 class="${styles.Title}">{#codeError#}</h1>
    <h3 class="${styles.SubTitle}">{#textError#}</h3>
    ${Button(styles.Back, 'Назад к чатам', 'transparent')}
  </div>
`;

export default template;
