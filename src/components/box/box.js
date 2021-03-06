import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Box = ({
  children,
  className,
  style,
  renderAs,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames('box', className)}
    >
      {children}
    </Element>
  );
};

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.string,
};

Box.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default Box;
