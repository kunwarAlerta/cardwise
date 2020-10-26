import React from "react";
import { useHistory } from "react-router-dom";
export const NoCard = () => {
  const history = useHistory();
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center ">
          <h3 className="mt-5">Coming Soon</h3>
        </div>
        <div className="col-lg-12 text-center ">
          <div className=" flex-column flex-md-row text-center">
            <button
              onClick={(e) => history.push("/welcome")}
              className="btn btn-lg btn-outline-secondary mb-3 pull-right"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
