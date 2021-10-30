import { useContext, useEffect, useState } from "react";
import { InputContext } from "../../context/InputContext";
import { ListContext } from "../../context/ListContext";
import { TabContext } from "../../context/TabContext";
import CreditList from "./CreditList";
import DebtList from "./DebtList";
import LabelAndInput from "./LabelAndInput";

export default function BillingCyclesForm(props) {
    const [ submitLabel, setSubmitLabel ] = useState("Salvar")
    const [ submitClass, setSubmitClass ] = useState("primary")
    const [readOnly, setReadOnly] = useState(false)

    const {
        setName, 
        setMonth,
        setYear,
        _id,
        name, 
        month, 
        year,
        credits,
        debts
    } = useContext(InputContext)

    const { add, update, remove, init } = useContext(ListContext)
    const { selected } = useContext(TabContext)

    const billing = {
        _id: String(_id),
        name: String(name),
        month: Number(month),
        year: Number(year),
        credits: credits,
        debts: debts
    }

    const billingWithoutId = {
        name: billing.name,
        month: billing.month,
        year: billing.year,
        credits: billing.credits,
        debts: billing.debts
    }

    function submit() {
        selected === "tabCreate" && add(billingWithoutId)
        selected === "tabUpdate" && update(billing)
        selected === "tabDelete" && remove(billing)
    }

    useEffect(() => {
        setReadOnly(false)
        if(selected === "tabCreate") {
            setSubmitLabel("Salvar")
            setSubmitClass("primary")
        } else if(selected === "tabUpdate") {
            setSubmitLabel("Alterar")
            setSubmitClass("info")
        } else if(selected === "tabDelete") {
            setSubmitLabel("Excluir")
            setSubmitClass("danger")
            setReadOnly(true)
        }
    }, [selected])


    return (
        <form role="form">
            <div className="box-body">
                <LabelAndInput
                    name="name"
                    label="Nome"
                    cols="12 4"
                    value={name}
                    onChange={setName}
                    readOnly={readOnly}
                    placeholder="Informe o nome" ></LabelAndInput>
                <LabelAndInput
                    name="month"
                    label="Mês"
                    type="number"
                    cols="12 4"
                    value={month}
                    onChange={setMonth}
                    readOnly={readOnly}
                    placeholder="Informe o mês" ></LabelAndInput>
                <LabelAndInput
                    name="year"
                    label="Ano"
                    type="number"
                    cols="12 4"
                    value={year}
                    onChange={setYear}
                    readOnly={readOnly}
                    placeholder="Informe o Ano" ></LabelAndInput>
                <CreditList 
                    cols="12 6"
                    readOnly={readOnly} ></CreditList>
                <DebtList 
                    cols="12 6"
                    readOnly={readOnly} ></DebtList>
            </div>
            <div className="box-footer">
                <button 
                    type="submit" 
                    className={`btn btn-${submitClass}`}
                    onClick={e => {
                        e.preventDefault()
                        submit()
                    }}>
                        {submitLabel}
                    </button>
                <button
                    type="button"
                    className="btn btn-default"
                    onClick={init} >Cancelar</button>
            </div>
        </form>
    )
}