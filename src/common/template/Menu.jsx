import MenuItem from "./MenuItem";
import MenuTree from "./MenuTree";

export default function Menu(props) {
    return (
        <ul className="sidebar-menu">
            <MenuItem 
                path="/" 
                label="Dashboard" 
                icon="dashboard"></MenuItem>
            <MenuTree 
                label="Cadastro"
                icon="edit">
                <MenuItem 
                    path="/billing" 
                    label="Ciclo de Pagamentos"
                    icon="usd" ></MenuItem>
            </MenuTree>
        </ul>
    )
}