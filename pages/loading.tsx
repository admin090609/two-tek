import React, { useState, useEffect, useContext } from "react";

const Loading = () => {
  const [percentage, setPercentage] = useState(0);
  // Assuming you have a dark mode state in a context
  // Replace with your actual dark mode state management
  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = () => {
    const isDark =
      document.querySelector("body")?.getAttribute("data-theme") === "dark";
    if (isDark) {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  useEffect(() => {
    // Check if localStorage is available
    if (typeof localStorage) {
      const selectedTheme = localStorage.getItem("selectedTheme");
      if (selectedTheme === "dark") {
        setDarkMode();
      } else {
        setLightMode();
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <>
      <div
        className={`flex justify-center items-center min-h-screen ${
          typeof localStorage ? "dark-bg" : "light-bg"
        }`}
        style={{ background: "var(  --loading_bg)" }}
      >
        <div className="blobs">
          <div
            className="blob-center"
            style={{ background: "var(  --loading_blob)" }}
          ></div>
          <div
            className="blob"
            style={{ background: "var(  --loading_blob)" }}
          ></div>
          <div
            className="blob"
            style={{ background: "var(  --loading_blob)" }}
          ></div>
          <div
            className="blob"
            style={{ background: "var(  --loading_blob)" }}
          ></div>
          <div
            className="blob"
            style={{ background: "var(  --loading_blob)" }}
          ></div>
          <div
            className="blob"
            style={{ background: "var(  --loading_blob)" }}
          ></div>
          <div
            className="blob"
            style={{ background: "var(  --loading_blob)" }}
          ></div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              ></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              ></feColorMatrix>
              <feBlend in="SourceGraphic" in2="goo"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default Loading;
