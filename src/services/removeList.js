import { api } from "./api";

export default async function updateList(values) {
    let errors = null
    
    await api.delete(values._id)
        .catch(err => errors = err.response.data.errors)

    return errors
}