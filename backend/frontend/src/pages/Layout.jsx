import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          {children}
        </div>
        <footer className="main-footer">
          <div className="float-right d-none d-sm-inline">Easy Maintenance</div>

          <strong>Copyright &copy; 2022
            <a target="_blank" href="https://www.extreme-maintenance.com"> Adikari Wisesa Indonesia</a>.</strong>
            &nbsp;
            All rights reserved.
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Layout;
