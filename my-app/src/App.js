import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login/Login";
import Home from "./component/Home";


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
