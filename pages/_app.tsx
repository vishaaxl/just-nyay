import "../styles/globals.scss";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";

import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

import Layout from "components/Layout";
import { CartProvider } from "context/Cart";
import { AuthProvider } from "context/User";
import { initFirebase } from "firebase.config";
import { defaultTheme } from "theme";

function MyApp({ Component, pageProps }: AppProps) {
  const app = initFirebase();
  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <CartProvider>
          <Layout>
            <NextNProgress
              color="#e0a965"
              height={2}
              showOnShallow={true}
              options={{ showSpinner: false }}
            />
            <Component {...pageProps} />
            <ToastContainer />
          </Layout>
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
