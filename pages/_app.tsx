import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useState } from "react";

import Layout from "components/Layout";
import Loader from "components/Loader";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loader = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(loader);
  });

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        {showLoader && <Loader />}
      </AnimatePresence>

      <NextNProgress
        color="#e0a965"
        height={2}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
