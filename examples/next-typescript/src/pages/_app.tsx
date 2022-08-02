import type { AppProps } from "next/app";
import "remixicon/fonts/remixicon.css";
import "lobby-editor/dist/es/styles.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
