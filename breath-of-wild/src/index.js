import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from "./pages/App";
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Wood from './pages/Wood'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/Wood" element={<Wood />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
