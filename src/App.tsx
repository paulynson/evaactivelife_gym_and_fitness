import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./features/pages/homePage/HomePage";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import About from "./features/pages/about/About";
import Program from "./features/pages/program/Program.tsx";
import Shop from "./features/pages/shop/Shop";
import Membership from "./features/pages/membership/Membership";
import Contact from "./features/pages/contact/Contact";
import NotFound from "./features/pages/notfound/NotFound";
import Videos from "./components/videos/Videos";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
