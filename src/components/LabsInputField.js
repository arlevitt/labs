import React, { Component } from 'react';
import moment from 'moment';

import * as inputFieldUtils from '../utils/InputFieldUtils';

export const RangeCheckResults = {
    LOW:'low',
    HIGH: 'high',
    GOOD: 'good',
    UNCHECKED: 'unchecked'
};

class LabsInputField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.defaultValue
        };

        this.rangeCheck = RangeCheckResults.UNCHECKED;
        this.rangeClass = 'input-group-addon glyphicon glyphicon-sunglasses icon-transparent';

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(newProps) {
        var value = newProps.defaultValue;
        if (this.props.type === 'date') {
            value = moment(value).format('YYYY-MM-DD');
        }
        this.setState({value: value});
        this.checkRange(value);
    }

    handleChange(event) {
        // old change before default value worked
        //this.props.onFieldChange(event, this.props.range);
        //this.checkRange(event);

        var value = inputFieldUtils.getFieldValue(event);
        this.setState({value: value}, function () {
        });

        this.checkRange(value);
    }

    //checkRange(event) {
    checkRange(value) {
        if (!this.props.range || value === '') {
            return;
        }

        //var value = inputFieldUtils.getFieldValue(event);
        var parts = this.props.range.split('-');
        var min = parseFloat(parts[0]);
        var max = parseFloat(parts[1]);
        var className = 'input-group-addon glyphicon ';

        if (value < min) {
            this.rangeCheck = RangeCheckResults.LOW;
            this.rangeClass = className + 'glyphicon-triangle-bottom icon-out-of-range';
        } else if (value > max) {
            this.rangeCheck = RangeCheckResults.HIGH;
            this.rangeClass = className + 'glyphicon-triangle-top icon-out-of-range';
        } else if ((value >= min) && (value <= max)){
            this.rangeCheck = RangeCheckResults.GOOD;
            this.rangeClass = className + 'glyphicon-sunglasses icon-in-range';
        } else {
            this.rangeCheck = RangeCheckResults.UNCHECKED;
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
                            value={this.state.value}
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