/* eslint-disable no-restricted-globals */
import { Switch, Route } from "react-router"
import BillingCycles from "../../pages/BillingCycles"
import Dashboard from "../../pages/Dashboard"

export default function Content(props) {
    const contentHeight = window.innerHeight - 50 - 51
    return (
        <div className="content-wrapper" style={{
            minHeight: `${contentHeight}px`
        }}>
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