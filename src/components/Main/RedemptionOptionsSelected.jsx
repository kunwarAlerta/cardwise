import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CardContext from "../../context/CardContext";
import axios from "axios";
import { Loader } from "../../utils/Loader/Loader";
import { MainHeader } from "../../layouts/Main/MainHeader";

export const RedemptionOptionsSelected = () => {
  const { monVal, redemptionValue } = useContext(
    CardContext,
  );
  const [loading, setLoading] = useState(true);
  const [redemptionInstructions, setRedemptionInstructions] = useState({});
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
              <div className="col-lg-12 col-md-12 pull-left  np">
                <p className="lead pull-left m-l-25">
                  {redemptionValue}: Rs {monVal}
                </p>
              </div>
              <div className="col-lg-12 col-md-12 pull-left  np">
                <p className="lead pull-left m-l-25">
                  How to maximize points collection:
                </p>
                <ol className="list">
                  {loading
                    ? <Loader />
                    : redemptionInstructions.map((redemOption) =>
                      <li key={redemOption.redemption_instructions}>
                        {redemOption.redemption_instructions}
                      </li>
                    )}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
