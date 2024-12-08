import { BrowserRouter as Router , Route , Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home"
import About from "./pages/about/About"
import Contact from "./pages/Contact/Contactus"
import Products from "./pages/products/Products"
import { withTranslation  } from 'react-i18next';
import Gold from "./pages/products/Gold";
import Silver from "./pages/products/Silver";
import Diamond from "./pages/products/Diamond";

function App({ t }) {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/gold" element={<Gold />} />
        <Route path="/products/silver" element={<Silver />} />
        <Route path="/products/diamond" element={<Diamond />} />
      </Routes>
    </Router>
  )
}

export default withTranslation()(App);
