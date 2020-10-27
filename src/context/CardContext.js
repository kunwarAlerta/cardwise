import React from "react";

const CardContext = React.createContext({
  currentCard: null,
  points: null,
});

export default CardContext;
