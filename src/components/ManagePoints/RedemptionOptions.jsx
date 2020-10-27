import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CardContext from "../../context/CardContext";
import axios from "axios";
import { Loader } from "../../utils/Loader/Loader";

export const RedemptionOptions = () => {
  const { cardValue, cardKey, points } = useContext(
    CardContext,
  );
  const [loading, setLoading] = useState(true);
  const [redemptionOptions, setRedemptionOptions] = useState({});
  const history = useHistory();
  useEffect(() => {
    setLoading(true);
    console.log(cardKey);
    console.log(points);
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://cardwisetest3-env.eba-kk7hgqrd.us-east-2.elasticbeanstalk.com/redeem/${cardKey}/${points}`,
      )
      .then((res) => {
        setRedemptionOptions(res.data.redemption_options);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [cardKey, points]);
  return (<div className="container">
    <div className="row">
      <div className="col-lg-12 col-md-6 text-center">
        <div className="col-lg-6 col-md-6 pull-left  np">
          <div className="boxes padding">
            <h5><div className="img" />Collect Points</h5>
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
      <div className="col-lg-12 col-md-6 text-center ">
        <div className=" flex-column flex-md-row text-center">
          <button
            className="btn btn-lg btn-bd-primary mb-3  w-320 mt-5"
          >
            Your Points: <span>
              {new Intl.NumberFormat("en-US").format(points) + "   "}
            </span>

            <span onClick={() => history.push("/managepoints/redeem")}>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </span>
          </button>
          <p className="lead">Your Card: {cardValue}</p>
          <h5>Redemption Options</h5>
          <p className="lead">Click on each option for more details</p>
          {loading ? <Loader /> : redemptionOptions.map((redemoption) => (
            <div key={redemoption.redemption_option_id}>
              <button
                id={redemoption.redemption_option_id}
                className="btn btn-lg btn-outline-secondary mb-3 w-320"
              >
                {redemoption.redemption_option}: Rs {redemoption.mon_val} &gt;
              </button>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>);
};
