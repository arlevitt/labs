import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
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
        axios
            .get(root + '/posts')
            .then(response => {
                var objs = response.data;
                //objs.push(response.data);
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
            <div>
                {
                    this.state.articles.map(article => {
                        return (
                            <div>
                                <Link to={`/articles/${article.id}`} params={{ articleId: '123'}}>{article.title}</Link>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
};

export default Home