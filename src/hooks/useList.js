import { useState } from "react"
import getUpdatedList from "../services/getUpdatedList"

export default function useList() {
    const [list, setList] = useState([])

    async function refreshList() {
        const newList = await getUpdatedList()
        setList(newList)
    }

    return { list, refreshList }
}