import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import Auth from "../pages/Auth"
import LoadingPage from "../common/LoadingPage"

export default function AuthOrApp(props) {
    const { user, validToken, loading } = useContext(AuthContext)

    return loading ? (
        <LoadingPage></LoadingPage>
    ) : !!user && !!validToken ? (
        props.children
    ) : (
        <Auth></Auth>
    )
}
