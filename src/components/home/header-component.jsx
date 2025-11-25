import { React, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserProfileHeader from "../header/user-profile-header";

const HeaderComponent = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  useEffect(() => {
    document.body.classList.add("skin-blue");

    if (isCollapse) {
      document.body.classList.add("sidebar-collapse", "sidebar-open");
    } else {
      document.body.classList.remove("sidebar-collapse", "sidebar-open");
    }
  }, [isCollapse]);

  return (
    <header className="main-header">
      <NavLink to="/" className="logo">
        <b>Student</b>MS
      </NavLink>
      <nav className="navbar navbar-static-top" role="navigation">
        <a
          onClick={() => setIsCollapse(!isCollapse)}
          className="sidebar-toggle"
          data-toggle="offcanvas"
          role="button"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </a>
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            {/* Messages: style can be found in dropdown.less*/}
            <li className="dropdown messages-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-envelope-o" />
                <span className="label label-success">4</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 4 messages</li>
                <li>
                  {/* inner menu: contains the actual data */}
                  <ul className="menu">
                    <li>
                      {/* start message */}
                      <a href="#">
                        <div className="pull-left">
                          <img
                            src="../../dist/img/user2-160x160.jpg"
                            className="img-circle"
                            alt="User Image"
                          />
                        </div>
                        <h4>
                          Support Team
                          <small>
                            <i className="fa fa-clock-o" /> 5 mins
                          </small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>
                    {/* end message */}
                  </ul>
                </li>
                <li className="footer">
                  <a href="#">See All Messages</a>
                </li>
              </ul>
            </li>
            {/* Notifications: style can be found in dropdown.less */}
            <li className="dropdown notifications-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-bell-o" />
                <span className="label label-warning">10</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 10 notifications</li>
                <li>
                  {/* inner menu: contains the actual data */}
                  <ul className="menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-users text-aqua" /> 5 new members
                        joined today
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer">
                  <a href="#">View all</a>
                </li>
              </ul>
            </li>
            {/* Tasks: style can be found in dropdown.less */}
            <li className="dropdown tasks-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-flag-o" />
                <span className="label label-danger">9</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 9 tasks</li>
                <li>
                  {/* inner menu: contains the actual data */}
                  <ul className="menu">
                    <li>
                      {/* Task item */}
                      <a href="#">
                        <h3>
                          Design some buttons
                          <small className="pull-right">20%</small>
                        </h3>
                        <div className="progress xs">
                          <div
                            className="progress-bar progress-bar-aqua"
                            style={{ width: "20%" }}
                            role="progressbar"
                            aria-valuenow={20}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">20% Complete</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    {/* end task item */}
                  </ul>
                </li>
                <li className="footer">
                  <a href="#">View all tasks</a>
                </li>
              </ul>
            </li>
            {/* User Account: style can be found in dropdown.less */}
            <UserProfileHeader />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
