import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import createAuthService from "../services/authService";
import showErrorsOrNext from "../utils/showErrorsOrNext";

const userKey = "@my-money-app:user"
const INITIAL_USER_STATE = JSON.parse(localStorage.getItem(userKey))

const auth = createAuthService()
export const AuthContext = createContext()

export default function AuthProvider(props) {
    const [user, setUser] = useState(INITIAL_USER_STATE)
    const [validToken, setValidToken] = useState(false)
    const [loading, setLoading] = useState(true)

    async function validateToken(token) {
        const resp = await auth.validateTokenService(token)
        showErrorsOrNext(resp, () => {
            resp.valid
            ? api.defaults.headers.common.authorization = `Bearer ${token}`
            : logout()
        setValidToken(resp.valid)
        })
    }

    async function signup(values) {
        const resp = await auth.submitService("signup", values)
        showErrorsOrNext(resp, () => {
            api.defaults.headers.common.authorization = `Bearer ${resp.token}`
            localStorage.setItem(userKey, JSON.stringify(resp))
            setUser(resp)
            setValidToken(true)
        })
    }
    
    async function login(values) {
        const resp = await auth.submitService("login", values)
        showErrorsOrNext(resp, () => {
            api.defaults.headers.common.authorization = `Bearer ${resp.token}`
            localStorage.setItem(userKey, JSON.stringify(resp))
            setUser(resp)
            setValidToken(true)
        })
    }

    async function logout() {
        api.defaults.headers.common.authorization = null
        localStorage.removeItem(userKey)
        setUser(null)
        setValidToken(false)
    }

    async function autoLogin() {
        if(!user) return
        await validateToken(user.token)
    }

    useEffect(() => {
        (async () => {
            await autoLogin()
            setLoading(false)
        })()
    }, [])

    return (
        <AuthContext.Provider value={{
            signup,
            login,
            logout,
            autoLogin,
            user,
            loading,
            validToken
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}