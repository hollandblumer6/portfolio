import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Tutorials from "./components/main/tutorials/Tutorials";
import Website from "./components/main/tutorials/code-with-me/Website";
import Iphone from "./components/main/tutorials/organize/Iphone";
import About from "./components/main/about/About";
import Wellness from "./components/main/wellness/Wellness";
import Projects from "./components/main/projects/Projects";
import Footer from "./components/footer/Footer";
import Popup from "./components/popup/Popup";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./styles/test.scss";

function App() {
  useEffect(() => {
    // Add a listener to the window's onbeforeunload event to clear local storage
    window.addEventListener("beforeunload", clearLocalStorage);

    return () => {
      // Remove the listener when the component unmounts
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);

  const clearLocalStorage = () => {
    // Clear local storage when the user navigates away from localhost:3000
    if (window.location.href.startsWith("http://localhost:3000")) {
      localStorage.clear();
    }
  };

  return (
    <div className="app">
      <Popup />
      <header className="app-header">
        <Header />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/make-a-website" element={<Website />} />
          <Route path="/iphone-folders" element={<Iphone />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
