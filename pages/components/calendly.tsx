import React, { useState } from "react";

const CalendlyWidget = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const toggleCalendly = () => {
    setShowCalendly(!showCalendly);
  };

  const calendlyStyles: React.CSSProperties = {
    width: "100vw", // Adjust the width as needed
    height: "100vh", // Adjust the height as needed
    zIndex: 9999,
    display: showCalendly ? "block" : "none", // Show/hide based on state
  };

  return (
    <div
      style={{ position: "fixed", bottom: "0px", right: "0px", zIndex: 9999 }}
    >
      <button
        onClick={toggleCalendly}
        style={{
          position: "absolute",
          background: "#008DFD",
          color: "#ffffff",
          padding: "10px 20px",
          border: "none",
          bottom: "20px", // Adjust this to control the distance from the button
          right: "20px",
          width: "190px",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 10000, // Ensure the button is on top
        }}
      >
        Stabiliți o întâlnire
      </button>
      <div style={calendlyStyles}>
        <iframe
          title="Calendly"
          src="https://calendly.com/two2tek?hide_landing_page_details=1&hide_gdpr_banner=1"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default CalendlyWidget;
