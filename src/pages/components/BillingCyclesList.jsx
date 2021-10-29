import { useContext } from "react"
import { ListContext } from "../../context/ListContext"
import { TabContext } from "../../context/TabContext"

export default function BillingCyclesList(props) {
    const { list } = useContext(ListContext)
    const { showUpdate, showDelete } = useContext(TabContext)

    function renderRows() {
        return list.map(billing => {
            return (
                <tr key={billing._id}>
                    <td>{billing.name}</td>
                    <td>{billing.month}</td>
                    <td>{billing.year}</td>
                    <td>
                        <button
                            className="btn btn-warning"
                            onClick={() => showUpdate(billing)} >
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => showDelete(billing)} >
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    { renderRows() }
                </tbody>
            </table>
        </div>
    )
}