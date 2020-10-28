import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
//import CardContext from "../../context/CardContext";
import axios from "axios";
import { Loader } from "../../utils/Loader/Loader";
import { MainHeader } from "../../layouts/Main/MainHeader";

export const RedemptionOptionsSelected = () => {
  // const { points } = useContext(
  //   CardContext,
  // );
  const [loading, setLoading] = useState(true);
  const [redemptionInstructions, setRedemptionInstructions] = useState({});
  const history = useHistory();
  const params = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://cardwisetest3-env.eba-kk7hgqrd.us-east-2.elasticbeanstalk.com/redeemIns/${params.redemption_option_id}`,
      )
      .then((res) => {
        setRedemptionInstructions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [params]);
  return (
    <React.Fragment>
      <MainHeader />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center ">
            <div className=" flex-column flex-md-row text-center mt-5">
              <div className="top-redeem-select">
                <button
                  onClick={() =>
                    history.push("/managepoints/redemption_options")}
                  className="btn btn-lg btn-outline-secondary mb-3 pull-left"
                >
                  Back
                </button>
                <h5>Spice Jet Voucher Value:Rs 13,000</h5>
              </div>

              <p className="lead pull-left m-l-25">Instructions:</p>
              <ol className="list">
                {loading
                  ? <Loader />
                  : redemptionInstructions.map((redemOption) =>
                    <li>{redemOption.redemption_instructions}</li>
                  )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
