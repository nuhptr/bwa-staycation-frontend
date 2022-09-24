import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./assets/scss/style.scss";
import LandingPages from "pages/LandingPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
