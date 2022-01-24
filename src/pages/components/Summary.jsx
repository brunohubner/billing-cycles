/* eslint-disable react-hooks/exhaustive-deps */
import Grid from "../../common/layout/Grid"
import ValueBox from "../../common/widget/ValueBox"
import Row from "../../common/layout/Row"
import toBRL from "../../utils/toBRL"
import { useContext, useCallback, useEffect, useState } from "react"
import { InputContext } from "../../context/InputContext"

export default function Summary(props) {
    const { credits, debts } = useContext(InputContext)
    const [sumOfCredits, setSumOfCredts] = useState(0)
    const [sumOfDebts, setSumOfDebts] = useState(0)

    const getValue = useCallback(item => {
        return +item.value || 0
    }, [])

    const getSum = useCallback((total, value) => {
        return total + value
    }, [])

    useEffect(() => {
        setSumOfCredts(credits.map(getValue).reduce(getSum, 0))
    }, [credits])

    useEffect(() => {
        setSumOfDebts(debts.map(getValue).reduce(getSum, 0))
    }, [debts])

    return (
        <Grid cols="12">
            <fieldset>
                <legend>Resumo</legend>
                <Row>
                    <ValueBox
                        cols="12 4"
                        color="green"
                        icon="bank"
                        value={toBRL(sumOfCredits)}
                        text="Total de Créditos"
                    ></ValueBox>
                    <ValueBox
                        cols="12 4"
                        color="red"
                        icon="credit-card"
                        value={toBRL(sumOfDebts)}
                        text="Total de Débitos"
                    ></ValueBox>
                    <ValueBox
                        cols="12 4"
                        color="blue"
                        icon="money"
                        value={toBRL(sumOfCredits - sumOfDebts)}
                        text="Valor Consolidado"
                    ></ValueBox>
                </Row>
            </fieldset>
        </Grid>
    )
}
