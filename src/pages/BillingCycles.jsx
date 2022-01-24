/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import TabContent from "../common/tab/TabContent"
import TabHeader from "../common/tab/TabHeader"
import Tabs from "../common/tab/Tabs"
import TabsContent from "../common/tab/TabsContent"
import TabsHeader from "../common/tab/TabsHeader"
import ContentHeader from "../common/template/ContentHeader"
import Main from "../common/template/Main"
import { ListContext } from "../context/ListContext"
import { TabContext } from "../context/TabContext"
import BillingCyclesForm from "./components/BillingCyclesForm"
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
            <ContentHeader
                title="Ciclos de Pagamentos"
                small="Cadastro"
            ></ContentHeader>
            <Main>
                <Tabs>
                    <TabsHeader>
                        <TabHeader
                            label="Listar"
                            icon="bars"
                            target="tabList"
                        ></TabHeader>
                        <TabHeader
                            label="Incluir"
                            icon="plus"
                            target="tabCreate"
                        ></TabHeader>
                        <TabHeader
                            label="Alterar"
                            icon="pencil"
                            target="tabUpdate"
                        ></TabHeader>
                        <TabHeader
                            label="Excluir"
                            icon="trash-o"
                            target="tabDelete"
                        ></TabHeader>
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id="tabList">
                            <BillingCyclesList></BillingCyclesList>
                        </TabContent>
                        <TabContent id="tabCreate">
                            <BillingCyclesForm></BillingCyclesForm>
                        </TabContent>
                        <TabContent id="tabUpdate">
                            <BillingCyclesForm></BillingCyclesForm>
                        </TabContent>
                        <TabContent id="tabDelete">
                            <BillingCyclesForm></BillingCyclesForm>
                        </TabContent>
                    </TabsContent>
                </Tabs>
            </Main>
        </div>
    )
}
