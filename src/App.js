import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/HomePage/Home";
import {Login} from "./Components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
