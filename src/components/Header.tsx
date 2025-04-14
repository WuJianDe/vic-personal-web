import React from "react";
import { NavLink, useLocation, Link } from "react-router-dom";

const Header: React.FC = () => {
  const links = [
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" }
  ];
  return (
    <header>
      <div className="header-social-media">
        <div className="header-social-media-title">PERSONAL RESUME</div>
      </div>
      <div className="header-nav">
        <Link to="/" className="header-title">
          Vic Wu
        </Link>
        <div className="header-nav-menu">
          {links.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              end={false}
              className={({ isActive }) =>
                `${"header-nav-menu-link"} ${isActive ? "header-nav-menu-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
