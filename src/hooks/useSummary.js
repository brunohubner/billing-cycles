import { useState } from "react"
import { api } from "../services/api"

const INITIAL_SUMMARY_STATE = {
    credit: 0, debt: 0
}

export default function useSummary() {
    const [summary, setSummary] = useState(INITIAL_SUMMARY_STATE)
    
    async function getUpdatedSummary() {
        await api.get("summary")
            .then(resp => setSummary(oldState => resp.data || oldState))
            .catch(err => {
                console.log("Não foi possível atualizar o Dashboard!\n" + err.message)
            })
    }

    return { 
        credit: summary.credit,
        debt: summary.debt,
        getUpdatedSummary 
    }
}