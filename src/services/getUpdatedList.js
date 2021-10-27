import { api } from "./api"

export default async function getUpdatedList() {
    let list = []
    await api.get()
        .then(resp => list = resp.data || [])
        .catch(err => console.log("Failed\n" + err.message))
    
    return list
}