import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import GameDetails from "./pages/GameDetails";
import ScollTop from "./components/ScollTop";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#242424] text-white ">
        <Navbar />
        <SideBar />
        <ScollTop />
        <main className="pt-24 p-8 ml-40">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<GameDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
