import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../logo.png";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
  
  const [isActive, setisActive] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"
          ><i className="fas fa-bars"></i>
        </a>
      </li>
    </ul>

    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a onClick={logout} className="nav-link btn btn-secondary btn-sm" href="#" role="button">
          <span className="text-white">LOGOUT</span>
        </a>
      </li>
    </ul>
  </nav>
    </div>
  );
};

export default Navbar;
