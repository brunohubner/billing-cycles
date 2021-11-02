import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar(props) {
    const [open, setOpen] = useState(false)
    const { user: { name, email }, logout } = useContext(AuthContext)

    function changeOpen() {
        setOpen(!open)
    }

    return (
        <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
                <li onMouseLeave={changeOpen}
                    className={`dropdown user user-menu ${open ? 'open' : ''}`}>
                    <a href="" onClick={e => {
                        e.preventDefault()
                        changeOpen()
                    }}
                        aria-expanded={open ? 'true' : 'false'}
                        className="dropdown-toggle"
                        data-toggle="dropdown">
                        <img src="http://lorempixel.com/160/160/abstract"
                            className="user-image" alt={name} />
                        <span className="hidden-xs">{name}</span>
                    </a>
                    <ul className="dropdown-menu">
                        <li className="user-header">
                            <img src="http://lorempixel.com/160/160/abstract"
                                className="img-circle" alt="User Image" />
                            <p>{name}<small>{email}</small></p>
                        </li>
                        <li className="user-footer">
                            <div className="pull-right">
                                <a href="" onClick={e => {
                                    e.preventDefault()
                                    logout()
                                }}
                                    className="btn btn-default btn-flat">Sair</a>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}