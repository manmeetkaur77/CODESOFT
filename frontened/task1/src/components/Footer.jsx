import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';



function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
            Naukri.Khojo
          </a>
          <span className="mb-3 mb-md-0 text-white">© 2024 Naukri.Khojo, Inc</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-white" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
          <li className="ms-3"><a className="text-white" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
          <li className="ms-3"><a className="text-white" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
