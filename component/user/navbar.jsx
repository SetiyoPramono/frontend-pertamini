import React from 'react'
import Header from '../../src/layouts/header/Header'
import Image from 'next/image'
import LogoPertamini from '../../src/assets/images/logos/logopertamina2.svg'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">
                    <Image src={LogoPertamini} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Link</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="text" placeholder="Search" />
                            <button className="btn btn-danger" type="button">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}
