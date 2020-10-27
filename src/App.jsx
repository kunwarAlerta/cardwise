import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./layouts/Header";
import routes from "./utils/Routes/index";
import { BrowserRouter as Routes, Switch } from "react-router-dom";
import CardContext from "./context/CardContext";
import GuestRoute from "./utils/Routes/GuestRoute";

function App() {
  const [cardValue, setCardValue] = useState(null);
  const [cardKey, setCardKey] = useState(null);
  const [points, setPoints] = useState(null);
  useEffect(() => {
    let cardValue = localStorage.getItem("cardValue");
    let points = localStorage.getItem("points");
    let cardKey = localStorage.getItem("cardKey");
    if (cardKey) {
      setCardKey(cardKey);
    } else {
      setCardKey(null);
    }
    if (points) {
      setPoints(points);
    } else {
      setPoints(null);
    }
    if (cardValue) {
      setCardValue(cardValue);
    } else {
      setCardValue(null);
    }
  }, [cardValue, points, cardKey]);

  return (
    <Routes>
      <CardContext.Provider
        value={{
          cardKey,
          cardValue,
          points,
          setCardValue,
          setCardKey,
          setPoints,
        }}
      >
        <Header />
        <Switch>
          {routes.map((route, index) => {
            if (route.protected === "guest") {
              return (
                <GuestRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                >
                  <route.component />
                </GuestRoute>
              );
            }
            return (
              <GuestRoute
                key={index}
                path={route.path}
                exact={route.exact}
              >
                <route.component />
              </GuestRoute>
            );
          })}
        </Switch>
      </CardContext.Provider>
    </Routes>
  );
}

export default App;
