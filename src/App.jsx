import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./features/pages/homePage/HomePage";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import About from "./features/pages/about/About";
import Program from "./features/pages/program/Program";
import Shop from "./features/pages/shop/Shop";
import Testimonials from "./features/pages/testimonials/Testimonials";
import Membership from "./features/pages/membership/Membership";
import NotFound from "./features/pages/notfound/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
