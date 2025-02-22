import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import CardContext from "../../context/CardContext";
import { MainHeader } from "../../layouts/Main/MainHeader";
import { Loader } from "../../utils/Loader/Loader";

export const Redeem = () => {
  const [loading, setLoading] = useState(true);
  const [collectionOptions, setCollectionOptions] = useState({});
  const { cardValue, cardKey, points, setPoints } = useContext(
    CardContext,
  );
  const setRedeemPoints = (value) => {
    setPoints(value);
    localStorage.setItem("points", value);
  };
  const history = useHistory();
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://cardwisetest3-env.eba-kk7hgqrd.us-east-2.elasticbeanstalk.com/findPoints/${cardKey}`,
      )
      .then((res) => {
        setCollectionOptions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [cardKey, points]);

  return (
    <React.Fragment>
      <MainHeader />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="col-lg-6 col-md-6 pull-left  np">
              <div
                className="boxes padding"
                onClick={() =>
                  history.push(`/managepoints/collectpoints/${cardKey}`)}
              >
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
            <p className="lead mt-2">
              Your Card: {cardValue}
              {" "}
              <button
                type="button"
                onClick={() => history.push("/selectcard")}
                className="btn btn-lg btn-bd-primary  mr-md-3"
              >
                <span>
                  {" "}
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                  {" "}
                  Change
                </span>
              </button>
            </p>
            <p className="lead">
              <a href="!#" data-toggle="modal" data-target="#redeemModal">
                Click here if you don’t know
              </a>
            </p>
            <div className=" flex-column flex-md-row text-center">
              <form
                onSubmit={() =>
                  history.push("/managepoints/redemption_options")}
              >
                <input
                  type="number"
                  min={1}
                  max={10000000}
                  className="input-design w-320 mr-2"
                  placeholder="Enter Here"
                  onChange={(e) => setRedeemPoints(e.target.value)}
                  defaultValue={points}
                  required
                />
                <button
                  type="submit"
                  className="btn btn-lg btn-outline-secondary mb-3 w-320 mt-7"
                >
                  View Redemption Options
                </button>
              </form>
            </div>
          </div>
          <div className="modal" id="redeemModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    How to check your points:
                  </h4>
                  <button type="button" className="close" data-dismiss="modal">
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <ul>
                    {loading
                      ? <Loader />
                      : collectionOptions.map((collectoption) => (
                        <li key={collectoption.collection_option}>
                          {collectoption.collection_option}
                        </li>
                      ))}
                  </ul>
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
    </React.Fragment>
  );
};
