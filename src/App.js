import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import configureStore from './store/configureStore';

import './App.css';

// import components
import Header from './components/Header';
import Nav from './components/Nav';
import Login from './components/Login';
import Footer from './components/Footer';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import LabsInputForm from './components/LabsInputForm';

const store = configureStore();

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
            selectedTabId: localStorage.getItem('selectedTabId')!= null ? localStorage.getItem('selectedTabId') : '1',
            hasErrored: false,
            isLoading: false,
            items: null
        };

        this.setIsLoggedIn = this.setIsLoggedIn.bind(this);

        //STORE TESTS

        //Log the initial state
        //console.log(store.getState());

        // Every time the state changes, log it
        // Note that subscribe() returns a function for unregistering the listener
        // let unsubscribe = store.subscribe(() =>
        //     console.log(store.getState())
        // );

        // Dispatch some actions
        //store.dispatch(addArticle('add article called'));
        //store.dispatch(getAllArticles('get all articles'));

        //console.log(store.getState());

        // Stop listening to state updates
        //unsubscribe()
        //END STORE TSETS
    }

    setIsLoggedIn(value) {
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
            <Provider store={store}>
                <Router>
                    <div className="container-fluid">
                        <div className="row">
                            <Header isLoggedIn={this.isLoggedIn()} logout={this.setIsLoggedIn} />
                            <Nav isLoggedIn={this.isLoggedIn()} />
                        </div>
                        <div className="row full-height">
                            <div id="main" className="col-md-10">
                                isLoggedIn: {this.isLoggedIn().toString()}
                                <Route exact={true} path="/" component={() => <ArticleList isLoggedIn={this.isLoggedIn()} />} />
                                <Route path="/articles/:articleId?" component={(props, state, params) => <Article isLoggedIn={this.isLoggedIn()} {...props} />} />
                                <Route path="/labs/:labId?" component={(props, state, params) => <LabsInputForm isLoggedIn={this.isLoggedIn()} {...props} />} />
                                <Route path="/login" component={() => <Login isLoggedIn={this.isLoggedIn()} onSubmit={this.setIsLoggedIn} />} />
                            </div>
                        </div>
                        <div className="row">
                            <Footer />
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
};

export default App;
