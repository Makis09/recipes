import { useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({ name: "misir" });

  return <Component {...pageProps} state={state} />;
}

export default MyApp;
