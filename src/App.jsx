import React, { useState, useEffect } from "react";
import "./App.css";
import routes from "./utils/Routes/index";
import { BrowserRouter as Routes, Switch } from "react-router-dom";
import CardContext from "./context/CardContext";
import HomeRoute from "./utils/Routes/HomeRoute";
import MainRoute from "./utils/Routes/MainRoute";

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
        <Switch>
          {routes.map((route, index) => {
            if (route.protected === "home") {
              return (
                <HomeRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                >
                  <route.component />
                </HomeRoute>
              );
            }
            if (route.protected === "main") {
              return (
                <MainRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                >
                  <route.component />
                </MainRoute>
              );
            }
            return (
              <HomeRoute
                key={index}
                path={route.path}
                exact={route.exact}
              >
                <route.component />
              </HomeRoute>
            );
          })}
        </Switch>
      </CardContext.Provider>
    </Routes>
  );
}

export default App;
