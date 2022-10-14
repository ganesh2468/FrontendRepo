import "./App.css";

import AboutUs from "./Components/AboutUs";

import Home from "./Components/Home";

import Protected from "./Components/Protected";

import { Login } from "./Components/Login";

import { Profile } from "./Components/Profile";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>

        <Link to="/AboutUs">About us</Link>

        <Link to="/Login">Login</Link>
        <Link to="/Profile">Logout</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Protected Component={Home} />} />

        <Route path="/AboutUs" element={<Protected Component={AboutUs} />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Protected Component={Profile} />} />
      </Routes>
    </Router>
  );
}

export default App;
