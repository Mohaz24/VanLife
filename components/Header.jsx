import React from "react"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <>
        <nav className="nav">
            <Link to="/" className="title">#VANLIFE</Link>
            <Link to="/host"className="nav-links" >Host</Link>
            <Link to="/about" className="nav-links">About</Link>
            <Link to="/vans"className="nav-links" >Vans</Link>
        </nav>
        </>
    )
}