import { useContext } from "react"
import { ListContext } from "../../context/ListContext"

export default function BillingCyclesList(props) {
    const { list } = useContext(ListContext)

    function renderRows() {
        return list.map(e => {
            return (
                <tr key={e._id}>
                    <td>{e.name}</td>
                    <td>{e.month}</td>
                    <td>{e.year}</td>
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
                    </tr>
                </thead>
                <tbody>
                    { renderRows() }
                </tbody>
            </table>
        </div>
    )
}