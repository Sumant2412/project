import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./components/Login";
import WhyChooseUs from "./components/ChooseUs";
import About from "./Pages/About"; 
import Contact from "./Pages/Contact"
import Shop from "./Pages/Shop"

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div>
      {/* Navbar */}
      {isSellerPath ? null : <Navbar setShowLogin={setShowLogin} />}

      {/* Pages */}
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> {/* Corrected path for About */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop/>}/>
        </Routes>
      </div>

      {/* Show Login Popup */}
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </div>
  );
};

export default App;
