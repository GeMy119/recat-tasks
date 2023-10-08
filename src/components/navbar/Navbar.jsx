import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../images/header-logo.png"

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand img-fluid" to="/"><img src={Logo} alt="" width="50px" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <div className='w-100 d-flex justify-content-between'>
                                <div className='d-flex'>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/artist">Artist</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                                </div>
                                <li className="nav-item nav-sign">
                                    <Link className="nav-link" to="">Get a Ticket</Link>
                                </li>
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;