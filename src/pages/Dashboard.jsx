import Row from "../common/layout/Row";
import ContentHeader from "../common/template/ContentHeader";
import Main from "../common/template/Main";
import ValueBox from "../common/widget/ValueBox";

export default function Dashboard(props) {
    return (
        <div>
            <ContentHeader title="Dashboard" small="versão 1.0"></ContentHeader>
            <Main>
                <Row>
                    <ValueBox 
                        cols="12 4" 
                        color="green"
                        icon="bank"
                        value={`R$ 200,00`}
                        text="Total de créditos" ></ValueBox>
                    <ValueBox 
                        cols="12 4" 
                        color="red"
                        icon="credit-card"
                        value={`R$ 80,00`}
                        text="Total de débitos" ></ValueBox>
                    <ValueBox 
                        cols="12 4" 
                        color="blue"
                        icon="money"
                        value={`R$ 120,00`}
                        text="Valor Consolidado" ></ValueBox>
                </Row>
            </Main>
        </div>
    )
}