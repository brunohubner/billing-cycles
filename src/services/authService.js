import { api } from "./api"

export default function createAuthService() {
    async function submitService(endpoint, values) {
        let data = null
        await api
            .post(endpoint, values)
            .then(resp => (data = resp.data))
            .catch(err => (data = err.response.data))
        return data
    }

    async function validateTokenService(token) {
        let data = null
        await api
            .post("validateToken", { token })
            .then(resp => (data = resp.data))
            .catch(err => (data = err.response.data))
        return data
    }

    return {
        submitService,
        validateTokenService
    }
}
