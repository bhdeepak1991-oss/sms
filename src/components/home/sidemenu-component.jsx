import React from 'react';

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
            <p>Alexander Pierce</p>
            <a href="#">
              <i className="fa fa-circle text-success" /> Online
            </a>
          </div>
        </div>
        <ul className="sidebar-menu">
          <li>
            <a href="../calendar.html">
              <i className="fa fa-calendar" /> <span>Calendar</span>
              <small className="label pull-right bg-red">3</small>
            </a>
          </li>
     
        </ul>
      </section>
    
    </aside>
    );
}

export default SidemenuComponent;
