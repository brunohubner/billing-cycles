import Footer from "./common/template/Footer";
import Header from "./common/template/Header";
import SideBar from "./common/template/SideBar";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./common/template/Content";
import SummaryProvider from "./context/SummaryContext";
import TabProvider from "./context/TabContext";
import ListProvider from "./context/ListContext";
import InputProvider from "./context/InputContext";

export default function App() {
    return (
        <div className="wrapper">
            <SummaryProvider>
                <InputProvider>
                    <TabProvider>
                        <ListProvider>
                            <Router>
                                <Header></Header>
                                <SideBar></SideBar>
                                <Content></Content>
                                <Footer></Footer>
                            </Router>
                        </ListProvider>
                    </TabProvider>
                </InputProvider>
            </SummaryProvider>
        </div>
    )
}