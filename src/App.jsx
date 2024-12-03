import { BrowserRouter as Router , Route , Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home"
import { withTranslation  } from 'react-i18next';

function App({ t }) {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default withTranslation()(App);
