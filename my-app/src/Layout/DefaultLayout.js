import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./partials/header.comp";
import { Footer } from "./partials/footer.comp";

export const DefaultLayout = () => {
  return (
    <div className="default-layout">
      <header className="header mb-2">
        <Header />
      </header>

      <main className="main">
        <Outlet /> {/* This renders the child page inside the layout */}
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
