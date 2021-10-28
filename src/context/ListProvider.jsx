import useList from "../hooks/useList";
import { ListContext } from "./ListContext";

export default function ListProvider(props) {
    const { 
        list, 
        refreshList, 
        add 
    } = useList()

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