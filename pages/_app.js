import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.scss";
import "../utils/fontAwesome";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({ name: "misir" });

  return (
    <>
      <Navbar />
      <Component {...pageProps} state={state} />
    </>
  );
}

export default MyApp;
