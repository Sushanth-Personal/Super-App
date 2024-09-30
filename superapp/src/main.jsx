import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Selection from "./pages/MovieSelection.jsx";
import NotFound from "./pages/404.jsx";
import CarouselPage from "./pages/CarouselPage.jsx";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/selection" element={<Selection />} />
        <Route path="*" element={<NotFound />} />
        <Route path = "/carousel" element ={<CarouselPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);