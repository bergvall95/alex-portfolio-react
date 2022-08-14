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
import Guestbook from "./components/Guestbook";
import Footer from "./components/footer";
import Lost from "./components/lost";

interface IThemeContext {
  theme: string;
  setTheme?: Dispatch<SetStateAction<string>>;
}

const defaultState = {
  theme: "light",
};

export const ThemeContext = createContext<IThemeContext>(defaultState);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="columns">
        <div className="column is-half-desktop is-offset-one-quarter-desktop">
          <NavBar></NavBar>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/guestbook" element={<Guestbook />} />
              <Route path="/*" element={<Lost />} />
            </Routes>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
