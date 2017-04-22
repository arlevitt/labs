import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: null
        };
    }

    componentWillMount() {
        if (!this.props.isLoggedIn) {
            return;
        }

        var root = 'https://jsonplaceholder.typicode.com';
        //var self = this;
        axios
            .get(root + '/posts/1')
            .then(response => {
                var objs = [];
                objs.push(response.data);
                this.setState({ articles: objs });
            });
    }

    render() {
        if (!this.props.isLoggedIn) {
            return (
                <Redirect to="/login"/>
            )
        }

        if (!this.state.articles) {
            return (
                <div className="article-preview">Loading...</div>
            );
        }

        if (this.state.articles.length === 0) {
            return (
                <div className="article-preview">
                    No articles are here... yet.
                </div>
            );
        }

        return (
            <div>{this.state.articles[0].title}</div>
        );
    }
};

export default Home