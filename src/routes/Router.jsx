import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Professional, Personal } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pr" element={<Professional />} />
        <Route path="/pe" element={<Personal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
