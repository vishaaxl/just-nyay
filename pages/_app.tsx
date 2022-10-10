import "../styles/globals.scss";
import type { AppProps } from "next/app";

import NextNProgress from "nextjs-progressbar";

import Layout from "components/Layout";
import { CartProvider } from "context/Cart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <NextNProgress
          color="#e0a965"
          height={2}
          showOnShallow={true}
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
