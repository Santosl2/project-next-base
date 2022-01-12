/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import type { AppProps } from "next/app";

import "@/styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
