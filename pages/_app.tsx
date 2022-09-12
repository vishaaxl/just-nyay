import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

import Layout from "components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
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
