import Footer from "./common/template/Footer";
import Header from "./common/template/Header";
import SideBar from "./common/template/SideBar";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./common/template/Content";
import SummaryProvider from "./context/SummaryProvider";

export default function App() {

    return (
        <div className="wrapper">
            <Router>
                <SummaryProvider>
                    <Header></Header>
                    <SideBar></SideBar>
                    <Content></Content>
                    <Footer></Footer>
                </SummaryProvider>
            </Router>
        </div>
    )
}