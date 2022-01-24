import { useCallback, useState } from "react"
import { createContext } from "react"

export const AuthInputContext = createContext({})

const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
}

export default function AuthInputProvider(props) {
    const [authInput, setAuthInput] = useState(INITIAL_STATE)

    const setAuthName = useCallback(value => {
        if (value.length > 45) return
        setAuthInput(oldState => {
            return { ...oldState, name: value }
        })
    }, [])

    const setAuthEmail = useCallback(value => {
        setAuthInput(oldState => {
            return { ...oldState, email: value }
        })
    }, [])

    const setAuthPassword = useCallback(value => {
        setAuthInput(oldState => {
            return { ...oldState, password: value }
        })
    }, [])

    const setAuthConfirmPassword = useCallback(value => {
        setAuthInput(oldState => {
            return { ...oldState, confirmPassword: value }
        })
    }, [])

    const clearAuthInputs = useCallback(() => {
        setAuthInput(INITIAL_STATE)
    }, [])

    return (
        <AuthInputContext.Provider
            value={{
                setAuthName,
                setAuthEmail,
                setAuthPassword,
                setAuthConfirmPassword,
                clearAuthInputs,
                name: authInput.name,
                email: authInput.email,
                password: authInput.password,
                confirmPassword: authInput.confirmPassword
            }}
        >
            {props.children}
        </AuthInputContext.Provider>
    )
}
