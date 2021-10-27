import { useContext, useEffect } from "react"
import TabContent from "../common/tab/TabContent"
import TabHeader from "../common/tab/TabHeader"
import Tabs from "../common/tab/tabs"
import TabsContent from "../common/tab/TabsContent"
import TabsHeader from "../common/tab/TabsHeader"
import ContentHeader from "../common/template/ContentHeader"
import Main from "../common/template/Main"
import { ListContext } from "../context/ListContext"
import { TabContext } from "../context/TabContext"
import BillingCyclesList from "./components/BillingCyclesList"

export default function BillingCycles(props) {
    const { showTabs, setSelected } = useContext(TabContext)
    const { refreshList } = useContext(ListContext)

    useEffect(() => {
        setSelected("tabList")
        showTabs("tabList", "tabCreate")
        refreshList()
    }, [])

    return (
        <div>
            <ContentHeader title="Ciclos de Pagamentos" small="Cadastro"></ContentHeader>
            <Main>
                <Tabs>
                    <TabsHeader>
                        <TabHeader label="Listar" icon="bars" target="tabList"></TabHeader>
                        <TabHeader label="Incluir" icon="plus" target="tabCreate"></TabHeader>
                        <TabHeader label="Alterar" icon="pencil" target="tabUpdate"></TabHeader>
                        <TabHeader label="Excluir" icon="trash-o" target="tabDelete"></TabHeader>
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id="tabList">
                            <BillingCyclesList></BillingCyclesList>
                        </TabContent>
                        <TabContent id="tabCreate"><h1>Incluir</h1></TabContent>
                        <TabContent id="tabUpdate"><h1>Alterar</h1></TabContent>
                        <TabContent id="tabDelete"><h1>Excluir</h1></TabContent>
                    </TabsContent>
                </Tabs>
            </Main>
        </div>
    )
}