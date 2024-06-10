import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import UserSignup from "./components/userSignup";
import Login from "./components/login";
import Products from "./components/Products";
import { useState, useEffect } from "react";
import ShoppingCart from "./components/shoppingCart";

function App() {
  const [loginOpen, setloginOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [userLogin, setUserLogin] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerOpen, setRegisterOpen] = useState(false);

  useEffect(() => {
    const userCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(userCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addtoCart = (products) => {
    const existingItem = cartItems.find((item) => item.id === products.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          cartItems.id === products.id
            ? { ...item, quanity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...products, quanity: 1 }]);
    }
  };

  const handleLogin = () => setloginOpen(true);
  const handleLoginClose = () => setloginOpen(false);

  const handleRegister = () => setRegisterOpen(true);
  const handleRegisterClose = () => setRegisterOpen(false);

  return (
    <Router>
      <div className="App">
        <Navigation
          handleLogin={handleLogin}
          userLogin={userLogin}
          handleRegister={handleRegister}
          registerUsername={registerUsername}
        />
        {registerOpen && (
          <UserSignup
            handleRegisterClose={handleRegisterClose}
            setRegisterUsername={setRegisterUsername}
          />
        )}
        {loginOpen && (
          <Login
            handleLoginClose={handleLoginClose}
            setUserLogin={setUserLogin}
          />
        )}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products addtoCart={addtoCart} />}
          />
          <Route
            path="/shoppingCart"
            element={<ShoppingCart cartItems={cartItems} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
