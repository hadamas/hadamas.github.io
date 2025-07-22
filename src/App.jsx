import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/Main/MainContent";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
  const toggleSound = () => setIsSoundOn(!isSoundOn);

  return (
    <body
      style={{
        backgroundColor: isDarkTheme ? "#132135" : "white",
        minHeight: "100vh",
      }}
    >
      <Header
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        isSoundOn={isSoundOn}
        toggleSound={toggleSound}
      />
      <MainContent></MainContent>
    </body>
  );
}

export default App;
