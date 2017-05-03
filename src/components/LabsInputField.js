import React, { Component } from 'react';
import * as inputFieldUtils from '../utils/InputFieldUtils';

export const RangeCheckResults = {
    LOW:'low',
    HIGH: 'high',
    GOOD: 'good',
    UNCHECKED: 'unchecked'
}

class LabsInputField extends Component {
    constructor(props) {
        super(props);

        this.rangeCheck = RangeCheckResults.UNCHECKED;
        this.rangeClass = 'input-group-addon glyphicon glyphicon-sunglasses icon-transparent';

        this.handleChange = this.handleChange.bind(this);
        //this.defaultValue = this.props.type === 'date' && this.props.value === undefined ? new Date().toISOString().substring(0, 10) : this.props[this.props.valueProperty]
    }

    handleChange(event) {
        this.props.onFieldChange(event, this.props.range);
        this.checkRange(event);
    }

    checkRange(event) {
        if (!this.props.range) {
            return;
        }

        var value = inputFieldUtils.getFieldValue(event);
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
        // if (this.props.name == 'date') {
        //     alert(this.props.name + ' ' + this.props.defaultValue);
        // }

        // if (this.props.defaultValue) {
        //     alert(this.props.defaultValue);
        //     this.props[this.props.valueProperty] = this.props.defaultValue;
        // }

        return <div>
            <div className="form-inline form-group">
                <label className="col-sm-3 control-label">{this.props.label}</label>
                <div className="col-sm-4 input-group">
                    <input  className="form-control"
                            type={this.props.type}
                            name={this.props.name}
                            placeholder={this.props.range ? "Range: " + this.props.range : this.props.label}
                            value={this.props[this.props.valueProperty]}
                            onChange={this.handleChange}
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

export default LabsInputField