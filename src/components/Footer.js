import React from 'react'

import {
    Link
  } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to='' className="nav-link px-2 text-body-secondary">Home</Link></li>
                    <li className="nav-item"><Link to='' className="nav-link px-2 text-body-secondary">business</Link></li>
                    <li className="nav-item"><Link to='' className="nav-link px-2 text-body-secondary">entertainment</Link></li>
                    <li className="nav-item"><Link to='' className="nav-link px-2 text-body-secondary">general</Link></li>
                    <li className="nav-item"><Link to='' className="nav-link px-2 text-body-secondary">health</Link></li>
                    <li className="nav-item"><Link to='' className="nav-link px-2 text-body-secondary">science</Link></li>
                    <li className="nav-item"><Link to='' className="nav-link px-2 text-body-secondary">sports</Link></li>
                    <li className="nav-item"><Link to='' className="nav-link px-2 text-body-secondary">technology</Link></li>
                </ul>
                <p className="text-center text-body-secondary">© 2024 Created By: Abdul Hafeez</p>
            </footer>
        </div>
    )    
    }


export default Footer