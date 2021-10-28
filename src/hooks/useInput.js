import { useState } from "react"

const INITIAL_STATE = {
    name: "",
    month: 1,
    year: new Date().getFullYear()
}

export default function useInput() {
    const [input, setInput] = useState(INITIAL_STATE)

    function setName(value) {
        setInput(oldState => {
            return { ...oldState, name: value }
        })
    }

    function setMonth(value) {
        if(value < 1 || value > 12) return
        setInput(oldState => {
            return { ...oldState, month: value }
        })
    }

    function setYear(value) {
        if(value < 1970 || value > 2100) return
        setInput(oldState => {
            return { ...oldState, year: value }
        })
    }

    function clearInputs() {
        setInput(INITIAL_STATE)
    }

    return {
        setName, 
        setMonth, 
        setYear, 
        clearInputs,
        name: input.name,
        month: input.month,
        year: input.year
    }
}