import React, { useEffect, useState } from "react";
import { Topbar, Navbar, Mid, Footer } from "./components";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const hasToken = JSON.parse(localStorage.getItem("auth_token"));
    if (hasToken) setIsAuthenticated(true);
  });
  return (
    <div className="flex flex-col bg-background font-primary text-black min-h-screen box-border">
      <div className="flex-none">
        <Topbar />
        <Navbar isAuthenticated={isAuthenticated} />
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
