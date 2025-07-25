import { useState } from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
  const toggleSound = () => setIsSoundOn(!isSoundOn);

  return (
    <body
      style={{
        backgroundColor: isDarkTheme ? "black" : "white",
        minHeight: "100vh",
      }}
    >
      <Header
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        isSoundOn={isSoundOn}
        toggleSound={toggleSound}
      />
      <MainContent isDarkTheme={isDarkTheme}></MainContent>
    </body>
  );
}

export default App;
