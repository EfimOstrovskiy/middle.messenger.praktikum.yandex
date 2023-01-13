import * as styles from './Button.module.scss';

import cn from 'classnames';

const template = `
  <button class="${cn(styles.Root, '{#className#}')}">{#value#}</button>
`;

export default template;
