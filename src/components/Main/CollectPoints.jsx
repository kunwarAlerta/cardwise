import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Loader } from "../../utils/Loader/Loader";
import { MainHeader } from "../../layouts/Main/MainHeader";
import CardContext from "../../context/CardContext";

export const CollectPoints = () => {
  const { cardValue } = useContext(
    CardContext,
  );
  const [loading, setLoading] = useState(true);
  const [collectionOptions, setCollectionOptions] = useState({});
  const history = useHistory();
  const params = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://cardwisetest3-env.eba-kk7hgqrd.us-east-2.elasticbeanstalk.com/collectIns/${params.card_id}`,
      )
      .then((res) => {
        setCollectionOptions(res.data);
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
          <div className="col-lg-12 col-md-6 text-center">
            <div className="col-lg-6 col-md-6 pull-left  np">
              <div className="boxes padding active">
                <h5><div className="img" />Collect Points</h5>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 pull-right np">
              <div
                className="boxes padding"
                onClick={() => history.push("/managepoints/redeem")}
              >
                <h5>
                  <div className="img1" />
                  Redeem Points
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 pull-left np">
            <p className="lead pull-left m-l-25">
              Your Card: {cardValue}
            </p>
          </div>
          <div className="col-lg-12 col-md-12 pull-left np">
            <p className="lead pull-left m-l-25">Instructions:</p>
            <ol className="list">
              {loading
                ? <Loader />
                : collectionOptions.map((collectOption) =>
                  <li>{collectOption.collection_option}</li>
                )}
            </ol>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
