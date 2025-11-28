import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div className="container-fluid">

                <Link className="navbar-brand fw-bold text-primary d-flex align-items-center" to="/">
                     Abash Ansari
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold">
                       <li className="nav-item"><Link className="nav-link text-dark" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" to="/uploads">uploads</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" to="/about">About US</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" to="/pricing">Pricing</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" to="/register">Register</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" to="/login">Login</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" to="/contact">Contact</Link></li>
                   </ul>
                </div>
            </div>
        </nav>
    )
}

