import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Header(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">Examen UF4</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link text-white px-3" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white px-3" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white px-3" to="/porsi">Porsi</Link>
            </li>
          </ul>
        </div>
      </div>
        
    </nav>
  );
};
