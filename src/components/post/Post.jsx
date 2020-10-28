import React from 'react';
import cx from 'classnames';
import './Post.scss';

export class Post extends React.PureComponent {
  render() {
    const {
      title,
      content,
      src,
      imageFirst,
    } = this.props;
    const classNames = cx(
      'post',
      'd-flex',
      'p-1',
      'flex-column',
      'flex-lg-row',
      'justify-content-center',
      'align-items-center',
      imageFirst && 'flex-lg-row-reverse',
    );
    return (
      <article
        className={classNames}
      >
        <section
          className="d-flex flex-column justify-content-center align-items-start"
        >
          <h3 className="text-left text-secondary p-0">{title}</h3>
          <p className="text-left text-muted">{content}</p>
        </section>
        <figure>
          <img className={cx('post__img', imageFirst ? 'mr-lg-4' : 'ml-lg-4')} src={src} alt="post" />
        </figure>
      </article>
    );
  }
}
