/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import Gravatar from "react-gravatar"

export default function Navbar(props) {
    const [open, setOpen] = useState(false)
    const {
        user: { name, email },
        logout
    } = useContext(AuthContext)

    function changeOpen() {
        setOpen(!open)
    }

    return (
        <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
                <li
                    onMouseLeave={changeOpen}
                    className={`dropdown user user-menu ${open ? "open" : ""}`}
                >
                    <a
                        href=""
                        onClick={e => {
                            e.preventDefault()
                            changeOpen()
                        }}
                        aria-expanded={open ? "true" : "false"}
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                    >
                        <Gravatar email={email} className="user-image" />
                        <span className="hidden-xs">{name}</span>
                    </a>
                    <ul className="dropdown-menu">
                        <li className="user-header">
                            <Gravatar email={email} className="img-circle" />
                            <p>
                                {name}
                                <small>{email}</small>
                            </p>
                        </li>
                        <li className="user-footer">
                            <div className="pull-right">
                                <a
                                    href=""
                                    onClick={e => {
                                        e.preventDefault()
                                        logout()
                                    }}
                                    className="btn btn-default btn-flat"
                                >
                                    Sair
                                </a>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
