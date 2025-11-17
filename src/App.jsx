import { BrowserRouter as Router , Route , Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home"
import About from "./pages/about/About"
import Contact from "./pages/Contact/Contactus"
import Products from "./pages/products/Products"
import { withTranslation  } from 'react-i18next';
import Platinum from "./pages/products/Platinum";
import Silver from "./pages/products/Silver";
import Diamond from "./pages/products/Diamond";
import Classic from "./pages/products/Classic";
import Emerald from "./pages/products/Emerald";
import Smart from "./pages/products/Smart"

function App({ t }) {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/platinum" element={<Platinum />} />
        <Route path="/products/Smart" element={<Smart />} />
        <Route path="/products/silver" element={<Silver />} />
        <Route path="/products/diamond" element={<Diamond />} />
        <Route path="/products/classic" element={<Classic />} />
        <Route path="/products/emerald" element={<Emerald />} />
      </Routes>
    </Router>
  )
}

export default withTranslation()(App);
