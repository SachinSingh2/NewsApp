import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav  style={{zIndex:"200"}} className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link  className="navbar-brand" to="/"><span style={{ fontWeight:"800"}}  >NewsExpress</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Genral</span></Link>
            </li>



            
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/Sports"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Sports</span></Link>
        </li>

        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/Entertainment"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Entertainment</span></Link>
        </li>

        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/Technology"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Technology</span></Link>
        </li>

        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/Health"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Health</span></Link>
        </li>

        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/Science"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Science</span></Link>
        </li>

          </ul>






        </div>
      </div>
    </nav>
  );
}
