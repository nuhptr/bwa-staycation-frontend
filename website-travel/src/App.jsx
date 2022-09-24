import React from "react";
import { Router, Route } from "react-router-dom";

import "./assets/scss/style.scss";
import LandingPages from "pages/LandingPages";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPages} />
      </Router>
    </div>
  );
}

export default App;
