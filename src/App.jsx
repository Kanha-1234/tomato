import  { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import LoginPopup from "./components/loginPopup/LoginPopup";
const App = () => {
  const [showlogin, setShowLogin] = useState(false);
  return (
    <>
      {showlogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/order" element={<PlaceOrder/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
