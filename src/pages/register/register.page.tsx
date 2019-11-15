// courtesy of https://codepen.io/jebbles/pen/MKoYya

import React, { useState, useEffect } from 'react';
import './register.styles.scss';
import logoImage from '../../assets/images/logo1.png';

const RegisterPage = () => {
  const [showPage, setShowPage] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const maxPageIndex = 4;

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 400);
  }, []);

  const nextPage = () => {
    if (pageIndex < maxPageIndex) {
      setPageIndex(pageIndex + 1);
    }
  };

  const prevPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };
  
  return (
    <div className="oboarding-page">
      <div className={`walkthrough${showPage ? ' show' : ''}`}>
        <div className="walkthrough-pagination">
          <span className={`dot${pageIndex === 0 ? ' active' : ''}`} />
          <span className={`dot${pageIndex === 1 ? ' active' : ''}`} />
          <span className={`dot${pageIndex === 2 ? ' active' : ''}`} />
          <span className={`dot${pageIndex === 3 ? ' active' : ''}`} />
          <span className={`dot${pageIndex === 4 ? ' active' : ''}`} />
        </div>
        <div className="walkthrough-body">
          <ul className="screens animate">
            <li className={`screen${pageIndex === 0 ? ' active' : ''}`}>
              <div className="media logo">
                <img alt="peili-logo" className="logo" src={logoImage} />
              </div>
              <h3>
                Welcome to Peili
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </li>
            <li className={`screen${pageIndex === 1 ? ' active' : ''}`}>
              <div className="media books">
                <img alt="icon" className="icon" src="https://s3.amazonaws.com/jebbles-codepen/book_icon_1.png" />
                <img alt="icon" className="icon" src="https://s3.amazonaws.com/jebbles-codepen/book_icon_2.png" />
                <img alt="icon" className="icon" src="https://s3.amazonaws.com/jebbles-codepen/book_icon_3.png" />
              </div>
              <h3>
                Data and File Management
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </li>
            <li className={`screen${pageIndex === 2 ? ' active' : ''}`}>
              <div className="media bars">
                <img alt="icon" className="icon" src="https://s3.amazonaws.com/jebbles-codepen/bar_icon_axis.png" />
                <img alt="icon" className="icon" src="https://s3.amazonaws.com/jebbles-codepen/bar_icon_3.png" />
                <img alt="icon" className="icon" src="https://s3.amazonaws.com/jebbles-codepen/bar_icon_2.png" />
                <img alt="icon" className="icon" src="https://s3.amazonaws.com/jebbles-codepen/bar_icon_1.png" />
              </div>
              <h3>
                Analytics and Metrics
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </li>
            <li className={`screen${pageIndex === 3 ? ' active' : ''}`}>
              <div className="media files">
                <img alt="icon" className="icon" src="https://s3.amazonaws.com/jebbles-codepen/file_icon_1.png" />
                <img alt="icon" className="icon" src="https://s3.amazonaws.com/jebbles-codepen/file_icon_2.png" />
                <img alt="icon" className="icon" src="https://s3.amazonaws.com/jebbles-codepen/file_icon_3.png" />
                <img alt="icon" className="icon" src="https://s3.amazonaws.com/jebbles-codepen/file_icon_4.png" />
              </div>
              <h3>
                Reporting and Insights
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </li>
            <li className={`screen${pageIndex === 4 ? ' active' : ''}`}>
              <div className="media comm">
                <img alt="icon" className="icon" src="https://s3.amazonaws.com/jebbles-codepen/comm_icon_1.png" />
                <img alt="icon" className="icon" src="https://s3.amazonaws.com/jebbles-codepen/comm_icon_2.png" />
              </div>
              <h3>
                Communications Tools
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </li>
          </ul>
          <button className="prev-screen" disabled={pageIndex === 0} onClick={prevPage}>
            <i className="material-icons">keyboard_arrow_left</i>
          </button>
          <button className="next-screen" disabled={pageIndex === maxPageIndex} onClick={nextPage}>
            <i className="material-icons">keyboard_arrow_right</i>
          </button>
        </div>
        <div className="walkthrough-footer">
          <button className="button next-screen" onClick={nextPage}>Next</button>
          <button className="button finish close" disabled={true}>
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
