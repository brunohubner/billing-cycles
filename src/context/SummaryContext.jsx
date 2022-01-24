import { useState } from "react"
import { createContext } from "react"
import createBillingCyclesService from "../services/billingCyclesService"

const INITIAL_SUMMARY_STATE = { credit: 0, debt: 0 }
const billingCycle = createBillingCyclesService()
export const SummaryContext = createContext({})

export default function SummaryProvider(props) {
    const [summary, setSummary] = useState(INITIAL_SUMMARY_STATE)

    async function getUpdatedSummary() {
        const newSummary = await billingCycle.getSummary()
        setSummary(newSummary)
    }

    return (
        <SummaryContext.Provider
            value={{
                credit: summary.credit,
                debt: summary.debt,
                getUpdatedSummary
            }}
        >
            {props.children}
        </SummaryContext.Provider>
    )
}
