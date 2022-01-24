import { useContext } from "react"
import { TabContext } from "../../context/TabContext"

export default function TabContent(props) {
    const { selected, tabsShowed } = useContext(TabContext)

    return tabsShowed[props.id] ? (
        <div
            id={props.id}
            className={`tab-pane ${selected === props.id ? "active" : ""}`}
        >
            {props.children}
        </div>
    ) : (
        false
    )
}
