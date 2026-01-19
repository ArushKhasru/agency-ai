import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import InnerPage from "./components/InnerPage";
import useThemeStore from "./store/ThemeStore.js";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const initTheme = useThemeStore((state) => state.initTheme);

  // init theme on mount (important for dark mode persistence)
  useEffect(() => {
    if (initTheme) initTheme();
  }, [initTheme]);

  // parallax bubble follow event
  useEffect(() => {
    const handleMouse = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 20;
      const y = (e.clientY - window.innerHeight / 2) / 20;

      // pushing transforms to CSS (index.css reads these vars)
      document.documentElement.style.setProperty("--mx", `${x}px`);
      document.documentElement.style.setProperty("--my", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="bg-bubbles min-h-screen w-full">
      <CustomCursor />
      <Navbar />
      <InnerPage />
      <Footer />
    </div>
  );
};

export default App;
