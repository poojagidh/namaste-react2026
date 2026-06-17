import { useState, useContext } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext.js";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { selectCartItemCount } from "../utils/cartSlice";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const cartItemCount = useSelector(selectCartItemCount);

  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-sm bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="hover:scale-105 transition-transform duration-200">
        <Logo />
      </div>

      <nav>
        <ul className="flex gap-8 text-gray-600 font-medium items-center">
          <li className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="relative group cursor-pointer hover:text-orange-500 transition-colors duration-200">
            <div className="flex items-center gap-1">
              <Link to="/cart">Cart</Link>
              <span data-testid="cartCount" className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full group-hover:bg-orange-600 transition-colors">{cartItemCount}</span>
            </div>
          </li>
          <li className="px-4">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <button
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform active:scale-95"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
