import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";

const activeClass = ({ isActive = false }) => (isActive ? "nav-active" : "");
export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="react logo" />
          <ul>
            {routes.map(({ to, name }) => {
              return (
                <li key={to}>
                  <NavLink to={to} className={activeClass}>
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />}></Route>
          ))}
          <Route
            path="/*"
            element={<Navigate to={routes[0].to} replace />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
