import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ApiUrls, itemsFetchData } from '../actions/items';

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasErrored: false,
            isLoading: false,
            item: null
        };
    }

    componentWillMount() {
        if (!this.props.isLoggedIn) {
            return;
        }

        this.props.fetchData(ApiUrls.POSTS + '/' + this.props.match.params.articleId);
    }



    render() {
         if (!this.props.item) {
            return (
                <div className="article-preview">Loading article: {this.props.match.params.articleId}...</div>
            );
        }

        return (
            <div>
                <div>isLoggedIn inside Article: {this.props.isLoggedIn.toString()}</div>
                <div>articleId: {this.props.match.params.articleId}</div>
                <div>{this.props.item.title}</div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        item: state.items,
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