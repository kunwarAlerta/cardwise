import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./layouts/Header";
import routes from "./utils/routes/index";
import { BrowserRouter as Routes, Switch } from "react-router-dom";
import CardContext from "./context/CardContext";
import GuestRoute from "./utils/routes/GuestRoute";

function App() {
  const [currentCard, setCurrentCard] = useState(null);
  const [points, setPoints] = useState(null);
  useEffect(() => {
    let currentCard = localStorage.getItem("currentCard");
    let points = localStorage.getItem("points");
    if (points) {
      setPoints(points);
    } else {
      setPoints(null);
    }
    if (currentCard) {
      setCurrentCard(currentCard);
    } else {
      setCurrentCard(null);
    }
  }, [currentCard]);

  return (
    <Routes>
      <CardContext.Provider
        value={{ currentCard, setCurrentCard, points, setPoints }}
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
