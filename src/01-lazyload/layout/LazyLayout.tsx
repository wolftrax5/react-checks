import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPages1, LazyPages2, LazyPages3 } from "../pages";

const activeClass = ({ isActive = false }) => (isActive ? "nav-active" : "");

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>
      {/** nested Routes here */}
      <ul>
        <li>
          <NavLink to="lazy1" className={activeClass}>
            Lazy 1
          </NavLink>
        </li>
        <li>
          <NavLink to="lazy2" className={activeClass}>
            Lazy 2
          </NavLink>
        </li>
        <li>
          <NavLink to="lazy3" className={activeClass}>
            Lazy 3
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy1" element={<LazyPages1 />} />
        <Route path="lazy2" element={<LazyPages2 />} />
        <Route path="lazy3" element={<LazyPages3 />} />

        <Route path="*" element={<Navigate to="lazy1" replace />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
