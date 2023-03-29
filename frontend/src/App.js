import React from "react";
import Navbar from "./components/Navbar";
import Router from "./router";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
