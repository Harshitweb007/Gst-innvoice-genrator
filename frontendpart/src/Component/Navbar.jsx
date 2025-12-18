import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Router from "../Router/Router.jsx";
import { LogIn, LogOut, User } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Nav items
  const publicNav = ["Home", "About", "Contact", "Pricing"];
  const privateNav = ["Home", "About", "Contact", "Dashboard", "Genrateinvoice"];

  // Load user from localStorage
  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    loadUser();
    window.addEventListener("userUpdated", loadUser);

    return () => {
      window.removeEventListener("userUpdated", loadUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("userUpdated"));
    navigate("/");
  };

  return (
    <>
      <header className="wrapper bg-soft-primary">
        <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
          <div className="container flex-lg-row flex-nowrap align-items-center">

            {/* LOGO */}
            <div className="navbar-brand w-100">
              <NavLink to="/">
                <img
                  className="h-15 w-15"
                  src="/assets/IMG-20251204-WA0000_1_-removebg-preview.png"
                  alt="logo"
                />
              </NavLink>
            </div>

            {/* NAV ITEMS */}
            <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-body ms-lg-auto">
                <ul className="navbar-nav">
                  {(user ? privateNav : publicNav).map((item, index) => (
                    <li key={index} className="nav-item">
                      <NavLink
                        className="nav-link"
                        to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      >
                        {item}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="navbar-other w-100 d-flex ms-auto">
              <ul className="navbar-nav flex-row align-items-center ms-auto">

                {user ? (
                  <>
                    {/* USER NAME */}
                    <li className="nav-item mx-2">
                      <span className="nav-link d-flex align-items-center">
                        <User size={18} className="me-2" />
                        {user.name}
                      </span>
                    </li>

                    {/* LOGOUT */}
                    <li className="nav-item mx-2">
                      <button
                        className="nav-link btn btn-link d-flex align-items-center"
                        onClick={handleLogout}
                      >
                        <LogOut size={18} className="me-2" />
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    {/* SIGN IN */}
                    <li className="nav-item mx-2">
                      <NavLink className="nav-link btn btn-link" to="/signin">
                        Sign In
                      </NavLink>
                    </li>

                    {/* SIGN UP */}
                    <li className="nav-item mx-2">
                      <NavLink className="nav-link btn btn-link" to="/signup">
                        <LogIn size={18} />
                      </NavLink>
                    </li>
                  </>
                )}

              </ul>
            </div>

          </div>
        </nav>
      </header>

      <Router />
    </>
  );
}

export default Navbar;
