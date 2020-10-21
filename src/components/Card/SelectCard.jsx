import React, { useEffect, useState } from "react";
import axios from "axios";

export const SelectCard = ({ setStep }) => {
  const [loading, setLoading] = useState(true);
  // const [Issuers, setIssuers] = useState({});
  const [Cards, setCards] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://cardwisetest3-env.eba-kk7hgqrd.us-east-2.elasticbeanstalk.com/selectcard`
      )
      .then((res) => {
        //  setIssuers(res.data.issuers);
        setCards(res.data.cards);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center ">
          <h3 className="mt-5">
            Great! We'll help you make sure you get the most of your reward
            points plan.
          </h3>
          <p className="lead mt-5">Which credit card do you own?</p>
          <div className="col-md-4 offset-md-4">
            <div className=" flex-column flex-md-row text-center">
              {loading ? (
                "Loading"
              ) : (
                <select
                  type="text"
                  className="form-control"
                  placeholder="Type here"
                  aria-label="Type here"
                  aria-describedby="Type here"
                >
                  {Cards.map((cd) => (
                    <option key={cd.card_id} value={cd.card_id}>
                      {cd.card}
                    </option>
                  ))}
                </select>
              )}
              <button
                className="btn btn-lg btn-outline-secondary mb-3 mr-md-3 mt-2"
                onClick={(e) => setStep((step) => step + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
