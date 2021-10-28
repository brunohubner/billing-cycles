import useInput from "../hooks/useInput"
import { InputContext } from "./InputContext"

export default function InputProvider(props) {
    const {
        setName, 
        setMonth, 
        setYear, 
        clearInputs,
        name, 
        month, 
        year 
    } = useInput()

    return (
        <InputContext.Provider value={{
            setName, 
            setMonth, 
            setYear, 
            clearInputs,
            name, 
            month, 
            year
        }}>
            {props.children}
        </InputContext.Provider>
    )
}