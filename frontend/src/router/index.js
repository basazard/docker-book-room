import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Event from "../pages/Event";

export default function Router() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
        </Routes>
    </div>
  );
}