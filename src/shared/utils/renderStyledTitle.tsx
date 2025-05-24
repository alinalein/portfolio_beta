import { RefObject } from 'react';

interface renderStyledTitleProps {
  title: string;
  id?: string;
  ref?: RefObject<HTMLHeadingElement>;
}

const renderStyledTitle = ({ title, id, ref }: renderStyledTitleProps): JSX.Element => (
  <h2 id={id} ref={ref} tabIndex={0}>
    <span className="span_title">{title.charAt(0)}</span>
    {title.slice(1)}
  </h2>
);

export default renderStyledTitle;
