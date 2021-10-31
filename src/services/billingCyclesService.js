import { api } from "./api"

const INITIAL_SUMMARY_STATE = { credit: 0, debt: 0 }
const INITIAL_COUNT_STATE = { value: 0 }

export default function createBillingCyclesService() {
    async function add(values) {
        let data = null
        await api.post("/billingCycles" , values)
            .then(resp => data = resp.data)
            .catch(err => data = err.response.data)
        return data
    }

    async function update(values) {
        let data = null
        await api.put(`/billingCycles/${values._id}`, values)
            .then(resp => data = resp.data)
            .catch(err => data = err.response.data)
    
        return data
    }

    async function remove(values) {
        let data = null
        await api.delete(`/billingCycles/${values._id}`)
            .then(resp => data = resp.data)
            .catch(err => data = err.response.data)
        return data
    }

    async function getAll() {
        let list = []
        await api.get("billingCycles")
            .then(resp => list = resp.data || [])
            .catch(err => console.log("Failed\n" + err.message))
        return list
    }

    async function getSummary() {
        let summary = INITIAL_SUMMARY_STATE
        await api.get("billingCycles/summary")
            .then(resp => summary = resp.data || INITIAL_SUMMARY_STATE)
            .catch(err => {
                console.log("Não foi possível obter o Sumário\n" + err.message)
            })
        return summary
    }

    async function getCount() {
        let count = INITIAL_COUNT_STATE
        await api.get("billingCycles/count")
            .then(resp => count = resp.data || INITIAL_COUNT_STATE)
            .catch(err => {
                console.log("Não foi possível obter o Count\n" + err.message)
            })
        return count
    }

    return {
        add,
        update,
        remove,
        getAll,
        getCount,
        getSummary
    }
}