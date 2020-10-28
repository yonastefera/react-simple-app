import React, {PureComponent} from 'react';
import { Button } from '../button';
import './AdsPanel.scss';

export class AdsPanel extends PureComponent {
  render() {
    const {
      title,
      content,
      src,
    } = this.props;
    return (
      <article className="ads-panel">
        <figure
          className="ads-panel__img"
        >
          <img className="rounded-circle" src={src} alt="ads" />
        </figure>
        <h3 className="text-secondary">{title}</h3>
        <p className="text-muted">{content}</p>
        <Button styleType="secondary">View details &#187;</Button>
      </article>
    );
  }
}
