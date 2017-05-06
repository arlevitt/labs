import React, { Component } from 'react';
import moment from 'moment';
import * as inputFieldUtils from '../utils/InputFieldUtils';

class LabsInputField extends Component {
    constructor(props) {
        super(props);

        this.value = '';
        this.rangeClass = 'input-group-addon glyphicon glyphicon-sunglasses icon-transparent';

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(newProps) {
        var value = newProps.defaultValue;
        if (this.props.type === 'date') {
            value = moment(value).format('YYYY-MM-DD');
        }

        this.value = value;
        this.setState({value: value});
        this.checkRange(value);
    }

    handleChange(event) {
        this.props.onFieldChange(event);
        this.value = inputFieldUtils.getFieldValue(event);
        this.checkRange(this.value);
    }

    checkRange(value) {
        if (!this.props.range || value === '') {
            return;
        }

        var parts = this.props.range.split('-');
        var min = parseFloat(parts[0]);
        var max = parseFloat(parts[1]);
        var className = 'input-group-addon glyphicon ';

        if (value < min) {
            this.rangeClass = className + 'glyphicon-triangle-bottom icon-out-of-range';
        } else if (value > max) {
            this.rangeClass = className + 'glyphicon-triangle-top icon-out-of-range';
        } else if ((value >= min) && (value <= max)){
            this.rangeClass = className + 'glyphicon-sunglasses icon-in-range';
        } else {
            this.rangeClass = className + 'glyphicon-sunglasses icon-transparent';
        }
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
                            value={this.value}
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