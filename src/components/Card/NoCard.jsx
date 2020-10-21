import React from "react";

export const NoCard = ({ setStep }) => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center ">
        <h3 className="mt-5">Coming Soon</h3>
      </div>
      <div class="col-lg-12 text-center ">
        <div class=" flex-column flex-md-row text-center">
          <button
            onClick={(e) => setStep(1)}
            class="btn btn-lg btn-outline-secondary mb-3 pull-right"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  </div>
);
