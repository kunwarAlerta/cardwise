import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CardContext from "../../context/CardContext";

export const RedemptionOptions = () => {
  const { currentCard, points } = useContext(
    CardContext,
  );
  const redemptionOptions = [
    {
      "redemption_option_id": "amex_1_r_1",
      "redemption_option": "Pay Card Charges with Points",
      "mon_val": "250",
    },
    {
      "redemption_option_id": "amex_1_r_2",
      "redemption_option": "American Express Domestic Travel Voucher",
      "mon_val": "1,000",
    },
    {
      "redemption_option_id": "amex_1_r_3",
      "redemption_option": "American Express Domestic Travel Voucher",
      "mon_val": "2,000",
    },
    {
      "redemption_option_id": "amex_1_r_4",
      "redemption_option": "American Express Domestic Travel Voucher",
      "mon_val": "5,000",
    },
    {
      "redemption_option_id": "amex_1_r_5",
      "redemption_option": "Taj Voucher",
      "mon_val": "5,000",
    },
  ];
  const history = useHistory();
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
            Your Points: <span>{points + "   "}</span>

            <span onClick={() => history.push("/managepoints/redeem")}>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </span>
          </button>
          <p className="lead">Your Card: {currentCard}</p>
          <h5>Redemption Options</h5>
          <p className="lead">Click on each option for more details</p>
          {redemptionOptions.map((redemoption) => (
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
