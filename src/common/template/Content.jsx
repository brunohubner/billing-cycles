import { Switch, Route } from "react-router"
import BillingCycles from "../../pages/BillingCycles"
import Dashboard from "../../pages/Dashboard"

export default function Content(props) {
    return (
        <div className="content-wrapper">
            <Switch>
                <Route path="/billing">
                    <BillingCycles></BillingCycles>
                </Route>
                <Route path="/">
                    <Dashboard></Dashboard>
                </Route>
            </Switch>
        </div>
    )
}