import { useCallback, useState } from "react"
import { createContext } from "react"

export const InputContext = createContext({})

const date = new Date()

const INITIAL_STATE = {
    id: null,
    name: "",
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    credits: [
        {
            id: null,
            name: "",
            value: 0
        }
    ],
    debts: [
        {
            id: null,
            name: "",
            value: 0,
            status: "PAGO"
        }
    ]
}

export default function InputProvider(props) {
    const [input, setInput] = useState(INITIAL_STATE)

    const setName = useCallback(value => {
        if (value.length > 45) return
        setInput(oldState => {
            return { ...oldState, name: value }
        })
    }, [])

    const setMonth = useCallback(value => {
        if (value < 1 || value > 12) return
        setInput(oldState => {
            return { ...oldState, month: value }
        })
    }, [])

    const setYear = useCallback(value => {
        if (value < 1970 || value > 2100) return
        setInput(oldState => {
            return { ...oldState, year: value }
        })
    }, [])

    const setCredits = useCallback(value => {
        setInput(oldState => {
            return { ...oldState, credits: value }
        })
    }, [])

    const setDebts = useCallback(value => {
        setInput(oldState => {
            return { ...oldState, debts: value }
        })
    }, [])

    const clearInputs = useCallback(() => {
        setInput(INITIAL_STATE)
    }, [])

    return (
        <InputContext.Provider
            value={{
                setInput,
                setName,
                setMonth,
                setYear,
                setCredits,
                setDebts,
                clearInputs,
                id: input.id,
                name: input.name,
                month: input.month,
                year: input.year,
                credits: input.credits,
                debts: input.debts
            }}
        >
            {props.children}
        </InputContext.Provider>
    )
}
