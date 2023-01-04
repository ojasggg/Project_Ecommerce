import React from "react";

import { Topbar, Navbar, Mid, Footer } from "./components";

const App = () => {
  return (
    <div className="bg-background font-primary text-black min-h-screen box-border">
      <Topbar />
      <Navbar />
      <Mid />
      <Footer />
    </div>
  );
};

export default App;
