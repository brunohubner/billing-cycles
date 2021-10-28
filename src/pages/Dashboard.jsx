import { useContext, useEffect } from "react";
import Row from "../common/layout/Row";
import ContentHeader from "../common/template/ContentHeader";
import Main from "../common/template/Main";
import ValueBox from "../common/widget/ValueBox";
import { SummaryContext } from "../context/SummaryContext";
import toBRL from "../utils/toBRL";

export default function Dashboard(props) {
    const { credit, debt, getUpdatedSummary } = useContext(SummaryContext)

    useEffect(getUpdatedSummary, [])

    return (
        <div>
            <ContentHeader title="Dashboard" small="versão 1.0"></ContentHeader>
            <Main>
                <Row>
                    <ValueBox 
                        cols="12 4" 
                        color="green"
                        icon="bank"
                        value={toBRL(credit)}
                        text="Total de créditos" ></ValueBox>
                    <ValueBox 
                        cols="12 4" 
                        color="red"
                        icon="credit-card"
                        value={toBRL(debt)}
                        text="Total de débitos" ></ValueBox>
                    <ValueBox 
                        cols="12 4" 
                        color="blue"
                        icon="money"
                        value={toBRL(credit - debt)}
                        text="Valor Consolidado" ></ValueBox>
                </Row>
            </Main>
        </div>
    )
}