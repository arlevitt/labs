import React, { Component } from 'react';

class LabsInfusionInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onFieldChange(e);
    }

    render() {
        return <div className="form-group">
            <label className="col-sm-3 control-label">{this.props.label}</label>
            <div className="col-sm-5">
                <input  className="form-control"
                        type={this.props.type}
                        name={this.props.name}
                        placeholder={this.props.label}
                        value={this.props.valueProperty || ''}
                        onChange={this.handleChange} >
                </input>
            </div>
            {
                this.props.showInfusionCheckbox ? (
                    <div className="checkbox-inline">
                        <label>
                            <input type="checkbox"
                                   name={'infused_' + this.props.name}
                                   value={this.props['infused_' + this.props.name] || ''}/> {this.props.showInfusionCheckbox}
                        </label>
                    </div>
                ) : null
            }
        </div>;
    }
}

export default LabsInfusionInput