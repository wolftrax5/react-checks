import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from "../logo.svg";

const activeClass = ({ isActive = false }) => (isActive ? "nav-active" : "");
export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="react logo" />
          <ul>
            <li>
              <NavLink to="/" className={activeClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={activeClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={activeClass}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>}></Route>
          <Route path="/about" element={<h1>About Page</h1>}></Route>
          <Route path="/users" element={<h1>users Page</h1>}></Route>
          <Route path="/*" element={<Navigate to="/home" replace />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
