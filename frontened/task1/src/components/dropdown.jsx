
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/dropdown.css';  // Custom CSS file for additional styling

function Dropdown({ theme, buttonLabel }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown-container ${theme === 'dark' ? 'dropdown-dark' : ''}`}>
      <button className="btn btn-primary" onClick={toggleDropdown}>
        {buttonLabel}
      </button>
      {isOpen && (
        <div className={`dropdown-menu d-block position-static pt-0 mx-0 rounded-3 shadow overflow-hidden w-280px ${theme === 'dark' ? 'dropdown-dark' : ''}`} data-bs-theme={theme}>
          <form className={`p-2 mb-2 ${theme === 'dark' ? 'bg-dark border-bottom border-dark' : 'bg-body-tertiary border-bottom'}`}>
            <input type="search" className={`form-control ${theme === 'dark' ? 'bg-dark' : ''}`} autoComplete="false" placeholder="Type to filter..." />
          </form>
          <ul className="list-unstyled mb-0">
            <li>
              <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                <span className="d-inline-block bg-success rounded-circle p-1"></span>
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                <span className="d-inline-block bg-primary rounded-circle p-1"></span>
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                <span className="d-inline-block bg-danger rounded-circle p-1"></span>
                Something else here
              </a>
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                <span className="d-inline-block bg-info rounded-circle p-1"></span>
                Separated link
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
