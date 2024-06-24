import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/middle.css';  // Custom CSS file for additional
import { Link } from 'react-router-dom';


  // Custom CSS file for additional styling

function WelcomeContent() {
  return (
    <div className="welcome-content d-flex flex-column justify-content-center align-items-center text-center">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Build Your Future. Build Your Dream.</h1>
          <p className="lead">
          If one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Get Job</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4" content="black">Post Job</button>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        </div>
      </div>
    </div>
  );
}

export default WelcomeContent;
