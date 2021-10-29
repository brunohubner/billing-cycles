import { api } from "./api";

export default async function updateList(values) {
    let errors = null
    
    await api.put(values._id, values)
        .catch(err => errors = err.response.data.errors)

    return errors
}