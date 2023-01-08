import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../componment/navbar";
import Footer from "../componment/footer";
import { Provider } from "react-redux";
import { store } from "../app/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
