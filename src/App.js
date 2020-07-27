import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Escrow from "./pages/Escrow";
import Register from "./pages/Register";
import Form from "./pages/Form";
import Footer from "./components/Footer";

import Web3ContextProvider from "./context/Web3Context";
import AirtableContextProvider from "./context/AirtableContext";

import "./App.css";

class App extends Component {
    componentDidMount() {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");

        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("open");
            links.forEach((link) => {
                link.classList.toggle("fade");
            });
        });
    }

    render() {
        return (
            <div className='main'>
                <Header />
                <Web3ContextProvider>
                    <AirtableContextProvider>
                        <Router>
                            <Switch>
                                <Route path='/' exact>
                                    <Home />
                                </Route>
                                <Route path='/escrow' exact>
                                    <Escrow />
                                </Route>
                                <Route path='/register' exact>
                                    <Register />
                                </Route>
                                <Route path='/form' exact>
                                    <Form />
                                </Route>
                            </Switch>
                        </Router>
                    </AirtableContextProvider>
                </Web3ContextProvider>
                <Footer />
            </div>
        );
    }
}

export default App;
