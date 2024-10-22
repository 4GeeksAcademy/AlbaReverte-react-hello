import React from "react";

export default function Navbar(){

    return (
        <nav className="navbar bg-dark text-white navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="botones" d-flex justify content end>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-white" aria-disabled="true">Services</a>
              </li>
              <li class="nav-item">
              <a className="nav-link text-white" href="#">Contact</a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav>
    )
}
