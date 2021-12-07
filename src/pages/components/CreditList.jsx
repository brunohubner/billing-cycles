import { useContext, useEffect, useState } from "react"
import Grid from "../../common/layout/Grid"
import { InputContext } from "../../context/InputContext"
import Input from "./Input"

const emptyCredit = {
    id: null,
    name: "",
    value: 0
}

export default function CreditList(props) {
    const { credits, setCredits } = useContext(InputContext)
    const [localCredits, setLocalCredits] = useState(credits)

    function setCreditName(newName, index){
        if(newName.length > 45) return
        setLocalCredits(oldState => {

            const newCredit = {
                id: oldState[index].id,
                name: newName,
                value: Number(oldState[index].value)
            }

            const newCredits = [...oldState]
            newCredits[index] = newCredit
            return newCredits
        })
    }

    function setCreditValue(newValue, index) {
        if(newValue > 9999999 || newValue < 0) return
        setLocalCredits(oldState => {

            const newCredit = {
                id: oldState[index].id,
                name: oldState[index].name,
                value: Number(newValue)
            }

            const newCredits = [...oldState]
            newCredits[index] = newCredit

            return newCredits
        })
    }

    function add(index) {
        setLocalCredits(oldState => {
            const newCredits = [...oldState]
            newCredits.splice(index + 1, 0, emptyCredit)
            return newCredits
        })
    }

    function clone(credit, index) {
        const newCredit = {
            id: null,
            name: credit.name,
            value: credit.value
        }

        setLocalCredits(oldState => {
            const newCredits = [...oldState]
            newCredits.splice(index + 1, 0, newCredit)
            return newCredits
        })
    }

    function remove(index) {
        if(credits.length <= 1) return
        setLocalCredits(oldState => {
            const newCredits = [...oldState]
            newCredits.splice(index, 1)
            return newCredits
        })
    }

    useEffect(() => {
        setCredits(localCredits)
    }, [localCredits])

    function renderRows() {
        return localCredits.map((credit, index) => {
            return (
                <tr key={index + 1}>
                    <td>
                        <Input
                            index={index}
                            value={credit.name}
                            placeholder="Informe o nome"
                            onChange={setCreditName}
                            readOnly={props.readOnly} ></Input>
                    </td>
                    <td>
                        <Input
                            index={index}
                            value={credit.value}
                            type="number"
                            placeholder="Informe o valor"
                            onChange={setCreditValue}
                            readOnly={props.readOnly} ></Input>
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
                                onClick={() => clone(credit, index)} >
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
                <legend>Créditos</legend>
            </fieldset>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Valor</th>
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