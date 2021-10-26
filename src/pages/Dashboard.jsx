import ContentHeader from "../common/template/ContentHeader";
import Main from "../common/template/Main";

export default function Dashboard(props) {
    return (
        <div>
            <ContentHeader title="Dashboard" small="versão 1.0"></ContentHeader>
           <Main>
               <h2>Dashboard</h2>
           </Main>
        </div>
    )
}