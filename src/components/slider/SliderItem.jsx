import React from 'react';
import cx from 'classnames';
import { Button } from '../button';

export class SliderItem extends React.PureComponent {
  render() {
    const {
      src,
      active,
      title,
      content,
    } = this.props;
    return (
      <article className={cx('slide-item', 'carousel-item', 'position-relative', active && ' active')}>
        <img className="d-block w-100" src={src} alt="First slide" />
        <section className="slider-content">
          <section className="slider-content__container">
            <h3>{title}</h3>
            <span>{content}</span>
            <Button size="md">Sign up today</Button>
          </section>
        </section>
      </article>
    );
  }
}
