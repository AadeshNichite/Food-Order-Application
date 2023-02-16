import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

const loggenInUser = () => {
  //API call to check authentication
  return true;
};
const Title = () => {
  return (
    <a href="/">
      <img
        className="h-24 p-2"
        alt="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="lg:flex justify-between bg-red-200 shadow-xl">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-3">
            <Link to="/layout/body">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/layout/about">About</Link>
          </li>
          <li className="px-3">
            <Link to="/layout/contact">Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to="/layout/cart">Cart - {cartItems.length}</Link>
          </li>
          <li className="px-3">
            <Link to="/layout/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <h1 className="mt-9">{isOnline ? "✅" : "🛑"}</h1>
      <span className="p-10 font-bold text-black-500">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
