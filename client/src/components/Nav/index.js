import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="app-name">BET ON IT</div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">   
        <i className="fa fa-navicon"></i>
      </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">LOGIN <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Events">MY STUFF</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/SignUp">   REGISTER</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
