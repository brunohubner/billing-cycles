import { api } from "./api";

export default async function addList(values) {
    let errors = null
    
    await api.post("" , values)
        .catch(err => errors = err.response.data.errors)

    return errors
}