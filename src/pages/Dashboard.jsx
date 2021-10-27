import { useContext, useEffect } from "react";
import Row from "../common/layout/Row";
import ContentHeader from "../common/template/ContentHeader";
import Main from "../common/template/Main";
import ValueBox from "../common/widget/ValueBox";
import { SummaryContext } from "../context/SummayContext";

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
                        value={`R$ ${credit || 0}`}
                        text="Total de créditos" ></ValueBox>
                    <ValueBox 
                        cols="12 4" 
                        color="red"
                        icon="credit-card"
                        value={`R$ ${debt || 0}`}
                        text="Total de débitos" ></ValueBox>
                    <ValueBox 
                        cols="12 4" 
                        color="blue"
                        icon="money"
                        value={`R$ ${(credit - debt).toFixed(2) || 0}`}
                        text="Valor Consolidado" ></ValueBox>
                </Row>
            </Main>
        </div>
    )
}