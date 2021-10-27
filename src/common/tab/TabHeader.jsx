import { useContext } from "react"
import { TabContext } from "../../context/TabContext"

export default function TabHeader(props) {
    const { selected, setSelected, tabsShowed } = useContext(TabContext)

    return tabsShowed[props.target] ? (
        <li className={selected === props.target ? "active" : ""}>
            <a  href=""
                onClick={e => {
                    e.preventDefault()
                    setSelected(props.target)
                }}
                data-toggle="tab"
                data-target={props.target} >
                    <i className={`fa fa-${props.icon}`}></i> {props.label}
            </a>
        </li>
    ) : false
}