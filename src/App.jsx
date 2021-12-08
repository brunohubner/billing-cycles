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
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from "./services/api";
import { useEffect } from "react";

export default function App() {
    useEffect(() => {
        // Request to Unidling backend
        api.options()
    }, [])
    return (
        <div className="wrapper">
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
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}