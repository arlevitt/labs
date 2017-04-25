import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ApiUrls, itemsFetchData } from '../actions/items';

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasErrored: false,
            isLoading: false,
            items: null
        };
    }

    componentWillMount() {
        if (!this.props.isLoggedIn) {
            return;
        }

        this.props.fetchData(ApiUrls.POSTS + '/' + this.props.match.params.articleId);
    }



    render() {
         if (!this.props.items) {
            return (
                <div className="article-preview">Loading article: {this.props.match.params.articleId}...</div>
            );
        }

        if (this.props.items.length === 0) {
            return (
                <div className="article-preview">
                    No articles are here... yet.
                </div>
            );
        }

        return (
            <div>
                <div>isLoggedIn inside Article: {this.props.isLoggedIn.toString()}</div>
                <div>articleId: {this.props.match.params.articleId}</div>
                <div>{this.props.items[0].title}</div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);