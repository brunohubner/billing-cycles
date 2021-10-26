import Footer from "./common/template/Footer";
import Header from "./common/template/Header";
import SideBar from "./common/template/SideBar";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./common/template/Content";

export default function App() {

    return (
        <div className="wrapper">
            <Router>
                <Header></Header>
                <SideBar></SideBar>
                <Content></Content>
                <Footer></Footer>
            </Router>
        </div>
    )
}