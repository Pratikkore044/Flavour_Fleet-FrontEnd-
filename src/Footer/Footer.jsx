import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top border-secondary bg-dark text-light">
      <div className="col-md-4 d-flex align-items-center">
        <Link to="/" className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1">
          <svg className="bi" width="30" height="24">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </Link>
        <span className="mb-3 mb-md-0">© 2025 FlavourFleet, Inc</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <Link className="text-light" to="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#twitter"></use>
            </svg>
          </Link>
        </li>
        <li className="ms-3">
          <Link className="text-light" to="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#instagram"></use>
            </svg>
          </Link>
        </li>
        <li className="ms-3">
          <Link className="text-light" to="/">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#facebook"></use>
            </svg>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
