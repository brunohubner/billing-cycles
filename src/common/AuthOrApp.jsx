import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import Auth from "../pages/Auth"

export default function AuthOrApp(props) {
    const { user, validToken, autoLogin} = useContext(AuthContext)

    useEffect(() => {
        (async () => {
            await autoLogin()
        })()
    }, [])
    
    return !!user && !!validToken
        ? props.children
        : <Auth></Auth>


}