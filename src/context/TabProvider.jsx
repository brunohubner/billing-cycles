import useTab from "../hooks/useTab";
import { TabContext } from "./TabContext";

export default function TabProvider(props) {
    const { selected, setSelected, tabsShowed, showTabs } = useTab()

    return (
        <TabContext.Provider value={{
             selected, setSelected, tabsShowed, showTabs 
        }}>
            {props.children}
        </TabContext.Provider>
    )
}