import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; // Import the CSS file for styling
import Home from "./components/Home";
import StopWatch from "./components/stopwatch/StopWatch";
import ContactPage from "./pages/ContactPage";
import CounterPage from "./pages/CounterPage";
import { CounterProvider } from "./components/context/Context";

const App = () => {

  return (
    <CounterProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/counter" element={<CounterPage />} />
          {/* <Route path="/users" element={<Users />} /> */}
        </Routes>
      </Router>
    </CounterProvider>

  );
};

export default App;