import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { ApiUrls } from '../constants/Urls';
import { labsFetchData } from '../actions/LabsActions';
import moment from 'moment';

class LabsHistory extends Component {
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
                                dd{el.date}
                                <br/>Labs for:
                                <Link to={`/labs/edit/${el._id}`}>
                                    {moment(el.date).format('MM/DD/YYYY')}
                                </Link>
                            </div>
                        );
                    })
                }
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps labs');
    return {
        labs: state.labs,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        labsFetchData: (url) => dispatch(labsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LabsHistory);