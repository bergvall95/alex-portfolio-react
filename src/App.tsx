import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Projects from "./components/Projects";
import { Guestbook } from "./components/Guestbook";
import Footer from "./components/footer";
import Lost from "./components/lost";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

const defaultState = {
  theme: "light",
};

interface IThemeContext {
  theme: string;
  setTheme?: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<IThemeContext>(defaultState);

function App() {
  const [theme, setTheme] = useState("light");
  Amplify.configure(awsconfig);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="app-container">
        <div className="columns ">
          <div className="column is-half-desktop is-offset-one-quarter-desktop">
            <NavBar></NavBar>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/guestbook" element={<Guestbook />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/*" element={<Lost />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </ThemeContext.Provider>
  );
}

export default App;
