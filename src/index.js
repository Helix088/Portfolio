import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Home";
import ErrorPage from "./ErrorPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
