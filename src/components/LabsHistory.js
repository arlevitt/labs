import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { ApiUrls } from '../constants/Urls';
import { getLabs } from '../actions/LabsActions';

class LabsHistory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasErrored: false,
            isLoading: false,
            labs: null
        };
    }

    componentWillMount() {
        if (!this.props.isLoggedIn) {
            return;
        }

        this.props.labsFetchData(ApiUrls.LABS);
    }

    render() {
        if (!this.props.isLoggedIn) {
            return (
                <Redirect to="/login"/>
            )
        }

        if (!this.props.labs) {
            return (
                <div className="article-preview">Loading...</div>
            );
        }

        if (this.props.labs.length === 0) {
            return (
                <div className="article-preview">
                    No articles are here... yet.
                </div>
            );
        }

        return (
            <div>
                {
                    this.props.labs.map((el, index) => {
                        return (
                            <div key={index}>
                               dd{el.magnesium}
                            </div>
                        );
                    })
                }
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        labs: state.labs,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        labsFetchData: (url) => dispatch(getLabs(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LabsHistory);