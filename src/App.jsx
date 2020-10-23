import React, { useState } from "react";
import "./App.css";
import { Header } from "./layouts/Header";
import { Main } from "./pages/Main";
import ProgressContext from "./context//ProgressContext";

function App() {
  const [step, setStep] = useState(1);
  const [currentCard, setCurrentCard] = useState(1);
  return (
    <ProgressContext.Provider
      value={{ step, setStep, currentCard, setCurrentCard }}
    >
      <Header />
      <Main />
    </ProgressContext.Provider>
  );
}

export default App;
