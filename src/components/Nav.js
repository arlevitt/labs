import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tab extends Component {
    render() {
        return (
            <li className={ this.props.isActive ? 'active': '' } onClick={ this.props.onActiveTab }>
                <Link to={this.props.link}>{this.props.text}</Link>
            </li>
        )
    }
}

export default class Nav extends Component {
    constructor(props) {
       super(props);
        this.state = {
            selectedTabId: localStorage.getItem('selectedTabId')!= null ? localStorage.getItem('selectedTabId') : '1'
        };
    }

    isActive(id) {
        return this.state.selectedTabId === id;
    }

    setActiveTab(selectedTabId) {
        localStorage.setItem('selectedTabId', selectedTabId);
        this.setState({selectedTabId: selectedTabId}, function () {
            //alert('new tab id: ' + this.state.selectedTabId);
        });
    }

    render() {
        if (!this.props.isLoggedIn) {
            return null;
        }

        return (
            <div className="col-md-2 sb-fixed">
                <ul className="nav nav-pills nav-stacked">
                    <Tab id="1" text="Article List" link="/" onActiveTab={ this.setActiveTab.bind(this, "1") } isActive={this.isActive("1")}/>
                    <Tab id="2" text="Labs Input" link="/labs" onActiveTab={ this.setActiveTab.bind(this, "2") } isActive={this.isActive("2")}/>
                </ul>
            </div>
        );
    }
};