import * as styles from './UserDataList.module.scss';

import cn from 'classnames';

const template = `
  <ul class="${cn(styles.Root, '{#className#}')}">
    {#items#}
  </ul>
`;

export default template;
