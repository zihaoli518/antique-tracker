import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

// importing mateiral ui font 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// importing App component
import App from "./App.jsx";

import './index.scss';

// import './index.scss';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
