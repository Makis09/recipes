import React, { useState } from "react";
import "../styles/globals.scss";
import "../utils/fontAwesome";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({ name: "misir" });

  return <Component {...pageProps} state={state} />;
}

export default MyApp;
