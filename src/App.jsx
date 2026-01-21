import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import ButtonWhatsapp from "./components/ButtonWhatsApp";
import ButtonLandingLeidyPetite from "./components/ButtonLandingLeidyPetite";

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="pt-24">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/shop/:category/:subcategory" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </div>
      <Footer />
      <ButtonWhatsapp />
      <ButtonLandingLeidyPetite />
    </CartProvider>
  );
}

export default App;
