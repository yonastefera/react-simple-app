import React from 'react';
import $ from 'jquery';
import { SliderItem } from './SliderItem';
import './Slider.scss';

const fakeContent = {
  title: 'What is Lorem Ipsum?',
  content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  src: 'https://sites.google.com/a/pressatgoogle.com/mooningoogleearth/_/rsrc/1247886477794/home/google-space-products/Google%20Sky%20for%20site.jpg?height=242&width=420',
};

export class Slider extends React.PureComponent {
  componentDidMount() {
    $('.carousel').carousel();
  }

  componentWillUnmount() {
    $('.carousel').carousel('pause');
  }

  render() {
    return (
      <div id="carouselControls" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <SliderItem
            src={fakeContent.src}
            title={fakeContent.title}
            content={fakeContent.content}
            active
          />
          <SliderItem
            src={fakeContent.src}
            title={fakeContent.title}
            content={fakeContent.content}
          />
          <SliderItem
            src={fakeContent.src}
            title={fakeContent.title}
            content={fakeContent.content}
          />
        </div>
        <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
