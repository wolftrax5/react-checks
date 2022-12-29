import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import FormikBasicPage from "../03-forms/pages/FormikBasicPage";
import FormikComponents from "../03-forms/pages/FormikComponents";
import FormikYupPage from "../03-forms/pages/FormikYupPage";
import RegisterPage from "../03-forms/pages/RegisterPage";
import FormikAbstractaction from "../03-forms/pages/FormikAbstractaction";
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
              <NavLink to="/register" className={activeClass}>
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={activeClass}>
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={activeClass}>
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={activeClass}>
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstractions" className={activeClass}>
                Formik Abstraction
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
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/formik-basic" element={<FormikBasicPage />}></Route>
          <Route path="/formik-yup" element={<FormikYupPage />}></Route>
          <Route
            path="/formik-abstractions"
            element={<FormikAbstractaction />}
          ></Route>
          <Route
            path="/formik-components"
            element={<FormikComponents />}
          ></Route>
          <Route path="/about" element={<h1>About Page</h1>}></Route>
          <Route path="/users" element={<h1>users Page</h1>}></Route>
          <Route path="/*" element={<Navigate to="/home" replace />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
