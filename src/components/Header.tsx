import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const links = [
    { to: "/about", label: t("header-about") },
    { to: "/projects", label: t("header-projects") },
    { to: "/contact", label: t("header-contact") },
  ];
  return (
    <header className={`${i18n.language}`}>
      <div className={`header-social-media`}>
        <div className="header-social-media-title"></div>
        <div className="language-dropdown">
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="language-select"
          >
            <option value="en">English</option>
            <option value="zh">中文</option>
          </select>
        </div>
      </div>
      <div className="header-nav">
        <Link to="/" className="header-title">
          VIC WU
        </Link>
        <nav className="header-nav-menu">
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
