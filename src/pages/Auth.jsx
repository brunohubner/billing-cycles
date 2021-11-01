import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwiZW1haWwiOiJpbml0IiwibmFtZSI6ImluaXQiLCJfaWQiOiJpbml0IiwiX192IjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX2lkIjp0cnVlLCJuYW1lIjp0cnVlLCJlbWFpbCI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsIl9fdiI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH0sInN0cmljdE1vZGUiOnRydWUsInNlbGVjdGVkIjp7fSwiX2lkIjoiNjE3ZGM2NjRhYWY4YWE1NWYzY2E3MzZiIn0sIiRpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX2lkIjoiNjE3ZGM2NjRhYWY4YWE1NWYzY2E3MzZiIiwibmFtZSI6IkJydW5vIEh1Ym5lciIsImVtYWlsIjoiYnJ1bm9odWJuZXJkZXZAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkc08zTGRvL3AvczJZT0FiY29NZEpRZTFPQ05tZk1CaEx4bkFGRFBYMDFBTlRkWHN0TFVuZlMiLCJfX3YiOjB9LCIkaW5pdCI6dHJ1ZSwiaWF0IjoxNjM1Nzc1MDI0LCJleHAiOjE2MzU4NjE0MjR9.9BPI9GF7O0C3xSS9_iwARCKOP0xxMpXiJEABQevcKzU"
const mockUser = {
    name: "Bruno Hubner",
    email: "brunohubnerdev@gmail.com",
    password: "abc1234",
    confirmPassword: "abc1234"
}

export default function Auth(props) {
    const { login, signup, validateToken } = useContext(AuthContext)

    return (
        <div>
            <h1>Auth component</h1>
            <button type="button" onClick={() => login({
                email: mockUser.email, 
                password: mockUser.password
                })}>Login</button>
            <button type="button" onClick={() => signup({
                ...mockUser
                })}>Cadastrar</button>
        </div>
    )
}