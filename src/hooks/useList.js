import {  useContext, useState } from "react"
import addList from "../services/addList"
import getUpdatedList from "../services/getUpdatedList"
import { TabContext } from "../context/TabContext"

export default function useList() {
    const [list, setList] = useState([])
    const { showTabs, setSelected } = useContext(TabContext)

    async function refreshList() {
        const newList = await getUpdatedList()
        setList(newList)
    }

    async function init() {
        await refreshList()
        showTabs("tabList", "tabCreate")
        setSelected("tabList")
    }

    async function add(data) {
        const errors = await addList(data)
        if(!errors) return init()
        alert("Informe dados válidos!")
        return
    }

    return { 
        list, 
        refreshList,
        add 
    }
}