import useList from "../hooks/useList";
import { ListContext } from "./ListContext";

export default function ListProvider(props) {
    const { list, refreshList } = useList()

    return (
        <ListContext.Provider value={{
            list, refreshList
        }}>
            {props.children}
        </ListContext.Provider>
    )
}