import React from "react";

const ProgressContext = React.createContext({
  step: 1,
  currentCard: null,
});

export default ProgressContext;
