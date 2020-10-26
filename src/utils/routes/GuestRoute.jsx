import React, { useContext } from "react";
import ProgressContext from "../../context/ProgressContext";
import { Redirect } from "react-router-dom";

export const GuestRoute = () => {
  const { step } = useContext(ProgressContext);
  switch (step) {
    case 1:
      return <Redirect to="/welcome" />;
    case 2:
      return <Redirect to="/selectcard" />;
    case 3:
      return <Redirect to="/managepoints/redeem" />;
    default:
      return <Redirect to="/welcome" />;
  }
};
