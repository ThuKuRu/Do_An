import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Register from "./Components/Register/Register";
import Home from "./Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
