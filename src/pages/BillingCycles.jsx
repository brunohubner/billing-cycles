import TabHeader from "../common/tab/TabHeader"
import Tabs from "../common/tab/tabs"
import TabsContent from "../common/tab/TabsContent"
import TabsHeader from "../common/tab/TabsHeader"
import ContentHeader from "../common/template/ContentHeader"
import Main from "../common/template/Main"

export default function BillingCycles(props) {
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

                    </TabsContent>
                </Tabs>
            </Main>
        </div>
    )
}