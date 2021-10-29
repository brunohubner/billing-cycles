import { api } from "../services/api";
import { useState, useCallback } from "react";
import { createContext } from "react";

export const SummaryContext = createContext({})

const INITIAL_SUMMARY_STATE = {
    credit: 0, debt: 0
}

export default function SummaryProvider(props) {
    const [summary, setSummary] = useState(INITIAL_SUMMARY_STATE)

    const getUpdatedSummary = useCallback(async () => {
        await api.get("summary")
            .then(resp => setSummary(oldState => resp.data || oldState))
            .catch(err => {
                console.log("Não foi possível atualizar o Dashboard!\n" + err.message)
            })
    }, [])

    return (
        <SummaryContext.Provider value={{
            credit: summary.credit,
            debt: summary.debt,
            getUpdatedSummary
        }}>
            {props.children}
        </SummaryContext.Provider>
    )
}