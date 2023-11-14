import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Router } from "next/router";
import Loading from "./loading";
import { LanguageProvider } from "../public/LanguageContext";
import { ThemeProvider } from "../public/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => setLoading(true);
    const endLoading = () => setLoading(false);

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", endLoading);
    Router.events.on("routeChangeError", endLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", endLoading);
      Router.events.off("routeChangeError", endLoading);
    };
  }, []);
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          {loading ? <Loading /> : null}
          <Component {...pageProps} />
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}
