"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = ({ dark }) => {
  
  const currentPath = usePathname();
  const activeMenuFuntion = (value) =>
    value.some((el) => currentPath.includes(el)) ? "mil-active" : "";
  const [toggle, setToggle] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleToggle = () => {
      setIsSearchVisible(!isSearchVisible);
  };
  return (
    <div className={`mil-top-panel ${dark ? "mil-dark-2" : ""}`}>
      <div className="container">
        <Link href="/" className="mil-logo">
          <img
            src={dark ? "img/logo-light.png" : "img/logo.png"}
            alt="Voyagency"
            className="logo-img"
          />
        </Link>
        <Link href="/" className="mil-logo-2">
          <img
            src={dark ? "img/logo-light.png" : "img/Logo-03.png"}
            alt="Voyagency"
            className="logo-img-2"
          />
        </Link>
        <nav className={`mil-top-menu ${toggle ? "mil-active" : ""}`}>
          <ul>
            <li
              className={`mil-has-children ${
                currentPath.includes("home") || currentPath == "/"
                  ? "mil-active"
                  : ""
              }`}
            >
              <a href="/" className="home-active">Home</a>
              {/* <ul>
                <li>
                  <Link href="/">Type 1</Link>
                </li>
                <li>
                  <Link href="home-2">Type 2</Link>
                </li>
                <li>
                  <Link href="home-3">Type 3</Link>
                </li>
                <li>
                  <Link href="home-4">Type 4</Link>
                </li>
                <li>
                  <Link href="home-5">Type 5</Link>
                </li>
              </ul> */}
            </li>
            
            <li
              className={`mil-has-children ${activeMenuFuntion([
                "travel",
                "services-expense-management",
                "service-for-solopreneurs",
              ])}`}
            >
              <a href="#">Services</a>
              <ul>
                <li>
                  <Link href="travel">Business Travel</Link>
                </li>
                <li>
                  <Link href="services-expense-management">Expense Management</Link>
                </li>
                <li>
                  <Link href="service-for-solopreneurs">Tailored Travel Solutions for Solopreneurs</Link>
                </li>
                <li>
                  <Link href="service-for-solopreneurs">Tailored Travel Solutions for Professionals</Link>
                </li>
                <li>
                  <Link href="service-for-solopreneurs">Tailored Travel Solutions for Growing Businesses</Link>
                </li>
              </ul>
            </li>
            <li
              className={`mil-has-children ${activeMenuFuntion([
                // "blog",
                // "publication",
                "coming-soon"
              ])}`}
            >
              <a href="#">Solutions</a>
              <ul>
                <li>
                  <Link href="coming-soon">Business</Link>
                </li>
                <li>
                  <Link href="coming-soon">Travelers</Link>
                </li>
                <li>
                  <Link href="coming-soon">Admins</Link>
                </li>
                <li>
                  <Link href="coming-soon">Finance</Link>
                </li>
                <li>
                  <Link href="coming-soon">Managers</Link>
                </li>
              </ul>
            </li>
            <li className={`${activeMenuFuntion(["about"])}`}>
              <Link href="about">About</Link>
            </li>
            <li
              className={`mil-has-children ${activeMenuFuntion([
                "blog",
                "publication",
                "coming-soon",
                "case-studies",
              ])}`}
            >
              <a href="#.">Resources</a>
              <ul>
                <li>
                  <Link href="blog">Blog</Link>
                </li>
                <li>
                  <Link href="case-studies">Case Studies</Link>
                </li>
              </ul>
            </li>
            {/* <li className={`${activeMenuFuntion(["contact"])}`}>
              <Link href="contact">Contact</Link>
            </li> */}
            <li
              className={`mil-has-children ${activeMenuFuntion([
                "career",
                "price",
                "coming-soon",
                "register",
                "partners",
              ])}`}
            >
              <a href="#.">Company </a>
              <ul>
                <li>
                  <Link href="about">Team</Link>
                </li>
                <li>
                  <Link href="press">Press</Link>
                </li>
                <li>
                  <Link href="partners">Partners</Link>
                </li>
                <li>
                  <Link href="career">Careers</Link>
                </li>
                <li>
                  <Link href="contact">Contact</Link>
                </li>
              </ul>
            </li>
            <Link href="register" className="mil-btn signup-btn mr-2 mb-2 mil-sm">
            Sign Up
           </Link>
           <Link href="register" className="mil-btn signup-btn mr-2 mil-sm">
            Log in
          </Link>
          </ul>
          <div className="search-container desktop">
            <a className="search-toggle" onClick={handleToggle}>Search toggle</a>
            <form className={`search ${isSearchVisible ? 'show-search' : ''}`} action="/">
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                    <input
                      className="mil-input search-input mil-up"
                      type="text"
                      placeholder="What can we help you find?"
                      name="search"
                    />
                  <button type="submit">Search</button>
                  </div>
            </form>
        </div>
        </nav>
        <div className="mil-menu-buttons">
          <Link href="register" className="mil-btn signup-desktop mr-2 mil-sm">
            Sign Up
          </Link>
          <Link href="register-login" className="mil-btn signup-desktop mil-sm">
            Log in
          </Link>
          <div className="search-container mobile">
            <a className="search-toggle" onClick={handleToggle}>Search toggle</a>
            <form className={`search ${isSearchVisible ? 'show-search' : ''}`} action="/">
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                    <input
                      className="mil-input search-input mil-up"
                      type="text"
                      placeholder="What can we help you find?"
                      name="search"
                    />
                  <button type="submit">Search</button>
                  </div>
            </form>
        </div>
          <div
            className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
