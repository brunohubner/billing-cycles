import { useCallback, useContext, useState } from "react";
import { createContext } from "react";
import { InputContext } from "./InputContext";

export const TabContext = createContext({})

export default function TabProvider(props) {
    const [selected, setSelected] = useState("")
    const [tabsShowed, setTabsShowed] = useState({})
    const { setInput } = useContext(InputContext)

    const showTabs = useCallback((...tabs) => {
        const tabsShowed2 = {}
        tabs.forEach(tab => tabsShowed2[tab] = true)
        setTabsShowed(tabsShowed2)
    }, [])

    const showUpdate  = useCallback((billing) => {
        setInput(billing)
        showTabs("tabUpdate")
        setSelected("tabUpdate")
    }, [])

    return (
        <TabContext.Provider value={{
            showUpdate,
            setSelected, 
            showTabs, 
            tabsShowed, 
            selected
        }}>
            {props.children}
        </TabContext.Provider>
    )
}