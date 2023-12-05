import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/HomePage/Home";
import Login from "./Components/Login/Login";
import HeadingBar from "./Components/Header/HeadingBar";
import NavBar from "./Components/Header/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <HeadingBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
