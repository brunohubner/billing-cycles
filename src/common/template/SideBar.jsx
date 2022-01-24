import { memo } from "react"
import Menu from "./Menu"

function SideBar(props) {
    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                <Menu></Menu>
            </section>
        </aside>
    )
}

export default memo(SideBar)
