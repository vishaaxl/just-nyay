import "../styles/globals.scss";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";

import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";

import Layout from "components/Layout";
import { CartProvider } from "context/Cart";
import { AuthProvider } from "context/User";
import { initFirebase } from "firebase.config";

function MyApp({ Component, pageProps }: AppProps) {
  const app = initFirebase();
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default MyApp;
