import React, { Component } from 'react';
//import { Route  } from 'react-router-dom'
import axios from 'axios';

class Article extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>isLoggedIn inside Article: {this.props.isLoggedIn.toString()}</div>
                <div>articleId: {this.props.match.params.articleId}</div>
            </div>
        );
    }
};

export default Article;