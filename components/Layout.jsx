import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
