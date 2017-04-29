import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { ApiUrls, itemsFetchData } from '../actions/ItemsActions';

class ArticleList extends Component {
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

        this.props.fetchData(ApiUrls.POSTS);
    }

    render() {
        if (!this.props.isLoggedIn) {
            return (
                <Redirect to="/login"/>
            )
        }

        if (!this.props.items) {
            return (
                <div className="article-preview">Loading...</div>
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
                {
                    this.props.items.map(el => {
                        return (
                            <div key={el.id}>
                                <Link to={`/articles/${el.id}`}>{el.title}</Link>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);