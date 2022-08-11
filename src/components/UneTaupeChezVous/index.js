// == Import
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import IllustrationHome from "./IllustrationHome";
import Contact from "./Page/Contact";
import Home from "./Page/Home";
import Services from "./Page/Services";
import "./styles.css";

function UneTaupeChezVous() {
  return (
    <>
      <IllustrationHome />
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

// == Export
export default UneTaupeChezVous;
