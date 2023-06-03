import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaCalendarAlt,
  FaHamburger,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaUtensilSpoon,
} from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054]">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/userhome"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-white" : ""
                  }
                >
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addItem"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-white" : ""
                  }
                >
                  <FaUtensilSpoon /> Add an Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageItems"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-white" : ""
                  }
                >
                  <FaWallet />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/reservations"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-white" : ""
                  }
                >
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allusers"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-white" : ""
                  }
                >
                  <FaUsers />
                  Manage Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <NavLink
                  to="/dashboard/userhome"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-white" : ""
                  }
                >
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/mycart"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-white" : ""
                  }
                >
                  <FaShoppingCart /> Shopping Cart{" "}
                  <sup className="font-bold badge badge-success">
                    {cart.length || 0}
                  </sup>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/payment"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-white" : ""
                  }
                >
                  <FaWallet />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/reservations"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-white" : ""
                  }
                >
                  <FaCalendarAlt />
                  Reservations
                </NavLink>
              </li>
            </>
          )}
          <hr />
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white" : ""
              }
            >
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white" : ""
              }
            >
              <FaHamburger /> Our Menu
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
