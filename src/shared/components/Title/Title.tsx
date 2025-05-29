import { RefObject } from 'react';

import styles from './Title.module.scss';

interface TitleProps {
  title: string;
  id?: string;
  ref?: RefObject<HTMLHeadingElement>;
}

const Title = ({ title, id, ref }: TitleProps): JSX.Element => (
  <h2 id={id} ref={ref} tabIndex={0}>
    <span className={styles.title_span}>{title.charAt(0)}</span>
    {title.slice(1)}
  </h2>
);

export default Title;
