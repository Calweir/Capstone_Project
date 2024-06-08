import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import UserSignup from "./components/userSignup";
import Login from "./components/login";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setloginOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogin = () => setloginOpen(true);
  const handleLoginClose = () => setloginOpen(false);

  return (
    <Router>
      <div className="App">
        <Navigation handleOpen={handleOpen} handleLogin={handleLogin} />
        {open && <UserSignup handleClose={() => setOpen(false)} />}
        {loginOpen && <Login handleLoginClose={() => setloginOpen(false)} />}
        {/* <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shoppingCart" element={<shoppingCart />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
