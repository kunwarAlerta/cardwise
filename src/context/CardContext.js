import React from "react";

const CardContext = React.createContext({
  cardValue: null,
  cardKey: null,
  points: null,
});

export default CardContext;
