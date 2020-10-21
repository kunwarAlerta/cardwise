import React, { useContext } from "react";
import { Home } from "../components/Card/Home";
import { NoCard } from "../components/Card/NoCard";
import { SelectCard } from "../components/Card/SelectCard";
import { Managepoints } from "../components/Points/ManagePoints";
import ProgressContext from "../context/ProgressContext";

export const Main = () => {
  const { step, setStep } = useContext(ProgressContext);
  switch (step) {
    case -1:
      return <NoCard setStep={setStep} />;
    case 1:
      return <Home setStep={setStep} />;
    case 2:
      return <SelectCard setStep={setStep} />;
    case 3:
      return <Managepoints setStep={setStep} />;
    default:
      return <Home setStep={setStep} />;
  }
};
