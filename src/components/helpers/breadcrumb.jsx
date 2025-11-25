import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <ol className="breadcrumb">
      <li>
        <a Link="/">
          <i className="fa fa-dashboard" /> Home
        </a>
      </li>
      <li>
        <Link to="/">Examples</Link>
      </li>
      <li className="active">Blank page</li>
    </ol>
  );
};

export default Breadcrumb;
