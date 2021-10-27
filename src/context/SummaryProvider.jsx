import useSummary from "../hooks/useSummary";
import { SummaryContext } from "./SummayContext";

export default function SummaryProvider(props) {

    const { credit, debt, getUpdatedSummary } =  useSummary()

    return (
        <SummaryContext.Provider value={{ 
            credit, debt, getUpdatedSummary
        }}>
            {props.children}
        </SummaryContext.Provider>
    )
}