import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div id="login-form" className="container-fluid">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-6">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email"></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password"></input>
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