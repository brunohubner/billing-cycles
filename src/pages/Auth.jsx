import "../styles/Auth.css"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import Grid from "../common/layout/Grid"
import Row from "../common/layout/Row"
import InputAuth from "./components/InputAuth"
import { AuthInputContext } from "../context/AuthInputContext"

export default function Auth(props) {
    const [loginMode, setLoginMode] = useState(true)
    const { login, signup } = useContext(AuthContext)
    const { 
        setAuthName,
        setAuthEmail,
        setAuthPassword,
        setAuthConfirmPassword,
        clearAuthInputs,
        name,
        email,
        password,
        confirmPassword
    } = useContext(AuthInputContext)

    function changeLoginMode() {
        setLoginMode(!loginMode)
    }

    let formData = {}

    if(loginMode) {
        formData = {
            email,
            password
        }
    } else {
        formData = {
            name,
            email,
            password,
            confirmPassword
        }
    }

    return (
        <>
        <div className="login-box">
            <div className="login-logo"><b> My</b> Money App</div>
            <div className="login-box-body">
                <p className="login-box-msg">{
                    loginMode ? "Bem-vindo!" : "Cadastre-se para utilizar o App"
                }</p>
                <form onSubmit={loginMode
                                    ? e => {
                                        e.preventDefault()
                                        login(formData, clearAuthInputs) 
                                    }
                                    : e => {
                                        e.preventDefault()
                                        signup(formData, clearAuthInputs)
                                    }}>
                    <InputAuth
                        value={name}
                        hide={loginMode}
                        placeholder="Nome"
                        icon="user"
                        onChange={setAuthName} />
                    <InputAuth
                        value={email}
                        type="email"
                        placeholder="E-mail"
                        icon="envelope"
                        onChange={setAuthEmail} />
                    <InputAuth
                        value={password}
                        type="password"
                        placeholder="Senha"
                        icon="lock"
                        onChange={setAuthPassword} />
                    <InputAuth
                        value={confirmPassword}
                        hide={loginMode}
                        type="password"
                        placeholder="Confirmar Senha"
                        icon="lock"
                        onChange={setAuthConfirmPassword} />
                    <Row>
                        <Grid cols="4">
                            <button type="submit"
                                className="btn btn-primary btn-block btn-flat">
                                {loginMode ? 'Entrar' : 'Registrar'}
                            </button>
                        </Grid>
                    </Row>
                </form>
                <br />
                <a onClick={e => {
                    e.preventDefault()
                    changeLoginMode()
                    clearAuthInputs()
                }}>
                    {loginMode ? 'Novo usuário? Registrar aqui!' :
                        'Já é cadastrado? Entrar aqui!'}
                </a>
            </div>
        </div>
        <div className="credits"><span>por &nbsp;
            <a href="https://github.com/brunohubner" 
                target="_blank">Bruno Hubner</a></span></div>
        </>
    )
}