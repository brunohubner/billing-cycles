import createBillingCyclesService from "../services/billingCyclesService";
import { useCallback, useState } from "react";
import { useContext } from "react";
import { TabContext } from "./TabContext";
import { createContext } from "react";
import { InputContext } from "./InputContext";
import showErrorsOrNext from "../utils/showErrorsOrNext";

const billingCycle = createBillingCyclesService()

export const ListContext = createContext({})

export default function ListProvider(props) {
    const [list, setList] = useState([])
    const { showTabs, setSelected } = useContext(TabContext)
    const { clearInputs } = useContext(InputContext)

    const refreshList = useCallback(async () => {
        const newList = await billingCycle.getAll()
        setList(newList)
        clearInputs()
    }, [])

    const init = useCallback(async () => {
        await refreshList()
        showTabs("tabList", "tabCreate")
        setSelected("tabList")
    }, [])

    const add = useCallback(async data => {
        const resp = await billingCycle.add(data)
        showErrorsOrNext(resp.errors, init)
    }, [])

    const update = useCallback(async data => {
        const resp = await billingCycle.update(data)
        showErrorsOrNext(resp.errors, init)
    }, [])

    const remove = useCallback(async data => {
        const resp = await billingCycle.remove(data)
        showErrorsOrNext(resp.errors, init)
    }, [])

    return (
        <ListContext.Provider value={{
            list, 
            refreshList, 
            add,
            update,
            remove,
            init
        }}>
            {props.children}
        </ListContext.Provider>
    )
}