import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        return (
            <div className="col-md-2 sb-fixed">
                <ul className="nav nav-pills nav-stacked">
                    <li className="active">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Profile</a>
                    </li>
                    <li className="disabled">
                        <a href="#">Messages</a>
                    </li>
                    <li className="dropdown pull-right">
                        <a href="#" data-toggle="dropdown" className="dropdown-toggle">Dropdown<strong className="caret"></strong></a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="#">Action</a>
                            </li>
                            <li>
                                <a href="#">Another action</a>
                            </li>
                            <li>
                                <a href="#">Something else here</a>
                            </li>
                            <li className="divider">
                            </li>
                            <li>
                                <a href="#">Separated link</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
};