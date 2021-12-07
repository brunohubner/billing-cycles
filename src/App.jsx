import "./common/dependencies"
import "./styles/global.css"
import Footer from "./common/template/Footer";
import Header from "./common/template/Header";
import SideBar from "./common/template/SideBar";
import Content from "./common/template/Content";
import AuthOrApp from "./common/AuthOrApp";
import SummaryProvider from "./context/SummaryContext";
import TabProvider from "./context/TabContext";
import ListProvider from "./context/ListContext";
import InputProvider from "./context/InputContext";
import AuthProvider from "./context/AuthContext";
import AuthInputProvider from "./context/AuthInputContext";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
    return (
        <div className="app">
            <AuthInputProvider>
                <AuthProvider>
                    <AuthOrApp>
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
                    </AuthOrApp>
                </AuthProvider>
            </AuthInputProvider>
        </div>
    )
}