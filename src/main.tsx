import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "@/styles/Global";
import { Home } from "@/pages/home";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutMePage } from "./pages/aboutme";
import { ProjectPage } from "./pages/projects";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle>
      <NavBar />
      <BrowserRouter>
      <App/>
      </BrowserRouter>
      <Footer />
    </GlobalStyle>
  </React.StrictMode>
);
