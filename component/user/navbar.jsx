import React from 'react'
import Header from '../../src/layouts/header/Header'
import Image from 'next/image'
import LogoPertamini from '../../src/assets/images/logos/logopertamina2.svg'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Image src={LogoPertamini} alt="Logo"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-3">
                            <li className="nav-item">
                                <a className="nav-link text-body" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-body" href="#">Bisnis Kami</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-body" href="#">Media & Informasi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-body" href="#">Tentang Kami</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-danger" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
