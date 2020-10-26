import React from "react";
import { useHistory } from "react-router-dom";

export const Welcome = () => {
  const history = useHistory();
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center ">
          <h3 className="mt-5">
            Cardwise helps you make the most of credit card reward points plan!
            <br />
            Let's get you started.
          </h3>
          <p className="lead mt-5">Do you own a credit card?</p>
          <div className="col-md-4 offset-md-4">
            <div className=" flex-column flex-md-row text-center">
              <button
                className="btn btn-lg btn-outline-secondary mb-3 mr-md-3"
                onClick={(e) => history.push("/selectcard")}
              >
                Yes
              </button>
              <button
                className="btn btn-lg btn-outline-secondary mb-3"
                onClick={(e) => history.push("/nocard")}
              >
                No - Don’t worry we can help you too!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
