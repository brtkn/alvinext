import Navbar from "../components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
