import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import logo from "../logo.png";

const Sidebar = () => {
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
      <aside className="main-sidebar sidebar-light-primary elevation-4">
        <NavLink to="/dashboard" className="brand-link">
          <center>
            <img src={logo} width="130px" height="40px" alt="logo" />
          </center>
        </NavLink>

        <div className="sidebar text-sm">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="info">
              <NavLink to={`/users/me/${user && user.uuid}`} className="d-block">
                {user && user.name} - {user && user.role_name}
              </NavLink>
            </div>
          </div>

          {/* <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div> */}

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <NavLink className="nav-link" to={"/dashboard"}>
                  <i className="nav-item fas fa-home"></i> Dashboard
                </NavLink>
              </li>

              {/* <li className="nav-item">
                <NavLink className="nav-link" to={"/products"}>
                  <i className="nav-item fas fa-th"></i> <p>Products</p>
                </NavLink>
              </li> */}
              {user && user.role === "1" && (
                <div>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fas fa-th"></i> Master Data{" "}
                      <i className="right fas fa-angle-left"></i>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <NavLink
                          to={"/masterdata/workcenter"}
                          className="nav-link"
                        >
                          <i className="fas fa-circle"></i> Workcenter
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to={"/masterdata/group"} className="nav-link">
                          <i className="fas fa-circle"></i> Asset Group
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to={"/masterdata/condition"} className="nav-link">
                          <i className="fas fa-circle"></i> Condition
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to={"/masterdata/role"} className="nav-link">
                          <i className="fas fa-circle"></i> Role
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to={"/masterdata/location"}
                          className="nav-link">
                          <i className="fas fa-circle"></i> Location
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to={"/masterdata/dms"} className="nav-link">
                          <i className="fas fa-circle"></i> DMS
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/users"}>
                      <i className="nav-item fas fa-user"></i> Users
                    </NavLink>
                  </li>
                </div>
              )}

              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-building"></i> Assets{" "}
                  <i className="right fas fa-angle-left"></i>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to={"/assets"} className="nav-link">
                      <i className="fas fa-circle"></i> Assets List
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/assets-location"} className="nav-link">
                      <i className="fas fa-circle"></i> Assets Location History
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/assets-transfer"} className="nav-link">
                      <i className="fas fa-circle"></i> Assets Transfer
                    </NavLink>
                  </li>
                </ul>
              </li>

              
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-calendar"></i> Schedule{" "}
                  <i className="right fas fa-angle-left"></i>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to={"/planning"} className="nav-link">
                      <i className="fas fa-circle"></i> Planning
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/schedule-wizard"} className="nav-link">
                      <i className="fas fa-circle"></i> Schedule Wizard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/scheduled"} className="nav-link">
                      <i className="fas fa-circle"></i> Scheduled
                    </NavLink>
                  </li>
                </ul>
              </li>

              
              <li className="nav-item">
                    <NavLink className="nav-link" to={"/template"}>
                      <i className="nav-item fas fa-file"></i> Template
                    </NavLink>
                  </li>
                  
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-calendar-check"></i> Work Report{" "}
                  <i className="right fas fa-angle-left"></i>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to={"/work-request"} className="nav-link">
                      <i className="fas fa-circle"></i> Work Request
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/work-order"} className="nav-link">
                      <i className="fas fa-circle"></i> Work Order
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/work-result"} className="nav-link">
                      <i className="fas fa-circle"></i> Result
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/hm-km-maintenance"} className="nav-link">
                      <i className="fas fa-circle"></i> HM, KM Maintenance
                    </NavLink>
                  </li>
                </ul>
              </li>

              
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-database"></i> Inventory{" "}
                  <i className="right fas fa-angle-left"></i>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to={"/transfer"} className="nav-link">
                      <i className="fas fa-circle"></i> Transfer
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/received"} className="nav-link">
                      <i className="fas fa-circle"></i> Goods Received
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/consume"} className="nav-link">
                      <i className="fas fa-circle"></i> Consume
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/purchase-request"} className="nav-link">
                      <i className="fas fa-circle"></i> Purchase Request
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/master-parts"} className="nav-link">
                      <i className="fas fa-circle"></i> Master Parts
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/storage"} className="nav-link">
                      <i className="fas fa-circle"></i> Storage
                    </NavLink>
                  </li>
                </ul>
              </li>


            </ul>
          </nav>
          <br></br>
          <br></br>
          <br></br>
        </div>

        {/* <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut /> Logout
            </button>
          </li>
        </ul> */}
      </aside>
    </div>
  );
};

export default Sidebar;
