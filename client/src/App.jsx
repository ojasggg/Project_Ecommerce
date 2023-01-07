import React from "react";
import { Topbar, Navbar, Mid, Footer } from "./components";

const App = () => {
  return (
    <div className="flex flex-col bg-background font-primary text-black min-h-screen box-border">
      <div className="flex-none">
        <Topbar />
        <Navbar />
      </div>
      <div className="grow">
        <Mid />
      </div>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
};

export default App;
