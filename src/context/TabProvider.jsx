import useTab from "../hooks/useTab";
import { TabContext } from "./TabContext";

export default function TabProvider(props) {
    const { 
        setSelected, 
        showTabs, 
        tabsShowed, 
        selected
    } = useTab()

    return (
        <TabContext.Provider value={{
            setSelected, 
            showTabs, 
            tabsShowed, 
            selected
        }}>
            {props.children}
        </TabContext.Provider>
    )
}