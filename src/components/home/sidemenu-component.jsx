import React from "react";
import { NavLink } from "react-router-dom";

const SidemenuComponent = () => {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        {/* Sidebar user panel */}
        <div className="user-panel">
          <div className="pull-left image">
            <img
              src="../../dist/img/user2-160x160.jpg"
              className="img-circle"
              alt="User Image"
            />
          </div>
          <div className="pull-left info">
            <p>Super Admin</p>
            <NavLink to="/">
              <i className="fa fa-circle text-success" /> Online
            </NavLink>
          </div>
        </div>
        <ul className="sidebar-menu">
          <li>
            <NavLink
              to="/ClassMaster"
              className={({ isActive }) => (isActive ? "active-menu" : "")}
            >
              Class Master
            </NavLink>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default SidemenuComponent;
