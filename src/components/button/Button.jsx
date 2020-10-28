import React from 'react';

export class Button extends React.PureComponent {
  render() {
    const {
      children,
      styleType = 'primary',
      size = 'sm',
      ...rest
    } = this.props;
    return (
      <button
        type="button"
        className={`btn btn-${styleType} btn-${size}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
}
