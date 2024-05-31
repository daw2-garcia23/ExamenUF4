import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
              <div className="text-dark text-xl p-3 hover:text-gray-400">Gestió d'incidències FPLLEFIA</div>
          </li>
        </ul>
        <div className="ps-2">
          <Link to="/panel" className="btn btn-outline-success my-2 my-sm-0">Panel</Link>
        </div>
        <div className="ps-2">
          <Link to="/registro" className="btn btn-outline-success my-2 my-sm-0">Registro</Link>
        </div>
        <div className="ps-2">
          <Link to="/login" className="btn btn-outline-success my-2 my-sm-0">Login</Link>
        </div>
      </div>
    </nav>
  );
}


