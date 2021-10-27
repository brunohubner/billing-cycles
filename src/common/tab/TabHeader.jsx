export default function TabHeader(props) {
    return (
        <li>
            <a  href=""
                onClick={e => e.preventDefault()}
                data-toggle="tab"
                data-target={props.target} >
                    <i className={`fa fa-${props.icon}`}></i> {props.label}
            </a>
        </li>
    )
}