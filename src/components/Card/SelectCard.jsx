import React, { useEffect, useContext, useState } from "react";
import CardContext from "../../context/CardContext";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const SelectCard = () => {
  const [loading, setLoading] = useState(true);
  const [Cards, setCards] = useState({});
  const { currentCard, setCurrentCard } = useContext(
    CardContext,
  );
  const history = useHistory();
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://cardwisetest3-env.eba-kk7hgqrd.us-east-2.elasticbeanstalk.com/selectcard`,
      )
      .then((res) => {
        setCards(res.data.cards);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  const onChangeCard = (card) => {
    setCurrentCard(card);
    localStorage.setItem("currentCard", card);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center ">
          <h3 className="mt-5">
            Great! We'll make sure you get the most out of your reward points
            plan.
          </h3>
          <p className="lead mt-5">Which credit card do you own?</p>
          {loading
            ? (
              "Loading"
            )
            : (
              <div className="col-md-4 offset-md-4">
                <form onSubmit={() => history.push("/managepoints/redeem")}>
                  <div className=" flex-column flex-md-row text-center">
                    <select
                      required
                      className="form-control"
                      placeholder="Select Card"
                      aria-label="Type here"
                      aria-describedby="Type here"
                      onChange={(e) => onChangeCard(e.target.value)}
                      defaultValue={currentCard}
                    >
                      <option value="">
                        Select Card
                      </option>
                      {Cards.map((cd) => (
                        <option key={cd.card_id} value={cd.card}>
                          {cd.card}
                        </option>
                      ))}
                    </select>

                    <button
                      type="submit"
                      className="btn btn-lg btn-outline-secondary mb-3 mr-md-3 mt-2"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
