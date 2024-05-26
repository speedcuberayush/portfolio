// src/App.js

import React, { useState, useEffect } from "react";
import "./App.css";
import Preloader from "./Preloader";
import MainContent from "./MainContent";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  return <div className="App">{loading ? <Preloader /> : <MainContent />}</div>;
};

export default App;
