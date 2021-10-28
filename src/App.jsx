import Footer from "./common/template/Footer";
import Header from "./common/template/Header";
import SideBar from "./common/template/SideBar";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./common/template/Content";
import SummaryProvider from "./context/SummaryProvider";
import TabProvider from "./context/TabProvider"
import ListProvider from "./context/ListProvider";
import InputProvider from "./context/InputProvider";

export default function App() {
    return (
        <div className="wrapper">
            <SummaryProvider>
                <TabProvider>
                    <ListProvider>
                        <InputProvider>
                            <Router>
                                <Header></Header>
                                <SideBar></SideBar>
                                <Content></Content>
                                <Footer></Footer>
                            </Router>
                        </InputProvider>
                    </ListProvider>
                </TabProvider>
            </SummaryProvider>
        </div>
    )
}