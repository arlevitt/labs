import React, { Component } from 'react';
import InputFieldUtils from '../utils/InputFieldUtils';

class LabsInputField extends Component {
    constructor(props) {
        super(props);

        this.rangeClass = 'input-group-addon glyphicon glyphicon-sunglasses icon-transparent';

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.rangeClass = InputFieldUtils.getCssClass(this.props.range, newProps.value);
    }

    handleChange(event) {
        this.props.onFieldChange(event);
    }

    render() {
        return <div>
            <div className="form-inline form-group">
                <label className="col-sm-3 control-label">{this.props.label}</label>
                <div className="col-sm-4 input-group">
                    <input  className="form-control"
                            type={this.props.type}
                            name={this.props.name}
                            placeholder={this.props.range ? "Range: " + this.props.range : this.props.label}
                            value={this.props.value}
                            onChange={this.handleChange}
                            required={this.props.isRequired || false}
                    />
                    {
                        this.props.type === 'number' ? (
                            <div className={this.rangeClass}></div>
                        ) : null
                    }
                </div>
                {
                    this.props.infusionCheckbox ? (
                            <label className="checkbox-inline">
                                <input type="checkbox"
                                       name={'infused_' + this.props.name}
                                       value={this.props['infused_' + this.props.name] || ''}/> {this.props.infusionCheckbox}
                            </label>
                    ) : null
                }
            </div>
        </div>;
    }
}

export default LabsInputField;