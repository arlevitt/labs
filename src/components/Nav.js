import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div className="col-md-2 sb-fixed">
                <ul className="nav nav-pills nav-stacked">
                    <li className="active">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <a href="#">Profile</a>
                    </li>
                    <li className="disabled">
                        <a href="#">Messages</a>
                    </li>
                </ul>
            </div>
        );
    }
};