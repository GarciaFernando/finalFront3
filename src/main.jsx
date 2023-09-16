import ReactDOM from "react-dom/client";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DentistProvider } from "./Context/globalContext";
import { DarkModeProvider } from "./Context/styleContext";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DentistProvider>
      <DarkModeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </DarkModeProvider>
    </DentistProvider>
  </BrowserRouter>
);
