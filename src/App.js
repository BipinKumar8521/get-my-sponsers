import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/nav-components/Navbar";
import Home from "./pages/Home";
import ForSponsers from "./pages/ForSponsers";
import ForCollege from "./pages/ForCollege";
import Footer from "./components/footer-component/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ForSponsers" element={<ForSponsers />} />
          <Route path="/ForColleges" element={<ForCollege />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
