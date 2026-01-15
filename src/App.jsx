import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import ButtonWhatsapp from "./components/ButtonWhatsApp";
import GuiaTallasPantalones from "./components/GuiaTallasPantalones";
import ComentariosLeidyPetite from "./components/ComentariosLeidyPetite";
function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="pt-24 flex-1">
          <GuiaTallasPantalones />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/shop/:category/:subcategory" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <ComentariosLeidyPetite />
        </main>

        <Footer />

        <ButtonWhatsapp />
      </div>
    </CartProvider>
  );
}

export default App;
