import React from 'react';

const renderStyledTitle = (title: string, style?: React.CSSProperties): JSX.Element => (
    <h2>
        <span className="span_title">{title.charAt(0)}</span>
        {title.slice(1)}
    </h2>
);

export default renderStyledTitle;
