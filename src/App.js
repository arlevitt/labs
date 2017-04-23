import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Login from './components/Login';
import Footer from './components/Footer';
import Home from './components/Home';
import Article from './components/Article';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false
        };

        this.setIsLoggedIn = this.setIsLoggedIn.bind(this);
    }

    setIsLoggedIn(value, route) {
        localStorage.setItem('isLoggedIn', value);
        this.setState({isLoggedIn: value}, function () {
            //alert('logged in:' + this.isLoggedIn());
        });
    }

    isLoggedIn() {
        return this.state.isLoggedIn;
    }

    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <div className="row">
                        <Header isLoggedIn={this.isLoggedIn()} logout={this.setIsLoggedIn} />
                        <Nav isLoggedIn={this.isLoggedIn()} />
                    </div>
                    <div className="row full-height">
                        <div id="main" className="col-md-10">
                            isLoggedIn: {this.isLoggedIn().toString()}
                            <Route exact={true} path="/" component={() => <Home isLoggedIn={this.isLoggedIn()} />} />
                            <Route path="/articles/:articleId" component={(props, state, params) => <Article isLoggedIn={this.isLoggedIn()} {...props} />} />
                            <Route path="/login" component={() => <Login isLoggedIn={this.isLoggedIn()} onSubmit={this.setIsLoggedIn} />} />
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
