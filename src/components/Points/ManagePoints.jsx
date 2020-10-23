import React from "react";
export const Managepoints = ({ currentCard }) => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <div className="col-lg-6 col-md-6 pull-left  np">
          <div className="boxes padding">
            <h5>
              <div className="img" />
              Collect Points
            </h5>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 pull-right np">
          <div className="boxes padding active">
            <h5>
              <div className="img1" />
              Redeem Points
            </h5>
          </div>
        </div>
      </div>
      <div className="col-lg-12 text-center ">
        <h3 className="mt-5">How many points do you have?</h3>
        <p className="lead">
          Your Card : {currentCard}
        </p>
        <p className="lead">
          <a href="!#" data-toggle="modal" data-target="#redeemModal">
            Click here if you don’t know
          </a>
        </p>
        <div className=" flex-column flex-md-row text-center">
          <input
            type="text"
            className="input-design w-320 mr-2"
            placeholder="Enter Here"
          />
          <a
            href="04.html"
            className="btn btn-lg btn-outline-secondary mb-3 w-320 mt-7"
          >
            View Redemption Options
          </a>
        </div>
      </div>
      <div className="modal" id="redeemModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-body">
              <span>Go to Netbanking</span>
              <br />
              <span>Click on manage points</span>
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
  </div>
);
