import { useCallback, useState } from "react"
import { createContext } from "react";

export const InputContext = createContext({})

const date = new Date()

const INITIAL_STATE = {
    name: "",
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    credits: [],
    debts: []
}

export default function InputProvider(props) {
    const [input, setInput] = useState(INITIAL_STATE)

    const setName = useCallback(value => {
        setInput(oldState => {
            return { ...oldState, name: value }
        })
    }, []) 

    const setMonth = useCallback(value => {
        if(value < 1 || value > 12) return
        setInput(oldState => {
            return { ...oldState, month: value }
        })
    }, [])

    const setYear = useCallback(value => {
        if(value < 1970 || value > 2100) return
        setInput(oldState => {
            return { ...oldState, year: value }
        })
    }, [])

    const clearInputs = useCallback(() => {
        setInput(INITIAL_STATE)
    }, [])
 
    return (
        <InputContext.Provider value={{
            setInput,
            setName, 
            setMonth, 
            setYear, 
            clearInputs,
            name: input.name, 
            month: input.month, 
            year: input.year
        }}>
            {props.children}
        </InputContext.Provider>
    )
}