import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { ApiUrls } from '../constants/Urls';
import { labsFetchData } from '../actions/LabsActions';
import moment from 'moment';

class LabsHistory extends Component {
    componentDidMount() {
        if (!this.props.isLoggedIn) {
            return;
        }

        this.props.dispatch(labsFetchData(ApiUrls.LABS));
    }

    render() {
        if (!this.props.isLoggedIn) {
            return (
                <Redirect to="/login"/>
            )
        }

        if (!this.props.labsHistory) {
            return (
                <div className="article-preview">Loading...</div>
            );
        }

        if (this.props.labsHistory.length === 0) {
            return (
                <div className="article-preview">
                    No articles are here... yet.
                </div>
            );
        }

        return (
            <div>
                {
                    this.props.labsHistory.map((el, index) => {
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
    console.log('mapStateToProps labsHistory');
    return {
        labsHistory: state.labsReducer.labsHistory,
    };
};

export default connect(mapStateToProps)(LabsHistory);