import React, { useRef, useEffect, useState } from 'react';
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`scroll-to-top-container ${showButton ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <div className="scroll-button">{content.ScrollUp}</div>
    </div>
  );
};

export default ScrollToTopButton;
