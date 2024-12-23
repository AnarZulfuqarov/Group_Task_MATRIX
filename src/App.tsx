import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Reservation from "./pages/Reservation/Reservation";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Movies from "./pages/Movies/Movies";

function App() {

  const location = useLocation();
  const isNotFoundPage = location.pathname !== "/" &&
    location.pathname !== "/about" &&
    location.pathname !== "/reservation" &&
    location.pathname !== "/movies" &&
    location.pathname !== "/contact";

  return (
    <div>
      {!isNotFoundPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isNotFoundPage && <Footer />}
    </div>
  );
}

export default App;
