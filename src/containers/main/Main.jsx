import React from 'react';
import {
  Header,
  Slider,
  AdsPanel,
  Post,
} from '../../components';
import './Main.scss';
import { imgSrc } from '../../constants';

const fakeContent = {
  title: 'What is Lorem Ipsum?',
  content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
};

const App = () => (
  <main className="container app" id="page_top">
    <Header />
    <Slider />
    <section className="row justify-content-center">
      <section className="col-11 col-md-10 col-lg-9  app__content">
        <section
          className="d-flex flex-column flex-lg-row justify-content-center align-items-center"
        >
          <AdsPanel
            title={fakeContent.title}
            content={fakeContent.content}
            src={imgSrc}
          />
          <AdsPanel
            title={fakeContent.title}
            content={fakeContent.content}
            src={imgSrc}
          />
          <AdsPanel
            title={fakeContent.title}
            content={fakeContent.content}
            src={imgSrc}
          />
        </section>
        <hr className="app__separator" />
        <section
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <Post
            title={fakeContent.title}
            content={fakeContent.content}
            src={imgSrc}
          />
          <hr className="app__separator" />
          <Post
            title={fakeContent.title}
            content={fakeContent.content}
            src={imgSrc}
            imageFirst
          />
          <hr className="app__separator" />
          <Post
            title={fakeContent.title}
            content={fakeContent.content}
            src={imgSrc}
          />
          <hr className="app__separator" />
        </section>
      </section>
      <footer className="col-11 col-md-10 col-lg-9 d-flex flex-row align-items-start justify-content-between pb-3">
        <section className="d-flex flex-row align-items-start app__footer-list">
          <div className="footer-copyright text-center text-secondary">
                © 2018 Copyright: Company, inc.
          </div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </section>
        <a href="#page_top">back to top</a>
      </footer>
    </section>
  </main>
);

export default App;
