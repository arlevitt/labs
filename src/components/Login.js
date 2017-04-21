import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.isInitialLoad = true;
    }

    handleChange(event) {
        // clears the autofill
        if (this.isInitialLoad) {
            this.isInitialLoad = false;
            return;
        }
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div id="login-form" className="container-fluid">
                <div className="row">
                    <div className="col-sm-2 "></div>
                    <div className="col-sm-6">
                        <div className="col-sm-2 control-label"></div>
                        <div className="col-sm-10">
                            <h1 className="text-center">Sign In</h1>
                            <p className="text-center">Need an account?</p>
                        </div>
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email"
                                           className="form-control"
                                           id="inputEmail"
                                           name="email"
                                           placeholder="Email"
                                           value={this.state.email || ''}
                                           onChange={this.handleChange}>
                                    </input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password"
                                           className="form-control"
                                           id="inputPassword"
                                           name="password"
                                           placeholder="Password"
                                           value={this.state.password || ''}
                                           onChange={this.handleChange}>
                                           </input>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"></input> Remember me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" className="btn btn-default">Sign in</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        );
    }
};

export default Login