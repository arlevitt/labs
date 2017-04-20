import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <div className="row">
                        <Header />
                        <Nav />
                    </div>
                    <div className="row full-height">
                        <div id="main" className="col-md-10">
                            <Route exact={true} path="/" component={Home} />
                            <Route path="/login" component={Login} />
                        </div>
                    </div>
                    <div className="row">
                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
};

export default App;
