import React from 'react';

const DashboardPage = () => {
    return (
        <div className="content-wrapper">
    
      <section className="content-header">
        <h1>
          Blank page
          <small>it all starts here</small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <a href="#">
              <i className="fa fa-dashboard" /> Home
            </a>
          </li>
          <li>
            <a href="#">Examples</a>
          </li>
          <li className="active">Blank page</li>
        </ol>
      </section>
 
      <section className="content">{/* Default box */}</section>
    
    </div>
    );
}

export default DashboardPage;
