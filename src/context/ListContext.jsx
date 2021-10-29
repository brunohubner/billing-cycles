import { useCallback, useState } from "react";
import addList from "../services/addList"
import { useContext } from "react";
import { TabContext } from "./TabContext";
import getUpdatedList from "../services/getUpdatedList";
import { createContext } from "react";
import { InputContext } from "./InputContext";

export const ListContext = createContext({})

export default function ListProvider(props) {
    const [list, setList] = useState([])
    const { showTabs, setSelected } = useContext(TabContext)
    const { clearInputs } = useContext(InputContext)

    const refreshList = useCallback(async () => {
        const newList = await getUpdatedList()
        setList(newList)
        clearInputs()
    }, [])

    const init = useCallback(async () => {
        await refreshList()
        showTabs("tabList", "tabCreate")
        setSelected("tabList")
    }, [])

    const add = useCallback(async data => {
        const errors = await addList(data)
        if(!errors) return init()
        alert("Informe dados válidos!")
        return
    }, [])


    return (
        <ListContext.Provider value={{
            list, 
            refreshList, 
            add
        }}>
            {props.children}
        </ListContext.Provider>
    )
}