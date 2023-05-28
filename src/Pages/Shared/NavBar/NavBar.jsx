import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>
      <li>
        <NavLink to="/secret">Secret</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">
          <div className="flex gap-1">
            <FaShoppingCart />
            <sup className="text-rose-200">{cart?.length || 0}</sup>
          </div>
        </NavLink>
      </li>
      {user ? (
        <li>
          <button onClick={handleLogout} className="btn btn-ghost">
            Logout
          </button>
        </li>
      ) : (
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-70 bg-black text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-600  rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <NavLink to="/" className="normal-case text-xl">
            Bistro Boss
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <>
              <div
                className="tooltip tooltip-left tooltip-warning"
                data-tip={user?.displayName}
              >
                <img src={user.photoURL} className="w-12 h-12 rounded-full" />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
