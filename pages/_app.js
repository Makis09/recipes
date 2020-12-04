import React, { useState } from "react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({ name: "misir" });

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return <Component {...pageProps} state={state} />;
}

export default MyApp;
