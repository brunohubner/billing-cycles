import { toast } from "react-toastify"
import toastConfig from "../utils/toastConfig"
import { api } from "./api"

const INITIAL_SUMMARY_STATE = { credit: 0, debt: 0 }
const INITIAL_COUNT_STATE = { value: 0 }

export default function createBillingCyclesService() {
    async function add(values) {
        let data = null
        await api.post("/billingCycles", values)
            .then(resp => data = resp.data)
            .catch(err => data = err.response.data)
        return data
    }

    async function update(values) {
        let data = null
        await api.put(`/billingCycles/${values.id}`, values)
            .then(resp => data = resp.data)
            .catch(err => data = err.response.data)

        return data
    }

    async function remove(values) {
        let data = null
        await api.delete(`/billingCycles/${values.id}`)
            .then(resp => data = resp.data)
            .catch(err => data = err.response.data)
        return data
    }

    async function getAll() {
        let list = []
        await api.get("billingCycles")
            .then(resp => list = resp.data || [])
            .catch(_ => {
                toast.error("Não foi possível obter a lista de registros!", {
                    ...toastConfig
                })
            })
        return list
    }

    async function getSummary() {
        let summary = INITIAL_SUMMARY_STATE
        await api.get("billingCycles/summary")
            .then(resp => summary = resp.data || INITIAL_SUMMARY_STATE)
            .catch(_ => {
                toast.error("Não foi possível obter o sumário!", {
                    ...toastConfig
                })
            })
        return summary
    }

    async function getCount() {
        let count = INITIAL_COUNT_STATE
        await api.get("billingCycles/count")
            .then(resp => count = resp.data || INITIAL_COUNT_STATE)
            .catch(_ => {
                toast.error("Não foi possível obter a quantidade de registros!", {
                    ...toastConfig
                })
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