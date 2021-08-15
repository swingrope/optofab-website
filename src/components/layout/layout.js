import React from "react";
import "./layout.css";
import { GlobalStyle } from "../styles/GlobalStyles";

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
}

export default Layout;
