import { useState } from "react"

export default function useTab() {
    const [selected, setSelected] = useState("")
    const [tabsShowed, setTabsShowed] = useState({})

    function showTabs(...tabs) {
        const tabsShowed2 = {}
        tabs.forEach(tab => tabsShowed2[tab] = true)
        setTabsShowed(tabsShowed2)
    }

    return { selected, setSelected, tabsShowed, showTabs }
}