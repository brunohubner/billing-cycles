/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { memo } from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"

function Header(props) {
    return (
        <header className="main-header">
            <Link to="/" className="logo">
                <span className="logo-mini">
                    <b>My</b>M
                </span>
                <span className="logo-lg">
                    <i className="fa fa-money"></i>
                    <b> My</b> Money
                </span>
            </Link>
            <nav className="navbar navbar-static-top">
                <a
                    href=""
                    className="sidebar-toggle"
                    data-toggle="offcanvas"
                ></a>
                <Navbar></Navbar>
            </nav>
        </header>
    )
}

export default memo(Header)
