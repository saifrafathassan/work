import { BrowserRouter as Router , Route , Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home"
import About from "./pages/about/About"
import Contact from "./pages/Contact/Contactus"
import { withTranslation  } from 'react-i18next';

function App({ t }) {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  )
}

export default withTranslation()(App);
