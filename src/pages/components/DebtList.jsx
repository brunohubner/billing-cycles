/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import Grid from "../../common/layout/Grid"
import { InputContext } from "../../context/InputContext"
import Input from "./Input"

const emptyDebt = {
    id: null,
    name: "",
    value: 0,
    status: ""
}

export default function DebtList(props) {
    const { debts, setDebts } = useContext(InputContext)
    const [localDebts, setLocalDebts] = useState(debts)

    function setDebtName(newName, index) {
        if (newName.length > 45) return
        setLocalDebts(oldState => {

            const newDebt = {
                id: oldState[index].id,
                name: newName,
                value: Number(oldState[index].value),
                status: oldState[index].status
            }

            const newDebts = [...oldState]
            newDebts[index] = newDebt
            return newDebts
        })
    }

    function setDebtValue(newValue, index) {
        if (newValue > 9999999 || newValue < 0) return
        setLocalDebts(oldState => {

            const newDebt = {
                id: oldState[index].id,
                name: oldState[index].name,
                value: Number(newValue),
                status: oldState[index].status
            }

            const newDebts = [...oldState]
            newDebts[index] = newDebt

            return newDebts
        })
    }

    function setDebtStatus(newStatus, index) {
        setLocalDebts(oldState => {

            const newDebt = {
                id: oldState[index].id,
                name: oldState[index].name,
                value: oldState[index].value,
                status: newStatus
            }

            const newDebts = [...oldState]
            newDebts[index] = newDebt

            return newDebts
        })
    }

    function add(index) {
        setLocalDebts(oldState => {
            const newDebts = [...oldState]
            newDebts.splice(index + 1, 0, emptyDebt)
            return newDebts
        })
    }

    function clone(debt, index) {
        const newDebt = {
            id: null,
            name: debt.name,
            value: debt.value,
            status: debt.status
        }

        setLocalDebts(oldState => {
            const newDebts = [...oldState]
            newDebts.splice(index + 1, 0, newDebt)
            return newDebts
        })
    }

    function remove(index) {
        if (debts.length <= 1) return
        setLocalDebts(oldState => {
            const newDebts = [...oldState]
            newDebts.splice(index, 1)
            return newDebts
        })
    }

    useEffect(() => {
        setDebts(localDebts)
    }, [localDebts])

    function renderRows() {
        return localDebts.map((debt, index) => {
            return (
                <tr key={index + 1}>
                    <td>
                        <Input
                            index={index}
                            value={debt.name}
                            placeholder="Informe o nome"
                            onChange={setDebtName}
                            readOnly={props.readOnly} ></Input>
                    </td>
                    <td>
                        <Input
                            index={index}
                            value={debt.value}
                            type="number"
                            placeholder="Informe o valor"
                            onChange={setDebtValue}
                            readOnly={props.readOnly} ></Input>
                    </td>
                    <td>
                        {props.readOnly ? (
                            <Input
                                index={index}
                                value={debt.status}
                                placeholder="PAGO | PENDENTE | AGENDADO"
                                onChange={setDebtStatus}
                                readOnly={props.readOnly} ></Input>
                        ) : (
                            <select
                                className="form-control"
                                onChange={e => setDebtStatus(e.target.value, index)}
                                value={debt.status} >
                                <option value="PAGO">PAGO</option>
                                <option value="PENDENTE">PENDENTE</option>
                                <option value="AGENDADO">AGENDADO</option>
                            </select>
                        )}
                    </td>
                    {props.readOnly ? false : (
                        <td className="table-actions">
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => add(index)} >
                                <i className="fa fa-plus"></i>
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning"
                                onClick={() => clone(debt, index)} >
                                <i className="fa fa-clone"></i>
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => remove(index)} >
                                <i className="fa fa-trash-o"></i>
                            </button>
                        </td>
                    )}
                </tr>
            )
        })
    }

    return (
        <Grid cols={props.cols}>
            <fieldset>
                <legend>Débitos</legend>
            </fieldset>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Status</th>
                        {props.readOnly ? false : (
                            <th>Ações</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </Grid>
    )
}