import { useContext } from "react";
import { InputContext } from "../../context/InputContext";
import { ListContext } from "../../context/ListContext";
import LabelAndInput from "./LabelAndInput";

export default function BillingCyclesForm(props) {
    const {
        setName, 
        setMonth, 
        setYear,
        name, 
        month, 
        year
    } = useContext(InputContext)

    const { add } = useContext(ListContext)

    return (
        <form role="form">
            <div className="box-body">
                <LabelAndInput
                    name="name"
                    label="Nome"
                    cols="12 4"
                    value={name}
                    onChange={setName}
                    placeholder="Informe o nome" ></LabelAndInput>
                <LabelAndInput
                    name="month"
                    label="Mês"
                    type="number"
                    cols="12 4"
                    value={month}
                    onChange={setMonth}
                    placeholder="Informe o mês" ></LabelAndInput>
                <LabelAndInput
                    name="year"
                    label="Ano"
                    type="number"
                    cols="12 4"
                    value={year}
                    onChange={setYear}
                    placeholder="Informe o Ano" ></LabelAndInput>
            </div>
            <div className="box-footer">
                <button 
                    type="submit" 
                    className="btn btn-primary" 
                    onClick={e => {
                        e.preventDefault()
                        add({
                            name: String(name),
                            month: Number(month),
                            year: Number(year),
                            credits: [],
                            debts: []
                        })
                    }}>Submit</button>
            </div>
        </form>
    )
}