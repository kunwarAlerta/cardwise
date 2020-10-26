import React, { useState } from "react";
import "./App.css";
import { Header } from "./layouts/Header";
// import routes from "./utils/routes/index";
import { BrowserRouter as Routes } from "react-router-dom";
import ProgressContext from "./context//ProgressContext";
// import { GuestRoute } from "./utils/routes/GuestRoute";
import { Main } from "./pages/Main";

function App() {
  const [step, setStep] = useState(1);
  const [currentCard, setCurrentCard] = useState(1);
  return (
    <Routes>
      <ProgressContext.Provider
        value={{ step, setStep, currentCard, setCurrentCard }}
      >
        <Header />
        <Main />
      </ProgressContext.Provider>
    </Routes>
  );
}

export default App;
