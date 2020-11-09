import React from "react";
export const MainHeader = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div className="container">
      <a className="navbar-brand" href="/managepoints/redeem">
        Cardwise
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a
              className="nav-link"
              href="!#"
              data-toggle="modal"
              data-target="#bestCard"
            >
              Manage Points
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="!#"
              className="nav-link"
              data-toggle="modal"
              data-target="#bestCards"
            >
              Best Card For You
            </a>
          </li>
          <li className="nav-item">
            <a
              href="!#"
              className="nav-link"
              data-toggle="modal"
              data-target="#otherCardBenefits"
            >
              Other Card Benefits
            </a>
          </li>
          <li className="nav-item">
            <a
              href="!#"
              className="nav-link"
              data-toggle="modal"
              data-target="#about"
            >
              About
            </a>
          </li>
        </ul>
      </div>
      <div className="modal" id="bestCards">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                Best Card For You:
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-body">
              We are working on this
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id="otherCardBenefits">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                Other Card Benefits:
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-body">
              We are working on this
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id="about">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                About:
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-body">
              We are working on this
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
