import { Link } from "react-router-dom";

export default function MenuItem(props) {
    return (
        <li>
            <Link to={props.path}>
                <i className={`fa fa-${props.icon}`}></i> {props.label}
            </Link>
        </li>
    )
}